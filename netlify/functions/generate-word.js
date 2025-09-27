const {
    Document, Packer, Paragraph, TextRun, HeadingLevel, Table, TableRow, TableCell,
    WidthType, AlignmentType, VerticalAlign, ShadingType, BorderStyle
} = require("docx");

// --- Constantes y Funciones Auxiliares ---
const TABLE_WIDTH_DXA = 9360;
const createSectionTitle = (text) => new Paragraph({ children: [new TextRun({ text, bold: true, size: 24, font: "Calibri" })], heading: HeadingLevel.HEADING_2, spacing: { before: 400, after: 200 } });
const parseMarkdownToTextRuns = (text = "") => {
    if (typeof text !== 'string') text = '';
    const runs = []; const parts = text.split(/(\*\*.*?\*\*|\*.*?\*)/g);
    parts.forEach(part => {
        if (part.startsWith('**') && part.endsWith('**')) runs.push(new TextRun({ text: part.slice(2, -2), bold: true }));
        else if (part.startsWith('*') && part.endsWith('*')) runs.push(new TextRun({ text: part.slice(1, -1), italic: true }));
        else if (part) runs.push(new TextRun(part));
    });
    return runs;
};
const createFormattedParagraphs = (text = "") => {
    if (!text || typeof text !== 'string' || text.trim() === "") return [new Paragraph({ text: "" })];
    const paragraphOptions = { alignment: AlignmentType.JUSTIFIED, spacing: { after: 100 } };
    return text.split('\n').map(line => {
        const trimmedLine = line.trim();
        if (trimmedLine.startsWith('### ')) {
             return new Paragraph({ children: [new TextRun({ text: trimmedLine.substring(4), bold: true, size: 22 })], spacing: { before: 200, after: 100 } });
        }
        if (trimmedLine.startsWith('* ') || trimmedLine.startsWith('• ') || trimmedLine.startsWith('- ')) {
            return new Paragraph({ ...paragraphOptions, children: parseMarkdownToTextRuns(trimmedLine.substring(2)), bullet: { level: 0 } });
        }
        return new Paragraph({ ...paragraphOptions, children: parseMarkdownToTextRuns(trimmedLine) });
    });
};
const createTableFromMarkdown = (markdownText = "") => {
    if (!markdownText || typeof markdownText !== 'string' || !markdownText.includes('|')) return createFormattedParagraphs(markdownText);
    const lines = markdownText.trim().split('\n').filter(line => line.includes('|'));
    if (lines.length < 2) return createFormattedParagraphs(markdownText);
    const getCells = (line) => line.split('|').slice(1, -1).map(cell => cell.trim());
    const headerCells = getCells(lines[0]);
    const tableRowsData = lines.slice(2).map(line => getCells(line));
    const cellMargins = { top: 100, bottom: 100, left: 100, right: 100 };
    const columnCount = headerCells.length > 0 ? headerCells.length : 1;
    const columnDxaWidth = Math.floor(TABLE_WIDTH_DXA / columnCount);
    const calculatedColumnWidths = Array(columnCount).fill(columnDxaWidth);
    return new Table({
        width: { size: TABLE_WIDTH_DXA, type: WidthType.DXA },
        columnWidths: calculatedColumnWidths,
        rows: [
            new TableRow({ tableHeader: true, children: headerCells.map(headerText => new TableCell({ children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: headerText, bold: true, allCaps: true, size: 22 })] })], verticalAlign: VerticalAlign.CENTER, margins: cellMargins, shading: { fill: "E8EAF6", type: ShadingType.CLEAR } })) }),
            ...tableRowsData.map(row => new TableRow({ children: row.map(cellText => new TableCell({ children: createFormattedParagraphs(cellText), verticalAlign: VerticalAlign.CENTER, margins: cellMargins })) })),
        ],
    });
};

