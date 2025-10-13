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
    if (typeof text !== 'string' || !text.trim()) return [];

    const cleanText = text.replace(/<br\s*\/?>/gi, '\n');

    return cleanText.split('\n').map(line => {
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
 * Parsea una tabla markdown y retorna TableRow[] para docx
 */
const parseMarkdownTable = (tableMarkdown) => {
    const lines = tableMarkdown.split('\n').filter(line => line.includes('|'));

    return lines.map((line, rowIndex) => {
        if (line.includes('---')) return null; // Saltar línea separadora

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

        if (!wizardData) {
            console.error("wizardData faltante:", wizardData);
            return {
                statusCode: 400,
                body: JSON.stringify({ error: 'Faltan wizardData en la petición' })
            };
        }

        if (!generatedMarkdownContent) {
            console.error("generatedMarkdownContent faltante:", generatedMarkdownContent);
            return {
                statusCode: 400,
                body: JSON.stringify({ error: 'Faltan generatedMarkdownContent en la petición' })
            };
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

            const markdown = generatedMarkdownContent[section.id] || "";

            // CASO 1: Secciones que son SOLO TABLAS
            if (tableSections.includes(section.id) && markdown.includes('|')) {
                const lines = markdown.split('\n').filter(line => line.includes('|'));
                const tableRows = lines.map((line, rowIndex) => {
                    if (line.includes('---')) return null;

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

                if (tableRows.length > 0) {
                    docChildren.push(new Table({
                        rows: tableRows,
                        width: { size: 100, type: WidthType.PERCENTAGE }
                    }));
                }
            }

            // CASO 2: Secciones con contenido MIXTO
            else if (mixedSections.includes(section.id)) {
                const blocks = splitMarkdownBlocks(markdown);

                blocks.forEach(block => {
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
                        docChildren.push(...createBulletedParagraphs(block.content));
                    }
                });
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
                                        new Paragraph({ text: wizardData.docente || '', alignment: AlignmentType.CENTER }),
                                        new Paragraph({ text: "Docente", alignment: AlignmentType.CENTER, bold: true })
                                    ]
                                }),
                                new TableCell({ children: [] }),
                                new TableCell({
                                    children: [
                                        new Paragraph({ text: wizardData.director || '', alignment: AlignmentType.CENTER }),
                                        new Paragraph({ text: "Director/a", alignment: AlignmentType.CENTER, bold: true })
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
                'Content-Disposition': `attachment; filename="Unidad de Aprendizaje - ${wizardData.tituloUnidad || 'Final'}.docx"`
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
