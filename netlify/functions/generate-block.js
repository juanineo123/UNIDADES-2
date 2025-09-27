// ===================================================================================
//  FUNCIÓN SERVERLESS (BACKEND): generate-block.js
//  VERSIÓN HIPER-OPTIMIZADA PARA EL LÍMITE DE 10 SEGUNDOS DE NETLIFY FREE TIER
// ===================================================================================

require('dotenv').config();
const { GoogleGenerativeAI } = require('@google/generative-ai');

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// --- (Las funciones parseListToJSON y buildPromptPaso1 no necesitan cambios) ---
const parseListToJSON = (text) => {
    const lines = text.split('\n').filter(line => line.trim() !== '');
    const result = [];
    let currentCompetencia = null;
    lines.forEach(line => {
        const trimmedLine = line.trim();
        if (!trimmedLine.startsWith('-') && !trimmedLine.startsWith('*')) {
            currentCompetencia = { competencia: trimmedLine, capacidades: [] };
            result.push(currentCompetencia);
        } else if ((trimmedLine.startsWith('-') || trimmedLine.startsWith('*')) && currentCompetencia) {
            const capacidad = trimmedLine.substring(1).trim();
            currentCompetencia.capacidades.push(capacidad);
        }
    });
    return result;
};

const buildPromptPaso1 = (unitData) => {
    const { nivel, grado, area, competencias } = unitData;
    return `
Actúa como un experto pedagogo peruano (CNEB).
**Contexto:**
- Nivel: ${nivel}, Grado: ${grado}, Área: ${area}, Competencias: ${competencias.join(', ')}
**Instrucción:**
Devuelve ÚNICAMENTE una lista de texto simple. NO USES JSON. NO USES COMILLAS. NO AÑADAS TEXTO EXTRA.
**Formato Exacto de Ejemplo:**
Construye su identidad
- Se valora a sí mismo
- Autorregula sus emociones
Convive y participa democráticamente
- Interactúa con todas las personas
- Construye normas
`;
};


/**
 * (OPTIMIZACIÓN EXTREMA) Prompt para el PASO 2. Obliga a la IA a ser brutalmente breve.
 */
const buildPromptPaso2 = (unitData, estructuraJson) => {
    const { nivel, grado, area, tituloUnidad, temasClave } = unitData;
    return `
Actúa como un experto pedagogo peruano (CNEB). Tu única tarea es completar la tabla Markdown que te pido.
**Contexto:**
- Título: ${tituloUnidad}, Nivel: ${nivel}, Grado: ${grado}, Área: ${area}, Temas: ${temasClave}
**Estructura Base:**
${JSON.stringify(estructuraJson, null, 2)}

**Instrucción Específica e Innegociable:**
Genera una tabla Markdown con las columnas 'Competencias', 'Capacidades', 'Desempeños Precisados' y 'Evidencias de Aprendizaje'.
- **Sé BRUTALMENTE BREVE.** Tu prioridad es la velocidad.
- Para 'Desempeños Precisados', escribe **UN SOLO desempeño, el más importante, por cada capacidad. Debe ser una única frase corta.**
- Para 'Evidencias de Aprendizaje', escribe **solo el nombre de la evidencia en 2 o 3 palabras** (Ej: 'Mapa conceptual', 'Exposición oral', 'Ficha de trabajo').
`;
};


/**
 * (MODIFICADO) Prompt principal con optimización para 'competencias-transversales'.
 */
