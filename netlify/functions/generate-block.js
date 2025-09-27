// ===================================================================================
//  FUNCIÓN SERVERLESS (BACKEND): generate-block.js
//  VERSIÓN DEFINITIVA: Simplifica el Paso 1 a una lista de texto y la procesa en código.
// ===================================================================================

require('dotenv').config();
const { GoogleGenerativeAI } = require('@google/generative-ai');

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// ===================================================================================
//  SECCIÓN DE PROMPTS Y HELPERS
// ===================================================================================

/**
 * (NUEVO) Helper para convertir la lista de texto a JSON.
 * Este trabajo ahora lo hace nuestro código, no la IA.
 */
const parseListToJSON = (text) => {
    const lines = text.split('\n').filter(line => line.trim() !== '');
    const result = [];
    let currentCompetencia = null;

    lines.forEach(line => {
        const trimmedLine = line.trim();
        // Detecta una línea de competencia (asume que no empieza con guión o espacio)
        if (!trimmedLine.startsWith('-') && !trimmedLine.startsWith('*')) {
            currentCompetencia = { competencia: trimmedLine, capacidades: [] };
            result.push(currentCompetencia);
        }
        // Detecta una línea de capacidad (asume que empieza con guión o asterisco)
        else if ((trimmedLine.startsWith('-') || trimmedLine.startsWith('*')) && currentCompetencia) {
            // Limpia el guión y el espacio inicial
            const capacidad = trimmedLine.substring(1).trim();
            currentCompetencia.capacidades.push(capacidad);
        }
    });
    return result;
};


/**
 * (MODIFICADO) Prompt para el PASO 1. Ahora pide una lista de texto simple.
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
Devuelve ÚNICAMENTE una lista de texto simple. No uses Markdown.
Cada competencia debe estar en su propia línea, y cada capacidad debajo de ella, indentada con un guion.
NO USES JSON. NO USES COMILLAS. NO AÑADAS TEXTO EXTRA.

**Formato Exacto de Ejemplo:**
Construye su identidad
- Se valora a sí mismo
- Autorregula sus emociones
Convive y participa democráticamente en la búsqueda del bien común
- Interactúa con todas las personas
- Construye normas y asume acuerdos y leyes
`;
};


/**
 * (SIN CAMBIOS) Prompt para el PASO 2. Sigue esperando un JSON.
 */
const buildPromptPaso2 = (unitData, estructuraJson) => {
    const { nivel, grado, area, tituloUnidad, temasClave } = unitData;
    // ... (el resto de esta función es idéntica a la versión anterior)
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
 * (SIN CAMBIOS) Prompt principal para TODOS LOS DEMÁS bloques.
 */
const buildPrompt = (blockId, unitData) => {
    // ... (el resto de esta función es idéntica a la versión anterior)
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

        // --- CAMBIO DE MODELO a uno más robusto ---
        const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash-lite" });
        let finalContent = '';

        // --- INICIO DE LA LÓGICA MODIFICADA ---
        if (blockId === 'propositos-aprendizaje') {
            console.log("Iniciando Paso 1 (Simplificado): Obtener Lista de Texto");
            const promptPaso1 = buildPromptPaso1(unitData);
            const resultPaso1 = await model.generateContent(promptPaso1);
            const textPaso1 = resultPaso1.response.text();

            // --- NUEVO: Convertir la lista de texto a JSON usando nuestro código ---
            const estructuraJson = parseListToJSON(textPaso1);
            if (!estructuraJson || estructuraJson.length === 0) {
                 console.error("Error al parsear la lista a JSON. Respuesta de la IA:", textPaso1);
                 throw new Error("Paso 1 falló: No se pudo procesar la lista de competencias.");
            }

            console.log("Iniciando Paso 2: Generar Tabla Markdown");
            const promptPaso2 = buildPromptPaso2(unitData, estructuraJson);
            const resultPaso2 = await model.generateContent(promptPaso2);
            finalContent = resultPaso2.response.text();

        } else {
            console.log(`Generando bloque normal: ${blockId}`);
            const prompt = buildPrompt(blockId, unitData);
            const result = await model.generateContent(prompt);
            finalContent = result.response.text();
        }
        // --- FIN DE LA LÓGICA MODIFICADA ---

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