/**
 * ===================================================================================
 * generate-word.js - El Arquitecto del Documento .docx (VERSIÓN MÓDULO)
 * ===================================================================================
 * REESTRUCTURADO COMO MÓDULO DE JAVASCRIPT (ESM).
 * Ya no depende del 'window' global. Ahora exporta una función que recibe
 * las herramientas de 'docx' como un argumento, haciéndolo 100% predecible.
 * ===================================================================================
 */

// La palabra 'export' convierte esta función en un módulo que puede ser importado desde otros archivos.
export async function generateWordDocument(docx, wizardData, generatedMarkdown) {
    // Las herramientas se extraen directamente del objeto 'docx' que se pasa como argumento.
    const { Document, Packer, Paragraph, TextRun, Table, TableCell, TableRow, BorderStyle, AlignmentType, WidthType } = docx;

    console.log("Arquitecto (Módulo): Herramientas recibidas. Iniciando construcción.");

    const docChildren = [];

    const unitStructure = [
        { id: 'titulo', title: 'I. TÍTULO DE LA UNIDAD' },
        { id: 'datos', title: 'II. DATOS INFORMATIVOS' },
        { id: 'justificacion', title: 'III. JUSTIFICACIÓN' },
        { id: 'situacion', title: 'IV. SITUACIÓN SIGNIFICATIVA' },
        { id: 'producto', title: 'V. PRODUCTO DE LA UNIDAD' },
        { id: 'proposito', title: 'VI. PROPÓSITO DE LA UNIDAD' },
        { id: 'propositos-aprendizaje', title: 'VII. PROPÓSITOS DE APRENDIZAJE' },
        { id: 'competencias-transversales', title: 'VIII. COMPETENCIAS Y ENFOQUES TRANSVERSALES' },
        { id: 'secuencia', title: 'IX. SECUENCIA DIDÁCTICA DE LA UNIDAD' },
        { id: 'evaluacion', title: 'X. EVALUACIÓN' },
        { id: 'recursos', title: 'XI. RECURSOS Y MATERIALES' },
        { id: 'firmas', title: 'XII. CAMPO DE FIRMAS' },
    ];

    for (const section of unitStructure) {
        docChildren.push(new Paragraph({
            children: [new TextRun({ text: section.title, bold: true, size: 24, color: "2E74B5" })],
            spacing: { before: 300, after: 150 },
        }));

        const markdown = generatedMarkdown[section.id] || "";

        switch (section.id) {
            case 'datos':
            case 'propositos-aprendizaje':
            case 'competencias-transversales':
            case 'evaluacion':
                const tableRows = markdown.split('\n').filter(line => line.includes('|')).map((line, rowIndex) => {
                    if (line.includes('---')) return null;
                    const cells = line.split('|').filter(c => c.trim() !== '').map(cellContent => {
                        const isHeader = rowIndex === 0 || cellContent.includes('**');
                        return new TableCell({
                            children: [new Paragraph({
                                children: [new TextRun({ text: cellContent.replace(/\*\*/g, '').trim(), bold: isHeader })]
                            })],
                            shading: isHeader ? { fill: "D9E1F2" } : undefined,
                        });
                    });
                    return new TableRow({ children: cells });
                }).filter(row => row !== null);
                if(tableRows.length > 0) {
                    docChildren.push(new Table({ rows: tableRows, width: { size: 100, type: WidthType.PERCENTAGE } }));
                }
                break;

            case 'firmas':
                docChildren.push(new Table({
                    columnWidths: [4500, 4500],
                    rows: [
                        new TableRow({
                            children: [
                                new TableCell({
                                    children: [
                                        new Paragraph({ text: " ", border: { bottom: { style: BorderStyle.SINGLE, size: 1, color: "000000" } }, spacing: { after: 200 } }),
                                        new Paragraph({ text: wizardData.docente, alignment: AlignmentType.CENTER }),
                                        new Paragraph({ text: "Docente", bold: true, alignment: AlignmentType.CENTER }),
                                    ],
                                    borders: { top: { style: BorderStyle.NONE }, bottom: { style: BorderStyle.NONE }, left: { style: BorderStyle.NONE }, right: { style: BorderStyle.NONE } },
                                }),
                                new TableCell({
                                    children: [
                                        new Paragraph({ text: " ", border: { bottom: { style: BorderStyle.SINGLE, size: 1, color: "000000" } }, spacing: { after: 200 } }),
                                        new Paragraph({ text: wizardData.director, alignment: AlignmentType.CENTER }),
                                        new Paragraph({ text: "Director/a", bold: true, alignment: AlignmentType.CENTER }),
                                    ],
                                    borders: { top: { style: BorderStyle.NONE }, bottom: { style: BorderStyle.NONE }, left: { style: BorderStyle.NONE }, right: { style: BorderStyle.NONE } },
                                }),
                            ],
                        }),
                    ],
                    borders: { top: { style: BorderStyle.NONE }, bottom: { style: BorderStyle.NONE }, left: { style: BorderStyle.NONE }, right: { style: BorderStyle.NONE } },
                }));
                break;

            default:
                const lines = markdown.split('\n');
                lines.forEach(line => {
                    if (line.startsWith('### ')) {
                        docChildren.push(new Paragraph({
                            children: [new TextRun({ text: line.replace('### ', ''), bold: true, size: 24 })],
                            spacing: { after: 100 },
                        }));
                    } else if (line.startsWith('* ') || line.startsWith('- ')) {
                        docChildren.push(new Paragraph({
                            text: line.replace(/(\* |- )/, ''),
                            bullet: { level: 0 },
                            alignment: AlignmentType.JUSTIFIED,
                        }));
                    } else if (line.trim() !== '') {
                        docChildren.push(new Paragraph({
                            children: [new TextRun(line)],
                            alignment: AlignmentType.JUSTIFIED,
                        }));
                    }
                });
                break;
        }
    }

    const doc = new Document({
        sections: [{
            headers: {
                default: new Paragraph({
                    alignment: AlignmentType.CENTER,
                    children: [
                        new TextRun({
                            text: '"AÑO DEL BICENTENARIO, DE LA CONSOLIDACIÓN DE NUESTRA INDEPENDENCIA, Y DE LA CONMEMORACIÓN DE LAS HEROICAS BATALLAS DE JUNÍN Y AYACUCHO"',
                            size: 22,
                        }),
                    ],
                }),
            },
            children: docChildren,
        }],
    });

    try {
        const blob = await Packer.toBlob(doc);
        // 'saveAs' es global gracias a la librería FileSaver, por lo que no necesita ser importado aquí.
        saveAs(blob, `Unidad de Aprendizaje - ${wizardData.tituloUnidad || 'Sin Titulo'}.docx`);
        console.log("Arquitecto (Módulo): Documento .docx construido y listo para descargar.");
    } catch (err) {
        console.error("Arquitecto (Módulo): Error al generar el blob del documento:", err);
    }
}