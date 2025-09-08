// Archivo: netlify/functions/generate-word.js (VERSIÓN CORREGIDA PARA COMPATIBILIDAD)

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

// --- FUNCIONES AUXILIARES (Sin cambios) ---
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

// --- FUNCIÓN PRINCIPAL (Aquí aplicamos la corrección) ---
exports.handler = async (event) => {
    if (event.httpMethod !== 'POST') { return { statusCode: 405, body: 'Method Not Allowed' }; }

    try {
        const { wizardData, generatedMarkdownContent } = JSON.parse(event.body);
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

            const markdown = generatedMarkdownContent[section.id] || "";
            
            const tableSections = ['datos', 'propositos-aprendizaje', 'competencias-transversales', 'evaluacion', 'secuencia', 'producto'];

            if (tableSections.includes(section.id) && markdown.includes('|')) {
                const lines = markdown.split('\n').filter(line => line.includes('|') && !line.includes('---'));
                if (lines.length === 0) continue; // Si no hay líneas válidas, saltar

                // --- CAMBIO CLAVE 1: Calcular el número de columnas basado en la cabecera ---
                const headerCellsCount = lines[0].split('|').slice(1, -1).length;
                let columnWidths = [];
                if (headerCellsCount > 0) {
                    const singleColumnWidth = 100 / headerCellsCount;
                    columnWidths = Array(headerCellsCount).fill(singleColumnWidth);
                }

                const tableRows = lines.map((line, rowIndex) => {
                    const cells = line.split('|').slice(1, -1).map(cellContent => {
                        const isHeader = rowIndex === 0;
                        const cellChildren = isHeader 
                            ? [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: cellContent.trim().toUpperCase(), bold: true })]})]
                            : createBulletedParagraphs(cellContent.trim(), AlignmentType.LEFT);

                        return new TableCell({
                            children: cellChildren.length > 0 ? cellChildren : [new Paragraph("")],
                            shading: isHeader ? { fill: "D9E1F2" } : undefined,
                            verticalAlign: VerticalAlign.CENTER,
                            // --- CAMBIO CLAVE 2: Añadir márgenes a las celdas para mejor espaciado ---
                            margins: { top: 100, bottom: 100, left: 100, right: 100 },
                        });
                    });
                    return new TableRow({ children: cells });
                });
                
                if (tableRows.length > 0) {
                     docChildren.push(new Table({ 
                        rows: tableRows, 
                        width: { size: 100, type: WidthType.PERCENTAGE },
                        // --- CAMBIO CLAVE 3: Aplicar los anchos de columna calculados ---
                        columnWidths: columnWidths,
                    }));
                }

            } else if (section.id === 'firmas') {
                const signatureLine = new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun("__________________________")] });
                docChildren.push(new Table({
                    width: { size: 100, type: WidthType.PERCENTAGE },
                    columnWidths: [4250, 500, 4250],
                    borders: { top: { style: BorderStyle.NONE }, bottom: { style: BorderStyle.NONE }, left: { style: BorderStyle.NONE }, right: { style: BorderStyle.NONE }, insideHorizontal: { style: BorderStyle.NONE }, insideVertical: { style: BorderStyle.NONE } },
                    rows: [
                        new TableRow({ children: [ new TableCell({ children: [signatureLine], spacing: { after: 100 } }), new TableCell({ children: [] }), new TableCell({ children: [signatureLine] }) ]}),
                        new TableRow({ children: [ new TableCell({ children: [new Paragraph({ text: wizardData.docente || '', alignment: AlignmentType.CENTER }), new Paragraph({ text: "Docente", alignment: AlignmentType.CENTER, bold: true })] }), new TableCell({ children: [] }), new TableCell({ children: [new Paragraph({ text: wizardData.director || '', alignment: AlignmentType.CENTER }), new Paragraph({ text: "Director/a", alignment: AlignmentType.CENTER, bold: true })] })]})
                    ],
                }));
            } else {
                 docChildren.push(...createBulletedParagraphs(markdown));
            }
        }
        
        const finalDocChildren = docChildren.filter(Boolean);

        const doc = new Document({
            styles: { paragraphStyles: [{ id: "Normal", run: { font: "Calibri", size: 22 }}]},
            sections: [{ children: finalDocChildren }],
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
            body: JSON.stringify({ error: 'Hubo un error al crear el documento en el servidor.' })
        };
    }
};