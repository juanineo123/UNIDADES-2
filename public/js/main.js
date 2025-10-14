// ===================================================================================
//  LÓGICA PRINCIPAL DEL FRONTEND (main.js) - VERSIÓN FINAL
// ===================================================================================
//  Ahora, la función de descarga se comunica con la función de Netlify.
// ===================================================================================

document.addEventListener('DOMContentLoaded', () => {

    // === 1. REFERENCIAS A ELEMENTOS DEL DOM ===
    const wizardContainer = document.getElementById('wizard-container');
    const outputContainer = document.getElementById('output-container');
    const steps = document.querySelectorAll('.step');

    const formStep1 = document.getElementById('form-step-1');
    const nivelSelect = document.getElementById('nivel');
    const gradoSelect = document.getElementById('grado');
    const areaSelect = document.getElementById('area');
    const fechaInput = document.getElementById('fecha');
    const competenciasContainer = document.getElementById('competencias-checkboxes');
    const btnNext1 = document.getElementById('btn-next-1');

    const btnPrev2 = document.getElementById('btn-prev-2');
    const btnNext2 = document.getElementById('btn-next-2');
    const situacionSourceSelect = document.getElementById('situacion-source');
    const situacionManualContainer = document.getElementById('situacion-manual-container');
    const situacionManualTextarea = document.getElementById('situacion-manual');

    const resumenContainer = document.getElementById('resumen-datos');
    const btnPrev3 = document.getElementById('btn-prev-3');
    const btnGenerate = document.getElementById('btn-generate');

    const unidadGeneradaContainer = document.getElementById('unidad-generada');
    const finalButtonsContainer = document.getElementById('final-buttons');
    const btnDownload = document.getElementById('btn-download');
    const btnReset = document.getElementById('btn-reset');

    // === 2. ESTADO DE LA APLICACIÓN ===
    let wizardData = {};
    let generatedMarkdownContent = {};

    // === 3. FUNCIONES DE INICIALIZACIÓN ===
    function initialize() {
        fechaInput.valueAsDate = new Date();
        populateNiveles();
        setupEventListeners();
        // Ya no se necesita el 'checkDependencies'
    }

    function populateNiveles() {
        const niveles = Object.keys(curriculoData);
        nivelSelect.innerHTML = '<option value="">Seleccione un nivel</option>';
        niveles.forEach(nivel => {
            const option = document.createElement('option');
            option.value = nivel;
            option.textContent = nivel;
            nivelSelect.appendChild(option);
        });
    }

    // === 4. FUNCIONES DE LÓGICA DE FORMULARIO DINÁMICO ===
    function updateGrados() {
        const nivel = nivelSelect.value;
        gradoSelect.innerHTML = '<option value="">Seleccione un grado</option>';
        areaSelect.innerHTML = '<option>Seleccione nivel y grado</option>';
        competenciasContainer.innerHTML = '<p>Seleccione un área para ver las competencias.</p>';
        gradoSelect.disabled = true;
        areaSelect.disabled = true;

        if (nivel && curriculoData[nivel]) {
            const grados = curriculoData[nivel].grados;
            grados.forEach(grado => {
                const option = document.createElement('option');
                option.value = grado;
                option.textContent = grado;
                gradoSelect.appendChild(option);
            });
            gradoSelect.disabled = false;
        }
    }

    function updateAreas() {
        const nivel = nivelSelect.value;
        const areasCheckboxContainer = document.getElementById('areas-checkbox-container');
        const areasCheckboxes = document.getElementById('areas-checkboxes');

        areaSelect.innerHTML = '<option value="">Seleccione un área</option>';
        competenciasContainer.innerHTML = '<p>Seleccione un área para ver las competencias.</p>';
        areaSelect.disabled = true;
        areasCheckboxContainer.classList.add('hidden');

        if (nivel && curriculoData[nivel]) {
            const areas = Object.keys(curriculoData[nivel].areas);

            // Si es Inicial o Primaria, mostrar checkboxes
            if (nivel === "Inicial" || nivel === "Primaria") {
                areasCheckboxes.innerHTML = '';
                areas.forEach(area => {
                    const label = document.createElement('label');
                    label.className = 'flex items-center p-2 rounded-md hover:bg-cyan-900/50 cursor-pointer';
                    label.innerHTML = `
                    <input type="checkbox" name="area-checkbox" value="${area}" class="mr-2 w-4 h-4 accent-cyan-400" onchange="updateCompetenciasIntegradas()">
                    <span class="text-sm">${area}</span>
                `;
                    areasCheckboxes.appendChild(label);
                });
                areasCheckboxContainer.classList.remove('hidden');
                areaSelect.disabled = true;
            } else {
                // Secundaria: select normal
                areas.forEach(area => {
                    const option = document.createElement('option');
                    option.value = area;
                    option.textContent = area;
                    areaSelect.appendChild(option);
                });
                areaSelect.disabled = false;
            }
        }
    }

    window.updateCompetenciasIntegradas = function () {
        const nivel = nivelSelect.value;
        const areasSeleccionadas = Array.from(document.querySelectorAll('input[name="area-checkbox"]:checked')).map(cb => cb.value);

        if (areasSeleccionadas.length > 3) {
            alert('Máximo 3 áreas para unidades integradas');
            event.target.checked = false;
            return;
        }

        competenciasContainer.innerHTML = '';

        if (areasSeleccionadas.length === 0) {
            competenciasContainer.innerHTML = '<p>Seleccione al menos un área.</p>';
            return;
        }

        areasSeleccionadas.forEach(area => {
            const areaDiv = document.createElement('div');
            areaDiv.className = 'mb-4 p-3 bg-gray-800/50 rounded-lg';
            areaDiv.innerHTML = `<h4 class="text-cyan-300 font-bold mb-2">${area}</h4>`;

            const competencias = curriculoData[nivel].areas[area].competencias;
            competencias.slice(0, 2).forEach(comp => { // Máximo 2 competencias por área
                const label = document.createElement('label');
                label.className = 'flex items-center p-2 rounded-md hover:bg-cyan-900/50 cursor-pointer';
                label.innerHTML = `
                <input type="checkbox" name="competencia" value="${comp.nombre}" data-area="${area}" class="mr-3 w-5 h-5 accent-cyan-400">
                <span class="text-sm">${comp.nombre}</span>
            `;
                areaDiv.appendChild(label);
            });

            competenciasContainer.appendChild(areaDiv);
        });
    };

    function updateCompetencias() {
        const nivel = nivelSelect.value;
        const area = areaSelect.value;
        competenciasContainer.innerHTML = '';

        if (nivel && area && curriculoData[nivel].areas[area]) {
            const competencias = curriculoData[nivel].areas[area].competencias;
            if (competencias.length > 0) {
                competencias.forEach(comp => {
                    const label = document.createElement('label');
                    label.className = 'flex items-center p-2 rounded-md hover:bg-cyan-900/50 cursor-pointer';
                    label.innerHTML = `
                        <input type="checkbox" name="competencia" value="${comp.nombre}" class="mr-3 w-5 h-5 accent-cyan-400">
                        <span>${comp.nombre}</span>
                    `;
                    competenciasContainer.appendChild(label);
                });
            } else {
                competenciasContainer.innerHTML = '<p>No hay competencias para esta área.</p>';
            }
        } else {
            competenciasContainer.innerHTML = '<p>Seleccione un área para ver las competencias.</p>';
        }
    }

    // === 5. FUNCIONES DE NAVEGACIÓN DEL WIZARD ===
    function goToStep(stepNumber) {
        steps.forEach((step, index) => {
            if (index + 1 === stepNumber) {
                step.classList.remove('hidden');
                step.classList.add('active');
            } else {
                step.classList.add('hidden');
                step.classList.remove('active');
            }
        });
        window.scrollTo({ top: wizardContainer.offsetTop - 20, behavior: 'smooth' });
    }

    function mapGrado(grado) {
        const map = {
            "1er Grado": "1°",
            "2do Grado": "2°",
            "3er Grado": "3°",
            "4to Grado": "4°",
            "5to Grado": "5°",
            "6to Grado": "6°"
        };
        return map[grado] || grado;
    }



    function handleNextStep1() {
        // Captura las competencias como objetos con más detalles
        const nivel = nivelSelect.value;
        const grado = gradoSelect.value;
        const ciclo = curriculoData[nivel].ciclosPorGrado[grado];

        // Capturar áreas
        let areasSeleccionadas = [];
        if (nivel === "Inicial" || nivel === "Primaria") {
            areasSeleccionadas = Array.from(document.querySelectorAll('input[name="area-checkbox"]:checked')).map(cb => cb.value);
        } else {
            areasSeleccionadas = [areaSelect.value];
        }

        const competenciasSeleccionadas =
            Array.from(document.querySelectorAll('input[name="competencia"]:checked'))
                .map(cb => {
                    const areaCompetencia = cb.dataset.area || areaSelect.value;
                    const competenciaData = curriculoData[nivel].areas[areaCompetencia].competencias.find(c => c.nombre === cb.value);

                    if (!competenciaData) {
                        console.error('No se encontró competencia:', cb.value);
                        return null;
                    }

                    const gradoMapeado = mapGrado(grado);
                    let desempenos = [];

                    // Protección múltiple: verifica si existen desempeños
                    if (competenciaData.desempenos && typeof competenciaData.desempenos === 'object') {
                        desempenos = competenciaData.desempenos[gradoMapeado] || [];
                    }

                    return {
                        nombre: competenciaData.nombre,
                        capacidades: competenciaData.capacidades || [],
                        estandar: competenciaData.estandares ? competenciaData.estandares[ciclo] : 'Estándar no disponible',
                        desempenos: desempenos,
                        area: areaCompetencia
                    };
                })
                .filter(comp => comp !== null);
        // Captura los enfoques transversales seleccionados
        // Captura los enfoques transversales seleccionados CON SUS DATOS COMPLETOS
        const enfoquesSeleccionados =
            Array.from(document.querySelectorAll('input[name="enfoque"]:checked'))
                .map(cb => {
                    // Buscar el enfoque completo en data.js
                    const enfoqueCompleto = enfoquesTransversales.find(e => e.nombre === cb.value);
                    return {
                        nombre: enfoqueCompleto.nombre,
                        valores: enfoqueCompleto.valores,
                        descripcion: enfoqueCompleto.descripcion
                    };
                });

        wizardData = {
            ...wizardData,
            docente: document.getElementById('docente').value,
            director: document.getElementById('director').value,
            ie: document.getElementById('ie').value,
            nivel: nivelSelect.value,
            grado: gradoSelect.value,
            area: areasSeleccionadas.length > 1 ? areasSeleccionadas.join(' + ') : areasSeleccionadas[0],
            areasIntegradas: areasSeleccionadas,
            duracion: document.getElementById('duracion').value,
            anioLectivo: document.getElementById('anio-lectivo').value, // ← NUEVA LÍNEA 1
            periodo: document.getElementById('periodo').value, // ← NUEVA LÍNEA 2
            numEstudiantes: document.getElementById('num-estudiantes').value, // ← NUEVA LÍNEA 3
            turno: document.getElementById('turno').value, // ← NUEVA LÍNEA 4
            fecha: fechaInput.value,
            competencias: competenciasSeleccionadas,
            enfoques: enfoquesSeleccionados,
            ciclo: curriculoData[nivelSelect.value].ciclosPorGrado[gradoSelect.value],
            competenciasTransversales: competenciasTransversales,
        };
        goToStep(2);
    }

    function handleNextStep2() {
        wizardData = {
            ...wizardData,
            tituloUnidad: document.getElementById('titulo-unidad').value,
            temasClave: document.getElementById('temas-clave').value,
            contexto: document.getElementById('contexto').value,
            integracionAreas: document.getElementById('integracion-areas').value, // ← NUEVA LÍNEA
            situacionSource: situacionSourceSelect.value,
            situacionManual: situacionManualTextarea.value,
        };
        createSummary();
        goToStep(3);
    }

    function createSummary() {
        let situacionResumen = '✨ Generada por IA con estructura de 3 partes';
        if (wizardData.situacionSource === 'manual' && wizardData.situacionManual) {
            const preview = wizardData.situacionManual.substring(0, 80).replace(/\n/g, ' ');
            situacionResumen = `📝 Manual: <em>"${preview}..."</em>`;
        } else if (wizardData.situacionSource === 'manual' && !wizardData.situacionManual) {
            situacionResumen = '⚠️ Manual (no proporcionada, se generará por IA)';
        }

        resumenContainer.innerHTML = `
    <h3 class="text-xl font-bold font-rajdhani text-cyan-300 mb-4">Confirmar Datos</h3>
    <ul class="space-y-2 text-gray-300">
        <li><strong>Título:</strong> ${wizardData.tituloUnidad || 'No definido'}</li>
        <li><strong>Nivel:</strong> ${wizardData.nivel}</li>
        <li><strong>Grado:</strong> ${wizardData.grado}</li>
        <li><strong>Ciclo:</strong> ${wizardData.ciclo}</li>
        <li><strong>Área:</strong> ${wizardData.area}</li>
        <li><strong>Año Lectivo:</strong> ${wizardData.anioLectivo}</li>
        <li><strong>Periodo:</strong> ${wizardData.periodo}</li>
        <li><strong>Nº Estudiantes:</strong> ${wizardData.numEstudiantes}</li>
        <li><strong>Turno:</strong> ${wizardData.turno}</li>
        <li><strong>Duración:</strong> ${wizardData.duracion} semana(s)</li>
        <li><strong>Situación Significativa:</strong> ${situacionResumen}</li>
        <li><strong>Competencias:</strong> ${wizardData.competencias.map(c => c.nombre).join(', ')}</li>
        <li><strong>Enfoques:</strong> ${wizardData.enfoques.map(e => e.nombre).join(', ') || 'No seleccionados'}</li>
    </ul>
`;
    }

    // === 6. LÓGICA DE GENERACIÓN DE LA UNIDAD ===
    async function startGenerationProcess() {
        wizardContainer.classList.add('hidden');
        outputContainer.classList.remove('hidden');
        unidadGeneradaContainer.innerHTML = '';
        generatedMarkdownContent = {};

        // Construir estructura base
        const unitStructure = [
            { id: 'titulo', title: 'I. TÍTULO DE LA UNIDAD', needsAI: false },
            { id: 'datos', title: 'II. DATOS INFORMATIVOS', needsAI: false },
            { id: 'justificacion', title: 'III. JUSTIFICACIÓN', needsAI: true },
            { id: 'situacion', title: 'IV. SITUACIÓN SIGNIFICATIVA', needsAI: true },
            { id: 'producto', title: 'V. PRODUCTO DE LA UNIDAD', needsAI: true },
            { id: 'proposito', title: 'VI. PROPÓSITO DE LA UNIDAD', needsAI: true },
            { id: 'propositos-aprendizaje', title: 'VII. PROPÓSITOS DE APRENDIZAJE', needsAI: false },
            { id: 'competencias-transversales', title: 'VIII. COMPETENCIAS TRANSVERSALES', needsAI: false },
            { id: 'enfoques-transversales', title: 'IX. ENFOQUES TRANSVERSALES', needsAI: false },
            { id: 'secuencia', title: 'X. SECUENCIA DIDÁCTICA DE LA UNIDAD', needsAI: true },
            { id: 'evaluacion', title: 'XI. EVALUACIÓN', needsAI: false },
            { id: 'recursos', title: 'XII. RECURSOS Y MATERIALES', needsAI: true },
            { id: 'orientaciones', title: 'XIII. ORIENTACIONES PEDAGÓGICAS', needsAI: true },
            { id: 'referencias', title: 'XIV. REFERENCIAS BIBLIOGRÁFICAS', needsAI: true },
        ];

        // Agregar Vinculación Interdisciplinaria solo si el usuario especificó integración
        if (wizardData.integracionAreas && wizardData.integracionAreas.trim() !== '') {
            unitStructure.push({ id: 'vinculacion', title: 'XV. VINCULACIÓN INTERDISCIPLINARIA', needsAI: true });
            unitStructure.push({ id: 'firmas', title: 'XVI. CAMPO DE FIRMAS', needsAI: false });
        } else {
            unitStructure.push({ id: 'firmas', title: 'XV. CAMPO DE FIRMAS', needsAI: false });
        }
        for (const block of unitStructure) {
            const blockElement = document.createElement('div');
            blockElement.id = `block-${block.id}`;
            blockElement.innerHTML = `
                <h3 class="text-xl font-bold font-orbitron text-cyan-300 mt-6 mb-3">${block.title}</h3>
                <div class="content content-block text-gray-300"></div>
            `;
            unidadGeneradaContainer.appendChild(blockElement);
            blockElement.scrollIntoView({ behavior: 'smooth', block: 'center' });

            const contentDiv = blockElement.querySelector('.content');
            contentDiv.innerHTML = `<p class="text-cyan-400 animate-pulse">Generando con Gemini...</p>`;
            await new Promise(res => setTimeout(res, 1000));

            let contentMarkdown = '';

            if (block.id === 'situacion' && wizardData.situacionSource === 'manual' && wizardData.situacionManual) {
                contentMarkdown = generateStaticContent(block.id);
            } else if (block.needsAI) {
                contentMarkdown = await generateAIContent(block.id);
            } else {
                contentMarkdown = generateStaticContent(block.id);
            }

            generatedMarkdownContent[block.id] = contentMarkdown;

            await new Promise(res => setTimeout(res, 500));
            contentDiv.innerHTML = window.marked.parse(contentMarkdown);
        }

        finalButtonsContainer.classList.remove('hidden');
        finalButtonsContainer.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    function generateStaticContent(blockId) {
        switch (blockId) {
            case 'titulo':
                return `### ${wizardData.tituloUnidad}`;
            case 'datos':
                return `
| Campo | Valor | Campo | Valor |
| :--- | :--- | :--- | :--- |
| **Docente** | ${wizardData.docente} | **Director/a** | ${wizardData.director} |
| **I.E.** | ${wizardData.ie} | **Nivel** | ${wizardData.nivel} |
| **Grado** | ${wizardData.grado} | **Ciclo** | ${wizardData.ciclo} |
| **Área** | ${wizardData.area} | **Año Lectivo** | ${wizardData.anioLectivo} |
| **Periodo** | ${wizardData.periodo} | **Duración** | ${wizardData.duracion} semana(s) |
| **Nº Estudiantes** | ${wizardData.numEstudiantes} | **Turno** | ${wizardData.turno} |
| **Fecha** | ${wizardData.fecha} | | |
`;

            case 'propositos-aprendizaje':
                return buildPropositos();

            case 'competencias-transversales':
                return buildCompetenciasTransversales();

            case 'enfoques-transversales':
                return buildEnfoquesTransversales();

            case 'evaluacion':
                return buildEvaluacion();

            case 'situacion':
                return wizardData.situacionManual;
            case 'firmas':
                return `
<table style="width:100%; border-collapse:collapse; border:none; margin-top: 80px;">
    <tbody>
        <tr style="background-color:transparent;">
            <td style="width:50%; text-align:center; border:none; padding:20px; vertical-align:bottom;">
                <p style="border-top:1px solid black; width:250px; margin:0 auto 8px auto;">&nbsp;</p>
                ${wizardData.docente}<br>
                <strong>Docente</strong>
            </td>
            <td style="width:50%; text-align:center; border:none; padding:20px; vertical-align:bottom;">
                <p style="border-top:1px solid black; width:250px; margin:0 auto 8px auto;">&nbsp;</p>
                ${wizardData.director}<br>
                <strong>Director/a</strong>
            </td>
        </tr>
    </tbody>
</table>
`;
            default:
                return '';
        }
    }

    function sanitizeText(text) {
        if (!text || typeof text !== 'string') return '';
        return text
            .replace(/[<>]/g, '') // Eliminar < y >
            .replace(/\|/g, 'ǀ') // Reemplazar pipes que rompen tablas
            .replace(/\n+/g, ' ') // Saltos de línea → espacios
            .replace(/\s+/g, ' ') // Múltiples espacios → uno solo
            .trim();
    }

    function buildPropositos() {
        const esIntegrada = wizardData.areasIntegradas && wizardData.areasIntegradas.length > 1;

        let tablaSimple = esIntegrada
            ? `
| Competencias | Capacidades | Área |
|--------------|-------------|------|
`
            : `
| Competencias | Capacidades |
|--------------|-------------|
`;

        let seccionesAdicionales = '';

        wizardData.competencias.forEach((comp, index) => {
            const numero = index + 1;
            const capacidadesTexto = comp.capacidades.join('<br>• ');

            // TABLA SIMPLE
            const nombreLimpio = sanitizeText(comp.nombre);
            const areaLimpia = esIntegrada ? sanitizeText(comp.area) : '';
            tablaSimple += esIntegrada
                ? `| ${nombreLimpio} | • ${capacidadesTexto} | ${areaLimpia} |\n`
                : `| ${nombreLimpio} | • ${capacidadesTexto} |\n`;

            // SECCIONES FUERA DE LA TABLA
            seccionesAdicionales += `

### ✅ Competencia ${numero}: ${comp.nombre}

**📋 Estándar del Ciclo ${wizardData.ciclo}:**
${sanitizeText(comp.estandar)}

**🎯 Desempeños del ${wizardData.grado}:**
${comp.desempenos && comp.desempenos.length > 0 ? comp.desempenos.map((d, i) => `${i + 1}. ${sanitizeText(d)}`).join('\n') : '_Esta área no cuenta con desempeños específicos en el currículo._'}

**📊 Criterios de Evaluación:**
${comp.desempenos && comp.desempenos.length > 0 ? comp.desempenos.slice(0, 3).map((d, i) => `${i + 1}. ${sanitizeText(d)}`).join('\n') : '_Los criterios se establecerán según las capacidades de la competencia._'}

**📝 Evidencias:**
- Informe escrito
- Exposición oral
- Organizador gráfico

---
`;
        });

        return tablaSimple + '\n' + seccionesAdicionales;
    }
    function buildCompetenciasTransversales() {
        let contenido = '### A. COMPETENCIAS TRANSVERSALES\n\n';
        contenido += '| Competencia Transversal | Capacidades que se trabajarán | Desempeños/Acciones concretas en esta unidad | Evidencias |\n';
        contenido += '|------------------------|-------------------------------|---------------------------------------------|------------|\n';

        const ct = wizardData.competenciasTransversales;

        ct.forEach(competencia => {
            const capacidades = competencia.capacidades.slice(0, 2).join('<br>• ');
            const desempenos = `• Los estudiantes organizan su tiempo de trabajo<br>• Reflexionan sobre su proceso de aprendizaje relacionado con ${wizardData.temasClave}`;
            const evidencias = 'Cuaderno de trabajo<br>Autoevaluación';

            contenido += `| ${competencia.nombre} | • ${capacidades} | ${desempenos} | ${evidencias} |\n`;
        });

        return contenido;
    }

    function buildEnfoquesTransversales() {
        let contenido = '| Enfoque Transversal | Valores | Actitudes - Estudiantes | Actitudes - Docente |\n';
        contenido += '|---------------------|---------|------------------------|---------------------|\n';

        wizardData.enfoques.forEach(enfoque => {
            const valores = enfoque.valores.join(', ');
            const actitudesEst = `• Respetan las diferencias<br>• Participan activamente en ${wizardData.temasClave}<br>• Demuestran interés por aprender`;
            const actitudesDoc = `• Promueve el respeto mutuo<br>• Genera espacios de diálogo<br>• Contextualiza al entorno: ${wizardData.contexto}`;

            contenido += `| ${enfoque.nombre} | ${valores} | ${actitudesEst} | ${actitudesDoc} |\n`;
        });

        return contenido;
    }

    function buildEvaluacion() {
        let contenido = '| Competencia | Criterios de Evaluación | Evidencias | Instrumentos | Momento |\n';
        contenido += '|-------------|------------------------|------------|--------------|----------|\n';

        wizardData.competencias.forEach(comp => {
            const criterios = comp.desempenos && comp.desempenos.length > 0
                ? comp.desempenos.slice(0, 2).map(d => '• ' + d.split('.')[0]).join('<br>')
                : '• Los desempeños ya descritos en la sección VII';

            contenido += `| ${comp.nombre} | ${criterios} | Informe<br>Exposición | Rúbrica<br>Lista de cotejo | Formativa/Proceso |\n`;
        });

        return contenido;
    }
    /**
 * Realiza una solicitud fetch con reintentos automáticos.
 * @param {string} url La URL a la que se hará la solicitud.
 * @param {object} options Las opciones para la solicitud fetch.
 * @param {number} retries El número máximo de intentos.
 * @param {number} delay El tiempo de espera en milisegundos entre intentos.
 * @returns {Promise<Response>} La respuesta de la solicitud.
 */
    async function fetchWithRetries(url, options, retries = 3, delay = 2500) {
        for (let i = 0; i < retries; i++) {
            try {
                // Intento de realizar la petición
                const response = await fetch(url, options);

                // Si la respuesta es exitosa (ej. status 200-299), la devolvemos.
                if (response.ok) {
                    return response;
                }

                // Si el servidor da un error (ej. status 500), lanzamos una excepción para reintentar.
                // Esto es importante para que los errores de servidor también activen un reintento.
                throw new Error(`Error del servidor: ${response.status} ${response.statusText}`);

            } catch (error) {
                // Si es el último intento, lanzamos el error definitivo.
                if (i === retries - 1) {
                    console.error(`Error final después de ${retries} intentos.`, error);
                    throw error;
                }

                // Si no es el último intento, mostramos un aviso y esperamos antes de reintentar.
                console.warn(`Intento ${i + 1} fallido. Reintentando en ${delay / 1000} segundos...`);
                await new Promise(resolve => setTimeout(resolve, delay));
            }
        }
    }
    async function generateAIContent(blockId) {
        try {
            const response = await fetchWithRetries('/api/generate-block', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ blockId, unitData: wizardData })
            });

            if (!response.ok) {
                const error = await response.json();
                throw new Error(error.message || 'Error en la comunicación con la API');
            }
            const data = await response.json();
            return data.content;
        } catch (error) {
            console.error('Error al generar contenido:', error);
            return `<p class="text-red-500">Error al generar esta sección: ${error.message}</p>`;
        }
    }

    // === 7. FUNCIÓN DE DESCARGA REESTRUCTURADA ===
    async function handleDownload() {
        console.log("main.js: Solicitud de descarga al servidor...");
        btnDownload.disabled = true;
        btnDownload.textContent = 'Generando .docx en servidor...';

        try {
            // El endpoint de la función de Netlify.
            // Corresponde a netlify/functions/generate-word.js
            const endpoint = '/.netlify/functions/generate-word';

            const response = await fetchWithRetries(endpoint, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ wizardData, generatedMarkdownContent })
            });

            if (!response.ok) {
                throw new Error(`Error del servidor: ${response.statusText}`);
            }

            // El navegador se encargará de la descarga gracias a las cabeceras
            // que enviamos desde la función de Netlify.
            // Para que funcione, necesitamos convertir la respuesta en un blob
            // y crear una URL para descargarla.
            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.style.display = 'none';
            a.href = url;
            a.download = `Unidad de Aprendizaje - ${wizardData.tituloUnidad || 'Sin Titulo'}.docx`;
            document.body.appendChild(a);
            a.click();
            window.URL.revokeObjectURL(url);
            a.remove();

        } catch (error) {
            console.error("Error al solicitar la descarga del documento:", error);
            alert("No se pudo generar el documento. Hubo un error al comunicarse con el servidor.");
        } finally {
            btnDownload.disabled = false;
            btnDownload.textContent = 'Descargar en Word';
        }
    }

    function handleReset() {
        wizardData = {};
        generatedMarkdownContent = {};
        outputContainer.classList.add('hidden');
        unidadGeneradaContainer.innerHTML = '';
        finalButtonsContainer.classList.add('hidden');

        formStep1.reset();
        document.getElementById('form-step-2').reset();
        situacionManualContainer.classList.add('hidden');
        fechaInput.valueAsDate = new Date();
        document.getElementById('anio-lectivo').value = new Date().getFullYear();
        updateGrados();

        wizardContainer.classList.remove('hidden');
        goToStep(1);
    }

    // === 8. CONFIGURACIÓN DE EVENT LISTENERS ===
    function setupEventListeners() {
        nivelSelect.addEventListener('change', () => {
            updateGrados();
            updateAreas();
        });
        gradoSelect.addEventListener('change', updateAreas);
        areaSelect.addEventListener('change', updateCompetencias);

        btnNext1.addEventListener('click', handleNextStep1);
        btnNext2.addEventListener('click', handleNextStep2);

        btnPrev2.addEventListener('click', () => goToStep(1));
        btnPrev3.addEventListener('click', () => goToStep(2));

        btnGenerate.addEventListener('click', startGenerationProcess);
        btnReset.addEventListener('click', handleReset);

        btnDownload.addEventListener('click', handleDownload);

        situacionSourceSelect.addEventListener('change', (e) => {
            if (e.target.value === 'manual') {
                situacionManualContainer.classList.remove('hidden');
            } else {
                situacionManualContainer.classList.add('hidden');
            }
        });
    }

    // === 9. INICIO DE LA APLICACIÓN ===
    initialize();
});
