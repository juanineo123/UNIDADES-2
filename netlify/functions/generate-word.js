// Archivo: netlify/functions/generate-word.js (VERSIÓN 1.6 - FLEXIBILIDAD EN SECCIÓN 'PRODUCTO')

const {
    Document,
    Packer,
    Paragraph,
    TextRun,
    Table,
    TableCell,
    TableRow,
    BorderStyle,
    AlignmentType,
    WidthType,
    HeadingLevel,
    VerticalAlign,
} = require("docx");
const sanitizeFilename = (text) => {
    if (!text || typeof text !== 'string') return 'Final';
    return text
        .replace(/[/\\:*?"<>|]/g, '') // Eliminar caracteres inválidos
        .replace(/\s+/g, ' ')
        .trim()
        .substring(0, 100);
};

const parseRuns = (text = "") => {
    if (typeof text !== 'string') return [new TextRun("")];
    const runs = [];
    const parts = text.split(/(\*\*.*?\*\*|\*.*?\*)/g);
    parts.forEach(part => {
        if (part.startsWith('**') && part.endsWith('**')) {
            runs.push(new TextRun({ text: part.slice(2, -2), bold: true }));
        } else if (part.startsWith('*') && part.endsWith('*')) {
            runs.push(new TextRun({ text: part.slice(1, -1), italic: true }));
        } else if (part) {
            runs.push(new TextRun(part));
        }
    });
    return runs;
};

const createBulletedParagraphs = (text = "", alignment = AlignmentType.JUSTIFIED) => {
    // ✅ VALIDACIÓN ROBUSTA
    if (!text || typeof text !== 'string' || text.trim() === '') {
        console.warn("⚠️ createBulletedParagraphs recibió texto vacío");
        return [new Paragraph("")]; // Retornar párrafo vacío en vez de array vacío
    }

    const cleanText = text.replace(/<br\s*\/?>/gi, '\n');

    const result = cleanText.split('\n').map(line => {
        const trimmedLine = line.trim();
        if (!trimmedLine) return null;

        if (trimmedLine.match(/^#+\s/)) {
            return new Paragraph({
                spacing: { before: 200, after: 100 },
                children: [
                    new TextRun({
                        text: trimmedLine.replace(/^#+\s/, '').toUpperCase(),
                        bold: true,
                        color: "44546A"
                    })
                ]
            });
        }

        if (trimmedLine.startsWith('* ') || trimmedLine.startsWith('- ')) {
            return new Paragraph({
                children: parseRuns(trimmedLine.substring(2)),
                bullet: { level: 0 },
                alignment,
                spacing: { after: 100 },
            });
        }

        return new Paragraph({ children: parseRuns(trimmedLine), alignment, spacing: { after: 100 } });
    }).filter(Boolean);

    // ✅ Si después de filtrar no queda nada, retornar párrafo vacío
    if (result.length === 0) {
        return [new Paragraph("")];
    }

    return result;
};
/**
 * Divide el markdown en bloques: headers (###), tablas y texto normal
 */
const splitMarkdownBlocks = (markdown) => {
    if (!markdown || typeof markdown !== 'string') return [];

    const blocks = [];
    const lines = markdown.split('\n');
    let currentBlock = { type: 'text', content: '' };
    let inTable = false;

    lines.forEach(line => {
        // Detectar header (###)
        if (line.trim().match(/^###\s+/)) {
            if (currentBlock.content.trim()) blocks.push(currentBlock);
            blocks.push({
                type: 'heading',
                content: line.replace(/^###\s+/, '').replace(/\*\*/g, '').trim()
            });
            currentBlock = { type: 'text', content: '' };
            inTable = false;
        }
        // Detectar inicio de tabla
        else if (line.includes('|') && !inTable) {
            if (currentBlock.content.trim()) blocks.push(currentBlock);
            currentBlock = { type: 'table', content: line + '\n' };
            inTable = true;
        }
        // Continuar tabla
        else if (line.includes('|') && inTable) {
            currentBlock.content += line + '\n';
        }
        // Fin de tabla
        else if (!line.includes('|') && inTable) {
            if (currentBlock.content.trim()) blocks.push(currentBlock);
            currentBlock = { type: 'text', content: line + '\n' };
            inTable = false;
        }
        // Texto normal
        else {
            currentBlock.content += line + '\n';
        }
    });

    if (currentBlock.content.trim()) blocks.push(currentBlock);
    return blocks;
};

/**
 * Sanitización AGRESIVA de contenido markdown
 * Elimina TODOS los caracteres y patrones problemáticos
 */
const sanitizeMarkdownContent = (markdown) => {
    if (!markdown || typeof markdown !== 'string') {
        return '_Contenido no disponible_';
    }

    let sanitized = markdown;

    // 1. Eliminar caracteres nulos y de control
    sanitized = sanitized.replace(/[\u0000-\u0008\u000B-\u000C\u000E-\u001F\u007F-\u009F]/g, '');

    // 2. Normalizar saltos de línea
    sanitized = sanitized.replace(/\r\n/g, '\n').replace(/\r/g, '\n');

    // 3. Eliminar líneas vacías múltiples (máximo 2 seguidas)
    sanitized = sanitized.replace(/\n{3,}/g, '\n\n');

    // 4. Limpiar pipes dentro de celdas de tabla (excepto los delimitadores)
    // Reemplazar pipes que NO están al inicio/fin de línea
    const lines = sanitized.split('\n');
    sanitized = lines.map(line => {
        if (line.includes('|')) {
            // Si es una línea de tabla, proteger el contenido de las celdas
            const parts = line.split('|');
            return parts.map((part, idx) => {
                // No tocar el primer y último elemento (están vacíos por los pipes delimitadores)
                if (idx === 0 || idx === parts.length - 1) return part;
                // Reemplazar pipes internos en el contenido de la celda
                return part.replace(/\|/g, '│'); // Usar un carácter similar pero seguro
            }).join('|');
        }
        return line;
    }).join('\n');

    // 5. Eliminar HTML peligroso pero mantener <br>
    sanitized = sanitized.replace(/<(?!br\s*\/?>)[^>]+>/gi, '');

    // 6. Normalizar <br> tags
    sanitized = sanitized.replace(/<br\s*\/?>/gi, '<br>');

    // 7. Eliminar espacios excesivos
    sanitized = sanitized.replace(/ {3,}/g, '  ');

    // 8. Truncar contenido excesivamente largo (máximo 50000 caracteres)
    if (sanitized.length > 50000) {
        console.warn('⚠️ Contenido muy largo, truncando...');
        sanitized = sanitized.substring(0, 50000) + '\n\n_[Contenido truncado por seguridad]_';
    }

    // 9. Validar que el contenido resultante no esté vacío
    if (!sanitized.trim()) {
        return '_Contenido vacío después de sanitización_';
    }

    return sanitized;
};


/**
 * Parsea una tabla markdown y retorna TableRow[] para docx
 */
const parseMarkdownTable = (tableMarkdown) => {
    // ✅ VALIDAR entrada
    if (!tableMarkdown || typeof tableMarkdown !== 'string') {
        console.warn("⚠️ parseMarkdownTable recibió contenido inválido");
        return [];
    }

    // Sanitizar el contenido de la tabla primero
    tableMarkdown = sanitizeMarkdownContent(tableMarkdown);

    const lines = tableMarkdown.split('\n').filter(line => line && line.trim().includes('|'));

    // ✅ Si no hay líneas válidas, retornar array vacío
    if (lines.length === 0) {
        console.warn("⚠️ No se encontraron líneas de tabla válidas");
        return [];
    }

    // 🛡️ VALIDAR que todas las filas tengan el mismo número de columnas
    const columnCounts = lines
        .filter(line => !line.includes('---'))
        .map(line => line.split('|').length - 2); // -2 porque hay pipes al inicio y final

    const expectedColumns = columnCounts[0];
    const hasInconsistentColumns = columnCounts.some(count => count !== expectedColumns);

    if (hasInconsistentColumns) {
        console.error('❌ Tabla con número inconsistente de columnas:', columnCounts);
        console.error('Contenido de la tabla:', tableMarkdown);
        // Intentar reparar o retornar tabla de error
        return [new TableRow({
            children: [new TableCell({
                children: [new Paragraph({
                    children: [new TextRun({
                        text: '⚠️ Tabla mal formada - No se pudo procesar',
                        color: 'FF0000',
                        bold: true
                    })]
                })]
            })]
        })];
    }

    return lines.map((line, rowIndex) => {
        if (line.includes('---')) return null; // Saltar línea separadora

        const cells = line.split('|').slice(1, -1).map((cellContent, cellIndex) => {
            const isHeader = rowIndex === 0;

            // 🛡️ TRUNCAR contenido excesivamente largo en celdas
            let cleanContent = cellContent.trim();
            if (cleanContent.length > 5000) {
                console.warn(`⚠️ Contenido muy largo en celda [${rowIndex},${cellIndex}], truncando...`);
                cleanContent = cleanContent.substring(0, 5000) + '...';
            }

            let cellChildren;

            if (isHeader) {
                cellChildren = [new Paragraph({
                    alignment: AlignmentType.CENTER,
                    children: [new TextRun({
                        text: cleanContent.toUpperCase(),
                        bold: true
                    })]
                })];
            } else {
                try {
                    cellChildren = createBulletedParagraphs(cleanContent, AlignmentType.LEFT);
                } catch (error) {
                    console.error(`Error procesando celda [${rowIndex},${cellIndex}]:`, error);
                    cellChildren = [new Paragraph(cleanContent)];
                }
            }

            return new TableCell({
                children: cellChildren.length > 0 ? cellChildren : [new Paragraph("")],
                shading: isHeader ? { fill: "D9E1F2" } : undefined,
                verticalAlign: VerticalAlign.CENTER,
            });
        });

        return new TableRow({ children: cells });
    }).filter(Boolean);
};

exports.handler = async (event) => {
    if (event.httpMethod !== 'POST') {
        return { statusCode: 405, body: 'Method Not Allowed' };
    }

    try {
        // VALIDACIÓN AGREGADA PARA DEBUGGING
        console.log("Event body:", event.body);

        if (!event.body) {
            console.error("No se recibió body en la petición");
            return {
                statusCode: 400,
                body: JSON.stringify({ error: 'No se recibieron datos en la petición' })
            };
        }

        const requestData = JSON.parse(event.body);
        console.log("Parsed data:", requestData);

        const { wizardData, generatedMarkdownContent } = requestData;

        // ✅ VALIDACIÓN CRÍTICA
        if (!wizardData || !wizardData.tituloUnidad) {
            console.error("❌ wizardData incompleto:", wizardData);
            return {
                statusCode: 400,
                body: JSON.stringify({
                    error: 'Datos de la unidad incompletos. Falta título o información básica.'
                })
            };
        }

        if (!generatedMarkdownContent || Object.keys(generatedMarkdownContent).length === 0) {
            console.error("❌ generatedMarkdownContent vacío");
            return {
                statusCode: 400,
                body: JSON.stringify({
                    error: 'No se ha generado contenido para el documento. Por favor, genera la unidad primero.'
                })
            };
        }

        // ✅ VALIDACIÓN: Máximo 2 competencias por área
        if (wizardData.competencias && Array.isArray(wizardData.competencias)) {
            const competenciasPorArea = {};

            wizardData.competencias.forEach(comp => {
                const area = comp.area || wizardData.area;
                if (!competenciasPorArea[area]) competenciasPorArea[area] = 0;
                competenciasPorArea[area]++;
            });

            const areaConExceso = Object.entries(competenciasPorArea).find(([area, count]) => count > 2);

            if (areaConExceso) {
                console.error(`❌ Área "${areaConExceso[0]}" tiene ${areaConExceso[1]} competencias (máximo 2)`);
                return {
                    statusCode: 400,
                    body: JSON.stringify({
                        error: 'Datos inválidos',
                        details: `El área "${areaConExceso[0]}" tiene ${areaConExceso[1]} competencias. El máximo permitido es 2 por área.`
                    })
                };
            }
        }

        let docChildren = [];

        docChildren.push(new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 300 }, children: [new TextRun({ text: "AÑO DE LA RECUPERACIÓN Y CONSOLIDACIÓN DE LA ECONOMÍA PERUANA", bold: true, size: 30 })] }));
        docChildren.push(new Paragraph({ alignment: AlignmentType.CENTER, heading: HeadingLevel.HEADING_1, spacing: { before: 200, after: 400 }, children: [new TextRun({ text: "UNIDAD DE APRENDIZAJE N° 1", bold: true, allCaps: true })] }));

        const unitStructure = [
            { id: 'titulo', title: 'I. TÍTULO DE LA UNIDAD' },
            { id: 'datos', title: 'II. DATOS INFORMATIVOS' },
            { id: 'justificacion', title: 'III. JUSTIFICACIÓN' },
            { id: 'situacion', title: 'IV. SITUACIÓN SIGNIFICATIVA' },
            { id: 'producto', title: 'V. PRODUCTO DE LA UNIDAD' },
            { id: 'proposito', title: 'VI. PROPÓSITO DE LA UNIDAD' },
            { id: 'propositos-aprendizaje', title: 'VII. PROPÓSITOS DE APRENDIZAJE' },
            { id: 'competencias-transversales', title: 'VIII. COMPETENCIAS TRANSVERSALES' },
            { id: 'enfoques-transversales', title: 'IX. ENFOQUES TRANSVERSALES' },
            { id: 'secuencia', title: 'X. SECUENCIA DIDÁCTICA DE LA UNIDAD' },
            { id: 'evaluacion', title: 'XI. EVALUACIÓN' },
            { id: 'recursos', title: 'XII. RECURSOS Y MATERIALES' },
            { id: 'orientaciones', title: 'XIII. ORIENTACIONES PEDAGÓGICAS' },
            { id: 'referencias', title: 'XIV. REFERENCIAS BIBLIOGRÁFICAS' },
        ];

        // Agregar vinculación SOLO si existe
        if (generatedMarkdownContent['vinculacion']) {
            unitStructure.push({ id: 'vinculacion', title: 'XV. VINCULACIÓN INTERDISCIPLINARIA' });
            unitStructure.push({ id: 'firmas', title: 'XVI. CAMPO DE FIRMAS' });
        } else {
            unitStructure.push({ id: 'firmas', title: 'XV. CAMPO DE FIRMAS' });
        }
        // Secciones que son SOLO tablas
        const tableSections = [
            'datos',
            'enfoques-transversales',
            'secuencia',
            'evaluacion'
        ];
        // Secciones con contenido MIXTO
        const mixedSections = ['situacion', 'producto', 'orientaciones', 'referencias', 'vinculacion', 'competencias-transversales', 'propositos-aprendizaje'];

        for (const section of unitStructure) {
            // Agregar título de la sección
            docChildren.push(new Paragraph({
                children: [new TextRun({
                    text: section.title,
                    bold: true,
                    size: 28,
                    color: "2E74B5"
                })],
                spacing: { before: 300, after: 150 },
            }));

            let markdown = generatedMarkdownContent[section.id] || "";

            // ✅ VALIDACIÓN: Si el markdown está vacío o es null, usar mensaje por defecto
            if (!markdown || markdown.trim() === '') {
                console.warn(`⚠️ Sección "${section.id}" tiene contenido vacío`);
                markdown = `_Contenido de ${section.title} no disponible_`;
            }

            // 🛡️ SANITIZACIÓN AGRESIVA del markdown
            try {
                markdown = sanitizeMarkdownContent(markdown);
                console.log(`✅ Sección "${section.id}" sanitizada: ${markdown.length} caracteres`);
            } catch (error) {
                console.error(`❌ Error sanitizando sección "${section.id}":`, error);
                markdown = `_Error procesando ${section.title}_`;
            }

            // CASO 1: Secciones que son SOLO TABLAS
            if (tableSections.includes(section.id) && markdown.includes('|')) {
                const lines = markdown.split('\n').filter(line => line.includes('|'));
                const tableRows = lines.map((line, rowIndex) => {
                    if (line.includes('---')) return null;

                    // ✅ VALIDAR que la línea tenga contenido
                    if (!line || line.trim() === '') return null;

                    const cells = line.split('|').slice(1, -1).map(cellContent => {
                        const isHeader = rowIndex === 0;
                        let cellChildren;

                        if (isHeader) {
                            cellChildren = [new Paragraph({
                                alignment: AlignmentType.CENTER,
                                children: [new TextRun({
                                    text: cellContent.trim().toUpperCase(),
                                    bold: true
                                })]
                            })];
                        } else {
                            cellChildren = createBulletedParagraphs(
                                cellContent.trim(),
                                AlignmentType.LEFT
                            );
                        }

                        return new TableCell({
                            children: cellChildren.length > 0 ? cellChildren : [new Paragraph("")],
                            shading: isHeader ? { fill: "D9E1F2" } : undefined,
                            verticalAlign: VerticalAlign.CENTER,
                        });
                    });

                    return new TableRow({ children: cells });
                }).filter(Boolean);

                // ✅ DOBLE VALIDACIÓN: que existan filas Y que no estén todas vacías
                if (tableRows.length > 0 && tableRows.some(row => row !== null)) {
                    const validRows = tableRows.filter(row => row !== null);
                    if (validRows.length > 0) {
                        docChildren.push(new Table({
                            rows: validRows,
                            width: { size: 100, type: WidthType.PERCENTAGE }
                        }));
                    }
                }
            }

            // CASO 2: Secciones con contenido MIXTO
            // CASO 2: Secciones con contenido MIXTO
            else if (mixedSections.includes(section.id)) {
                try {
                    const blocks = splitMarkdownBlocks(markdown);

                    blocks.forEach((block, blockIndex) => {
                        try {
                            if (block.type === 'heading') {
                                docChildren.push(new Paragraph({
                                    children: [new TextRun({
                                        text: block.content,
                                        bold: true,
                                        size: 24,
                                        color: "44546A"
                                    })],
                                    spacing: { before: 200, after: 100 }
                                }));
                            }
                            else if (block.type === 'table') {
                                const tableRows = parseMarkdownTable(block.content);
                                if (tableRows.length > 0) {
                                    docChildren.push(new Table({
                                        rows: tableRows,
                                        width: { size: 100, type: WidthType.PERCENTAGE }
                                    }));
                                }
                            }
                            else {
                                // Truncar bloques de texto muy largos
                                let textContent = block.content;
                                if (textContent.length > 10000) {
                                    console.warn(`⚠️ Bloque de texto muy largo en ${section.id} (${textContent.length} chars), truncando...`);
                                    textContent = textContent.substring(0, 10000) + '\n\n_[Contenido truncado]_';
                                }
                                docChildren.push(...createBulletedParagraphs(textContent));
                            }
                        } catch (blockError) {
                            console.error(`❌ Error procesando bloque ${blockIndex} de ${section.id}:`, blockError);
                            // Agregar mensaje de error en el documento
                            docChildren.push(new Paragraph({
                                children: [new TextRun({
                                    text: `⚠️ Error procesando contenido del bloque ${blockIndex}`,
                                    color: "FF0000"
                                })]
                            }));
                        }
                    });
                } catch (sectionError) {
                    console.error(`❌ Error crítico en sección ${section.id}:`, sectionError);
                    // Agregar mensaje de error en el documento
                    docChildren.push(new Paragraph({
                        children: [new TextRun({
                            text: `⚠️ Error procesando la sección ${section.title}`,
                            color: "FF0000",
                            bold: true
                        })]
                    }));
                }
            }

            // CASO 3: Sección de FIRMAS
            else if (section.id === 'firmas') {
                const signatureLine = new Paragraph({
                    alignment: AlignmentType.CENTER,
                    children: [new TextRun("__________________________")]
                });

                docChildren.push(new Table({
                    width: { size: 100, type: WidthType.PERCENTAGE },
                    columnWidths: [4250, 500, 4250],
                    borders: {
                        top: { style: BorderStyle.NONE },
                        bottom: { style: BorderStyle.NONE },
                        left: { style: BorderStyle.NONE },
                        right: { style: BorderStyle.NONE },
                        insideHorizontal: { style: BorderStyle.NONE },
                        insideVertical: { style: BorderStyle.NONE }
                    },
                    rows: [
                        new TableRow({
                            children: [
                                new TableCell({ children: [signatureLine], spacing: { after: 100 } }),
                                new TableCell({ children: [] }),
                                new TableCell({ children: [signatureLine] })
                            ]
                        }),
                        new TableRow({
                            children: [
                                new TableCell({
                                    children: [
                                        new Paragraph({
                                            children: [new TextRun(wizardData.docente || '')],
                                            alignment: AlignmentType.CENTER
                                        }),
                                        new Paragraph({
                                            children: [new TextRun({ text: "Docente", bold: true })],
                                            alignment: AlignmentType.CENTER
                                        })
                                    ]
                                }),
                                new TableCell({ children: [] }),  // ⬅️ ESTA ES LA LÍNEA QUE FALTABA
                                new TableCell({
                                    children: [
                                        new Paragraph({
                                            children: [new TextRun(wizardData.director || '')],
                                            alignment: AlignmentType.CENTER
                                        }),
                                        new Paragraph({
                                            children: [new TextRun({ text: "Director/a", bold: true })],
                                            alignment: AlignmentType.CENTER
                                        })
                                    ]
                                })
                            ]
                        })
                    ],
                }));
            }

            // CASO 4: Secciones de TEXTO PLANO
            else {
                docChildren.push(...createBulletedParagraphs(markdown));
            }
        }

        const finalDocChildren = docChildren.filter(Boolean);

        // ✅ VALIDACIÓN FINAL: Verificar que el documento tiene contenido
        if (finalDocChildren.length === 0) {
            console.error("❌ El documento está vacío después de procesar todas las secciones");
            return {
                statusCode: 500,
                body: JSON.stringify({
                    error: 'No se pudo generar el documento. El contenido está vacío.',
                    details: 'Todas las secciones resultaron vacías o inválidas'
                })
            };
        }

        console.log(`✅ Documento generado con ${finalDocChildren.length} elementos`);

        const doc = new Document({
            styles: {
                paragraphStyles: [
                    { id: "Normal", run: { font: "Calibri", size: 22 } }
                ]
            },
            sections: [{
                properties: {
                    page: {
                        margin: {
                            top: 1417,
                            bottom: 1417,
                            left: 1701,
                            right: 1701,
                        }
                    }
                },
                children: finalDocChildren
            }],
        });
        const buffer = await Packer.toBuffer(doc);

        return {
            statusCode: 200,
            headers: {
                'Content-Type': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
                'Content-Disposition': `attachment; filename="Unidad de Aprendizaje - ${sanitizeFilename(wizardData.tituloUnidad || 'Final')}.docx"`
            },
            body: buffer.toString('base64'),
            isBase64Encoded: true,
        };

    } catch (error) {
        console.error("Error en la función generate-word:", error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Hubo un error al crear el documento en el servidor.', details: error.message })
        };
    }
};
