// ===================================================================================
//  FUNCIÓN SERVERLESS (BACKEND): generate-block.js
//  VERSIÓN MODIFICADA CON LÓGICA DE 2 PASOS PARA 'propositos-aprendizaje'
// ===================================================================================

require('dotenv').config();
const { GoogleGenerativeAI } = require('@google/generative-ai');

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// ===================================================================================
//  SECCIÓN DE PROMPTS
// ===================================================================================

/**
 * (NUEVO) Prompt para el PASO 1 de 'propositos-aprendizaje'
 * Obtiene solo la estructura de competencias y capacidades.
 */
const buildPromptPaso1 = (unitData) => {
    const { nivel, grado, area, competencias } = unitData;

    return `
Actúa como un experto pedagogo peruano (CNEB).
**Contexto:**
- Nivel: ${nivel}, Grado: ${grado}
- Área Curricular: ${area}
- Competencias Seleccionadas: ${competencias.join(', ')}

**Instrucción:**
Devuelve ÚNICAMENTE un objeto JSON. No incluyas texto antes o después.
El JSON debe ser un array donde cada objeto contiene la competencia y una lista de sus capacidades.
Formato de ejemplo:
[
  {
    "competencia": "Construye su identidad",
    "capacidades": ["Se valora a sí mismo", "Autorregula sus emociones"]
  }
]
`;
};

/**
 * (NUEVO) Prompt para el PASO 2 de 'propositos-aprendizaje'
 * Recibe la estructura del Paso 1 y genera la tabla completa.
 */
const buildPromptPaso2 = (unitData, estructuraJson) => {
    const { nivel, grado, area, tituloUnidad, temasClave } = unitData;

    return `
Actúa como un experto pedagogo peruano (CNEB).
**Contexto de la Unidad:**
- Título: ${tituloUnidad}
- Nivel: ${nivel}, Grado: ${grado}
- Área Curricular: ${area}
- Temas Clave: ${temasClave}

**Estructura de Aprendizaje (Competencias y Capacidades ya definidas):**
${JSON.stringify(estructuraJson, null, 2)}

**Instrucción Específica:**
Basado en el contexto y la estructura de aprendizaje proporcionada, genera una tabla en Markdown con CUATRO columnas: 'Competencias', 'Capacidades', 'Desempeños Precisados' y 'Evidencias de Aprendizaje'.
- Para las columnas 'Competencias' y 'Capacidades', usa la información de la estructura que te di.
- En la columna 'Desempeños Precisados', redacta desempeños clave, contextualizados y muy concisos (máximo 2 por capacidad).
- En la columna 'Evidencias de Aprendizaje', describe la evidencia principal (una por competencia).
- Sé extremadamente breve y directo en todos los textos.
`;
};

/**
 * (MODIFICADO) Prompt principal para TODOS LOS DEMÁS bloques.
 * Se ha eliminado el 'case' de 'propositos-aprendizaje'.
 */
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
        
        // --- ESTE BLOQUE SE HA ELIMINADO ---
        // case 'propositos-aprendizaje':
        //     ...
        //     break;
        // ----------------------------------

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


// ===================================================================================
//  HANDLER DE LA FUNCIÓN SERVERLESS (MODIFICADO)
// ===================================================================================
exports.handler = async (event) => {
    if (event.httpMethod !== 'POST') {
        return { statusCode: 405, body: 'Method Not Allowed' };
    }

    try {
        const { blockId, unitData } = JSON.parse(event.body);

        if (!blockId || !unitData) {
            return { statusCode: 400, body: JSON.stringify({ message: 'Faltan datos en la solicitud.' }) };
        }

        const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash-lite" });
        let finalContent = '';

        // --- INICIO DE LA LÓGICA MODIFICADA ---
        if (blockId === 'propositos-aprendizaje') {
            // Es el bloque problemático, usamos la lógica de 2 pasos

            console.log("Iniciando Paso 1: Obtener Estructura JSON");
            // === PASO 1: Obtener estructura ===
            const promptPaso1 = buildPromptPaso1(unitData);
            const resultPaso1 = await model.generateContent(promptPaso1);
            const textPaso1 = resultPaso1.response.text();

            // Extraer el JSON de la respuesta (añadimos robustez)
            const jsonMatch = textPaso1.match(/\[[\s\S]*\]/);
            if (!jsonMatch) {
                console.error("Error Paso 1: La IA no devolvió un JSON válido.", textPaso1);
                throw new Error("Paso 1 falló: No se recibió un JSON de competencias.");
            }
            const estructuraJson = JSON.parse(jsonMatch[0]);

            console.log("Iniciando Paso 2: Generar Tabla Markdown");
            // === PASO 2: Generar la tabla usando la estructura ===
            const promptPaso2 = buildPromptPaso2(unitData, estructuraJson);
            const resultPaso2 = await model.generateContent(promptPaso2);
            finalContent = resultPaso2.response.text();

        } else {
            // Para todos los demás bloques, usa la lógica original
            console.log(`Generando bloque normal: ${blockId}`);
            const prompt = buildPrompt(blockId, unitData);
            const result = await model.generateContent(prompt);
            finalContent = result.response.text();
        }
        // --- FIN DE LA LÓGICA MODIFICADA ---

        // Respuesta final unificada
        return {
            statusCode: 200,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ content: finalContent }),
        };

    } catch (error) {
        console.error("Error en la función serverless:", error);
        return {
            statusCode: 500,
            body: JSON.stringify({ message: 'Error al contactar la API de Gemini.', error: error.message }),
        };
    }
};