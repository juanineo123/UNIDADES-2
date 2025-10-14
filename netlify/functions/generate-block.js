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
        nivel, grado, area, duracion, competencias, tituloUnidad, temasClave, contexto, enfoques
    } = unitData;

    let basePrompt = `Actúa como un experto pedagogo peruano, especialista en el Currículo Nacional de Educación Básica (CNEB). Tu tarea es generar una sección específica para una unidad de aprendizaje. Responde únicamente con el contenido solicitado para la sección, en formato Markdown, usando títulos, listas y tablas si es necesario. Sé extremadamente conciso y directo. No incluyas el título de la sección en tu respuesta, solo el contenido.`;

    let contextPrompt = `
    **Contexto de la Unidad de Aprendizaje:**
    - **Título:** ${tituloUnidad}
    - **Nivel:** ${nivel}, **Grado:** ${grado}
    - **Área Curricular:** ${area}
    - **Duración:** ${duracion} semana(s)
    - **Competencias Seleccionadas:** ${competencias.map(c => c.nombre).join(', ')}
    - **Enfoques Transversales Seleccionados:** ${enfoques.map(e => e.nombre).join(', ') || 'Ninguno'}
    - **Temas Clave:** ${temasClave}
    - **Realidad de los Estudiantes:** ${contexto || "No se proporcionó un contexto específico."}
`;
    let instructionPrompt = '';
    switch (blockId) {
        case 'justificacion':
            instructionPrompt = `Genera la Justificación de la unidad (3 párrafos):

1. Por qué es importante para estudiantes de ${nivel}-${grado} en contexto: "${contexto}"
2. Cómo desarrolla las competencias: ${competencias.map(c => c.nombre).join(', ')}
3. Cómo integra enfoques: ${enfoques.map(e => e.nombre).join(', ')}

Temas: ${temasClave}
Extensión: 250-300 palabras.`;
            break;
        case 'situacion':
            instructionPrompt = `Crea Situación Significativa con 3 subtítulos:

### **1. Contexto y Problemática**
Situación real que enfrentan estudiantes de ${nivel}-${grado} en "${contexto}" relacionada con "${temasClave}". (2 párrafos)

### **2. Reto o Desafío**
Qué deben lograr/resolver para movilizar: ${competencias.map(c => c.nombre).join(', ')}. (1 párrafo)

### **3. Propósito y Preguntas Orientadoras**
Objetivo + 2-3 preguntas reflexivas. (1 párrafo + preguntas)`;
            break;
        case 'producto':
            instructionPrompt = `Producto Final para ${nivel}-${grado} sobre "${temasClave}":

1. Descripción (1 párrafo): Qué crearán. Ej: informe, maqueta, exposición.
2. Tabla: **Competencia | Cómo se evidencia** para ${competencias.map(c => c.nombre).join(', ')}
3. Criterios (lista 4 criterios observables)
4. Presentación (1 párrafo): cómo/dónde presentan.

Máximo 200 palabras.`;
            break;
        case 'proposito':
            instructionPrompt = `Redacta el **Propósito de la Unidad** en una sola oración clara y directa.`;
            break;


        case 'competencias-transversales':
            // Obtener las competencias transversales del CNEB
            const ctDetalle = unitData.competenciasTransversales.map(ct => {
                return `
**${ct.nombre}**
Capacidades: ${ct.capacidades.join(' | ')}
Descripción: ${ct.descripcion}
        `;
            }).join('\n');

            instructionPrompt = `Genera el contenido para **Competencias Transversales** del CNEB. 

**COMPETENCIAS TRANSVERSALES DEL CURRÍCULO NACIONAL:**
${ctDetalle}

**Estructura requerida:**

### A. COMPETENCIAS TRANSVERSALES

Genera una tabla Markdown con las columnas: **Competencia Transversal | Capacidades que se trabajarán | Desempeños/Acciones concretas en esta unidad | Evidencias**

**Reglas:**
1. Incluye las DOS competencias transversales mostradas arriba.
2. Para cada competencia, selecciona 2-3 capacidades de las listadas que sean más pertinentes para esta unidad sobre "${temasClave}".
3. Describe desempeños/acciones CONCRETAS y ESPECÍFICAS de cómo los estudiantes trabajarán esas capacidades durante la unidad (relacionadas con el contexto: "${contexto}").
4. Proporciona evidencias observables del trabajo de estas competencias.
5. Sé específico y contextualizado a esta unidad, NO uses frases genéricas.

### B. ENFOQUES TRANSVERSALES

(Esta sección la trabajaremos en el siguiente bloque)`;
            break;
        case 'enfoques-transversales':
            // Construir detalles de los enfoques transversales seleccionados
            const enfoquesDetalle = enfoques.map(enf => {
                return `
**${enf.nombre}**
Valores: ${enf.valores.join(', ')}
Descripción: ${enf.descripcion}
        `;
            }).join('\n---\n');

            instructionPrompt = `Genera el contenido para **Enfoques Transversales** del CNEB.

**ENFOQUES TRANSVERSALES SELECCIONADOS:**
${enfoquesDetalle}

**Contexto de los estudiantes:** ${contexto}
**Temas de la unidad:** ${temasClave}

**Genera una tabla Markdown con las siguientes columnas:**
**Enfoque Transversal | Valores | Actitudes Observables de los Estudiantes | Actitudes Observables del Docente**

**Reglas ESTRICTAS:**
1. Incluye TODOS los enfoques transversales seleccionados (${enfoques.length} enfoques).
2. En la columna "Valores", coloca los valores oficiales del CNEB proporcionados arriba.
3. En "Actitudes Observables de los Estudiantes": Describe 2-3 actitudes CONCRETAS y ESPECÍFICAS que los estudiantes demostrarán durante esta unidad, relacionadas con el contexto "${contexto}" y los temas "${temasClave}".
4. En "Actitudes Observables del Docente": Describe 2-3 acciones CONCRETAS que el docente realizará para promover este enfoque en la unidad.
5. Las actitudes deben ser OBSERVABLES y MEDIBLES, no genéricas.
6. Contextualiza todo a esta unidad específica, evita frases abstractas o muy generales.
7. Usa viñetas o numeración dentro de cada celda para listar las actitudes.

**Ejemplo de formato esperado:**
| Enfoque | Valores | Actitudes - Estudiantes | Actitudes - Docente |
|---------|---------|------------------------|---------------------|
| Enfoque X | Valor1, Valor2 | - Actitud específica 1<br>- Actitud específica 2 | - Acción docente 1<br>- Acción docente 2 |`;
            break;
        case 'secuencia':
            const esIntegrada = unitData.areasIntegradas && unitData.areasIntegradas.length > 1;
            const sesionesAprox = esIntegrada ? duracion * 1 : duracion * 2;

            instructionPrompt = `Genera tabla con ${duracion} semanas. ${esIntegrada ? '1 SESIÓN' : '2 SESIONES'} POR SEMANA.

Columnas: Semana | Sesión | Título | Propósito | Competencias | Tiempo | Recursos | Tipo Evaluación

${esIntegrada ? `
UNIDAD INTEGRADA - Áreas: ${unitData.areasIntegradas.join(', ')}
- ${duracion} semanas × 1 sesión = ${sesionesAprox} sesiones TOTAL
- Cada sesión integra competencias de diferentes áreas
` : `
- ${duracion} semanas × 2 sesiones = ${sesionesAprox} sesiones TOTAL
`}

Temas: ${temasClave}
Primera: diagnóstica. Última: sumativa + producto.`;
            break;
        case 'evaluacion':
            // Construir información de las competencias para la evaluación
            const competenciasEval = competencias.map(comp => {
                return `
**${comp.nombre}**
Desempeños del grado: ${comp.desempenos.slice(0, 3).join(' | ')}
        `;
            }).join('\n');

            instructionPrompt = `Genera la tabla de **Evaluación** de la unidad.

**Competencias a evaluar:**
${competenciasEval}

**Temas de la unidad:** ${temasClave}
**Duración:** ${duracion} semana(s)

**Genera una tabla Markdown con las siguientes columnas:**
**Competencia | Criterios de Evaluación | Evidencias de Aprendizaje | Instrumentos de Evaluación | Momento**

**Reglas ESTRICTAS:**

1. **Competencia**: Lista cada competencia seleccionada (${competencias.map(c => c.nombre).join(', ')}).

2. **Criterios de Evaluación**: Para cada competencia, formula 2-3 criterios específicos, observables y medibles, derivados de los desempeños del grado. Los criterios deben responder a "¿Qué evaluaré específicamente?" y estar redactados de forma clara.

3. **Evidencias de Aprendizaje**: Describe productos o actuaciones CONCRETAS que los estudiantes realizarán para demostrar el logro de la competencia. Deben ser tangibles y verificables. Ejemplos: "Informe de investigación", "Exposición oral con apoyo visual", "Organizador gráfico comparativo", "Resolución de casos", etc.

4. **Instrumentos de Evaluación**: Especifica los instrumentos que se usarán para valorar las evidencias. Ejemplos: "Rúbrica analítica", "Lista de cotejo", "Escala de valoración", "Ficha de observación", "Portafolio", "Registro anecdótico", etc. Deben corresponder con las evidencias.

5. **Momento**: Indica cuándo se evaluará:
   - **Diagnóstica/Inicio**: Evaluación inicial (semana 1)
   - **Formativa/Proceso**: Evaluación durante el desarrollo (semanas intermedias)
   - **Sumativa/Salida**: Evaluación final (última semana)

6. Incluye al menos UNA evidencia por cada competencia.

7. Asegura que haya evaluación en los TRES momentos (inicio, proceso y salida).

8. Los criterios deben estar alineados con los desempeños del grado y ser específicos a esta unidad sobre "${temasClave}".

**Formato de ejemplo:**
| Competencia | Criterios de Evaluación | Evidencias | Instrumentos | Momento |
|-------------|------------------------|------------|--------------|---------|
| [Competencia 1] | - Criterio 1<br>- Criterio 2 | [Evidencia específica] | [Instrumento adecuado] | Formativa/Proceso |`;
            break;
        case 'recursos':
            instructionPrompt = `Lista los **Recursos y Materiales** necesarios. Organízalos en tres categorías: 'Para el docente', 'Para el estudiante' y 'Recursos tecnológicos'. Limita la lista a un máximo de **tres** elementos esenciales por categoría.`;
            break;
        case 'orientaciones':
            instructionPrompt = `Genera Orientaciones Pedagógicas:

### A. Estrategias Metodológicas
3-4 estrategias para ${nivel}-${grado} sobre "${temasClave}". Cada una: nombre + cómo se aplica.

### B. Atención a la Diversidad
Estrategias para diferentes ritmos/estilos. (1 párrafo)

### C. Uso de Materiales y Recursos
Materiales y uso del entorno "${contexto}". (1 párrafo)

### D. Organización del Espacio
Disposición del aula y agrupamientos. (1 párrafo)

Total: 300 palabras máximo.`;
            break;
        case 'referencias':
            instructionPrompt = `Genera Referencias Bibliográficas formato APA:

### A. Documentos Normativos MINEDU (Obligatorios)
- Currículo Nacional 2016
- Programa Curricular ${nivel}
- Evaluación formativa 2019

### B. Materiales Educativos MINEDU
3-4 recursos del MINEDU sobre "${temasClave}" para ${area}-${grado}.

### C. Bibliografía Complementaria (Opcional)
2-3 fuentes adicionales si pertinente.

Año actual: ${unitData.anioLectivo || new Date().getFullYear()}`;
            break;
        case 'vinculacion':
            instructionPrompt = `Genera Vinculación Interdisciplinaria:

### Introducción
1 párrafo: importancia de integrar áreas.

### Áreas Integradas y Vinculación
Tabla: **Área | Competencias | Cómo se integra | Evidencias**

Identifica 2-3 áreas que se integran naturalmente con ${area} para temas "${temasClave}".
Info del usuario: "${unitData.integracionAreas}"

### Beneficios
1 párrafo: beneficios pedagógicos.`;
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