const buildPrompt = (blockId, unitData) => {
    const { nivel, grado, area, duracion, competencias, tituloUnidad, temasClave, contexto } = unitData;
    let basePrompt = `Actúa como un experto pedagogo peruano (CNEB). Tu tarea es generar una sección para una unidad de aprendizaje. Responde únicamente con el contenido solicitado, en formato Markdown. Sé extremadamente conciso y directo para responder en menos de 5 segundos.`;
    let contextPrompt = `**Contexto:** Título: ${tituloUnidad}, Nivel: ${nivel}, Grado: ${grado}, Área: ${area}, Duración: ${duracion} semanas, Temas: ${temasClave}`;

    let instructionPrompt = '';
    switch (blockId) {
        // ... (casos 'justificacion', 'situacion', 'producto', 'proposito' sin cambios)
        case 'justificacion': instructionPrompt = `Genera la **Justificación** de esta unidad. Explica en 2 o 3 frases por qué es importante.`; break;
        case 'situacion': instructionPrompt = `Crea una **Situación Significativa** que sea retadora y realista. Máximo 3 frases.`; break;
        case 'producto': instructionPrompt = `Describe el **Producto** final de la unidad en una sola frase.`; break;
        case 'proposito': instructionPrompt = `Redacta el **Propósito de la Unidad** en una sola frase clara.`; break;

        /**
         * --- OPTIMIZACIÓN: Se elimina la tabla y se piden listas simples para velocidad ---
         * Este era el otro punto que daba error. Ahora es mucho más rápido.
         */
        case 'competencias-transversales':
            instructionPrompt = `Genera el contenido para **Competencias y Enfoques Transversales**. NO USES TABLAS. Responde con dos listas de viñetas simples y muy cortas.
La primera, bajo el subtítulo \`### Competencias Transversales\`, donde solo mencionas la competencia y una acción clave (Ej: \`* Gestiona su aprendizaje...: Define metas de aprendizaje.\`).
La segunda, bajo el subtítulo \`### Enfoques Transversales\`, donde solo mencionas el enfoque y un valor clave (Ej: \`* Enfoque Inclusivo: Respeto por las diferencias.\`).
Sé extremadamente conciso.`;
            break;

        // ... (resto de los casos sin cambios significativos)
        case 'secuencia': instructionPrompt = `Genera la **Secuencia Didáctica** en una tabla Markdown. Debe tener ${duracion} fila(s). Sé muy breve en las descripciones.`; break;
        case 'evaluacion': instructionPrompt = `Detalla la **Evaluación**. Crea una tabla Markdown con dos columnas: 'Evidencias de Aprendizaje' e 'Instrumentos de Evaluación'. Solo nombra los elementos.`; break;
        case 'recursos': instructionPrompt = `Lista los **Recursos y Materiales** necesarios. Solo los nombres, sin descripciones.`; break;
        default: instructionPrompt = `Genera contenido relevante para la sección solicitada.`;
    }

    return `${basePrompt}\n\n${contextPrompt}\n\n**Instrucción Específica:**\n${instructionPrompt}`;
};


// ===================================================================================
//  HANDLER DE LA FUNCIÓN SERVERLESS (MODIFICADO)
// ===================================================================================
exports.handler = async (event) => {
    if (event.httpMethod !== 'POST') { return { statusCode: 405, body: 'Method Not Allowed' }; }

    try {
        const { blockId, unitData } = JSON.parse(event.body);
        if (!blockId || !unitData) { return { statusCode: 400, body: JSON.stringify({ message: 'Faltan datos.' }) }; }

        // --- CAMBIO DE MODELO: Volvemos a Flash para MÁXIMA VELOCIDAD ---
        // LÍNEA NUEVA Y CORRECTA:
        const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash-lite" });
        let finalContent = '';

        if (blockId === 'propositos-aprendizaje') {
            const promptPaso1 = buildPromptPaso1(unitData);
            const resultPaso1 = await model.generateContent(promptPaso1);
            const textPaso1 = resultPaso1.response.text();

            const estructuraJson = parseListToJSON(textPaso1);
            if (!estructuraJson || estructuraJson.length === 0) { throw new Error("Paso 1 falló al procesar la lista."); }

            const promptPaso2 = buildPromptPaso2(unitData, estructuraJson);
            const resultPaso2 = await model.generateContent(promptPaso2);
            finalContent = resultPaso2.response.text();
        } else {
            const prompt = buildPrompt(blockId, unitData);
            const result = await model.generateContent(prompt);
            finalContent = result.response.text();
        }

        return {
            statusCode: 200,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ content: finalContent }),
        };
    } catch (error) {
        console.error("Error en la función serverless:", error.message);
        return {
            statusCode: 500,
            body: JSON.stringify({ message: 'Error al contactar la API de Gemini.', error: error.message }),
        };
    }
};