// ===================================================================================
//  HANDLER PRINCIPAL (VERSIÓN FINAL CORREGIDA)
// ===================================================================================
exports.handler = async (event) => {
    if (event.httpMethod !== 'POST') {
        return { statusCode: 405, body: 'Method Not Allowed' };
    }
    try {
        // --- AQUÍ ESTÁ LA CORRECCIÓN ---
        // Se añade un valor por defecto `{}` para `generatedContent` para evitar el error.
        const { formData, generatedContent = {} } = JSON.parse(event.body);
        const fechaActual = new Date().toLocaleDateString('es-PE', { year: 'numeric', month: 'long', day: 'numeric' });

        const doc = new Document({
            styles: { paragraphStyles: [{ id: "Normal", name: "Normal", run: { font: "Calibri", size: 22 } }] },
            sections: [{
                properties: { page: { margin: { top: 1440, right: 1440, bottom: 1440, left: 1440 } } },
                children: [
                    // --- TÍTULO Y DATOS GENERALES DE LA UNIDAD ---
                    new Paragraph({ heading: HeadingLevel.TITLE, alignment: AlignmentType.CENTER, spacing: { after: 300 }, children: [new TextRun({ text: `UNIDAD DE APRENDIZAJE: "${formData.tituloUnidad}"`, bold: true, allCaps: true, size: 36 })] }),
                    createSectionTitle("I. DATOS GENERALES"),
                    new Table({
                        width: { size: TABLE_WIDTH_DXA, type: WidthType.DXA },
                        columnWidths: [Math.floor(TABLE_WIDTH_DXA * 0.3), Math.floor(TABLE_WIDTH_DXA * 0.7)],
                        rows: [
                            new TableRow({ children: [new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "Docente:", bold: true })] })] }), new TableCell({ children: [new Paragraph(formData.docente || '')] })] }),
                            new TableRow({ children: [new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "Grado y Nivel:", bold: true })] })] }), new TableCell({ children: [new Paragraph(`${formData.grado || ''} - ${formData.nivel || ''}`)] })] }),
                            new TableRow({ children: [new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "Área:", bold: true })] })] }), new TableCell({ children: [new Paragraph(formData.area || '')] })] }),
                            new TableRow({ children: [new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "Fecha:", bold: true })] })] }), new TableCell({ children: [new Paragraph(fechaActual)] })] }),
                            new TableRow({ children: [new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "Duración:", bold: true })] })] }), new TableCell({ children: [new Paragraph(`${formData.duracion || ''} semanas`)] })] }),
                        ],
                    }),

                    // --- SECCIONES GENERADAS POR LA IA ---
                    createSectionTitle("II. JUSTIFICACIÓN"),
                    ...createFormattedParagraphs(generatedContent.justificacion || "No generado."),

                    createSectionTitle("III. SITUACIÓN SIGNIFICATIVA"),
                    ...createFormattedParagraphs(generatedContent.situacion || "No generado."),
                    
                    createSectionTitle("IV. PROPÓSITO DE LA UNIDAD"),
                    ...createFormattedParagraphs(generatedContent.proposito || "No generado."),

                    createSectionTitle("V. PROPÓSITOS DE APRENDIZAJE"),
                    createTableFromMarkdown(generatedContent['propositos-aprendizaje'] || "No generado."),

                    createSectionTitle("VI. COMPETENCIAS Y ENFOQUES TRANSVERSALES"),
                    ...createFormattedParagraphs(generatedContent['competencias-transversales'] || "No generado."),

                    createSectionTitle("VII. PRODUCTO DE LA UNIDAD"),
                    ...createFormattedParagraphs(generatedContent.producto || "No generado."),
                    
                    createSectionTitle("VIII. SECUENCIA DIDÁCTICA"),
                    createTableFromMarkdown(generatedContent.secuencia || "No generado."),
                    
                    createSectionTitle("IX. EVALUACIÓN"),
                    createTableFromMarkdown(generatedContent.evaluacion || "No generado."),

                    createSectionTitle("X. RECURSOS Y MATERIALES"),
                    ...createFormattedParagraphs(generatedContent.recursos || "No generado."),
                    
                    // --- SECCIÓN DE FIRMAS ---
                    createSectionTitle("XI. FIRMAS"),
                    new Table({
                        width: { size: TABLE_WIDTH_DXA, type: WidthType.DXA },
                        columnWidths: [Math.floor(TABLE_WIDTH_DXA * 0.45), Math.floor(TABLE_WIDTH_DXA * 0.1), Math.floor(TABLE_WIDTH_DXA * 0.45)],
                        borders: { top: { style: BorderStyle.NONE }, bottom: { style: BorderStyle.NONE }, left: { style: BorderStyle.NONE }, right: { style: BorderStyle.NONE }, insideHorizontal: { style: BorderStyle.NONE }, insideVertical: { style: BorderStyle.NONE } },
                        rows: [
                            new TableRow({ children: [new TableCell({ children: [new Paragraph({ text: "\n\n__________________________", alignment: AlignmentType.CENTER })] }), new TableCell({ children: [] }), new TableCell({ children: [new Paragraph({ text: "\n\n__________________________", alignment: AlignmentType.CENTER })] })] }),
                            new TableRow({ children: [new TableCell({ children: [new Paragraph({ text: formData.docente || '', alignment: AlignmentType.CENTER }), new Paragraph({ text: "Docente", alignment: AlignmentType.CENTER })] }), new TableCell({ children: [] }), new TableCell({ children: [new Paragraph({ text: formData.director || '', alignment: AlignmentType.CENTER }), new Paragraph({ text: "Director(a)", alignment: AlignmentType.CENTER })] })] }),
                        ],
                    }),
                ],
            }],
        });
        
        const safeFileName = (formData.tituloUnidad || "unidad_de_aprendizaje").replace(/[^a-z0-9áéíóúñü \.,_-]/gim, '').trim().replace(/\s+/g, '_');
        const buffer = await Packer.toBuffer(doc);
        return {
            statusCode: 200,
            headers: { 'Content-Type': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'Content-Disposition': `attachment; filename="${safeFileName}.docx"` },
            body: buffer.toString('base64'),
            isBase64Encoded: true,
        };
    } catch (error) {
        console.error("Error al generar el documento de Word:", error);
        return { statusCode: 500, body: JSON.stringify({ error: 'Hubo un error al crear el documento.', details: error.message }) };
    }
};