// ===================================================================================
//  LÓGICA PRINCIPAL DEL FRONTEND (main.js) - VERSIÓN FINAL Y PROFESIONAL
// ===================================================================================
// Este archivo controla toda la interactividad del wizard, la gestión de datos
// del formulario, la comunicación con la API y la renderización del contenido.
// Utiliza 'marked.js' para convertir Markdown a HTML y 'FileSaver.js' para
// generar el documento de Word con formato profesional y a prueba de errores.
// ===================================================================================

document.addEventListener('DOMContentLoaded', () => {

    // === 1. REFERENCIAS A ELEMENTOS DEL DOM ===
    const wizardContainer = document.getElementById('wizard-container');
    const outputContainer = document.getElementById('output-container');
    const steps = document.querySelectorAll('.step');
    
    // Controles del Paso 1
    const formStep1 = document.getElementById('form-step-1');
    const nivelSelect = document.getElementById('nivel');
    const gradoSelect = document.getElementById('grado');
    const areaSelect = document.getElementById('area');
    const fechaInput = document.getElementById('fecha');
    const competenciasContainer = document.getElementById('competencias-checkboxes');
    const btnNext1 = document.getElementById('btn-next-1');

    // Controles del Paso 2
    const btnPrev2 = document.getElementById('btn-prev-2');
    const btnNext2 = document.getElementById('btn-next-2');
    // === NUEVAS REFERENCIAS PARA SITUACIÓN SIGNIFICATIVA ===
    const situacionSourceSelect = document.getElementById('situacion-source');
    const situacionManualContainer = document.getElementById('situacion-manual-container');
    const situacionManualTextarea = document.getElementById('situacion-manual');
    // =======================================================

    // Controles del Paso 3
    const resumenContainer = document.getElementById('resumen-datos');
    const btnPrev3 = document.getElementById('btn-prev-3');
    const btnGenerate = document.getElementById('btn-generate');

    // Contenedor de Salida
    const unidadGeneradaContainer = document.getElementById('unidad-generada');
    const finalButtonsContainer = document.getElementById('final-buttons');
    const btnDownload = document.getElementById('btn-download');
    const btnReset = document.getElementById('btn-reset');

    // === 2. ESTADO DE LA APLICACIÓN ===
    let wizardData = {};

    // === 3. FUNCIONES DE INICIALIZACIÓN ===
    function initialize() {
        fechaInput.valueAsDate = new Date();
        populateNiveles();
        setupEventListeners();
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
        areaSelect.innerHTML = '<option value="">Seleccione un área</option>';
        competenciasContainer.innerHTML = '<p>Seleccione un área para ver las competencias.</p>';
        areaSelect.disabled = true;

        if (nivel && curriculoData[nivel]) {
            const areas = Object.keys(curriculoData[nivel].areas);
            areas.forEach(area => {
                const option = document.createElement('option');
                option.value = area;
                option.textContent = area;
                areaSelect.appendChild(option);
            });
            areaSelect.disabled = false;
        }
    }

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

    function handleNextStep1() {
        const competenciasSeleccionadas = 
            Array.from(document.querySelectorAll('input[name="competencia"]:checked'))
                 .map(cb => cb.value);

        wizardData = {
            ...wizardData,
            docente: document.getElementById('docente').value,
            director: document.getElementById('director').value,
            ie: document.getElementById('ie').value,
            nivel: nivelSelect.value,
            grado: gradoSelect.value,
            area: areaSelect.value,
            duracion: document.getElementById('duracion').value,
            fecha: fechaInput.value,
            competencias: competenciasSeleccionadas,
        };
        goToStep(2);
    }
    
    function handleNextStep2() {
        wizardData = {
            ...wizardData,
            tituloUnidad: document.getElementById('titulo-unidad').value,
            temasClave: document.getElementById('temas-clave').value,
            contexto: document.getElementById('contexto').value,
            // === NUEVOS DATOS DE SITUACIÓN SIGNIFICATIVA ===
            situacionSource: situacionSourceSelect.value,
            situacionManual: situacionManualTextarea.value,
            // ===============================================
        };
        createSummary();
        goToStep(3);
    }

    function createSummary() {
        // Lógica para mostrar la fuente de la situación significativa en el resumen
        let situacionResumen = 'Generada por IA';
        if (wizardData.situacionSource === 'manual' && wizardData.situacionManual) {
            situacionResumen = `Manual: <em>"${wizardData.situacionManual.substring(0, 50)}..."</em>`;
        } else if (wizardData.situacionSource === 'manual' && !wizardData.situacionManual) {
            situacionResumen = 'Manual (no proporcionada, se generará por IA)';
        }

        resumenContainer.innerHTML = `
            <h3 class="text-xl font-bold text-cyan-300 mb-4">Confirmar Datos</h3>
            <ul class="space-y-2 text-gray-300">
                <li><strong>Título:</strong> ${wizardData.tituloUnidad || 'No definido'}</li>
                <li><strong>Nivel:</strong> ${wizardData.nivel}</li>
                <li><strong>Grado:</strong> ${wizardData.grado}</li>
                <li><strong>Área:</strong> ${wizardData.area}</li>
                <li><strong>Situación Significativa:</strong> ${situacionResumen}</li>
                <li><strong>Competencias:</strong> ${wizardData.competencias.join(', ')}</li>
            </ul>
        `;
    }

    // === 6. LÓGICA DE GENERACIÓN DE LA UNIDAD ===
    async function startGenerationProcess() {
        wizardContainer.classList.add('hidden');
        outputContainer.classList.remove('hidden');
        unidadGeneradaContainer.innerHTML = ''; // Limpiar el contenedor antes de empezar

        const unitStructure = [
            { id: 'titulo', title: 'I. TÍTULO DE LA UNIDAD', needsAI: false },
            { id: 'datos', title: 'II. DATOS INFORMATIVOS', needsAI: false },
            { id: 'justificacion', title: 'III. JUSTIFICACIÓN', needsAI: true },
            { id: 'situacion', title: 'IV. SITUACIÓN SIGNIFICATIVA', needsAI: true }, // Se mantiene como 'needsAI' para el flujo
            { id: 'producto', title: 'V. PRODUCTO DE LA UNIDAD', needsAI: true },
            { id: 'proposito', title: 'VI. PROPÓSITO DE LA UNIDAD', needsAI: true },
            { id: 'propositos-aprendizaje', title: 'VII. PROPÓSITOS DE APRENDIZAJE', needsAI: true },
            { id: 'competencias-transversales', title: 'VIII. COMPETENCIAS Y ENFOQUES TRANSVERSALES', needsAI: true },
            { id: 'secuencia', title: 'IX. SECUENCIA DIDÁCTICA DE LA UNIDAD', needsAI: true },
            { id: 'evaluacion', title: 'X. EVALUACIÓN', needsAI: true },
            { id: 'recursos', title: 'XI. RECURSOS Y MATERIALES', needsAI: true },
            { id: 'firmas', title: 'XII. CAMPO DE FIRMAS', needsAI: false },
        ];

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
            
            // === LÓGICA DINÁMICA PARA LA SITUACIÓN SIGNIFICATIVA ===
            if (block.id === 'situacion' && wizardData.situacionSource === 'manual' && wizardData.situacionManual) {
                // Si es manual y hay texto, se usa el contenido estático.
                contentMarkdown = generateStaticContent(block.id);
            } else if (block.needsAI) {
                // Si no, y necesita IA (o es la situación en modo IA), se llama a la API.
                contentMarkdown = await generateAIContent(block.id);
            } else {
                // Para el resto de bloques estáticos.
                contentMarkdown = generateStaticContent(block.id);
            }
            
            await new Promise(res => setTimeout(res, 500));
            contentDiv.innerHTML = marked.parse(contentMarkdown);
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
| Docente | Director/a | I.E. | Nivel |
| :--- | :--- | :--- | :--- |
| ${wizardData.docente} | ${wizardData.director} | ${wizardData.ie} | ${wizardData.nivel} |
| **Grado** | **Área** | **Duración** | **Fecha** |
| ${wizardData.grado} | ${wizardData.area} | ${wizardData.duracion} semana(s) | ${wizardData.fecha} |
`;
            // === NUEVO CASO PARA LA SITUACIÓN SIGNIFICATIVA MANUAL ===
            case 'situacion':
                return wizardData.situacionManual;
            // =========================================================
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

    async function generateAIContent(blockId) {
        try {
            // Pasamos el objeto completo de datos a la API.
            // La API será responsable de decidir si generar la situación o usar la manual.
            const response = await fetch('/api/generate-block', {
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

    // === 7. FUNCIÓN DE DESCARGA A WORD (SIN CAMBIOS) ===
    function handleDownload() {
        const headerContent = `
            <div style='mso-element:header' id='h1'>
                <p style='text-align:center; margin:0; font-size:11.0pt;'>"AÑO DEL BICENTENARIO, DE LA CONSOLIDACIÓN DE NUESTRA INDEPENDENCIA, Y DE LA CONMEMORACIÓN DE LAS HEROICAS BATALLAS DE JUNÍN Y AYACUCHO"</p>
                <p style='text-align:center; margin-top:12.0pt; font-size:14.0pt; font-weight:bold;'>UNIDAD DE APRENDIZAJE N° 01</p>
            </div>
        `;

        const header = `<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'><head><meta charset='utf-8'><title>Unidad de Aprendizaje</title>`;
        
        const styles = `
            <style>
                @page WordSection1 {
                    size: 8.5in 11.0in;
                    margin: 1.0in 1.0in 1.0in 1.0in;
                    mso-header: h1;
                }
                div.WordSection1 {
                    page: WordSection1;
                }
                p {
                    text-align: justify;
                    margin:0;
                }
                h3 {
                    color: #2E74B5;
                    font-family: 'Times New Roman', serif;
                    text-align: left;
                }
                table {
                    border-collapse: collapse;
                    width: 100%;
                    border: 1px solid black;
                }
                th, td {
                    border: 1px solid black;
                    padding: 8px;
                    text-align: left;
                    vertical-align: top;
                }
                th {
                    background-color: #D9E1F2;
                    font-weight: bold;
                }
                ul { margin: 0; padding-left: 20px; }
                li { text-align: justify; }
            </style>
        `;
        
        const bodyContent = unidadGeneradaContainer.innerHTML;
        const fullHtml = `${header}${styles}</head><body>${headerContent}<div class="WordSection1">${bodyContent}</div></body></html>`;

        const blob = new Blob(['\ufeff', fullHtml], {
            type: 'application/msword'
        });
        
        saveAs(blob, `Unidad de Aprendizaje - ${wizardData.tituloUnidad || 'Sin Titulo'}.doc`);
    }
    
    function handleReset() {
        wizardData = {};
        outputContainer.classList.add('hidden');
        unidadGeneradaContainer.innerHTML = '';
        finalButtonsContainer.classList.add('hidden');
        
        formStep1.reset();
        document.getElementById('form-step-2').reset();
        situacionManualContainer.classList.add('hidden'); // Ocultar al resetear
        fechaInput.valueAsDate = new Date();
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

        // === NUEVO EVENT LISTENER PARA EL SELECTOR DE SITUACIÓN ===
        situacionSourceSelect.addEventListener('change', (e) => {
            if (e.target.value === 'manual') {
                situacionManualContainer.classList.remove('hidden');
            } else {
                situacionManualContainer.classList.add('hidden');
            }
        });
        // =========================================================
    }

    // === 9. INICIO DE LA APLICACIÓN ===
    initialize();
});
