
// ===================================================================================
//  CURRÍCULO NACIONAL DE EDUCACIÓN BÁSICA (CNEB 2017) - ESTRUCTURA PROFESIONAL
// ===================================================================================
// Diseño optimizado siguiendo principios DRY (Don't Repeat Yourself)
// Información normalizada, reutilizable y fácil de mantener
// ===================================================================================

// ┌─────────────────────────────────────────────────────────────────────────────┐
// │  COMPETENCIAS TRANSVERSALES (Aplicables a todos los niveles educativos)    │
// └─────────────────────────────────────────────────────────────────────────────┘

const competenciasTransversales = [
    {
        id: "ct-1",
        nombre: "Gestiona su aprendizaje de manera autónoma",
        capacidades: [
            "Define metas de aprendizaje",
            "Organiza acciones estratégicas para alcanzar sus metas de aprendizaje",
            "Monitorea y ajusta su desempeño durante el proceso de aprendizaje"
        ],
        descripcion: "El estudiante es consciente del proceso que realiza para aprender. Esto le permite participar de manera autónoma en el proceso de su aprendizaje, gestionar ordenada y sistemáticamente las acciones a realizar, evaluar sus avances y dificultades, así como asumir gradualmente el control de esta gestión."
    },
    {
        id: "ct-2",
        nombre: "Se desenvuelve en entornos virtuales generados por las TIC",
        capacidades: [
            "Personaliza entornos virtuales",
            "Gestiona información del entorno virtual",
            "Interactúa en entornos virtuales",
            "Crea objetos virtuales en diversos formatos"
        ],
        descripcion: "Consiste en que el estudiante interprete, modifique y optimice entornos virtuales durante el desarrollo de actividades de aprendizaje y en prácticas sociales. Esto involucra la articulación de los procesos de búsqueda, selección y evaluación de información; de modificación y creación de materiales digitales, de comunicación y participación en comunidades virtuales, así como la adaptación de los entornos virtuales de acuerdo a sus necesidades e intereses de manera sistemática."
    }
];

// ┌─────────────────────────────────────────────────────────────────────────────┐
// │  ENFOQUES TRANSVERSALES (Aplicables a todas las áreas y niveles)           │
// └─────────────────────────────────────────────────────────────────────────────┘

const enfoquesTransversales = [
    {
        id: "et-1",
        nombre: "Enfoque de Derechos",
        valores: ["Conciencia de derechos", "Libertad y responsabilidad", "Diálogo y concertación"],
        descripcion: "Reconoce a los estudiantes como sujetos de derechos y no como objetos de cuidado. Parte por reconocer que todos los niños, niñas y adolescentes son ciudadanos con derechos y deberes, y que merecen un trato respetuoso."
    },
    {
        id: "et-2",
        nombre: "Enfoque Inclusivo o de Atención a la Diversidad",
        valores: ["Respeto por las diferencias", "Equidad en la enseñanza", "Confianza en la persona"],
        descripcion: "Busca reconocer y valorar a todas las personas por igual, con el fin de erradicar la exclusión, discriminación y desigualdad de oportunidades. Todos los estudiantes tienen derecho no solo a oportunidades educativas de igual calidad, sino a obtener resultados de aprendizaje de igual calidad."
    },
    {
        id: "et-3",
        nombre: "Enfoque Intercultural",
        valores: ["Respeto a la identidad cultural", "Justicia", "Diálogo intercultural"],
        descripcion: "Parte del reconocimiento de que en el país conviven diversas culturas y que es preciso conocerlas, respetarlas y valorarlas. Implica fomentar el diálogo e intercambio entre personas de diferentes culturas."
    },
    {
        id: "et-4",
        nombre: "Enfoque de Igualdad de Género",
        valores: ["Igualdad y dignidad", "Justicia", "Empatía"],
        descripcion: "Reconoce que tanto hombres como mujeres tienen el mismo potencial para aprender y desarrollarse plenamente. Busca la igualdad de derechos, responsabilidades y oportunidades."
    },
    {
        id: "et-5",
        nombre: "Enfoque Ambiental",
        valores: ["Solidaridad planetaria y equidad intergeneracional", "Justicia y solidaridad", "Respeto a toda forma de vida"],
        descripcion: "Promueve la formación de personas con conciencia crítica sobre la problemática ambiental y la condición del cambio climático a nivel local y global, así como sobre su relación con la pobreza y la desigualdad social."
    },
    {
        id: "et-6",
        nombre: "Enfoque de Orientación al Bien Común",
        valores: ["Equidad y justicia", "Solidaridad", "Empatía", "Responsabilidad"],
        descripcion: "Implica que los procesos educativos se orienten hacia la promoción del bien común. El bien común está constituido por los bienes que los seres humanos comparten intrínsecamente en común."
    },
    {
        id: "et-7",
        nombre: "Enfoque de Búsqueda de la Excelencia",
        valores: ["Flexibilidad y apertura", "Superación personal"],
        descripcion: "Incentiva a los estudiantes a dar lo mejor de sí mismos para alcanzar sus metas y contribuir con su comunidad. Comprende el desarrollo de la capacidad para el cambio y la adaptación."
    }
];

// ┌─────────────────────────────────────────────────────────────────────────────┐
// │  DATOS CURRICULARES POR NIVEL EDUCATIVO                                     │
// └─────────────────────────────────────────────────────────────────────────────┘

const curriculoData = {

    // ═══════════════════════════════════════════════════════════════════════
    // NIVEL: INICIAL
    // ═══════════════════════════════════════════════════════════════════════
    "Inicial": {
        ciclos: ["Ciclo I", "Ciclo II"],
        grados: ["0-2 años", "3 años", "4 años", "5 años"],

        // Mapeo grado → ciclo (para facilitar acceso programático)
        ciclosPorGrado: {
            "0-2 años": "Ciclo I",  // ← Agregamos esta línea
            "3 años": "Ciclo II",
            "4 años": "Ciclo II",
            "5 años": "Ciclo II"
        },
        areas: {
            "Personal Social": {
                competencias: [
                    {
                        id: "ps-i-c1",
                        nombre: "Construye su identidad",
                        capacidades: [
                            "Se valora a sí mismo",
                            "Autorregula sus emociones",
                            "Reflexiona y argumenta éticamente",
                            "Vive su sexualidad de manera integral y responsable de acuerdo a su etapa de desarrollo y madurez"
                        ],
                        estandares: {
                            "Ciclo I": "Construye su identidad al tomar conciencia de los aspectos que lo hacen único. Se identifica con algunas de sus características físicas, sus gustos, disgustos e intereses, su nombre y a los miembros de su familia. Participa en sus cuidados personales y en diversas actividades desde su iniciativa y posibilidades. Busca y acepta el consuelo y compañía de su adulto significativo cuando se siente vulnerado e inseguro, así como cuando algunas de sus acciones afectan a otro.",
                            "Ciclo II": "Construye su identidad al tomar conciencia de los aspectos que lo hacen único, cuando se reconoce a sí mismo a partir de sus características físicas, habilidades y gustos. Se da cuenta que es capaz de realizar tareas y aceptar retos. Disfruta de ser parte de su familia, escuela y comunidad. Reconoce y expresa sus emociones y las regula a partir de la interacción con sus compañeros y docente, y de las normas establecidas de manera conjunta. Explica con razones sencillas por qué algunas acciones cotidianas causan malestar a él o a los demás, y por qué otras producen bienestar a todos. Se reconoce como mujer o varón y explica que ambos pueden realizar las mismas actividades. Muestra afecto a las personas que estima e identifica a las personas que le hacen sentir protegido y seguro y recurre a ellas cuando las necesita."
                        },
                        desempenos: {
                            "3 años": [
                                "Reconoce sus necesidades, sensaciones, intereses y preferencias; las diferencia de las de los otros a través de palabras, acciones, gestos o movimientos.",
                                "Se reconoce como miembro de su familia y grupo de aula. Identifica a los integrantes de ambos grupos.",
                                "Toma la iniciativa para realizar actividades cotidianas y juegos desde sus intereses.",
                                "Realiza acciones de cuidado personal, hábitos de alimentación e higiene.",
                                "Expresa sus emociones; utiliza para ello gestos, movimientos corporales y palabras. Identifica sus emociones y las que observa en los demás cuando el adulto las nombra.",
                                "Busca la compañía y consuelo del adulto en situaciones en las que lo necesita para sentirse seguro. Tolera algunos tiempos de espera anticipados por el adulto."
                            ],
                            "4 años": [
                                "Reconoce sus intereses, preferencias y características; las diferencia de las de los otros a través de palabras o acciones, dentro de su familia o grupo de aula.",
                                "Se reconoce como miembro de su familia y grupo de aula. Comparte hechos importantes de su historia familiar.",
                                "Toma la iniciativa para realizar acciones de cuidado personal, de alimentación e higiene de manera autónoma. Explica la importancia de estos hábitos para su salud. Busca realizar con otros algunas actividades cotidianas y juegos según sus intereses.",
                                "Expresa sus emociones; utiliza palabras, gestos y movimientos corporales. Reconoce las emociones en los demás, y muestra su simpatía o trata de ayudar.",
                                "Busca la compañía y consuelo del adulto en situaciones en las que lo necesita para sentirse seguro o contenido. Da razón de lo que le sucedió."
                            ],
                            "5 años": [
                                "Reconoce sus intereses, preferencias, características físicas y cualidades, las diferencia de las de los otros a través de palabras o acciones.",
                                "Participa de diferentes acciones de juego o de la vida cotidiana asumiendo distintos roles, sin hacer distinciones de género.",
                                "Se reconoce como parte de su familia, grupo de aula e IE. Comparte hechos y momentos importantes de su historia familiar.",
                                "Toma la iniciativa para realizar acciones de cuidado personal, de manera autónoma, y da razón sobre las decisiones que toma. Se organiza con sus compañeros y realiza algunas actividades cotidianas y juegos según sus intereses.",
                                "Expresa sus emociones; utiliza palabras, gestos y movimientos corporales e identifica las causas que las originan. Reconoce las emociones de los demás, y muestra su simpatía, desacuerdo o preocupación.",
                                "Busca la compañía y consuelo del adulto en situaciones en que lo requiere. Utiliza la palabra para expresar y explicar lo que le sucede. Reconoce los límites establecidos para su seguridad y contención."
                            ]
                        }
                    },
                    {
                        id: "ps-i-c2",
                        nombre: "Convive y participa democráticamente en la búsqueda del bien común",
                        capacidades: [
                            "Interactúa con todas las personas",
                            "Construye normas y asume acuerdos y leyes",
                            "Maneja conflictos de manera constructiva",
                            "Delibera sobre asuntos públicos",
                            "Participa en acciones que promueven el bienestar común"
                        ],
                        estandares: {
                            "Ciclo I": "Convive y participa cuando se relaciona con niños y adultos de su espacio cotidiano desde su propia iniciativa. Manifiesta a través de movimientos, gestos o palabras las situaciones que le agradan o le incomodan. Colabora en el cuidado de los materiales y espacios comunes.",
                            "Ciclo II": "Convive y participa democráticamente cuando interactúa de manera respetuosa con sus compañeros desde su propia iniciativa, cumple con sus deberes y se interesa por conocer más sobre las diferentes costumbres y características de las personas de su entorno inmediato. Participa y propone acuerdos y normas de convivencia para el bien común. Realiza acciones con otros para el buen uso de los espacios, materiales y recursos comunes."
                        },
                        desempenos: {
                            "3 años": [
                                "Se relaciona con adultos de su entorno, juega con otros niños y se integra en actividades grupales del aula. Propone ideas de juego y las normas del mismo, sigue las reglas de los demás de acuerdo con sus intereses.",
                                "Participa en actividades grupales poniendo en práctica las normas de convivencia y los límites que conoce.",
                                "Colabora en el cuidado del uso de recursos, materiales y espacios compartidos."
                            ],
                            "4 años": [
                                "Se relaciona con adultos y niños de su entorno en diferentes actividades del aula y juega en pequeños grupos.",
                                "Realiza actividades cotidianas con sus compañeros y se interesa por conocer sus costumbres, así como los lugares de los que proceden. Realiza preguntas acerca de lo que le llamó la atención.",
                                "Participa en la construcción colectiva de acuerdos y normas, basados en el respeto y el bienestar de todos, en situaciones que lo afectan o incomodan a él o a alguno de sus compañeros. Muestra, en las actividades que realiza, comportamientos de acuerdo con las normas de convivencia asumidos.",
                                "Colabora en actividades colectivas orientadas al cuidado de los recursos, materiales y espacios compartidos."
                            ],
                            "5 años": [
                                "Se relaciona con adultos de su entorno, juega con otros niños y se integra en actividades grupales del aula. Propone ideas de juego y sus normas. Se pone de acuerdo con el grupo para elegir un juego y las reglas del mismo.",
                                "Realiza actividades cotidianas con sus compañeros, y se interesa por compartir las costumbres de su familia y conocer los lugares de donde proceden. Muestra interés por conocer las costumbres de las familias de sus compañeros. Realiza preguntas para obtener más información.",
                                "Participa en la construcción colectiva de acuerdos y normas basadas en el respeto y el bienestar de todos considerando las situaciones que afectan o incomodan a todo el grupo. Muestra en las actividades que realiza comportamientos de acuerdo con las normas de convivencia asumidos.",
                                "Asume responsabilidades en su aula para colaborar con el orden, limpieza y bienestar de todos.",
                                "Propone y colabora en actividades colectivas en el nivel de aula e IE, orientadas al cuidado de recursos, materiales y espacios compartidos."
                            ]
                        }
                    }
                ]
            },
            "Psicomotriz": {
                competencias: [
                    {
                        id: "psico-i-c1",
                        nombre: "Se desenvuelve de manera autónoma a través de su motricidad",
                        capacidades: [
                            "Comprende su cuerpo",
                            "Se expresa corporalmente"
                        ],
                        estandares: {
                            "Ciclo I": "Se desenvuelve de manera autónoma a través de su motricidad cuando explora y descubre desde sus posibilidades de movimiento las partes de su cuerpo y su imagen corporal. Realiza acciones motrices básicas en las que coordina movimientos para desplazarse y manipular objetos. Expresa corporalmente a través del gesto, el tono, las posturas y movimientos sus sensaciones y emociones en situaciones cotidianas.",
                            "Ciclo II": "Se desenvuelve de manera autónoma a través de su motricidad cuando explora y descubre su lado dominante y sus posibilidades de movimiento por propia iniciativa en situaciones cotidianas. Realiza acciones motrices básicas en las que coordina movimientos para desplazarse con seguridad y utiliza objetos con precisión, orientándose y regulando sus acciones en relación a estos, a las personas, el espacio y el tiempo. Expresa corporalmente sus sensaciones, emociones y sentimientos a través del tono, gesto, posturas, ritmo y movimiento en situaciones de juego."
                        },

                        desempenos: {
                            "3 años": [
                                "Realiza acciones y movimientos como correr, saltar desde pequeñas alturas, trepar, rodar, deslizarse -en los que expresa sus emociones- explorando las posibilidades de su cuerpo con relación al espacio, la superficie y los objetos.",
                                "Realiza acciones y movimientos de coordinación óculo-manual y óculo-podal en diferentes situaciones cotidianas y de juego según sus intereses.",
                                "Reconoce sus sensaciones corporales, e identifica algunas de las necesidades y cambios en el estado de su cuerpo, como la respiración después de una actividad física. Reconoce las partes de su cuerpo al relacionarlas con sus acciones y nombrarlas espontáneamente en diferentes situaciones cotidianas.",
                                "Representa su cuerpo (o los de otros) a su manera y utilizando diferentes materiales."
                            ],
                            "4 años": [
                                "Realiza acciones y juegos de manera autónoma, como correr, saltar, trepar, rodar, deslizarse, hacer giros, patear y lanzar pelotas, etc. -en los que expresa sus emociones- explorando las posibilidades de su cuerpo con relación al espacio, la superficie y los objetos, regulando su fuerza, velocidad y con cierto control de su equilibrio.",
                                "Realiza acciones y movimientos de coordinación óculo-manual y óculo-podal, acorde con sus necesidades e intereses, y según las características de los objetos o materiales que emplea en diferentes situaciones cotidianas de exploración y juego.",
                                "Reconoce sus sensaciones corporales, e identifica las necesidades y cambios en el estado de su cuerpo, como la respiración y sudoración después de una actividad física. Reconoce las partes de su cuerpo al relacionarlas con sus acciones y nombrarlas espontáneamente en diferentes situaciones cotidianas.",
                                "Representa su cuerpo (o los de otros) a su manera, utilizando diferentes materiales y haciendo evidentes algunas partes, como la cabeza, los brazos, las piernas y algunos elementos del rostro."
                            ],
                            "5 años": [
                                "Realiza acciones y juegos de manera autónoma combinando habilidades motrices básicas como correr, saltar, trepar, rodar, deslizarse, hacer giros y volteretas en los que expresa sus emociones- explorando las posibilidades de su cuerpo con relación al espacio, el tiempo, la superficie y los objetos; en estas acciones, muestra predominio y mayor control de un lado de su cuerpo.",
                                "Realiza acciones y movimientos de coordinación óculo-manual y óculo-podal que requieren mayor precisión. Lo hace en diferentes situaciones cotidianas, de juego o de representación gráfico-plástica, ajustándose a los límites espaciales y a las características de los objetos, materiales y/o herramientas que utilizan, según sus necesidades, intereses y posibilidades.",
                                "Reconoce sus sensaciones corporales, e identifica las necesidades y cambios en el estado de su cuerpo, como la respiración y sudoración. Reconoce las partes de su cuerpo al relacionarlas con sus acciones y nombrarlas espontáneamente en diferentes situaciones cotidianas. Representa su cuerpo (o el de otro) a su manera, incorporando más detalles de la figura humana, e incluyendo algunas características propias (cabello corto, largo, lacio, rizado, etc.)."
                            ]
                        }
                    }
                ]
            },
            "Comunicación": {
                competencias: [
                    {
                        id: "com-i-c1",
                        nombre: "Se comunica oralmente en su lengua materna",
                        capacidades: [
                            "Obtiene información del texto oral",
                            "Infiere e interpreta información del texto oral",
                            "Adecúa, organiza y desarrolla las ideas de forma coherente y cohesionada",
                            "Utiliza recursos no verbales y paraverbales de forma estratégica",
                            "Interactúa estratégicamente con distintos interlocutores",
                            "Reflexiona y evalúa la forma, el contenido y contexto del texto oral"
                        ],
                        estandares: {
                            "Ciclo I": "Se comunica oralmente, escucha lo que otros le dicen, pregunta y responde. Se expresa espontáneamente a través del lenguaje verbal apoyándose en gestos y lenguaje corporal, con el propósito de interactuar con otras personas de su entorno.",
                            "Ciclo II": "Se comunica oralmente mediante diversos tipos de textos; identifica información explícita; realiza inferencias sencillas a partir de esta información e interpreta recursos no verbales y paraverbales de las personas de su entorno. Opina sobre lo que más/menos le gustó del contenido del texto. Se expresa espontáneamente a partir de sus conocimientos previos, con el propósito de interactuar con uno o más interlocutores conocidos en una situación comunicativa. Desarrolla sus ideas manteniéndose por lo general en el tema; utiliza vocabulario de uso frecuente y una pronunciación entendible, se apoya en gestos y lenguaje corporal. En un intercambio, generalmente participa y responde en forma pertinente a lo que le dicen."
                        }
                        , // <-- No olvides la coma
                        desempenos: {
                            "3 años": [
                                "Expresa sus necesidades, emociones, intereses y da cuenta de algunas experiencias al interactuar con personas de su entorno familiar, escolar o local. Utiliza palabras de uso frecuente, sonrisas, miradas, señas, gestos, movimientos corporales y diversos volúmenes de voz con la intención de lograr su propósito: informar, pedir, convencer o agradecer.",
                                "Participa en conversaciones o escucha cuentos, leyendas y otros relatos de la tradición oral. Formula preguntas sobre lo que le interesa saber o responde a lo que le preguntan.",
                                "Recupera información explícita de un texto oral. Menciona el nombre de personas y personajes, sigue indicaciones orales o vuelve a contar con sus propias palabras los sucesos que más le gustaron.",
                                "Deduce características de personas, personajes, animales y objetos en anécdotas, cuentos y rimas orales.",
                                "Comenta lo que le gusta o le disgusta de personas, personajes, hechos o situaciones de la vida cotidiana a partir de sus experiencias y del contexto en que se desenvuelve."
                            ],
                            "4 años": [
                                "Expresa sus necesidades, emociones, intereses y da cuenta de sus experiencias al interactuar con personas de su entorno familiar, escolar o local. Utiliza palabras de uso frecuente, sonrisas, miradas, señas, gestos, movimientos corporales y diversos volúmenes de voz según su interlocutor y propósito: informar, pedir, convencer o agradecer.",
                                "Participa en conversaciones o escucha cuentos, leyendas, adivinanzas y otros relatos de la tradición oral. Formula preguntas sobre lo que le interesa saber o lo que no ha comprendido o responde a lo que le preguntan.",
                                "Recupera información explícita de un texto oral. Menciona algunos hechos, el nombre de personas y personajes. Sigue indicaciones orales o vuelve a contar con sus propias palabras los sucesos que más le gustaron.",
                                "Deduce relaciones de causa-efecto, así como características de personas, personajes, animales y objetos en anécdotas, cuentos, leyendas y rimas orales.",
                                "Comenta lo que le gusta o le disgusta de personas, personajes, hechos o situaciones de la vida cotidiana a partir de sus experiencias y del contexto en que se desenvuelve."
                            ],
                            "5 años": [
                                "Expresa sus necesidades, emociones, intereses y da cuenta de sus experiencias al interactuar con personas de su entorno familiar, escolar o local. Utiliza palabras de uso frecuente y, estratégicamente, sonrisas, miradas, señas, gestos, movimientos corporales y diversos volúmenes de voz, según su interlocutor y propósito: informar, pedir, convencer, agradecer.",
                                "Desarrolla sus ideas en torno a un tema, aunque en ocasiones puede salirse de este.",
                                "Participa en conversaciones, diálogos o escucha cuentos, leyendas, rimas, adivinanzas y otros relatos de la tradición oral. Espera su turno para hablar, escucha mientras su interlocutor habla, pregunta y responde sobre lo que le interesa saber o lo que no ha comprendido con la intención de obtener información.",
                                "Recupera información explícita de un texto oral. Menciona algunos hechos y lugares, el nombre de personas y personajes. Sigue indicaciones orales o vuelve a contar con sus propias palabras los sucesos que más le gustaron.",
                                "Deduce relaciones de causa-efecto, así como características de personas, personajes, animales y objetos en anécdotas, cuentos, leyendas y rimas orales.",
                                "Comenta sobre lo que le gusta o disgusta de personas, personajes, hechos o situaciones de la vida cotidiana dando razones sencillas a partir de sus experiencias y del contexto en que se desenvuelve."
                            ]
                        }
                    },
                    {
                        id: "com-i-c2",
                        nombre: "Lee diversos tipos de textos escritos en su lengua materna",
                        capacidades: [
                            "Obtiene información del texto escrito",
                            "Infiere e interpreta información del texto",
                            "Reflexiona y evalúa la forma, el contenido y contexto del texto"
                        ],
                        estandares: {
                            "Ciclo I": "Este nivel tiene como base principalmente el nivel 1 de la competencia 'Se comunica oralmente en su lengua materna'.",
                            "Ciclo II": "Lee diversos tipos de textos que tratan temas reales o imaginarios que le son cotidianos, en los que predominan palabras conocidas y que se acompañan con ilustraciones. Construye hipótesis o predicciones sobre la información contenida en los textos y demuestra comprensión de las ilustraciones y de algunos símbolos escritos que transmiten información. Expresa sus gustos y preferencias en relación a los textos leídos a partir de su propia experiencia. Utiliza algunas convenciones básicas de los textos escritos."
                        }
                        , // <-- No olvides la coma
                        desempenos: {
                            "3 años": [
                                "Identifica características de personas, personajes, animales u objetos a partir de lo que observa en las ilustraciones cuando explora cuentos, etiquetas, carteles, que se presenta en variados soportes.",
                                "Dice de qué tratará, cómo continuará o cómo terminará el texto a partir de las ilustraciones o imágenes que observa antes y durante la lectura que realiza (por sí mismo o a través de un adulto).",
                                "Comenta las emociones que le generó el texto leído (por sí mismo o a través de un adulto), a partir de sus intereses y experiencias."
                            ],
                            "4 años": [
                                "Identifica características de personas, personajes, animales, objetos o acciones a partir de lo que observa en ilustraciones cuando explora cuentos, etiquetas, carteles, que se presentan en variados soportes.",
                                "Dice de qué tratará, cómo continuará o cómo terminará el texto a partir de las ilustraciones o imágenes que observa antes y durante la lectura que realiza (por sí mismo o a través de un adulto).",
                                "Comenta las emociones que le generó el texto leído (por sí mismo o a través de un adulto), a partir de sus intereses y experiencias."
                            ],
                            "5 años": [
                                "Identifica características de personas, personajes, animales, objetos o acciones a partir de lo que observa en las ilustraciones, así como de algunas palabras conocidas por él: su nombre o el de otros, palabras que aparecen frecuentemente en los cuentos, canciones, rondas, rimas, anuncios publicitarios o carteles del aula (calendario, cumpleaños, acuerdos de convivencia) que se presentan en variados soportes.",
                                "Dice de qué tratará, cómo continuará o cómo terminará el texto a partir de algunos indicios, como el título, las ilustraciones, palabras, expresiones o sucesos significativos, que observa o escucha antes y durante la lectura que realiza (por sí mismo o a través de un adulto).",
                                "Opina dando razones sobre algún aspecto del texto leído (por sí mismo o a través de un adulto), a partir de sus intereses y experiencia."
                            ]
                        }
                    },
                    {
                        id: "com-i-c3",
                        nombre: "Escribe diversos tipos de textos en su lengua materna",
                        capacidades: [
                            "Adecúa el texto a la situación comunicativa",
                            "Organiza y desarrolla las ideas de forma coherente y cohesionada",
                            "Utiliza convenciones del lenguaje escrito de forma pertinente",
                            "Reflexiona y evalúa la forma, el contenido y contexto del texto escrito"
                        ],
                        estandares: {
                            "Ciclo I": "Este nivel tiene como base principalmente el nivel 1 de la competencia 'Se comunica oralmente en su lengua materna'.",
                            "Ciclo II": "Escribe a partir de sus hipótesis de escritura diversos tipos de textos sobre temas variados considerando el propósito y el destinatario a partir de su experiencia previa. Desarrolla sus ideas en torno a un tema con la intención de transmitir ideas o emociones. Sigue la linealidad y direccionalidad de la escritura."
                        }
                        , // <-- No olvides la coma
                        desempenos: {
                            "3 años": [
                                "Escribe por propia iniciativa y a su manera sobre lo que le interesa. Utiliza trazos, grafismos u otras formas para expresar sus ideas y emociones a través de una nota, para relatar una vivencia o un cuento."
                            ],
                            "4 años": [
                                "Escribe por propia iniciativa y a su manera sobre lo que le interesa. Utiliza trazos, grafismos u otras formas para expresar sus ideas y emociones a través de una nota, para relatar una vivencia o un cuento."
                            ],
                            "5 años": [
                                "Escribe por propia iniciativa y a su manera sobre lo que le interesa: considera a quién le escribirán y para qué lo escribirá; utiliza trazos, grafismos, letras ordenadas de izquierda a derecha y sobre una línea imaginaria para expresar sus ideas o emociones en torno a un tema a través de una nota o carta, para relatar una vivencia o un cuento.",
                                "Revisa el escrito que ha dictado, en función de lo que quiere comunicar."
                            ]
                        }
                    }
                ]
            },
            "Arte y Cultura": {
                competencias: [
                    {
                        id: "arte-i-c1",
                        nombre: "Aprecia de manera crítica manifestaciones artístico-culturales",
                        capacidades: [
                            "Percibe manifestaciones artístico-culturales",
                            "Contextualiza las manifestaciones culturales",
                            "Reflexiona creativa y críticamente"
                        ],
                        estandares: {
                            "Ciclo I": "Este nivel tiene como base principalmente el nivel 1 de la competencia 'Indaga mediante métodos científicos para construir sus conocimientos'.",
                            "Ciclo II": "Aprecia de manera crítica manifestaciones artístico-culturales al observar, escuchar y describir las características visuales, táctiles, sonoras y kinestésicas de estas manifestaciones, describiendo las sensaciones que le transmiten. Participa de conversaciones sobre los contextos donde se originan manifestaciones artístico-culturales y reconoce que responden a características propias de un grupo de personas, de tiempos y lugares diferentes. Expresa sus preferencias sobre manifestaciones artísticas que observa o experimenta y conversa sobre los temas, las ideas y sentimientos que comunican."
                        }

                    },
                    {
                        id: "arte-i-c2",
                        nombre: "Crea proyectos desde los lenguajes artísticos",
                        capacidades: [
                            "Explora y experimenta los lenguajes del arte",
                            "Aplica procesos creativos",
                            "Evalúa y socializa sus procesos y proyectos"
                        ],
                        estandares: {
                            "Ciclo I": "Crea proyectos artísticos al explorar sensorialmente y con todo su cuerpo una diversidad de materiales y medios artísticos, mientras descubre y experimenta con colores, texturas, formas, espacios, sonidos, canciones, música y movimiento.",
                            "Ciclo II": "Crea proyectos artísticos al experimentar y manipular libremente diversos medios y materiales para descubrir sus propiedades expresivas. Explora los elementos básicos de los lenguajes del arte como el sonido, los colores y el movimiento. Explora sus propias ideas imaginativas que construye a partir de sus vivencias y las transforma en algo nuevo mediante el juego simbólico, el dibujo, la pintura, la construcción, la música y el movimiento creativo. Comparte espontáneamente sus experiencias y creaciones."
                        }
                        , // <-- No olvides la coma
                        desempenos: {
                            "3 años": [
                                "Explora por iniciativa propia diversos materiales de acuerdo con sus necesidades e intereses. Descubre las posibilidades expresivas de sus movimientos y de los materiales con los que trabaja.",
                                "Representa sus ideas acerca de sus vivencias personales usando diferentes lenguajes artísticos (el dibujo, la pintura, la danza o el movimiento, el teatro, la música, los títeres, etc.).",
                                "Muestra y comenta de forma espontánea, a compañeros y adultos de su entorno, lo que ha realizado al jugar y crear proyectos a través de los lenguajes artísticos."
                            ],
                            "4 años": [
                                "Explora por iniciativa propia diversos materiales de acuerdo con sus necesidades e intereses. Descubre los efectos que se producen al combinar un material con otro.",
                                "Representa ideas acerca de sus vivencias personales usando diferentes lenguajes artísticos (el dibujo, la pintura, la danza o el movimiento, el teatro, la música, los títeres, etc.).",
                                "Muestra y comenta de forma espontánea a compañeros y adultos de su entorno, lo que ha realizado, al jugar y crear proyectos a través de los lenguajes artísticos."
                            ],
                            "5 años": [
                                "Explora de manera individual y/o grupal diversos materiales de acuerdo con sus necesidades e intereses. Descubre los efectos que se producen al combinar un material con otro.",
                                "Representa ideas acerca de sus vivencias personales y del contexto en el que se desenvuelve usando diferentes lenguajes artísticos (el dibujo, la pintura, la danza o el movimiento, el teatro, la música, los títeres, etc.).",
                                "Muestra sus creaciones y observa las creaciones de otros. Describe lo que ha creado. A solicitud de la docente, manifiesta lo que le gusta de la experiencia, o de su proyecto y del proyecto de otros."
                            ]
                        }
                    }
                ]
            },
            "Castellano como Segunda Lengua": {
                competencias: [
                    {
                        id: "csl-i-c1",
                        nombre: "Se comunica oralmente en castellano como segunda lengua",
                        capacidades: [
                            "Obtiene información de textos orales",
                            "Infiere e interpreta información de textos orales",
                            "Adecúa, organiza y desarrolla las ideas de forma coherente y cohesionada",
                            "Utiliza recursos no verbales y paraverbales de forma estratégica",
                            "Interactúa estratégicamente con distintos interlocutores",
                            "Reflexiona y evalúa la forma, el contenido y contexto del texto oral"
                        ],
                        estandares: {
                            "Ciclo I": "Este nivel tiene como base el nivel 1 de la competencia 'Se comunica oralmente en su lengua materna'.",
                            "Ciclo II": "Se comunica oralmente mediante palabras o frases breves. Obtiene información de textos acompañados de expresiones corporales, gestos y tono de voz de su interlocutor. Responde a través de algunas palabras aisladas, con apoyo de gestos y expresiones corporales y de su lengua materna."
                        }
                    }
                ]
            },
            "Matemática": {
                competencias: [
                    {
                        id: "mat-i-c1",
                        nombre: "Resuelve problemas de cantidad",
                        capacidades: [
                            "Traduce cantidades a expresiones numéricas",
                            "Comunica su comprensión sobre los números y las operaciones",
                            "Usa estrategias y procedimientos de estimación y cálculo"
                        ],
                        estandares: {
                            "Ciclo I": "Explora por propia iniciativa los objetos y situaciones de su entorno cotidiano utilizando sus sentidos, sus propias estrategias y criterios reconociendo algunas características y estableciendo relaciones o agrupaciones entre ellos y comprende algunas expresiones sencillas relacionadas con la cantidad y el tiempo.",
                            "Ciclo II": "Resuelve problemas referidos a relacionar objetos de su entorno según sus características perceptuales; agrupar, ordenar hasta el quinto lugar, seriar hasta 5 objetos, comparar cantidades de objetos y pesos, agregar y quitar hasta 5 elementos, realizando representaciones con su cuerpo, material concreto o dibujos. Expresa la cantidad de hasta 10 objetos, usando estrategias como el conteo. Usa cuantificadores: 'muchos' 'pocos', 'ninguno', y expresiones: 'más que' 'menos que'. Expresa el peso de los objetos 'pesa más', 'pesa menos' y el tiempo con nociones temporales como 'antes o después', 'ayer' 'hoy' o 'mañana'."
                        }
                        , // <-- No olvides la coma
                        desempenos: {
                            "3 años": [
                                "Establece relaciones entre los objetos de su entorno según sus características perceptuales al comparar y agrupar aquellos objetos similares que le sirven para algún fin, y dejar algunos elementos sueltos.",
                                "Usa algunas expresiones que muestran su comprensión acerca de la cantidad, peso y el tiempo -'muchos', 'pocos', 'pesa mucho', 'pesa poco', 'un ratito'- en situaciones cotidianas.",
                                "Utiliza el conteo espontáneo en situaciones cotidianas siguiendo un orden no convencional respecto de la serie numérica."
                            ],
                            "4 años": [
                                "Establece relaciones entre los objetos de su entorno según sus características perceptuales al comparar y agrupar aquellos objetos similares que le sirven para algún fin, y dejar algunos elementos sueltos.",
                                "Realiza seriaciones por tamaño de hasta tres objetos.",
                                "Establece correspondencia uno a uno en situaciones cotidianas.",
                                "Usa algunas expresiones que muestran su comprensión acerca de la cantidad, el tiempo y el peso -'muchos', 'pocos', 'pesa mucho', 'pesa poco', 'antes' o 'después'- en situaciones cotidianas.",
                                "Utiliza el conteo hasta 5, en situaciones cotidianas en las que requiere contar, empleando material concreto o su propio cuerpo.",
                                "Utiliza los números ordinales 'primero', 'segundo' y 'tercero' para establecer la posición de un objeto o persona en situaciones cotidianas, empleando, en algunos casos, materiales concretos.",
                                "Utiliza el conteo en situaciones cotidianas en las que requiere juntar, agregar o quitar hasta cinco objetos."
                            ],
                            "5 años": [
                                "Establece relaciones entre los objetos de su entorno según sus características perceptuales al comparar y agrupar, y dejar algunos elementos sueltos. El niño dice el criterio que usó para agrupar.",
                                "Realiza seriaciones por tamaño, longitud y grosor hasta con cinco objetos.",
                                "Establece correspondencia uno a uno en situaciones cotidianas.",
                                "Usa diversas expresiones que muestran su comprensión sobre la cantidad, el peso y el tiempo -'muchos', 'pocos', 'ninguno', 'más que', 'menos que', 'pesa más', 'pesa menos', 'ayer', 'hoy' y 'mañana'-, en situaciones cotidianas.",
                                "Utiliza el conteo hasta 10, en situaciones cotidianas en las que requiere contar, empleando material concreto o su propio cuerpo.",
                                "Utiliza los números ordinales 'primero', 'segundo', 'tercero', 'cuarto' y 'quinto' para establecer el lugar o posición de un objeto o persona, empleando material concreto o su propio cuerpo."
                            ]
                        }
                    },
                    {
                        id: "mat-i-c2",
                        nombre: "Resuelve problemas de forma, movimiento y localización",
                        capacidades: [
                            "Modela objetos con formas geométricas y sus transformaciones",
                            "Comunica su comprensión sobre las formas y relaciones geométricas",
                            "Usa estrategias y procedimientos para orientarse en el espacio",
                            "Argumenta afirmaciones sobre relaciones geométricas"
                        ],
                        estandares: {
                            "Ciclo I": "Explora el espacio en situaciones cotidianas utilizando sus sentidos y sus propias estrategias, se desplaza y reconoce su posición o la ubicación de los objetos y comprende algunas expresiones sencillas relacionadas a su ubicación.",
                            "Ciclo II": "Resuelve problemas al relacionar los objetos del entorno con formas bidimensionales y tridimensionales. Expresa la ubicación de personas en relación a objetos en el espacio: 'cerca de', 'lejos de', 'al lado de', y de desplazamientos: 'hacia adelante', 'hacia atrás', 'hacia un lado', 'hacia el otro'. Así también expresa la comparación de la longitud de dos objetos: 'es más largo que', 'es más corto que'. Emplea estrategias para resolver problemas, al construir objetos con material concreto o realizar desplazamientos en el espacio."
                        }
                        , // <-- No olvides la coma
                        desempenos: {
                            "3 años": [
                                "Establece relaciones de medida en situaciones cotidianas. Expresa con su cuerpo o mediante algunas acciones cuando algo es grande o pequeño.",
                                "Se ubica a sí mismo y ubica objetos en el espacio en el que se encuentra; a partir de ello, organiza sus movimientos y acciones para desplazarse. Utiliza expresiones como 'arriba', 'abajo', 'dentro' y 'fuera', que muestran las relaciones que establece entre su cuerpo, el espacio y los objetos que hay en el entorno.",
                                "Prueba diferentes formas de resolver una determinada situación relacionada con la ubicación, el desplazamiento en el espacio y la construcción de objetos con material concreto."
                            ],
                            "4 años": [
                                "Establece relaciones entre las formas de los objetos que están en su entorno.",
                                "Establece relaciones de medida en situaciones cotidianas. Expresa con su cuerpo o mediante algunas palabras cuando algo es grande o pequeño.",
                                "Se ubica a sí mismo y ubica objetos en el espacio en el que se encuentra; a partir de ello, organiza sus movimientos y acciones para desplazarse. Utiliza expresiones como 'arriba', 'abajo', 'dentro', 'fuera', 'delante de', 'detrás de', 'encima', 'debajo', 'hacia adelante' y 'hacia atrás', que muestran las relaciones que establece entre su cuerpo, el espacio y los objetos que hay en el entorno.",
                                "Expresa con material concreto y dibujos sus vivencias, en los que muestra relaciones espaciales entre personas y objetos.",
                                "Prueba diferentes formas de resolver una determinada situación relacionada con la ubicación, desplazamiento en el espacio y la construcción de objetos con material concreto, y elige una para lograr su propósito."
                            ],
                            "5 años": [
                                "Establece relaciones, entre las formas de los objetos que están en su entorno y las formas geométricas que conoce, utilizando material concreto.",
                                "Establece relaciones de medida en situaciones cotidianas y usa expresiones como 'es más largo', 'es más corto'.",
                                "Se ubica a sí mismo y ubica objetos en el espacio en el que se encuentra; a partir de ello, organiza sus movimientos y acciones para desplazarse. Establece relaciones espaciales al orientar sus movimientos y acciones al desplazarse, ubicarse y ubicar objetos en situaciones cotidianas. Las expresa con su cuerpo o algunas palabras como 'cerca de' 'lejos de', 'al lado de'; 'hacia adelante' 'hacia atrás', 'hacia un lado', 'hacia el otro lado' que muestran las relaciones que establece entre su cuerpo, el espacio y los objetos que hay en el entorno.",
                                "Expresa con material concreto y dibujos sus vivencias, en los que muestra relaciones espaciales y de medida entre personas y objetos.",
                                "Prueba diferentes formas de resolver una determinada situación relacionada con la ubicación, desplazamiento en el espacio y la construcción de objetos con material concreto. Elige una manera para lograr su propósito y dice por qué la usó."
                            ]
                        }
                    }
                ]
            },
            "Ciencia y Tecnología": {
                competencias: [
                    {
                        id: "cyt-i-c1",
                        nombre: "Indaga mediante métodos científicos para construir sus conocimientos",
                        capacidades: [
                            "Problematiza situaciones para hacer indagación",
                            "Diseña estrategias para hacer indagación",
                            "Genera y registra datos o información",
                            "Analiza datos e información",
                            "Evalúa y comunica el proceso y resultados de su indagación"
                        ],
                        estandares: {
                            "Ciclo I": "Explora los objetos, el espacio y hechos que acontecen en su entorno, los observa y manipula con todos sus sentidos para obtener información sobre sus características o usos, experimenta y observa los efectos que sus acciones causan sobre ellos.",
                            "Ciclo II": "Explora los objetos, el espacio y hechos que acontecen en su entorno, hace preguntas con base en su curiosidad, propone posibles respuestas, obtiene información al observar, manipular, describir; compara aspectos del objeto o fenómeno para comprobar la respuesta y expresa en forma oral o gráfica lo que hizo y aprendió."
                        }
                        , // <-- No olvides la coma
                        desempenos: {
                            "3 años": [
                                "Hace preguntas que expresan su curiosidad sobre los objetos, seres vivos, hechos o fenómenos que acontecen en su ambiente.",
                                "Obtiene información sobre las características de los objetos y materiales que explora a través de sus sentidos. Usa algunos objetos y herramientas en su exploración.",
                                "Comunica los descubrimientos que hace cuando explora. Utiliza gestos, señas, movimientos corporales o lo hace oralmente."
                            ],
                            "4 años": [
                                "Hace preguntas que expresan su curiosidad sobre los objetos, seres vivos, hechos o fenómenos que acontecen en su ambiente.",
                                "Obtiene información sobre las características de los objetos y materiales que explora a través de sus sentidos. Usa algunos objetos y herramientas en su exploración.",
                                "Comunica los descubrimientos que hace cuando explora. Utiliza gestos, señas, movimientos corporales o lo hace oralmente."
                            ],
                            "5 años": [
                                "Hace preguntas que expresan su curiosidad sobre los objetos, seres vivos, hechos o fenómenos que acontecen en su ambiente; da a conocer lo que sabe y las ideas que tiene acerca de ellos. Plantea posibles explicaciones y/o alternativas de solución frente a una pregunta o situación problemática.",
                                "Propone acciones, y el uso de materiales e instrumentos para buscar información del objeto, ser vivo o hecho de interés que genera interrogantes, o para resolver un problema planteado.",
                                "Obtiene información sobre las características de los objetos, seres vivos, hechos y fenómenos de la naturaleza, y establece relaciones entre ellos a través de la observación, experimentación y otras fuentes proporcionadas (libros, noticias, videos, imágenes, entrevistas). Describe sus características, necesidades, funciones, relaciones o cambios en su apariencia física. Registra la información de diferentes formas (con fotos, dibujos, modelado o de acuerdo con su nivel de escritura).",
                                "Compara sus explicaciones y predicciones con los datos e información que ha obtenido, y participa en la construcción de las conclusiones.",
                                "Comunica -de manera verbal, a través de dibujos, fotos, modelado o según su nivel de escritura- las acciones que realizó para obtener información. Comparte sus resultados y lo que aprendió."
                            ]
                        }
                    }
                ]
            }
        }
    },


    // ═══════════════════════════════════════════════════════════════════════
    // NIVEL: PRIMARIA
    // ═══════════════════════════════════════════════════════════════════════
    "Primaria": {
        ciclos: ["Ciclo III", "Ciclo IV", "Ciclo V"],
        grados: ["1er Grado", "2do Grado", "3er Grado", "4to Grado", "5to Grado", "6to Grado"],

        // Mapeo grado → ciclo
        ciclosPorGrado: {
            "1er Grado": "Ciclo III",
            "2do Grado": "Ciclo III",
            "3er Grado": "Ciclo IV",
            "4to Grado": "Ciclo IV",
            "5to Grado": "Ciclo V",
            "6to Grado": "Ciclo V"
        },

        areas: {
            "Personal Social": {
                competencias: [
                    {
                        id: "ps-p-c1",
                        nombre: "Construye su identidad",
                        capacidades: [
                            "Se valora a sí mismo",
                            "Autorregula sus emociones",
                            "Reflexiona y argumenta éticamente",
                            "Vive su sexualidad de manera integral y responsable de acuerdo a su etapa de desarrollo y madurez"
                        ],
                        estandares: {
                            "Ciclo III": "Construye su identidad al tomar conciencia de los aspectos que lo hacen único, cuando se reconoce a sí mismo a partir de sus características físicas, cualidades, habilidades, intereses y logros y valora su pertenencia familiar y escolar. Distingue sus diversas emociones y comportamientos, menciona las causas y las consecuencias de estos y las regula usando estrategias diversas. Explica con sus propios argumentos por qué considera buenas o malas determinadas acciones. Se relaciona con las personas con igualdad, reconociendo que todos tienen diversas capacidades. Desarrolla comportamientos que fortalecen las relaciones de amistad. Identifica situaciones que afectan su privacidad o la de otros y busca ayuda cuando alguien no la respeta.",
                            "Ciclo IV": "Construye su identidad al tomar conciencia de los aspectos que lo hacen único, cuando se reconoce a sí mismo a partir de sus características personales, sus capacidades y limitaciones reconociendo el papel de las familias en la formación de dichas características. Aprecia su pertenencia cultural a un país diverso. Explica las causas y consecuencias de sus emociones, y utiliza estrategias para regularlas. Manifiesta su punto de vista frente a situaciones de conflicto moral, en función de cómo estas le afectan a él o a los demás. Examina sus acciones en situaciones de conflicto moral que se presentan en la vida cotidiana y se plantea comportamientos que tomen en cuenta principios éticos. Establece relaciones de igualdad entre hombres y mujeres, y explica su importancia. Crea vínculos afectivos positivos y se sobrepone cuando estos cambian. Identifica conductas para protegerse de situaciones que ponen en riesgo su integridad en relación a su sexualidad.",
                            "Ciclo V": "Construye su identidad al tomar conciencia de los aspectos que lo hacen único, cuando se reconoce a sí mismo a partir de sus características personales, culturales y sociales, y de sus logros, valorando el aporte de las familias en su formación personal. Se desenvuelve con agrado y confianza en diversos grupos. Selecciona y utiliza las estrategias más adecuadas para regular sus emociones y comportamiento, y comprende las razones de los comportamientos propios y de los otros. Argumenta su posición frente a situaciones de conflicto moral, considerando las intenciones de las personas involucradas, los principios éticos y las normas establecidas. Analiza las consecuencias de sus decisiones y se propone comportamientos en los que estén presentes criterios éticos. Se relaciona con igualdad o equidad y analiza críticamente situaciones de desigualdad de género en diferentes contextos. Demuestra respeto y cuidado por el otro en sus relaciones afectivas, y propone pautas para prevenir y protegerse de situaciones que afecten su integridad en relación a la salud sexual y reproductiva."
                        }
                        , // <-- No olvides la coma al unirlo con el resto de tu archivo
                        desempenos: {
                            "1°": [
                                "Expresa de diversas maneras algunas de sus características físicas, cualidades, gustos y preferencias, y las diferencia de las de los demás. Ejemplo: El estudiante, al realizar actividades individuales y colectivas, podría decir: 'Yo soy bueno dibujando y mi amiga es buena bailando'. O expresar que es capaz de realizar tareas: 'Yo barro'.",
                                "Comparte con sus compañeros las costumbres y actividades de su familia e institución educativa explicando su participación en ellas.",
                                "Describe, a través de diversas formas de representación, las emociones básicas (alegría, tristeza, miedo u otras) y explica las razones que las originan. Acepta e incorpora en sus acciones algunas normas básicas como límites que le brindan seguridad.",
                                "Autorregula sus emociones en interacción con sus compañeros, con apoyo del docente, al aplicar estrategias básicas de autorregulación (respiración).",
                                "Menciona acciones cotidianas que considera buenas o malas, a partir de sus propias experiencias.",
                                "Participa en juegos y otras actividades de la vida cotidiana sin hacer distinciones de género.",
                                "Identifica a las personas que le muestran afecto y lo hacen sentir protegido y seguro; recurre a ellas cuando las necesita."
                            ],
                            "2°": [
                                "Expresa sus características físicas, habilidades y gustos, y explica las razones de aquello que le agrada de sí mismo. Ejemplo: El estudiante podría decir: 'Me gustan mis manos porque con ellas puedo dibujar lindo'.",
                                "Realiza actividades individuales y colectivas mostrando autonomía y asumiendo retos.",
                                "Expresa agrado al representar las manifestaciones culturales de su familia, institución educativa y comunidad.",
                                "Describe las emociones a partir de su experiencia y de lo que observa en los demás, y las regula teniendo en cuenta normas establecidas de manera conjunta.",
                                "Aplica estrategias de autorregulación (respiración), con la guía del docente.",
                                "Identifica acciones que causan malestar o bienestar a sí mismo o a sus compañeros, y las explica con razones sencillas.",
                                "Explica las diferencias y similitudes entre las niñas y los niños, señalando que todos pueden realizar las mismas actividades tanto en la institución educativa como en la casa, y se relaciona de forma respetuosa con sus compañeros.",
                                "Dialoga con sus compañeros, con el apoyo del docente, sobre situaciones simuladas o personales en las que haya peligro de vulneración de su espacio personal. Explica qué puede hacer y a quiénes puede recurrir en esos casos."
                            ],
                            "3°": [
                                "Describe aquellas características personales, cualidades, habilidades y logros que le hacen sentirse orgulloso de sí mismo; se reconoce como una persona valiosa con características únicas.",
                                "Comparte las manifestaciones culturales, tradiciones y costumbres propias de su familia que hacen que se sienta orgulloso de su origen.",
                                "Describe sus emociones en situaciones cotidianas; reconoce sus causas y consecuencias. Aplica estrategias de autorregulación (ponerse en el lugar del otro, respiración y relajación).",
                                "Identifica situaciones y comportamientos que le causan agrado o desagrado, y explica de manera sencilla por qué.",
                                "Explica que los niños y las niñas pueden asumir las mismas responsabilidades y tareas, y que pueden establecer lazos de amistad basados en el respeto.",
                                "Reconoce a qué personas puede recurrir en situaciones de riesgo o en situaciones donde se vulnera su privacidad."
                            ],
                            "4°": [
                                "Describe sus características físicas, cualidades e intereses, y las fortalezas que le permiten lograr sus metas; manifiesta que estas lo hacen una persona única y valiosa que forma parte de una comunidad familiar y escolar.",
                                "Participa con seguridad y confianza en las tradiciones, costumbres y prácticas culturales que caracterizan a su familia e institución educativa, y muestra aprecio por ellas.",
                                "Relaciona sus diversas emociones con su comportamiento y el de sus compañeros; menciona las causas y consecuencias de estas y las regula mediante el uso de diferentes estrategias de autorregulación (ponerse en el lugar del otro, respiración y relajación).",
                                "Explica con argumentos sencillos por qué considera buenas o malas determinadas acciones o situaciones.",
                                "Se relaciona con niñas y niños con igualdad y respeto, reconoce que puede desarrollar diversas habilidades a partir de las experiencias vividas y realiza actividades que le permiten fortalecer sus relaciones de amistad.",
                                "Identifica situaciones que afectan su privacidad o que lo ponen en riesgo, y explica la importancia de buscar ayuda recurriendo a personas que le dan seguridad."
                            ],
                            "5°": [
                                "Explica sus características personales (cualidades, gustos, fortalezas y limitaciones), las cuales le permiten definir y fortalecer su identidad con relación a su familia.",
                                "Describe las prácticas culturales de su familia, institución educativa y comunidad señalando semejanzas y diferencias.",
                                "Describe sus emociones y explica sus causas y posibles consecuencias. Aplica estrategias de autorregulación (respiración, distanciamiento, relajación y visualización).",
                                "Explica las razones de por qué una acción es correcta o incorrecta, a partir de sus experiencias, y propone acciones que se ajusten a las normas y a los principios éticos.",
                                "Se relaciona con sus compañeros con igualdad, respeto y cuidado del otro; rechaza cualquier manifestación de violencia de género (mensajes sexistas, lenguaje y trato ofensivo para la mujer, entre otros) en el aula, en la institución educativa y en su familia.",
                                "Describe situaciones que ponen en riesgo su integridad, así como las conductas para evitarlas o protegerse."
                            ],
                            "6°": [
                                "Explica las características personales (cualidades, gustos, fortalezas y limitaciones) que tiene por ser parte de una familia, así como la contribución de esta a su formación personal y a su proyecto de vida.",
                                "Explica diversas prácticas culturales de su familia, institución educativa y comunidad, y reconoce que aportan a la diversidad cultural del país.",
                                "Explica las causas y consecuencias de sus emociones y sentimientos, en sí mismo y en los demás, en situaciones reales e hipotéticas. Utiliza estrategias de autorregulación (respiración, distanciamiento, relajación y visualización) de acuerdo a la situación que se presenta.",
                                "Argumenta su postura en situaciones propias de su edad, reales o simuladas, que involucran un dilema moral, considerando cómo estas afectan a él o a los demás.",
                                "Evalúa sus acciones en situaciones de conflicto moral y se plantea comportamientos tomando en cuenta las normas sociales y los principios éticos. Ejemplo: El estudiante podría decir: 'No hagas a otro lo que no quieres que te hagan a ti' (para explicar por qué no es bueno poner apodos a sus compañeros).",
                                "Participa en diversas actividades con sus compañeros en situaciones de igualdad, cuidando y respetando su espacio personal, su cuerpo y el de los demás. Ejemplo: El estudiante exige un trato respetuoso por parte de sus compañeros.",
                                "Propone conductas para protegerse en situaciones que ponen en riesgo su integridad con relación a su sexualidad. Ejemplo: El estudiante se comunica solo con personas conocidas en las redes sociales, no acepta invitaciones de desconocidos."
                            ]
                        }
                    },
                    {
                        id: "ps-p-c2",
                        nombre: "Convive y participa democráticamente en la búsqueda del bien común",
                        capacidades: [
                            "Interactúa con todas las personas",
                            "Construye normas y asume acuerdos y leyes",
                            "Maneja conflictos de manera constructiva",
                            "Delibera sobre asuntos públicos",
                            "Participa en acciones que promueven el bienestar común"
                        ],
                        estandares: {
                            "Ciclo III": "Convive y participa democráticamente cuando se relaciona con los demás respetando las diferencias y cumpliendo con sus deberes. Conoce las costumbres y características de las personas de su localidad o región. Construye de manera colectiva acuerdos y normas. Usa estrategias sencillas para resolver conflictos. Realiza acciones específicas para el beneficio de todos a partir de la deliberación sobre asuntos de interés común tomando como fuente sus experiencias previas.",
                            "Ciclo IV": "Convive y participa democráticamente cuando se relaciona con los demás respetando las diferencias, expresando su desacuerdo frente a situaciones que vulneran la convivencia y cumpliendo con sus deberes. Conoce las manifestaciones culturales de su localidad, región o país. Construye y evalúa acuerdos y normas tomando en cuenta el punto de vista de los demás. Recurre al diálogo para manejar conflictos. Propone y realiza acciones colectivas orientadas al bienestar común a partir de la deliberación sobre asuntos de interés público, en la que se da cuenta que existen opiniones distintas a la suya.",
                            "Ciclo V": "Convive y participa democráticamente cuando se relaciona con los demás, respetando las diferencias, los derechos de cada uno, cumpliendo y evaluando sus deberes. Se interesa por relacionarse con personas de culturas distintas y conocer sus costumbres. Construye y evalúa normas de convivencia tomando en cuenta sus derechos. Maneja conflictos utilizando el diálogo y la mediación con base en criterios de igualdad o equidad. Propone, planifica y realiza acciones colectivas orientadas al bien común, la solidaridad, la protección de las personas vulnerables y la defensa de sus derechos. Delibera sobre asuntos de interés público con argumentos basados en fuentes y toma en cuenta la opinión de los demás."
                        }
                        , // <-- No olvides la coma al unirlo con el resto de tu archivo
                        desempenos: {
                            "1°": [
                                "Establece relaciones con sus compañeros respetando sus diferencias y tratándolos con amabilidad y respeto. Cumple con sus deberes en el aula, para beneficio de todos.",
                                "Describe las características culturales que distinguen al pueblo de origen de sus familiares (bailes, comidas, vestimenta, etc.) y las comparte.",
                                "Participa en la elaboración de acuerdos y normas, y los cumple.",
                                "Utiliza estrategias para manejar sus conflictos en el aula con ayuda de un adulto; de esta manera, propicia el buen trato entre compañeros.",
                                "Delibera sobre asuntos de interés común enfatizando en los que se generan durante la convivencia diaria en el aula, para proponer y participar en actividades colectivas orientadas al bienestar de todos, a partir de la identificación de necesidades."
                            ],
                            "2°": [
                                "Comparte actividades con sus compañeros respetando sus características físicas o culturales. Identifica sus derechos y cumple con sus deberes en el aula de acuerdo a su edad.",
                                "Describe las características culturales que distinguen a su localidad o región (bailes, comidas, vestimenta, etc.) y las comparte.",
                                "Participa en la elaboración de acuerdos y normas que reflejen el buen trato entre compañeros, y los cumple.",
                                "Utiliza estrategias para manejar sus conflictos en el aula con ayuda de un adulto; de esta manera, propicia el buen trato entre compañeros.",
                                "Delibera sobre asuntos de interés común enfatizando en los que se generan durante la convivencia diaria en el aula, para proponer y participar en actividades colectivas orientadas al reconocimiento y respeto de sus derechos como niños y niñas, a partir de situaciones cotidianas."
                            ],
                            "3°": [
                                "Muestra un trato respetuoso e inclusivo con sus compañeros de aula y expresa su desacuerdo en situaciones reales e hipotéticas de maltrato en su institución educativa. Cumple con sus deberes.",
                                "Describe algunas manifestaciones culturales de su localidad o de su pueblo de origen. Se refiere a sí mismo como integrante de una localidad específica o de un pueblo originario.",
                                "Participa en la elaboración de acuerdos y normas de convivencia en el aula, teniendo en cuenta los deberes y derechos del niño, y escucha las propuestas de sus compañeros; explica la importancia de la participación de todos en dicha elaboración.",
                                "Interviene al observar un conflicto entre compañeros: recurre al diálogo o a un adulto cercano para que intervenga si es necesario.",
                                "Delibera sobre asuntos de interés público para proponer y participar en actividades colectivas orientadas al bien común (seguridad vial, entre otras), a partir de situaciones cotidianas, y reconoce que existen opiniones distintas a la suya."
                            ],
                            "4°": [
                                "Muestra un trato respetuoso e inclusivo con sus compañeros de aula y expresa su desacuerdo en situaciones de maltrato y discriminación por razones de etnia, edad, género o discapacidad (niños, ancianos y personas con discapacidad). Cumple con sus deberes.",
                                "Explica algunas manifestaciones culturales de su localidad, región o país. Se refiere a sí mismo como integrante de una localidad específica o de un pueblo originario.",
                                "Participa en la elaboración de acuerdos y normas de convivencia en el aula, teniendo en cuenta los deberes y derechos del niño, y considera las propuestas de sus compañeros. Evalúa el cumplimiento de dichos acuerdos y normas, y propone cómo mejorarlo.",
                                "Propone alternativas de solución a los conflictos por los que atraviesa: recurre al diálogo y a la intervención de mediadores si lo cree necesario.",
                                "Delibera sobre asuntos de interés público (problemas de seguridad vial, delincuencia juvenil, incumplimiento de sus derechos, etc.) para proponer y participar en actividades colectivas orientadas al bien común, y reconoce que existen opiniones distintas a la suya."
                            ],
                            "5°": [
                                "Establece relaciones con sus compañeros sin discriminarlos. Propone acciones para mejorar la interacción entre compañeros, a partir de la reflexión sobre conductas propias o de otros, en las que se evidencian los prejuicios y estereotipos más comunes de su entorno (de género, raciales, entre otros). Evalúa el cumplimiento de sus deberes.",
                                "Muestra interés por participar en actividades que le permitan relacionarse con sus compañeros y personas de distintas culturas para conocer sus costumbres.",
                                "Participa en la construcción consensuada de normas de convivencia del aula, teniendo en cuenta los deberes y derechos del niño, y evalúa su cumplimiento. Utiliza el diálogo y la negociación para superar los conflictos. Explica que los conflictos se originan por no reconocer a los otros como sujetos con los mismos derechos y por falta de control de las emociones.",
                                "Propone, a partir de un diagnóstico y de la deliberación sobre asuntos públicos, acciones orientadas al bien común, la solidaridad, la protección de personas vulnerables y la defensa de sus derechos. Sustenta su posición basándose en fuentes."
                            ],
                            "6°": [
                                "Muestra un trato respetuoso e inclusivo con sus compañeros de aula y propone acciones para mejorar la convivencia a partir de la reflexión sobre conductas propias o de otros. Evalúa el cumplimiento de sus deberes y los de sus compañeros, y propone cómo mejorarlo.",
                                "Se comunica por diversos medios con personas de una cultura distinta a la suya (afrodescendiente, tusán, nisei, entre otras), para aprender de ella.",
                                "Participa en la construcción consensuada de normas de convivencia del aula, teniendo en cuenta los deberes y derechos del niño, y evalúa su cumplimiento. Cumple con sus deberes y promueve que sus compañeros también lo hagan.",
                                "Recurre al diálogo o a mediadores para solucionar conflictos y buscar la igualdad o equidad; propone alternativas de solución.",
                                "Propone, a partir de un diagnóstico y de la deliberación sobre asuntos públicos, acciones orientadas al bien común, la solidaridad, la protección de personas vulnerables y la defensa de sus derechos, tomando en cuenta la opinión de los demás. Sustenta su posición basándose en fuentes."
                            ]
                        }
                    },
                    {
                        id: "ps-p-c3",
                        nombre: "Construye interpretaciones históricas",
                        capacidades: [
                            "Interpreta críticamente fuentes diversas",
                            "Comprende el tiempo histórico",
                            "Elabora explicaciones sobre procesos históricos"
                        ],
                        estandares: {
                            "Ciclo III": "Construye interpretaciones históricas en las que describe los cambios ocurridos en su familia y comunidad a partir de comparar el presente y el pasado, y de reconocer algunas causas y consecuencias de estos cambios. Obtiene información sobre el pasado de diversos tipos de fuentes, así como expresiones temporales propias de la vida cotidiana. Secuencia hechos o acciones cotidianas ocurridos en periodos de tiempo cortos e identifica acciones simultáneas.",
                            "Ciclo IV": "Construye interpretaciones históricas en las que narra hechos y procesos relacionados a la historia de su región, en los que incorpora más de una dimensión y reconoce diversas causas y consecuencias. Utiliza información de diversas fuentes a partir de identificar las más pertinentes para responder sus preguntas. Organiza secuencias para comprender cambios ocurridos a través del tiempo, aplicando términos relacionados al tiempo.",
                            "Ciclo V": "Construye interpretaciones históricas en las que explica, de manera general, procesos históricos peruanos, empleando algunas categorías temporales. Identifica las causas inmediatas y lejanas que desencadenaron dichos procesos, así como las consecuencias cuyos efectos se ven de inmediato o a largo plazo. Ordena cronológicamente procesos históricos peruanos y describe algunos cambios, permanencias y simultaneidades producidos en ellos. Utiliza información de diversas fuentes a partir de identificar su origen y distinguiendo algunas diferencias entre las versiones que dan sobre los procesos históricos."
                        }
                        , // <-- No olvides la coma al unirlo con el resto de tu archivo
                        desempenos: {
                            "1°": [
                                "Obtiene información de imágenes y objetos antiguos, testimonios de personas y expresiones temporales propias de la vida cotidiana, y reconoce que le brindan mayor información sobre su historia familiar y la de su comunidad.",
                                "Ordena hechos o acciones de su vida cotidiana usando expresiones que hagan referencia al paso del tiempo: ayer, hoy, mañana; antes, ahora; al inicio, al final; mucho tiempo, poco tiempo.",
                                "Describe acontecimientos de su historia personal y familiar, en los que compara el presente y el pasado; identifica alguna causa de los cambios."
                            ],
                            "2°": [
                                "Obtiene información sobre sí mismo o sobre diversos hechos cotidianos del pasado, a partir del testimonio oral de dos o más personas, y de objetos en desuso, fotografías, etc.",
                                "Secuencia acciones o hechos cotidianos de su vida personal, familiar y de la comunidad, y reconoce aquellos que suceden de manera simultánea.",
                                "Describe acontecimientos de su historia y de la comunidad a partir de objetos, imágenes y testimonios de personas, en los que compara el presente y el pasado; identifica algunas causas y posibles consecuencias de los cambios."
                            ],
                            "3°": [
                                "Obtiene información acerca del proceso del poblamiento americano y de las primeras bandas a las primeras aldeas en el Perú, en textos cortos, así como en edificios antiguos o conjuntos arqueológicos de la localidad.",
                                "Explica la importancia de fuentes históricas, como edificios antiguos o conjuntos arqueológicos de la localidad; identifica al autor o colectivo humano que las produjo.",
                                "Secuencia imágenes, objetos o hechos utilizando categorías temporales (antes, ahora y después; años, décadas y siglos); describe algunas características que muestran cambios en diversos aspectos de la vida cotidiana y de la historia del poblamiento americano hasta el proceso de sedentarización.",
                                "Narra procesos históricos, como el poblamiento americano y el de la sedentarización; reconoce más de una causa y algunas consecuencias."
                            ],
                            "4°": [
                                "Identifica fuentes pertinentes que contengan la información que necesita para responder preguntas relacionadas con las principales sociedades prehispánicas y la Conquista.",
                                "Obtiene información sobre hechos concretos en fuentes de divulgación y difusión histórica (enciclopedias, páginas webs, libros de texto, videos, etc.), y la utiliza para responder preguntas con relación a las principales sociedades andinas, preíncas e incas, y la Conquista.",
                                "Secuencia imágenes, objetos o hechos, y describe algunas características que muestran los cambios en diversos aspectos de la vida cotidiana y de las grandes etapas convencionales de la historia del Perú utilizando categorías temporales (años, décadas y siglos).",
                                "Explica hechos o procesos históricos claves de su región, de las principales sociedades andinas, preíncas e incas, y la Conquista; reconoce las causas que los originaron y sus consecuencias teniendo en cuenta más de una dimensión (política, económica, ambiental, social, cultural, entre otras)."
                            ],
                            "5°": [
                                "Obtiene información sobre un hecho o proceso histórico, desde el Virreinato hasta el proceso de la Independencia del Perú, a partir de cuadros estadísticos, gráficos sencillos o investigaciones históricas.",
                                "Identifica en qué se diferencian las narraciones sobre un mismo acontecimiento del pasado relacionado con el Virreinato y el proceso de Independencia del Perú.",
                                "Secuencia cronológicamente las grandes etapas convencionales de la historia nacional y distingue qué las caracteriza.",
                                "Identifica cambios y permanencias con relación a la economía, la política y la sociedad entre el Virreinato y la actualidad.",
                                "Identifica algunas causas que tienen origen en acciones individuales y otras que se originan en acciones colectivas, con relación al Virreinato y al proceso de Independencia del Perú.",
                                "Explica el proceso de Independencia del Perú y Sudamérica; reconoce la participación de hombres y mujeres en dichos acontecimientos."
                            ],
                            "6°": [
                                "Selecciona fuentes que le proporcionan información sobre hechos y procesos históricos peruanos del siglo XIX y XX, y los ubica en el momento en que se produjeron.",
                                "Identifica las diferencias entre las versiones que las fuentes presentan sobre hechos o procesos históricos peruanos del siglo XIX y XX.",
                                "Secuencia distintos hechos de la historia local, regional y nacional del Perú de los siglos XIX y XX; identifica cambios, permanencias y simultaneidades.",
                                "Explica hechos o procesos históricos peruanos del siglo XIX y XX utilizando categorías temporales relacionadas con el tiempo histórico, e identifica algunas causas y consecuencias inmediatas y de largo plazo.",
                                "Explica hechos y procesos históricos peruanos del siglo XIX y XX; reconoce la participación de hombres y mujeres en ellos."
                            ]
                        }
                    },
                    {
                        id: "ps-p-c4",
                        nombre: "Gestiona responsablemente el espacio y el ambiente",
                        capacidades: [
                            "Comprende las relaciones entre los elementos naturales y sociales",
                            "Maneja fuentes de información para comprender el espacio geográfico y el ambiente",
                            "Genera acciones para conservar el ambiente local y global"
                        ],
                        estandares: {
                            "Ciclo III": "Gestiona responsablemente el espacio y ambiente al desarrollar actividades sencillas frente a los problemas y peligros que lo afectan. Explica de manera sencilla las relaciones directas que se dan entre los elementos naturales y sociales de su espacio cotidiano. Utiliza puntos de referencia para ubicarse, desplazarse y representar su espacio.",
                            "Ciclo IV": "Gestiona responsablemente el espacio y ambiente al realizar actividades específicas para su cuidado a partir de reconocer las causas y consecuencias de los problemas ambientales. Reconoce cómo sus acciones cotidianas impactan en el ambiente, en el calentamiento global y en su bienestar, e identifica los lugares vulnerables y seguros de su escuela, frente a desastres. Describe las características de los espacios geográficos y el ambiente de su localidad o región. Utiliza representaciones cartográficas sencillas, tomando en cuenta los puntos cardinales y otros elementos cartográficos, para ubicar elementos del espacio.",
                            "Ciclo V": "Gestiona responsablemente el espacio y ambiente al realizar frecuentemente actividades para su cuidado y al disminuir los factores de vulnerabilidad frente al cambio climático y a los desastres en su escuela. Utiliza distintas fuentes y herramientas cartográficas y socioculturales para ubicar elementos en el espacio geográfico y el ambiente, y compara estos espacios a diferentes escalas considerando la acción de los actores sociales. Explica las problemáticas ambientales y territoriales a partir de sus causas, consecuencias y sus manifestaciones a diversas escalas."
                        }
                        , // <-- No olvides la coma al unirlo con el resto de tu archivo
                        desempenos: {
                            "1°": [
                                "Describe los elementos naturales y sociales del espacio donde realiza sus actividades cotidianas. [cite: 25]",
                                "Se desplaza utilizando puntos de referencia y nociones espaciales ('delante de', 'detrás de', 'debajo de', 'encima de', 'al lado de', 'dentro de', 'fuera de', 'cerca de', 'lejos de', 'derecha-izquierda'...) para ubicarse en su espacio cotidiano. [cite: 25, 26]",
                                "Representa de diversas maneras su espacio cotidiano utilizando puntos de referencia. [cite: 26]",
                                "Menciona los problemas ambientales que afectan a su espacio cotidiano (contaminación por basura y residuos) y los efectos de estos en su vida; participa de acciones sencillas orientadas al cuidado de su ambiente. [cite: 26, 27]",
                                "Reconoce y sigue las señales de evacuación y medidas de seguridad en la institución educativa ante peligros que lo afectan. [cite: 27]"
                            ],
                            "2°": [
                                "Brinda ejemplos de relaciones simples entre elementos naturales y sociales del espacio donde realiza sus actividades cotidianas. [cite: 25]",
                                "Se desplaza en su espacio cotidiano siguiendo instrucciones para localizar objetos, personas o continuar una ruta usando puntos de referencia. Ejemplo: El estudiante se desplaza desde la institución educativa hasta la plaza de la comunidad. [cite: 26]",
                                "Representa su espacio cotidiano de diversas maneras (dibujos, croquis, maquetas, etc.) utilizando puntos de referencia. [cite: 26]",
                                "Identifica las posibles causas y consecuencias de los problemas ambientales (contaminación de aire, suelo y del aire) que afectan su espacio cotidiano; participa de acciones sencillas orientadas al cuidado de su ambiente. [cite: 26, 27]",
                                "Practica y desarrolla actividades sencillas para prevenir accidentes y actuar en emergencias, en su aula y hogar, y conservar su ambiente: arrojar residuos sólidos en los tachos, cerrar el caño luego de usarlo, cuidar las plantas, etc. [cite: 27]"
                            ],
                            "3°": [
                                "Describe los elementos naturales y sociales de su localidad y región; asocia recursos naturales con actividades económicas. [cite: 25]",
                                "Identifica los elementos cartográficos que están presentes en planos y mapas, y los utiliza para ubicar elementos del espacio geográfico de su localidad. [cite: 25, 26]",
                                "Describe los problemas ambientales de su localidad y región; propone y realiza actividades orientadas a solucionarlos y a mejorar la conservación del ambiente desde su escuela, evaluando su efectividad a fin de llevarlas a cabo. [cite: 26]",
                                "Identifica en su institución educativa los lugares seguros y vulnerables ante desastres, y participa en actividades para la prevención (simulacros, señalización, etc.) y participa en ellas. [cite: 27]"
                            ],
                            "4°": [
                                "Describe los espacios geográficos urbanos y rurales de su localidad y región, y de un área natural protegida; reconoce la relación entre los elementos naturales y sociales que los componen. [cite: 25]",
                                "Identifica los elementos cartográficos que están presentes en planos y mapas, y los utiliza para ubicar elementos del espacio geográfico de su localidad y región. [cite: 25, 26]",
                                "Describe los problemas ambientales de su localidad y región e identifica las acciones cotidianas que los generan, así como sus consecuencias. A partir de ellas, propone y realiza actividades orientadas a la conservación del ambiente en su institución educativa, localidad y región. [cite: 26]",
                                "Identifica y describe las principales áreas naturales protegidas de su localidad o región, e investiga sobre los beneficios y servicios ambientales que estas otorgan a los seres humanos, y sobre el impacto que estos tienen para su sostenibilidad. [cite: 26, 27]"
                            ],
                            "5°": [
                                "Compara los elementos naturales y sociales de los espacios geográficos de su localidad y región, y de un área natural protegida, y explica cómo los distintos actores sociales intervienen en su transformación de acuerdo a su función. [cite: 25]",
                                "Utiliza diversas herramientas cartográficas para obtener información y ubicar elementos en el espacio geográfico y el ambiente. [cite: 25]",
                                "Explica las características de una problemática ambiental, como la deforestación, la contaminación del mar, la desertificación y la pérdida de suelo, y las de una problemática territorial, como el caos en el transporte, a nivel local. [cite: 26]",
                                "Explica los factores de vulnerabilidad ante desastres naturales en su institución educativa, localidad y región; propone y ejecuta acciones para reducirlos o adaptarse a ellos. [cite: 26, 27]",
                                "Explica el uso de recursos naturales renovables y no renovables que realiza su escuela, y planifica y ejecuta actividades orientadas a mejorar las prácticas para la conservación del ambiente, en su escuela y en su localidad relacionadas al manejo y uso del agua, la energía, 3R y residuos sólidos, conservación de los ecosistemas, transporte, entre otros. [cite: 27]"
                            ],
                            "6°": [
                                "Describe las relaciones que se establecen entre los elementos naturales y sociales de un determinado espacio geográfico de su localidad o región, o de un área natural protegida, así como las características de la población que lo habita y las actividades económicas que esta realiza. [cite: 25]",
                                "Identifica los elementos cartográficos presentes en planos y mapas que le permitan obtener información sobre los elementos del espacio geográfico y del ambiente. [cite: 26]",
                                "Explica los servicios ambientales que brindan las principales áreas naturales protegidas de su localidad o región, y propone y lleva a cabo soluciones prácticas para potenciar sus sostenibilidades. [cite: 26]",
                                "Explica las causas y consecuencias de una problemática ambiental, del calentamiento global, y de una problemática territorial, como la expansión urbana versus la reducción de tierras de cultivo, a nivel local, regional y nacional. [cite: 26]",
                                "Explica los factores de vulnerabilidad ante desastres, en su escuela y localidad, y aquellos factores de vulnerabilidad local frente a los efectos del cambio climático; propone y ejecuta acciones para reducirlos. [cite: 26]",
                                "Explica el uso de recursos naturales renovables y no renovables, y los patrones de consumo de su comunidad, y planifica y ejecuta acciones orientadas a mejorar las prácticas para la conservación del ambiente, en su escuela y en su localidad relacionadas al manejo y uso del agua, la energía, 3R (reducir, reusar y reciclar) y residuos sólidos, conservación de los ecosistemas terrestres y marinos, transporte, entre otros, teniendo en cuenta el desarrollo sostenible. [cite: 27]"
                            ]
                        }
                    },
                    {
                        id: "ps-p-c5",
                        nombre: "Gestiona responsablemente los recursos económicos",
                        capacidades: [
                            "Comprende las relaciones entre los elementos del sistema económico y financiero",
                            "Toma decisiones económicas y financieras"
                        ],
                        estandares: {
                            "Ciclo III": "Gestiona responsablemente los recursos económicos al utilizar los bienes y servicios con los que cuenta en su familia y en la escuela. Reconoce que las personas y las instituciones de su comunidad desarrollan actividades económicas para satisfacer sus necesidades y que contribuyen a su bienestar.",
                            "Ciclo IV": "Gestiona responsablemente los recursos económicos al diferenciar entre necesidades y deseos, y al usar los servicios públicos de su espacio cotidiano, reconociendo que tienen un costo. Reconoce que los miembros de su comunidad se vinculan al desempeñar distintas actividades económicas y que estas actividades inciden en su bienestar y en el de las otras personas.",
                            "Ciclo V": "Gestiona responsablemente los recursos económicos al utilizar el dinero y otros recursos como consumidor informado y al realizar acciones de ahorro, inversión y cuidado de ellos. Explica el papel de la publicidad frente a las decisiones de consumo y en la planificación de los presupuestos personales y familiares, así como la importancia de cumplir con el pago de impuestos, tributos y deudas como medio para el bienestar común. Explica los roles que cumplen las empresas y el Estado respecto a la satisfacción de las necesidades económicas y financieras de las personas."
                        }
                        , // <-- No olvides la coma al unirlo con el resto de tu archivo
                        desempenos: {
                            "1°": [
                                "Explica las ocupaciones que desarrollan las personas de su espacio cotidiano y cómo atienden a sus necesidades y a las de la comunidad."
                            ],
                            "2°": [
                                "Explica que los recursos que se consumen en su hogar e institución educativa son producto de las actividades económicas que desarrollan las personas y las instituciones de su comunidad, para satisfacer sus necesidades y a las de la comunidad; identifica acciones que le permiten el ahorro."
                            ],
                            "3°": [
                                "Describe los roles económicos que cumplen las personas de su comunidad e identifica las relaciones que se establecen entre ellas para satisfacer sus necesidades y generar bienestar en las demás.",
                                "Ejecuta acciones que contribuyen a su economía familiar diferenciando entre necesidades y deseos; utiliza responsablemente los recursos, reconociendo que se agotan; y realiza acciones cotidianas de ahorro del dinero.",
                                "Utiliza responsablemente los servicios públicos de su espacio cotidiano y reconoce que tienen un costo y deben ser bien utilizados."
                            ],
                            "4°": [
                                "Explica que el trabajo que realizan sus familiares y demás personas permite la obtención de dinero para la adquisición de ciertos bienes y servicios con la finalidad de satisfacer las necesidades de consumo.",
                                "Usa de manera responsable los recursos, dado que estos se agotan, y realiza acciones cotidianas de ahorro del dinero y de los bienes y servicios que se consumen en su hogar y su institución educativa."
                            ],
                            "5°": [
                                "Explica cómo el Estado promueve y garantiza los intercambios económicos en diferentes sectores y cómo las empresas producen bienes y servicios para contribuir al desarrollo sostenible de la sociedad.",
                                "Argumenta la importancia de cumplir con los compromisos de pago de deudas y responsabilidades tributarias para mejorar los bienes y servicios públicos.",
                                "Explica cuál es el rol de la publicidad y cómo influye en sus decisiones de consumo y en las de su familia.",
                                "Elabora un presupuesto personal y familiar; explica cómo el uso del dinero afecta positiva o negativamente a las personas y a las familias; y formula planes de ahorro e inversión personal y de aula, de acuerdo con metas trazadas y fines previstos."
                            ],
                            "6°": [
                                "Explica el proceso económico, el funcionamiento del mercado y cómo las personas, las empresas y el Estado (los agentes económicos) cumplen distintos roles económicos, se organizan y producen mediante el uso del dinero para la adquisición de estos.",
                                "Argumenta la importancia del ahorro y la inversión de recursos, así como de la cultura de pago de las deudas contraídas.",
                                "Representa de diversas maneras cómo influye la publicidad en sus decisiones de consumo.",
                                "Toma decisiones como consumidor responsable al ejercer sus derechos y responsabilidades.",
                                "Promueve actividades para fomentar el respeto de los derechos del consumidor, la responsabilidad socioambiental de las empresas, y el ahorro personal y la cultura de pago de impuestos."
                            ]
                        }
                    }
                ]
            },
            "Educación Religiosa": {
                competencias: [
                    {
                        id: "er-p-c1",
                        nombre: "Construye su identidad como persona humana, amada por Dios, digna, libre y trascendente, comprendiendo la doctrina de su propia religión, abierto al diálogo con las que le son cercanas",
                        capacidades: [
                            "Conoce a Dios y asume su identidad religiosa como persona digna, libre y trascendente",
                            "Cultiva y valora las manifestaciones religiosas de su entorno argumentando su fe de manera comprensible y respetuosa"
                        ],
                        estandares: {
                            "Ciclo III": "Los estándares de Educación Religiosa se encuentran en un documento complementario específico del área.",
                            "Ciclo IV": "Los estándares de Educación Religiosa se encuentran en un documento complementario específico del área.",
                            "Ciclo V": "Los estándares de Educación Religiosa se encuentran en un documento complementario específico del área."
                        }
                        , // <-- No olvides la coma al unirlo con el resto de tu archivo
                        desempenos: {
                            "1°": [
                                "Identifica que Dios manifiesta su amor en la Creación y lo relaciona con el amor que recibe de sus padres, docentes y amigos.",
                                "Comprende los principales hechos de la Historia de la Salvación y los relaciona con su familia y su institución educativa.",
                                "Se relaciona con su prójimo de manera fraterna y respeta las expresiones de fe de los demás.",
                                "Reconoce lo bueno y lo malo de sus acciones, y asume actitudes de cambio para imitar a Jesús."
                            ],
                            "2°": [
                                "Relaciona sus experiencias de vida con los acontecimientos de la Historia de la Salvación.",
                                "Identifica que Dios nos creó, por amor, a su imagen y semejanza, y valora sus características personales como hijo de Dios.",
                                "Explica los principales hechos de la Historia de la Salvación y los relaciona con su entorno.",
                                "Establece relaciones fraternas y respetuosas con los demás en diferentes escenarios, y participa en celebraciones religiosas de su comunidad.",
                                "Discrimina lo bueno y lo malo de sus acciones, y asume actitudes de cambio y compromiso para imitar a Jesús."
                            ],
                            "3°": [
                                "Identifica la acción de Dios en diversos acontecimientos de la Historia de la Salvación.",
                                "Conoce a Dios Padre, que se manifiesta en las Sagradas Escrituras, y acepta el mensaje que le da a conocer para vivir en armonía con Él y con los demás.",
                                "Expresa su fe al participar en su comunidad y respeta a sus compañeros y a los que profesan diferentes credos.",
                                "Se compromete a una convivencia cristiana basada en el diálogo y el respeto mutuo."
                            ],
                            "4°": [
                                "Descubre que Dios es su Padre y Creador, que se manifiesta en la Historia de la Salvación para la salvación de todos, y que en su Hijo Jesús cumple su promesa de salvación.",
                                "Conoce a Dios Padre como hijo amado según las Sagradas Escrituras para vivir en armonía con su entorno.",
                                "Participa en la Iglesia como comunidad de fe y amor, y respeta la integridad de las personas y las diversas manifestaciones religiosas.",
                                "Promueve la convivencia cristiana basada en el diálogo, el respeto, la comprensión y el amor fraterno."
                            ],
                            "5°": [
                                "Explica el amor de Dios presente en la Creación y se compromete a cuidarla.",
                                "Reconoce el amor de Dios presente en la Historia de la Salvación respetándose a sí mismo y a los demás.",
                                "Expresa su amor a Dios y al prójimo realizando acciones que fomentan el respeto por la vida humana.",
                                "Promueve la convivencia armónica en su entorno más cercano y fortalece su identidad como hijo de Dios."
                            ],
                            "6°": [
                                "Comprende el amor de Dios desde el cuidado de la Creación y respeta la dignidad y la libertad de la persona humana.",
                                "Comprende la acción de Dios revelada en la Historia de la Salvación y en su propia historia, que respeta la dignidad y la libertad de la persona humana.",
                                "Demuestra su amor a Dios atendiendo las necesidades del prójimo y fortalece así su crecimiento personal y espiritual.",
                                "Fomenta en toda ocasión y lugar una convivencia cristiana basada en el diálogo, el respeto, la comprensión y el amor fraterno."
                            ]
                        }
                    },
                    {
                        id: "er-p-c2",
                        nombre: "Asume la experiencia del encuentro personal y comunitario con Dios en su proyecto de vida en coherencia con su creencia religiosa",
                        capacidades: [
                            "Transforma su entorno desde el encuentro personal y comunitario con Dios y desde la fe que profesa",
                            "Actúa coherentemente en razón de su fe según los principios de su conciencia moral en situaciones concretas de la vida"
                        ],
                        estandares: {
                            "Ciclo III": "Los estándares de Educación Religiosa se encuentran en un documento complementario específico del área.",
                            "Ciclo IV": "Los estándares de Educación Religiosa se encuentran en un documento complementario específico del área.",
                            "Ciclo V": "Los estándares de Educación Religiosa se encuentran en un documento complementario específico del área."
                        }
                        , // <-- No olvides la coma al unirlo con el resto de tu archivo
                        desempenos: {
                            "1°": [
                                "Descubre el amor de Dios con diversas acciones, en su familia, institución educativa y entorno.",
                                "Muestra en forma oral, gráfica y corporal el amor a su amigo Jesús.",
                                "Practica el silencio y la oración como medios para comunicarse con Dios.",
                                "Agradece a Dios por la Creación y por todos los dones recibidos."
                            ],
                            "2°": [
                                "Expresa el amor de Dios con diversas acciones, siguiendo el ejemplo de su amigo Jesús, en su familia, institución educativa y entorno.",
                                "Expresa en forma oral, gráfica, escrita y corporal el amor a su amigo Jesús.",
                                "Practica el silencio y la oración en celebraciones de fe para comunicarse con Dios.",
                                "Agradece a Dios por la naturaleza, la vida y los dones recibidos asumiendo un compromiso de cuidado y respeto."
                            ],
                            "3°": [
                                "Muestra su fe mediante acciones concretas en la convivencia diaria; para ello, aplica las enseñanzas bíblicas y de los santos.",
                                "Reconoce el amor de Dios asumiendo acciones para mejorar la relación con su familia y la institución educativa.",
                                "Participa en momentos de encuentro con Dios, personal y comunitariamente, y celebra su fe con gratitud.",
                                "Participa responsablemente en el cuidado de sí mismo, del prójimo y de la naturaleza como creación de Dios."
                            ],
                            "4°": [
                                "Expresa su fe mediante acciones concretas en la convivencia cotidiana, en coherencia con relatos bíblicos y la vida de los santos.",
                                "Descubre el amor de Dios proponiendo acciones para mejorar la relación con su familia, institución educativa y comunidad.",
                                "Interioriza la acción de Dios en su vida personal y en su entorno, y celebra su fe con confianza y gratitud.",
                                "Participa activamente y motiva a los demás en el respeto y cuidado de sí mismos, del prójimo y de la naturaleza como creación de Dios."
                            ],
                            "5°": [
                                "Relaciona el amor de Dios con sus experiencias de vida, para actuar con coherencia.",
                                "Acepta las enseñanzas de Jesucristo, para asumir cambios de comportamiento al interactuar con los demás.",
                                "Participa en espacios de encuentro personal y comunitario con Dios y fortalece así su fe como miembro activo de su familia, Iglesia y comunidad.",
                                "Participa proactivamente en acciones de cambio a imagen de Jesucristo, para alcanzar una convivencia justa y fraterna con los demás."
                            ],
                            "6°": [
                                "Expresa el amor de Dios desde sus vivencias, coherentes con su fe, en su entorno familiar y comunitario.",
                                "Reconoce que las enseñanzas de Jesucristo le permiten desarrollar actitudes de cambio a nivel personal y comunitario.",
                                "Cultiva el encuentro personal y comunitario con Dios mediante la búsqueda de espacios de oración y reflexión que lo ayuden a fortalecer su fe como miembro activo de su familia, Iglesia y comunidad desde las enseñanzas de Jesucristo.",
                                "Actúa con liderazgo realizando y proponiendo acciones a imagen de Jesucristo, para alcanzar una convivencia justa, fraterna y solidaria con los demás."
                            ]
                        }
                    }
                ]
            },
            "Educación Física": {
                competencias: [
                    {
                        id: "ef-p-c1",
                        nombre: "Se desenvuelve de manera autónoma a través de su motricidad",
                        capacidades: [
                            "Comprende su cuerpo",
                            "Se expresa corporalmente"
                        ],
                        estandares: {
                            "Ciclo III": "Se desenvuelve de manera autónoma a través de su motricidad cuando comprende cómo usar su cuerpo en las diferentes acciones que realiza utilizando su lado dominante y realiza movimientos coordinados que le ayudan a sentirse seguro en la práctica de actividades físicas. Se orienta espacialmente en relación a sí mismo y a otros puntos de referencia. Se expresa corporalmente con sus pares utilizando el ritmo, gestos y movimientos como recursos para comunicar.",
                            "Ciclo IV": "Se desenvuelve de manera autónoma a través de su motricidad cuando comprende cómo usar su cuerpo explorando la alternancia de sus lados corporales de acuerdo a su utilidad y ajustando la posición del cuerpo en el espacio y en el tiempo en diferentes etapas de las acciones motrices, con una actitud positiva y una voluntad de experimentar situaciones diversas. Experimenta nuevas posibilidades expresivas de su cuerpo y las utiliza para relacionarse y comunicar ideas, emociones, sentimientos, pensamientos.",
                            "Ciclo V": "Se desenvuelve de manera autónoma a través de su motricidad cuando acepta sus posibilidades y limitaciones según su desarrollo e imagen corporal. Realiza secuencias de movimientos coordinados aplicando la alternancia de sus lados corporales de acuerdo a su utilidad. Produce con sus pares secuencias de movimientos corporales, expresivos o rítmicos en relación a una intención."
                        }
                        , // <-- No olvides la coma al unirlo con el resto de tu archivo
                        desempenos: {
                            "1°": [
                                "Explora de manera autónoma las posibilidades de su cuerpo en diferentes acciones para mejorar sus movimientos (saltar, correr, lanzar) al mantener y/o recuperar el equilibrio en el espacio y con los objetos, cuando utiliza conscientemente distintas bases de sustentación; así, conoce en sí mismo su lado dominante.",
                                "Se orienta en un espacio y tiempo determinados, con relación a sí mismo y a otros puntos de referencia, reconociendo su lado izquierdo y derecho, y a través de las nociones “arriba-abajo”, “dentro-fuera”, “cerca-lejos”, con relación a sí mismo y de acuerdo a sus intereses y necesidades.",
                                "Explora nuevos movimientos y gestos para representar objetos, personajes, estados de ánimo y ritmos sencillos de distintos orígenes: de la naturaleza, del propio cuerpo, de la música, etc.",
                                "Se expresa motrizmente para comunicar sus emociones (miedo, angustia, alegría, placer, torpeza, inhibición, rabia, entre otras) y representa en el juego acciones cotidianas de su familia y comunidad; así, afirma su identidad personal."
                            ],
                            "2°": [
                                "Explora de manera autónoma sus posibilidades de movimiento al realizar con seguridad y confianza habilidades motrices básicas, mediante movimientos coordinados según sus intereses, necesidades y posibilidades.",
                                "Se orienta en el espacio y tiempo con relación a sí mismo y a otros puntos de referencia; reconoce sus posibilidades de equilibrio con diferentes bases de sustentación en acciones lúdicas.",
                                "Resuelve situaciones motrices al utilizar su lenguaje corporal (gesto, contacto visual, actitud corporal, apariencia, etc.), verbal y sonoro, que lo ayudan a sentirse seguro, confiado y aceptado.",
                                "Utiliza su cuerpo y el movimiento para expresar ideas y emociones en la práctica de actividades lúdicas con diferentes tipos de ritmos y música, a fin de expresarse corporalmente y mediante el uso de diversos elementos."
                            ],
                            "3°": [
                                "Regula la posición del cuerpo en situaciones de equilibrio, con modificación del espacio, teniendo como referencia la trayectoria de objetos, los otros y sus propios desplazamientos, para afianzar sus habilidades motrices básicas.",
                                "Alterna sus lados corporales de acuerdo a su utilidad y/o necesidad y se orienta en el espacio y en el tiempo, con relación a sí mismo y a otros puntos de referencia en actividades lúdicas y predeportivas.",
                                "Utiliza su cuerpo (posturas, gestos y mímica) y diferentes movimientos para expresar formas, ideas, emociones, sentimientos y pensamientos en la actividad física.",
                                "Utiliza lenguaje corporal para expresar su forma particular de moverse, creando secuencias sencillas de movimientos relacionados con el ritmo, la música de su cultura y la historia de su región."
                            ],
                            "4°": [
                                "Reconoce la izquierda y la derecha con relación a objetos y a sus pares, para mejorar sus posibilidades de movimiento en diferentes acciones lúdicas.",
                                "Se orienta en un espacio y tiempo determinado, con relación a sí mismo, a los objetos y a sus compañeros; coordina sus movimientos en situaciones lúdicas y regula su equilibrio al variar la base de sustentación y la altura de la superficie de apoyo, de esta manera, afianza sus habilidades motrices básicas.",
                                "Resuelve situaciones motrices al utilizar su lenguaje corporal (gestos, contacto visual, actitud corporal, apariencia, etc.), verbal y sonoro para comunicar actitudes, sensaciones, estados de ánimo y acciones que le posibilitan comunicarse mejor con los otros y disfrutar de las actividades lúdicas.",
                                "Vivencia el ritmo y se apropia de secuencias rítmicas corporales para expresarse corporalmente a través de la música."
                            ],
                            "5°": [
                                "Aplica la alternancia de sus lados corporales de acuerdo a su preferencia, utilidad y/o necesidad, y anticipa las acciones motrices a realizar en un espacio y tiempo, para mejorar las posibilidades de respuesta en una actividad física.",
                                "Explora y regula su cuerpo para dar respuesta a las situaciones motrices en contextos lúdicos, predeportivos, etc.; de este modo, pone en práctica las habilidades motrices relacionadas con la carrera, el salto y los lanzamientos.",
                                "Crea movimientos y desplazamientos rítmicos e incorpora las particularidades de su lenguaje corporal teniendo como base la música de su región, al asumir diferentes roles en la práctica de actividad física.",
                                "Valora en sí mismo y en sus pares nuevas formas de movimiento y gestos corporales; de esta manera, acepta la existencia de nuevas formas de movimiento y expresión para comunicar ideas y emociones en diferentes situaciones motrices."
                            ],
                            "6°": [
                                "Aplica la alternancia de sus lados corporales de acuerdo a su preferencia, utilidad y/o necesidad, y anticipa las acciones motrices a realizar en un espacio y tiempo, para mejorar las posibilidades de respuesta en una actividad física.",
                                "Regula su cuerpo para dar respuesta a las situaciones motrices en contextos lúdicos y predeportivos; así, afianza las habilidades motrices específicas relacionadas con la carrera, el salto y los lanzamientos.",
                                "Expresa su forma particular de moverse, al asumir y adjudicar diferentes roles en la práctica de actividad física, aplicando su lenguaje corporal.",
                                "Crea con sus pares una secuencia de movimientos corporales, expresivos y/o rítmicos, de manera programada y estructurada; así, se expresa de diferentes formas y con diversos recursos, a través del cuerpo y el movimiento, para comunicar ideas y emociones."
                            ]
                        }
                    },
                    {
                        id: "ef-p-c2",
                        nombre: "Asume una vida saludable",
                        capacidades: [
                            "Comprende las relaciones entre la actividad física, alimentación, postura e higiene personal y del ambiente, y la salud",
                            "Incorpora prácticas que mejoran su calidad de vida"
                        ],
                        estandares: {
                            "Ciclo III": "Asume una vida saludable cuando diferencia los alimentos saludables de su dieta personal y familiar, los momentos adecuados para ingerirlos y las posturas que lo ayudan al buen desempeño en la práctica de actividades físicas, recreativas y de la vida cotidiana, reconociendo la importancia del autocuidado. Participa regularmente en la práctica de actividades lúdicas identificando su ritmo cardiaco, respiración y sudoración; utiliza prácticas de activación corporal y psicológica antes de la actividad lúdica.",
                            "Ciclo IV": "Asume una vida saludable cuando diferencia los alimentos de su dieta personal, familiar y de su región que son saludables de los que no lo son. Previene riesgos relacionados con la postura e higiene conociendo aquellas que favorecen y no favorecen su salud e identifica su fuerza, resistencia y velocidad en la práctica de actividades lúdicas. Adapta su esfuerzo en la práctica de actividad física de acuerdo a las características de la actividad y a sus posibilidades, aplicando conocimientos relacionados con el ritmo cardiaco, la respiración y la sudoración. Realiza prácticas de activación corporal y psicológica, e incorpora el autocuidado relacionado con los ritmos de actividad y descanso para mejorar el funcionamiento de su organismo.",
                            "Ciclo V": "Asume una vida saludable cuando utiliza instrumentos que miden la aptitud física y estado nutricional e interpreta la información de los resultados obtenidos para mejorar su calidad de vida. Replantea sus hábitos saludables, higiénicos y alimenticios tomando en cuenta los cambios físicos propios de la edad, evita la realización de ejercicios y posturas contraindicadas para la salud en la práctica de actividad física. Incorpora prácticas saludables para su organismo consumiendo alimentos adecuados a las características personales y evitando el consumo de drogas. Propone ejercicios de activación y relajación antes, durante y después de la práctica y participa en actividad física de distinta intensidad regulando su esfuerzo."
                        }
                        , // <-- No olvides la coma al unirlo con el resto de tu archivo
                        desempenos: {
                            "1°": [
                                "Describe los alimentos de su dieta familiar y las posturas que son beneficiosas para su salud en la vida cotidiana y en la práctica de actividades lúdicas.",
                                "Regula su esfuerzo al participar en actividades lúdicas e identifica en sí mismo y en otros la diferencia entre inspiración y espiración, en reposo y movimiento, en las actividades lúdicas.",
                                "Realiza con autonomía prácticas de cuidado personal al asearse, al vestirse, al adoptar posturas adecuadas en la práctica de actividades lúdicas y en la vida cotidiana. Ejemplo: El estudiante usa diversos medios de protección frente a la radiación solar.",
                                "Busca satisfacer sus necesidades corporales cuando tiene sed y resuelve las dificultades que le producen el cansancio, la incomodidad y la inactividad; evidencia su bienestar al realizar actividades lúdicas y se siente bien consigo mismo, con los otros y con su entorno."
                            ],
                            "2°": [
                                "Explica la importancia de la activación corporal (calentamiento) y psicológica (atención, concentración y motivación) antes de la actividad lúdica, e identifica los signos y síntomas relacionados con el ritmo cardiaco, la respiración agitada y la sudoración, que aparecen en el organismo al practicar actividades lúdicas.",
                                "Diferencia los alimentos saludables y nutritivos que forman parte de su dieta personal y familiar, y los momentos adecuados para ingerirlos; explica la importancia de hidratarse; conoce las posturas adecuadas en la práctica de actividad física y en la vida cotidiana, que le permiten mayor seguridad.",
                                "Incorpora prácticas de cuidado al asearse y vestirse; adopta posturas adecuadas en la práctica de actividades lúdicas y en la vida cotidiana, que le permiten la participación en el juego sin afectar su desempeño.",
                                "Regula su esfuerzo en la práctica de actividades lúdicas y reconoce la importancia del autocuidado para prevenir enfermedades."
                            ],
                            "3°": [
                                "Explica la importancia de la activación corporal (calentamiento) y psicológica (atención, concentración y motivación), que lo ayuda a estar predispuesto a la actividad.",
                                "Practica diferentes actividades lúdicas adaptando su esfuerzo y aplicando los conocimientos de los beneficios de la práctica de actividad física y de la salud relacionados con el ritmo cardiaco, la respiración y la sudoración.",
                                "Incorpora el autocuidado relacionado con los ritmos de actividad-descanso, para mejorar el funcionamiento de su organismo.",
                                "Identifica los alimentos propios de su región que forman parte de su dieta personal y familiar, y los clasifica en saludables o no, de acuerdo a la actividad física que realiza. Reconoce aquellos que son amigables con el ambiente (por el uso que se hacen de los recursos naturales, el empaquetado, etc.)."
                            ],
                            "4°": [
                                "Explica la importancia de la activación corporal (calentamiento) y psicológica (atención, concentración y motivación) antes de la actividad, e identifica en sí mismo las variaciones en la frecuencia cardiaca y respiratoria con relación a los diferentes niveles de esfuerzo en la práctica de actividades lúdicas.",
                                "Selecciona e incorpora en su dieta personal y familiar los alimentos nutritivos y energéticos de la región que contribuyen a su bienestar.",
                                "Incorpora el autocuidado relacionado con los ritmos de actividad-descanso, hidratación y exposición a los rayos solares, para mejorar el funcionamiento de su organismo, y sustenta las razones de su importancia.",
                                "Adopta posturas adecuadas para prevenir problemas musculares y óseos e incorpora el autocuidado relacionado con los ritmos de actividad-descanso para mejorar el funcionamiento de su organismo y prevenir enfermedades."
                            ],
                            "5°": [
                                "Selecciona actividades para la activación corporal (calentamiento) y psicológica (atención, concentración y motivación) y de recuperación antes, durante y después de la práctica de actividad física; de esta manera, aplica los beneficios relacionados con la salud y planifica dietas saludables adaptadas a su edad y sus recursos.",
                                "Utiliza diferentes métodos de evaluación para determinar la aptitud física; asimismo, selecciona los que mejor se adecúen a sus posibilidades y utiliza la información que obtiene en beneficio de su salud.",
                                "Adapta sus prácticas de higiene a los cambios físicos propios de la edad; describe las prácticas alimenticias beneficiosas y perjudiciales para el organismo y el ambiente, y analiza la importancia de la alimentación con relación a su IMC.",
                                "Describe posturas y ejercicios contraindicados para la salud en la práctica de actividad física."
                            ],
                            "6°": [
                                "Explica las condiciones que favorecen la aptitud física y las pruebas que la miden (resistencia, velocidad, flexibilidad y fuerza) para mejorar la calidad de vida, con relación a sus características personales.",
                                "Explica la relación entre los cambios físicos propios de la edad y la repercusión en la higiene, en la práctica de actividad física y en actividades de la vida cotidiana; practica actividad física y explica la importancia que tiene en su vida cotidiana.",
                                "Realiza actividad física y evita posturas y ejercicios contraindicados que perjudican su salud.",
                                "Muestra hábitos saludables y evita hábitos perjudiciales para su organismo, como el consumo de comida rápida, de alcohol, de tabaco, de drogas, desórdenes alimenticios, entre otros; proporciona el fundamento respectivo y desarrolla dietas saludables.",
                                "Explica la importancia de la vacunación y sus consecuencias en la salud."
                            ]
                        }
                    },
                    {
                        id: "ef-p-c3",
                        nombre: "Interactúa a través de sus habilidades sociomotrices",
                        capacidades: [
                            "Se relaciona utilizando sus habilidades sociomotrices",
                            "Crea y aplica estrategias y tácticas de juego"
                        ],
                        estandares: {
                            "Ciclo III": "Interactúa a través de sus habilidades sociomotrices al aceptar al otro como compañero de juego y busca el consenso sobre la manera de jugar para lograr el bienestar común y muestra una actitud de respeto evitando juegos violentos y humillantes; expresa su posición ante un conflicto con intención de resolverlo y escucha la posición de sus compañeros en los diferentes tipos de juegos. Resuelve situaciones motrices a través de estrategias colectivas y participa en la construcción de reglas de juego adaptadas a la situación y al entorno, para lograr un objetivo común en la práctica de actividades lúdicas.",
                            "Ciclo IV": "Interactúa a través de sus habilidades sociomotrices al tomar acuerdos sobre la manera de jugar y los posibles cambios o conflictos que se den y propone adaptaciones o modificaciones para favorecer la inclusión de compañeros en actividades lúdicas, aceptando al oponente como compañero de juego. Adapta la estrategia de juego anticipando las intenciones de sus compañeros y oponentes para cumplir con los objetivos planteados. Propone reglas y las modifica de acuerdo a las necesidades del contexto y los intereses del grupo en la práctica de actividades físicas.",
                            "Ciclo V": "Interactúa a través de sus habilidades sociomotrices proactivamente con un sentido de cooperación teniendo en cuenta las adaptaciones o modificaciones propuestas por el grupo en diferentes actividades físicas. Hace uso de estrategias de cooperación y oposición seleccionando los diferentes elementos técnicos y tácticos que se pueden dar en la práctica de actividades lúdicas y predeportivas, para resolver la situación de juego que le dé un mejor resultado y que responda a las variaciones que se presentan en el entorno."
                        }
                        , // <-- No olvides la coma al unirlo con el resto de tu archivo
                        desempenos: {
                            "1°": [
                                "Asume roles y funciones de manera individual y dentro de un grupo; interactúa de forma espontánea en actividades lúdicas y disfruta de la compañía de sus pares para sentirse parte del grupo.",
                                "Participa en juegos cooperativos y de oposición en parejas y pequeños grupos; acepta al oponente como compañero de juego y las formas diferentes de jugar.",
                                "Propone soluciones a situaciones motrices y lúdicas, y llega a acuerdos con sus pares a fin de cumplir con los objetivos que surjan; respeta las reglas de juego propuestas (por ellos mismos, por el maestro o por las condiciones del entorno) en diferentes actividades lúdicas."
                            ],
                            "2°": [
                                "Participa en juegos cooperativos y de oposición en parejas y pequeños grupos; acepta al oponente como compañero de juego y llega a consensos sobre la manera de jugar.",
                                "Muestra una actitud de respeto en la práctica de actividades lúdicas y evita juegos bruscos, amenazas o apodos; acepta la participación de todos sus compañeros.",
                                "Resuelve de manera compartida situaciones producidas en los diferentes tipos de juegos (tradicionales, autóctonos, etc.) y adecúa las reglas para la inclusión de sus pares y el entorno, con el fin de lograr un desarrollo eficaz de la actividad."
                            ],
                            "3°": [
                                "Propone cambios en las condiciones de juego, si fuera necesario, para posibilitar la inclusión de sus pares; así, promueve el respeto y la participación, y busca un sentido de pertenencia al grupo en la práctica de diferentes actividades físicas.",
                                "Participa en juegos cooperativos y de oposición en parejas, pequeños y grandes grupos; acepta al oponente como compañero de juego y arriba a consensos sobre la manera de jugar y los posibles cambios que puedan producirse.",
                                "Genera estrategias colectivas en las actividades lúdicas según el rol de sus compañeros y el suyo propio, a partir de los resultados en el juego."
                            ],
                            "4°": [
                                "Propone normas y reglas en las actividades lúdicas y las modifica de acuerdo a las necesidades, el contexto y los intereses, con adaptaciones o modificaciones propuestas por el grupo, para favorecer la inclusión; muestra una actitud responsable y de respeto por el cumplimiento de los acuerdos establecidos.",
                                "Propone actividades lúdicas, como juegos populares y/o tradicionales, con adaptaciones o modificaciones propuestas por el grupo; acepta al oponente como compañero de juego y llega a consensos sobre la manera de jugar y los posibles cambios que puedan producirse.",
                                "Adapta la estrategia de juego cuando prevé las intenciones de sus compañeros de equipo y oponentes, para cumplir con los objetivos planteados."
                            ],
                            "5°": [
                                "Emplea la resolución reflexiva y el diálogo como herramientas para solucionar problemas o conflictos surgidos con sus pares durante la práctica de actividades lúdicas y predeportivas diversas.",
                                "Realiza actividades lúdicas en las que interactúa con sus compañeros y oponentes como compañeros de juego; respeta las diferencias personales y asume roles y cambio de roles.",
                                "Propone, junto con sus pares, soluciones estratégicas oportunas, y toma en cuenta los aportes y las características de cada integrante del grupo al practicar juegos tradicionales, populares, autóctonos, predeportivos y en la naturaleza."
                            ],
                            "6°": [
                                "Participa en actividades físicas en la naturaleza, eventos predeportivos, juegos populares, entre otros, y toma decisiones en favor del grupo, aunque vaya en contra de sus intereses personales, con un sentido solidario y de cooperación.",
                                "Modifica juegos y actividades que se adecúen a las necesidades y posibilidades del grupo y a la lógica del juego deportivo.",
                                "Participa en actividades lúdicas, predeportivas y deportivas en las que pone en práctica diversas estrategias; adecúa normas de juego y la mejor solución táctica para dar respuesta a las variaciones que se presentan en el entorno."
                            ]
                        }
                    }
                ]
            },
            "Comunicación": {
                competencias: [
                    {
                        id: "com-p-c1",
                        nombre: "Se comunica oralmente en su lengua materna",
                        capacidades: [
                            "Obtiene información del texto oral",
                            "Infiere e interpreta información del texto oral",
                            "Adecúa, organiza y desarrolla las ideas de forma coherente y cohesionada",
                            "Utiliza recursos no verbales y paraverbales de forma estratégica",
                            "Interactúa estratégicamente con distintos interlocutores",
                            "Reflexiona y evalúa la forma, el contenido y contexto del texto oral"
                        ],
                        estandares: {
                            "Ciclo III": "Se comunica oralmente mediante diversos tipos de textos; identifica información explícita, infiere e interpreta hechos y temas. Desarrolla sus ideas manteniéndose, por lo general, en el tema; utiliza algunos conectores, así como vocabulario de uso frecuente. Su pronunciación es entendible y se apoya en recursos no verbales y paraverbales. Reflexiona sobre textos escuchados a partir de sus conocimientos y experiencia. Se expresa adecuándose a su propósito comunicativo, interlocutores y contexto. En un intercambio, participa y responde en forma pertinente a lo que le dicen.",
                            "Ciclo IV": "Se comunica oralmente mediante diversos tipos de textos; identifica información explícita; infiere e interpreta hechos, tema y propósito. Organiza y desarrolla sus ideas en torno a un tema y las relaciona mediante el uso de algunos conectores y referentes, así como de un vocabulario variado. Se apoya en recursos no verbales y paraverbales para enfatizar lo que dice. Reflexiona sobre textos escuchados a partir de sus conocimientos y experiencia. Se expresa adecuándose a situaciones comunicativas formales e informales. En un intercambio, comienza a adaptar lo que dice a las necesidades y puntos de vista de quien lo escucha, a través de comentarios y preguntas relevantes.",
                            "Ciclo V": "Se comunica oralmente mediante diversos tipos de textos; infiere el tema, propósito, hechos y conclusiones a partir de información explícita, e interpreta la intención del interlocutor en discursos que contienen ironías. Se expresa adecuándose a situaciones comunicativas formales e informales. Organiza y desarrolla sus ideas en torno a un tema y las relaciona mediante el uso de conectores y algunos referentes, así como de un vocabulario variado y pertinente. Usa recursos no verbales y paraverbales para enfatizar lo que dice. Reflexiona y evalúa los textos escuchados a partir de sus conocimientos y el contexto sociocultural. En un intercambio, hace preguntas y contribuciones relevantes que responden a las ideas y puntos de vista de otros, enriqueciendo el tema tratado."
                        }
                        , // <-- No olvides la coma al unirlo con el resto de tu archivo
                        desempenos: {
                            "1°": [
                                "Recupera información explícita de los textos orales que escucha (nombres de personas y personajes, hechos y lugares) y que presentan vocabulario de uso frecuente.",
                                "Dice de qué trata el texto y cuál es su propósito comunicativo; para ello, se apoya en la información recurrente del texto y en su experiencia.",
                                "Deduce características implícitas de personas, personajes, animales, objetos y lugares, o el significado de palabras y expresiones según el contexto (adivinanzas), así como relaciones lógicas entre las ideas del texto, como causa-efecto, que se pueden establecer fácilmente a partir de información explícita del mismo.",
                                "Explica acciones concretas de personas y personajes relacionando algunos recursos verbales y no verbales, a partir de su experiencia.",
                                "Adecúa su texto oral a la situación comunicativa, a sus interlocutores y al propósito comunicativo, utilizando recursos no verbales (gestos y movimientos corporales) y recurriendo a su experiencia.",
                                "Expresa oralmente ideas y emociones en torno a un tema, aunque en ocasiones puede salirse de este o reiterar información innecesariamente. Establece relaciones lógicas entre las ideas (en especial, de adición y secuencia), a través de algunos conectores. Incorpora un vocabulario de uso frecuente.",
                                "Emplea recursos no verbales (gestos y movimientos corporales) como apoyo durante el mensaje oral y en función del propósito comunicativo, en situaciones de comunicación no formal.",
                                "Participa en diversos intercambios orales formulando preguntas sobre lo que le interesa saber, dando respuestas o haciendo comentarios relacionados con el tema. Recurre a normas y modos de cortesía según el contexto sociocultural.",
                                "Opina como hablante y oyente sobre personas, personajes y hechos de los textos orales que escucha; da razones a partir del contexto en el que se desenvuelve y de su experiencia."
                            ],
                            "2°": [
                                "Recupera información explícita de los textos orales que escucha (nombres de personas y personajes, acciones, hechos, lugares y fechas) y que presentan vocabulario de uso frecuente.",
                                "Dice de qué trata el texto y cuál es su propósito comunicativo; para ello, se apoya en la información recurrente del texto y en su experiencia.",
                                "Deduce características implícitas de personas, personajes, animales, objetos, hechos y lugares, o el significado de palabras y expresiones según el contexto, así como relaciones lógicas entre las ideas del texto, como causa-efecto y semejanza-diferencia, a partir de información explícita del mismo.",
                                "Explica acciones concretas de personas y personajes relacionando recursos verbales y no verbales, a partir de su experiencia.",
                                "Adecúa su texto oral a la situación comunicativa y a sus interlocutores considerando el propósito comunicativo, utilizando recursos no verbales (gestos y movimientos corporales) y recurriendo a su experiencia y tipo textual.",
                                "Expresa oralmente ideas y emociones en torno a un tema, aunque en ocasiones puede reiterar información innecesariamente. Establece relaciones lógicas entre ellas (en especial, de adición, secuencia y causa), a través de algunos conectores. Incorpora un vocabulario de uso frecuente.",
                                "Emplea recursos no verbales (gestos y movimientos corporales) y paraverbales (pronunciación entendible) para apoyar lo que dice en situaciones de comunicación no formal.",
                                "Participa en diversos intercambios orales formulando preguntas sobre lo que le interesa saber, dando respuestas y haciendo comentarios relacionados con el tema. Recurre a normas y modos de cortesía según el contexto sociocultural.",
                                "Opina como hablante y oyente sobre personas, personajes y hechos de los textos orales que escucha; da razones a partir del contexto en el que se desenvuelve y de su experiencia."
                            ],
                            "3°": [
                                "Recupera información explícita de los textos orales que escucha, seleccionando datos específicos (nombres de personas y personajes, acciones, hechos, lugares y fechas), y que presentan vocabulario de uso frecuente y sinónimos.",
                                "Explica el tema, el propósito comunicativo, las emociones y los estados de ánimo de las personas y los personajes, así como las enseñanzas que se desprenden del texto; para ello, recurre a la información relevante del mismo.",
                                "Deduce algunas relaciones lógicas entre las ideas del texto oral, como las secuencias temporales, causa-efecto o semejanza-diferencia, así como las características de personas, personajes, animales, objetos, hechos y lugares, el significado de palabras según el contexto y expresiones con sentido figurado (adivinanzas, refranes), a partir de la información explícita e implícita del texto.",
                                "Explica las acciones y motivaciones de personas y personajes, así como el uso de adjetivaciones y personificaciones; para ello, relaciona recursos verbales, no verbales y paraverbales, a partir del texto oral y de su experiencia.",
                                "Adecúa su texto oral a la situación comunicativa, de acuerdo al propósito comunicativo, así como a las características más comunes del género discursivo. Distingue el registro formal del informal recurriendo a su experiencia y a algunas fuentes de información complementaria.",
                                "Expresa oralmente ideas y emociones en torno a un tema, y evita reiterar información innecesariamente. Ordena dichas ideas y las desarrolla para ampliar la información. Establece relaciones lógicas entre las ideas (en especial, de adición, secuencia y causa-efecto), a través de algunos referentes y conectores. Incorpora un vocabulario que incluye sinónimos y algunos términos propios de los campos del saber.",
                                "Emplea gestos y movimientos corporales que enfatizan lo que dice. Mantiene contacto visual con sus interlocutores. Se apoya en el volumen de su voz para transmitir emociones, caracterizar personajes o dar claridad a lo que dice.",
                                "Participa en diversos intercambios orales alternando roles de hablante y oyente, formulando preguntas, explicando sus respuestas y haciendo comentarios relevantes al tema. Recurre a normas y modos de cortesía según el contexto sociocultural.",
                                "Opina como hablante y oyente sobre ideas, hechos y temas de los textos orales, del ámbito escolar, social o de medios de comunicación, a partir de su experiencia y del contexto en que se desenvuelve."
                            ],
                            "4°": [
                                "Recupera información explícita de textos orales que escucha, seleccionando datos específicos, y que presentan expresiones con sentido figurado, vocabulario que incluye sinónimos y términos propios de los campos del saber.",
                                "Explica el tema, el propósito comunicativo, las emociones y los estados de ánimo de personas y personajes; para ello, distingue lo relevante de lo complementario.",
                                "Deduce algunas relaciones lógicas entre las ideas del texto oral, como las secuencias temporales, causa-efecto o semejanza-diferencia, así como las características de personas, personajes, animales, objetos, hechos y lugares, el significado de palabras según el contexto y expresiones con sentido figurado (dichos populares, refranes, moralejas), a partir de la información explícita e implícita del texto.",
                                "Explica las motivaciones y los sentimientos de personas y personajes, así como el uso de comparaciones y personificaciones; para ello, relaciona recursos verbales, no verbales y paraverbales, a partir del texto oral y de su experiencia.",
                                "Adecúa su texto oral a la situación comunicativa, de acuerdo al propósito comunicativo, así como a las características más comunes del género discursivo. Distingue el registro formal e informal recurriendo a su experiencia y a algunas fuentes de información complementaria.",
                                "Expresa oralmente ideas y emociones de forma coherente y cohesionada. Ordena dichas ideas y las desarrolla para ampliar la información sin reiteraciones innecesarias. Establece relaciones lógicas entre las ideas (en especial, de causa-efecto y consecuencia), a través de algunos referentes y conectores. Incorpora un vocabulario que incluye sinónimos y algunos términos propios de los campos del saber.",
                                "Emplea gestos y movimientos corporales que enfatizan lo que dice. Mantiene contacto visual con sus interlocutores. Se apoya en el volumen y la entonación de su voz para transmitir emociones, caracterizar personajes o dar claridad a lo que dice.",
                                "Participa en diversos intercambios orales alternando roles de hablante y oyente, formulando preguntas, explicando sus respuestas y haciendo comentarios relevantes al tema. Recurre a normas y modos de cortesía según el contexto sociocultural.",
                                "Opina como hablante y oyente sobre ideas, hechos y temas de los textos orales, del ámbito escolar, social o de medios de comunicación, a partir de su experiencia y del contexto en que se desenvuelve."
                            ],
                            "5°": [
                                "Recupera información explícita de textos orales que escucha seleccionando datos específicos. Integra esta información cuando es dicha en distintos momentos en textos que incluyen expresiones con sentido figurado, y vocabulario que incluye sinónimos y términos propios de los campos del saber.",
                                "Explica el tema y el propósito comunicativo del texto oral. Distingue lo relevante de lo complementario clasificando y sintetizando la información. Establece conclusiones sobre lo comprendido; para ello, vincula el texto con su experiencia y el contexto sociocultural en que se desenvuelve.",
                                "Deduce relaciones lógicas (causa-efecto, semejanza-diferencia, etc.) entre las ideas del texto oral, a partir de información explícita e implícita del mismo. Señala las características y cualidades implícitas de personas, personajes, animales, objetos, hechos y lugares, y determina el significado de palabras según el contexto y de expresiones con sentido figurado (refranes, moralejas) cuando hay algunas pistas en el texto.",
                                "Explica las intenciones de sus interlocutores considerando recursos verbales, no verbales y paraverbales. Asimismo, los puntos de vista y las motivaciones de personas y personajes, así como figuras retóricas (por ejemplo, la hipérbole) considerando algunas características del tipo textual y género discursivo.",
                                "Adecúa su texto oral a la situación comunicativa considerando el propósito comunicativo y algunas características del género discursivo. Elige el registro formal e informal de acuerdo con sus interlocutores y el contexto; para ello, recurre a su experiencia y a algunas fuentes de información complementaria.",
                                "Expresa oralmente ideas y emociones de forma coherente y cohesionada. Ordena y jerarquiza las ideas en torno a un tema y las desarrolla para ampliar la información o mantener el hilo temático. Establece relaciones lógicas entre ellas (en especial, de causa-efecto, consecuencia y contraste), a través de algunos referentes y conectores. Incorpora un vocabulario que incluye sinónimos y algunos términos propios de los campos del saber.",
                                "Emplea gestos y movimientos corporales que enfatizan lo que dice. Mantiene la distancia física con sus interlocutores, así como el volumen, la entonación y el ritmo de su voz para transmitir emociones, caracterizar personajes o producir efectos en el público, como el suspenso y el entretenimiento.",
                                "Participa en diversos intercambios orales alternando los roles de hablante y oyente. Recurre a sus saberes previos y aporta nueva información para argumentar, explicar y complementar las ideas expuestas. Considera normas y modos de cortesía según el contexto sociocultural.",
                                "Opina como hablante y oyente sobre ideas, hechos y temas, de textos orales del ámbito escolar, social o de medios de comunicación. Justifica su posición sobre lo que dice el texto oral considerando su experiencia y el contexto en que se desenvuelve.",
                                "Evalúa la adecuación de textos orales a la situación comunicativa, así como la coherencia de ideas y la cohesión entre ellas; también, la utilidad de recursos verbales, no verbales y paraverbales de acuerdo al propósito comunicativo."
                            ],
                            "6°": [
                                "Recupera información explícita de textos orales que escucha seleccionando datos específicos. Integra esta información cuando es dicha en distintos momentos y por distintos interlocutores en textos que incluyen expresiones con sentido figurado, y vocabulario que incluye sinónimos y términos propios de los campos del saber.",
                                "Explica el tema y el propósito comunicativo del texto oral. Distingue lo relevante de lo complementario clasificando y sintetizando la información. Establece conclusiones sobre lo comprendido; para ello, vincula el texto con su experiencia y los contextos socioculturales en que se desenvuelve.",
                                "Deduce relaciones lógicas (causa-efecto, semejanza-diferencia, etc.) entre las ideas del texto oral, a partir de información explícita e implícita del mismo. Señala las características y cualidades implícitas de personas, personajes, animales, objetos, hechos y lugares, y determina el significado de palabras según el contexto y de expresiones con sentido figurado (expresiones irónicas) cuando hay algunas pistas en el texto.",
                                "Explica la intención de sus interlocutores considerando recursos verbales, no verbales y paraverbales. Asimismo, los puntos de vista y las motivaciones de personas y personajes, así como algunas figuras retóricas (por ejemplo, la hipérbole) considerando algunas características del tipo textual y género discursivo.",
                                "Adecúa su texto oral a la situación comunicativa considerando el propósito comunicativo y algunas características del género discursivo, manteniendo el registro formal e informal y adaptándose a sus interlocutores y al contexto; para ello, recurre a su experiencia y a algunas fuentes de información complementaria.",
                                "Expresa oralmente ideas y emociones de forma coherente y cohesionada. Ordena y jerarquiza las ideas en torno a un tema y las desarrolla para ampliar la información o mantener el hilo temático. Establece relaciones lógicas entre ellas (en especial, de causa-efecto, consecuencia y contraste), a través de algunos referentes y conectores. Incorpora un vocabulario que incluye sinónimos y algunos términos propios de los campos del saber.",
                                "Emplea gestos y movimientos corporales que enfatizan lo que dice. Mantiene la distancia física con sus interlocutores, así como el volumen, la entonación y el ritmo de su voz para transmitir emociones, caracterizar personajes o producir efectos en el público, como el suspenso y el entretenimiento.",
                                "Participa en diversos intercambios orales alternando los roles de hablante y oyente. Recurre a sus saberes previos, usa lo dicho por sus interlocutores y aporta nueva información relevante para argumentar, explicar y complementar ideas. Considera normas y modos de cortesía según el contexto sociocultural.",
                                "Opina como hablante y oyente sobre ideas, hechos y temas, de textos orales del ámbito escolar, social o de medios de comunicación. Justifica su posición sobre lo que dice el texto oral considerando su experiencia y el contexto en que se desenvuelve.",
                                "Evalúa la adecuación de textos orales a la situación comunicativa, así como la coherencia de ideas y la cohesión entre ellas; también, la utilidad de recursos verbales, no verbales y paraverbales de acuerdo al propósito comunicativo."
                            ]
                        }
                    },
                    {
                        id: "com-p-c2",
                        nombre: "Lee diversos tipos de textos escritos en su lengua materna",
                        capacidades: [
                            "Obtiene información del texto escrito",
                            "Infiere e interpreta información del texto",
                            "Reflexiona y evalúa la forma, el contenido y contexto del texto escrito"
                        ],
                        estandares: {
                            "Ciclo III": "Lee diversos tipos de textos de estructura simple en los que predominan palabras conocidas e ilustraciones que apoyan las ideas centrales. Obtiene información poco evidente distinguiéndola de otra semejante y realiza inferencias locales a partir de información explícita. Interpreta el texto considerando información recurrente para construir su sentido global. Opina sobre sucesos e ideas importantes del texto a partir de su propia experiencia.",
                            "Ciclo IV": "Lee diversos tipos de textos que presentan estructura simple con algunos elementos complejos y con vocabulario variado. Obtiene información poco evidente distinguiéndola de otras próximas y semejantes. Realiza inferencias locales a partir de información explícita e implícita. Interpreta el texto considerando información relevante para construir su sentido global. Reflexiona sobre sucesos e ideas importantes del texto y explica la intención de los recursos textuales más comunes a partir de su conocimiento y experiencia.",
                            "Ciclo V": "Lee diversos tipos de textos con varios elementos complejos en su estructura y con vocabulario variado. Obtiene información e integra datos que están en distintas partes del texto. Realiza inferencias locales a partir de información explícita e implícita. Interpreta el texto considerando información relevante y complementaria para construir su sentido global. Reflexiona sobre aspectos variados del texto a partir de su conocimiento y experiencia. Evalúa el uso del lenguaje, la intención de los recursos textuales y el efecto del texto en el lector a partir de su conocimiento y del contexto sociocultural."
                        }
                        , // <-- No olvides la coma al unirlo con el resto de tu archivo
                        desempenos: {
                            "1°": [
                                "Identifica información explícita que es claramente distinguible de otra porque la relaciona con palabras conocidas o porque conoce el contenido del texto y que se encuentra en lugares evidentes como el título, subtítulo, inicio, final, etc., en textos con ilustraciones.",
                                "Establece la secuencia de los textos que lee (instrucciones, historias, noticias).",
                                "Deduce características de personajes, animales, objetos y lugares, así como relaciones lógicas de causa-efecto que se pueden establecer fácilmente a partir de información explícita del texto.",
                                "Predice de qué tratará el texto y cuál es su propósito comunicativo, a partir de algunos indicios, como título, ilustraciones, palabras conocidas o expresiones que se encuentran en los textos que le leen, que lee con ayuda o que lee por sí mismo.",
                                "Explica la relación del texto con la ilustración en textos que lee por sí mismo, que lee con ayuda del docente o que escucha leer.",
                                "Opina acerca de personas, personajes y hechos expresando sus preferencias. Elige o recomienda textos a partir de su experiencia, necesidades e intereses, con el fin de reflexionar sobre los textos que escucha leer."
                            ],
                            "2°": [
                                "Identifica información explícita que se encuentra en distintas partes del texto. Distingue esta información de otra semejante en diversos tipos de textos de estructura simple, con palabras conocidas e ilustraciones. Establece la secuencia de los textos que lee (instrucciones, historias, noticias).",
                                "Deduce características implícitas de personajes, animales, objetos y lugares; determina el significado de palabras según el contexto y hace comparaciones; asimismo, establece relaciones lógicas de causa-efecto, semejanza-diferencia y enseñanza y propósito, a partir de información explícita del texto.",
                                "Predice de qué tratará el texto y cuál es su propósito comunicativo, a partir de algunos indicios, como título, ilustraciones, silueta, formato, palabras, frases y expresiones que se encuentran en los textos que le leen o que lee por sí mismo.",
                                "Explica el tema y el propósito de los textos que lee por sí mismo, así como las relaciones texto-ilustración.",
                                "Opina acerca de personas, personajes y hechos expresando sus preferencias. Elige o recomienda textos a partir de su experiencia, necesidades e intereses, con el fin de reflexionar sobre los textos que lee."
                            ],
                            "3°": [
                                "Identifica información explícita que se encuentra en distintas partes del texto. Distingue información de otra próxima y semejante, en la que selecciona datos específicos en diversos tipos de textos de estructura simple, con algunos elementos complejos, con palabras conocidas y, en ocasiones, con vocabulario variado, de acuerdo a las temáticas abordadas.",
                                "Deduce características implícitas de personajes, animales, objetos y lugares, y determina el significado de palabras según el contexto y hace comparaciones; así como el tema y destinatario. Establece relaciones lógicas de causa-efecto, semejanza-diferencia y enseñanza y propósito, a partir de la información explícita e implícita relevante del texto.",
                                "Predice de qué tratará el texto, a partir de algunos indicios como silueta del texto, palabras, frases, colores y dimensiones de las imágenes; asimismo, contrasta la información del texto que lee.",
                                "Explica el tema, el propósito, la enseñanza, las relaciones texto-ilustración, así como adjetivaciones y las motivaciones de personas y personajes.",
                                "Opina acerca del contenido del texto, explica el sentido de algunos recursos textuales (ilustraciones, tamaño de letra, etc.) y justifica sus preferencias cuando elige o recomienda textos a partir de su experiencia, necesidades e intereses, con el fin de reflexionar sobre los textos que lee."
                            ],
                            "4°": [
                                "Identifica información explícita y relevante que se encuentra en distintas partes del texto. Distingue esta información de otra semejante, en la que selecciona datos específicos, en diversos tipos de textos de estructura simple, con algunos elementos complejos, así como vocabulario variado, de acuerdo a las temáticas abordadas.",
                                "Deduce características implícitas de personajes, animales, objetos y lugares, y determina el significado de palabras y frases según el contexto, así como de expresiones con sentido figurado (refranes, comparaciones, etc.). Establece relaciones lógicas de intención-finalidad y tema y subtema, a partir de información relevante explícita e implícita.",
                                "Predice de qué tratará el texto, a partir de algunos indicios como subtítulos, colores y dimensiones de las imágenes, índice, tipografía, negritas, subrayado, etc.; asimismo, contrasta la información del texto que lee.",
                                "Explica el tema, el propósito, las motivaciones de personas y personajes, las comparaciones y personificaciones, así como las enseñanzas y los valores del texto, clasificando y sintetizando la información.",
                                "Opina acerca del contenido del texto, explica el sentido de algunos recursos textuales (uso de negritas, mayúsculas, índice, tipografía, subrayado, etc.), a partir de su experiencia y contexto, y justifica sus preferencias cuando elige o recomienda textos según sus necesidades, intereses y su relación con otros textos, con el fin de reflexionar sobre los textos que lee."
                            ],
                            "5°": [
                                "Identifica información explícita, relevante y complementaria que se encuentra en distintas partes del texto. Selecciona datos específicos e integra información explícita cuando se encuentra en distintas partes del texto con varios elementos complejos en su estructura, así como con vocabulario variado, de acuerdo a las temáticas abordadas.",
                                "Deduce características implícitas de seres, objetos, hechos y lugares, y determina el significado de palabras, según el contexto, y de expresiones con sentido figurado. Establece relaciones lógicas entre las ideas del texto escrito, como intención, finalidad, tema y subtemas, causa-efecto, semejanza-diferencia y enseñanza y propósito, a partir de información relevante explícita e implícita.",
                                "Predice de qué tratará el texto, a partir de algunos indicios como subtítulos, colores y dimensiones de las imágenes, índice, tipografía, negritas, subrayado, fotografías, reseñas, etc.; asimismo, contrasta la información del texto que lee.",
                                "Explica el tema, el propósito, los puntos de vista y las motivaciones de personas y personajes, las comparaciones e hipérboles, el problema central, las enseñanzas y los valores del texto, clasificando y sintetizando la información, para interpretar el sentido global del texto.",
                                "Opina sobre el contenido del texto, la organización textual, la intención de algunos recursos textuales (negritas, esquemas) y el efecto del texto en los lectores, a partir de su experiencia y del contexto sociocultural en que se desenvuelve.",
                                "Justifica la elección o recomendación de textos de su preferencia, de acuerdo a sus necesidades, intereses y la relación con otros textos leídos; sustenta su posición sobre los textos cuando los comparte con otros; y compara textos entre sí para indicar algunas similitudes y diferencias entre tipos textuales."
                            ],
                            "6°": [
                                "Identifica información explícita, relevante y complementaria que se encuentra en distintas partes del texto. Selecciona datos específicos e integra información explícita cuando se encuentra en distintas partes del texto, o al realizar una lectura intertextual de diversos tipos de textos con varios elementos complejos en su estructura, así como con vocabulario variado, de acuerdo a las temáticas abordadas.",
                                "Deduce características implícitas de seres, objetos, hechos y lugares, y determina el significado de palabras, según el contexto, y de expresiones con sentido figurado. Establece relaciones lógicas entre las ideas del texto escrito, como intención-finalidad, tema y subtemas, causa-efecto, semejanza-diferencia y enseñanza y propósito, a partir de información relevante y complementaria, y al realizar una lectura intertextual.",
                                "Predice de qué tratará el texto, a partir de algunos indicios como subtítulos, colores y dimensiones de las imágenes, índice, tipografía, negritas, subrayado, fotografías, reseñas (solapa, contratapa), notas del autor, biografía del autor o ilustrador, etc.; asimismo, contrasta la información del texto que lee.",
                                "Explica el tema, el propósito, los puntos de vista y las motivaciones de personas y personajes, las comparaciones e hipérboles, el problema central, las enseñanzas, los valores y la intención del autor, clasificando y sintetizando la información, y elabora conclusiones sobre el texto para interpretar su sentido global.",
                                "Opina sobre el contenido y la organización del texto, la intención de diversos recursos textuales, la intención del autor y el efecto que produce en los lectores, a partir de su experiencia y de los contextos socioculturales en que se desenvuelve.",
                                "Justifica la elección o recomendación de textos de su preferencia, de acuerdo a sus necesidades, intereses y la relación con otros textos leídos; sustenta su posición sobre los valores presentes en los textos, cuando los comparte con otros; y compara textos entre sí para indicar algunas similitudes y diferencias entre tipos textuales y géneros discursivos (por ejemplo: diferencias y semejanzas entre cuento y fábula)."
                            ]
                        }
                    },
                    {
                        id: "com-p-c3",
                        nombre: "Escribe diversos tipos de textos en su lengua materna",
                        capacidades: [
                            "Adecúa el texto a la situación comunicativa",
                            "Organiza y desarrolla las ideas de forma coherente y cohesionada",
                            "Utiliza convenciones del lenguaje escrito de forma pertinente",
                            "Reflexiona y evalúa la forma, el contenido y contexto del texto escrito"
                        ],
                        estandares: {
                            "Ciclo III": "Escribe diversos tipos de textos de forma reflexiva. Adecúa al propósito y el destinatario a partir de su experiencia previa. Organiza y desarrolla lógicamente las ideas en torno a un tema. Establece relaciones entre ideas a través del uso adecuado de algunos tipos de conectores y emplea vocabulario de uso frecuente. Separa adecuadamente las palabras y utiliza algunos recursos ortográficos básicos para darle claridad y sentido a su texto. Reflexiona sobre las ideas más importantes en el texto que escribe y opina acerca del uso de algunos recursos ortográficos según la situación comunicativa.",
                            "Ciclo IV": "Escribe diversos tipos de textos de forma reflexiva. Adecúa su texto al destinatario, propósito y el registro a partir de su experiencia previa y de alguna fuente de información. Organiza y desarrolla lógicamente las ideas en torno a un tema. Establece relaciones entre ideas a través del uso adecuado de algunos tipos de conectores y de referentes, emplea vocabulario variado. Utiliza recursos ortográficos básicos para darle claridad y sentido a su texto. Reflexiona sobre la coherencia y cohesión de las ideas en el texto que escribe, y opina acerca del uso de algunos recursos textuales para reforzar sentidos y producir efectos en el lector según la situación comunicativa.",
                            "Ciclo V": "Escribe diversos tipos de textos de forma reflexiva. Adecúa su texto al destinatario, propósito y el registro, a partir de su experiencia previa y de algunas fuentes de información complementarias. Organiza y desarrolla lógicamente las ideas en torno a un tema y las estructura en párrafos. Establece relaciones entre ideas a través del uso adecuado de algunos tipos de conectores y de referentes; emplea vocabulario variado. Utiliza recursos ortográficos para separar expresiones, ideas y párrafos con la intención de darle claridad y sentido a su texto. Reflexiona y evalúa de manera permanente la coherencia y cohesión de las ideas en el texto que escribe, así como el uso del lenguaje para argumentar o reforzar sentidos y producir efectos en el lector según la situación comunicativa."
                        }
                        , // <-- No olvides la coma al unirlo con el resto de tu archivo
                        desempenos: {
                            "1°": [
                                "Adecúa el texto a la situación comunicativa considerando el propósito comunicativo y el destinatario. Recurre a su experiencia previa para escribir.",
                                "Escribe textos en torno a un tema. Agrupa las ideas en oraciones y las desarrolla para ampliar la información, aunque en ocasiones puede reiterar información innecesariamente.",
                                "Establece relaciones entre las ideas, sobre todo de adición, utilizando algunos conectores. Incorpora vocabulario de uso frecuente.",
                                "Revisa el texto con ayuda del docente, para determinar si se ajusta al propósito y destinatario, o si se mantiene o no dentro del tema, con el fin de mejorarlo."
                            ],
                            "2°": [
                                "Adecúa el texto a la situación comunicativa considerando el propósito comunicativo, el destinatario y las características más comunes del tipo textual. Distingue el registro formal del informal; para ello, recurre a su experiencia y a algunas fuentes de información complementaria.",
                                "Escribe textos de forma coherente y cohesionada. Ordena las ideas en torno a un tema y las desarrolla para ampliar la información, sin contradicciones, reiteraciones innecesarias o digresiones.",
                                "Establece relaciones entre las ideas, como adición y secuencia, utilizando algunos conectores. Incorpora vocabulario de uso frecuente.",
                                "Utiliza recursos gramaticales y ortográficos (por ejemplo, las mayúsculas y el punto final) que contribuyen a dar sentido a su texto. Emplea fórmulas retóricas para marcar el inicio y el final en las narraciones que escribe; asimismo, elabora rimas y juegos verbales.",
                                "Revisa el texto con ayuda del docente, para determinar si se ajusta al propósito y destinatario, si existen contradicciones que afectan la coherencia entre las ideas, o si el uso de conectores asegura la cohesión entre ellas. También, revisa el uso de los recursos ortográficos empleados en su texto y verifica si falta alguno (como las mayúsculas), con el fin de mejorarlo."
                            ],
                            "3°": [
                                "Adecúa el texto a la situación comunicativa considerando el propósito comunicativo, el destinatario y las características más comunes del tipo textual. Distingue el registro formal del informal; para ello, recurre a su experiencia y a algunas fuentes de información complementaria.",
                                "Escribe textos de forma coherente y cohesionada. Ordena las ideas en torno a un tema y las desarrolla para ampliar la información, sin contradicciones, reiteraciones innecesarias o digresiones. Establece relaciones entre las ideas, como causa-efecto y secuencia, a través de algunos referentes y conectores.",
                                "Incorpora un vocabulario que incluye sinónimos y algunos términos propios de los campos del saber.",
                                "Utiliza recursos gramaticales y ortográficos (por ejemplo, el punto seguido y los signos de admiración e interrogación) que contribuyen a dar sentido a su texto. Emplea algunas figuras retóricas (por ejemplo, las adjetivaciones) para caracterizar personas, personajes y escenarios, y elabora rimas y juegos verbales apelando al ritmo y la musicalidad de las palabras, con el fin de expresar sus experiencias y emociones.",
                                "Revisa el texto para determinar si se ajusta a la situación comunicativa, si existen contradicciones o reiteraciones innecesarias que afectan la coherencia entre las ideas, o si el uso de conectores y referentes asegura la cohesión entre ellas. También, revisa el uso de los recursos ortográficos empleados en su texto y verifica si falta alguno (como los signos de interrogación), con el fin de mejorarlo.",
                                "Explica el efecto de su texto en los lectores, luego de compartirlo con otros. También, revisa el uso de los recursos ortográficos empleados en su texto y algunos aspectos gramaticales."
                            ],
                            "4°": [
                                "Adecúa el texto a la situación comunicativa considerando el propósito comunicativo, el tipo textual, así como el formato y el soporte. Mantiene el registro formal e informal; para ello, se adapta a los destinatarios y selecciona algunas fuentes de información complementaria.",
                                "Escribe textos de forma coherente y cohesionada. Ordena las ideas en torno a un tema, las jerarquiza en subtemas de acuerdo a párrafos, y las desarrolla para ampliar la información, sin digresiones o vacíos.",
                                "Establece relaciones entre las ideas, como adición, causa-efecto y consecuencia, a través de algunos referentes y conectores. Incorpora un vocabulario que incluye sinónimos y algunos términos propios de los campos del saber.",
                                "Utiliza recursos gramaticales y ortográficos (por ejemplo, el punto seguido y las comas enumerativas) que contribuyen a dar sentido a su texto, e incorpora algunos recursos textuales (por ejemplo, el tamaño de la letra) para reforzar dicho sentido. Emplea comparaciones y adjetivaciones para caracterizar personas, personajes y escenarios, y elabora rimas y juegos verbales apelando al ritmo y la musicalidad de las palabras, con el fin de expresar sus experiencias y emociones.",
                                "Revisa el texto para determinar si se ajusta a la situación comunicativa, si existen contradicciones o reiteraciones innecesarias que afectan la coherencia entre las ideas, o si el uso de conectores y referentes asegura la cohesión entre ellas. También, revisa el uso de los recursos ortográficos que empleó en su texto y verifica si falta alguno (como el punto aparte), con el fin de mejorarlo.",
                                "Explica el efecto de su texto en los lectores considerando su propósito al momento de escribirlo. Asimismo, explica la importancia de los aspectos gramaticales y ortográficos más comunes."
                            ],
                            "5°": [
                                "Adecúa el texto a la situación comunicativa considerando el propósito comunicativo, el tipo textual y algunas características del género discursivo, así como el formato y el soporte. Mantiene el registro formal e informal; para ello, se adapta a los destinatarios y selecciona algunas fuentes de información complementaria.",
                                "Escribe textos de forma coherente y cohesionada. Ordena las ideas en torno a un tema, las jerarquiza en subtemas e ideas principales de acuerdo a párrafos, y las desarrolla para ampliar la información, sin digresiones o vacíos.",
                                "Establece relaciones entre las ideas, como causa-efecto, consecuencia y contraste, a través de algunos referentes y conectores. Incorpora de forma pertinente vocabulario que incluye sinónimos y algunos términos propios de los campos del saber.",
                                "Utiliza recursos gramaticales y ortográficos (por ejemplo, el punto aparte para separar párrafos) que contribuyen a dar sentido a su texto, e incorpora algunos recursos textuales (como uso de negritas o comillas) para reforzar dicho sentido. Emplea algunas figuras retóricas, (personificaciones y adjetivaciones) para caracterizar personas, personajes y escenarios, o para elaborar patrones rítmicos y versos libres, con el fin de producir efectos en el lector (el entretenimiento o el suspenso, por ejemplo).",
                                "Evalúa de manera permanente el texto, para determinar si se ajusta a la situación comunicativa, si existen reiteraciones innecesarias o digresiones que afectan la coherencia entre las ideas, o si el uso de conectores y referentes asegura la cohesión entre ellas. También, evalúa la utilidad de los recursos ortográficos empleados y la pertinencia del vocabulario, para mejorar el texto y garantizar su sentido.",
                                "Evalúa el efecto de su texto en los lectores, a partir de los recursos textuales y estilísticos utilizados, y considerando su propósito al momento de escribirlo. Compara y contrasta los aspectos gramaticales y ortográficos más comunes cuando evalúa el texto."
                            ],
                            "6°": [
                                "Adecúa el texto a la situación comunicativa considerando el propósito comunicativo, el tipo textual, así como el formato y el soporte. Mantiene el registro formal e informal; para ello, se adapta a los destinatarios y selecciona algunas fuentes de información complementaria.",
                                "Escribe textos de forma coherente y cohesionada. Ordena las ideas en torno a un tema, las jerarquiza en subtemas e ideas principales de acuerdo a párrafos, y las desarrolla para ampliar la información, sin digresiones o vacíos.",
                                "Establece relaciones entre las ideas, como causa-efecto, consecuencia y contraste, a través de algunos referentes y conectores. Incorpora de forma pertinente vocabulario que incluye sinónimos y diversos términos propios de los campos del saber.",
                                "Utiliza recursos gramaticales y ortográficos (por ejemplo, el punto aparte para separar párrafos) que contribuyen a dar sentido a su texto, e incorpora algunos recursos textuales (como uso de negritas o comillas) para reforzar dicho sentido. Emplea algunas figuras retóricas (personificaciones e hipérboles) para caracterizar personas, personajes y escenarios, o para elaborar patrones rítmicos y versos libres, con el fin de producir efectos en el lector (el entretenimiento o el suspenso, por ejemplo).",
                                "Evalúa de manera permanente el texto, para determinar si se ajusta a la situación comunicativa, si existen digresiones o vacíos de información que afectan la coherencia entre las ideas, o si el uso de conectores y referentes asegura la cohesión entre ellas. También, evalúa la utilidad de los recursos ortográficos empleados y la pertinencia del vocabulario, para mejorar el texto y garantizar su sentido.",
                                "Evalúa el efecto de su texto en los lectores, a partir de los recursos textuales y estilísticos utilizados, y considerando su propósito al momento de escribirlo. Compara y contrasta los aspectos gramaticales y ortográficos más comunes, así como las características de tipos textuales, cuando evalúa el texto."
                            ]
                        }
                    }
                ]
            },
            "Arte y Cultura": {
                competencias: [
                    {
                        id: "arte-p-c1",
                        nombre: "Aprecia de manera crítica manifestaciones artístico-culturales",
                        capacidades: [
                            "Percibe manifestaciones artístico-culturales",
                            "Contextualiza sus manifestaciones culturales",
                            "Reflexiona creativa y críticamente sobre las manifestaciones artístico-culturales"
                        ],
                        estandares: {
                            "Ciclo III": "Aprecia de manera crítica manifestaciones artístico-culturales al observar, escuchar y describir las características visuales, táctiles, sonoras y kinestésicas de estas manifestaciones, describiendo las sensaciones que le transmiten. Participa de conversaciones sobre los contextos donde se originan manifestaciones artístico-culturales y reconoce que responden a características propias de un grupo de personas, de tiempos y lugares diferentes. Expresa sus preferencias sobre manifestaciones artísticas que observa o experimenta y conversa sobre los temas, las ideas y sentimientos que comunican.",
                            "Ciclo IV": "Aprecia de manera crítica manifestaciones artístico-culturales al observar, escuchar y describir las características claves de una manifestación artístico-cultural, su forma, los medios que utiliza, su temática; describe las ideas o sentimientos que comunica. Investiga los contextos donde se origina e infiere información acerca del lugar, la época y la cultura donde fue creada. Integra la información recogida y describe de qué manera una manifestación artístico-cultural comunica ideas, sentimientos e intenciones.",
                            "Ciclo V": "Aprecia de manera crítica manifestaciones artístico-culturales al interpretar las cualidades expresivas de los elementos del arte, la estructura y los medios utilizados en una manifestación artístico-cultural y explica cómo transmite mensajes, ideas y sentimientos. Investiga los contextos donde se originan manifestaciones artístico-culturales tradicionales y contemporáneas e identifica cómo los cambios, las tradiciones, las creencias y los valores revelan la manera en que una determinada persona o sociedad ha vivido. Genera hipótesis sobre el significado y las diversas intenciones que puede tener una manifestación creada en contextos históricos y culturales diferentes."
                        }
                        , // <-- No olvides la coma al unirlo con el resto de tu archivo
                        desempenos: {
                            "1°": [
                                "Usa los sentidos para identificar, con la ayuda del docente, los elementos visuales, táctiles, sonoros y kinestésicos que hay en la naturaleza, el entorno y diversas manifestaciones artísticas de su contexto local.",
                                "Menciona y describe las experiencias que tiene con manifestaciones artísticas en su entorno familiar y en su comunidad. Ejemplo: El estudiante conversa sobre situaciones, eventos u ocasiones donde ha tenido oportunidad de vivir o experimentar la música (cuando su mamá le canta o cuando oye música para bailar en su casa, en fiestas o en celebraciones de su barrio).",
                                "Explica sus ideas y expresa sus emociones y sentimientos cuando entra en contacto con la naturaleza o manifestaciones artístico-culturales de su entorno."
                            ],
                            "2°": [
                                "Describe o registra líneas, formas, sonidos y movimientos que encuentra en la naturaleza, el entorno y en diversas manifestaciones artísticas, y los asocia con ideas y sentimientos. Ejemplo: El estudiante describe y compara diversos sonidos que escucha en el entorno (las bocinas de los carros, el silbido de un pájaro, el sonido de las hojas de los árboles) y explica cómo lo hacen sentir.",
                                "Mantiene conversaciones y hace registros sobre los contextos históricos y culturales de manifestaciones artístico-culturales con las que interactúa. Ejemplo: El estudiante conversa sobre las similitudes y diferencias entre las danzas peruanas que ha observado. Registra de manera visual y escrita cómo se lleva a cabo cada danza, la forma en que visten los danzantes y con qué música o sonidos se acompañan.",
                                "Explica sus ideas y expresa los sentimientos que le generan las manifestaciones artístico-culturales, con base en sus observaciones y experiencias. Ejemplo: El estudiante comparte con sus compañeros lo que siente y piensa sobre los personajes de una obra de teatro, y lo asocia con el tema de la historia."
                            ],
                            "3°": [
                                "Identifica y describe los elementos básicos del arte que encuentra en su entorno y en manifestaciones artístico-culturales diversas. Relaciona los elementos con ideas, mensajes y sentimientos. Ejemplo: El estudiante describe qué sonidos le llaman la atención, qué le hace sentir, qué le hace pensar, entre otros.",
                                "Especula sobre los procesos que el artista ha seguido para crear su obra e identifica los distintos usos y propósitos de manifestaciones artístico-culturales de su comunidad (ritual, recreativo, comercial, decorativo, utilitario, etc.).",
                                "Comenta sobre los posibles significados de una obra de arte, con base en lo observado y lo investigado acerca del autor, y emite una opinión personal sobre ella."
                            ],
                            "4°": [
                                "Describe y analiza los elementos del arte que identifica en el entorno y en manifestaciones artístico-culturales, e identifica los medios utilizados. Relaciona elementos con ideas, mensajes y sentimientos.",
                                "Investiga el significado de los símbolos y características principales de manifestaciones artístico-culturales de diferentes lugares y tiempos, y comprende que cumplen diversos propósitos y comunican ideas sobre la cultura en la que fueron creados. Ejemplo: El estudiante investiga las formas y los propósitos de la cerámica Moche y cómo los motivos y diseños usados representan el carácter de los personajes o figuras que allí aparecen.",
                                "Comenta sobre la manera en que los elementos, los procesos, los medios y las técnicas usadas comunican ideas, y genera hipótesis sobre el significado y la intención del artista."
                            ],
                            "5°": [
                                "Describe y analiza las cualidades de los elementos visuales, táctiles, sonoros y kinestésicos que percibe en manifestaciones artístico-culturales, y establece relaciones entre sus hallazgos y las ideas y emociones que ellas le generan.",
                                "Investiga en diversas fuentes acerca del origen y las formas en que manifestaciones artístico-culturales tradicionales y contemporáneas transmiten las características de una sociedad.",
                                "Desarrolla y aplica criterios relevantes para evaluar una manifestación artística, con base en la información que maneja sobre su forma y contexto de creación, y ensaya una postura personal frente a ella."
                            ],
                            "6°": [
                                "Describe las características de manifestaciones artístico-culturales que observa, analiza sus elementos e interpreta las ideas y sentimientos que transmiten.",
                                "Identifica y describe los contextos de diversas manifestaciones artístico-culturales e identifica cómo el arte cumple diversas funciones (socializar, entretener, contar historias, celebrar) y ayuda a conocer las creencias, los valores o las actitudes de un artista o una sociedad. Ejemplo: El estudiante explica qué representa la danza Chuño Saruy para las comunidades que la realizan, por qué la hacen, de qué lugar es, entre otros.",
                                "Genera hipótesis sobre el significado y la intención de una manifestación artístico-cultural e incorpora la opinión de los demás para reformular sus puntos de vista sobre ella. Ejemplo: El estudiante explica qué es un retablo y lo relaciona con eventos históricos sobre los que ha estudiado y explica qué partes del retablo son más efectivas en transmitir sus ideas. Explica cómo ha cambiado su reacción inicial frente al retablo, después de haberlo observado con detenimiento e indagado sobre el contexto en que fue creado."
                            ]
                        }
                    },
                    {
                        id: "arte-p-c2",
                        nombre: "Crea proyectos desde los lenguajes artísticos",
                        capacidades: [
                            "Explora y experimenta los lenguajes de las artes",
                            "Aplica procesos de creación",
                            "Evalúa y comunica sus procesos y proyectos"
                        ],
                        estandares: {
                            "Ciclo III": "Crea proyectos artísticos que demuestran habilidades artísticas iniciales para comunicar ideas, sentimientos, observaciones y experiencias. Experimenta, selecciona y explora libremente las posibilidades expresivas de los elementos, medios, materiales y técnicas de los diversos lenguajes del arte. Explora ideas que surgen de su imaginación, sus experiencias o de sus observaciones y las concretiza en trabajos de artes visuales, música, teatro o danza. Comparte sus experiencias y creaciones con sus compañeros y su familia. Describe y dialoga sobre las características de sus propios trabajos y los de sus compañeros y responde a preguntas sobre ellos.",
                            "Ciclo IV": "Crea proyectos artísticos en una variedad de lenguajes que comunican experiencias, ideas, sentimientos y observaciones. Explora, selecciona y combina los elementos del arte y utiliza medios, materiales, herramientas y técnicas de los diversos lenguajes del arte para expresar de diferentes maneras sus ideas y resolver problemas creativos. Demuestra habilidad para planificar trabajos usando sus conocimientos del arte y adecúa sus procesos para ajustarse a diferentes intenciones, que se basan en observaciones o problemas del entorno natural, artístico y cultural. Comunica sus hallazgos, identificando elementos o técnicas o procesos que ha usado para enriquecer sus creaciones y mejora sus trabajos a partir de retroalimentaciones. Planifica cómo y qué necesita para compartir sus experiencias y descubrimientos hacia la comunidad educativa.",
                            "Ciclo V": "Crea proyectos artísticos individuales o colaborativos explorando formas alternativas de combinar y usar elementos, medios, materiales y técnicas artísticas y tecnologías para la resolución de problemas creativos. Genera ideas investigando una variedad de fuentes y manipulando los elementos de los diversos lenguajes de las artes (danza, música, teatro, artes visuales) para evaluar cuáles se ajustan mejor a sus intenciones. Planifica y produce trabajos que comunican ideas y experiencias personales y sociales e incorpora influencias de su propia comunidad y de otras culturas. Registra sus procesos, identifica los aspectos esenciales de sus trabajos y los va modificando para mejorarlos. Planifica los espacios de presentación considerando sus intenciones y presenta sus descubrimientos y creaciones a una variedad de audiencias. Evalúa si logra sus intenciones de manera efectiva."
                        }
                        , // <-- No olvides la coma al unirlo con el resto de tu archivo
                        desempenos: {
                            "1°": [
                                "Experimenta con los medios, los materiales y las técnicas artísticas para crear efectos visuales, sonoros, vocales o kinestéticos en respuesta a estímulos del docente o con base en sus propias exploraciones. Ejemplo: El estudiante realiza movimientos según los ritmos que toca el profesor en un tambor, y altera o exagera sus movimientos cuando hay cambios de ritmo.",
                                "Explora ideas libremente a partir de su imaginación, sus experiencias u observaciones, y experimenta maneras en que los elementos del arte (movimientos, acciones, formas, colores o sonidos) pueden usarse o ser repetidos para comunicar una idea. Ejemplo: El estudiante realiza un trabajo de técnica mixta usando papeles y materiales de collage que el docente ha dispuesto sobre una mesa. Elige pedazos de papel de diferentes formas, colores y tamaños y los pega en una cartulina de manera libre. Agrega algunos retazos de tela en espacios que han quedado libres y hace varios puntos de colores con un plumón grueso, alrededor de cada pedazo de tela.",
                                "Presenta sus trabajos y creaciones y responde a preguntas sencillas sobre ellos; asimismo, describe las características de sus propios trabajos y los de sus compañeros."
                            ],
                            "2°": [
                                "Explora e improvisa maneras de usar los medios, los materiales y las técnicas artísticas, y descubre que pueden ser utilizados para expresar ideas y sentimientos. Ejemplo: El estudiante usa su imaginación para representar a los diversos personajes de una leyenda y experimenta con una variedad de movimientos corporales y tonos de voz.",
                                "Genera ideas a partir de intereses, de experiencias personales, de la observación de su entorno natural y social o de estímulos externos. Empieza a seleccionar y organizar elementos (movimientos, acciones o efectos visuales o sonoros) para presentar una idea de una manera en particular. Ejemplo: El estudiante realiza una lluvia de ideas para sonorizar un cuento y elige objetos cotidianos para crear efectos sonoros que puedan representar a los diversos personajes de la historia y las acciones o momentos más importantes.",
                                "Presenta sus trabajos y creaciones en forma individual y grupal, y describe de manera sencilla cómo los ha creado y organizado."
                            ],
                            "3°": [
                                "Combina y busca alternativas para usar elementos de los lenguajes artísticos, medios, materiales, herramientas, técnicas, recursos tecnológicos a su alcance, así como prácticas tradicionales de su comunidad, para expresar de diferentes maneras sus ideas.",
                                "Desarrolla sus ideas a partir de observaciones, experiencias y el trabajo artístico de otros, y selecciona elementos y materiales para componer una imagen de acuerdo a sus intenciones. Ejemplo: El estudiante crea una interpretación con base en un poema que ha leído. Experimenta con diversas fuentes sonoras usando objetos de su entorno, decide cuánto debe durar cada sonido y con qué ritmo lo debe tocar, de acuerdo al sentimiento que desea transmitir.",
                                "Planifica sus proyectos sobre la base de las maneras en que otros artistas han usado los elementos del arte y las técnicas (por ejemplo, en prácticas artísticas tradicionales de su comunidad) para comunicar sus propias experiencias o sentimientos. Improvisa, experimenta y combina diversos elementos, medios, materiales y técnicas para descubrir cómo puede comunicar una idea.",
                                "Describe la idea o temática específica desarrollada en sus procesos de improvisación y experimentación. Explica las técnicas que ha usado y las maneras en que siente que su trabajo es exitoso. Ejemplo: El estudiante explica por qué eligió estirar los brazos y desplazarse lentamente para representar el viento en una danza."
                            ],
                            "4°": [
                                "Improvisa y experimenta maneras de usar los elementos del arte y reconoce los efectos que puede lograr combinando diversos medios, materiales, herramientas y técnicas para comunicar ideas. Ejemplo: El estudiante realiza mezclas de color con témperas, para crear diferentes tonos de color que se parezcan más a su color de piel al hacer su autorretrato.",
                                "Planifica maneras de presentar sus trabajos para comunicar sus ideas efectivamente, donde asume un rol específico. Explica las razones por las que ha seleccionado medios, materiales, herramientas y técnicas específicas en sus trabajos y evalúa con criterios dados si logró su propósito."
                            ],
                            "5.": [
                                "Explora los elementos de los lenguajes de las artes visuales, la música, el teatro y la danza, y combina medios, materiales, herramientas, técnicas y recursos tecnológicos con fines expresivos y comunicativos.",
                                "Prueba y propone formas de utilizar los medios, los materiales, las herramientas y las técnicas con fines expresivos y comunicativos.",
                                "Genera ideas a partir de estímulos y fuentes diversas (tradicionales, locales y globales) y planifica su trabajo artístico tomando en cuenta la información recogida. Manipula una serie de elementos, medios, técnicas, herramientas y materiales para desarrollar trabajos que comunican ideas a una audiencia específica. Ejemplo: El estudiante observa diversos cuentos ilustrados sobre Don Quijote de la Mancha para saber de qué maneras han sido representados los personajes principales. Luego, planifica cómo representará de manera dramática a uno de los personajes, con base en las imágenes vistas.",
                                "Registra sus ideas y las influencias de sus creaciones y las presenta de diversas maneras. Asume roles en las diferentes fases del proyecto artístico y evalúa el impacto de sus acciones en el resultado de sus creaciones o presentaciones."
                            ],
                            "6°": [
                                "Explora los elementos de los lenguajes de las artes visuales, la música, el teatro y la danza, y los aplica con fines expresivos y comunicativos. Prueba y propone formas de utilizar los medios, materiales, herramientas y técnicas con fines expresivos y comunicativos.",
                                "Genera ideas a partir de estímulos y fuentes diversas (tradicionales, locales y globales) y planifica su trabajo artístico tomando en cuenta la información recogida. Manipula una serie de elementos, medios, técnicas, herramientas y materiales para desarrollar trabajos que comunican ideas a una audiencia específica.",
                                "Documenta la manera en que sus ideas se han desarrollado y cuáles han sido sus influencias. Planifica la manera en que desea mostrar el resultado de sus investigaciones y creaciones, y mejora su presentación a partir de su propia autoevaluación y la retroalimentación que recibe de otros. Evalúa el resultado de sus creaciones o presentaciones y describe cuáles eran sus intenciones y qué mensajes transmite. Ejemplo: El estudiante crea un trabajo de “arpillería” para representar conceptos básicos sobre la democracia (igualdad, libertad, mayoría, etc.) a través de diferentes escenas. Planifica de qué manera presentará sus bocetos e ideas a sus compañeros. Explica los conceptos que eligió para crear su trabajo textil y responde a preguntas sobre los personajes y las acciones que ha representado. Recoge ideas y sugerencias para mejorar su trabajo final."
                            ]
                        }
                    }
                ]
            },

            "Inglés": {
                competencias: [
                    {
                        id: "ing-p-c1",
                        nombre: "Se comunica oralmente en inglés como lengua extranjera",
                        capacidades: [
                            "Obtiene información de textos orales",
                            "Infiere e interpreta información de textos orales",
                            "Adecúa, organiza y desarrolla las ideas de forma coherente y cohesionada",
                            "Utiliza recursos no verbales y paraverbales de forma estratégica",
                            "Interactúa estratégicamente con distintos interlocutores",
                            "Reflexiona y evalúa la forma, el contenido y el contexto del texto oral"
                        ],
                        estandares: {
                            "Ciclo III": "Se comunica oralmente mediante textos orales breves en inglés. Obtiene información explícita con ayuda audiovisual y expresiones corporales del emisor. Realiza inferencias sencillas e interpreta información explícita del interlocutor. Se expresa espontáneamente organizando sus ideas acerca de sí mismo, su familia y su entorno inmediato usando vocabulario y construcciones gramaticales simples. Utiliza recursos no verbales como gestos y expresiones corporales. Opina sobre el texto oral que escucha en inglés dando a conocer sus preferencias a través del uso de ilustraciones según el contexto. En un intercambio, responde usando palabras, frases u oraciones simples en inglés.",
                            "Ciclo IV": "Se comunica oralmente mediante textos orales sencillos en inglés. Obtiene información explícita con ayuda audiovisual y expresiones corporales del emisor. Realiza inferencias sencillas e interpreta la intención del interlocutor. Se expresa organizando sus ideas acerca de sí mismo, actividades diarias, preferencias y entorno inmediato usando vocabulario y construcciones gramaticales sencillas. Utiliza recursos no verbales como gestos y expresiones corporales tono y volumen de voz apropiados. Opina sobre el texto oral que escucha en inglés expresando su posición con oraciones simples. En un intercambio, formula y responde preguntas usando frases y oraciones cotidianas en inglés de forma pertinente.",
                            "Ciclo V": "Se comunica oralmente mediante textos orales sencillos en inglés. Obtiene información explícita del texto que escucha. Infiere hechos, tema y propósito e interpreta la intención del interlocutor. Se expresa adecuando el texto a situaciones comunicativas cotidianas usando pronunciación adecuada; organiza y desarrolla ideas en torno a un tema haciendo uso de algunos conectores coordinados incluyendo vocabulario de uso frecuente y construcciones gramaticales determinadas. Utiliza recursos no verbales como gestos y expresiones corporales tono y volumen de voz apropiado. Opina sobre el texto oral que escucha en inglés expresando su posición con oraciones sencillas. En un intercambio, formula y responde preguntas usando frases y oraciones de uso frecuente sobre temas familiares, de interés personal y de la vida cotidiana de forma pertinente."
                        }

                    },
                    {
                        id: "ing-p-c2",
                        nombre: "Lee diversos tipos de textos escritos en inglés como lengua extranjera",
                        capacidades: [
                            "Obtiene información del texto escrito",
                            "Infiere e interpreta información del texto",
                            "Reflexiona y evalúa la forma, el contenido y contexto del texto"
                        ],
                        estandares: {
                            "Ciclo III": "Lee diversos tipos de textos en inglés que presentan estructura simple en los que predominan expresiones conocidas e ilustraciones que apoyan las ideas centrales. Obtiene información explícita y relevante ubicada en lugares evidentes del texto. Realiza inferencias locales a partir de información explícita e interpreta el texto relacionando información recurrente. Opina sobre lo que más le gustó del texto leído.",
                            "Ciclo IV": "Lee diversos tipos de textos en inglés que presentan estructura simple con vocabulario de uso frecuente. Obtiene información poco evidente distinguiéndola de otras próximas y semejantes. Realiza inferencias locales a partir de información explícita e implícita e interpreta el texto relacionando información relevante para construir su sentido global. Opina sobre sucesos e ideas importantes del texto a partir de su propia experiencia.",
                            "Ciclo V": "Lee críticamente diversos tipos de textos en inglés que presentan estructuras simples y algunos elementos complejos con vocabulario cotidiano. Obtiene información e integra datos que están en distintas partes del texto. Realiza inferencias locales a partir de información explícita e implícita e interpreta el texto seleccionando información relevante y complementaria. Reflexiona sobre aspectos variados del texto evaluando el uso del lenguaje y la intención de los recursos textuales más comunes a partir de su conocimiento y experiencia."
                        }
                    },
                    {
                        id: "ing-p-c3",
                        nombre: "Escribe diversos tipos de textos en inglés como lengua extranjera",
                        capacidades: [
                            "Adecúa el texto a la situación comunicativa",
                            "Organiza y desarrolla las ideas de forma coherente y cohesionada",
                            "Utiliza convenciones del lenguaje escrito de forma pertinente",
                            "Reflexiona y evalúa la forma, el contenido y contexto del texto escrito"
                        ],
                        estandares: {
                            "Ciclo III": "Escribe textos breves y sencillos en inglés. Adecúa su texto al propósito del texto a partir de su experiencia previa. Organiza y desarrolla sus ideas en torno a un tema. Relaciona sus ideas a través del uso de algunos conectores básicos con vocabulario de uso frecuente y construcciones gramaticales simples. Utiliza recursos ortográficos básicos que permiten claridad en sus textos. Reflexiona y evalúa sobre su texto escrito.",
                            "Ciclo IV": "Escribe diversos tipos de textos de extensión breve en inglés. Adecúa su texto al destinatario y propósito a partir de su experiencia previa. Organiza y desarrolla sus ideas en torno a un tema central y los estructura en un párrafo. Relaciona sus ideas a través del uso de algunos recursos cohesivos (sinónimos, pronominalización y conectores aditivos, adversativos y temporales) con vocabulario cotidiano y construcciones gramaticales simples. Utiliza algunos recursos ortográficos que permiten claridad en sus textos. Reflexiona y evalúa sobre su texto escrito.",
                            "Ciclo V": "Escribe diversos tipos de textos de mediana extensión en inglés. Adecúa su texto al destinatario, propósito y registro a partir de su experiencia previa y fuentes de información básica. Organiza y desarrolla sus ideas en torno a un tema central y los estructura en uno o dos párrafos. Relaciona sus ideas a través del uso de algunos recursos cohesivos (sinónimos, pronominalización y conectores aditivos, adversativos, temporales y causales) con vocabulario cotidiano y pertinente y construcciones gramaticales simples y de mediana complejidad. Utiliza recursos ortográficos que permiten claridad en sus textos. Reflexiona sobre el contenido del texto y evalúa el uso de algunos recursos formales."
                        }
                    }
                ]
            },
            "Matemática": {
                competencias: [
                    {
                        id: "mat-p-c1",
                        nombre: "Resuelve problemas de cantidad",
                        capacidades: [
                            "Traduce cantidades a expresiones numéricas",
                            "Comunica su comprensión sobre los números y las operaciones",
                            "Usa estrategias y procedimientos de estimación y cálculo",
                            "Argumenta afirmaciones sobre las relaciones numéricas y las operaciones"
                        ],
                        estandares: {
                            "Ciclo III": "Resuelve problemas referidos a acciones de juntar, separar, agregar, quitar, igualar y comparar cantidades; y las traduce a expresiones de adición y sustracción, doble y mitad. Expresa su comprensión del valor de posición en números de dos cifras y los representa mediante equivalencias entre unidades y decenas. Así también, expresa mediante representaciones su comprensión del doble y mitad de una cantidad; usa lenguaje numérico. Emplea estrategias diversas y procedimientos de cálculo y comparación de cantidades; mide y compara el tiempo y la masa, usando unidades no convencionales. Explica por qué debe sumar o restar en una situación y su proceso de resolución.",
                            "Ciclo IV": "Resuelve problemas referidos a una o más acciones de agregar, quitar, igualar, repetir o repartir una cantidad, combinar dos colecciones de objetos, así como partir una unidad en partes iguales; traduciéndolas a expresiones aditivas y multiplicativas con números naturales y expresiones aditivas con fracciones usuales. Expresa su comprensión del valor posicional en números de hasta cuatro cifras y los representa mediante equivalencias, así también la comprensión de las nociones de multiplicación, sus propiedades conmutativa y asociativa y las nociones de división, la noción de fracción como parte – todo y las equivalencias entre fracciones usuales; usando lenguaje numérico y diversas representaciones. Emplea estrategias, el cálculo mental o escrito para operar de forma exacta y aproximada con números naturales; así también emplea estrategias para sumar, restar y encontrar equivalencias entre fracciones. Mide o estima la masa y el tiempo, seleccionando y usando unidades no convencionales y convencionales. Justifica sus procesos de resolución y sus afirmaciones sobre operaciones inversas con números naturales.",
                            "Ciclo V": "Resuelve problemas referidos a una o más acciones de comparar, igualar, repetir o repartir cantidades, partir y repartir una cantidad en partes iguales; las traduce a expresiones aditivas, multiplicativas y la potenciación cuadrada y cúbica; así como a expresiones de adición, sustracción y multiplicación con fracciones y decimales (hasta el centésimo). Expresa su comprensión del sistema de numeración decimal con números naturales hasta seis cifras, de divisores y múltiplos, y del valor posicional de los números decimales hasta los centésimos; con lenguaje numérico y representaciones diversas. Representa de diversas formas su comprensión de la noción de fracción como operador y como cociente, así como las equivalencias entre decimales, fracciones o porcentajes usuales. Selecciona y emplea estrategias diversas, el cálculo mental o escrito para operar con números naturales, fracciones, decimales y porcentajes de manera exacta o aproximada; así como para hacer conversiones de unidades de medida de masa, tiempo y temperatura, y medir de manera exacta o aproximada usando la unidad pertinente. Justifica sus procesos de resolución así como sus afirmaciones sobre las relaciones entre las cuatro operaciones y sus propiedades, basándose en ejemplos y sus conocimientos matemáticos."
                        }
                        , // <-- No olvides la coma al unirlo con el resto de tu archivo
                        desempenos: {
                            "1°": [
                                "Establece relaciones entre datos y acciones de agregar, quitar y juntar cantidades, y las transforma en expresiones numéricas (modelo) de adición o sustracción con números naturales hasta 20.",
                                "Expresa con diversas representaciones y lenguaje numérico (números, signos y expresiones verbales) su comprensión de la decena como grupo de diez unidades y de las operaciones de adición y sustracción con números hasta 20.",
                                "Expresa con diversas representaciones y lenguaje numérico (números, signos y expresiones verbales) su comprensión del número como ordinal al ordenar objetos hasta el décimo lugar, del número como cardinal al determinar una cantidad de hasta 50 objetos y de la comparación y el orden entre dos cantidades.",
                                "Emplea las siguientes estrategias y procedimientos: Estrategias heurísticas, Estrategias de cálculo mental, como la suma de cifras iguales, el conteo y las descomposiciones del 10.",
                                "Procedimientos de cálculo, como las sumas y restas sin canjes. Estrategias de comparación, como la correspondencia uno a uno.",
                                "Compara en forma vivencial y concreta la masa de los objetos usando otros objetos como referentes, y estima el tiempo usando unidades convencionales y referentes de actividades cotidianas (días de la semana, meses del año).",
                                "Realiza afirmaciones sobre las diferentes formas de representar el número y las explica con ejemplos concretos.",
                                "Realiza afirmaciones sobre los resultados que podría obtener al sumar o restar y las explica con apoyo de material concreto. Asimismo, explica los pasos que siguió en la resolución de un problema."
                            ],
                            "2°": [
                                "Establece relaciones entre datos y una o más acciones de agregar, quitar, avanzar, retroceder, juntar, separar, comparar e igualar cantidades, y las transforma en expresiones numéricas (modelo) de adición o sustracción con números naturales de hasta dos cifras.",
                                "Expresa con diversas representaciones y lenguaje numérico (números, signos y expresiones verbales) su comprensión de la decena como nueva unidad en el sistema de numeración decimal y el valor posicional de una cifra en números de hasta dos cifras.",
                                "Expresa con diversas representaciones y lenguaje numérico (números, signos y expresiones verbales) su comprensión del número como ordinal al ordenar objetos hasta el vigésimo lugar, de la comparación entre números y de las operaciones de adición y sustracción, el doble y la mitad, con números de hasta dos cifras.",
                                "Emplea estrategias y procedimientos como los siguientes: Estrategias heurísticas. Estrategias de cálculo mental, como las descomposiciones aditivas o el uso de analogías (70 + 20; 70 + 9, completar a la decena más cercana, usar dobles, sumar en vez de restar, uso de la conmutatividad).",
                                "Procedimientos de cálculo, como sumas o restas con y sin canjes. Estrategias de comparación, que incluyen el uso del tablero cien y otros.",
                                "Compara en forma vivencial y concreta la masa de objetos usando unidades no convencionales y mide el tiempo usando unidades convencionales (días, horarios semanales).",
                                "Realiza afirmaciones sobre la comparación de números naturales y de la decena, y las explica con material concreto.",
                                "Realiza afirmaciones sobre por qué debe sumar o restar en un problema y las explica; así también, explica su proceso de resolución y los resultados obtenidos."
                            ],
                            "3°": [
                                "Establece relaciones entre datos y una o más acciones de agregar, quitar, comparar, igualar, reiterar, agrupar, repartir cantidades y combinar colecciones diferentes de objetos, para transformarlas en expresiones numéricas (modelo) de adición, sustracción, multiplicación y división con números naturales de hasta tres cifras.",
                                "Expresa con diversas representaciones y lenguaje numérico (números, signos y expresiones verbales) su comprensión sobre la centena como nueva unidad en el sistema de numeración decimal, sus equivalencias con decenas y unidades, el valor posicional de una cifra en números de tres cifras y la comparación y el orden de números.",
                                "Expresa con diversas representaciones y lenguaje numérico (números, signos y expresiones verbales) su comprensión de la multiplicación y división con números naturales hasta 100, y la propiedad conmutativa de la adición.",
                                "Emplea estrategias y procedimientos como los siguientes: Estrategias heurísticas. Estrategias de cálculo mental, como descomposiciones aditivas y multiplicativas, duplicar o dividir por 2, multiplicación y división por 10, completar a la centena más cercana y aproximaciones.",
                                "Procedimientos de cálculo escrito, como sumas o restas con canjes y uso de la asociatividad.",
                                "Mide y compara la masa de los objetos (kilogramo) y el tiempo (horas exactas) usando unidades convencionales y no convencionales.",
                                "Realiza afirmaciones sobre la comparación de números naturales y la conformación de la centena, y las explica con material concreto.",
                                "Realiza afirmaciones sobre el uso de la propiedad conmutativa y las explica con ejemplos concretos. Asimismo, explica por qué la sustracción es la operación inversa de la adición, por qué debe multiplicar o dividir en un problema, así como la relación inversa entre ambas operaciones; también explica su proceso de resolución y los resultados obtenidos."
                            ],
                            "4°": [
                                "Establece relaciones entre datos y una o más acciones de agregar, quitar, comparar, igualar, reiterar, agrupar, repartir cantidades y combinar colecciones, para transformarlas en expresiones numéricas (modelo) de adición, sustracción, multiplicación y división con números naturales de hasta cuatro cifras.",
                                "Establece relaciones entre datos y acciones de partir una unidad o una colección de objetos en partes iguales y las transforma en expresiones numéricas (modelo) de fracciones usuales, adición y sustracción de estas.",
                                "Expresa con diversas representaciones y lenguaje numérico (números, signos y expresiones verbales) su comprensión de la unidad de millar como unidad del sistema de numeración decimal, sus equivalencias entre unidades menores, el valor posicional de un dígito en números de cuatro cifras y la comparación y el orden de números.",
                                "Expresa con diversas representaciones y lenguaje numérico su comprensión de la multiplicación y división con números naturales, así como las propiedades conmutativa y asociativa de la multiplicación y la fracción como parte-todo (cantidad discreta o continua), así como equivalencias y operaciones de adición y sustracción entre fracciones usuales usando fracciones equivalentes.",
                                "Emplea estrategias y procedimientos como los siguientes: Estrategias heurísticas. Estrategias de cálculo mental o escrito, como las descomposiciones aditivas y multiplicativas, doblar y dividir por 2 de forma reiterada, completar al millar más cercano, uso de la propiedad distributiva, redondeo a múltiplos de 10 y amplificación y simplificación de fracciones.",
                                "Mide, estima y compara la masa (kilogramo, gramo) y el tiempo (año, hora, media hora y cuarto de hora) seleccionando unidades convencionales.",
                                "Realiza afirmaciones sobre la conformación de la unidad de millar y las explica con material concreto. Realiza afirmaciones sobre las equivalencias entre fracciones y las explica con ejemplos concretos. Asimismo, explica la comparación entre fracciones, así como su proceso de resolución y los resultados obtenidos."
                            ],
                            "5°": [
                                "Establece relaciones entre datos y una o más acciones de comparar, igualar, reiterar y repartir cantidades, para transformarlas en expresiones numéricas (modelo) de adición, sustracción, multiplicación y división con números naturales, y de adición y sustracción con decimales.",
                                "Establece relaciones entre datos y acciones de dividir la unidad o una cantidad en partes iguales, y las transforma en expresiones numéricas (modelo) de fracciones y de adición, sustracción y multiplicación de estas.",
                                "Expresa con diversas representaciones y lenguaje numérico (números, signos y expresiones verbales) su comprensión de: El valor posicional de un dígito en números de hasta seis cifras, al hacer equivalencias entre decenas de millar, unidades de millar, centenas, decenas y unidades; así como del valor posicional de decimales hasta el décimo, su comparación y orden.",
                                "Expresa con diversas representaciones y lenguaje numérico su comprensión de los múltiplos de un número natural y la relación entre las cuatro operaciones y sus propiedades (conmutativa, asociativa y distributiva), la fracción como parte de una cantidad discreta o continua y como operador, y las operaciones de adición y sustracción con números decimales y fracciones.",
                                "Emplea estrategias y procedimientos como los siguientes: Estrategias heurísticas. Estrategias de cálculo: uso de la reversibilidad de las operaciones con números naturales, estimación de productos y cocientes, descomposición del dividendo, amplificación y simplificación de fracciones, redondeo de expresiones decimales y uso de la propiedad distributiva de la multiplicación respecto de la adición y división.",
                                "Mide, estima y compara la masa de los objetos (kilogramo) y el tiempo (décadas y siglos) usando unidades convencionales (expresadas con naturales, fracciones y decimales); y usa multiplicaciones o divisiones por múltiplos de 10, así como equivalencias, para hacer conversiones de unidades de masa y tiempo.",
                                "Realiza afirmaciones sobre las relaciones (orden y otras) entre números naturales, decimales y fracciones; así como sobre relaciones inversas entre operaciones, las cuales justifica con varios ejemplos y sus conocimientos matemáticos. Justifica su proceso de resolución y los resultados obtenidos."
                            ],
                            "6°": [
                                "Establece relaciones entre datos y una o más acciones de comparar, igualar, reiterar y dividir cantidades, y las transforma en expresiones numéricas (modelo) de adición, sustracción, multiplicación y división de dos números naturales (obtiene como cociente un número decimal exacto), y en potencias cuadradas y cúbicas.",
                                "Establece relaciones entre datos y acciones de dividir una o más unidades en partes iguales y las transforma en expresiones numéricas (modelo) de fracciones y de adición, sustracción y multiplicación con expresiones fraccionarias y decimales (hasta el centésimo).",
                                "Expresa con diversas representaciones y lenguaje numérico (números, signos y expresiones verbales) su comprensión de: El valor posicional de un dígito en números de hasta seis cifras y decimales hasta el centésimo, así como de las unidades del sistema de numeración decimal. Los múltiplos y divisores de un número natural; las características de los números primos y compuestos; así como las propiedades de las operaciones y su relación inversa.",
                                "Expresa con diversas representaciones y lenguaje numérico su comprensión de la fracción como operador y como cociente; las equivalencias entre decimales, fracciones o porcentajes usuales; las operaciones de adición, sustracción y multiplicación con fracciones y decimales.",
                                "Emplea estrategias y procedimientos como los siguientes: Estrategias heurísticas. Estrategias de cálculo, como el uso de la reversibilidad de las operaciones con números naturales, la amplificación y simplificación de fracciones, el redondeo de decimales y el uso de la propiedad distributiva.",
                                "Procedimientos y recursos para realizar operaciones con números naturales, expresiones fraccionarias y decimales exactos, y calcular porcentajes usuales.",
                                "Mide, estima y compara la masa de los objetos, el tiempo (minutos) y la temperatura usando la unidad de medida que conviene según el problema; emplea recursos y estrategias de cálculo para hacer conversiones de unidades de masa, tiempo y temperatura, expresadas con números naturales y expresiones decimales.",
                                "Realiza afirmaciones sobre las relaciones (orden y otras) entre decimales, fracciones o porcentajes usuales, y las justifica con varios ejemplos y sus conocimientos matemáticos. Justifica su proceso de resolución y los resultados obtenidos."
                            ]
                        }
                    },
                    {
                        id: "mat-p-c2",
                        nombre: "Resuelve problemas de regularidad, equivalencia y cambio",
                        capacidades: [
                            "Traduce datos y condiciones a expresiones algebraicas y gráficas",
                            "Comunica su comprensión sobre las relaciones algebraicas",
                            "Usa estrategias y procedimientos para encontrar equivalencias y reglas generales",
                            "Argumenta afirmaciones sobre relaciones de cambio y equivalencia"
                        ],
                        estandares: {
                            "Ciclo III": "Resuelve problemas que presentan equivalencias o regularidades, traduciéndolas a igualdades que contienen operaciones de adición o de sustracción y a patrones de repetición de dos criterios perceptuales y patrones aditivos. Expresa su comprensión de las equivalencias y de cómo es un patrón, usando material concreto y diversas representaciones. Emplea estrategias, la descomposición de números, cálculos sencillos para encontrar equivalencias, o para continuar y crear patrones. Explica las relaciones que encuentra en los patrones y lo que debe hacer para mantener el 'equilibrio' o la igualdad, con base en experiencias y ejemplos concretos.",
                            "Ciclo IV": "Resuelve problemas que presentan dos equivalencias, regularidades o relación de cambio entre dos magnitudes y expresiones; traduciéndolas a igualdades que contienen operaciones aditivas o multiplicativas, a tablas de valores y a patrones de repetición que combinan criterios y patrones aditivos o multiplicativos. Expresa su comprensión de la regla de formación de un patrón y del signo igual para expresar equivalencias. Así también, describe la relación de cambio entre una magnitud y otra; usando lenguaje matemático y diversas representaciones. Emplea estrategias, la descomposición de números, el cálculo mental, para crear, continuar o completar patrones de repetición. Hace afirmaciones sobre patrones, la equivalencia entre expresiones y sus variaciones y las propiedades de la igualdad, las justifica con argumentos y ejemplos concretos.",
                            "Ciclo V": "Resuelve problemas de equivalencias, regularidades o relaciones de cambio entre dos magnitudes o entre expresiones; traduciéndolas a ecuaciones que combinan las cuatro operaciones, a expresiones de desigualdad o a relaciones de proporcionalidad directa, y patrones de repetición que combinan criterios geométricos y cuya regla de formación se asocia a la posición de sus elementos. Expresa su comprensión del término general de un patrón, las condiciones de desigualdad expresadas con los signos > y <, así como de la relación proporcional como un cambio constante; usando lenguaje matemático y diversas representaciones. Emplea recursos, estrategias y propiedades de las igualdades para resolver ecuaciones o hallar valores que cumplen una condición de desigualdad o proporcionalidad; así como procedimientos para crear, continuar o completar patrones. Realiza afirmaciones a partir de sus experiencias concretas, sobre patrones y sus elementos no inmediatos; las justifica con ejemplos, procedimientos, y propiedades de la igualdad y desigualdad."
                        }
                        ,
                        desempenos: {
                            "1°": [
                                "Establece relaciones de equivalencias entre dos grupos de hasta diez objetos y las trasforma en igualdades que contienen adiciones. Ejemplo: En un platillo de una balanza hay 2 pelotas rojas y 5 pelotas azules (del mismo tamaño) y en el otro platillo hay 3 pelotas amarillas y 4 pelotas rojas. El estudiante representa con una igualdad lo que observa en la balanza (2+5=3+4).",
                                "Establece relaciones entre los datos que se repiten (objetos, colores, diseños, sonidos o movimientos) o en patrones aditivos.",
                                "Describe, usando lenguaje cotidiano y representaciones concretas y dibujos, su comprensión de la equivalencia como equilibrio o igual valor entre dos colecciones o cantidades; asimismo, cómo se forma el patrón de repetición (de un criterio perceptual) y el patrón aditivo creciente hasta el 20 (de 1 en 1 y 2 en 2).",
                                "Emplea estrategias heurísticas y estrategias de cálculo (como el conteo, el ensayo-error y la descomposición aditiva) para encontrar equivalencias o crear, continuar y completar patrones.",
                                "Explica cómo continúa el patrón y lo que debe hacer para encontrar una equivalencia, así como su proceso de resolución. Ejemplo: En una balanza de platillos, se colocan 5 cubos en el lado izquierdo y 8 cubos en el lado derecho. ¿Cuántos cubos hay que poner del lado izquierdo para lograr el equilibrio de ambos lados?"
                            ],
                            "2°": [
                                "Establece relaciones de equivalencias entre dos grupos de hasta veinte objetos y las trasforma en igualdades que contienen adiciones o sustracciones.",
                                "Establece relaciones entre los datos que se repiten (objetos, diseños, colores, sonidos o movimientos) o entre cantidades que aumentan o disminuyen regularmente, y los transforma en patrones de repetición o patrones aditivos con números de hasta 2 cifras.",
                                "Expresa, con lenguaje cotidiano y representaciones concretas o dibujos, su comprensión de la equivalencia como equilibrio o igualdad entre dos colecciones o cantidades.",
                                "Describe, usando lenguaje cotidiano y representaciones concretas y dibujos, el patrón de repetición (con dos criterios perceptuales), y cómo aumentan o disminuyen los números en un patrón aditivo con números de hasta 2 cifras.",
                                "Emplea estrategias heurísticas y estrategias de cálculo (el conteo o la descomposición aditiva) para encontrar equivalencias, mantener la igualdad (\"equilibrio\") o crear, continuar y completar patrones. Ejemplo: El estudiante podría decir: \"Si tú tienes tres frutas y yo cinco, ¿qué podemos hacer para que cada uno tenga el mismo número de frutas?\"",
                                "Explica lo que debe hacer para mantener el \"equilibrio\" o la igualdad, y cómo continúa el patrón y las semejanzas que encuentra en dos versiones del mismo patrón, con base en ejemplos concretos. Así también, explica de su proceso de resolución. Ejemplo: El estudiante podría decir: \"El collar lleva dos hojas, tres frutos secos, una concha, una y otra vez; y los bloques van dos rojos, tres azules y uno blanco, una y otra vez; ambos se forman así: dos, luego tres, luego uno\"."
                            ],
                            "3°": [
                                "Establece relaciones de equivalencias entre dos grupos de hasta veinte objetos y las trasforma en igualdades que contienen adiciones, sustracciones o multiplicaciones.",
                                "Establece relaciones entre los datos que se repiten (diseños, colores, sonidos o movimientos) o entre cantidades que aumentan o disminuyen regularmente, y los transforma en patrones de repetición (con dos criterios perceptuales o de cambio de posición) o patrones aditivos (con números de hasta 3 cifras).",
                                "Describe, con algunas expresiones de lenguaje algebraico (igualdad, patrón, etc.) y representaciones, su comprensión de la igualdad como equivalencia entre dos colecciones o cantidades, así como que un patrón puede representarse de diferentes formas.",
                                "Describe el cambio de una magnitud con respecto al paso del tiempo, apoyándose en tablas o dibujos. Ejemplo: El estudiante representa de diferentes maneras: el mismo patrón de triángulo, triángulo rectángulo, como ABA, ABA, ABA.",
                                "Emplea estrategias heurísticas y estrategias de cálculo (la descomposición aditiva y multiplicativa, agregar o quitar en ambos lados de la igualdad, relaciones inversas entre operaciones y otras), para encontrar equivalencias, mantener la igualdad (\"equilibrio\"), encontrar relaciones de cambio entre dos magnitudes o continuar, completar y crear patrones.",
                                "Hace afirmaciones y explica lo que sucede al modificar las cantidades que intervienen en una relación de igualdad y cómo equiparar cantidades, así como lo que debe considerar para continuar o completar el patrón y las semejanzas que encuentra en dos versiones del mismo patrón, mediante ejemplos concretos. Así también, explica su proceso de resolución. Ejemplo: El estudiante podría decir: \"Si quito 2 kilos en este platillo de la balanza, se perderá el equilibrio\"."
                            ],
                            "4°": [
                                "Establece relaciones entre datos de hasta dos equivalencias y las trasforma en igualdades que contienen adiciones o sustracciones, o multiplicaciones o divisiones.",
                                "Establece relaciones entre los datos de una regularidad y los transforma en patrones de repetición (que combinan criterios perceptuales y un criterio geométrico de simetría) o patrones aditivos o multiplicativos (con números de hasta 4 cifras).",
                                "Expresa, usando lenguaje algebraico (icono y operaciones) y diversas representaciones, su comprensión de la regla de formación de un patrón, de la igualdad (con un término desconocido) y del signo igual, distinguiéndolo de su uso en el resultado de una operación.",
                                "Describe la relación de cambio de una magnitud con respecto de otra, apoyándose en tablas o dibujos.",
                                "Emplea estrategias heurísticas o estrategias de cálculo (duplicar o repartir en cada lado de la igualdad, relación inversa entre operaciones), para encontrar equivalencias, mantener la igualdad (\"equilibrio\"), encontrar relaciones de cambio entre dos magnitudes.",
                                "Hace afirmaciones sobre la equivalencia entre expresiones; para ello, usa nocionalmente las propiedades de la igualdad: uniformidad y cancelativa.",
                                "Hace afirmaciones sobre las regularidades, y relaciones de cambio entre magnitudes, así como los números o elementos que siguen en un patrón, y las justifica con sus experiencias concretas, mediante el uso de propiedades de la igualdad y cálculos."
                            ],
                            "5°": [
                                "Establece relaciones entre datos y valores desconocidos de una equivalencia y relaciones de variación entre los datos de dos magnitudes, y las transforma en ecuaciones simples (por ejemplo: $x+a=b$) con números naturales, o en tablas de proporcionalidad.",
                                "Establece relaciones entre los datos de una regularidad y los transforma en un patrón de repetición (que combine un criterio geométrico de simetría o traslación y un criterio perceptual) o en un patrón aditivo de segundo orden (por ejemplo: 13-15-18-22-27-...).",
                                "Expresa, con lenguaje algebraico y diversas representaciones, su comprensión de la regla de formación de un patrón de segundo orden, así como de los símbolos o letras en la ecuación y la proporcionalidad como un cambio constante.",
                                "Emplea estrategias heurísticas, de estrategias de cálculo y propiedades de la igualdad (uniformidad y cancelativa) para encontrar el valor de la incógnita en una ecuación, para hallar la regla de formación de un patrón o para encontrar valores de magnitudes proporcionales.",
                                "Elabora afirmaciones sobre los elementos no inmediatos que continúan un patrón y las justifica con ejemplos y cálculos sencillos.",
                                "Asimismo, justifica sus procesos de resolución mediante el uso de propiedades de la igualdad y cálculos."
                            ],
                            "6°": [
                                "Establece relaciones entre datos y valores desconocidos de una equivalencia o de no equivalencia (\"desequilibrio\") y de variación entre los datos de dos magnitudes, y las transforma en ecuaciones que contienen las cuatro operaciones, expresiones de desigualdad con números naturales o decimales, o en proporcionalidad directa.",
                                "Establece relaciones entre los datos de una regularidad y los transforma en patrones de repetición (con criterios geométricos de traslación y giros), patrones (con y sin configuraciones puntuales) cuya regla se asocia a la posición de sus elementos y patrones aditivos o multiplicativos.",
                                "Expresa, con lenguaje algebraico y diversas representaciones, su comprensión del término general de un patrón (por ejemplo: 2, 5, 8, 11, 14...--> término general = triple de un número, menos 1), condiciones de desigualdad expresadas con los signos $>$ y $<$ y de la proporcionalidad directa.",
                                "Emplea estrategias heurísticas, de estrategias de cálculo, y propiedades de la igualdad para encontrar el valor de la incógnita en una ecuación, o los valores que cumplen una condición de desigualdad o de proporcionalidad; así como procedimientos para crear, continuar o completar patrones.",
                                "Expresa, con lenguaje algebraico y diversas representaciones, su comprensión del término general de un patrón y de las condiciones de desigualdad expresadas con los signos $>$ y $<$.",
                                "Realiza afirmaciones sobre los elementos no inmediatos que continúan un patrón y las justifica con ejemplos, procedimientos y propiedades de la igualdad y desigualdad.",
                                "Así también, explica el proceso seguido. Ejemplo: \"Dos rectángulos pueden tener diferente área pero el mismo perímetro\", \"El área de un triángulo la puedo obtener dividiendo por la mitad el área de un paralelogramo\"."
                            ]
                        }
                    },
                    {
                        id: "mat-p-c3",
                        nombre: "Resuelve problemas de forma, movimiento y localización",
                        capacidades: [
                            "Modela objetos con formas geométricas y sus transformaciones",
                            "Comunica su comprensión sobre las formas y relaciones geométricas",
                            "Usa estrategias y procedimientos para orientarse en el espacio",
                            "Argumenta afirmaciones sobre relaciones geométricas"
                        ],
                        estandares: {
                            "Ciclo III": "Resuelve problemas en los que modela las características y datos de ubicación de los objetos del entorno a formas bidimensionales y tridimensionales, sus elementos, posición y desplazamientos. Describe estas formas mediante sus elementos: número de lados, esquinas, lados curvos y rectos; número de puntas caras, formas de sus caras, usando representaciones concretas y dibujos. Así también traza y describe desplazamientos y posiciones, en cuadriculados y puntos de referencia. Emplea estrategias y procedimientos basados en la manipulación, para construir objetos y medir su longitud (ancho y largo) usando unidades no convencionales. Explica semejanzas y diferencias entre formas geométricas, así como su proceso de resolución.",
                            "Ciclo IV": "Resuelve problemas en los que modela características y datos de ubicación de los objetos a formas bidimensionales y tridimensionales, sus elementos, propiedades, su movimiento y ubicación en el plano cartesiano. Describe con lenguaje geométrico, estas formas reconociendo ángulos rectos, número de lados y vértices del polígono, así como líneas paralelas y perpendiculares, identifica formas simétricas y realiza traslaciones, en cuadrículas. Así también elabora croquis, donde traza y describe desplazamientos y posiciones, usando puntos de referencia. Emplea estrategias y procedimientos para trasladar y construir formas a través de la composición y descomposición, y para medir la longitud, superficie y capacidad de los objetos, usando unidades convencionales y no convencionales, recursos e instrumentos de medición. Elabora afirmaciones sobre las figuras compuestas; así como relaciones entre una forma tridimensional y su desarrollo en el plano; las explica con ejemplos concretos y gráficos.",
                            "Ciclo V": "Resuelve problemas en los que modela las características y la ubicación de objetos a formas bidimensionales y tridimensionales, sus propiedades, su ampliación, reducción o rotación. Describe y clasifica prismas rectos, cuadriláteros, triángulos, círculos, por sus elementos: vértices, lados, caras, ángulos, y por sus propiedades; usando lenguaje geométrico. Realiza giros en cuartos y medias vueltas, traslaciones, ampliación y reducción de formas bidimensionales, en el plano cartesiano. Describe recorridos y ubicaciones en planos. Emplea procedimientos e instrumentos para ampliar, reducir, girar y construir formas; así como para estimar o medir la longitud, superficie y capacidad de los objetos, seleccionando la unidad de medida convencional apropiada y realizando conversiones. Explica sus afirmaciones sobre relaciones entre elementos de las formas geométricas y sus atributos medibles, con ejemplos concretos y propiedades."
                        }
                        ,
                        desempenos: {
                            "1°": [
                                "Establece relaciones entre las características de los objetos del entorno y las asocia y representa con formas geométricas tridimensionales y bidimensionales que conoce, así como con la medida cualitativa de su longitud[cite: 142].",
                                "Establece relaciones entre los datos de ubicación y recorrido de los objetos y personas del entorno, y los expresa con material concreto o bosquejos de desplazamientos, teniendo en cuenta su cuerpo como punto de referencia u objetos en las cuadrículas[cite: 142, 143].",
                                "Expresa con material concreto y dibujos su comprensión sobre algunos elementos de las formas tridimensionales (caras y vértices) y bidimensionales (lados, líneas rectas y curvas)[cite: 143].",
                                "Asimismo, describe si los objetos ruedan, se sostienen, no se sostienen o tienen puntas o esquinas usando lenguaje cotidiano y algunos términos geométricos[cite: 143, 144].",
                                "Expresa con material concreto su comprensión sobre la longitud como una de las propiedades que se puede medir en algunos objetos; asimismo, su comprensión sobre la medida de la longitud de objetos de manera cualitativa con representaciones concretas, y establece \"es más largo que\" o \"es más corto que\"[cite: 144, 145].",
                                "Expresa con material concreto y bosquejos los desplazamientos y posiciones de objetos o personas tomando como punto de referencia su propia posición; y hace uso de expresiones como \"arriba\", \"abajo\", \"detrás de\", \"encima de\", \"debajo de\", \"al lado\", \"dentro\", \"fuera\", \"en el borde\"[cite: 145, 146].",
                                "Emplea estrategias heurísticas, recursos y procedimientos de comparación para medir directamente la longitud de dos objetos con unidades no convencionales (dedos, manos, pies, pasos, brazos, y objetos como clips, lápices, palillos, etc.) y la visualización para construir objetos con material concreto[cite: 146].",
                                "Hace afirmaciones sobre algunas propiedades físicas o semejanzas de los objetos y las prueba con ejemplos concretos[cite: 147].",
                                "Así también, explica el proceso seguido[cite: 147]."
                            ],
                            "2°": [
                                "Establece relaciones entre las características de los objetos del entorno, y las asocia y representa con formas geométricas tridimensionales (cuerpos que ruedan y no ruedan) y bidimensionales (cuadrado, rectángulo, círculo, triángulo), así como con las medidas de su longitud (largo y ancho)[cite: 142].",
                                "Establece relaciones entre los datos de ubicación y recorrido de los objetos y personas del entorno, y los expresa con material concreto y bosquejos o gráficos, posiciones y desplazamientos teniendo en cuenta puntos de referencia en las cuadrículas[cite: 143].",
                                "Expresa con material concreto y dibujos su comprensión sobre algún elemento de las formas tridimensionales (número de puntas, número de caras, formas de sus caras) y bidimensionales (número de lados, vértices, lados curvos y rectos)[cite: 143, 144].",
                                "Asimismo, describe si los objetos ruedan, se sostienen, no se sostienen o tienen puntas o esquinas usando lenguaje cotidiano y algunos términos geométricos[cite: 144].",
                                "Expresa con material concreto su comprensión sobre la medida de la longitud al determinar cuántas veces es más largo un objeto con relación a otro[cite: 145].",
                                "Expresa también que el objeto mantiene su longitud a pesar de sufrir transformaciones como romper, enrollar o flexionar (conservación de la longitud)[cite: 145].",
                                "Ejemplo: El estudiante, luego de enrollar y desenrollar sorbetes de diferentes tamaños, los ordena por su longitud, desde el más largo hasta el más corto, y viceversa[cite: 145].",
                                "Expresa con material concreto, bosquejos o gráficos los desplazamientos y posiciones de objetos o personas con relación a un punto de referencia; hace uso de expresiones como \"sube\", \"baja\", \"entra\", \"hacia adelante\", \"hacia arriba\", \"a la derecha\", \"por el frente de\", etc., apoyándose con recursos y procedimientos como códigos de flechas[cite: 146].",
                                "Emplea estrategias basadas en la manipulación y visualización, para construir objetos y medir su longitud usando unidades no convencionales (manos, pasos, pies, etc.)[cite: 146, 147].",
                                "Hace afirmaciones sobre las semejanzas y diferencias entre las formas geométricas, y las explica con ejemplos concretos y con base en sus conocimientos matemáticos[cite: 147].",
                                "Asimismo, explica el proceso seguido[cite: 147]. Ejemplo: El estudiante afirma que todas las figuras que tienen tres lados son triángulos o que una forma geométrica sigue siendo la misma aunque cambie de posición[cite: 147]."
                            ],
                            "3°": [
                                "Establece relaciones entre las características de los objetos del entorno, las asocia y representa con formas geométricas bidimensionales (figuras regulares o irregulares), sus elementos y con sus medidas de longitud y superficie; y con formas tridimensionales (cuerpos redondos y compuestos), sus elementos y su capacidad[cite: 142].",
                                "Establece relaciones entre los datos de ubicación y recorrido de los objetos y personas del entorno, y los expresa en un gráfico, teniendo a los objetos fijos como puntos de referencia; asimismo, considera el eje de simetría de un objeto o una figura[cite: 143].",
                                "Expresa con dibujos su comprensión sobre los elementos de las formas tridimensionales y bidimensionales (número de lados, vértices, eje de simetría)[cite: 144].",
                                "Expresa con material concreto su comprensión sobre las medidas de longitudes de un mismo objeto con diferentes unidades[cite: 144].",
                                "Asimismo, su comprensión de la medida de la superficie de objetos planos de manera cualitativa con representaciones concretas, estableciendo \"es más extenso que\", \"es menos extenso que\" (superficie asociada a la noción de extensión) y su conservación[cite: 144, 145].",
                                "Expresa su comprensión sobre la capacidad como una de las propiedades que se puede medir en algunos recipientes, y establece \"contiene más que\", \"contiene menos que\" e identifica que la cantidad contenida en un recipiente permanece invariante a pesar de que se distribuya en otros de distinta forma y tamaño (conservación de la capacidad)[cite: 145].",
                                "Expresa con gráficos los desplazamientos y posiciones de objetos o personas con relación a objetos fijos como puntos de referencia; hace uso de algunas expresiones del lenguaje geométrico[cite: 145].",
                                "Emplea estrategias heurísticas y procedimientos como la composición y descomposición, el doblado, el recorte, la visualización y diversos recursos para construir formas y figuras simétricas (a partir de instrucciones escritas u orales)[cite: 146].",
                                "Asimismo, usa diversas estrategias para medir de manera exacta o aproximada (estimar) la longitud (centímetro, metro), el contorno de una figura, y comparar la capacidad y superficie de los objetos, empleando la unidad de medida, no convencional o convencional, según convenga, así como algunos instrumentos de medición[cite: 146, 147].",
                                "Hace afirmaciones sobre algunas relaciones entre elementos de las formas, su composición o descomposición, y las explica con ejemplos concretos o dibujos[cite: 147].",
                                "Asimismo, explica el proceso seguido[cite: 147]. Ejemplo: El estudiante podría decir: \"Todos los cuadrados se pueden formar con dos triángulos iguales\"[cite: 147]."
                            ],
                            "4°": [
                                "Establece relaciones entre las características de objetos reales o imaginarios, los asocia y representa con formas bidimensionales (polígonos) y sus elementos, así como con su perímetro, medidas de longitud y superficie; y con formas tridimensionales (cubos y prismas de base cuadrangular), sus elementos y su capacidad[cite: 142].",
                                "Establece relaciones entre los datos de ubicación y recorrido de los objetos, personas y lugares cercanos, así como la traslación de los objetos o figuras, y los expresa en gráficos o croquis teniendo a los objetos y lugares fijos como puntos de referencia[cite: 142, 143].",
                                "Expresa con dibujos su comprensión sobre los elementos de cubos y prismas de base cuadrangular: caras, vértices, aristas; también, su comprensión sobre los elementos de los polígonos: ángulos rectos, número de lados y vértices; así como su comprensión sobre líneas perpendiculares y paralelas usando lenguaje geométrico[cite: 143, 144].",
                                "Expresa con material concreto o gráficos su comprensión sobre el perímetro y la medida de capacidad de los recipientes para determinar cuántas veces se puede llenar uno con el otro[cite: 144].",
                                "Asimismo, su comprensión sobre la medida de la superficie de objetos planos, de manera cualitativa y con representaciones concretas estableciendo \"es más extenso que\", \"es menos extenso que\" (superficie asociada a la noción de extensión) y su conservación[cite: 145].",
                                "Expresa con gráficos o croquis los desplazamientos y posiciones de objetos, personas y lugares cercanos, así como sus traslaciones con relación a objetos fijos como puntos de referencia[cite: 146].",
                                "Emplea estrategias, recursos y procedimientos como la composición y descomposición, la visualización, así como el uso de las cuadrículas, para construir formas simétricas, ubicar y trasladar objetos y figuras, usando recursos[cite: 146].",
                                "Así también, usa diversas estrategias para medir, de manera exacta o aproximada (estimar), la medida de los ángulos respecto al ángulo recto, la longitud, el perímetro (metro y centímetro), la superficie (unidades patrón) y la capacidad (en litro y con fracciones) de los objetos, y hace conversiones de unidades de longitud[cite: 146].",
                                "Emplea la unidad de medida, convencional o no convencional, según convenga, así como algunos instrumentos (cinta métrica, regla, envases o recipientes)[cite: 146, 147].",
                                "Hace afirmaciones sobre algunas relaciones entre elementos de las formas, su desarrollo en el plano, y explica sus semejanzas y diferencias mediante ejemplos concretos o dibujos con base en su exploración o visualización[cite: 147].",
                                "Así también, explica el proceso seguido[cite: 147]. Ejemplo: El estudiante podría decir: \"Un cubo se puede construir con una plantilla que contenga 6 cuadrados del mismo tamaño\"[cite: 147]."
                            ],
                            "5°": [
                                "Establece relaciones entre las características de objetos reales o imaginarios, los asocia y representa con formas bidimensionales (cuadriláteros) y sus elementos, así como con su perímetro y la medida de su superficie; y con formas tridimensionales (prismas rectos), sus elementos y su capacidad[cite: 142].",
                                "Establece relaciones entre datos de ubicación y recorrido de los objetos, personas y lugares cercanos, y las expresa en un croquis teniendo en cuenta referencias como, por ejemplo, calles o avenidas[cite: 143].",
                                "Establece relaciones entre los cambios de tamaño de los objetos con ampliaciones, reducciones y reflexiones de una figura plana[cite: 143].",
                                "Expresa con dibujos su comprensión sobre los elementos de prismas rectos y cuadriláteros (ángulos, vértices, bases), y sus propiedades (lados paralelos y perpendiculares) usando lenguaje geométrico[cite: 143].",
                                "Expresa con gráficos su comprensión sobre el perímetro y la medida de longitud; además, sobre la medida de capacidad de los recipientes y la medida de la superficie de objetos planos como la porción de plano ocupado y su recubrimiento y conservación[cite: 145].",
                                "Expresa con un croquis los desplazamientos y posiciones de objetos o personas con relación a un sistema de referencia como, por ejemplo, calles o avenidas[cite: 146].",
                                "Emplea estrategias de cálculo, la visualización y los procedimientos de composición y descomposición para construir ángulos, formas, perspectivas, realizar ampliaciones, reducciones y reflexiones de las figuras, así como trazos para hacer en el plano cartesiano[cite: 146].",
                                "Para ello, usa diversos recursos e instrumentos de dibujo[cite: 146].",
                                "También, usa diversas estrategias para medir, de manera exacta o aproximada (estimar), la medida de ángulos, la longitud (perímetro, kilómetro, metro), la superficie (unidades patrón), la capacidad (en litros y en decimales) de los objetos; además, realiza conversiones de unidades de longitud mediante cálculos numéricos y usa la propiedad transitiva para ordenar objetos según su longitud[cite: 146].",
                                "Emplea la unidad no convencional o convencional, según convenga, así como algunos instrumentos de medición[cite: 147].",
                                "Plantea afirmaciones sobre algunas relaciones entre elementos de las formas, su desarrollo en el plano, y explica sus semejanzas y diferencias mediante ejemplos concretos, gráficos o dibujos con base en su exploración o visualización[cite: 147].",
                                "Así también, explica el proceso seguido[cite: 147]."
                            ],
                            "6°": [
                                "Establece relaciones entre las características de objetos reales o imaginarios, los asocia y representa con formas bidimensionales (triángulos, cuadriláteros y círculos), sus elementos, perímetros y superficies; y con formas tridimensionales (prismas rectos y cilindros), sus elementos y el volumen de los prismas rectos con base rectangular[cite: 142].",
                                "Establece relaciones entre los datos de ubicación y recorrido de los objetos, personas o lugares, y los expresa en un croquis o plano sencillo teniendo en cuenta referencias como, por ejemplo, calles o avenidas[cite: 143].",
                                "Establece relaciones entre los cambios de tamaño y ubicación de los objetos mediante ampliaciones, reducciones y giros en el plano cartesiano[cite: 143].",
                                "Ejemplo: El estudiante establece las coordenadas en las que se encuentra un lugar determinado[cite: 143].",
                                "Expresa con dibujos su comprensión sobre los elementos y propiedades del prisma, triángulo, cuadrilátero y círculo usando lenguaje geométrico[cite: 143].",
                                "Expresa con gráficos su comprensión sobre el perímetro, el volumen de un cuerpo sólido y el área como propiedades de los medibles objetos[cite: 144].",
                                "Expresa con un plano o croquis sencillo desplazamientos y posiciones de objetos o personas con relación a los puntos cardinales (sistema de referencia)[cite: 146].",
                                "Asimismo, describe los cambios de tamaño y ubicación de los objetos mediante ampliaciones, reducciones y giros en el plano cartesiano[cite: 146].",
                                "Ejemplo: El estudiante nombra posiciones teniendo en cuenta sistemas de coordenadas presentes en los mapas[cite: 146].",
                                "Emplea estrategias heurísticas, estrategias de cálculo, la visualización y los procedimientos de composición y descomposición para construir formas desde perspectivas, desarrollo de sólidos, realizar giros en el plano, así como para trazar recorridos[cite: 146].",
                                "Usa diversas estrategias para construir ángulos, medir la longitud (cm) y la superficie ($m^2$, $cm^2$), y comparar el área de dos superficies o la capacidad de los objetos, de manera exacta o aproximada[cite: 146].",
                                "Realiza cálculos numéricos para hacer conversiones de medidas (unidades de longitud)[cite: 146].",
                                "Emplea la unidad de medida no convencional o convencional, según convenga, así como instrumentos de dibujo (compás, transportador) y de medición, y diversos recursos[cite: 146].",
                                "Plantea afirmaciones sobre las relaciones entre los objetos, entre los objetos y las formas geométricas, y entre las formas geométricas, así como su desarrollo en el plano cartesiano, entre el perímetro y la superficie de una forma geométrica, y las explica con argumentos basados en ejemplos concretos, gráficos, propiedades y en sus conocimientos matemáticos con base en su exploración o visualización, usando el razonamiento inductivo[cite: 147].",
                                "Así también, explica el proceso seguido[cite: 147]."
                            ]
                        }
                    },
                    {
                        id: "mat-p-c4",
                        nombre: "Resuelve problemas de gestión de datos e incertidumbre",
                        capacidades: [
                            "Representa datos con gráficos y medidas estadísticas o probabilísticas",
                            "Comunica su comprensión de los conceptos estadísticos y probabilísticos",
                            "Usa estrategias y procedimientos para recopilar y procesar datos",
                            "Sustenta conclusiones o decisiones con base en la información obtenida"
                        ],
                        estandares: {
                            "Ciclo III": "Resuelve problemas relacionados con datos cualitativos en situaciones de su interés, recolecta datos a través de preguntas sencillas, los registra en listas o tablas de conteo simple (frecuencia) y los organiza en pictogramas horizontales y gráficos de barras simples. Lee la información contenida en estas tablas o gráficos identificando el dato o datos que tuvieron mayor o menor frecuencia y explica sus decisiones basándose en la información producida. Expresa la ocurrencia de sucesos cotidianos usando las nociones de posible o imposible y justifica su respuesta.",
                            "Ciclo IV": "Resuelve problemas relacionados con datos cualitativos o cuantitativos (discretos) sobre un tema de estudio, recolecta datos a través de encuestas y entrevistas sencillas, registra en tablas de frecuencia simples y los representa en pictogramas, gráficos de barra simple con escala (múltiplos de diez). Interpreta información contenida en gráficos de barras simples y dobles y tablas de doble entrada, comparando frecuencias y usando el significado de la moda de un conjunto de datos; a partir de esta información elabora algunas conclusiones y toma decisiones. Expresa la ocurrencia de sucesos cotidianos usando las nociones de seguro, más probable, menos probable y justifica su respuesta.",
                            "Ciclo V": "Resuelve problemas relacionados con temas de estudio, en los que reconoce variables cualitativas o cuantitativas discretas, recolecta datos a través de encuestas y de diversas fuentes de información. Selecciona tablas de doble entrada, gráficos de barras dobles y gráficos de líneas, seleccionando el más adecuado para representar los datos. Usa el significado de la moda para interpretar información contenida en gráficos y en diversas fuentes de información. Realiza experimentos aleatorios, reconoce sus posibles resultados y expresa la probabilidad de un evento relacionando el número de casos favorables y el total de casos posibles. Elabora y justifica predicciones, decisiones y conclusiones, basándose en la información obtenida en el análisis de datos o en la probabilidad de un evento."
                        }
                        ,
                        desempenos: {
                            "1°": [
                                "Representa las características y el comportamiento de datos cualitativos (por ejemplo, color de los ojos: pardos, negros; plato favorito: cebiche, arroz con pollo, etc.) de una población, a través de pictogramas horizontales (el símbolo representa una unidad) y gráficos de barras verticales simples (sin escala), en situaciones cotidianas de su interés personal o de sus pares. [cite: 150, 151]",
                                "Expresa la ocurrencia de acontecimientos cotidianos usando las nociones \"siempre\", \"a veces\" y \"nunca\". [cite: 152]",
                                "Lee la información contenida en tablas de frecuencia simple (conteo simple), pictogramas horizontales y gráficos de barras verticales simples; indica la mayor frecuencia y representa los datos con material concreto o gráfico. [cite: 152]",
                                "Recopila datos mediante preguntas sencillas y el empleo de procedimientos y recursos (material concreto y otros); los procesa y organiza en listas de datos o tablas de frecuencia simple (conteo simple) para describirlos. [cite: 153]",
                                "Toma decisiones sencillas y las explica a partir de la información obtenida. [cite: 153, 154]"
                            ],
                            "2°": [
                                "Representa las características y el comportamiento de datos cualitativos (por ejemplo, color de los ojos: pardos, negros; plato favorito: cebiche, arroz con pollo, etc.) de una población, a través de pictogramas horizontales (el símbolo representa una o dos unidades) y gráficos de barras verticales simples (sin escala), en situaciones cotidianas de su interés personal o de sus pares. [cite: 150, 151]",
                                "Expresa la ocurrencia de acontecimientos cotidianos usando las nociones \"posible\" e \"imposible\". [cite: 152]",
                                "Lee información contenida en tablas de frecuencia simple (conteo simple), pictogramas horizontales y gráficos de barras verticales simples; indica la mayor o menor frecuencia y compara los datos, los cuales representa con material concreto y gráfico. [cite: 152, 153]",
                                "Recopila datos mediante preguntas y el empleo de procedimientos y recursos (material concreto y otros); los procesa y organiza en listas de datos o tablas de frecuencia simple (conteo simple) para describirlos. [cite: 153]",
                                "Toma decisiones sencillas y las explica a partir de la información obtenida con base en el análisis de datos. [cite: 153, 154]"
                            ],
                            "3°": [
                                "Representa las características y el comportamiento de datos cualitativos (por ejemplo, color de ojos: pardos, negros; profesión: médico, abogado, etc.) y cuantitativos discretos (por ejemplo: número de hermanos: 3, 2; cantidad de goles: 2, 4, 5, etc.) de una población, a través de pictogramas verticales y horizontales (el símbolo representa más de una unidad) y gráficos de barras horizontales (simples y con escala dada de 2 en 2, 5 en 5 y 10 en 10), en situaciones de su interés o un tema de estudio. [cite: 150, 151]",
                                "Expresa la ocurrencia de acontecimientos cotidianos usando las nociones \"seguro\", \"posible\" e \"imposible\". [cite: 152]",
                                "Lee tablas de frecuencias (absolutas), gráficos de barras horizontales simples con escala y pictogramas de frecuencias con equivalencias, para interpretar la información explícita de los datos contenidos en diferentes formas de representación. [cite: 152]",
                                "Recopila datos mediante encuestas sencillas o entrevistas cortas con preguntas adecuadas empleando procedimientos y recursos; los procesa y organiza en listas de datos o tablas de frecuencia simple, para describirlos y analizarlos. [cite: 153]",
                                "Selecciona y emplea procedimientos y recursos como el recuento, el diagrama u otros, para determinar todos los posibles resultados de la ocurrencia de acontecimientos cotidianos. [cite: 153]",
                                "Predice la ocurrencia de un acontecimiento o suceso cotidiano. [cite: 153]",
                                "Así también, explica sus decisiones a partir de la información obtenida con base en el análisis de datos. [cite: 154]"
                            ],
                            "4°": [
                                "Representa las características y el comportamiento de datos cualitativos (por ejemplo, color de ojos: pardos, negros; profesión: médico, abogado, etc.) y cuantitativos discretos (por ejemplo: número de hermanos: 3, 2; cantidad de goles: 2, 4, 5, etc.), así como también el comportamiento del conjunto de datos, a través de pictogramas verticales y horizontales (cada símbolo representa más de una unidad), gráficos de barras con escala dada (múltiplos de 10) y la moda como la mayor frecuencia, en situaciones de interés o un tema de estudio. [cite: 150, 151]",
                                "Expresa su comprensión de la moda como la mayor frecuencia y la media aritmética como punto de equilibrio; así como todos los posibles resultados de la ocurrencia de sucesos cotidianos usando las nociones \"seguro\", \"más probable\" y \"menos probable\". [cite: 151, 152]",
                                "Lee gráficos de barras con escala, tablas de doble entrada y pictogramas de frecuencias con equivalencias, para interpretar la información a partir de los datos contenidos en diferentes formas de representación y de la situación estudiada. [cite: 152]",
                                "Recopila datos mediante encuestas sencillas o entrevistas cortas con preguntas adecuadas empleando procedimientos y recursos; los procesa y organiza en listas de datos, tablas de doble entrada o tablas de frecuencia, para describirlos y analizarlos. [cite: 153]",
                                "Selecciona y emplea procedimientos y recursos como el recuento, el diagrama, las tablas de frecuencia u otros, para determinar la media aritmética como punto de equilibrio, la moda como la mayor frecuencia y todos los posibles resultados de la ocurrencia de sucesos cotidianos. [cite: 153]",
                                "Predice que la posibilidad de ocurrencia de un suceso es mayor que otro. [cite: 153]",
                                "Así también, explica sus decisiones y conclusiones a partir de la información obtenida con base en el análisis de datos. [cite: 153, 154]"
                            ],
                            "5°": [
                                "Representa las características de una población en estudio, asociándolas a variables cualitativas (por ejemplo: vóley, tenis) y cuantitativas discretas (por ejemplo: número de hermanos: 3, 2; cantidad de goles: 2, 4, 5, etc.), así como también el comportamiento del conjunto de datos, a través de pictogramas verticales y horizontales (cada símbolo representa más de una unidad), gráficos de barras con escala dada (múltiplos de 10), la moda como la mayor frecuencia y la media aritmética como punto de equilibrio. [cite: 150, 151]",
                                "Expresa su comprensión de la moda como la mayor frecuencia y la media aritmética como punto de equilibrio; así como todos los posibles resultados de una situación aleatoria en forma oral usando las nociones \"más probables\" o \"menos probables\", y numéricamente. [cite: 151, 152]",
                                "Lee gráficos de barras con escala, tablas de doble entrada y pictogramas de frecuencias con equivalencias, para interpretar la información del mismo conjunto de datos contenidos en diferentes formas de representación y de la situación estudiada. [cite: 152, 153]",
                                "Recopila datos mediante encuestas sencillas o entrevistas cortas con preguntas adecuadas empleando procedimientos y recursos; los procesa y organiza en listas de datos, tablas de doble entrada o tablas de frecuencia, para describirlos y analizarlos. [cite: 153]",
                                "Selecciona y emplea procedimientos y recursos como el recuento, el diagrama, las tablas de frecuencia u otros, para determinar la media aritmética como punto de equilibrio, la moda como la mayor frecuencia y todos los posibles resultados de la ocurrencia de sucesos cotidianos. [cite: 153]",
                                "Predice la mayor o menor frecuencia de un conjunto de datos, o si la posibilidad de ocurrencia de un suceso es mayor que otro. [cite: 153]",
                                "Así también, explica sus decisiones y conclusiones a partir de la información obtenida con base en el análisis de datos. [cite: 154]"
                            ],
                            "6°": [
                                "Representa las características de una población en estudio, asociándolas a variables cualitativas (por ejemplo, color de ojos: pardos, negros; profesión: médico, abogado, etc.) y cuantitativas discretas (por ejemplo: 3, 4, 5 hijos), así como también el comportamiento del conjunto de datos, a través de gráficos de barras dobles, gráficos de líneas, la moda y la media aritmética como reparto equitativo. [cite: 150, 151]",
                                "Determina todos los posibles resultados de una situación aleatoria a través de su probabilidad como fracción. [cite: 151, 152]",
                                "Expresa su comprensión de la moda como la mayor frecuencia y la media aritmética como reparto equitativo; así como todos los posibles resultados de una situación aleatoria en forma oral usando las nociones \"más probables\" o \"menos probables\", y numéricamente. Ejemplo: El estudiante podría decir: \"En dos de los cinco casos, el resultado es favorable: $2/5$\". [cite: 151, 152]",
                                "Lee tablas de doble entrada y gráficos de barras dobles, así como información proveniente de diversas fuentes (periódicos, revistas, entrevistas, experimentos, etc.), para interpretar la información que contienen considerando los datos, las condiciones de la situación y otra información que se tenga sobre las variables. [cite: 152, 153]",
                                "También, advierte que hay tablas de doble entrada con datos incompletos, las completa y produce nueva información. [cite: 153]",
                                "Recopila datos mediante encuestas sencillas o entrevistas cortas con preguntas adecuadas empleando procedimientos y recursos; los procesa y organiza en tablas de doble entrada o tablas de frecuencia, para describirlos y analizarlos. [cite: 153]",
                                "Selecciona y emplea procedimientos y recursos como el recuento, el diagrama, las tablas de frecuencia u otros, para determinar la media aritmética como reparto equitativo, la moda, los casos favorables a un suceso y su probabilidad como fracción. [cite: 153, 154]",
                                "Predice la tendencia de los datos o la ocurrencia de sucesos a partir del análisis de los resultados de una situación aleatoria. [cite: 154]",
                                "Así también, justifica sus decisiones y conclusiones a partir de la información obtenida con base en el análisis de datos. [cite: 154]"
                            ]
                        }
                    }
                ]
            },
            "Ciencia y Tecnología": {
                competencias: [
                    {
                        id: "cyt-p-c1",
                        nombre: "Indaga mediante métodos científicos para construir sus conocimientos",
                        capacidades: [
                            "Problematiza situaciones para hacer indagación",
                            "Diseña estrategias para hacer indagación",
                            "Genera y registra datos e información",
                            "Analiza datos e información",
                            "Evalúa y comunica el proceso y resultados de su indagación"
                        ],
                        estandares: {
                            "Ciclo III": "Indaga al establecer las causas de un hecho o fenómeno para formular preguntas y posibles respuestas sobre estos sobre la base de sus experiencias. Propone estrategias para obtener información sobre el hecho o fenómeno y sus posibles causas, registra datos, los analiza estableciendo relaciones y evidencias de causalidad. Comunica en forma oral, escrita o gráfica sus procedimientos, dificultades, conclusiones y dudas.",
                            "Ciclo IV": "Indaga las causas o describe un objeto o fenómeno que identifica para formular preguntas e hipótesis en las que relaciona las variables que intervienen y que se pueden observar. Propone estrategias para observar o generar una situación controlada en la cual registra evidencias de cómo una variable independiente afecta a otra dependiente. Establece relaciones entre los datos, los interpreta y los contrasta con información confiable. Evalúa y comunica sus conclusiones y procedimientos.",
                            "Ciclo V": "Indaga a partir de preguntas e hipótesis que son verificables de forma experimental o descriptiva con base en su conocimiento científico para explicar las causas o describir el fenómeno identificado. Diseña un plan de recojo de datos con base en observaciones o experimentos. Colecta datos que contribuyan a comprobar o refutar la hipótesis. Analiza tendencias o relaciones en los datos, los interpreta tomando en cuenta el error y reproducibilidad, los interpreta con base en conocimientos científicos y formula conclusiones. Evalúa si sus conclusiones responden a la pregunta de indagación y las comunica. Evalúa la fiabilidad de los métodos y las interpretaciones de los resultados de su indagación."
                        }
                        ,
                        desempenos: {
                            "1°": [
                                "Hace preguntas de hechos, fenómenos u objetos naturales o tecnológicos que explora y observa en su entorno. Propone posibles respuestas con base en sus experiencias. Ejemplo: El estudiante observa cómo un caracol sube por el tronco de un árbol, y pregunta: \"¿Por qué el caracol no se cae?\". Propone posibles respuestas, como: \"Tiene baba pegajosa como la goma\". [cite: 157, 158]",
                                "Propone acciones que le permiten responder a la pregunta. Busca información, selecciona materiales e instrumentos que necesitará para explorar y observar objetos, hechos o fenómenos y recoger datos. Ejemplo: El estudiante podría decir: \"Salgamos al patio a buscar otros caracoles; llevaremos lupas para mirarlos\", \"Tengo un libro que trata sobre caracoles\", etc. [cite: 158]",
                                "Obtiene datos a partir de la observación y exploración de los objetos, hechos o fenómenos; y los registra en organizadores mediante dibujos o primeras formas de escritura. Ejemplo: El estudiante hace dibujos con detalles de las formas del caracol, del camino que recorrió, etc. [cite: 159]",
                                "Describe las características del hecho, fenómeno u objeto natural y tecnológico que registró, para comprobar si su respuesta es verdadera o no. Ejemplo: El estudiante describe los caracoles: forma, color, si tienen patas, qué estaban haciendo y lo que sucedió cuando se acercó a observarlos. Después de que el docente lea un texto sobre los caracoles, podrá comparar si lo que observó concuerda con lo que dice el texto, por qué, etc. [cite: 159, 168]",
                                "Comunica las respuestas que dio a la pregunta, lo que aprendió, así como sus logros y dificultades, mediante diversas formas de expresión: gráficas, orales o a través de su nivel de escritura. Ejemplo: El estudiante comenta si los caracoles tenían patas, cómo era su cuerpo, así como las dificultades que tuvo para observarlos y lo que haría para estudiarlos mejor después de esta experiencia. Podría dibujar en una hoja lo que le pareció más importante y, además, comentar qué parte del trabajo y de lo aprendido le gustó más. [cite: 169]"
                            ],
                            "2°": [
                                "Hace preguntas acerca de hechos, fenómenos u objetos naturales y tecnológicos que explora y observa en su entorno. Propone posibles respuestas basándose en el reconocimiento de regularidades identificadas en situaciones similares. Ejemplo: El estudiante podría preguntar: \"¿Por qué una vela encendida se derrite y no ocurre lo mismo con un mechero?\". Y podría responder: \"La cera se consume más rápido que el kerosene\". [cite: 157, 158]",
                                "Propone acciones que le permiten responder a la pregunta y las ordena secuencialmente; selecciona los materiales, instrumentos y herramientas necesarios para explorar, observar y recoger datos sobre los hechos, fenómenos u objetos naturales o tecnológicos. [cite: 158, 159]",
                                "Obtiene y registra datos, a partir de las acciones que realizó para responder a la pregunta. [cite: 159]",
                                "Utiliza algún organizador de información o representa los datos mediante dibujos o sus primeras formas de escritura. [cite: 168]",
                                "Compara y establece si hay diferencia entre la respuesta que propuso y los datos o la información obtenida en su observación o experimentación. [cite: 168, 169]",
                                "Elabora sus conclusiones. [cite: 169]",
                                "Comunica las respuestas que dio a la pregunta, lo que aprendió, así como sus logros y dificultades, mediante diversas formas de expresión: gráficas, orales o a través de su nivel de escritura. [cite: 169]"
                            ],
                            "3°": [
                                "Hace preguntas sobre hechos, fenómenos u objetos naturales o tecnológicos que explora. Elabora una posible explicación como respuesta, donde establece una relación entre los hechos y los factores que producen los cambios. Ejemplo: El estudiante podría preguntar: \"¿Por qué algunos globos inflados se elevan y otros caen al suelo?\"; luego, responder: \"El aire que contienen tiene diferente peso y por eso unos caen al suelo mientras otros siguen elevándose\". [cite: 158]",
                                "Propone un plan donde describe las acciones y los procedimientos que utilizará para recoger información acerca de los factores relacionados con el problema en su indagación. [cite: 158, 159]",
                                "Selecciona materiales, instrumentos y fuentes de información científica que le permitan comprobar la respuesta. [cite: 159]",
                                "Obtiene datos cualitativos o cuantitativos al llevar a cabo el plan que propuso para responder a la pregunta. Usa unidades de medida convencionales y no convencionales, registra los datos y los representa en organizadores. Ejemplo: Cuando el estudiante observa cómo se derriten unos cubos de hielo, puede medir la temperatura a la que están inicialmente y, luego, medir la temperatura del líquido, el tiempo que pasó para que se derritan, así como hacer una representación gráfica de lo sucedido. [cite: 159, 168]",
                                "Establece relaciones que expliquen el fenómeno estudiado. Utiliza los datos obtenidos y los compara con la respuesta que propuso, así como con la información científica que posee. [cite: 168]",
                                "Elabora sus conclusiones. Ejemplo: Cuando el estudiante dice \"en un día caluroso, los cubos de hielo se derriten más rápido; y en un día frío, demoran en derretirse\", utiliza los datos tomados para confirmar sus afirmaciones, así como los resúmenes que explican el tema. [cite: 168, 169]",
                                "Comunica las conclusiones de su indagación y lo que aprendió usando conocimientos científicos, así como el procedimiento, los logros y las dificultades que tuvo durante su desarrollo. Propone algunas mejoras. Da a conocer su indagación en forma oral o escrita. [cite: 169]"
                            ],
                            "4°": [
                                "Formula preguntas acerca de las variables que influyen en un hecho, fenómeno u objeto natural o tecnológico. Plantea una hipótesis que expresa la relación causa-efecto y determina las variables involucradas. Ejemplo: El estudiante podría preguntar: \"¿Qué sucedería a una planta si la encerramos en una caja con un huequito por donde entre la luz?\". La hipótesis podría ser: \"Las plantas puestas en oscuridad mueren rápido y se les caen las hojas porque necesitan luz para vivir\". [cite: 157, 158]",
                                "Propone un plan que le permita observar las variables involucradas, a fin de obtener datos para comprobar sus hipótesis. Selecciona materiales, instrumentos y fuentes que le brinden información científica. Considera el tiempo para el desarrollo del plan y las medidas de seguridad necesarias. Ejemplo: Si se está indagando sobre el comportamiento de las plantas y la luz, el estudiante podría decir: \"Necesitaremos una planta en un macetero y una caja de cartón para cubrirla. Haremos un huequito en la caja, la dejaremos cubierta por 5 días y anotaremos qué sucede. Buscaremos información en libros e internet. [cite: 158, 159]",
                                "Obtiene datos cualitativos o cuantitativos que evidencian la relación entre las variables que utiliza para responder la pregunta. Registra los datos y los representa en diferentes organizadores. Ejemplo: Al revisar diariamente lo que sucede con la planta cubierta por una caja con un huequito, el estudiante tomará nota para identificar si el color de las hojas se mantiene, si el tallo sigue en la misma dirección o si cambió, y hará resúmenes con la información que encontró en los libros e internet. [cite: 159]",
                                "Compara los datos cualitativos o cuantitativos para probar sus hipótesis y las contrasta con información científica. [cite: 168]",
                                "Elabora sus conclusiones. Ejemplo: El estudiante podría decir: \"Nuestra hipótesis es que las plantas puestas en la oscuridad mueren rápido y se les caen las hojas\"; \"Experimentando, obtuvimos estos datos: a los 'x' días las hojas de la planta cambiaron de color, a los 'y' días el tallo de la planta se dobló hacia la fuente de luz\"; \"Según los libros, el movimiento de las plantas hacia la luz se llama fototropismo positivo y su raíz tiene fototropismo negativo\". [cite: 168, 169]",
                                "Comunica sus conclusiones y lo que aprendió usando conocimientos científicos. Evalúa si los procedimientos seguidos en su indagación ayudaron a comprobar sus hipótesis. Menciona las dificultades que tuvo y propone mejoras. Da a conocer su indagación en forma oral o escrita. [cite: 169]"
                            ],
                            "5°": [
                                "Formula preguntas acerca de las variables que influyen en un hecho, fenómeno u objeto natural o tecnológico. Plantea hipótesis que expresan la relación causa-efecto y determina las variables involucradas. [cite: 157, 158]",
                                "Propone un plan para observar las variables del problema de indagación y controlar aquellas que pueden modificar la experimentación, con la finalidad de obtener datos para comprobar sus hipótesis. [cite: 158]",
                                "Selecciona instrumentos, materiales, herramientas, así como fuentes que brinden información científica. Considera el tiempo para el desarrollo del plan y las medidas de seguridad necesarias. [cite: 158, 159]",
                                "Obtiene datos cualitativos o cuantitativos que evidencian la relación entre las variables que utiliza para responder la pregunta. Organiza datos, hace cálculos de moda, proporcionalidad directa y otros, y los representa en diferentes organizadores. [cite: 159, 168]",
                                "Utiliza los datos cualitativos o cuantitativos para probar sus hipótesis y las contrasta con información científica. [cite: 168]",
                                "Elabora sus conclusiones. [cite: 168]",
                                "Comunica sus conclusiones y lo que aprendió usando conocimientos científicos. Evalúa si los procedimientos seguidos en su indagación ayudaron a comprobar sus hipótesis. Menciona las dificultades que tuvo y propone mejoras. Da a conocer su indagación en forma oral o escrita. [cite: 169]"
                            ],
                            "6°": [
                                "Formula preguntas acerca de las variables que influyen en un hecho, fenómeno u objeto natural o tecnológico. Plantea hipótesis que expresan la relación causa-efecto y determina las variables involucradas. [cite: 157, 158]",
                                "Propone un plan para observar las variables del problema de indagación y controlar aquellas que pueden modificar la experimentación, con la finalidad de obtener datos para comprobar sus hipótesis. [cite: 158]",
                                "Selecciona instrumentos, materiales, herramientas, así como fuentes que brinden información científica. Considera el tiempo para el desarrollo del plan y las medidas de seguridad necesarias. [cite: 158, 159]",
                                "Obtiene datos cualitativos o cuantitativos que evidencian la relación entre las variables que utiliza para responder la pregunta. Organiza datos, hace cálculos de moda, proporcionalidad directa y otros, y los representa en diferentes organizadores. [cite: 159, 168]",
                                "Utiliza los datos cualitativos o cuantitativos para probar sus hipótesis y las contrasta con información científica. [cite: 168]",
                                "Elabora sus conclusiones. [cite: 168]",
                                "Comunica sus conclusiones y lo que aprendió usando conocimientos científicos. Evalúa si los procedimientos seguidos en su indagación ayudaron a comprobar sus hipótesis. Menciona las dificultades que tuvo y propone mejoras. Da a conocer su indagación en forma oral o escrita. [cite: 169]"
                            ]
                        }
                    },
                    {
                        id: "cyt-p-c2",
                        nombre: "Explica el mundo físico basándose en conocimientos sobre los seres vivos, materia y energía, biodiversidad, Tierra y universo",
                        capacidades: [
                            "Comprende y usa conocimientos sobre los seres vivos, materia y energía, biodiversidad, Tierra y universo",
                            "Evalúa las implicancias del saber y del quehacer científico y tecnológico"
                        ],
                        estandares: {
                            "Ciclo III": "Explica, con base en sus observaciones y experiencias previas, las relaciones entre: las características de los materiales con los cambios que sufren por acción de la luz, del calor y del movimiento; la estructura de los seres vivos con sus funciones y su desarrollo; la Tierra, sus componentes y movimientos con los seres que lo habitan. Opina sobre los impactos del uso de objetos tecnológicos en relación a sus necesidades y estilo de vida.",
                            "Ciclo IV": "Explica, con base en evidencias documentadas con respaldo científico, las relaciones que establece entre: las fuentes de energía o sus manifestaciones con los tipos de cambio que producen en los materiales; entre las fuerzas con el movimiento de los cuerpos; la estructura de los sistemas vivos con sus funciones y su agrupación en especies; la radiación del sol con las zonas climáticas de la Tierra y las adaptaciones de los seres vivos. Opina sobre los impactos de diversas tecnologías en la solución de problemas relacionados a necesidades y estilos de vida colectivas.",
                            "Ciclo V": "Explica, con base en evidencia con respaldo científico, las relaciones entre: propiedades o funciones macroscópicas de los cuerpos, materiales o seres vivos con su estructura y movimiento microscópico; la reproducción sexual con la diversidad genética; los ecosistemas con la diversity de especies; el relieve con la actividad interna de la Tierra. Relaciona el descubrimiento científico o la innovación tecnológica con sus impactos. Justifica su posición frente a situaciones controversiales sobre el uso de la tecnología y el saber científico."
                        }
                        ,
                        desempenos: {
                            "1°": [
                                "Describe las características y necesidades de los seres vivos[cite: 175]. Ejemplo: El estudiante describe qué necesitan los seres vivos para vivir: alimentos, agua, aire, oxígeno, etc. [cite: 175]",
                                "Relaciona las actividades cotidianas con el uso de la energía[cite: 176]. Ejemplo: El estudiante relaciona el uso de gas en su cocina con la cocción de sus alimentos, o el uso de las pilas con el funcionamiento de sus juguetes[cite: 176].",
                                "Propone una clasificación de los objetos según sus características. Ejemplo: El estudiante separa objetos que absorben agua de otros que no[cite: 176, 177].",
                                "Describe que el suelo está formado por seres vivos y no vivos[cite: 177]. Ejemplo: El estudiante distingue lo que hay dentro del suelo: tierra, gusanos, rocas, objetos de plástico, etc.[cite: 177].",
                                "Justifica por qué el agua, el aire y el suelo son importantes para los seres vivos[cite: 177].",
                                "Relaciona el comportamiento de los seres vivos con los cambios de clima[cite: 177, 178]. Ejemplo: El estudiante da razones de por qué cuando hace frío tenemos que abrigarnos más y cuando hace calor buscamos lugares frescos[cite: 178].",
                                "Relaciona los objetos tecnológicos con su utilidad para satisfacer las necesidades de las personas y opina sobre cómo su uso impacta en ellos[cite: 178]. Ejemplo: El estudiante menciona que para cocinar sus alimentos, su madre usa una cocina a gas o un fogón con leña, y cómo impacta en sus vidas[cite: 179]."
                            ],
                            "2°": [
                                "Relaciona las partes externas de los seres vivos con sus funciones[cite: 175]. Ejemplo: El estudiante relaciona la función de los dientes (que sirven para masticar los alimentos antes de ingerirlos) con la buena salud[cite: 175].",
                                "Compara las semejanzas externas de los progenitores y sus descendientes durante el desarrollo[cite: 176]. Ejemplo: El estudiante compara las características que los renacuajos toman progresivamente hasta tener la forma de sus progenitores[cite: 176].",
                                "Describe los cambios que experimentan los objetos debido a la luz o al calor que reciben[cite: 176]. Ejemplo: El estudiante describe las causas por las que el hielo, la mantequilla o la cera se derriten cuando se calientan o les da la luz del sol[cite: 176].",
                                "Justifica por qué los cambios que sufren los objetos dependen de sus características[cite: 176]. Ejemplo: El estudiante da razones de por qué, con un golpe, un vaso de vidrio se rompe; mientras que uno de cartón, solo se deforma[cite: 176, 177].",
                                "Utiliza modelos para explicar las relaciones entre los seres vivos y sus características[cite: 177]. Ejemplo: El estudiante diseña un modelo para explicar los componentes de una cadena alimenticia[cite: 177].",
                                "Describe que el ciclo día-noche influye en los seres vivos[cite: 177]. Ejemplo: El estudiante describe las características de los animales que duermen durante el día y se mantienen despiertos por la noche[cite: 177, 178].",
                                "Describe que en la Tierra se encuentran masas de agua, aire y material sólido[cite: 178]. Ejemplo: El estudiante describe las características de las lagunas, los ríos, los cerros y las rocas, y cómo el viento fuerte puede mover algunos objetos[cite: 178].",
                                "Describe el suelo como fuente esencial de nutrientes y sustrato para muchos seres vivos[cite: 178]. Ejemplo: El estudiante describe que las plantas necesitan el suelo para crecer y que algunos animales se alimentan de ellas[cite: 178, 179].",
                                "Justifica por qué hay objetos tecnológicos que transforman los productos que consume o que usa en tareas específicas, y opina cómo estos objetos cambian su vida, la de su familia o el ambiente[cite: 179]. Ejemplo: El estudiante justifica las ventajas de usar un molino para transformar los granos de maíz o trigo en harina, a fin de que sean utilizados en diferentes productos que consume en su vida diaria[cite: 179]."
                            ],
                            "3°": [
                                "Describe los órganos que conforman los sistemas de plantas y animales[cite: 175].",
                                "Compara diversas especies y señala semejanzas y diferencias[cite: 175].",
                                "Clasifica los materiales de acuerdo a sus características físicas (duros, blandos, frágiles, etc.)[cite: 175].",
                                "Relaciona el desplazamiento, el cambio de dirección o la modificación de la forma de los objetos por la aplicación de fuerzas sobre ellos[cite: 175, 176]. Ejemplo: El estudiante relaciona la deformación que sufre una pelota con la fuerza generada sobre ella cuando alguien la presiona con la planta de los pies[cite: 176].",
                                "Compara las diferentes manifestaciones del clima a lo largo de un año y en las diferentes zonas en la superficie terrestre[cite: 176]. Ejemplo: El estudiante diferencia las características de la época del año en que llueve y en que no[cite: 176].",
                                "Describe cómo el hábitat proporciona a los organismos recursos para satisfacer sus necesidades básicas[cite: 176]. Ejemplo: El estudiante describe cómo se alimentan los animales en la selva[cite: 176].",
                                "Describe las interacciones entre los seres vivos y los no vivos en su hábitat[cite: 176]. Ejemplo: El estudiante señala que los herbívoros comen pasto, que algunos animales se alimentan de herbívoros y que las plantas necesitan del suelo para vivir[cite: 176, 177].",
                                "Argumenta por qué la creación de objetos tecnológicos para satisfacer necesidades requiere de personas que tienen diferentes ocupaciones o especialidades, y opina sobre cómo el uso de los productos tecnológicos cambia la vida de las personas y el ambiente[cite: 177]. Ejemplo: El estudiante explica que la producción de alimentos en conservas demanda la producción de materia prima, envases, planta procesadora, etc., para que las personas puedan consumirlos, y opina acerca de las ventajas y desventajas de esta clase de productos, en relación a la calidad de vida y del ambiente[cite: 177].",
                                "Relaciona los cambios en el equilibrio, la posición y la forma de los objetos por las fuerzas aplicadas sobre ellos[cite: 177]. Ejemplo: El estudiante da razones de por qué al tirar de un elástico, este se deforma, y cuando cesa esta acción, recupera su forma inicial[cite: 177, 178].",
                                "Describe cómo la energía se manifiesta de diferentes formas y puede usarse para diferentes propósitos[cite: 178]. Ejemplo: El estudiante describe cómo la energía producida en una batería para un carro de juguete se manifiesta en movimiento, sonido y luz al poner en funcionamiento todos sus componentes[cite: 178].",
                                "Describe el rol que cumplen los seres vivos en su hábitat[cite: 178]. Ejemplo: El estudiante señala que las plantas son productores, la liebre es un consumidor y la lombriz es un descomponedor[cite: 178].",
                                "Argumenta por qué las plantas y los animales poseen estructuras y comportamientos adaptados a su hábitat[cite: 178]. Ejemplo: El estudiante da razones de por qué un camaleón se mimetiza con su ambiente o por qué los cactus tienen espinas en lugar de hojas[cite: 178].",
                                "Describe las diferentes zonas climáticas y señala que se forman por la distribución de la energía del sol sobre la Tierra y su relieve[cite: 178].",
                                "Argumenta por qué los diversos objetos tecnológicos son creados para satisfacer necesidades personales y colectivas[cite: 179]. Ejemplo: El estudiante da razones de por qué los rayos X son empleados por los médicos en el diagnóstico de fracturas, así como las ventajas y desventajas de su uso[cite: 179].",
                                "Opina sobre los cambios que la tecnología ha generado en la forma de vivir de las personas y en el ambiente[cite: 179]. Ejemplo: El estudiante explica que gracias a la refrigeradora se pueden conservar los alimentos durante más tiempo, y cómo esto impacta sobre la calidad de vida y del ambiente[cite: 179, 180]."
                            ],
                            "4°": [
                                "Describe las diferencias entre la célula animal y vegetal, y explica que ambas cumplen funciones básicas[cite: 175].",
                                "Utiliza modelos para explicar cómo el sistema digestivo transforma los alimentos en nutrientes que se distribuyen, a través de la sangre, por todo el organismo[cite: 176, 177].",
                                "Justifica por qué los individuos se reproducen con otros de su misma especie[cite: 177].",
                                "Describe el carácter dinámico de la estructura externa de la Tierra[cite: 177].",
                                "Describe que los objetos pueden sufrir cambios reversibles e irreversibles por acción de la energía[cite: 178]. Ejemplo: El estudiante describe por qué un cubo de hielo se disuelve por acción del calor del ambiente y por qué puede volver a ser un cubo de hielo al colocar el líquido en un refrigerador[cite: 178, 179].",
                                "Opina cómo el uso de los objetos tecnológicos impacta en el ambiente, con base en fuentes documentadas con respaldo científico[cite: 178, 179]. Ejemplo: El estudiante opina sobre cómo la demanda de muebles de madera promueve el desarrollo de la maquinaria maderera, así como qué alternativas existen desde la ciencia y tecnología para fomentar el desarrollo sostenible de esta industria[cite: 179]."
                            ],
                            "5°": [
                                "Describe que los organismos pueden ser unicelulares o pluricelulares y que cada célula cumple funciones básicas o especializadas[cite: 175]. Ejemplo: El estudiante señala que las bacterias necesitan un huésped para poder cumplir sus funciones básicas[cite: 175].",
                                "Representa las diferentes formas de reproducción de los seres vivos[cite: 176].",
                                "Describe la materia y señala que se compone de partículas pequeñas[cite: 176]. Ejemplo: El estudiante señala que el vapor (moléculas) que sale del agua cuando hierve es la razón por la que disminuye el volumen inicial[cite: 176, 177].",
                                "Describe los ecosistemas y señala que se encuentran constituidos por componentes abióticos y bióticos que se interrelacionan[cite: 177].",
                                "Justifica que el quehacer tecnológico progresa con el paso del tiempo como resultado del avance científico para resolver problemas[cite: 178].",
                                "Opina cómo el uso de los objetos tecnológicos impacta en el ambiente, con base en fuentes documentadas con respaldo científico[cite: 178, 179]. Ejemplo: El estudiante opina sobre cómo la demanda de muebles de madera promueve el desarrollo de la maquinaria maderera, así como qué alternativas existen desde la ciencia y tecnología para fomentar el desarrollo sostenible de esta industria[cite: 179]."
                            ],
                            "6°": [
                                "Describe por qué el cuerpo de un animal es suave en comparación con una planta, en función del tipo de células que poseen[cite: 175, 176].",
                                "Relaciona la reproducción sexual con la diversidad genética dentro de una especie[cite: 176].",
                                "Relaciona los estados de los cuerpos con las fuerzas que predominan en sus moléculas (fuerzas de repulsión y cohesión) y sus átomos[cite: 176].",
                                "Relaciona los cambios que sufren los materiales con el reordenamiento de sus componentes constituyentes[cite: 176]. Ejemplo: El estudiante relaciona la ceniza, el humo y el vapor del agua con la combustión de la madera[cite: 176].",
                                "Interpreta la relación entre la temperatura y el movimiento molecular en los objetos[cite: 177]. Ejemplo: El estudiante da razones de por qué cuando se calienta un objeto metálico como el aluminio, este cambia de tamaño[cite: 177].",
                                "Justifica por qué la diversidad de especies da estabilidad a los ecosistemas[cite: 177].",
                                "Relaciona los cambios del relieve terrestre con la estructura dinámica interna y externa de la Tierra[cite: 178].",
                                "Argumenta que algunos objetos tecnológicos y conocimientos científicos han ayudado a formular nuevas teorías que propiciaron el cambio en la forma de pensar y el estilo de vida de las personas[cite: 179]. Ejemplo: El estudiante da razones de cómo el uso del telescopio dio un nuevo lugar a la Tierra en el universo y de cómo con el microscopio se originó la teoría de los gérmenes como causantes de enfermedades[cite: 179].",
                                "Defiende su punto de vista respecto al avance científico y tecnológico, y su impacto en la sociedad y el ambiente, con base en fuentes documentadas con respaldo científico[cite: 179]. Ejemplo: El estudiante discute acerca de si la instalación de antenas de telefonía en zonas pobladas podría afectar la salud de los seres vivos[cite: 179, 180]."
                            ]
                        }
                    },
                    {
                        id: "cyt-p-c3",
                        nombre: "Diseña y construye soluciones tecnológicas para resolver problemas de su entorno",
                        capacidades: [
                            "Determina una alternativa de solución tecnológica",
                            "Diseña la alternativa de solución tecnológica",
                            "Implementa y valida la alternativa de solución tecnológica",
                            "Evalúa y comunica el funcionamiento y los impactos de su alternativa de solución tecnológica"
                        ],
                        estandares: {
                            "Ciclo III": "Diseña y construye soluciones tecnológicas al establecer las causas de un problema tecnológico y proponer alternativas de solución, representa una, incluyendo sus partes, a través de esquemas o dibujos y describe la secuencia de pasos para implementarla, usando herramientas y materiales seleccionados. Realiza ajustes en el proceso de construcción de la solución tecnológica. Describe el procedimiento y beneficios de la solución tecnológica, evalúa su funcionamiento según los requerimientos establecidos, y propone mejoras.",
                            "Ciclo IV": "Diseña y construye soluciones tecnológicas al establecer las posibles causas que generan problemas tecnológicos, propone alternativas de solución con conocimientos científicos. Representa una de ellas, incluyendo las partes o etapas, a través de esquemas o dibujos, establece características de forma, estructura y función y explica una secuencia de pasos para implementarla usando herramientas y materiales, verifica el funcionamiento de la solución tecnológica y realizar ajustes. Explica el procedimiento, conocimiento científico aplicado y beneficios de la solución tecnológica, evalúa su funcionamiento considerando los requerimientos establecidos y proponer mejoras.",
                            "Ciclo V": "Diseña y construye soluciones tecnológicas al identificar las causas que generan problemas tecnológicos, y propone alternativas de solución basado en conocimientos científicos. Representa una de ellas incluyendo sus partes o etapas a través de esquemas o dibujos estructurados. Establece características de forma, estructura y función y explica el procedimiento, los recursos de implementación, los ejecuta usando herramientas y materiales seleccionados, verifica el funcionamiento de la solución tecnológica detectando imprecisiones y realiza ajustes para mejorarlo. Explica el procedimiento, conocimiento científico aplicado y limitaciones de la solución tecnológica. Evalúa su funcionamiento a través de pruebas considerando los requerimientos establecidos y propone mejoras. Infiere impactos de la solución tecnológica."
                        }
                        , // <-- No olvides la coma al unirlo con el resto de tu archivo
                        desempenos: {
                            "1°": [
                                "Describe el problema tecnológico y las causas que lo generan. Explica su alternativa de solución con base en conocimientos previos, y considera los requerimientos que debe cumplir y los recursos disponibles.",
                                "Representa su alternativa de solución tecnológica con dibujos y textos; describe sus partes, la secuencia de pasos para su elaboración, y selecciona herramientas, instrumentos y materiales según sus propiedades físicas.",
                                "Construye su alternativa de solución manipulando materiales, instrumentos y herramientas. Realiza ajustes o cambios para cumplir los requerimientos establecidos.",
                                "Describe el procedimiento y los beneficios de la solución tecnológica."
                            ],
                            "2°": [
                                "Describe el problema tecnológico y las causas que lo generan. Explica su alternativa de solución con base en conocimientos previos o prácticas locales; considera los requerimientos que debe cumplir y los recursos disponibles.",
                                "Representa la alternativa de solución, incluyendo sus partes, a través de dibujos y textos. Describe sus partes, la secuencia de pasos para su elaboración y selecciona herramientas e instrumentos.",
                                "Construye su alternativa de solución tecnológica manipulando materiales, instrumentos y herramientas. Realiza ajustes o cambios para cumplir los requerimientos o mejorar el funcionamiento.",
                                "Describe el procedimiento y los beneficios de la solución tecnológica. Usa unidades de medida convencionales."
                            ],
                            "3°": [
                                "Describe el problema tecnológico, las causas que lo generan y su alternativa de solución con base en conocimientos científicos o prácticas locales; considera los requerimientos que debe cumplir y los recursos disponibles.",
                                "Representa la alternativa de solución con esquemas o dibujos incluyendo sus partes o etapas. Describe sus partes, la secuencia de pasos para su elaboración y selecciona herramientas e instrumentos según sus propiedades físicas.",
                                "Ejecuta la secuencia de pasos de su alternativa de solución tecnológica. Verifica el funcionamiento de la solución considerando los requerimientos establecidos y propone mejoras.",
                                "Describe el procedimiento y los beneficios de la solución tecnológica. Comunica la secuencia de pasos, los materiales usados y justifica por qué cumple los requerimientos."
                            ],
                            "4°": [
                                "Describe el problema tecnológico, las causas que lo generan y su alternativa de solución con base en conocimientos científicos o prácticas locales. Considera los requerimientos que debe cumplir y los recursos disponibles.",
                                "Representa la alternativa de solución con dibujos, esquemas o diagramas de flujo. Selecciona y justifica el uso de materiales, herramientas, instrumentos y procedimientos.",
                                "Ejecuta la secuencia de pasos. Verifica el funcionamiento de la solución, y realiza ajustes o cambios para cumplir los requerimientos o mejorar su funcionamiento.",
                                "Explica el procedimiento, el conocimiento científico aplicado, las dificultades en el diseño e implementación, y evalúa el alcance de su funcionamiento."
                            ],
                            "5°": [
                                "Describe el problema tecnológico, las causas que lo generan, su alternativa de solución y los posibles costos. Explica su alternativa de solución con base en conocimientos científicos.",
                                "Representa la alternativa de solución con dibujos, esquemas o diagramas de flujo; incluye sus partes o etapas y la secuencia de pasos. Selecciona y justifica el uso de materiales, herramientas, instrumentos y procedimientos.",
                                "Ejecuta la secuencia de pasos. Realiza pruebas considerando su eficiencia y confiabilidad, y determina si requiere ajustes o cambios.",
                                "Explica el conocimiento científico y el procedimiento aplicado. Evalúa su funcionamiento, eficiencia y propone estrategias para mejorarlo. Infiere impactos de la solución tecnológica."
                            ],
                            "6°": [
                                "Describe el problema tecnológico, las causas que lo generan, su alternativa de solución y los posibles costos y tiempo de ejecución. Explica su alternativa de solución con base en conocimientos científicos y considera los requerimientos.",
                                "Representa la alternativa de solución con dibujos, esquemas, diagramas de flujo o maquetas. Selecciona y justifica los materiales, herramientas, instrumentos y procedimientos, tomando en cuenta su impacto ambiental y seguridad.",
                                "Ejecuta la secuencia de pasos. Realiza pruebas para verificar el funcionamiento considerando su eficiencia y confiabilidad, y propone estrategias para mejorarlo.",
                                "Explica el conocimiento científico y el procedimiento aplicado. Evalúa su funcionamiento, eficiencia e infiere el impacto de la solución tecnológica en la sociedad y el ambiente, y propone mejoras."
                            ]
                        }
                    }
                ]
            }
        }
    },

    // ═══════════════════════════════════════════════════════════════════════
    // NIVEL: SECUNDARIA
    // ═══════════════════════════════════════════════════════════════════════
    "Secundaria": {
        ciclos: ["Ciclo VI", "Ciclo VII"],
        grados: ["1er Grado", "2do Grado", "3er Grado", "4to Grado", "5to Grado"],

        // Mapeo grado → ciclo
        ciclosPorGrado: {
            "1er Grado": "Ciclo VI",
            "2do Grado": "Ciclo VI",
            "3er Grado": "Ciclo VII",
            "4to Grado": "Ciclo VII",
            "5to Grado": "Ciclo VII"
        },

        areas: {

            "Desarrollo Personal, Ciudadanía y Cívica": {
                competencias: [
                    {
                        id: "dpcc-s-c1",
                        nombre: "Construye su identidad",
                        capacidades: [
                            "Se valora a sí mismo",
                            "Autorregula sus emociones",
                            "Reflexiona y argumenta éticamente",
                            "Vive su sexualidad de manera integral y responsable de acuerdo a su etapa de desarrollo y madurez"
                        ],
                        estandares: {
                            "Ciclo VI": "Construye su identidad al tomar conciencia de los aspectos que lo hacen único, cuando se reconoce a sí mismo y valora sus identidades, sus logros y los cambios que se dan en su desarrollo. Se reconoce como parte de un mundo globalizado. Manifiesta sus emociones, sentimientos, logros e ideas distinguiendo el contexto y las personas, y comprendiendo sus causas y consecuencias. Asume una postura ética frente a una situación de conflicto moral, integrando en su argumentación principios éticos, los derechos fundamentales, la dignidad de todas las personas. Reflexiona sobre las consecuencias de sus decisiones. Se plantea comportamientos que incluyen elementos éticos de respeto a los derechos de los demás y de búsqueda de justicia teniendo en cuenta la responsabilidad de cada quien por sus acciones. Se relaciona con las personas bajo un marco de derechos, sin discriminar por género, características físicas, origen étnico, lengua, discapacidad, orientación sexual, edad, nivel socioeconómico, entre otras y sin violencia. Desarrolla relaciones afectivas, de amistad o de pareja, basadas en la reciprocidad y el respeto. Identifica situaciones que vulneran los derechos sexuales y reproductivos y propone pautas para prevenirlas y protegerse frente a ellas.",
                            "Ciclo VII": "Construye su identidad al tomar conciencia de los aspectos que lo hacen único, cuando se reconoce a sí mismo y se valora y es capaz de alcanzar sus metas. Se reconoce como parte de un mundo globalizado y que puede intervenir en él. Evalúa sus propias emociones y comportamientos en función de su bienestar y el de los demás. En una situación de conflicto moral, razona en función de principios éticos, que intenta universalizar. Justifica la importancia de considerar la dignidad, los derechos humanos y la responsabilidad de las acciones, así como la reciprocidad en las relaciones humanas. Se plantea metas éticas de vida y articula sus acciones en función a ellas. Vive su sexualidad de manera integral y responsable, respetando la diversidad en un marco de derechos. Establece relaciones afectivas positivas basadas en la reciprocidad, el respeto, el consentimiento y el cuidado del otro. Identifica signos de violencia en las relaciones de amistad o pareja. Argumenta la importancia de tomar decisiones responsables en la vivencia de la sexualidad en relación a su proyecto de vida."
                        }
                        , // <-- No olvides la coma al unirlo con el resto de tu archivo


                        desempenos: {
                            "1°": [
                                "Explica las características personales, culturales y sociales que lo hacen único, y describe sus logros y potencialidades.",
                                "Expresa argumentos a favor del respeto y cuidado mutuo en las relaciones afectivas y de amistad, y evita situaciones que las pongan en riesgo.",
                                "Argumenta su posición sobre dilemas éticos y situaciones de conflicto moral que involucran los derechos humanos, tomando en cuenta principios éticos y la normatividad.",
                                "Reconoce la importancia del autocuidado y plantea pautas de prevención y protección ante situaciones que afecten su integridad y la de los demás, en relación a la salud sexual y reproductiva.",
                                "Reflexiona sobre las consecuencias de sus decisiones y propone acciones en las que estén presentes criterios éticos para mejorar su comportamiento."
                            ],
                            "2°": [
                                "Sustenta sus características personales, culturales y sociales, sus logros y potencialidades que le permiten afirmarse como persona.",
                                "Demuestra respeto y cuidado por el otro en sus relaciones afectivas, y propone pautas para prevenir y protegerse de situaciones que afecten su integridad en relación a la salud sexual y reproductiva.",
                                "Analiza críticamente situaciones de desigualdad de género y de violencia familiar, sexual y contra la mujer, y propone acciones para rechazar toda forma de discriminación.",
                                "Explica las consecuencias de sus decisiones y propone acciones en las que estén presentes criterios éticos para mejorar su comportamiento.",
                                "Evalúa las prácticas culturales, sociales e históricas de su comunidad, y las de otros, identificando semejanzas y diferencias, y mostrando aprecio por la diversidad."
                            ],
                            "3°": [
                                "Sustenta su postura ética ante situaciones de conflicto moral, considerando principios éticos, los derechos humanos y la dignidad.",
                                "Sustenta, con argumentos, la importancia de cuidar su salud sexual y reproductiva, a partir de la comprensión de la sexualidad como dimensión integral de la persona.",
                                "Evalúa los argumentos y las implicaciones éticas de situaciones de violencia de género, discriminación y exclusión social, y propone acciones para el bien común.",
                                "Compara y contrasta sus patrones culturales con otros, y explica cómo estos influyen en la construcción de su identidad personal.",
                                "Actúa frente a las distintas formas de discriminación y reflexiona sobre las diversas situaciones que vulneran la convivencia democrática."
                            ],
                            "4°": [
                                "Argumenta la importancia de vivir su sexualidad de manera integral y responsable, y plantea pautas de prevención y protección ante situaciones de riesgo.",
                                "Evalúa las prácticas culturales, sociales e históricas de su comunidad, y las de otros, identificando semejanzas y diferencias, y mostrando aprecio por la diversidad.",
                                "Sustenta su posición sobre dilemas éticos y situaciones de conflicto moral que involucran los derechos humanos, considerando la dignidad, principios éticos y la normatividad.",
                                "Analiza críticamente situaciones de desigualdad de género y de violencia familiar, sexual y contra la mujer, y propone acciones para rechazar toda forma de discriminación.",
                                "Sustenta, con argumentos, que la vida es una dimensión integral de la persona y que debe cuidarla, reconociendo la importancia de su salud sexual y reproductiva."
                            ],
                            "5°": [
                                "Sustenta con argumentos sólidos, principios éticos y la dignidad humana la importancia de ser una persona íntegra en sus relaciones afectivas, y plantea pautas de autocuidado y prevención ante situaciones de riesgo.",
                                "Explica las diversas manifestaciones del conflicto moral, identificando la influencia de los valores, principios y normas de su entorno, y asume una postura ética.",
                                "Argumenta la importancia de la diversidad cultural y social en la construcción de su identidad y en la convivencia, y rechaza toda forma de discriminación.",
                                "Sustenta su posición sobre dilemas éticos y situaciones de conflicto moral que involucran los derechos humanos, considerando la dignidad humana, principios éticos y la normatividad.",
                                "Evalúa la importancia de vivir su sexualidad de manera integral y responsable, y plantea pautas de prevención y protección ante situaciones que afecten su integridad."
                            ]
                        }
                    },
                    {
                        id: "dpcc-s-c2",
                        nombre: "Convive y participa democráticamente en la búsqueda del bien común",
                        capacidades: [
                            "Interactúa con todas las personas",
                            "Construye normas y asume acuerdos y leyes",
                            "Maneja conflictos de manera constructiva",
                            "Delibera sobre asuntos públicos",
                            "Participa en acciones que promueven el bienestar común"
                        ],
                        estandares: {
                            "Ciclo VI": "Convive y participa democráticamente cuando se relaciona con los demás, respetando las diferencias y los derechos de cada uno, cumpliendo sus deberes y buscando que otros también las cumplan. Se relaciona con personas de culturas distintas, respetando sus costumbres. Construye y evalúa de manera colectiva las normas de convivencia en el aula y en la escuela con base en principios democráticos. Ejerce el rol de mediador en su grupo haciendo uso de la negociación y el diálogo para el manejo de conflictos. Propone, planifica y ejecuta acciones de manera cooperativa, dirigidas a promover el bien común, la defensa de sus derechos y el cumplimiento de sus deberes como miembro de una comunidad. Delibera sobre asuntos públicos formulando preguntas sobre sus causas y consecuencias, analizando argumentos contrarios a los propios y argumentando su postura basándose en fuentes y en otras opiniones.",
                            "Ciclo VII": "Convive y participa democráticamente, relacionándose con los demás, respetando las diferencias y promoviendo los derechos de todos, así como cumpliendo sus deberes y evaluando sus consecuencias. Se relaciona con personas de diferentes culturas respetando sus costumbres y creencias. Evalúa y propone normas para la convivencia social basadas en los principios democráticos y en la legislación vigente. Utiliza estrategias de negociación y diálogo para el manejo de conflictos. Asume deberes en la organización y ejecución de acciones colectivas para promover sus derechos y deberes frente a situaciones que involucran a su comunidad. Delibera sobre asuntos públicos con argumentos basados en fuentes confiables, los principios democráticos y la institucionalidad, y aporta a la construcción de consensos. Rechaza posiciones que legitiman la violencia o la vulneración de derechos."
                        }
                        , // <-- No olvides la coma al unirlo con el resto de tu archivo


                        desempenos: {
                            "1°": [
                                "Establece relaciones basadas en el respeto y el diálogo con sus compañeros y compañeras, cuestiona los prejuicios y estereotipos más comunes que se dan en su entorno, y cumple sus deberes en la escuela.",
                                "Intercambia costumbres mostrando respeto por las diferencias.",
                                "Evalúa los acuerdos y las normas que regulan la convivencia en su escuela en función de si se basan en los derechos y deberes del niño y del adolescente.",
                                "Interviene ante conflictos cercanos a él utilizando el diálogo y la negociación.",
                                "Delibera sobre asuntos públicos formulando preguntas sobre sus causas y consecuencias, analizando argumentos contrarios a los propios y sustentando su postura.",
                                "Propone y ejecuta acciones colectivas en la escuela, dirigidas a promover el bien común, la defensa de sus derechos y el cumplimiento de sus deberes."
                            ],
                            "2°": [
                                "Establece relaciones basadas en el respeto mutuo, el diálogo y la negociación en situaciones de conflicto, cuestionando los prejuicios y estereotipos que se dan en diversos espacios.",
                                "Propone, planifica y ejecuta acciones de manera cooperativa, dirigidas a promover el bien común, la defensa de sus derechos y el cumplimiento de sus deberes como miembro de una comunidad.",
                                "Evalúa el cumplimiento de acuerdos y normas que regulan la convivencia, y propone la creación de otras basadas en principios democráticos y los derechos humanos.",
                                "Ejerce el rol de mediador en su grupo haciendo uso de la negociación y el diálogo para el manejo de conflictos.",
                                "Delibera sobre asuntos públicos cuando indaga sus causas y consecuencias, examina argumentos contrarios a los propios, y sustenta su postura basándose en principios democráticos y derechos humanos."
                            ],
                            "3°": [
                                "Evalúa los acuerdos y normas para una convivencia armónica y la promoción de los derechos humanos, y propone la creación de otras.",
                                "Actúa como mediador en conflictos de sus compañeros haciendo uso de habilidades sociales, el diálogo y la negociación.",
                                "Delibera sobre asuntos públicos, a partir del análisis de diversas fuentes, la identificación de los intereses detrás de las posturas, y sustenta su posición con argumentos.",
                                "Propone, planifica y ejecuta acciones de manera cooperativa, dirigidas a promover el bien común, la defensa de los derechos humanos y el cumplimiento de deberes.",
                                "Explica la importancia de la actuación de las instituciones y organismos internacionales en la defensa de los derechos humanos."
                            ],
                            "4°": [
                                "Evalúa el cumplimiento de acuerdos y normas, y propone la creación de otras basadas en principios democráticos y los derechos humanos.",
                                "Utiliza estrategias diversas y creativas para prevenir y enfrentar conflictos en la comunidad, aplicando el diálogo, la negociación y la mediación.",
                                "Delibera sobre asuntos públicos, a partir del análisis de diversas fuentes, la identificación de los intereses detrás de las posturas, y sustenta su posición con argumentos sólidos y principios democráticos.",
                                "Propone, planifica y ejecuta acciones de manera cooperativa, dirigidas a promover el bien común, la defensa de los derechos humanos y el cumplimiento de deberes.",
                                "Evalúa los procedimientos de las instituciones y organismos del Estado considerando el respeto por la dignidad humana, y propone alternativas para su mejora."
                            ],
                            "5°": [
                                "Delibera sobre asuntos públicos, a partir del análisis de diversas fuentes, la identificación de los intereses detrás de las posturas, y sustenta su posición con argumentos sólidos, principios democráticos y la Constitución.",
                                "Ejerce su rol de ciudadano en la sociedad, participando activamente en la vida política y social, y promoviendo el cumplimiento de los derechos humanos.",
                                "Argumenta la necesidad de rechazar conductas de violencia, marginación y explotación que puedan afectar los derechos de los demás.",
                                "Propone, planifica y ejecuta acciones de manera cooperativa, dirigidas a promover el bien común, la defensa de los derechos humanos y el cumplimiento de deberes.",
                                "Evalúa la actuación de las instituciones y organismos internacionales en la defensa de los derechos humanos y el cumplimiento de sus deberes."
                            ]
                        }
                    }
                ]
            },
            "Ciencias Sociales": {
                competencias: [
                    {
                        id: "cs-s-c1",
                        nombre: "Construye interpretaciones históricas",
                        capacidades: [
                            "Interpreta críticamente fuentes diversas",
                            "Comprende el tiempo histórico",
                            "Elabora explicaciones sobre procesos históricos"
                        ],
                        estandares: {
                            "Ciclo VI": "Construye interpretaciones históricas sobre hechos o procesos del Perú y el mundo, en los que explica hechos o procesos históricos, a partir de la clasificación de las causas y consecuencias, reconociendo sus cambios y permanencias, y usando términos históricos. Explica su relevancia a partir de los cambios y permanencias que generan en el tiempo, empleando distintos referentes y convenciones temporales, así como conceptos relacionados a instituciones sociopolíticas y la economía. Compara e integra información de diversas fuentes, estableciendo diferencias entre las narraciones de los hechos y las interpretaciones de los autores de las fuentes.",
                            "Ciclo VII": "Construye interpretaciones históricas sobre la base de los problemas históricos del Perú y el mundo en relación a los grandes cambios y permanencias a lo largo de la historia, empleando conceptos sociales, políticos y económicos abstractos y complejos. Jerarquiza múltiples causas y consecuencias de los hechos o procesos históricos. Establece relaciones entre esos procesos históricos y situaciones o procesos actuales. Explica cómo las acciones humanas, individuales o grupales van configurando el pasado y el presente y pueden configurar el futuro. Explica la perspectiva de los protagonistas, relacionando sus acciones con sus motivaciones. Contrasta diversas interpretaciones del pasado, a partir de distintas fuentes evaluadas en su contexto y perspectiva. Reconoce la validez de las fuentes para comprender variados puntos de vista."
                        }
                        , // <-- No olvides la coma al unirlo con el resto de tu archivo
                        desempenos: {
                            "1°": [
                                "Utiliza diversas fuentes históricas para obtener información sobre un determinado hecho o proceso histórico, desde el origen de la humanidad hasta el proceso de la Conquista.",
                                "Identifica las características (autor o colectivo humano, contexto) de las diversas fuentes históricas y las utiliza para obtener información sobre un hecho o proceso histórico.",
                                "Secuencia cronológicamente las etapas convencionales de la historia universal y del Perú (preínca, inca, virreinato, etc.) y las caracteriza.",
                                "Explica hechos o procesos históricos claves del Perú y el mundo (origen de la humanidad, civilizaciones antiguas, Conquista del Tahuantinsuyo, etc.) utilizando conceptos sociopolíticos y económicos, y reconoce las causas y consecuencias."
                            ],
                            "2°": [
                                "Utiliza fuentes históricas para obtener información sobre un determinado hecho o proceso histórico, desde el Virreinato hasta el surgimiento de la República.",
                                "Contrasta las interpretaciones que presentan las fuentes históricas sobre un mismo hecho o proceso histórico, desde el Virreinato hasta el surgimiento de la República.",
                                "Secuencia hechos o procesos históricos de la historia del Perú y el mundo (Virreinato, Independencia, Primer Militarismo, etc.) y explica los cambios, permanencias y simultaneidades.",
                                "Explica hechos o procesos históricos (Virreinato, Independencia, Primer Militarismo, etc.) a partir de sus causas y consecuencias, y de la participación de diversos actores sociales."
                            ],
                            "3°": [
                                "Utiliza fuentes históricas (oral, escrita, material, etc.) para analizar un hecho o proceso histórico, desde el siglo XIX hasta el Bicentenario, estableciendo la utilidad y fiabilidad de las mismas.",
                                "Compara e integra información de diversas fuentes, identificando las diferencias entre las narraciones de un mismo hecho histórico, desde el siglo XIX hasta el Bicentenario.",
                                "Explica las transformaciones y permanencias de los procesos históricos del Perú y el mundo (República, I y II Guerra Mundial, Guerra Fría, etc.) y utiliza diversas categorías temporales.",
                                "Explica hechos o procesos históricos del Perú y el mundo (República, I y II Guerra Mundial, Guerra Fría, etc.) reconociendo las causas múltiples, las consecuencias y la participación de los protagonistas, individuales y colectivos."
                            ],
                            "4°": [
                                "Utiliza fuentes históricas (oral, escrita, material, etc.) para analizar, contrastar y complementar información sobre un hecho o proceso histórico, desde el Bicentenario hasta la actualidad.",
                                "Contrasta e integra información de diversas fuentes, identificando las intenciones y perspectivas de los autores sobre un mismo hecho o proceso histórico.",
                                "Explica la evolución de los procesos históricos del Perú y el mundo (historia reciente, globalización, etc.) a partir de la identificación de cambios, permanencias y simultaneidades, y usa conceptos abstractos.",
                                "Explica hechos o procesos históricos (historia reciente del Perú y el mundo) reconociendo las causas múltiples, las consecuencias y la participación de los protagonistas, individuales y colectivos, y asumiendo una postura crítica."
                            ],
                            "5°": [
                                "Evalúa y contrasta diversas fuentes históricas para obtener información sobre un hecho o proceso histórico, a lo largo de la historia del Perú y el mundo, y establece su fiabilidad, utilidad y perspectiva.",
                                "Explica la evolución de los procesos históricos del Perú y el mundo, a partir de la identificación de cambios, permanencias y simultaneidades, y utiliza conceptos sociales, políticos y económicos complejos.",
                                "Evalúa críticamente las interpretaciones que presentan las fuentes históricas sobre un mismo hecho o proceso, reconociendo el contexto en que fueron producidas.",
                                "Explica hechos o procesos históricos de la historia del Perú y el mundo, a partir de la identificación de causas y consecuencias múltiples (económicas, políticas, sociales, culturales) y la participación de protagonistas, individuales y colectivos."
                            ]
                        }
                    },
                    {
                        id: "cs-s-c2",
                        nombre: "Gestiona responsablemente el espacio y el ambiente",
                        capacidades: [
                            "Comprende las relaciones entre los elementos naturales y sociales",
                            "Maneja fuentes de información para comprender el espacio geográfico y el ambiente",
                            "Genera acciones para conservar el ambiente local y global"
                        ],
                        estandares: {
                            "Ciclo VI": "Gestiona responsablemente el espacio y ambiente al realizar actividades orientadas al cuidado de su localidad, considerando el cuidado del planeta. Compara las causas y consecuencias de diversas situaciones a diversas escalas para proponer medidas de prevención. Explica cambios y permanencias en el espacio geográfico a diferentes escalas. Explica conflictos socioambientales y territoriales reconociendo sus múltiples dimensiones. Utiliza información y diversas herramientas cartográficas y socioculturales para ubicar y orientar distintos elementos del espacio geográfico y el ambiente, incluyéndose.",
                            "Ciclo VII": "Gestiona responsablemente el espacio y ambiente al proponer alternativas y promover la sostenibilidad del ambiente, la mitigación y adaptación al cambio climático y la prevención de riesgo de desastres, considerando las múltiples dimensiones. Explica las diferentes formas en las que se organiza el espacio geográfico y el ambiente como resultado de las decisiones (acciones o intervención) de los actores sociales. Utiliza fuentes de información y herramientas digitales para representar e interpretar el espacio geográfico y el ambiente."
                        }
                        , // <-- No olvides la coma al unirlo con el resto de tu archivo
                        desempenos: {
                            "1°": [
                                "Describe las características del espacio geográfico de su localidad y región (clima, relieve, recursos naturales, población, etc.) y explica cómo influyen en el desarrollo de sus actividades.",
                                "Utiliza diferentes herramientas cartográficas (mapas, planos, maquetas, etc.) y escalas para describir y localizar elementos del espacio geográfico.",
                                "Explica las causas y consecuencias de los problemas ambientales de su localidad (contaminación, uso inadecuado de espacios, etc.) y propone acciones para mitigarlos.",
                                "Reconoce los roles de los actores sociales en la configuración del espacio geográfico y en la gestión de riesgos de desastres."
                            ],
                            "2°": [
                                "Explica los factores (naturales y sociales) que originan los riesgos de desastres en su localidad y región, y propone medidas de prevención y mitigación.",
                                "Utiliza diversas fuentes de información geográfica (mapas temáticos, imágenes satelitales, etc.) para analizar el espacio geográfico a diferentes escalas.",
                                "Explica cómo las acciones de los actores sociales pueden generar problemáticas ambientales, o territoriales y de la condición de cambio climático.",
                                "Propone acciones para la adaptación y mitigación del cambio climático, y evalúa su impacto en el ambiente."
                            ],
                            "3°": [
                                "Explica la dinámica de las placas tectónicas y sus efectos en el relieve, la distribución de recursos y la gestión de riesgos en el Perú y el mundo.",
                                "Analiza e interpreta diversas fuentes de información geográfica (mapas de riesgo, gráficos estadísticos, etc.) para explicar los cambios y permanencias en el espacio.",
                                "Explica los conflictos socioambientales y territoriales reconociendo sus múltiples dimensiones (económicas, políticas, culturales) y sus posibles soluciones.",
                                "Evalúa la efectividad de las acciones implementadas por el Estado y la sociedad civil en la gestión de riesgos de desastres y en la mitigación del cambio climático."
                            ],
                            "4°": [
                                "Explica la relación entre el crecimiento demográfico, la calidad de vida y los patrones de consumo en diferentes regiones del Perú y del mundo.",
                                "Utiliza información y herramientas cartográficas (SIG, GPS, etc.) para analizar la dinámica y los cambios en el espacio geográfico, y elaborar rutas de evacuación y medidas de seguridad.",
                                "Evalúa las problemáticas ambientales y territoriales (degradación del suelo, agotamiento de recursos, etc.) a diferentes escalas, y propone alternativas de solución.",
                                "Explica los desafíos de la gestión ambiental y territorial en el marco del desarrollo sostenible y el ordenamiento territorial."
                            ],
                            "5°": [
                                "Explica la influencia de los factores geográficos (relieve, clima, hidrografía) en la dinámica económica y social del territorio nacional, y en la condición de cambio climático.",
                                "Evalúa las acciones de los actores sociales frente a problemáticas ambientales y territoriales complejas, a escala nacional y global, asumiendo una postura crítica.",
                                "Propone alternativas de solución a los conflictos socioambientales y territoriales, basadas en principios de sostenibilidad, equidad y ética.",
                                "Analiza el impacto de los fenómenos demográficos y la globalización en la configuración del espacio geográfico y en la calidad de vida de las personas."
                            ]
                        }
                    },
                    {
                        id: "cs-s-c3",
                        nombre: "Gestiona responsablemente los recursos económicos",
                        capacidades: [
                            "Comprende el funcionamiento del sistema económico y financiero",
                            "Toma decisiones económicas y financieras"
                        ],
                        estandares: {
                            "Ciclo VI": "Gestiona responsablemente los recursos económicos al promover el ahorro y la inversión de los recursos. Promueve el consumo informado frente a los recursos económicos y los productos y servicios financieros, asumiendo una posición crítica respecto a la publicidad y rechazando toda actividad financiera informal e ilegal. Explica las interrelaciones entre los agentes del sistema económico y financiero nacional (familia, empresa, Estado) teniendo como referencia el mercado. Explica el rol del Estado en el financiamiento del presupuesto nacional.",
                            "Ciclo VII": "Gestiona responsablemente los recursos económicos al promover el ahorro y la inversión de los recursos considerando sus objetivos, riesgos y oportunidades. Asume una posición crítica frente a las actividades económicas y financieras ilícitas e informales, prácticas de producción y consumo que deterioran el ambiente y afectan los derechos humanos, el incumplimiento de las responsabilidades tributarias y de las decisiones financieras que no consideran un fin previsional. Analiza las interrelaciones entre los agentes del sistema económico y financiero global teniendo en cuenta el mercado y el comercio mundial. Explica el rol del Estado como agente supervisor del sistema financiero."
                        }
                        , // <-- No olvides la coma al unirlo con el resto de tu archivo
                        desempenos: {
                            "1°": [
                                "Explica el rol de los agentes económicos (familia, empresas, Estado) en el sistema económico y financiero y cómo influyen en la satisfacción de las necesidades.",
                                "Determina las decisiones que tomaría en caso escaseen los recursos que necesita, y explica que los recursos son limitados.",
                                "Explica cómo el uso responsable de los recursos (presupuesto familiar, ahorro, inversión) contribuye al bienestar personal y familiar.",
                                "Identifica los riesgos y beneficios de las decisiones económicas y financieras, y las posibles consecuencias de sus acciones."
                            ],
                            "2°": [
                                "Explica que los recursos económicos son escasos y que, frente a ello, las personas, las familias y el Estado deben tomar decisiones sobre cómo utilizarlos.",
                                "Explica el funcionamiento del mercado y cómo los precios se determinan por la oferta y la demanda, identificando los roles de la SUNAT y SUNARP.",
                                "Propone acciones para el uso responsable del dinero y otros recursos, y evalúa la importancia del ahorro y la inversión para el futuro.",
                                "Identifica situaciones de riesgo y vulnerabilidad económica y financiera, y propone medidas para prevenirlas."
                            ],
                            "3°": [
                                "Explica las relaciones entre los agentes del sistema económico y financiero nacional e internacional (Bancos, AFP, etc.) y sus efectos en la economía familiar y del país.",
                                "Argumenta que el Estado cumple un rol regulador y promotor en el sistema económico, y explica las funciones de los organismos reguladores.",
                                "Evalúa la importancia de tomar decisiones económicas y financieras responsables (ahorro, inversión, endeudamiento) para mejorar su bienestar.",
                                "Propone alternativas para el uso responsable del dinero y la reducción del endeudamiento, considerando la tasa de interés y los impuestos."
                            ],
                            "4°": [
                                "Explica los roles que cumplen los organismos financieros internacionales (FMI, BM) y el Estado en la economía, y cómo influyen en las decisiones económicas nacionales.",
                                "Evalúa el impacto de las decisiones económicas y financieras personales y familiares en la sociedad y el ambiente.",
                                "Propone acciones para promover la formalización de la economía y el pago de impuestos, explicando sus beneficios para el país.",
                                "Analiza las causas y consecuencias de la inflación, la devaluación y el desempleo en el Perú y el mundo, y propone medidas para enfrentarlos."
                            ],
                            "5°": [
                                "Explica las características del sistema económico globalizado y el rol de las empresas transnacionales, y cómo influyen en la economía nacional.",
                                "Evalúa críticamente los riesgos y oportunidades de la inversión y el endeudamiento a largo plazo, considerando la sostenibilidad y la equidad.",
                                "Argumenta la importancia de la política fiscal y monetaria en la estabilidad económica del país, y el rol del Banco Central de Reserva (BCR).",
                                "Evalúa las políticas económicas y sociales (programas sociales, subsidios) y propone alternativas para mejorar la calidad de vida de la población, asumiendo una postura ética."
                            ]
                        }
                    }
                ]
            },
            "Educación Religiosa": {
                competencias: [
                    {
                        id: "er-s-c1",
                        nombre: "Construye su identidad como persona humana, amada por Dios, digna, libre y trascendente, comprendiendo la doctrina de su propia religión, abierto al diálogo con las que le son cercanas",
                        capacidades: [
                            "Conoce a Dios y asume su identidad religiosa como persona digna, libre y trascendente",
                            "Cultiva y valora las manifestaciones religiosas de su entorno argumentando su fe de manera comprensible y respetuosa"
                        ],
                        estandares: {
                            "Ciclo VI": "Los estándares de Educación Religiosa se encuentran en un documento complementario específico del área.",
                            "Ciclo VII": "Los estándares de Educación Religiosa se encuentran en un documento complementario específico del área."
                        }
                        , // <-- No olvides la coma al unirlo con el resto de tu archivo
                        desempenos: {
                            "1°": [
                                "Fundamenta la dignidad de la persona humana en el amor de Dios, a partir del texto bíblico (Génesis 1, 26-28), y asume un compromiso de respeto y valoración de sí mismo y de los demás.",
                                "Comprende el plan de salvación de Dios Padre, mediante la lectura y análisis de textos bíblicos, y explica el rol de María y de la Iglesia en este plan.",
                                "Explica los principios y valores de su propia religión y los contrasta con los de otras tradiciones religiosas para favorecer el diálogo y el respeto mutuo.",
                                "Asume una actitud de respeto y valoración frente a las manifestaciones religiosas y culturales de su entorno, reconociendo el amor de Dios en ellas.",
                                "Reflexiona sobre la vida de Jesús y la aplica en su vida personal, demostrando coherencia entre lo que cree y lo que hace."
                            ],
                            "2°": [
                                "Analiza el significado de ser creado a imagen y semejanza de Dios, y cómo esto influye en su dignidad, libertad y trascendencia, a partir de pasajes bíblicos.",
                                "Comprende y explica el rol de la Iglesia como comunidad de fe y el sentido de los sacramentos como signos del amor de Dios.",
                                "Argumenta la importancia del diálogo y el respeto a la diversidad de credos y posturas éticas, a partir de la enseñanza de su propia fe.",
                                "Discierne los valores y antivalores presentes en su entorno a la luz de la doctrina de su religión, y asume un compromiso ético y moral.",
                                "Asume las enseñanzas de Jesucristo y de la Iglesia como guía de su proyecto de vida, demostrando un comportamiento ético y moral."
                            ],
                            "3°": [
                                "Sustenta, con argumentos teológicos, que el ser humano es trascendente y libre, y que su dignidad se basa en su condición de hijo de Dios.",
                                "Explica el origen de la Iglesia, su misión y los desafíos que enfrenta en el mundo contemporáneo, a la luz de las Sagradas Escrituras y el Magisterio.",
                                "Analiza críticamente las diversas expresiones religiosas y filosóficas del mundo, y promueve el diálogo interreligioso, respetando las diferencias.",
                                "Asume la vivencia de la fe como camino para alcanzar la plenitud, y aplica las enseñanzas bíblicas y doctrinales en su vida personal y social.",
                                "Propone acciones concretas para promover la justicia, la solidaridad y la paz en su entorno, a la luz de la doctrina social de la Iglesia."
                            ],
                            "4°": [
                                "Sustenta la propuesta de Jesucristo y los valores del Reino de Dios, como fuente de vida y esperanza, a partir del estudio de los Evangelios.",
                                "Analiza y argumenta la función de los sacramentos de servicio y de curación en la vida de la comunidad y del creyente, según el Magisterio de la Iglesia.",
                                "Argumenta la coherencia entre su fe y sus acciones, y promueve el diálogo con otras culturas y religiones para construir una sociedad justa y fraterna.",
                                "Evalúa las situaciones de injusticia, desigualdad y exclusión a la luz de la enseñanza social de la Iglesia, y asume un compromiso de transformación de la realidad.",
                                "Elabora un proyecto de vida personal y social, basado en los valores cristianos, y demuestra coherencia entre sus creencias y su compromiso."
                            ],
                            "5°": [
                                "Sustenta su proyecto de vida personal y social en los principios y valores de la fe, y asume un compromiso de coherencia entre su fe y sus acciones.",
                                "Argumenta la dimensión trascendente de la vida humana, explicando el sentido cristiano del dolor, la enfermedad, la muerte y la resurrección.",
                                "Evalúa críticamente las diversas ideologías y modelos de vida que se presentan en la sociedad, a la luz de la fe y la razón.",
                                "Propone acciones para promover el respeto a la dignidad humana y a toda forma de vida, a la luz de la encíclica *Laudato si’* y otros documentos de la Iglesia.",
                                "Fomenta el diálogo interreligioso y ecuménico, reconociendo los elementos comunes y las diferencias entre las diversas tradiciones de fe."
                            ]
                        }
                    },
                    {
                        id: "er-s-c2",
                        nombre: "Asume la experiencia del encuentro personal y comunitario con Dios en su proyecto de vida en coherencia con su creencia religiosa",
                        capacidades: [
                            "Transforma su entorno desde el encuentro personal y comunitario con Dios y desde la fe que profesa",
                            "Actúa coherentemente en razón de su fe según los principios de su conciencia moral en situaciones concretas de la vida"
                        ],
                        estandares: {
                            "Ciclo VI": "Los estándares de Educación Religiosa se encuentran en un documento complementario específico del área.",
                            "Ciclo VII": "Los estándares de Educación Religiosa se encuentran en un documento complementario específico del área."
                        }
                        , // <-- No olvides la coma al unirlo con el resto de tu archivo
                        desempenos: {
                            "1°": [
                                "Reconoce el amor de Dios en la creación y lo relaciona con su experiencia de vida, a través de la oración y la meditación.",
                                "Interioriza el mensaje de las bienaventuranzas y se compromete a vivir según el estilo de vida de Jesús.",
                                "Participa en celebraciones de su comunidad de fe, reconociendo el significado de los signos y símbolos religiosos.",
                                "Asume su rol como agente de cambio en la sociedad, promoviendo la justicia y la paz en su entorno.",
                                "Expresa su fe a través de acciones de servicio y testimonio de vida, imitando el ejemplo de María."
                            ],
                            "2°": [
                                "Expresa su fe a través de la oración, el compromiso y la participación en la vida de la Iglesia, asumiendo una actitud de diálogo y servicio.",
                                "Participa activamente en las celebraciones litúrgicas, comprendiendo el significado de los ritos y su relación con la vida de fe.",
                                "Interioriza los valores del Reino de Dios y los aplica en su vida personal y social, buscando el bien común.",
                                "Elabora compromisos de cambio personal y social, a la luz de la Palabra de Dios y la enseñanza de la Iglesia.",
                                "Demuestra apertura al diálogo y respeto por las creencias de los demás, reconociendo la diversidad religiosa como riqueza."
                            ],
                            "3°": [
                                "Cultiva su dimensión espiritual a través de la oración personal y comunitaria, la meditación de la Palabra de Dios y la participación en los sacramentos.",
                                "Diseña y participa en proyectos de servicio a la comunidad, a la luz de la doctrina social de la Iglesia, promoviendo la dignidad humana.",
                                "Comprende el significado de la vocación y el compromiso en la vida de fe, y lo aplica en su proyecto de vida.",
                                "Demuestra coherencia entre lo que cree y lo que hace en su vida personal y social, asumiendo un compromiso ético y moral.",
                                "Evalúa las diversas formas de apostolado y servicio a la luz de las enseñanzas de Jesús, y elige un camino para su vida."
                            ],
                            "4°": [
                                "Asume un compromiso de vivir la caridad y la justicia, a través de acciones concretas en su entorno, imitando el ejemplo de los santos y de la Iglesia.",
                                "Sustenta la importancia de los sacramentos de iniciación cristiana como fuente de vida y compromiso con la misión de Jesús.",
                                "Evalúa críticamente las situaciones de su entorno y asume un compromiso de transformación, a la luz de la Palabra de Dios y la enseñanza de la Iglesia.",
                                "Fomenta la participación activa en la comunidad de fe, promoviendo el diálogo y la colaboración en la búsqueda del bien común.",
                                "Diseña y gestiona proyectos de emprendimiento social que promuevan la dignidad humana y el cuidado de la casa común."
                            ],
                            "5°": [
                                "Asume la experiencia de fe como un encuentro personal y comunitario con Dios que transforma su vida, y lo expresa en su testimonio y servicio.",
                                "Propone acciones concretas para promover la justicia, la paz y el cuidado de la creación, a la luz de la doctrina social de la Iglesia y las encíclicas papales.",
                                "Evalúa las manifestaciones religiosas de su entorno y promueve el diálogo interreligioso, como camino para la convivencia fraterna.",
                                "Argumenta la centralidad de la Eucaristía como sacramento de unidad y comunión, y participa activamente en la vida litúrgica de su comunidad.",
                                "Diseña y promueve iniciativas de pastoral juvenil y social, que respondan a las necesidades y desafíos de la sociedad actual."
                            ]
                        }
                    }
                ]
            },
            "Educación para el Trabajo": {
                competencias: [
                    {
                        id: "ept-s-c1",
                        nombre: "Gestiona proyectos de emprendimiento económico o social",
                        capacidades: [
                            "Crea propuestas de valor",
                            "Trabaja cooperativamente para lograr objetivos y metas",
                            "Aplica habilidades técnicas",
                            "Evalúa los resultados del proyecto de emprendimiento"
                        ],
                        estandares: {
                            "Ciclo VI": "Gestiona proyectos de emprendimiento económico o social cuando se cuestiona sobre una situación que afecta a un grupo de usuarios y explora sus necesidades y expectativas para crear una alternativa de solución viable y reconoce aspectos éticos y culturales así como los posibles resultados sociales y ambientales que implica. Implementa sus ideas empleando habilidades técnicas, anticipa las acciones y recursos que necesitará y trabaja cooperativamente cumpliendo sus roles y deberes individuales para el logro de una meta común, propone actividades y facilita a la iniciativa y perseverancia colectiva. Evalúa el logro de resultados parciales relacionando la cantidad de insumos empleados con los beneficios sociales y ambientales generados; realiza mejoras considerando además las opiniones de los usuarios y las lecciones aprendidas.",
                            "Ciclo VII": "Gestiona proyectos de emprendimiento económico o social cuando integra activamente información sobre una situación que afecta a un grupo de usuarios, genera explicaciones y define patrones sobre sus necesidades y expectativas para crear una alternativa de solución viable que considera aspectos éticos y culturales y redefine sus ideas para generar resultados sociales y ambientales positivos. Implementa sus ideas combinando habilidades técnicas, proyecta en función a escenarios las acciones y recursos que necesitará y trabaja cooperativamente recombinando sus roles y deberes individuales para el logro de una meta común, coordina actividades y colabora a la iniciativa y perseverancia colectiva resolviendo los conflictos a través de métodos constructivos. Evalúa los procesos y resultados parciales, analizando el equilibrio entre inversión – beneficio ambiental y social, la satisfacción de usuarios, y los beneficios sociales y ambientales generados. Incorpora mejoras en el proyecto para aumentar la calidad del producto o servicio y la eficiencia de procesos."
                        }
                        , // <-- No olvides la coma al unirlo con el resto de tu archivo
                        desempenos: {
                            "1°": [
                                "Formula un desafío considerando las necesidades o problemas de un grupo de usuarios y su entorno. Determina los principales factores que lo causan.",
                                "Aplica habilidades técnicas para elaborar prototipos funcionales que respondan al desafío y a las expectativas de los usuarios, utilizando materiales y herramientas adecuadas.",
                                "Selecciona y aplica instrumentos de recojo de información (entrevistas, observación, etc.) para definir el problema y las necesidades de los usuarios, en el marco de la metodología **Design Thinking**.",
                                "Evalúa los resultados de su prototipo, aplicando indicadores y criterios, y propone mejoras para elevar su calidad y obtener la aprobación del usuario.",
                                "Determina los recursos que necesita y elabora un **presupuesto** para la ejecución de su proyecto de emprendimiento, considerando las fuentes de **financiamiento**."
                            ],
                            "2°": [
                                "Formula un desafío que involucre la mejora de un producto, servicio o proceso, y recoge información de su entorno, utilizando la metodología **Lean Canvas**.",
                                "Aplica habilidades técnicas para elaborar prototipos que incorporan mejoras, utilizando materiales funcionales y considerando los requerimientos de los usuarios.",
                                "Selecciona y aplica instrumentos de recojo de información para validar las **hipótesis** de su **modelo de negocio**, en el marco de la metodología **Lean Startup**.",
                                "Evalúa los procesos y resultados de su proyecto de emprendimiento, comparándolos con los objetivos iniciales, y propone acciones para el **escalamiento**.",
                                "Elabora un plan de marketing digital o tradicional para la **promoción** y **venta** de su producto o servicio, utilizando herramientas tecnológicas y la comunicación asertiva."
                            ],
                            "3°": [
                                "Define una propuesta de valor innovadora que responda a una oportunidad o problema, utilizando la metodología **Business Model Canvas**.",
                                "Planifica y ejecuta la elaboración de un producto o servicio, aplicando normas de seguridad y control de calidad, y gestionando los recursos con eficiencia.",
                                "Evalúa el **impacto social, económico y ambiental** de su proyecto de emprendimiento, e incorpora mejoras sostenibles en el proceso.",
                                "Aplica técnicas de **prospección** y **negociación** para establecer alianzas estratégicas con clientes y proveedores, y lograr la rentabilidad de su negocio.",
                                "Elabora los **estados financieros** básicos (ingresos, egresos) y el flujo de caja, para analizar la viabilidad económica y financiera de su proyecto."
                            ],
                            "4°": [
                                "Formula **modelos de negocio** aplicando la metodología **Design Thinking** o **Lean Startup**, que integran componentes culturales y ambientales de su contexto.",
                                "Utiliza la **tecnología digital** para diseñar y producir bienes o servicios con altos estándares de calidad y funcionalidad, aplicando técnicas de producción limpias y seguras.",
                                "Evalúa la gestión de su proyecto de emprendimiento, analizando las **métricas** y los **indicadores de desempeño** (KPIs), y toma decisiones para la mejora continua.",
                                "Aplica estrategias de **comercialización** y **distribución** a través de canales digitales y físicos, y utiliza herramientas de **gestión de clientes (CRM)**.",
                                "Identifica y gestiona diversas fuentes de **financiamiento** (capital semilla, *crowdfunding*, etc.), y elabora un plan de inversión para hacer crecer su negocio."
                            ],
                            "5°": [
                                "Crea **modelos de negocio** escalables y sostenibles, basados en la identificación de **megatendencias** y **oportunidades globales**, aplicando metodologías ágiles avanzadas.",
                                "Diseña y produce **prototipos de alta fidelidad** o productos finales, utilizando **tecnología de vanguardia** (impresión 3D, IA, etc.) y patentes o derechos de autor.",
                                "Evalúa la viabilidad y rentabilidad de su modelo de negocio, a través del análisis de **costos, ingresos, punto de equilibrio y retorno de inversión (ROI)**, proyectados a mediano y largo plazo.",
                                "Lidera equipos de trabajo, aplicando la **gestión de talentos** y la **cultura de innovación**, y establece alianzas estratégicas a nivel nacional e internacional.",
                                "Argumenta la importancia de las **políticas públicas** y el **marco legal** (tributación, licencias, protección al consumidor) en la formalización y el desarrollo de su emprendimiento."
                            ]
                        }
                    }
                ]
            },
            "Educación Física": {
                competencias: [
                    {
                        id: "ef-s-c1",
                        nombre: "Se desenvuelve de manera autónoma a través de su motricidad",
                        capacidades: [
                            "Comprende su cuerpo",
                            "Se expresa corporalmente"
                        ],
                        estandares: {
                            "Ciclo VI": "Se desenvuelve de manera autónoma a través de su motricidad cuando relaciona cómo su imagen corporal y la aceptación de los otros influyen en el concepto de sí mismo. Realiza habilidades motrices específicas, regulando su tono, postura, equilibrio y tomando como referencia la trayectoria de objetos, los otros y sus propios desplazamientos. Produce secuencias de movimientos y gestos corporales para manifestar sus emociones con base en el ritmo y la música y utilizando diferentes materiales.",
                            "Ciclo VII": "Se desenvuelve de manera autónoma a través de su motricidad cuando toma conciencia de cómo su imagen corporal contribuye a la construcción de su identidad y autoestima. Organiza su cuerpo en relación a las acciones y habilidades motrices según la práctica de actividad física que quiere realizar. Produce con sus compañeros diálogos corporales que combinan movimientos en los que expresan emociones, sentimientos y pensamientos sobre temas de su interés en un determinado contexto."
                        }
                        , // <-- No olvides la coma al unirlo con el resto de tu archivo
                        desempenos: {
                            "1°": [
                                "Reconoce su **potencial motor** en la práctica de diversas actividades físicas y juegos deportivos. Describe las características de las fases del desarrollo motor y su incidencia en la ejecución de movimientos.",
                                "Comprende y utiliza conceptos relacionados con el **esquema corporal** (partes, lateralidad, eje) y los aplica en la realización de secuencias de movimientos y en la orientación espacial.",
                                "Ajusta la **postura** y el **equilibrio** en la ejecución de movimientos (saltos, giros, lanzamientos) para lograr un mejor desempeño, identificando los riesgos que conllevan posturas inadecuadas.",
                                "Expresa sus **emociones** y **sentimientos** a través del lenguaje corporal y la improvisación, reconociendo la importancia de la expresión motriz para la comunicación."
                            ],
                            "2°": [
                                "Aplica sus **habilidades motrices específicas** (coordinación, agilidad, velocidad) en situaciones de juego y predeportivas, y valora sus logros al realizarlas.",
                                "Evalúa sus **posibilidades expresivas** y **comunicativas** a partir de la representación de ideas, emociones y mensajes, utilizando diferentes códigos de movimiento (danzas, mímica).",
                                "Aplica principios de **biomecánica básica** (fuerza, palancas, centro de gravedad) para mejorar la eficacia de sus movimientos y evitar lesiones.",
                                "Ajusta sus **patrones posturales** y **movimientos** en relación a un **tiempo y espacio** determinado, utilizando nociones de ritmo, velocidad y distancia en la ejecución motriz."
                            ],
                            "3°": [
                                "Combina y **ejecuta con precisión** habilidades motrices específicas y complejas en la práctica de deportes y actividades físicas de alta demanda, adaptándolas a diferentes contextos.",
                                "Evalúa su **desempeño motor** y el de sus pares en la ejecución de movimientos y técnicas deportivas, aplicando criterios de eficiencia, estética y seguridad.",
                                "Diseña y ejecuta **secuencias de movimiento** o **coreografías** con ritmo y expresividad, integrando diferentes lenguajes artísticos y corporales.",
                                "Crea **estrategias de juego** y **soluciones motrices** innovadoras ante situaciones imprevistas, basándose en la comprensión de las reglas y la lógica interna de la actividad."
                            ],
                            "4°": [
                                "Demuestra **control** y **dominio** de su motricidad en la ejecución de habilidades motrices especializadas, aplicándolas en situaciones de confrontación, cooperación y oposición.",
                                "Evalúa los factores que **limitan o potencian** su desempeño motor (aptitud física, estado emocional, técnica) y diseña planes de mejora a largo plazo.",
                                "Sustenta la importancia de la **expresión corporal** como medio de comunicación y valoración de la identidad cultural, a partir del análisis de diversas manifestaciones motrices.",
                                "Aplica la **resolución de problemas** en la práctica de actividades físicas, tomando decisiones con autonomía y mostrando perseverancia para superar desafíos complejos."
                            ],
                            "5°": [
                                "Demuestra **maestría** y **creatividad** en la ejecución de habilidades motrices de alta complejidad en la práctica deportiva y recreativa, adaptándose a diversos entornos.",
                                "Evalúa críticamente sus **hábitos de vida** y su impacto en el desarrollo de su potencial motor y su calidad de vida, proponiendo ajustes sostenibles.",
                                "Diseña e implementa **programas de entrenamiento** físico, deportivo o expresivo, considerando sus características personales y las demandas de la actividad.",
                                "Argumenta la importancia de la **motricidad** como **fundamento del desarrollo humano** y promueve la participación de la comunidad en actividades físicas y deportivas."
                            ]
                        }
                    },
                    {
                        id: "ef-s-c2",
                        nombre: "Asume una vida saludable",
                        capacidades: [
                            "Comprende las relaciones entre la actividad física, alimentación, postura e higiene personal y del ambiente, y la salud",
                            "Incorpora prácticas que mejoran su calidad de vida"
                        ],
                        estandares: {
                            "Ciclo VI": "Asume una vida saludable cuando comprende los beneficios que la práctica de actividad física produce sobre su salud, para mejorar su calidad de vida. Conoce su estado nutricional e identifica los beneficios nutritivos y el origen de los alimentos, promueve el consumo de alimentos de su región, analiza la proporción adecuada de ingesta para mejorar su rendimiento físico y mental. Analiza los hábitos perjudiciales para su organismo. Realiza prácticas de higiene personal y del ambiente. Adopta posturas adecuadas para evitar lesiones y accidentes en la práctica de actividad física y en la vida cotidiana. Realiza prácticas que ayuden a mejorar sus capacidades físicas con las que regula su esfuerzo controlando su frecuencia cardiaca y respiratoria, al participar en sesiones de actividad física de diferente intensidad.",
                            "Ciclo VII": "Asume una vida saludable cuando evalúa sus necesidades calóricas y toma en cuenta su gasto calórico diario, los alimentos que consume, su origen e inocuidad, y las características de la actividad física que practica. Elabora un programa de actividad física y alimentación saludable, interpretando los resultados de las pruebas de aptitud física, entre otras, para mantener y/o mejorar su bienestar. Participa regularmente en sesiones de actividad física de diferente intensidad y promueve campañas donde se promocione la salud integrada al bienestar colectivo."
                        }
                        , // <-- No olvides la coma al unirlo con el resto de tu archivo
                        desempenos: {
                            "1°": [
                                "Describe y valora la importancia del **cuidado de su cuerpo** (higiene, alimentación, descanso) y las **posturas adecuadas** en la prevención de enfermedades y lesiones.",
                                "Identifica los **alimentos saludables** y los que no lo son, y propone dietas equilibradas que respondan a sus necesidades energéticas y requerimientos nutricionales.",
                                "Aplica las **medidas de seguridad** y **prevención** adecuadas antes, durante y después de la práctica de actividad física, reconociendo las señales de riesgo de su cuerpo (dolor, fatiga).",
                                "Describe los **beneficios** de la actividad física para su **salud física y mental**, y establece metas personales a corto plazo para mejorar sus hábitos."
                            ],
                            "2°": [
                                "Evalúa sus **hábitos de alimentación** e **higiene personal** y propone cambios para mantener un **peso saludable** y mejorar su calidad de vida.",
                                "Realiza **ejercicios de calentamiento** y **vuelta a la calma** de forma autónoma, y explica su importancia en la prevención de lesiones y la recuperación física.",
                                "Comprende y utiliza **indicadores de la salud** (frecuencia cardíaca, índice de masa corporal-IMC) para evaluar su estado físico e interpretar los resultados de pruebas de aptitud física.",
                                "Argumenta la importancia de la **hidratación** y el **descanso** en la recuperación física y mental, y propone estrategias para mantener un equilibrio en su vida diaria."
                            ],
                            "3°": [
                                "Diseña un **plan de vida saludable** que integre la **alimentación, la actividad física, la higiene y el descanso**, y lo comparte con sus pares y su familia.",
                                "Evalúa los **riesgos** de las **drogas, el alcohol y el tabaco** en la salud, y promueve estilos de vida activos y saludables en su comunidad.",
                                "Aplica **técnicas de relajación** y **respiración** para controlar su estrés y mejorar su estado de ánimo antes, durante y después de la práctica de actividad física.",
                                "Utiliza la información sobre la **composición corporal** y el **gasto calórico** para ajustar su dieta y su plan de actividad física a sus objetivos de salud."
                            ],
                            "4°": [
                                "Sustenta, con conocimiento científico, la importancia de la **actividad física** para la prevención de enfermedades crónicas (diabetes, hipertensión, obesidad) y la promoción del bienestar.",
                                "Evalúa los **programas de actividad física** ofrecidos en su comunidad, identificando sus **beneficios y limitaciones** en función de sus necesidades.",
                                "Diseña y aplica **rutinas de ejercicios** para el desarrollo de sus capacidades físicas (fuerza, resistencia, flexibilidad), considerando principios de entrenamiento (progresión, variedad).",
                                "Analiza críticamente los **mensajes publicitarios** relacionados con la salud y el *fitness*, y toma decisiones informadas sobre el consumo de productos o suplementos."
                            ],
                            "5°": [
                                "Diseña e implementa un **estilo de vida activo y saludable** a largo plazo, asumiendo un rol de promotor en su entorno, basado en la ciencia y la experiencia.",
                                "Evalúa el **impacto social** y **ambiental** de sus hábitos de consumo y actividad física, y propone alternativas sostenibles.",
                                "Argumenta la importancia de la **salud integral** (física, mental y social) como un derecho y un factor de desarrollo humano, y participa en acciones de sensibilización.",
                                "Adapta y aplica sus conocimientos sobre **primeros auxilios** y **reanimación cardiopulmonar (RCP)** en situaciones de emergencia, demostrando liderazgo y responsabilidad."
                            ]
                        }
                    },
                    {
                        id: "ef-s-c3",
                        nombre: "Interactúa a través de sus habilidades sociomotrices",
                        capacidades: [
                            "Se relaciona utilizando sus habilidades sociomotrices",
                            "Crea y aplica estrategias y tácticas de juego"
                        ],
                        estandares: {
                            "Ciclo VI": "Interactúa a través de sus habilidades sociomotrices con autonomía en situaciones que no le son favorables y asume con una actitud de liderazgo los desafíos propios de la práctica de actividades físicas, experimentando el placer y disfrute que ellas representan. Formula y aplica estrategias para solucionar problemas individuales y colectivos, incorporando elementos técnicos y tácticos pertinentes y adecuándose a los cambios que se dan en la práctica. Analiza los posibles aciertos y dificultades ocurridos durante la práctica para mejorar la estrategia de juego.",
                            "Ciclo VII": "Interactúa a través de sus habilidades sociomotrices integrando a todas las personas de la comunidad educativa en eventos lúdico deportivos y promoviendo la práctica de actividad física basada en el disfrute, la tolerancia, equidad de género, inclusión y respeto, asumiendo su responsabilidad durante todo el proceso. Propone sistemas tácticos de juego en la resolución de problemas y los adecua según las necesidades del entorno, asumiendo y adjudicando roles y funciones bajo un sistema de juego que vincula las habilidades y capacidades de cada uno de los integrantes del equipo en la práctica de diferentes actividades físicas."
                        }
                        , // <-- No olvides la coma al unirlo con el resto de tu archivo
                        desempenos: {
                            "1°": [
                                "Participa activamente en **juegos cooperativos** y de **oposición**, asumiendo diferentes roles y valorando el aporte de sus compañeros en el logro de objetivos comunes.",
                                "Acepta y utiliza las **reglas** establecidas en diferentes actividades físicas y juegos, reconociendo la necesidad de normas para la convivencia.",
                                "Resuelve **conflictos** mediante el **diálogo** y la **negociación**, respetando las diferencias y promoviendo la inclusión de todos en las actividades.",
                                "Utiliza **estrategias básicas** de cooperación y oposición en juegos predeportivos, respetando a sus compañeros y mostrando **tolerancia** a la frustración."
                            ],
                            "2°": [
                                "Aplica **estrategias ofensivas y defensivas** básicas en **juegos deportivos** (fútbol, vóley, básquet), adaptándolas a las necesidades del equipo y las características del oponente.",
                                "Demuestra **empatía** y **asertividad** al interactuar con sus compañeros, reconociendo las emociones y estados de ánimo del otro en la situación de juego.",
                                "Crea y aplica **reglas** de juego o actividad física, buscando el **consenso** y la **equidad** para la participación de todos los integrantes del grupo.",
                                "Evalúa los **acuerdos** y **normas** establecidos en el grupo, y propone modificaciones para mejorar la convivencia y la dinámica del juego."
                            ],
                            "3°": [
                                "Organiza y dirige **actividades físicas grupales** y **eventos deportivos** o recreativos, promoviendo la **inclusión** y la participación equitativa de todos.",
                                "Aplica **estrategias de cooperación y oposición** complejas en deportes colectivos, reconociendo la funcionalidad de la estructura y la dinámica del equipo.",
                                "Evalúa la **calidad de las interacciones** en el grupo, identificando los factores que favorecen o dificultan el trabajo en equipo, y propone acciones para fortalecer la **cohesión grupal**.",
                                "Asume **roles de liderazgo** y **seguimiento** con responsabilidad, demostrando **autocontrol** y **respeto** en situaciones de alta tensión o conflicto."
                            ],
                            "4°": [
                                "Diseña y gestiona **proyectos deportivos** o **recreativos** para su comunidad, promoviendo valores y la participación activa de sus miembros.",
                                "Aplica **estrategias sofisticadas** de juego en deportes complejos (ataque, defensa, transición), anticipando las acciones del oponente y las necesidades del equipo.",
                                "Argumenta la importancia de los **valores** (fair play, respeto, honestidad) en la práctica deportiva y su impacto en la formación ciudadana.",
                                "Fomenta la **cultura de la paz** y la **resolución pacífica de conflictos** en el ámbito deportivo y social, a través del diálogo y la mediación."
                            ],
                            "5°": [
                                "Evalúa la **dimensión ética y social** de la práctica deportiva a nivel local, nacional y global, y promueve el deporte como medio de **inclusión** y **desarrollo sostenible**.",
                                "Lidera la **organización** y **ejecución** de actividades físicas y deportivas que promuevan la **salud** y el **bien común** en su comunidad, con autonomía y responsabilidad.",
                                "Aplica y evalúa **modelos de juego** o **estrategias sociomotrices** complejas, adaptándolas a las características del contexto y del grupo de participantes.",
                                "Diseña **códigos de convivencia** basados en principios éticos y democráticos, y los promueve en su entorno para garantizar un ambiente de respeto e igualdad."
                            ]
                        }
                    }
                ]
            },
            "Comunicación": {
                competencias: [
                    {
                        id: "com-s-c1",
                        nombre: "Se comunica oralmente en su lengua materna",
                        capacidades: [
                            "Obtiene información del texto oral",
                            "Infiere e interpreta información del texto oral",
                            "Adecúa, organiza y desarrolla las ideas de forma coherente y cohesionada",
                            "Utiliza recursos no verbales y paraverbales de forma estratégica",
                            "Interactúa estratégicamente con distintos interlocutores",
                            "Reflexiona y evalúa la forma, el contenido y contexto del texto oral"
                        ],
                        estandares: {
                            "Ciclo VI": "Se comunica oralmente mediante diversos tipos de textos; infiere el tema, propósito, hechos y conclusiones a partir de información explícita e implícita, e interpreta la intención del interlocutor en discursos que contienen ironías y sesgos. Organiza y desarrolla sus ideas en torno a un tema y las relaciona mediante el uso de diversos conectores y referentes, así como de un vocabulario variado y pertinente. Enfatiza significados mediante el uso de recursos no verbales y paraverbales. Reflexiona sobre el texto y evalúa su fiabilidad de acuerdo a sus conocimientos y al contexto sociocultural. Se expresa adecuándose a situaciones comunicativas formales e informales. En un intercambio, hace preguntas y utiliza las respuestas escuchadas para desarrollar sus ideas y sus contribuciones, tomando en cuenta los puntos de vista de otros.",
                            "Ciclo VII": "Se comunica oralmente mediante diversos tipos de textos; infiere información relevante y conclusiones e interpreta la intención del interlocutor y las relaciones de poder en discursos que contienen sesgos, falacias y ambigüedades. Se expresa adecuándose a situaciones comunicativas formales e informales y a los géneros discursivos orales en que participa. Organiza y desarrolla sus ideas en torno a un tema y las relaciona mediante el uso de diversos recursos cohesivos; incorpora un vocabulario especializado y enfatiza los significados mediante el uso de recursos no verbales y paraverbales. Reflexiona sobre el texto y evalúa la validez de la información y su efecto en los interlocutores, de acuerdo a sus conocimientos, fuentes de información y al contexto sociocultural. En un intercambio, hace contribuciones relevantes y evalúa las ideas de los otros para contraargumentar, eligiendo estratégicamente cómo y en qué momento participa."
                        }
                        , // <-- No olvides la coma al unirlo con el resto de tu archivo
                        desempenos: {
                            "1°": [
                                "Expresa oralmente ideas y emociones de forma coherente y cohesionada, utilizando vocabulario de uso frecuente y manteniendo el hilo temático.",
                                "Emplea recursos no verbales (gestos, movimientos) y paraverbales (entonación, volumen) de forma estratégica, para enfatizar o atenuar el sentido de su mensaje.",
                                "Interactúa en diversas situaciones orales (conversaciones, diálogos), formulando preguntas y participando de forma pertinente para ampliar la información.",
                                "Opina como hablante y oyente sobre la adecuación, coherencia y cohesión de textos orales del ámbito escolar, identificando información explícita e implícita."
                            ],
                            "2°": [
                                "Organiza y desarrolla sus ideas en torno a un tema, utilizando vocabulario variado y pertinente, y manteniendo la coherencia y cohesión de su discurso.",
                                "Adapta su texto oral a la situación comunicativa (formal/informal) y al género discursivo (exposición, debate), y utiliza sinónimos y antónimos para la precisión léxica.",
                                "Opina sobre el contenido, la intención y el efecto de los textos orales que escucha, evaluando la validez y la fiabilidad de la información.",
                                "Argumenta su postura sobre temas controversiales, considerando información diversa y su propósito comunicativo, y llega a consensos con sus interlocutores."
                            ],
                            "3°": [
                                "Expresa ideas y emociones con claridad y fluidez, estructurando su discurso para persuadir o conmover, y utilizando estrategias de argumentación (ejemplos, citas).",
                                "Utiliza estratégicamente recursos verbales, no verbales y paraverbales para enfatizar o atenuar el sentido de su texto oral, y mantiene la atención de su audiencia.",
                                "Evalúa la eficacia del texto oral, el rol de los interlocutores y el efecto de los recursos empleados, y reflexiona sobre las implicancias éticas del discurso.",
                                "Delibera sobre diversos asuntos públicos, fundamentando su posición con argumentos y contraargumentos sólidos, y promueve el diálogo en la búsqueda del bien común."
                            ],
                            "4°": [
                                "Evalúa, de forma crítica, la información y los argumentos de textos orales, distinguiendo los hechos de las opiniones, los discursos de poder y las falacias.",
                                "Organiza y expone ideas y teorías con rigurosidad y precisión, adaptando su registro al contexto y a los destinatarios (académico, especializado).",
                                "Intercambia puntos de vista, refutando las ideas contrarias con solidez, y mostrando respeto por las ideas diferentes en situaciones de debate y controversia.",
                                "Reflexiona sobre las implicancias éticas y sociales de los textos orales en la vida social y cultural, y propone acciones para el uso responsable de la palabra."
                            ],
                            "5°": [
                                "Se expresa con fluidez, dicción y volumen adecuados a la situación, utilizando un lenguaje formal y especializado, y manteniendo la consistencia de su tesis.",
                                "Evalúa la validez de los argumentos y la información, analizando el rol del emisor, sus intenciones y la influencia de su contexto socio-cultural.",
                                "Organiza y desarrolla un discurso académico o especializado, utilizando estrategias retóricas y recursos verbales, no verbales y paraverbales de nivel avanzado.",
                                "Propone y gestiona proyectos de comunicación oral (debates, conversatorios, *podcasts*) para la difusión de ideas o la solución de problemas sociales."
                            ]
                        }
                    },
                    {
                        id: "com-s-c2",
                        nombre: "Lee diversos tipos de textos escritos en su lengua materna",
                        capacidades: [
                            "Obtiene información del texto escrito",
                            "Infiere e interpreta información del texto",
                            "Reflexiona y evalúa la forma, el contenido y contexto del texto escrito"
                        ],
                        estandares: {
                            "Ciclo VI": "Lee diversos tipos de texto con estructuras complejas y vocabulario variado. Integra información contrapuesta que está en distintas partes del texto. Interpreta el texto considerando información relevante y complementaria para construir su sentido global, valiéndose de otros textos. Reflexiona sobre formas y contenidos del texto a partir de su conocimiento y experiencia. Evalúa el uso del lenguaje, la intención de los recursos textuales y el efecto del texto en el lector a partir de su conocimiento y del contexto sociocultural.",
                            "Ciclo VII": "Lee diversos tipos de textos con estructuras complejas, vocabulario variado y especializado. Integra información contrapuesta y ambigua que está en distintas partes del texto. Interpreta el texto considerando información relevante y de detalle para construir su sentido global, valiéndose de otros textos y reconociendo distintas posturas y sentidos. Reflexiona sobre formas y contenidos del texto y asume una posición sobre las relaciones de poder que este presenta. Evalúa el uso del lenguaje, la validez de la información, el estilo del texto, la intención de estrategias discursivas y recursos textuales. Explica el efecto del texto en el lector a partir de su conocimiento y del contexto sociocultural en el que fue escrito."
                        }
                        , // <-- No olvides la coma al unirlo con el resto de tu archivo
                        desempenos: {
                            "1°": [
                                "Identifica información explícita, relevante y complementaria en textos con varios elementos complejos en su estructura, y distingue lo principal de lo secundario.",
                                "Infiere información (características de personajes, causas y consecuencias, el propósito comunicativo) del texto, a partir de indicios y estructuras textuales.",
                                "Opina sobre el tema, género, y estructura del texto, explicando sus preferencias como lector y justificando su posición con argumentos extraídos del texto.",
                                "Explica la relación entre el título, la organización del texto y las imágenes que lo acompañan, y el efecto que produce el texto en el lector."
                            ],
                            "2°": [
                                "Localiza información explícita e implícita en textos con estructuras complejas y vocabulario variado, e integra datos que se encuentran en diversas partes del texto para construir el sentido.",
                                "Infiere e interpreta el sentido figurado, la ironía y el doble sentido, y explica la intención del autor, la relación entre los argumentos y las conclusiones.",
                                "Opina sobre el sentido global del texto, la intención del autor y el efecto que produce en el lector, evaluando la eficacia de los recursos textuales.",
                                "Explica la intención del autor, la relación entre los argumentos y las conclusiones, y la eficacia de los recursos textuales, contrastando diversas interpretaciones."
                            ],
                            "3°": [
                                "Integra información relevante y contradictoria de diversas secciones del texto para construir el sentido global, y evalúa la fiabilidad de las fuentes de información.",
                                "Interpreta el sentido figurado, la ironía, los dobles sentidos y la crítica social en textos de diversa índole, y los relaciona con su contexto socio-cultural.",
                                "Contrasta e integra información de múltiples textos sobre un mismo tema, identificando las semejanzas y diferencias en las perspectivas y el tratamiento del tema.",
                                "Reflexiona sobre la forma y contenido del texto, asumiendo una posición sustentada sobre la ideología, los valores y las representaciones sociales que el autor transmite."
                            ],
                            "4°": [
                                "Determina la estructura y tipología textual de textos con estructura compleja y desarrollo temático especializado (artículos científicos, ensayos), y explica sus características.",
                                "Infiere e interpreta el sentido global del texto, explicando las diversas y complejas relaciones lógicas entre las ideas (causa-efecto, problema-solución, etc.).",
                                "Evalúa la fiabilidad, validez y utilidad de la información de diversas fuentes, identificando sesgos, falacias y ambigüedades en la argumentación.",
                                "Justifica la elección de textos para la investigación, valorando la perspectiva cultural y social que ofrecen, y las contrasta con sus propias ideas y conocimientos."
                            ],
                            "5°": [
                                "Evalúa la estructura, tipología y recursos estilísticos de textos de alta complejidad, y las estrategias utilizadas para la persuasión o el entretenimiento.",
                                "Contrasta las fuentes de información, reconociendo los diferentes puntos de vista y la influencia de los contextos socio-culturales en la construcción del significado.",
                                "Argumenta su posición crítica sobre las ideas, los temas y la intencionalidad del autor, sustentándola en fuentes y conocimientos sólidos y especializados.",
                                "Crea hipótesis de lectura y las contrasta con el desarrollo del texto para establecer conclusiones sobre el sentido profundo y la trascendencia de la obra."
                            ]
                        }
                    },
                    {
                        id: "com-s-c3",
                        nombre: "Escribe diversos tipos de textos en su lengua materna",
                        capacidades: [
                            "Adecúa el texto a la situación comunicativa",
                            "Organiza y desarrolla las ideas de forma coherente y cohesionada",
                            "Utiliza convenciones del lenguaje escrito de forma pertinente",
                            "Reflexiona y evalúa la forma, el contenido y contexto del texto escrito"
                        ],
                        estandares: {
                            "Ciclo VI": "Escribe diversos tipos de textos de forma reflexiva. Adecúa su texto al destinatario, propósito y el registro a partir de su experiencia previa y de fuentes de información complementarias. Organiza y desarrolla lógicamente las ideas en torno a un tema, y las estructura en párrafos y subtítulos de acuerdo a algunos géneros discursivos. Establece relaciones entre ideas a través del uso adecuado de varios tipos de conectores, referentes y emplea vocabulario variado. Utiliza recursos ortográficos y textuales para separar y aclarar expresiones e ideas, así como diferenciar el significado de las palabras con la intención de darle claridad y sentido a su texto. Reflexiona y evalúa de manera permanente la coherencia y cohesión de las ideas en el texto que escribe, así como el uso del lenguaje para argumentar, reforzar o sugerir sentidos y producir diversos efectos en el lector según la situación comunicativa.",
                            "Ciclo VII": "Escribe diversos tipos de textos de forma reflexiva. Adecúa su texto al destinatario, propósito y el registro a partir de su experiencia previa, de fuentes de información complementarias y divergentes, y de su conocimiento del contexto histórico y sociocultural. Organiza y desarrolla lógicamente las ideas en torno a un tema, y las estructura en párrafos, capítulos o apartados de acuerdo a distintos géneros discursivos. Establece relaciones entre ideas a través del uso preciso de diversos recursos cohesivos. Emplea vocabulario variado, especializado y preciso, así como una variedad de recursos ortográficos y textuales para darle claridad y sentido a su texto. Reflexiona y evalúa de manera permanente la validez de la información, la coherencia y cohesión de las ideas en el texto que escribe; controla el lenguaje para contraargumentar, reforzar o sugerir sentidos y producir diversos efectos en el lector según la situación comunicativa."
                        }
                        , // <-- No olvides la coma al unirlo con el resto de tu archivo
                        desempenos: {
                            "1°": [
                                "Adecúa el texto a la situación comunicativa, el destinatario y el propósito, eligiendo el tipo de texto y el formato más apropiado (digital o impreso).",
                                "Organiza y desarrolla las ideas de forma coherente y cohesionada, estableciendo relaciones lógicas básicas (causa-consecuencia, adición, contraste).",
                                "Utiliza un vocabulario pertinente y variado, y emplea los recursos gramaticales y ortográficos de forma precisa (reglas generales de acentuación, puntuación).",
                                "Revisa su texto para mejorar su sentido, coherencia, cohesión y adecuación al propósito comunicativo, a partir de la evaluación con otros lectores."
                            ],
                            "2°": [
                                "Utiliza registro formal e informal según el destinatario y el contexto, y selecciona un tipo de texto (narrativo, expositivo, argumentativo) para el desarrollo de sus ideas.",
                                "Desarrolla ideas secundarias y terciarias para sustentar las ideas principales, y utiliza conectores lógicos y referentes para la cohesión del texto.",
                                "Emplea figuras retóricas y vocabulario especializado para caracterizar personajes, describir paisajes y persuadir al lector.",
                                "Evalúa la pertinencia y eficacia de sus recursos textuales para lograr su propósito, y corrige errores ortográficos y gramaticales complejos."
                            ],
                            "3°": [
                                "Planifica la escritura de diversos tipos de texto (ensayos, artículos de opinión, reseñas), considerando las características del género discursivo y el impacto esperado.",
                                "Construye argumentos y contraargumentos sólidos, utilizando información de diversas fuentes y citando de manera adecuada según convenciones (APA, MLA).",
                                "Utiliza un registro especializado y un vocabulario variado, y aplica las normas gramaticales y ortográficas en el uso de tildes y signos de puntuación complejos.",
                                "Evalúa si su texto responde a la situación comunicativa y al propósito, y reelabora párrafos para mejorar la claridad y la fuerza argumentativa del mensaje."
                            ],
                            "4°": [
                                "Propone un tema original para su texto, seleccionando información relevante de fuentes confiables y de perspectiva multidisciplinaria para la sustentación.",
                                "Sustenta una postura ética, a través de la elaboración de textos argumentativos de estructura compleja y rigurosidad conceptual (tesis, cuerpo argumentativo, conclusión).",
                                "Utiliza un vocabulario académico y recursos retóricos avanzados (anáforas, ironías) para matizar o enfatizar el sentido de su texto.",
                                "Evalúa la solidez y validez de su texto, revisando la coherencia lógica de sus argumentos y la pertinencia de las fuentes citadas, para la versión final."
                            ],
                            "5°": [
                                "Escribe textos de alta demanda cognitiva y académica (monografías, artículos de investigación), adaptando su estilo y registro a las normas de citación internacional.",
                                "Sistematiza información, integrando ideas y conceptos de diversas teorías y autores para desarrollar un tema con profundidad y originalidad.",
                                "Utiliza la terminología precisa y un lenguaje denotativo para asegurar la objetividad y rigurosidad de su texto, evitando ambigüedades.",
                                "Publica y difunde sus textos en diversos medios (digitales o impresos), gestionando el proceso de edición y revisión final con autonomía y responsabilidad."
                            ]
                        }
                    }
                ]
            },
            "Arte y Cultura": {
                competencias: [
                    {
                        id: "arte-s-c1",
                        nombre: "Aprecia de manera crítica manifestaciones artístico-culturales",
                        capacidades: [
                            "Percibe manifestaciones artístico-culturales",
                            "Contextualiza las manifestaciones artístico-culturales",
                            "Reflexiona creativa y críticamente sobre las manifestaciones artístico-culturales"
                        ],
                        estandares: {
                            "Ciclo VI": "Aprecia de manera crítica manifestaciones artístico-culturales cuando describe las características fundamentales de los diversos lenguajes del arte y las culturas que los producen, y las asocia a experiencias, mensajes, emociones e ideas, siendo consciente de que generan diferentes reacciones e interpretaciones en las personas. Investiga las creencias, cosmovisiones, tradiciones y la función social de manifestaciones artístico-culturales de diversos tiempos y lugares y distingue las diferentes maneras en que se usa el arte para representar y reflejar la identidad de un grupo de personas. Integra la información recogida para describir la complejidad y la riqueza de la obra, así como para generar hipótesis sobre el significado y la intención del artista. Evalúa la eficacia del uso de las técnicas utilizadas en relación a las intenciones específicas.",
                            "Ciclo VII": "Aprecia de manera crítica manifestaciones artístico-culturales cuando reconoce en estas la función comunicativa de los elementos y códigos de los lenguajes de las artes de diversas épocas y lugares; comprende que generan diferentes reacciones en las personas y que existen diferentes maneras de interpretarlas según los referentes socioculturales de las personas que las aprecian. Investiga el impacto de los medios de comunicación, los cambios sociales y tecnológicos en las manifestaciones artístico-culturales contemporáneas y compara las diversas funciones que ha cumplido el arte en una variedad de contextos sociales, culturales e históricos. Integra la información recogida y describe cómo una manifestación artístico-cultural nos reta a interpretar sus ideas y significados. Evalúa la eficacia del uso de las técnicas utilizadas en comparación con la intención de la obra, de otros trabajos y artistas afines y hace comentarios sobre los impactos que puede tener una manifestación sobre aquellos que las observan o experimentan."
                        }
                        , // <-- No olvides la coma al unirlo con el resto de tu archivo
                        desempenos: {
                            "1°": [
                                "Describe las **características** de diversas manifestaciones artístico-culturales (danza, música, teatro, artes visuales) y las relaciona con su **contexto** de origen (histórico, social, cultural).",
                                "**Interpreta** las cualidades expresivas de los elementos del arte (línea, color, forma, movimiento) y las **intenciones** del artista o colectivo en la obra.",
                                "Opina sobre los **mensajes, ideas y sentimientos** que transmiten las manifestaciones artísticas, y argumenta sobre su contribución a la **identidad personal y cultural**.",
                                "Identifica los **criterios utilizados** para evaluar una manifestación artística y los aplica al emitir un **juicio de valor** sobre su calidad y significado."
                            ],
                            "2°": [
                                "Analiza las **relaciones** entre las manifestaciones artístico-culturales y el **contexto** en el que se originan, identificando influencias mutuas y transformaciones.",
                                "Interpreta las **formas en que se representa la realidad** y la diversidad cultural en diversas obras, y explica cómo contribuyen a la **memoria histórica** y al **patrimonio**.",
                                "Evalúa la **función social, política y económica** de las manifestaciones artísticas, y el impacto que tienen en su comunidad y la sociedad.",
                                "Argumenta su **posición crítica** sobre las ideas y valores presentes en diversas obras, y contrasta las intenciones del artista con las interpretaciones del público."
                            ],
                            "3°": [
                                "Evalúa las **permanencias y cambios** en las manifestaciones artístico-culturales a través del tiempo y el espacio, y explica cómo reflejan la **diversidad cultural** de una región o país.",
                                "Analiza los **elementos, principios y códigos** de diversas manifestaciones artísticas, y explica cómo se utilizan para **comunicar mensajes complejos** y estéticos.",
                                "Investiga y sustenta la importancia de la **conservación** y **difusión** del patrimonio cultural, y propone acciones para su valoración y protección.",
                                "Asume una **postura ética** al reflexionar sobre los **estereotipos, prejuicios y sesgos** presentes en algunas manifestaciones artísticas y mediáticas."
                            ],
                            "4°": [
                                "Evalúa el **impacto** de las **nuevas tecnologías** en la creación y difusión de manifestaciones artístico-culturales, y analiza las transformaciones en la experiencia estética.",
                                "Interpreta la **complejidad** de las **obras contemporáneas** (arte conceptual, *performance*, instalaciones) y las relaciona con las **problemáticas sociales** y culturales actuales.",
                                "Argumenta la importancia de la **interculturalidad** en la producción artística, y explica cómo el diálogo entre culturas enriquece las formas de expresión.",
                                "Juzga la **eficacia simbólica** y la **coherencia** de los recursos utilizados por el artista para la construcción de su mensaje, y valora la **originalidad** de la propuesta."
                            ],
                            "5°": [
                                "Sustenta, con **argumentos teóricos y estéticos**, la relación entre las manifestaciones artístico-culturales y las **tendencias históricas y filosóficas** que las influyen (modernidad, posmodernidad).",
                                "Evalúa la **función del arte** como **agente de cambio social y político**, y analiza la forma en que los artistas cuestionan el *statu quo* o promueven la reflexión.",
                                "Investiga y argumenta sobre la **vigencia y relevancia** del patrimonio cultural inmaterial (tradiciones, saberes, rituales) para el desarrollo sostenible y la identidad nacional.",
                                "Crea un **juicio de valor fundamentado** sobre la calidad estética, la originalidad y la trascendencia de una manifestación artística, comparándola con referentes universales."
                            ]
                        }
                    },
                    {
                        id: "arte-s-c2",
                        nombre: "Crea proyectos desde los lenguajes artísticos",
                        capacidades: [
                            "Explora y experimenta los lenguajes del arte",
                            "Aplica procesos creativos",
                            "Evalúa y socializa sus procesos y proyectos"
                        ],
                        estandares: {
                            "Ciclo VI": "Crea proyectos artísticos individuales o colaborativos que representan y comunican ideas e intenciones específicas. Selecciona, experimenta y usa los elementos del arte, los medios, materiales, herramientas, técnicas y procedimientos apropiados para sus necesidades de expresión y comunicación. Genera o desarrolla ideas investigando una serie de recursos asociados a conceptos, técnicas o problemas específicos personales o sociales. Planifica, diseña, improvisa y manipula elementos de los diversos lenguajes del arte para explorar el potencial de sus ideas e incorpora influencias de su propia cultura y de otras. Registra las etapas de sus procesos de creación y reflexiona sobre la efectividad de sus proyectos, modificándolos de manera continua para lograr sus intenciones. Establece estrategias de mejora para que sus proyectos tengan un mayor impacto a futuro. Planifica la presentación de sus proyectos considerando su intención y el público al que se dirige.",
                            "Ciclo VII": "Crea proyectos artísticos que comunican de manera efectiva ideas o asuntos pertinentes a su realidad y a audiencias en particular. Selecciona y prueba nuevas maneras de combinar elementos de los diversos lenguajes artísticos para lograr sus propósitos comunicativos y expresivos. Experimenta con medios convencionales y no convencionales, materiales y técnicas de acuerdo a sus intenciones y muestra dominio en su uso y el desarrollo inicial de un estilo personal. Innova y toma riesgos para concretizar sus ideas y va modificando sus trabajos de acuerdo a descubrimientos que surgen en el proceso de creación artística. Genera ideas de manera interdisciplinaria y planifica proyectos artísticos de manera individual o colaborativa. Utiliza una variedad de referentes culturales, tomando en cuenta tanto prácticas tradicionales como nuevas tecnologías. Toma decisiones al combinar y manipular los elementos del arte para encontrar la manera más efectiva de comunicar mensajes, experiencias, ideas y sentimientos. Registra de manera visual y escrita los procesos usados en el desarrollo de sus propios trabajos. Planifica y adecúa sus presentaciones de acuerdo al público. Evalúa la efectividad de su proyecto, describiendo el impacto del proyecto para él mismo y para la comunidad."
                        }
                        , // <-- No olvides la coma al unirlo con el resto de tu archivo
                        desempenos: {
                            "1°": [
                                "**Explora y experimenta** con los elementos de los lenguajes artísticos (sonido, cuerpo, movimiento, color, material) para **generar ideas** que respondan a un estímulo o tema.",
                                "**Planifica y elabora** un proyecto artístico (dibujo, pintura, *collage*, danza simple), seleccionando y organizando materiales y herramientas de forma segura.",
                                "**Registra y socializa** sus procesos y hallazgos, y aplica técnicas básicas de **autoevaluación** para introducir cambios y mejoras en su trabajo.",
                                "Presenta sus trabajos a la comunidad escolar, y explica la **intención comunicativa** y las **decisiones tomadas** en el proceso creativo."
                            ],
                            "2°": [
                                "**Genera ideas** a partir de la **observación de manifestaciones culturales** y de su entorno, y las **desarrolla en un proyecto** integrando diferentes lenguajes artísticos.",
                                "**Elabora proyectos** que reflejan su **identidad** y **sentido de pertenencia**, seleccionando y combinando elementos de diferentes culturas y épocas.",
                                "**Documenta** de manera visual o escrita su **proceso creativo**, e incorpora **elementos de la tecnología** (edición de fotos, videos, audios) para la producción.",
                                "**Evalúa** la **eficacia** de sus creaciones, analizando las reacciones del público y utilizando criterios de **coherencia y originalidad** para su mejora."
                            ],
                            "3°": [
                                "**Investiga y experimenta** con **recursos y técnicas tradicionales y contemporáneas** (tinta china, *stop motion*, *land art*) para expresar ideas y emociones complejas.",
                                "**Desarrolla proyectos artísticos** que **cuestionan o reflexionan** sobre temas sociales y ambientales de su comunidad, utilizando el arte como medio de expresión y crítica.",
                                "**Diseña y gestiona** la **presentación** de su obra (montaje de exposición, puesta en escena), considerando el espacio y los recursos necesarios.",
                                "**Evalúa la funcionalidad** y el **impacto** de su proyecto, reflexionando sobre la **influencia de su contexto** en la obra y en las interpretaciones."
                            ],
                            "4°": [
                                "**Planifica la creación** de proyectos artísticos **interdisciplinarios** (música y poesía, teatro y video), utilizando **procesos de investigación** y **experimentación avanzada**.",
                                "**Elabora propuestas estéticas** que reflejan su **visión personal** y **filosófica** del mundo, integrando elementos simbólicos y metafóricos en la composición.",
                                "**Utiliza software especializado** (diseño gráfico, edición musical o audiovisual) para la producción y postproducción de su obra, alcanzando **altos estándares técnicos**.",
                                "**Evalúa y autoevalúa** el **proceso** y el **producto** de su creación, argumentando la **intención comunicativa** y la **originalidad** de su propuesta estética."
                            ],
                            "5°": [
                                "**Genera propuestas innovadoras** para la creación artística, explorando la **intersección** de los **lenguajes artísticos** y las **nuevas tecnologías** (realidad virtual, inteligencia artificial).",
                                "**Lidera la gestión** de **proyectos culturales** o **artísticos** a nivel local o regional (festival, *performance* masivo), asumiendo la responsabilidad ética y social.",
                                "**Argumenta** y **sustenta** la **visión estética y conceptual** que da origen a su obra, relacionándola con corrientes artísticas, teorías y filosofías.",
                                "**Difunde y promueve** su creación y la de su colectivo en diversos **espacios culturales y mediáticos**, ejerciendo su rol como **agente cultural**."
                            ]
                        }
                    }
                ]
            },

            "Inglés": {
                competencias: [
                    {
                        id: "ing-s-c1",
                        nombre: "Se comunica oralmente en inglés como lengua extranjera",
                        capacidades: [
                            "Obtiene información de textos orales",
                            "Infiere e interpreta información de textos orales",
                            "Adecúa, organiza y desarrolla las ideas de forma coherente y cohesionada",
                            "Utiliza recursos no verbales y paraverbales de forma estratégica",
                            "Interactúa estratégicamente con distintos interlocutores",
                            "Reflexiona y evalúa la forma, el contenido y el contexto del texto oral"
                        ],
                        estandares: {
                            "Ciclo VI": "Se comunica oralmente mediante diversos tipos de textos en inglés. Infiere el tema, propósito, hechos y conclusiones a partir de información explícita e interpreta la intención del interlocutor. Se expresa adecuando el texto a situaciones comunicativas cotidianas usando pronunciación y entonación adecuadas; organiza y desarrolla ideas en torno a un tema central haciendo uso de algunos conectores coordinados y subordinados incluyendo vocabulario cotidiano y construcciones gramaticales determinadas y pertinentes. Utiliza recursos no verbales y paraverbales para dar énfasis a su texto. Opina sobre lo escuchado haciendo uso de sus conocimientos del tema. En un intercambio, participa formulando y respondiendo preguntas sobre actividades diarias, eventos pasados y temas de interés personal.",
                            "Ciclo VII": "Se comunica oralmente mediante diversos tipos de textos en inglés. Infiere el tema, propósito, hechos y conclusiones a partir de información implícita y explícita e interpreta la intención del interlocutor. Se expresa adecuando el texto a situaciones comunicativas formales e informales usando pronunciación y entonación inteligibles; organiza y desarrolla ideas en torno a un tema y las relaciona haciendo uso de algunos recursos cohesivos, vocabulario variado y construcciones gramaticales determinadas y pertinentes. Utiliza recursos no verbales y paraverbales para garantizar la pertinencia del mensaje. Reflexiona y evalúa sobre lo escuchado haciendo uso de sus conocimientos sobre el tema. En un intercambio, participa formulando y respondiendo preguntas sobre temas que le son conocidos o habituales y evalúa las respuestas escuchadas para dar sus aportes tomando en cuenta los puntos de vista de otros."
                        }
                        , // <-- No olvides la coma al unirlo con el resto de tu archivo
                        desempenos: {
                            "1°": [
                                "Intercambia información personal y familiar simple, usando vocabulario de uso frecuente y estructuras gramaticales básicas (presente simple, *to be*).",
                                "Participa en conversaciones breves sobre temas conocidos, realizando preguntas y respondiendo de forma pertinente, aunque con apoyo.",
                                "Utiliza recursos no verbales (gestos, contacto visual) y paraverbales (entonación, volumen) para apoyar su mensaje, aunque con algunas dudas.",
                                "Comprende ideas principales e información específica en diálogos y exposiciones breves sobre temas cotidianos (rutinas, gustos)."
                            ],
                            "2°": [
                                "Expresa sus ideas y emociones sobre temas de interés personal y social, adaptando su mensaje a la situación comunicativa, con un vocabulario más amplio.",
                                "Participa en interacciones de duración media, siguiendo la secuencia y aportando comentarios relevantes, manejando las interrupciones.",
                                "Utiliza estructuras gramaticales variadas (pasado simple, futuro con *going to*), aunque puede cometer errores que no afectan la comprensión.",
                                "Evalúa la coherencia y cohesión de textos orales sencillos, identificando el propósito y el punto de vista del hablante."
                            ],
                            "3°": [
                                "Organiza y desarrolla sus ideas de forma clara y coherente en presentaciones y conversaciones sobre temas abstractos y concretos.",
                                "Interactúa con fluidez y naturalidad, iniciando, manteniendo y cerrando conversaciones de forma efectiva, y maneja el lenguaje de transición.",
                                "Utiliza una pronunciación generalmente clara y entonación adecuada, y maneja recursos verbales y no verbales de manera estratégica.",
                                "Comprende el sentido global y detalles específicos en discursos extensos y complejos, identificando la intención del hablante y su tono."
                            ],
                            "4°": [
                                "Expresa ideas, sentimientos y opiniones con precisión, justificando sus argumentos de forma estructurada y convincente, utilizando vocabulario preciso.",
                                "Participa en debates y discusiones, refutando ideas y proponiendo alternativas de solución, manteniendo el respeto y la cortesía.",
                                "Adapta su discurso a diversos contextos y audiencias (formal/informal, académico/social), utilizando un registro adecuado.",
                                "Evalúa críticamente la información de textos orales complejos (noticias, conferencias), identificando sesgos, prejuicios y falacias."
                            ],
                            "5°": [
                                "Se comunica con espontaneidad, fluidez y precisión, utilizando un lenguaje flexible y eficaz para fines sociales, académicos y profesionales.",
                                "Negocia y gestiona interacciones complejas, resolviendo malentendidos y adaptando su estilo y registro a la situación comunicativa.",
                                "Argumenta y defiende sus puntos de vista en profundidad, utilizando vocabulario especializado y variado, y estructuras gramaticales complejas.",
                                "Comprende y evalúa discursos complejos sobre una amplia gama de temas, incluyendo el lenguaje figurado y las implicancias culturales."
                            ]
                        }
                    },
                    {
                        id: "ing-s-c2",
                        nombre: "Lee diversos tipos de textos escritos en inglés como lengua extranjera",
                        capacidades: [
                            "Obtiene información del texto escrito",
                            "Infiere e interpreta información del texto",
                            "Reflexiona y evalúa la forma, el contenido y contexto del texto"
                        ],
                        estandares: {
                            "Ciclo VI": "Lee críticamente diversos tipos de textos en inglés que presentan estructuras simples y algunos elementos complejos con vocabulario cotidiano. Obtiene información e integra datos que están en distintas partes del texto. Realiza inferencias locales a partir de información explícita e implícita e interpreta el texto seleccionando información relevante y complementaria. Reflexiona sobre aspectos variados del texto evaluando el uso del lenguaje y la intención de los recursos textuales más comunes a partir de su conocimiento y experiencia.",
                            "Ciclo VII": "Lee críticamente diversos tipos de textos en inglés con algunas estructuras complejas y vocabulario variado y especializado. Integra información contrapuesta ubicada en distintas partes del texto. Interpreta el texto integrando la idea principal con información específica para construir su sentido global. Reflexiona sobre las formas y contenidos del texto. Evalúa el uso del lenguaje y los recursos textuales así como el efecto del texto en el lector a partir de su conocimiento y del contexto sociocultural."
                        }
                        , // <-- No olvides la coma al unirlo con el resto de tu archivo
                        desempenos: {
                            "1°": [
                                "Identifica información explícita y relevante en textos breves y sencillos (avisos, descripciones, correos electrónicos).",
                                "Infiere el significado de palabras y frases desconocidas con ayuda de imágenes y el contexto inmediato.",
                                "Reconoce la estructura y características básicas de textos sencillos (párrafos cortos, títulos, listas).",
                                "Opina de forma básica sobre el contenido del texto, relacionándolo con sus experiencias previas."
                            ],
                            "2°": [
                                "Localiza información específica en textos de mediana extensión con vocabulario de uso frecuente y estructuras recurrentes.",
                                "Infiere el propósito comunicativo del texto, el significado de expresiones idiomáticas comunes y las relaciones lógicas (causa-efecto).",
                                "Reconoce la organización de textos expositivos y narrativos (introducción, desarrollo, conclusión), y las utiliza para mejorar la comprensión.",
                                "Opina sobre el contenido y la intención del autor, justificando su posición con información extraída del texto."
                            ],
                            "3°": [
                                "Integra información explícita e implícita de diversas partes del texto para construir el sentido global, incluyendo textos con vocabulario menos común.",
                                "Interpreta ideas principales y secundarias en textos extensos (artículos, reportajes), y establece relaciones de contraste y comparación.",
                                "Evalúa la fiabilidad y validez de la información, distinguiendo hechos de opiniones en textos argumentativos.",
                                "Reflexiona sobre el contenido y la forma del texto, valorando la perspectiva del autor y el contexto cultural en el que fue producido."
                            ],
                            "4°": [
                                "Evalúa la estructura y el registro de textos complejos y especializados (ensayos, informes), y comprende las ideas abstractas y los conceptos técnicos.",
                                "Contrasta información de múltiples textos sobre un mismo tema, identificando las semejanzas y diferencias en los puntos de vista.",
                                "Analiza las estrategias discursivas utilizadas por el autor para persuadir o influir en el lector (uso de evidencias, tono, metáforas).",
                                "Argumenta su posición crítica sobre el texto, sustentándola con conocimientos y fuentes externas de forma estructurada."
                            ],
                            "5°": [
                                "Sintetiza y evalúa información de textos académicos y literarios de alta complejidad, reconociendo el tono y el propósito sutil del autor.",
                                "Interpreta el lenguaje figurado, las referencias culturales y las implicancias filosóficas en textos de diferentes géneros y épocas.",
                                "Evalúa críticamente las fuentes de información, reconociendo sesgos ideológicos, prejuicios y la manipulación de datos.",
                                "Crea hipótesis de lectura y las contrasta con el desarrollo del texto para establecer conclusiones profundas sobre su significado y trascendencia."
                            ]
                        }
                    },
                    {
                        id: "ing-s-c3",
                        nombre: "Escribe diversos tipos de textos en inglés como lengua extranjera",
                        capacidades: [
                            "Adecúa el texto a la situación comunicativa",
                            "Organiza y desarrolla las ideas de forma coherente y cohesionada",
                            "Utiliza convenciones del lenguaje escrito de forma pertinente",
                            "Reflexiona y evalúa la forma, el contenido y contexto del texto escrito"
                        ],
                        estandares: {
                            "Ciclo VI": "Escribe diversos tipos de textos de mediana extensión en inglés. Adecúa su texto al destinatario, propósito y registro a partir de su experiencia previa y fuentes de información básica. Organiza y desarrolla sus ideas en torno a un tema central y los estructura en uno o dos párrafos. Relaciona sus ideas a través del uso de algunos recursos cohesivos (sinónimos, pronominalización y conectores aditivos, adversativos, temporales y causales) con vocabulario cotidiano y pertinente y construcciones gramaticales simples y de mediana complejidad. Utiliza recursos ortográficos que permiten claridad en sus textos. Reflexiona sobre el contenido del texto y evalúa el uso de algunos recursos formales.",
                            "Ciclo VII": "Escribe diversos tipos de textos de amplia extensión de forma reflexiva en inglés. Adecúa su texto al destinatario, propósito y registro a partir de su experiencia previa y fuentes de información variada. Organiza y desarrolla sus ideas alrededor de un tema central y las estructuras en párrafos y subtítulos. Relaciona sus ideas a través del uso de algunos recursos cohesivos (sinónimos, antónimos, pronominalización y conectores aditivos, adversativos, temporales, condicionales, disyuntivos y causales) con vocabulario variado y pertinente a la temática tratada y construcciones gramaticales de mediana complejidad. Utiliza recursos ortográficos que permiten claridad en sus textos. Reflexiona sobre el texto que escribe y evalúa los usos del lenguaje con la finalidad de mejorar el texto que escribe en inglés."
                        }
                        , // <-- No olvides la coma al unirlo con el resto de tu archivo
                        desempenos: {
                            "1°": [
                                "Escribe textos breves y sencillos (notas, postales, mensajes) para informar sobre su entorno inmediato y sus intereses.",
                                "Organiza sus ideas con una estructura simple, utilizando vocabulario básico y conectores elementales (*and, but, or*).",
                                "Utiliza recursos gramaticales y ortográficos de uso frecuente (uso de mayúsculas, signos de puntuación) de forma generalmente correcta.",
                                "Revisa su texto para mejorar la claridad y la coherencia, con ayuda de un diccionario o compañero."
                            ],
                            "2°": [
                                "Escribe textos de mediana extensión (descripciones, biografías cortas, *emails*), adaptando el registro al destinatario (formal/informal).",
                                "Desarrolla ideas principales y secundarias de forma coherente, utilizando conectores temporales y de secuencia (*then, first, after that*).",
                                "Utiliza vocabulario variado y estructuras gramaticales más complejas (tiempos verbales simples y compuestos) con un nivel de error que no impide la comunicación.",
                                "Evalúa la pertinencia de su vocabulario y la precisión de sus estructuras, corrigiendo los errores que afectan el sentido."
                            ],
                            "3°": [
                                "Escribe diversos tipos de texto (ensayos cortos, cartas formales, *reviews*), demostrando un buen manejo de la estructura textual del género.",
                                "Organiza y desarrolla sus ideas con claridad y cohesión, utilizando conectores lógicos para establecer relaciones de causa, contraste y adición.",
                                "Utiliza un vocabulario preciso y variado, y aplica las normas ortográficas y de puntuación de la lengua inglesa de forma consistente.",
                                "Revisa su texto, evaluando la claridad y la fuerza de su argumentación, y mejorando el estilo y la fluidez."
                            ],
                            "4°": [
                                "Escribe textos complejos y bien estructurados (informes, artículos de opinión), seleccionando información relevante de diversas fuentes.",
                                "Sustenta su punto de vista con argumentos sólidos y evidencias, y utiliza citas y referencias bibliográficas de forma básica y pertinente.",
                                "Utiliza un registro formal y académico, empleando *phrasal verbs* y expresiones idiomáticas de forma adecuada y precisa.",
                                "Evalúa el impacto de su texto en el lector y realiza ajustes para asegurar que el mensaje sea persuasivo y coherente con su propósito."
                            ],
                            "5°": [
                                "Produce textos de alta complejidad (propuestas de investigación, trabajos monográficos), con un estilo personal y adaptado a las convenciones académicas.",
                                "Desarrolla una tesis con argumentos y contraargumentos, y utiliza diversas estrategias retóricas (analogías, metáforas) para enriquecer el texto.",
                                "Utiliza un vocabulario amplio y preciso, y un dominio excelente de la gramática, demostrando un control consistente de la estructura de la lengua.",
                                "Publica sus textos en diversos medios, gestionando el proceso de edición y revisión final con autonomía y rigor académico."
                            ]
                        }
                    }
                ]
            },

            "Matemática": {
                competencias: [
                    {
                        id: "mat-s-c1",
                        nombre: "Resuelve problemas de cantidad",
                        capacidades: [
                            "Traduce cantidades a expresiones numéricas",
                            "Comunica su comprensión sobre los números y las operaciones",
                            "Usa estrategias y procedimientos de estimación y cálculo",
                            "Argumenta afirmaciones sobre las relaciones numéricas y las operaciones"
                        ],
                        estandares: {
                            "Ciclo VI": "Resuelve problemas referidos a las relaciones entre cantidades o magnitudes, traduciéndolas a expresiones numéricas y operativas con números naturales, enteros y racionales, y descuentos porcentuales sucesivos, verificando si estas expresiones cumplen con las condiciones iniciales del problema. Expresa su comprensión de la relación entre los órdenes del sistema de numeración decimal con las potencias de base diez, y entre las operaciones con números enteros y racionales; y las usa para interpretar enunciados o textos diversos de contenido matemático. Representa relaciones de equivalencia entre expresiones decimales, fraccionarias y porcentuales, entre unidades de masa, tiempo y monetarias; empleando lenguaje matemático. Selecciona, emplea y combina recursos, estrategias, procedimientos, y propiedades de las operaciones y de los números para estimar o calcular con enteros y racionales; y realizar conversiones entre unidades de masa, tiempo y temperatura; verificando su eficacia. Plantea afirmaciones sobre los números enteros y racionales, sus propiedades y relaciones, y las justifica mediante ejemplos y sus conocimientos de las operaciones, e identifica errores o vacíos en las argumentaciones propias o de otros y las corrige.",
                            "Ciclo VII": "Resuelve problemas referidos a las relaciones entre cantidades muy grandes o muy pequeñas, magnitudes o intercambios financieros, traduciéndolas a expresiones numéricas y operativas con números irracionales o racionales, notación científica, intervalos, y tasas de interés simple y compuesto. Evalúa si estas expresiones cumplen con las condiciones iniciales del problema. Expresa su comprensión de los números racionales e irracionales, de sus operaciones y propiedades, así como de la notación científica; establece relaciones de equivalencia entre múltiplos y submúltiplos de unidades de masa, y tiempo, y entre escalas de temperatura, empleando lenguaje matemático y diversas representaciones; basado en esto interpreta e integra información contenida en varias fuentes de información. Selecciona, combina y adapta variados recursos, estrategias y procedimientos matemáticos de cálculo y estimación para resolver problemas, los evalúa y opta por aquellos más idóneos según las condiciones del problema. Plantea y compara afirmaciones sobre números racionales y sus propiedades, formula enunciados opuestos o casos especiales que se cumplen entre expresiones numéricas; justifica, comprueba o descarta la validez de la afirmación mediante contraejemplos o propiedades matemáticas."
                        }
                        , // <-- No olvides la coma al unirlo con el resto de tu archivo
                        desempenos: {
                            "1°": [
                                "Establece relaciones entre datos y acciones de **comparar, igualar, agregar, quitar y repartir** cantidades, y las transforma a expresiones numéricas (modelos) con números enteros y racionales.",
                                "Expresa con **diversas representaciones** y **lenguaje matemático** su comprensión de las operaciones con números enteros, propiedades de las potencias y notación científica.",
                                "Selecciona, emplea y combina estrategias de **cálculo mental, escrito** y **estimación** para realizar operaciones con números enteros y racionales.",
                                "Plantea **afirmaciones** sobre las propiedades de los números y las operaciones, y **justifica** la elección de procedimientos de cálculo, usando ejemplos."
                            ],
                            "2°": [
                                "Establece relaciones entre datos y acciones de **ordenar, comparar** y **representar** cantidades muy grandes o muy pequeñas, y las transforma a expresiones con números racionales y potencias.",
                                "Expresa con **diversas representaciones** y **lenguaje algebraico** su comprensión del conjunto de los números racionales, sus operaciones y sus propiedades.",
                                "Selecciona, emplea y combina estrategias de cálculo, **estimación** y **procedimientos diversos** para realizar operaciones y simplificar expresiones con números racionales.",
                                "Plantea **afirmaciones** sobre las relaciones de orden entre números racionales, y **justifica** la validez de sus procedimientos y resultados."
                            ],
                            "3°": [
                                "Establece relaciones entre datos y acciones de **agrupar** y **representar** grandes cantidades, y las transforma a expresiones con **números irracionales** y **logaritmos**.",
                                "Expresa con **diversas representaciones** y **lenguaje algebraico** su comprensión del conjunto de los números reales, sus operaciones y sus propiedades (radicales y exponentes).",
                                "Selecciona, emplea y combina estrategias de **cálculo, estimación** y **procedimientos diversos** para simplificar expresiones con números reales y resolver ecuaciones irracionales.",
                                "Plantea **afirmaciones** sobre las propiedades de los números reales y las operaciones, y **justifica** su validez, contrastando ejemplos y contraejemplos."
                            ],
                            "4°": [
                                "Establece relaciones entre datos y acciones de **analizar** el **crecimiento o decrecimiento** de cantidades, y las transforma a expresiones con **números reales** y **modelos exponenciales**.",
                                "Expresa con **diversas representaciones** y **lenguaje matemático** su comprensión del interés simple y compuesto, el valor futuro y los conceptos financieros.",
                                "Selecciona y emplea estrategias de **cálculo y razonamiento** para resolver problemas de gestión financiera, **interés compuesto** y **amortización**.",
                                "Plantea **afirmaciones** sobre la **viabilidad financiera** de proyectos o inversiones, y **justifica** sus predicciones, analizando la tasa de interés y el tiempo."
                            ],
                            "5°": [
                                "Establece relaciones entre datos de **incertidumbre** y **modelos probabilísticos**, y las transforma a expresiones con **números reales** en el contexto de la **estadística inferencial**.",
                                "Expresa con **diversas representaciones** y **lenguaje matemático** su comprensión de los sistemas de numeración y el análisis combinatorio, y los aplica a la resolución de problemas.",
                                "Selecciona, emplea y combina estrategias de **cálculo avanzado** (cálculo de límites, derivadas) para resolver problemas de optimización en diferentes contextos.",
                                "Plantea **afirmaciones** sobre las propiedades de los números complejos y las estructuras algebraicas, y **justifica** su validez y su utilidad en la modelación de fenómenos físicos."
                            ]
                        }
                    },
                    {
                        id: "mat-s-c2",
                        nombre: "Resuelve problemas de regularidad, equivalencia y cambio",
                        capacidades: [
                            "Traduce datos y condiciones a expresiones algebraicas y gráficas",
                            "Comunica su comprensión sobre las relaciones algebraicas",
                            "Usa estrategias y procedimientos para encontrar reglas generales",
                            "Argumenta afirmaciones sobre relaciones de cambio y equivalencia"
                        ],
                        estandares: {
                            "Ciclo VI": "Resuelve problemas referidos a interpretar cambios constantes o regularidades entre magnitudes, valores o entre expresiones; traduciéndolas a patrones numéricos y gráficos, progresiones aritméticas, ecuaciones e inecuaciones con una incógnita, funciones lineales y afín, y relaciones de proporcionalidad directa e inversa. Comprueba si la expresión algebraica usada expresó o reprodujo las condiciones del problema. Expresa su comprensión de: la relación entre función lineal y proporcionalidad directa; las diferencias entre una ecuación e inecuación lineal y sus propiedades; la variable como un valor que cambia; el conjunto de valores que puede tomar un término desconocido para verificar una inecuación; las usa para interpretar enunciados, expresiones algebraicas o textos diversos de contenido matemático. Selecciona, emplea y combina recursos, estrategias, métodos gráficos y procedimientos matemáticos para determinar el valor de términos desconocidos en una progresión aritmética, simplificar expresiones algebraicas y dar solución a ecuaciones e inecuaciones lineales, y evaluar funciones lineales. Plantea afirmaciones sobre propiedades de las progresiones aritméticas, ecuaciones e inecuaciones así como de una función lineal, lineal afín con base a sus experiencias, y las justifica mediante ejemplos y propiedades matemáticas; encuentra errores o vacíos en las argumentaciones propias y las de otros y las corrige.",
                            "Ciclo VII": "Resuelve problemas referidos a analizar cambios continuos o periódicos, o regularidades entre magnitudes, valores o expresiones, traduciéndolas a expresiones algebraicas que pueden contener la regla general de progresiones geométricas, sistema de ecuaciones lineales, ecuaciones y funciones cuadráticas y exponenciales. Evalúa si la expresión algebraica reproduce las condiciones del problema. Expresa su comprensión de la regla de formación de sucesiones y progresiones geométricas; la solución o conjunto solución de sistemas de ecuaciones lineales e inecuaciones; la diferencia entre una función lineal y una función cuadrática y exponencial y sus parámetros; las usa para interpretar enunciados o textos o fuentes de información usando lenguaje matemático y gráficos. Selecciona, combina y adapta variados recursos, estrategias y procedimientos matemáticos para determinar términos desconocidos en progresiones geométricas, solucionar ecuaciones lineales o cuadráticas, simplificar expresiones usando identidades algebraicas; evalúa y opta por aquellos más idóneos según las condiciones del problema. Plantea afirmaciones sobre enunciados opuestos o casos especiales que se cumplen entre expresiones algebraicas; así como predecir el comportamiento de variables; comprueba o descarta la validez de la afirmación mediante contraejemplos y propiedades matemáticas."
                        }
                        , // <-- No olvides la coma al unirlo con el resto de tu archivo
                        desempenos: {
                            "1°": [
                                "Establece relaciones de equivalencia y las transforma a **ecuaciones lineales** con una variable, o a **inecuaciones** de primer grado.",
                                "Expresa con **lenguaje algebraico** y **diversas representaciones** su comprensión de la **relación funcional** lineal y sus propiedades (pendiente, intercepto).",
                                "Selecciona y emplea estrategias de **tanteo, ensayo y error** o **métodos formales** para resolver ecuaciones e inecuaciones lineales.",
                                "Plantea **afirmaciones** sobre la **regularidad** o el **patrón** de una secuencia o una función lineal, y **justifica** la equivalencia de sus expresiones algebraicas."
                            ],
                            "2°": [
                                "Establece relaciones entre datos y valores desconocidos y las transforma a **sistemas de ecuaciones lineales** con dos variables o a **funciones cuadráticas**.",
                                "Expresa con **lenguaje algebraico** y **gráficos** su comprensión del **sistema de ecuaciones** y las **propiedades** de la función cuadrática (vértice, eje de simetría).",
                                "Selecciona y emplea estrategias de **sustitución, igualación o reducción** para resolver sistemas de ecuaciones lineales y gráfica para funciones cuadráticas.",
                                "Plantea **afirmaciones** sobre el **conjunto solución** de un sistema de ecuaciones o la **variación** de una función cuadrática, y **justifica** su validez."
                            ],
                            "3°": [
                                "Establece relaciones entre magnitudes y las transforma a **funciones exponenciales** o **logarítmicas**, identificando la variación directa o inversa.",
                                "Expresa con **lenguaje algebraico** y **tablas** su comprensión del dominio y rango de las funciones, y las transforma a **progresiones aritméticas** y **geométricas**.",
                                "Selecciona y emplea estrategias de **análisis de la gráfica** y **propiedades** de los exponentes y logaritmos para resolver ecuaciones exponenciales.",
                                "Plantea **afirmaciones** sobre el **comportamiento** de una función (crecimiento, decrecimiento) y **justifica** la **generalización** de un patrón o progresión."
                            ],
                            "4°": [
                                "Establece relaciones entre datos de fenómenos periódicos y los transforma a **funciones trigonométricas** (seno, coseno, tangente).",
                                "Expresa con **lenguaje algebraico** y **gráficos** su comprensión del **periodo, amplitud** y **fase** de las funciones trigonométricas en la modelación de fenómenos.",
                                "Selecciona y emplea estrategias de **identidades trigonométricas** para simplificar expresiones y resolver ecuaciones trigonométricas.",
                                "Plantea **afirmaciones** sobre la **periodicidad** de un fenómeno y **justifica** la elección del modelo funcional (trigonométrico) para representarlo."
                            ],
                            "5°": [
                                "Establece relaciones entre datos y las transforma a **límites, derivadas e integrales**, en la modelación de fenómenos de cambio continuo.",
                                "Expresa con **lenguaje algebraico** y **gráficos** su comprensión del concepto de **derivada** como tasa de cambio instantánea y de la **integral** como área bajo la curva.",
                                "Selecciona y emplea estrategias del **cálculo diferencial e integral** para resolver problemas de optimización, tasas relacionadas y áreas de regiones no convencionales.",
                                "Plantea **afirmaciones** sobre los **puntos críticos** (máximos y mínimos) de una función y **justifica** su validez en el contexto del problema."
                            ]
                        }
                    },
                    {
                        id: "mat-s-c3",
                        nombre: "Resuelve problemas de forma, movimiento y localización",
                        capacidades: [
                            "Modela objetos con formas geométricas y sus transformaciones",
                            "Comunica su comprensión sobre las formas y relaciones geométricas",
                            "Usa estrategias y procedimientos para orientarse en el espacio",
                            "Argumenta afirmaciones sobre relaciones geométricas"
                        ],
                        estandares: {
                            "Ciclo VI": "Resuelve problemas en los que modela las características de objetos mediante prismas, pirámides y polígonos, sus elementos y propiedades, y la semejanza y congruencia de formas geométricas; así como la ubicación y movimiento mediante coordenadas en el plano cartesiano, mapas y planos a escala, y transformaciones. Expresa su comprensión de las formas congruentes y semejantes, la relación entre una forma geométrica y sus diferentes perspectivas; usando dibujos y construcciones. Clasifica prismas, pirámides y polígonos, según sus propiedades. Selecciona y emplea estrategias, procedimientos y recursos para determinar la longitud, área o volumen de formas geométricas en unidades convencionales y para construir formas geométricas a escala. Plantea afirmaciones sobre la semejanza y congruencia de formas, relaciones entre áreas de formas geométricas; las justifica mediante ejemplos y propiedades geométricas.",
                            "Ciclo VII": "Resuelve problemas en los que modela las características de objetos con formas geométricas compuestas, cuerpos de revolución, sus elementos y propiedades, líneas, puntos notables, relaciones métricas de triángulos, distancia entre dos puntos, ecuación de la recta y parábola; la ubicación, distancias inaccesibles, movimiento y trayectorias complejas de objetos mediante coordenadas cartesianas, razones trigonométricas, mapas y planos a escala. Expresa su comprensión de la relación entre las medidas de los lados de un triángulo y sus proyecciones, la distinción entre trasformaciones geométricas que conservan la forma de aquellas que conservan las medidas de los objetos, y de cómo se generan cuerpos de revolución, usando construcciones con regla y compás. Clasifica polígonos y cuerpos geométricos según sus propiedades, reconociendo la inclusión de una clase en otra. Selecciona, combina y adapta variadas estrategias, procedimientos y recursos para determinar la longitud, perímetro, área o volumen de formas compuestas, así como construir mapas a escala, homotecias e isometrías. Plantea y compara afirmaciones sobre enunciados opuestos o casos especiales de las propiedades de las formas geométricas; justifica, comprueba o descarta la validez de la afirmación mediante contraejemplos o propiedades geométricas."
                        }
                        , // <-- No olvides la coma al unirlo con el resto de tu archivo
                        desempenos: {
                            "1°": [
                                "Establece relaciones entre las **propiedades de objetos** y las transforma a representaciones de **formas bidimensionales** y **tridimensionales** (prismas, pirámides, polígonos).",
                                "Expresa con **dibujos, construcciones y lenguaje geométrico** su comprensión de las propiedades de las **figuras planas** y los **sólidos geométricos**.",
                                "Selecciona y emplea estrategias de **medición** y **visualización** para calcular el **perímetro, área** y **volumen** de figuras y cuerpos.",
                                "Plantea **afirmaciones** sobre las propiedades de las formas geométricas a partir de la **exploración** o la **observación**, y **justifica** la clasificación de los sólidos."
                            ],
                            "2°": [
                                "Establece relaciones entre las **propiedades de la forma** y las transforma a **relaciones de semejanza** y **congruencia** entre triángulos y figuras.",
                                "Expresa con **dibujos a escala, planos y lenguaje geométrico** su comprensión de las **transformaciones geométricas** (traslación, rotación, reflexión) en el plano cartesiano.",
                                "Selecciona y emplea estrategias de **cálculo, medición** y **construcción** para determinar la **distancia** y el **punto medio** entre dos puntos.",
                                "Plantea **afirmaciones** sobre las **propiedades de la semejanza** y **congruencia** de figuras, y **justifica** la validez de sus construcciones con herramientas de la geometría."
                            ],
                            "3°": [
                                "Establece relaciones entre las **propiedades de las formas** y las transforma a ecuaciones de las **secciones cónicas** (circunferencia, parábola, elipse).",
                                "Expresa con **lenguaje algebraico** y **gráficos** su comprensión de las **razones trigonométricas** de un ángulo en posición normal y las propiedades de los triángulos rectángulos.",
                                "Selecciona y emplea estrategias de **identidades trigonométricas** y **teoremas geométricos** (Pitágoras, Thales) para resolver problemas de distancias y alturas.",
                                "Plantea **afirmaciones** sobre las **propiedades de las cónicas** y **justifica** la validez de sus modelos geométricos para representar objetos y fenómenos reales."
                            ],
                            "4°": [
                                "Establece relaciones entre las **propiedades de las formas** y las transforma a **vectores** en el plano cartesiano y sus operaciones (suma, resta, producto escalar).",
                                "Expresa con **lenguaje vectorial** y **gráficos** su comprensión del concepto de **pendiente** y **ángulo de inclinación** de una recta, y la perpendicularidad.",
                                "Selecciona y emplea estrategias de **geometría analítica** para calcular la **ecuación de la recta** y la distancia de un punto a una recta.",
                                "Plantea **afirmaciones** sobre la **posición relativa** de dos rectas (paralelas, secantes) y **justifica** su validez a partir de las propiedades de sus vectores directores."
                            ],
                            "5°": [
                                "Establece relaciones entre las **propiedades de los objetos** y las transforma a representaciones de **formas tridimensionales complejas** (esfera, cilindro, cono) en el espacio.",
                                "Expresa con **lenguaje vectorial** y **geométrico** su comprensión del concepto de **área de superficie** y **volumen** de los cuerpos de revolución.",
                                "Selecciona y emplea estrategias de **cálculo diferencial** e **integral** para determinar el **volumen** y **centroide** de sólidos generados por revolución.",
                                "Plantea **afirmaciones** sobre la **optimización** de la forma y el espacio, y **justifica** la elección del modelo geométrico para la arquitectura o el diseño."
                            ]
                        }
                    },
                    {
                        id: "mat-s-c4",
                        nombre: "Resuelve problemas de gestión de datos e incertidumbre",
                        capacidades: [
                            "Representa datos con gráficos y medidas estadísticas o probabilísticas",
                            "Comunica la comprensión de los conceptos estadísticos y probabilísticos",
                            "Usa estrategias y procedimientos para recopilar y procesar datos",
                            "Sustenta conclusiones o decisiones basado en información obtenida"
                        ],
                        estandares: {
                            "Ciclo VI": "Resuelve problemas en los que plantea temas de estudio, identificando la población pertinente y las variables cuantitativas continuas, así como cualitativas nominales y ordinales. Recolecta datos mediante encuestas y los registra en tablas de datos agrupados, así también determina la media aritmética y mediana de datos discretos; representa su comportamiento en histogramas, polígonos de frecuencia, gráficos circulares, tablas de frecuencia y medidas de tendencia central; usa el significado de las medidas de tendencia central para interpretar y comparar la información contenida en estos. Basado en ello, plantea y contrasta conclusiones, sobre las características de una población. Expresa la probabilidad de un evento aleatorio como decimal o fracción, así como su espacio muestral; e interpreta que un suceso seguro, probable e imposible, se asocia a los valores entre 0 y 1. Hace predicciones sobre la ocurrencia de eventos y las justifica.",
                            "Ciclo VII": "Resuelve problemas en los que plantea temas de estudio, caracterizando la población y la muestra e identificando las variables a estudiar; empleando el muestreo aleatorio para determinar una muestra representativa. Recolecta datos mediante encuestas y los registra en tablas, determina terciles, cuartiles y quintiles; la desviación estándar, y el rango de un conjunto de datos; representa el comportamiento de estos usando gráficos y medidas estadísticas más apropiadas a las variables en estudio. Interpreta la información contenida en estos, o la información relacionada a su tema de estudio proveniente de diversas fuentes, haciendo uso del significado de la desviación estándar, las medidas de localización estudiadas y el lenguaje estadístico; basado en esto contrasta y justifica conclusiones sobre las características de la población. Expresa la ocurrencia de sucesos dependientes, independientes, simples o compuestos de una situación aleatoria mediante la probabilidad, y determina su espacio muestral; interpreta las propiedades básicas de la probabilidad de acuerdo a las condiciones de la situación; justifica sus predicciones con base a los resultados de su experimento o propiedades."
                        }
                        , // <-- No olvides la coma al unirlo con el resto de tu archivo
                        desempenos: {
                            "1°": [
                                "Representa las características de una población en estudio mediante **variables cualitativas** y **cuantitativas discretas**.",
                                "Expresa la **comprensión** de las **medidas de tendencia central** (media, moda, mediana) para datos no agrupados, y las representa en **tablas** y **gráficos de barras**.",
                                "Selecciona y emplea estrategias para **recopilar datos** (encuestas, observación) y **procesar** la información con el uso de herramientas tecnológicas.",
                                "Plantea **conclusiones** sobre las características de la población, y **justifica** su validez a partir del análisis de las **medidas de tendencia central**."
                            ],
                            "2°": [
                                "Representa las características de una muestra o población mediante **variables cuantitativas continuas** y las organiza en **datos agrupados**.",
                                "Expresa la **comprensión** de las **medidas de dispersión** (rango, desviación estándar) y su utilidad para describir la **variabilidad** de un conjunto de datos.",
                                "Selecciona y emplea estrategias para **diseñar experimentos aleatorios** y **calcular la probabilidad** de eventos simples con la **Regla de Laplace**.",
                                "Plantea **conclusiones** sobre la **dispersión** de los datos y **justifica** la validez de sus predicciones a partir del **cálculo de probabilidades**."
                            ],
                            "3°": [
                                "Representa las características de dos variables mediante **tablas de doble entrada** y **gráficos de dispersión**, identificando la posible **correlación**.",
                                "Expresa la **comprensión** del concepto de **probabilidad condicional** y la **Regla de la Multiplicación** para eventos dependientes e independientes.",
                                "Selecciona y emplea estrategias para **determinar el espacio muestral** y **calcular el número de combinaciones** y **permutaciones** en situaciones aleatorias.",
                                "Plantea **conclusiones** sobre la **asociación** entre dos variables y **justifica** la toma de decisiones a partir de la **probabilidad condicional**."
                            ],
                            "4°": [
                                "Representa las características de una muestra mediante la **distribución normal** y utiliza los **parámetros** para **estandarizar** y **comparar** datos.",
                                "Expresa la **comprensión** del **intervalo de confianza** y el **margen de error** como indicadores de la **fiabilidad** de las estimaciones poblacionales.",
                                "Selecciona y emplea estrategias para **calcular el tamaño muestral** y **diseñar una encuesta** que garantice la **representatividad** de la muestra.",
                                "Plantea **conclusiones** sobre los **parámetros poblacionales** a partir de la muestra, y **justifica** la **inferencia estadística** realizada."
                            ],
                            "5°": [
                                "Representa las características de una población mediante **modelos probabilísticos complejos** (distribución binomial, Poisson, etc.) y la **curva normal**.",
                                "Expresa la **comprensión** del **análisis de regresión** para **modelar la relación** entre variables y **realizar predicciones** a largo plazo.",
                                "Selecciona y emplea estrategias de **análisis multivariado** y **pruebas de hipótesis** para **validar o refutar** afirmaciones sobre la población.",
                                "Plantea **conclusiones** sobre la **significancia estadística** de los resultados y **justifica** la **toma de decisiones** en situaciones de alta incertidumbre."
                            ]
                        }
                    }
                ]
            },
            "Ciencia y Tecnología": {
                competencias: [
                    {
                        id: "cyt-s-c1",
                        nombre: "Indaga mediante métodos científicos para construir sus conocimientos",
                        capacidades: [
                            "Problematiza situaciones para hacer indagación",
                            "Diseña estrategias para hacer indagación",
                            "Genera y registra datos e información",
                            "Analiza datos e información",
                            "Evalúa y comunica el proceso y resultados de su indagación"
                        ],
                        estandares: {
                            "Ciclo VI": "Indaga a partir de preguntas e hipótesis que son verificables de forma experimental o descriptiva con base en su conocimiento científico para explicar las causas o describir el fenómeno identificado. Diseña un plan de recojo de datos con base en observaciones o experimentos. Colecta datos que contribuyan a comprobar o refutar la hipótesis. Analiza tendencias o relaciones en los datos, los interpreta tomando en cuenta el error y reproducibilidad, los interpreta con base en conocimientos científicos y formula conclusiones. Evalúa si sus conclusiones responden a la pregunta de indagación y las comunica. Evalúa la fiabilidad de los métodos y las interpretaciones de los resultados de su indagación.",
                            "Ciclo VII": "Indaga a partir de preguntas y plantea hipótesis con base en conocimientos científicos y observaciones previas. Elabora el plan de observaciones o experimentos y los argumenta utilizando principios científicos y los objetivos planteados. Realiza mediciones y comparaciones sistemáticas que evidencian la acción de diversos tipos de variables. Analiza tendencias y relaciones en los datos tomando en cuenta el error y reproducibilidad, los interpreta con base en conocimientos científicos y formula conclusiones, las argumenta apoyándose en sus resultados e información confiable. Evalúa la fiabilidad de los métodos y las interpretaciones de los resultados de su indagación."
                        }
                        , // <-- No olvides la coma al unirlo con el resto de tu archivo
                        desempenos: {
                            "1°": [
                                "**Formula preguntas** sobre hechos y fenómenos naturales o tecnológicos, e identifica las variables que pueden ser investigadas de forma experimental.",
                                "**Plantea hipótesis** con base en sus conocimientos y las relaciona con la posible causa y efecto de las variables.",
                                "**Elabora el plan de indagación**, seleccionando instrumentos, materiales y procedimientos que permitan manipular la variable independiente y medir la dependiente.",
                                "**Analiza los datos** cualitativos o cuantitativos, y los representa en tablas y gráficos, identificando las relaciones de causalidad.",
                                "**Evalúa** si los datos obtenidos **confirman o refutan su hipótesis**, y comunica sus conclusiones, mencionando las posibles limitaciones."
                            ],
                            "2°": [
                                "**Formula preguntas complejas** y determina las **variables intervinientes** que pueden influir en el resultado de su indagación.",
                                "**Plantea hipótesis operacionales** con variables complejas y **sustenta** su validez con base en principios y leyes científicas.",
                                "**Diseña estrategias** para **controlar las variables intervinientes**, y selecciona instrumentos de medición más precisos, considerando la fiabilidad y validez.",
                                "**Analiza y procesa los datos** utilizando **medidas de tendencia central y dispersión** para determinar la variabilidad y significancia de los resultados.",
                                "**Argumenta** sus conclusiones, **contrastando** sus resultados con las hipótesis y la información científica, y propone nuevas preguntas o mejoras al plan."
                            ],
                            "3°": [
                                "**Justifica** la necesidad de una investigación, identificando las **limitaciones** del conocimiento científico actual sobre el fenómeno.",
                                "**Sustenta** sus hipótesis con **modelos, teorías y leyes científicas**, y utiliza **lenguaje matemático** para expresar las relaciones entre variables.",
                                "**Diseña y ejecuta procedimientos experimentales** complejos, utilizando **modelos a escala o simulaciones**, y aplica principios de ética y seguridad.",
                                "**Interpreta los datos** y evidencias, utilizando **cálculo y razonamiento estadístico** para establecer relaciones causales y correlacionales entre las variables.",
                                "**Evalúa** la **fiabilidad** de los métodos y la **validez** de las conclusiones, y reflexiona sobre las implicancias sociales y ambientales de su indagación."
                            ],
                            "4°": [
                                "**Evalúa la coherencia** entre la pregunta, las hipótesis y los objetivos de la investigación, y propone **problemas científicos** que requieren soluciones innovadoras.",
                                "**Formula modelos predictivos** y **cuantifica** las relaciones entre variables, utilizando **lenguaje de ecuaciones y funciones** avanzadas.",
                                "**Diseña protocolos experimentales** complejos y **sistemáticos**, seleccionando **instrumentos de alta precisión** y aplicando el **método científico** con rigor.",
                                "**Analiza y discrimina** la información obtenida, identificando posibles errores sistemáticos o aleatorios, y aplicando **análisis de regresión** para establecer tendencias.",
                                "**Argumenta** sus conclusiones con base en la **evidencia científica**, discutiendo los resultados a la luz de las **teorías contemporáneas** y las implicancias éticas y sociales."
                            ],
                            "5°": [
                                "**Sustenta y evalúa** la pertinencia y el alcance de las **preguntas y problemas de investigación** que buscan generar nuevo conocimiento en un campo específico.",
                                "**Construye modelos teóricos** para representar la realidad, y **valida sus hipótesis** mediante el uso de **pruebas estadísticas avanzadas** (prueba t de Student, ANOVA).",
                                "**Diseña y gestiona proyectos de investigación científica** a nivel de la comunidad, aplicando **protocolos estandarizados** y principios de bioseguridad.",
                                "**Sintetiza y evalúa críticamente** la evidencia, identificando **patrones de causalidad** y las **incertidumbres** de la investigación para establecer inferencias.",
                                "**Debate y argumenta** la validez y **confiabilidad** de sus resultados, y propone **nuevas líneas de investigación**, promoviendo el conocimiento científico en la sociedad."
                            ]
                        }
                    },
                    {
                        id: "cyt-s-c2",
                        nombre: "Explica el mundo físico basándose en conocimientos sobre los seres vivos, materia y energía, biodiversidad, Tierra y universo",
                        capacidades: [
                            "Comprende y usa conocimientos sobre los seres vivos; materia y energía; biodiversidad, Tierra y universo",
                            "Evalúa las implicancias del saber y del quehacer científico y tecnológico"
                        ],
                        estandares: {
                            "Ciclo VI": "Explica, con base en evidencia con respaldo científico, las relaciones cualitativas y las cuantificables entre: el campo eléctrico con la estructura del átomo, la energía con el trabajo o el movimiento, las funciones de la célula con sus requerimientos de energía y materia, la selección natural o artificial con el origen y evolución de especies, los flujos de materia y energía en la Tierra o los fenómenos meteorológicos con el funcionamiento de la biosfera. Argumenta su posición frente a las implicancias sociales y ambientales de situaciones sociocientíficas o frente a cambios en la cosmovisión suscitados por el desarrollo de la ciencia y tecnología.",
                            "Ciclo VII": "Explica, con base en evidencias con respaldo científico, las relaciones cualitativas y las cuantificables entre: la estructura microscópica de un material y su reactividad con otros materiales o con campos y ondas; la información genética, las funciones de las células con las funciones de los sistemas (homeostasis); el origen de la Tierra, su composición, su evolución física, química y biológica con los registros fósiles. Argumenta su posición frente a las implicancias éticas, sociales y ambientales de situaciones sociocientíficas o frente a cambios en la cosmovisión suscitados por el desarrollo de la ciencia y tecnología."
                        }
                        , // <-- No olvides la coma al unirlo con el resto de su archivo
                        desempenos: {
                            "1°": [
                                "**Describe** la **estructura y función** de los **sistemas biológicos** (célula, tejidos, órganos) y las relaciona con las **funciones vitales** (nutrición, relación, reproducción).",
                                "**Explica** las **propiedades de la materia** (masa, volumen, densidad) y las relaciona con los **cambios físicos y químicos** de la vida cotidiana.",
                                "**Sustenta** cómo las **fuerzas** (gravedad, fricción) y el **movimiento** (rectilíneo uniforme) influyen en los objetos, utilizando **ejemplos** y **lenguaje científico básico**.",
                                "**Analiza** las **causas y consecuencias** de los **fenómenos geológicos** (sismos, vulcanismo) y los relaciona con la estructura interna de la Tierra.",
                                "**Argumenta** la importancia de la **biodiversidad** y el **cuidado del ambiente** a partir del análisis de los **ecosistemas** y la **cadena trófica**."
                            ],
                            "2°": [
                                "**Comprende** la **teoría celular** y explica los procesos de **división celular** (mitosis y meiosis) y su importancia en la herencia y el desarrollo.",
                                "**Explica** la **estructura atómica** (protones, neutrones, electrones) y utiliza la **Tabla Periódica** para predecir las propiedades de los elementos químicos.",
                                "**Sustenta** cómo se produce la **energía** (cinética, potencial, térmica) y cómo se **transforma** en diversos procesos y sistemas.",
                                "**Analiza** el **clima** y los **factores** que lo modifican (latitud, altitud) y el **impacto** de la actividad humana en el **cambio climático**.",
                                "**Argumenta** cómo la **selección natural** y la **adaptación** han influido en la **evolución de las especies** a lo largo del tiempo geológico."
                            ],
                            "3°": [
                                "**Sustenta** los procesos de **homeostasis** y **regulación** en los seres vivos (nervioso, endocrino), y explica las **consecuencias** de su alteración (enfermedades).",
                                "**Explica** los **tipos de enlaces químicos** (iónico, covalente) y la **naturaleza de las reacciones químicas** (balanceo de ecuaciones, estequiometría).",
                                "**Comprende** las leyes de la **dinámica** y las aplica para explicar el movimiento de los cuerpos (Leyes de Newton), utilizando **fórmulas** y **vectores**.",
                                "**Analiza** las **interacciones** entre la **geósfera, hidrósfera y atmósfera** y las relaciona con los **ciclos biogeoquímicos** y el equilibrio del planeta.",
                                "**Argumenta** la importancia de la **biotecnología** y la **ingeniería genética** en la salud, la agricultura y el medio ambiente, reconociendo las implicancias éticas."
                            ],
                            "4°": [
                                "**Evalúa** la **base molecular** de la vida, explicando el rol del **ADN** y **ARN** en la **síntesis de proteínas** y la **expresión de genes**.",
                                "**Sustenta** los principios de la **termodinámica** y el **equilibrio químico** (velocidad de reacción, constante de equilibrio) en los procesos industriales y naturales.",
                                "**Explica** los fundamentos de la **electricidad** y el **magnetismo** (campo eléctrico, corriente eléctrica) y los aplica en el funcionamiento de **dispositivos tecnológicos**.",
                                "**Analiza** los **modelos cosmológicos** (Big Bang, universo estacionario) y **argumenta** sobre el **origen, evolución** y **estructura** del universo.",
                                "**Argumenta** sobre los **riesgos y beneficios** de las **fuentes de energía** (renovable, no renovable) y propone soluciones para la **sostenibilidad energética**."
                            ],
                            "5°": [
                                "**Argumenta** sobre las **teorías contemporáneas** de la **biología molecular** (epigenética, genómica) y su implicancia en la salud humana y la biotecnología.",
                                "**Sustenta** los principios de la **mecánica cuántica** y la **física nuclear** (radiactividad, fusión, fisión) y los relaciona con la **generación de energía** y la **tecnología médica**.",
                                "**Evalúa** los **modelos complejos** que explican el **funcionamiento de los ecosistemas** y las **acciones de conservación** a nivel global (Convenio sobre la Diversidad Biológica).",
                                "**Debate y argumenta** la **posición crítica** sobre las **implicancias éticas y sociales** de los avances científicos (clonación, inteligencia artificial) en la vida humana.",
                                "**Diseña y propone** **soluciones tecnológicas** innovadoras y sostenibles para abordar los **grandes desafíos** del planeta (escasez de agua, contaminación)."
                            ]
                        }
                    },
                    {
                        id: "cyt-s-c3",
                        nombre: "Diseña y construye soluciones tecnológicas para resolver problemas de su entorno",
                        capacidades: [
                            "Determina una alternativa de solución tecnológica",
                            "Diseña la alternativa de solución tecnológica",
                            "Implementa y valida la alternativa de solución tecnológica",
                            "Evalúa y comunica el funcionamiento y los impactos de su alternativa de solución tecnológica"
                        ],
                        estandares: {
                            "Ciclo VI": "Diseña y construye soluciones tecnológicas al delimitar el alcance del problema tecnológico y las causas que lo generan, y propone alternativas de solución basado en conocimientos científicos. Representa la alternativa de solución, a través de esquemas o dibujos incluyendo sus partes o etapas. Establece características de forma, estructura, función y explica el procedimiento, los recursos para implementarlas, así como las herramientas y materiales seleccionados; verifica el funcionamiento de la solución tecnológica, considerando los requerimientos, detecta errores en la selección de materiales, imprecisiones en las dimensiones, procedimientos y realiza ajustes. Explica el procedimiento, conocimiento científico aplicado, así como las dificultades en el diseño e implementación, evalúa el alcance de su funcionamiento a través de pruebas considerando los requerimientos establecidos y propone mejoras. Infiere impactos de la solución tecnológica.",
                            "Ciclo VII": "Diseña y construye soluciones tecnológicas al justificar el alcance del problema tecnológico, determinar la interrelación de los factores involucrados en él y justificar su alternativa de solución basado en conocimientos científicos. Representa la alternativa de solución a través de esquemas o dibujos estructurados a escala, con vistas y perspectivas, incluyendo sus partes o etapas. Establece características de forma, estructura, función y explica el procedimiento, los recursos para implementarlas, así como las herramientas y materiales seleccionados. Verifica el funcionamiento de la solución tecnológica considerando los requerimientos, detecta errores en la selección de materiales, imprecisiones en las dimensiones y procedimientos y realiza ajustes o rediseña su alternativa de solución. Explica el conocimiento científico y el procedimiento aplicado, así como las dificultades del diseño y la implementación, evalúa su funcionamiento, la eficiencia y propone estrategias para mejorarlo. Infiere impactos de la solución tecnológica y elabora estrategias para reducir los posibles efectos negativos."
                        }
                        , // <-- No olvides la coma al unirlo con el resto de su archivo
                        desempenos: {
                            "1°": [
                                "**Determina** la **causa del problema tecnológico** y **propone soluciones** que se basan en conocimientos científicos y tecnológicos básicos (circuitos simples).",
                                "**Diseña la solución tecnológica**, seleccionando herramientas y materiales, y **representa** su idea con **dibujos y diagramas** que incluyen las partes y secuencia de pasos.",
                                "**Construye la solución tecnológica**, siguiendo los pasos del diseño, y **verifica** el funcionamiento de cada parte, aplicando normas de **seguridad**.",
                                "**Evalúa el funcionamiento** y la **eficiencia** de su prototipo, y propone **mejoras** para incrementar su desempeño o **reducir el impacto ambiental**."
                            ],
                            "2°": [
                                "**Describe el problema tecnológico** con mayor precisión, identificando los **requerimientos** que debe cumplir la solución (costo, tiempo, materiales).",
                                "**Diseña la solución**, seleccionando **estrategias de diseño** (módulos, ensamblaje) y **representa** su idea con **diagramas de flujo** o **esquemas** que incluyen mediciones y tolerancias.",
                                "**Construye la solución**, **ajustando** los procedimientos si es necesario, y **evalúa** la **eficacia** de los materiales y herramientas seleccionadas.",
                                "**Evalúa los resultados** de su solución, **contrastando** con los **requerimientos iniciales** y los **beneficios sociales**, y comunica los hallazgos."
                            ],
                            "3°": [
                                "**Justifica** la **alternativa de solución tecnológica** en base a un **análisis de viabilidad** (económica, social, ambiental) y conocimientos científicos relevantes.",
                                "**Diseña la solución** utilizando **simulaciones** o **modelos virtuales**, y **selecciona** materiales, herramientas y técnicas de **producción limpia** y segura.",
                                "**Construye y programa** la solución tecnológica (uso de *software* o microcontroladores) y **ejecuta pruebas** para determinar el nivel de **confiabilidad** y **operatividad**.",
                                "**Evalúa el impacto social** y **ambiental** de su solución, y **argumenta** su **eficiencia** y **sostenibilidad** en comparación con otras alternativas."
                            ],
                            "4°": [
                                "**Formula un problema tecnológico** con **variables complejas** y **sustenta** la necesidad de la solución con **principios de ingeniería** y **datos estadísticos**.",
                                "**Diseña la solución** con **rigor científico**, utilizando **cálculos y representaciones avanzadas** (planos, diseños asistidos por computadora - CAD) y normas de calidad.",
                                "**Construye y valida** la solución tecnológica a través de **pruebas de estrés** y **análisis de fallas** para asegurar su **durabilidad** y **seguridad**.",
                                "**Argumenta la eficiencia** y **eficacia** de la solución, y **reflexiona** sobre los **aspectos éticos** y de **patentes** en el diseño y la producción tecnológica."
                            ],
                            "5°": [
                                "**Sustenta** la **propuesta de valor** de la solución tecnológica, abordando problemas de **alta complejidad** con **innovación** y **visión de futuro**.",
                                "**Diseña la solución** integrando **principios de la robótica, inteligencia artificial y automatización**, y **evalúa** su **escalabilidad** y **aplicabilidad** a nivel global.",
                                "**Gestiona la producción** de la solución tecnológica a nivel de prototipo final, aplicando **estándares internacionales** de calidad y seguridad (ISO).",
                                "**Evalúa la trascendencia** de la solución en la **calidad de vida** y el **desarrollo sostenible**, y **promueve** su uso y difusión en la sociedad."
                            ]
                        }
                    }
                ]
            }
        }
    }
};

// ┌─────────────────────────────────────────────────────────────────────────────┐
// │  FUNCIONES AUXILIARES (Helpers para acceso fácil a los datos)              │
// └─────────────────────────────────────────────────────────────────────────────┘

const helpers = {
    /**
     * Obtiene el ciclo correspondiente a un nivel y grado
     */
    getCiclo: (nivel, grado) => {
        return curriculoData[nivel]?.ciclosPorGrado[grado] || null;
    },

    /**
     * Obtiene los estándares de una competencia para un grado específico
     */
    getEstandar: (nivel, area, competenciaId, grado) => {
        const ciclo = helpers.getCiclo(nivel, grado);
        const competencias = curriculoData[nivel]?.areas[area]?.competencias || [];
        const competencia = competencias.find(c => c.id === competenciaId);
        return competencia?.estandares[ciclo] || null;
    },

    /**
     * Obtiene todas las competencias transversales
     */
    getCompetenciasTransversales: () => {
        return competenciasTransversales;
    },

    /**
     * Obtiene todos los enfoques transversales
     */
    getEnfoquesTransversales: () => {
        return enfoquesTransversales;
    }
};

// ┌─────────────────────────────────────────────────────────────────────────────┐
// │  EXPORTACIÓN                                                                 │
// └─────────────────────────────────────────────────────────────────────────────┘

//module.exports = {
  //  curriculoData,
    //competenciasTransversales,
    //enfoquesTransversales,
    //helpers
//};
