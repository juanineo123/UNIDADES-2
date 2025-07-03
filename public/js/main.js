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
            situacionSource: situacionSourceSelect.value,
            situacionManual: situacionManualTextarea.value,
        };
        createSummary();
        goToStep(3);
    }

    function createSummary() {
        let situacionResumen = 'Generada por IA';
        if (wizardData.situacionSource === 'manual' && wizardData.situacionManual) {
            situacionResumen = `Manual: <em>"${wizardData.situacionManual.substring(0, 50)}..."</em>`;
        } else if (wizardData.situacionSource === 'manual' && !wizardData.situacionManual) {
            situacionResumen = 'Manual (no proporcionada, se generará por IA)';
        }

        resumenContainer.innerHTML = `
            <h3 class="text-xl font-bold font-rajdhani text-cyan-300 mb-4">Confirmar Datos</h3>
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
        unidadGeneradaContainer.innerHTML = '';
        generatedMarkdownContent = {};
        
        const unitStructure = [
            { id: 'titulo', title: 'I. TÍTULO DE LA UNIDAD', needsAI: false },
            { id: 'datos', title: 'II. DATOS INFORMATIVOS', needsAI: false },
            { id: 'justificacion', title: 'III. JUSTIFICACIÓN', needsAI: true },
            { id: 'situacion', title: 'IV. SITUACIÓN SIGNIFICATIVA', needsAI: true },
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
| Docente | Director/a | I.E. | Nivel |
| :--- | :--- | :--- | :--- |
| ${wizardData.docente} | ${wizardData.director} | ${wizardData.ie} | ${wizardData.nivel} |
| **Grado** | **Área** | **Duración** | **Fecha** |
| ${wizardData.grado} | ${wizardData.area} | ${wizardData.duracion} semana(s) | ${wizardData.fecha} |
`;
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

    async function generateAIContent(blockId) {
        try {
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

    // === 7. FUNCIÓN DE DESCARGA REESTRUCTURADA ===
    async function handleDownload() {
        console.log("main.js: Solicitud de descarga al servidor...");
        btnDownload.disabled = true;
        btnDownload.textContent = 'Generando .docx en servidor...';

        try {
            // El endpoint de la función de Netlify.
            // Corresponde a netlify/functions/generate-word.js
            const endpoint = '/.netlify/functions/generate-word';

            const response = await fetch(endpoint, {
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