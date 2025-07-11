// ===================================================================================
//  FUNCIÓN SERVERLESS (BACKEND): generate-block.js - VERSIÓN CON PROMPT PROFESIONAL
// ===================================================================================
// Esta función se ejecuta en el servidor de Netlify. Es el puente seguro entre
// nuestra aplicación y la API de Google Gemini.
// 1. Recibe los datos de la unidad desde el frontend.
// 2. Construye un prompt específico y detallado para la sección solicitada.
// 3. Llama a la API de Gemini con la API Key (de forma segura).
// 4. Devuelve el contenido generado en formato Markdown al frontend.
// ===================================================================================

require('dotenv').config();
const { GoogleGenerativeAI } = require('@google/generative-ai');

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// === FUNCIÓN PARA CONSTRUIR EL PROMPT ===
const buildPrompt = (blockId, unitData) => {
    const { 
        nivel, grado, area, duracion, competencias, tituloUnidad, temasClave, contexto 
    } = unitData;

    let basePrompt = `Actúa como un experto pedagogo peruano, especialista en el Currículo Nacional de Educación Básica (CNEB). Tu tarea es generar una sección específica para una unidad de aprendizaje. Responde únicamente con el contenido solicitado para la sección, en formato Markdown, usando títulos, listas y tablas si es necesario. Sé conciso y directo. No incluyas el título de la sección en tu respuesta, solo el contenido.`;

    let contextPrompt = `
        **Contexto de la Unidad de Aprendizaje:**
        - **Título:** ${tituloUnidad}
        - **Nivel:** ${nivel}, **Grado:** ${grado}
        - **Área Curricular:** ${area}
        - **Duración:** ${duracion} semana(s)
        - **Competencias Seleccionadas:** ${competencias.join(', ')}
        - **Temas Clave:** ${temasClave}
        - **Realidad de los Estudiantes:** ${contexto || "No se proporcionó un contexto específico."}
    `;

    let instructionPrompt = '';
    switch (blockId) {
        case 'justificacion':
            instructionPrompt = `Genera la **Justificación** de esta unidad. Explica de forma concisa por qué es importante y pertinente para los estudiantes.`;
            break;
        case 'situacion':
            instructionPrompt = `Crea una **Situación Significativa** que sea retadora y realista para los estudiantes, basándote en su contexto. Debe conectar claramente con los temas clave y las competencias.`;
            break;
        case 'producto':
            instructionPrompt = `Describe el **Producto** final de la unidad. Debe ser un producto tangible o actuación compleja que demuestre las competencias.`;
            break;
        case 'proposito':
            instructionPrompt = `Redacta el **Propósito de la Unidad** de manera clara y concisa.`;
            break;
        case 'propositos-aprendizaje':
            // *** SOLUCIÓN: Se pide una lista Markdown estándar (con guiones) en lugar de emojis. ***
            instructionPrompt = `Genera los **Propósitos de Aprendizaje**. Crea una tabla en Markdown con CUATRO columnas: 'Competencias', 'Capacidades', 'Desempeños Precisados' y 'Evidencias de Aprendizaje'.
- En la columna 'Competencias', pon solo el nombre de la competencia.
- En la columna 'Capacidades', crea una lista Markdown usando guiones ('- '). Cada ítem de la lista debe ser una capacidad de la competencia.
- En la columna 'Desempeños Precisados', crea una lista Markdown usando guiones ('- '). Cada ítem debe ser un desempeño clave y contextualizado.
- En la columna 'Evidencias de Aprendizaje', describe la evidencia principal.
Sé muy conciso en los textos.`;
            break;
        case 'competencias-transversales':
            instructionPrompt = `Genera el contenido para **Competencias y Enfoques Transversales**. Primero, crea un subtítulo 'Competencias Transversales' y en una tabla, justifica cómo se promoverán. Segundo, crea un subtítulo 'Enfoques Transversales' y en una tabla, describe qué enfoques se trabajarán y qué valores demostrarán los estudiantes.`;
            break;
        case 'secuencia':
            instructionPrompt = `Genera la **Secuencia Didáctica** en una tabla Markdown. Debe tener ${duracion} fila(s), una por cada semana. Las columnas deben ser: 'Semana', 'Título de la Actividad', 'Propósito de la Actividad' y 'Competencia Principal'.`;
            break;
        case 'evaluacion':
            instructionPrompt = `Detalla la **Evaluación**. Crea una tabla Markdown con dos columnas: 'Evidencias de Aprendizaje' e 'Instrumentos de Evaluación'.`;
            break;
        case 'recursos':
            instructionPrompt = `Lista los **Recursos y Materiales** necesarios. Organízalos en tres categorías: 'Para el docente', 'Para el estudiante' y 'Recursos tecnológicos'.`;
            break;
        default:
            instructionPrompt = `Genera contenido relevante para la sección solicitada.`;
    }

    return `${basePrompt}\n\n${contextPrompt}\n\n**Instrucción Específica:**\n${instructionPrompt}`;
};


// === HANDLER DE LA FUNCIÓN SERVERLESS ===
exports.handler = async (event) => {
    if (event.httpMethod !== 'POST') {
        return { statusCode: 405, body: 'Method Not Allowed' };
    }

    try {
        const { blockId, unitData } = JSON.parse(event.body);

        if (!blockId || !unitData) {
            return { statusCode: 400, body: JSON.stringify({ message: 'Faltan datos en la solicitud.' }) };
        }

        const prompt = buildPrompt(blockId, unitData);

        const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });

        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();

        return {
            statusCode: 200,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ content: text }),
        };

    } catch (error) {
        console.error("Error en la función serverless:", error);
        return {
            statusCode: 500,
            body: JSON.stringify({ message: 'Error al contactar la API de Gemini.', error: error.message }),
        };
    }
};
