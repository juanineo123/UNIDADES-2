// ===================================================================================
//  BASE DE DATOS DEL CURRÍCULO NACIONAL PERUANO (CNEB 2017) - VERSIÓN CORREGIDA
// ===================================================================================
// Este archivo funciona como una base de datos local para la aplicación.
// Contiene la estructura de niveles, grados, áreas y competencias
// para evitar llamadas innecesarias a una API y agilizar la experiencia del usuario.
// La estructura está diseñada para ser fácilmente consultada desde main.js.
// ===================================================================================

const curriculoData = {
    "Inicial": {
        grados: ["3 años", "4 años", "5 años"],
        areas: {
            "Personal Social": {
                competencias: [
                    { id: "ps-c1", nombre: "Construye su identidad" },
                    { id: "ps-c2", nombre: "Convive y participa democráticamente en la búsqueda del bien común" },
                ]
            },
            "Psicomotriz": {
                competencias: [
                    { id: "psi-c1", nombre: "Se desenvuelve de manera autónoma a través de su motricidad" },
                ]
            },
            "Comunicación": {
                competencias: [
                    { id: "com-c1", nombre: "Se comunica oralmente en su lengua materna" },
                    { id: "com-c2", nombre: "Lee diversos tipos de textos escritos en su lengua materna" },
                    { id: "com-c3", nombre: "Escribe diversos tipos de textos en su lengua materna" },
                    { id: "com-c4", nombre: "Crea proyectos desde los lenguajes artísticos" },
                ]
            },
            "Descubrimiento del Mundo": {
                competencias: [
                    { id: "dm-c1", nombre: "Indaga mediante métodos científicos para construir sus conocimientos" },
                    { id: "dm-c2", nombre: "Resuelve problemas de cantidad" },
                    { id: "dm-c3", nombre: "Resuelve problemas de forma, movimiento y localización" },
                ]
            }
        }
    },
    "Primaria": {
        grados: ["1er Grado", "2do Grado", "3er Grado", "4to Grado", "5to Grado", "6to Grado"],
        areas: {
            "Personal Social": {
                competencias: [
                    { id: "ps-p-c1", nombre: "Construye su identidad" },
                    { id: "ps-p-c2", nombre: "Convive y participa democráticamente en la búsqueda del bien común" },
                    { id: "ps-p-c3", nombre: "Construye interpretaciones históricas" },
                    { id: "ps-p-c4", nombre: "Gestiona responsablemente el espacio y el ambiente" },
                    { id: "ps-p-c5", nombre: "Gestiona responsablemente los recursos económicos" },
                ]
            },
            "Educación Física": {
                competencias: [
                    { id: "ef-p-c1", nombre: "Se desenvuelve de manera autónoma a través de su motricidad" },
                    { id: "ef-p-c2", nombre: "Asume una vida saludable" },
                    { id: "ef-p-c3", nombre: "Interactúa a través de sus habilidades sociomotrices" },
                ]
            },
            "Comunicación": {
                competencias: [
                    { id: "com-p-c1", nombre: "Se comunica oralmente en su lengua materna" },
                    { id: "com-p-c2", nombre: "Lee diversos tipos de textos escritos en su lengua materna" },
                    { id: "com-p-c3", nombre: "Escribe diversos tipos de textos en su lengua materna" },
                ]
            },
            "Arte y Cultura": {
                competencias: [
                    { id: "art-p-c1", nombre: "Aprecia de manera crítica manifestaciones artístico-culturales" },
                    { id: "art-p-c2", nombre: "Crea proyectos desde los lenguajes artísticos" },
                ]
            },
            "Inglés como Lengua Extranjera": {
                competencias: [
                    { id: "ing-p-c1", nombre: "Se comunica oralmente en inglés como lengua extranjera" },
                    { id: "ing-p-c2", nombre: "Lee diversos tipos de textos escritos en inglés como lengua extranjera" },
                    { id: "ing-p-c3", nombre: "Escribe diversos tipos de textos en inglés como lengua extranjera" },
                ]
            },
            "Matemática": {
                competencias: [
                    { id: "mat-p-c1", nombre: "Resuelve problemas de cantidad" },
                    { id: "mat-p-c2", nombre: "Resuelve problemas de regularidad, equivalencia y cambio" },
                    { id: "mat-p-c3", nombre: "Resuelve problemas de forma, movimiento y localización" },
                    { id: "mat-p-c4", nombre: "Resuelve problemas de gestión de datos e incertidumbre" },
                ]
            },
            "Ciencia y Tecnología": {
                competencias: [
                    { id: "cyt-p-c1", nombre: "Indaga mediante métodos científicos para construir conocimientos" },
                    { id: "cyt-p-c2", nombre: "Explica el mundo físico basándose en conocimientos sobre los seres vivos, materia y energía, biodiversidad, Tierra y universo" },
                    { id: "cyt-p-c3", nombre: "Diseña y construye soluciones tecnológicas para resolver problemas de su entorno" },
                ]
            },
            "Educación Religiosa": {
                competencias: [
                    { id: "rel-p-c1", nombre: "Construye su identidad como persona humana, amada por Dios, digna, libre y trascendente" },
                    { id: "rel-p-c2", nombre: "Asume la experiencia del encuentro personal y comunitario con Dios en su proyecto de vida" },
                ]
            }
        }
    },
    "Secundaria": {
        grados: ["1er Grado", "2do Grado", "3er Grado", "4to Grado", "5to Grado"],
        areas: {
            "Desarrollo Personal, Ciudadanía y Cívica": {
                competencias: [
                    { id: "dpcc-s-c1", nombre: "Construye su identidad" },
                    { id: "dpcc-s-c2", nombre: "Convive y participa democráticamente en la búsqueda del bien común" },
                ]
            },
            "Ciencias Sociales": {
                competencias: [
                    { id: "cs-s-c1", nombre: "Construye interpretaciones históricas" },
                    { id: "cs-s-c2", nombre: "Gestiona responsablemente el espacio y el ambiente" },
                    { id: "cs-s-c3", nombre: "Gestiona responsablemente los recursos económicos" },
                ]
            },
            "Educación Física": {
                competencias: [
                    { id: "ef-s-c1", nombre: "Se desenvuelve de manera autónoma a través de su motricidad" },
                    { id: "ef-s-c2", nombre: "Asume una vida saludable" },
                    { id: "ef-s-c3", nombre: "Interactúa a través de sus habilidades sociomotrices" },
                ]
            },
            "Comunicación": {
                competencias: [
                    { id: "com-s-c1", nombre: "Se comunica oralmente en su lengua materna" },
                    { id: "com-s-c2", nombre: "Lee diversos tipos de textos escritos en su lengua materna" },
                    { id: "com-s-c3", nombre: "Escribe diversos tipos de textos en su lengua materna" },
                ]
            },
            "Arte y Cultura": {
                competencias: [
                    { id: "art-s-c1", nombre: "Aprecia de manera crítica manifestaciones artístico-culturales" },
                    { id: "art-s-c2", nombre: "Crea proyectos desde los lenguajes artísticos" },
                ]
            },
            "Inglés como Lengua Extranjera": {
                competencias: [
                    { id: "ing-s-c1", nombre: "Se comunica oralmente en inglés como lengua extranjera" },
                    { id: "ing-s-c2", nombre: "Lee diversos tipos de textos escritos en inglés como lengua extranjera" },
                    { id: "ing-s-c3", nombre: "Escribe diversos tipos de textos en inglés como lengua extranjera" },
                ]
            },
            "Matemática": {
                competencias: [
                    { id: "mat-s-c1", nombre: "Resuelve problemas de cantidad" },
                    { id: "mat-s-c2", nombre: "Resuelve problemas de regularidad, equivalencia y cambio" },
                    { id: "mat-s-c3", nombre: "Resuelve problemas de forma, movimiento y localización" },
                    { id: "mat-s-c4", nombre: "Resuelve problemas de gestión de datos e incertidumbre" },
                ]
            },
            "Ciencia y Tecnología": {
                competencias: [
                    { id: "cyt-s-c1", nombre: "Indaga mediante métodos científicos para construir conocimientos" },
                    { id: "cyt-s-c2", nombre: "Explica el mundo físico basándose en conocimientos sobre los seres vivos, materia y energía, biodiversidad, Tierra y universo" },
                    { id: "cyt-s-c3", nombre: "Diseña y construye soluciones tecnológicas para resolver problemas de su entorno" },
                ]
            },
            "Educación para el Trabajo": {
                competencias: [
                    { id: "ept-s-c1", nombre: "Gestiona proyectos de emprendimiento económico o social" },
                ]
            },
            "Educación Religiosa": {
                competencias: [
                    { id: "rel-s-c1", nombre: "Construye su identidad como persona humana, amada por Dios, digna, libre y trascendente" },
                    { id: "rel-s-c2", nombre: "Asume la experiencia del encuentro personal y comunitario con Dios en su proyecto de vida" },
                ]
            }
        }
    }
};
