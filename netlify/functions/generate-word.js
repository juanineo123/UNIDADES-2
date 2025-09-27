// Función corregida para descargar el documento Word
async function downloadWordDocument() {
    const downloadBtn = document.getElementById('downloadBtn');
    
    try {
        // Deshabilitar botón y mostrar loading
        downloadBtn.disabled = true;
        downloadBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Generando documento...';
        
        // Validar que tenemos los datos necesarios
        if (!window.formData || !window.formData.tituloUnidad) {
            throw new Error('Faltan datos del formulario. Por favor, complete todos los campos obligatorios.');
        }
        
        if (!window.generatedContent || Object.keys(window.generatedContent).length === 0) {
            throw new Error('No hay contenido generado. Por favor, genere el contenido primero.');
        }
        
        console.log('=== ENVIANDO DATOS PARA DESCARGA ===');
        console.log('FormData:', window.formData);
        console.log('GeneratedContent keys:', Object.keys(window.generatedContent));
        
        // Preparar datos para enviar - ESTRUCTURA CORRECTA
        const requestData = {
            formData: window.formData,
            generatedContent: window.generatedContent
        };
        
        console.log('Datos a enviar:', JSON.stringify(requestData, null, 2));
        
        // Hacer petición al endpoint
        const response = await fetch('/.netlify/functions/generate-word', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestData)
        });
        
        console.log('Respuesta del servidor - Status:', response.status);
        console.log('Respuesta del servidor - Headers:', response.headers);
        
        // Verificar si la respuesta es exitosa
        if (!response.ok) {
            let errorMessage = `Error del servidor: ${response.status} ${response.statusText}`;
            
            try {
                const errorData = await response.json();
                errorMessage = errorData.error || errorData.message || errorMessage;
                console.error('Error del servidor:', errorData);
            } catch (parseError) {
                console.error('No se pudo parsear el error:', parseError);
                const textError = await response.text();
                console.error('Texto de error:', textError);
            }
            
            throw new Error(errorMessage);
        }
        
        // Verificar Content-Type
        const contentType = response.headers.get('content-type');
        if (!contentType || !contentType.includes('application/vnd.openxmlformats-officedocument.wordprocessingml.document')) {
            console.warn('Content-Type inesperado:', contentType);
            
            // Si el Content-Type no es correcto, intentar obtener el error como JSON
            try {
                const errorData = await response.json();
                throw new Error(errorData.error || 'Formato de respuesta incorrecto');
            } catch (parseError) {
                // Si no es JSON, obtener como texto
                const textResponse = await response.text();
                console.error('Respuesta inesperada:', textResponse);
                throw new Error('El servidor no devolvió un documento Word válido');
            }
        }
        
        // Obtener el blob del documento
        const blob = await response.blob();
        console.log('Blob recibido - Tamaño:', blob.size, 'bytes');
        
        if (blob.size === 0) {
            throw new Error('El documento generado está vacío');
        }
        
        // Crear URL para descarga
        const url = window.URL.createObjectURL(blob);
        
        // Crear nombre de archivo
        const fileName = `${window.formData.tituloUnidad || 'unidad_de_aprendizaje'}.docx`
            .replace(/[^a-z0-9áéíóúñü \.,_-]/gim, '')
            .trim()
            .replace(/\s+/g, '_');
        
        // Crear enlace temporal y hacer clic para descargar
        const a = document.createElement('a');
        a.style.display = 'none';
        a.href = url;
        a.download = fileName;
        document.body.appendChild(a);
        a.click();
        
        // Limpiar
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
        
        console.log('✅ Descarga iniciada exitosamente');
        
        // Mostrar mensaje de éxito
        showNotification('¡Documento generado y descargado exitosamente!', 'success');
        
    } catch (error) {
        console.error('❌ Error en la descarga:', error);
        
        // Mostrar error al usuario
        showNotification(`Error al generar el documento: ${error.message}`, 'error');
        
    } finally {
        // Restaurar botón
        downloadBtn.disabled = false;
        downloadBtn.innerHTML = '<i class="fas fa-download"></i> DESCARGAR EN WORD';
    }
}

// Función auxiliar para mostrar notificaciones
function showNotification(message, type = 'info') {
    // Remover notificación existente si la hay
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Crear nueva notificación
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 20px;
        border-radius: 5px;
        color: white;
        font-weight: bold;
        z-index: 10000;
        max-width: 400px;
        word-wrap: break-word;
        box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    `;
    
    // Colores según el tipo
    const colors = {
        success: '#10B981',
        error: '#EF4444',
        info: '#3B82F6',
        warning: '#F59E0B'
    };
    
    notification.style.backgroundColor = colors[type] || colors.info;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // Auto-remover después de 5 segundos
    setTimeout(() => {
        if (notification.parentNode) {
            notification.remove();
        }
    }, 5000);
}

// Función para debug - verificar datos antes de descargar
function debugDownloadData() {
    console.log('=== DEBUG DE DATOS PARA DESCARGA ===');
    console.log('window.formData:', window.formData);
    console.log('window.generatedContent:', window.generatedContent);
    console.log('Keys en generatedContent:', window.generatedContent ? Object.keys(window.generatedContent) : 'undefined');
    console.log('=======================================');
}