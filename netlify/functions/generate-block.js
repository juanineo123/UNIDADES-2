// ===================================================================================
//  FUNCIÓN SERVERLESS (BACKEND): generate-block.js - VERSIÓN OPTIMIZADA
// ===================================================================================
// Esta función se ejecuta en el servidor de Netlify. Es el puente seguro entre
// nuestra aplicación y la API de Google Gemini.
// 1. Recibe los datos de la unidad desde el frontend.
// 2. Construye un prompt específico, detallado y optimizado para la sección.
// 3. Llama a la API de Gemini con una lógica de 3 reintentos para mayor robustez.
// 4. Devuelve el contenido generado en formato Markdown al frontend.
// ===================================================================================

require('dotenv').config();
const { GoogleGenerativeAI } = require('@google/generative-ai');

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// === FUNCIÓN PARA CONSTRUIR EL PROMPT (CON INSTRUCCIONES OPTIMIZADAS) ===
const buildPrompt = (blockId, unitData) => {
    const { 
        nivel, grado, area, duracion, competencias, tituloUnidad, temasClave, contexto 
    } = unitData;

    let basePrompt = `Actúa como un experto pedagogo peruano, especialista en el Currículo Nacional de Educación Básica (CNEB). Tu tarea es generar una sección específica para una unidad de aprendizaje. Responde únicamente con el contenido solicitado para la sección, en formato Markdown, usando títulos, listas y tablas si es necesario. Sé extremadamente conciso y directo. No incluyas el título de la sección en tu respuesta, solo el contenido.`;

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
            instructionPrompt = `Genera la **Justificación** de esta unidad. Explica en dos párrafos cortos por qué es importante y pertinente para los estudiantes.`;
            break;
        case 'situacion':
            instructionPrompt = `Crea una **Situación Significativa** en un párrafo conciso. Debe ser retadora, realista y conectar claramente con los temas clave y las competencias.`;
            break;
        case 'producto':
            instructionPrompt = `Describe el **Producto** final de la unidad en un párrafo breve. Debe ser un producto tangible o actuación compleja que demuestre las competencias.`;
            break;
        case 'proposito':
            instructionPrompt = `Redacta el **Propósito de la Unidad** en una sola oración clara y directa.`;
            break;
        case 'propositos-aprendizaje':
            // PROMPT CRÍTICO OPTIMIZADO PARA RAPIDEZ
            instructionPrompt = `Genera una tabla Markdown para los Propósitos de Aprendizaje con las columnas: Competencias | Capacidades | Desempeños | Evidencias.
            **Reglas estrictas:**
            - Para cada competencia seleccionada, genera muy breve solo **dos** de sus capacidades que tengan que ver con la competencia seleccionada.
            - Para cada una de esas capacidades, genera muy breve solo **tres** desempeños precisos y observables.
            - Sé muy breve en la descripción de las evidencias.`;
            break;
        case 'competencias-transversales':
            instructionPrompt = `Genera el contenido para **Competencias y Enfoques Transversales**.
            1.  **Competencias Transversales**: En una tabla, justifica de forma muy breve (una línea por competencia) cómo se promoverán las dos competencias transversales.
            2.  **Enfoques Transversales**: En una tabla, describe de forma muy breve (una línea por enfoque) solo **tres** enfoques transversales pertinentes y qué valores demostrarán los estudiantes.`;
            break;
        case 'secuencia':
            instructionPrompt = `Genera la **Secuencia Didáctica** en una tabla Markdown. Debe tener ${duracion} fila(s), una por cada semana. Las columnas deben ser: 'Semana', 'Título de la Actividad', 'Propósito de la Actividad' y 'Competencia Principal'. Sé conciso en todas las descripciones.`;
            break;
        case 'evaluacion':
            instructionPrompt = `Detalla la **Evaluación**. Crea una tabla Markdown con dos columnas: 'Evidencias de Aprendizaje' e 'Instrumentos de Evaluación'. Incluye un máximo de **tres** evidencias clave con sus respectivos instrumentos.`;
            break;
        case 'recursos':
            instructionPrompt = `Lista los **Recursos y Materiales** necesarios. Organízalos en tres categorías: 'Para el docente', 'Para el estudiante' y 'Recursos tecnológicos'. Limita la lista a un máximo de **tres** elementos esenciales por categoría.`;
            break;
        default:
            instructionPrompt = `Genera contenido relevante para la sección solicitada de forma muy breve.`;
    }

    return `${basePrompt}\n\n${contextPrompt}\n\n**Instrucción Específica:**\n${instructionPrompt}`;
};


// === HANDLER DE LA FUNCIÓN SERVERLESS (CON LÓGICA DE 3 REINTENTOS) ===
exports.handler = async (event) => {
    if (event.httpMethod !== 'POST') {
        return { statusCode: 405, body: 'Method Not Allowed' };
    }

    const MAX_ATTEMPTS = 3;
    const MODEL_NAME = "gemini-2.5-flash-lite"; // Modelo definido como constante
    let lastError = null;

    try {
        const { blockId, unitData } = JSON.parse(event.body);

        if (!blockId || !unitData) {
            return { statusCode: 400, body: JSON.stringify({ message: 'Faltan datos en la solicitud.' }) };
        }

        const prompt = buildPrompt(blockId, unitData);
        const model = genAI.getGenerativeModel({ model: MODEL_NAME });

        // Bucle de reintentos
        for (let attempt = 1; attempt <= MAX_ATTEMPTS; attempt++) {
            try {
                console.log(`Intento ${attempt} para generar el bloque: ${blockId}`);
                const result = await model.generateContent(prompt);
                const response = await result.response;
                const text = response.text();

                // Si la llamada es exitosa, retorna el resultado y sale de la función
                return {
                    statusCode: 200,
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ content: text }),
                };

            } catch (error) {
                console.error(`Error en el intento ${attempt} para ${blockId}:`, error);
                lastError = error;
                // Si no es el último intento, la función continuará con el siguiente ciclo del bucle
            }
        }

        // Si todos los intentos fallan, se lanza el último error capturado
        throw new Error(`Todos los ${MAX_ATTEMPTS} intentos fallaron. Último error: ${lastError.message}`);

    } catch (error) {
        console.error("Error final en la función serverless:", error);
        return {
            statusCode: 500,
            body: JSON.stringify({ message: 'Error al contactar la API de Gemini después de varios intentos.', error: error.message }),
        };
    }
};