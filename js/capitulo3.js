// ============================================
// PREGUNTAS DEL CAPÍTULO 3 - SURGE LA IGLESIA REMANENTE
// VERSIÓN REDUCIDA - SOLO LO ESENCIAL
// ============================================
const questions = [
    // ============================================
    // SECCIÓN A: EL MENSAJE DEL SEGUNDO ÁNGEL (IDs 1-5)
    // ============================================
    {
        id: 1,
        type: 'multiple',
        question: '¿Qué mensaje proclama el segundo ángel de Apocalipsis 14:8?',
        options: ['Ha llegado la hora del juicio', 'Ha caído Babilonia', 'No recibáis la marca de la bestia', 'Adorad al Creador'],
        correct: 1,
        explanation: 'El segundo ángel declara: "Ha caído, ha caído Babilonia".'
    },
    {
        id: 2,
        type: 'multiple',
        question: '¿En qué año comenzó Guillermo Miller su ministerio público?',
        options: ['1821', '1831', '1840', '1844'],
        correct: 1,
        explanation: 'Miller comenzó su ministerio público en 1831.'
    },
    {
        id: 3,
        type: 'multiple',
        question: '¿Dónde estaba el punto focal de la enseñanza del advenimiento?',
        options: ['California', 'Nueva Inglaterra', 'Pensilvania', 'Virginia'],
        correct: 1,
        explanation: 'El punto focal estaba en Nueva Inglaterra, nordeste de Estados Unidos.'
    },
    {
        id: 4,
        type: 'fill',
        question: 'El segundo ángel proclama: "Ha caído __________, la gran ciudad".',
        correct: ['babilonia'],
        explanation: 'Babilonia.'
    },
    {
        id: 5,
        type: 'fill',
        question: 'Guillermo Miller comenzó su ministerio público en el año __________.',
        correct: ['1831'],
        explanation: '1831.'
    },

    // ============================================
    // SECCIÓN B: LOS CONGRESOS BÍBLICOS (IDs 6-10)
    // ============================================
    {
        id: 6,
        type: 'multiple',
        question: '¿Entre qué años se celebraron los congresos generales de creyentes en el advenimiento?',
        options: ['1831-1835', '1840-1842', '1844-1846', '1848-1850'],
        correct: 1,
        explanation: 'De 1840 a 1842 se celebraron series de congresos generales.'
    },
    {
        id: 7,
        type: 'multiple',
        question: '¿Qué revista era considerada el órgano oficial del grupo?',
        options: ['The Midnight Cry', 'The Advent Herald', 'Signs of the Times', 'The Review and Herald'],
        correct: 2,
        explanation: 'La revista era Signs of the Times.'
    },
    {
        id: 8,
        type: 'multiple',
        question: '¿Qué evento profético ocurrió en 1840 confirmando las profecías?',
        options: ['El terremoto de Lisboa', 'Caída del Imperio Otomano', 'La caída de estrellas', 'El Día Oscuro'],
        correct: 1,
        explanation: 'La pérdida de independencia del Imperio Otomano en 1840.'
    },
    {
        id: 9,
        type: 'multiple',
        question: '¿En qué año terminó el período de 1260 años de dominación papal?',
        options: ['1755', '1780', '1798', '1833'],
        correct: 2,
        explanation: 'Los 1260 años terminaron en 1798 con la cautividad del papa.'
    },
    {
        id: 10,
        type: 'fill',
        question: 'Los congresos bíblicos adventistas se celebraron entre 1840 y __________.',
        correct: ['1842'],
        explanation: 'Hasta 1842.'
    },

    // ============================================
    // SECCIÓN C: LA SEPARACIÓN DE LAS IGLESIAS (IDs 11-15)
    // ============================================
    {
        id: 11,
        type: 'multiple',
        question: '¿En qué año Charles Fitch aplicó el término "Babilonia" a las iglesias protestantes?',
        options: ['1840', '1842', '1843', '1844'],
        correct: 2,
        explanation: 'En el verano de 1843.'
    },
    {
        id: 12,
        type: 'multiple',
        question: '¿Qué familia fue desfraternizada de su iglesia por aceptar el mensaje adventista?',
        options: ['Los Bates', 'Los White', 'Los Harmon', 'Los Andrews'],
        correct: 2,
        explanation: 'La familia Harmon (padres de Elena White) fue desfraternizada.'
    },
    {
        id: 13,
        type: 'multiple',
        question: '¿Cuántos creyentes se habían separado de sus iglesias para el verano de 1844?',
        options: ['10,000', '25,000', '50,000', '100,000'],
        correct: 2,
        explanation: 'Unos 50,000 creyentes.'
    },
    {
        id: 14,
        type: 'fill',
        question: 'Charles Fitch aplicó el mensaje a las iglesias en el verano de __________.',
        correct: ['1843'],
        explanation: '1843.'
    },
    {
        id: 15,
        type: 'fill',
        question: 'La familia __________ fue desfraternizada de la iglesia metodista.',
        correct: ['harmon'],
        explanation: 'Los Harmon.'
    },

    // ============================================
    // SECCIÓN D: EL CLAMOR DE MEDIANOCHE Y EL GRAN CHASCO (IDs 16-30)
    // ============================================
    {
        id: 16,
        type: 'multiple',
        question: '¿Qué fechas se fijaron inicialmente para el fin de los 2300 días?',
        options: ['21 marzo y 18 abril 1844', '22 octubre 1844', '19 mayo 1844', '13 noviembre 1844'],
        correct: 0,
        explanation: '21 de marzo y 18 de abril de 1844.'
    },
    {
        id: 17,
        type: 'multiple',
        question: '¿Quién presentó el mensaje del "clamor de medianoche" en agosto de 1844?',
        options: ['Guillermo Miller', 'José Bates', 'Samuel S. Snow', 'Charles Fitch'],
        correct: 2,
        explanation: 'Samuel S. Snow.'
    },
    {
        id: 18,
        type: 'multiple',
        question: '¿Qué parábola bíblica se aplicó a la experiencia adventista?',
        options: ['El sembrador', 'La oveja perdida', 'Las diez vírgenes', 'El trigo y la cizaña'],
        correct: 2,
        explanation: 'La parábola de las diez vírgenes.'
    },
    {
        id: 19,
        type: 'multiple',
        question: '¿Qué fecha se determinó finalmente para el fin de los 2300 días?',
        options: ['21 marzo 1844', '18 abril 1844', '22 octubre 1844', '13 noviembre 1844'],
        correct: 2,
        explanation: 'El 22 de octubre de 1844.'
    },
    {
        id: 20,
        type: 'multiple',
        question: '¿Qué suceso esperaban los adventistas para el 22 de octubre de 1844?',
        options: ['La purificación de la tierra', 'La segunda venida de Cristo', 'El fin del mundo', 'La marca de la bestia'],
        correct: 1,
        explanation: 'Esperaban la segunda venida de Cristo.'
    },
    {
        id: 21,
        type: 'multiple',
        question: '¿Quién tuvo una visión en el maizal después del chasco?',
        options: ['Elena White', 'José Bates', 'Hiram Edson', 'Jaime White'],
        correct: 2,
        explanation: 'Hiram Edson.'
    },
    {
        id: 22,
        type: 'multiple',
        question: '¿Qué vio Hiram Edson en su visión?',
        options: ['El sábado', 'A Cristo entrando al lugar santísimo', 'La caída de Babilonia', 'El fin del mundo'],
        correct: 1,
        explanation: 'Vio a Cristo como Sumo Sacerdote entrando al lugar santísimo.'
    },
    {
        id: 23,
        type: 'multiple',
        question: '¿Qué doctrina surgió de la visión de Hiram Edson?',
        options: ['El sábado', 'El estado de los muertos', 'El juicio investigador', 'El diezmo'],
        correct: 2,
        explanation: 'El juicio investigador.'
    },
    {
        id: 24,
        type: 'multiple',
        question: '¿En qué año murió Guillermo Miller?',
        options: ['1844', '1845', '1849', '1850'],
        correct: 2,
        explanation: 'Miller murió en diciembre de 1849.'
    },
    {
        id: 25,
        type: 'multiple',
        question: '¿En qué fecha se casaron Jaime White y Elena Harmon?',
        options: ['22 octubre 1844', '30 agosto 1846', '19 mayo 1846', '13 noviembre 1846'],
        correct: 1,
        explanation: 'Se casaron el 30 de agosto de 1846.'
    },
    {
        id: 26,
        type: 'fill',
        question: 'El primer chasco ocurrió el 21 de __________ de 1844.',
        correct: ['marzo'],
        explanation: '21 de marzo.'
    },
    {
        id: 27,
        type: 'fill',
        question: 'Samuel S. Snow presentó el "clamor de medianoche" en agosto de __________.',
        correct: ['1844'],
        explanation: 'Agosto de 1844.'
    },
    {
        id: 28,
        type: 'fill',
        question: 'El 22 de octubre de 1844 correspondía al décimo día del __________ mes judío.',
        correct: ['séptimo'],
        explanation: 'Séptimo mes (Día de la Expiación).'
    },
    {
        id: 29,
        type: 'fill',
        question: 'Hiram __________ tuvo una visión en el maizal después del chasco.',
        correct: ['edson'],
        explanation: 'Hiram Edson.'
    },
    {
        id: 30,
        type: 'fill',
        question: 'Jaime White y Elena Harmon se casaron el 30 de agosto de __________.',
        correct: ['1846'],
        explanation: '1846.'
    },

    // ============================================
    // SECCIÓN E: COMIENZOS DEL SÁBADO (IDs 31-40)
    // ============================================
    {
        id: 31,
        type: 'multiple',
        question: '¿Quién llevó la verdad del sábado a los adventistas de Washington, New Hampshire?',
        options: ['José Bates', 'Raquel Oakes Preston', 'T.M. Preble', 'Frederick Wheeler'],
        correct: 1,
        explanation: 'Raquel Oakes Preston, una bautista del séptimo día.'
    },
    {
        id: 32,
        type: 'multiple',
        question: '¿En qué año Raquel Oakes visitó Washington, New Hampshire?',
        options: ['1843', '1844', '1845', '1846'],
        correct: 1,
        explanation: 'Durante el clamor de medianoche en 1844.'
    },
    {
        id: 33,
        type: 'multiple',
        question: '¿Quién fue el primer ministro adventista en aceptar el sábado?',
        options: ['José Bates', 'Jaime White', 'Frederick Wheeler', 'J.N. Andrews'],
        correct: 2,
        explanation: 'Frederick Wheeler, pastor de la iglesia de Washington.'
    },
    {
        id: 34,
        type: 'multiple',
        question: '¿Quién escribió el primer artículo sobre el sábado en 1845?',
        options: ['José Bates', 'T.M. Preble', 'J.B. Cook', 'Jaime White'],
        correct: 1,
        explanation: 'T.M. Preble.'
    },
    {
        id: 35,
        type: 'multiple',
        question: '¿Quién visitó Washington para estudiar el sábado y lo aceptó?',
        options: ['Jaime White', 'Elena White', 'José Bates', 'J.N. Andrews'],
        correct: 2,
        explanation: 'José Bates visitó el grupo y aceptó el sábado.'
    },
    {
        id: 36,
        type: 'multiple',
        question: '¿Qué grupo preservó la verdad del sábado por siglos?',
        options: ['Los católicos', 'Los luteranos', 'Los bautistas del séptimo día', 'Los metodistas'],
        correct: 2,
        explanation: 'Los Bautistas del Séptimo Día.'
    },
    {
        id: 37,
        type: 'multiple',
        question: '¿Quién escribió el primer tratado amplio sobre el sábado?',
        options: ['T.M. Preble', 'J.B. Cook', 'José Bates', 'J.N. Andrews'],
        correct: 2,
        explanation: 'José Bates.'
    },
    {
        id: 38,
        type: 'multiple',
        question: '¿Cuántos congresos sobre el sábado se celebraron en 1848?',
        options: ['Tres', 'Cuatro', 'Cinco', 'Seis'],
        correct: 3,
        explanation: 'Seis congresos sobre el sábado.'
    },
    {
        id: 39,
        type: 'fill',
        question: 'Raquel Oakes llevó la verdad del sábado a Washington, New Hampshire en __________.',
        correct: ['1844'],
        explanation: '1844.'
    },
    {
        id: 40,
        type: 'fill',
        question: 'El primer ministro adventista en aceptar el sábado fue Frederick __________.',
        correct: ['wheeler'],
        explanation: 'Frederick Wheeler.'
    },

    // ============================================
    // SECCIÓN F: EL DON DE PROFECÍA - ELENA G. DE WHITE (IDs 41-65)
    // ============================================
    {
        id: 41,
        type: 'multiple',
        question: '¿Qué versículo dice que "el testimonio de Jesús es el espíritu de profecía"?',
        options: ['Apocalipsis 12:17', 'Apocalipsis 19:10', 'Apocalipsis 14:12', 'Apocalipsis 22:21'],
        correct: 1,
        explanation: 'Apocalipsis 19:10.'
    },
    {
        id: 42,
        type: 'multiple',
        question: '¿Quién recibió visiones antes que Elena White, pero dejó de proclamarlas?',
        options: ['William Foy', 'Hazen Foss', 'José Bates', 'Jaime White'],
        correct: 1,
        explanation: 'Hazen Foss rechazó el don por temor al ridículo.'
    },
    {
        id: 43,
        type: 'multiple',
        question: '¿Qué edad tenía Elena White cuando recibió su primera visión?',
        options: ['15 años', '17 años', '19 años', '21 años'],
        correct: 1,
        explanation: 'Tenía 17 años.'
    },
    {
        id: 44,
        type: 'multiple',
        question: '¿En qué fecha recibió Elena White su primera visión?',
        options: ['Octubre 1844', 'Noviembre 1844', 'Diciembre 1844', 'Enero 1845'],
        correct: 2,
        explanation: 'Diciembre de 1844, dos meses después del chasco.'
    },
    {
        id: 45,
        type: 'multiple',
        question: '¿Qué vio Elena White en su primera visión?',
        options: ['El sábado', 'El santuario', 'El viaje del pueblo de Dios al cielo', 'La marca de la bestia'],
        correct: 2,
        explanation: 'Vio el viaje del pueblo de Dios en su ruta al reino.'
    },
    {
        id: 46,
        type: 'multiple',
        question: '¿Cuál es la primera prueba bíblica de un profeta según Isaías 8:20?',
        options: ['Sus frutos', 'Cumplimiento de profecías', 'Conforme a la ley y al testimonio', 'Confesar a Cristo'],
        correct: 2,
        explanation: 'Isaías 8:20: "¡A la ley y al testimonio!"'
    },
    {
        id: 47,
        type: 'multiple',
        question: '¿Cuál es la segunda prueba de un profeta según Mateo 7:20?',
        options: ['Conforme a la ley', 'Por sus frutos', 'Cumplimiento de profecías', 'Confesar a Cristo'],
        correct: 1,
        explanation: 'Mateo 7:20: "Por sus frutos los conoceréis".'
    },
    {
        id: 48,
        type: 'multiple',
        question: '¿Cuál es la tercera prueba de un profeta según Jeremías 28:9?',
        options: ['Conforme a la ley', 'Por sus frutos', 'Cumplimiento de profecías', 'Confesar a Cristo'],
        correct: 2,
        explanation: 'Jeremías 28:9: "Cuando se cumpla la palabra del profeta".'
    },
    {
        id: 49,
        type: 'multiple',
        question: '¿Cuál es la cuarta prueba de un profeta según 1 Juan 4:2?',
        options: ['Conforme a la ley', 'Por sus frutos', 'Cumplimiento de profecías', 'Confesar a Cristo'],
        correct: 3,
        explanation: '1 Juan 4:2: "Confiesa que Jesucristo ha venido en carne".'
    },
    {
        id: 50,
        type: 'multiple',
        question: '¿Qué predijo Elena White en 1848 acerca de la obra publicadora?',
        options: ['Que sería pequeña', 'Que crecería hasta circuir el globo', 'Que tendría dificultades', 'Que se limitaría a EE.UU.'],
        correct: 1,
        explanation: 'Predijo que crecería hasta "rayos de luz que han de circuir el globo".'
    },
    {
        id: 51,
        type: 'multiple',
        question: '¿Dónde nació Elena G. de White?',
        options: ['Boston', 'Gorham, Maine', 'Portland', 'Nueva York'],
        correct: 1,
        explanation: 'Nació en Gorham, Maine, el 26 de noviembre de 1827.'
    },
    {
        id: 52,
        type: 'multiple',
        question: '¿Qué accidente sufrió Elena White a los 9 años?',
        options: ['Una caída', 'Golpe en la cara con una piedra', 'Un incendio', 'Una enfermedad'],
        correct: 1,
        explanation: 'Recibió un golpe en la cara con una piedra lanzada por otra niña.'
    },
    {
        id: 53,
        type: 'multiple',
        question: '¿En qué año escuchó Elena White las doctrinas de Miller por primera vez?',
        options: ['1838', '1840', '1842', '1844'],
        correct: 1,
        explanation: 'En 1840 y otra vez en 1842.'
    },
    {
        id: 54,
        type: 'multiple',
        question: '¿En qué año Elena White entregó su corazón a Dios?',
        options: ['1840', '1842', '1844', '1846'],
        correct: 0,
        explanation: 'En un campamento a fines de 1840.'
    },
    {
        id: 55,
        type: 'multiple',
        question: '¿En qué fecha recibió Elena White la visión del sábado?',
        options: ['Diciembre 1844', 'Abril 1847', 'Agosto 1848', 'Octubre 1844'],
        correct: 1,
        explanation: 'En abril de 1847.'
    },
    {
        id: 56,
        type: 'multiple',
        question: '¿Qué vio Elena White en el templo celestial en la visión del sábado?',
        options: ['El arca del pacto', 'Los Diez Mandamientos con un halo en el cuarto', 'El altar del incienso', 'El candelabro'],
        correct: 1,
        explanation: 'Vio los Diez Mandamientos con un halo alrededor del cuarto.'
    },
    {
        id: 57,
        type: 'multiple',
        question: '¿Cuál es el libro más conocido de Elena White?',
        options: ['Patriarcas y Profetas', 'El Conflicto de los Siglos', 'El Deseado de Todas las Gentes', 'Primeros Escritos'],
        correct: 2,
        explanation: 'El Deseado de Todas las Gentes.'
    },
    {
        id: 58,
        type: 'multiple',
        question: '¿Qué institución ayudó a establecer Elena White en Australia?',
        options: ['Un sanatorio', 'El Colegio de Avondale', 'Una editorial', 'Una iglesia'],
        correct: 1,
        explanation: 'El Colegio de Avondale.'
    },
    {
        id: 59,
        type: 'multiple',
        question: '¿Qué fenómeno ocurría durante las visiones de Elena White?',
        options: ['Perdía el conocimiento', 'Dejaba de respirar pero mantenía el pulso', 'Hablaba en lenguas', 'Tenía convulsiones'],
        correct: 1,
        explanation: 'Cesaba su respiración, pero no perdía el color ni le fallaba el pulso.'
    },
    {
        id: 60,
        type: 'multiple',
        question: '¿En qué fecha murió Elena G. de White?',
        options: ['16 julio 1915', '30 agosto 1915', '22 octubre 1915', '26 noviembre 1915'],
        correct: 0,
        explanation: 'Murió el 16 de julio de 1915.'
    },
    {
        id: 61,
        type: 'fill',
        question: 'El testimonio de Jesús es el __________ de profecía (Apoc. 19:10).',
        correct: ['espíritu'],
        explanation: 'Espíritu de profecía.'
    },
    {
        id: 62,
        type: 'fill',
        question: 'Hazen __________ rechazó el don de profecía por temor al ridículo.',
        correct: ['foss'],
        explanation: 'Hazen Foss.'
    },
    {
        id: 63,
        type: 'fill',
        question: 'Elena White recibió su primera visión en diciembre de __________.',
        correct: ['1844'],
        explanation: '1844.'
    },
    {
        id: 64,
        type: 'fill',
        question: 'Elena White tenía __________ años en su primera visión.',
        correct: ['17'],
        explanation: '17 años.'
    },
    {
        id: 65,
        type: 'fill',
        question: 'Elena White nació en Gorham, __________ el 26 de noviembre de 1827.',
        correct: ['maine'],
        explanation: 'Maine.'
    },

    // ============================================
    // SECCIÓN G: PIONEROS PRINCIPALES (IDs 66-85)
    // ============================================
    {
        id: 66,
        type: 'multiple',
        question: '¿En qué año nació Jaime White?',
        options: ['1821', '1829', '1832', '1792'],
        correct: 0,
        explanation: 'Jaime White nació en 1821 y murió en 1881.'
    },
    {
        id: 67,
        type: 'multiple',
        question: '¿Cuántos años fue presidente de la Asociación General Jaime White?',
        options: ['5 años', '8 años', '10 años', '12 años'],
        correct: 2,
        explanation: 'Fue presidente 10 años en tres términos.'
    },
    {
        id: 68,
        type: 'multiple',
        question: '¿Qué oficio tenía José Bates antes de jubilarse?',
        options: ['Médico', 'Capitán de barco', 'Abogado', 'Maestro'],
        correct: 1,
        explanation: 'Fue capitán de barco.'
    },
    {
        id: 69,
        type: 'multiple',
        question: '¿Qué vicio abandonó José Bates mientras navegaba?',
        options: ['El juego', 'El alcohol y el tabaco', 'La comida', 'La pereza'],
        correct: 1,
        explanation: 'Abandonó el alcohol y el tabaco.'
    },
    {
        id: 70,
        type: 'multiple',
        question: '¿Quién fue el primer líder en aceptar la verdad del sábado?',
        options: ['Jaime White', 'J.N. Andrews', 'José Bates', 'Frederick Wheeler'],
        correct: 2,
        explanation: 'José Bates fue el primer líder.'
    },
    {
        id: 71,
        type: 'multiple',
        question: '¿En qué año nació J.N. Andrews?',
        options: ['1821', '1829', '1832', '1798'],
        correct: 1,
        explanation: 'J.N. Andrews nació en 1829 y murió en 1883.'
    },
    {
        id: 72,
        type: 'multiple',
        question: '¿A qué edad comenzó a predicar J.N. Andrews?',
        options: ['17 años', '19 años', '21 años', '25 años'],
        correct: 2,
        explanation: 'Comenzó a los 21 años.'
    },
    {
        id: 73,
        type: 'multiple',
        question: '¿Qué libro escribió J.N. Andrews?',
        options: ['El Conflicto de los Siglos', 'Historia del Sábado', 'Daniel y Apocalipsis', 'El Deseado'],
        correct: 1,
        explanation: '"Historia del Sábado".'
    },
    {
        id: 74,
        type: 'multiple',
        question: '¿Qué sistema inició J.N. Andrews para financiar la predicación?',
        options: ['Ofrendas', 'Diezmo', 'Promesas', 'Donaciones'],
        correct: 1,
        explanation: 'Inició el estudio que llevó al sistema del diezmo.'
    },
    {
        id: 75,
        type: 'multiple',
        question: '¿En qué año se eligió el nombre "Adventistas del Séptimo Día"?',
        options: ['1848', '1853', '1860', '1874'],
        correct: 2,
        explanation: 'En agosto de 1860.'
    },
    {
        id: 76,
        type: 'multiple',
        question: '¿Quién fue el primer misionero oficial a Europa en 1874?',
        options: ['Jaime White', 'José Bates', 'J.N. Andrews', 'Urías Smith'],
        correct: 2,
        explanation: 'J.N. Andrews.'
    },
    {
        id: 77,
        type: 'multiple',
        question: '¿Quién fue el primer presidente de la Asociación General?',
        options: ['Jaime White', 'José Bates', 'Juan Byington', 'J.N. Andrews'],
        correct: 2,
        explanation: 'Juan Byington.'
    },
    {
        id: 78,
        type: 'multiple',
        question: '¿Dónde funcionó la primera escuela de iglesia en 1853?',
        options: ['En casa de Bates', 'En casa de Byington', 'En casa de White', 'En casa de Andrews'],
        correct: 1,
        explanation: 'En casa de Juan Byington en Buck\'s Bridge, Nueva York.'
    },
    {
        id: 79,
        type: 'multiple',
        question: '¿Quién fue el primer maestro de la primera escuela de iglesia en casa de Byington?',
        options: ['Elena White', 'Marta Byington', 'Ana Smith', 'Raquel Oakes'],
        correct: 1,
        explanation: 'Marta Byington, hija de Juan Byington.'
    },
    {
        id: 80,
        type: 'multiple',
        question: '¿Para qué revista trabajó J.H. Waggoner?',
        options: ['Review and Herald', 'Signs of the Times', 'The Midnight Cry', 'The Advent Herald'],
        correct: 1,
        explanation: 'Trabajó para Signs of the Times.'
    },
    {
        id: 81,
        type: 'multiple',
        question: '¿Por qué es recordada Ana Smith?',
        options: ['Por sus libros', 'Por sus poesías e himnos', 'Por sus sermones', 'Por sus enseñanzas'],
        correct: 1,
        explanation: 'Por sus poesías, muchas usadas como himnos.'
    },
    {
        id: 82,
        type: 'multiple',
        question: '¿Qué libro escribió Urías Smith?',
        options: ['Historia del Sábado', 'Daniel y Apocalipsis', 'El Conflicto de los Siglos', 'Patriarcas y Profetas'],
        correct: 1,
        explanation: 'Daniel y Apocalipsis.'
    },
    {
        id: 83,
        type: 'multiple',
        question: '¿En qué año fue líder Urías Smith en discusiones sobre justificación por la fe?',
        options: ['1855', '1874', '1888', '1893'],
        correct: 2,
        explanation: 'En 1888.'
    },
    {
        id: 84,
        type: 'fill',
        question: 'Jaime White fue presidente de la Asociación General por __________ años.',
        correct: ['10'],
        explanation: '10 años.'
    },
    {
        id: 85,
        type: 'fill',
        question: 'El primer maestro de la primera escuela de iglesia en casa de Byington fue Marta __________.',
        correct: ['byington'],
        explanation: 'Marta Byington, hija de Juan Byington.'
    }
];

// ============================================
// VARIABLES GLOBALES
// ============================================
let currentQuestionIndex = 0;
let shuffledQuestions = [];
let correctCount = 0;
let incorrectCount = 0;
let answered = false;
let selectedOption = null;
let selectedLeftItem = null;
let matchedPairs = [];
let selectedFillOption = null;

// Elementos del DOM
const domElements = {
    questionCounter: document.getElementById('questionCounter'),
    questionText: document.getElementById('questionText'),
    questionType: document.getElementById('questionType'),
    correctCount: document.getElementById('correctCount'),
    incorrectCount: document.getElementById('incorrectCount'),
    progressFill: document.getElementById('progressFill'),
    progressText: document.getElementById('progressText'),
    multipleChoiceContainer: document.getElementById('multipleChoiceContainer'),
    fillBlankContainer: document.getElementById('fillBlankContainer'),
    matchingContainer: document.getElementById('matchingContainer'),
    finalResults: document.getElementById('finalResults'),
    submitBtn: document.getElementById('submitBtn'),
    nextBtn: document.getElementById('nextBtn'),
    resultMessage: document.getElementById('resultMessage'),
    chapterTitle: document.getElementById('chapterTitle')
};

// ============================================
// FUNCIONES DE UTILIDAD
// ============================================
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function backToMenu() {
    window.location.href = '../index.html';
}

function updateScoreDisplay() {
    if (domElements.correctCount) domElements.correctCount.textContent = correctCount;
    if (domElements.incorrectCount) domElements.incorrectCount.textContent = incorrectCount;
}

// ============================================
// FUNCIÓN PRINCIPAL DE CARGA DE PREGUNTA
// ============================================
function loadQuestion() {
    const question = shuffledQuestions[currentQuestionIndex];
    
    domElements.questionCounter.textContent = `Pregunta ${currentQuestionIndex + 1}/${shuffledQuestions.length}`;
    domElements.questionText.textContent = question.question;
    
    const progress = ((currentQuestionIndex + 1) / shuffledQuestions.length) * 100;
    domElements.progressFill.style.width = `${progress}%`;
    domElements.progressText.textContent = `Progreso: ${currentQuestionIndex + 1} de ${shuffledQuestions.length}`;
    
    domElements.multipleChoiceContainer.classList.add('hidden');
    domElements.fillBlankContainer.classList.add('hidden');
    domElements.matchingContainer.classList.add('hidden');
    domElements.finalResults.classList.add('hidden');
    
    domElements.multipleChoiceContainer.innerHTML = '';
    domElements.fillBlankContainer.innerHTML = '';
    
    const matchingLeft = document.getElementById('matchingLeft');
    const matchingRight = document.getElementById('matchingRight');
    if (matchingLeft) matchingLeft.innerHTML = '';
    if (matchingRight) matchingRight.innerHTML = '';
    
    answered = false;
    domElements.submitBtn.disabled = false;
    domElements.resultMessage.classList.add('hidden');
    domElements.nextBtn.classList.add('hidden');
    
    selectedOption = null;
    selectedLeftItem = null;
    matchedPairs = [];
    selectedFillOption = null;
    
    if (question.type === 'multiple') {
        domElements.questionType.textContent = 'Selección Simple';
        domElements.multipleChoiceContainer.classList.remove('hidden');
        loadMultipleChoice(question);
    } else if (question.type === 'fill') {
        domElements.questionType.textContent = 'Completación';
        domElements.fillBlankContainer.classList.remove('hidden');
        loadFillInTheBlank(question);
    }
}

// ============================================
// SELECCIÓN MÚLTIPLE
// ============================================
function loadMultipleChoice(question) {
    const container = domElements.multipleChoiceContainer;
    const letters = ['A', 'B', 'C', 'D'];
    
    question.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.className = 'option-btn';
        button.setAttribute('data-letter', letters[index]);
        button.textContent = option;
        button.onclick = () => selectOption(index);
        container.appendChild(button);
    });
}

function selectOption(index) {
    if (answered) return;
    
    const buttons = document.querySelectorAll('#multipleChoiceContainer .option-btn');
    buttons.forEach(btn => btn.classList.remove('selected'));
    buttons[index].classList.add('selected');
    selectedOption = index;
}

// ============================================
// COMPLETACIÓN
// ============================================
function loadFillInTheBlank(question) {
    const container = domElements.fillBlankContainer;
    
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    
    const allOptions = generateFillOptions(question);
    
    const fillOptionsDiv = document.createElement('div');
    fillOptionsDiv.className = 'fill-options';
    fillOptionsDiv.id = 'fillOptions';
    
    container.appendChild(fillOptionsDiv);
    
    allOptions.forEach((option) => {
        const button = document.createElement('button');
        button.className = 'fill-option-btn';
        button.textContent = option;
        button.onclick = () => selectFillOption(button, option);
        fillOptionsDiv.appendChild(button);
    });
}

function generateFillOptions(question) {
    const correctAnswer = question.correct.join(' ').toLowerCase();
    
    const incorrectPool = [
        'babilonia', 'jerusalén', 'roma', 'galilea', 'fariseos',
        'bautismo', 'oración', 'ayuno', 'diezmo', 'ofrenda',
        'templo', 'sinagoga', 'altar', 'incienso', 'pascua',
        'apóstoles', 'discípulos', 'profetas', 'reyes',
        '1843', '1845', '1847', '1848', '1850', '1860',
        'marzo', 'abril', 'mayo', 'junio', 'agosto', 'octubre',
        'miller', 'himes', 'fitch', 'snow', 'edson', 'bates',
        'white', 'harmon', 'foss', 'preble', 'cook', 'wheeler',
        'andrews', 'byington', 'waggoner', 'smith', 'avondale'
    ];
    
    const shuffled = shuffleArray([...incorrectPool]);
    const selectedIncorrect = shuffled
        .filter(opt => opt !== correctAnswer)
        .filter((opt, index, self) => self.indexOf(opt) === index)
        .slice(0, 3);
    
    let allOptions = [correctAnswer, ...selectedIncorrect];
    allOptions = [...new Set(allOptions)];
    
    while (allOptions.length < 4) {
        allOptions.push('respuesta');
    }
    
    return shuffleArray(allOptions.slice(0, 4));
}

function selectFillOption(button, selectedValue) {
    if (answered) return;
    
    document.querySelectorAll('.fill-option-btn').forEach(btn => {
        btn.classList.remove('selected');
    });
    
    button.classList.add('selected');
    selectedFillOption = selectedValue;
}

// ============================================
// FUNCIÓN PRINCIPAL DE RESPUESTA
// ============================================
function submitAnswer() {
    if (answered) return;
    
    const question = shuffledQuestions[currentQuestionIndex];
    let isCorrect = false;
    let message = '';
    
    if (question.type === 'multiple') {
        if (selectedOption === null) {
            alert('Por favor selecciona una respuesta');
            return;
        }
        
        isCorrect = selectedOption === question.correct;
        const buttons = document.querySelectorAll('#multipleChoiceContainer .option-btn');
        
        if (buttons[question.correct]) buttons[question.correct].classList.add('correct');
        if (!isCorrect && buttons[selectedOption]) {
            buttons[selectedOption].classList.add('incorrect');
            message = `❌ Incorrecto. La respuesta correcta es: ${question.options[question.correct]}`;
        }
        
    } else if (question.type === 'fill') {
        if (selectedFillOption === null) {
            alert('Por favor selecciona una opción');
            return;
        }
        
        const correctAnswer = question.correct.join(' ').toLowerCase();
        isCorrect = selectedFillOption.toLowerCase() === correctAnswer;
        
        const buttons = document.querySelectorAll('.fill-option-btn');
        buttons.forEach(btn => {
            if (btn.textContent.toLowerCase() === correctAnswer) {
                btn.classList.add('correct');
            } else if (btn.textContent === selectedFillOption && !isCorrect) {
                btn.classList.add('incorrect');
            }
        });
        
        if (!isCorrect) {
            message = `❌ Incorrecto. La respuesta correcta es: ${correctAnswer}`;
        }
    }
    
    if (isCorrect) {
        correctCount++;
        message = `✅ ¡Correcto! ${question.explanation || ''}`;
    } else {
        incorrectCount++;
        if (!message) {
            message = `❌ Incorrecto. ${question.explanation || 'Revisa el texto para aprender más.'}`;
        }
    }
    
    updateScoreDisplay();
    
    domElements.resultMessage.textContent = message;
    domElements.resultMessage.className = `result-message ${isCorrect ? 'correct' : 'incorrect'}`;
    domElements.resultMessage.classList.remove('hidden');
    
    answered = true;
    domElements.submitBtn.disabled = true;
    domElements.nextBtn.classList.remove('hidden');
}

// ============================================
// SIGUIENTE PREGUNTA
// ============================================
function nextQuestion() {
    if (currentQuestionIndex < shuffledQuestions.length - 1) {
        currentQuestionIndex++;
        loadQuestion();
    } else {
        showFinalResults();
    }
}

// ============================================
// RESULTADOS FINALES
// ============================================
function showFinalResults() {
    domElements.multipleChoiceContainer.classList.add('hidden');
    domElements.fillBlankContainer.classList.add('hidden');
    domElements.submitBtn.classList.add('hidden');
    domElements.nextBtn.classList.add('hidden');
    domElements.resultMessage.classList.add('hidden');
    
    const total = correctCount + incorrectCount;
    const percentage = Math.round((correctCount / total) * 100) || 0;
    
    let message = '';
    if (percentage >= 90) message = '¡Excelente! Conoces bien el surgimiento de la Iglesia Remanente.';
    else if (percentage >= 70) message = '¡Muy bien! Tienes un buen conocimiento.';
    else if (percentage >= 50) message = 'Bien, pero puedes repasar algunos conceptos.';
    else message = 'Sigue estudiando, la historia de la iglesia es fascinante.';
    
    domElements.finalResults.innerHTML = `
        <div class="final-results-content">
            <h2>🎉 ¡CAPÍTULO 3 COMPLETADO! 🎉</h2>
            <div class="final-stats">
                <div class="final-stat-item">
                    <div class="final-stat-value correct">${correctCount}</div>
                    <div class="final-stat-label">Correctas</div>
                </div>
                <div class="final-stat-item">
                    <div class="final-stat-value incorrect">${incorrectCount}</div>
                    <div class="final-stat-label">Incorrectas</div>
                </div>
            </div>
            <div class="final-percentage">${percentage}% de aciertos</div>
            <div class="final-message">"${message}"</div>
            <div class="final-buttons">
                <button class="final-btn" onclick="backToMenu()">📚 Volver al Menú</button>
                <button class="final-btn" onclick="restartChapter()">🔄 Repetir Capítulo</button>
            </div>
        </div>
    `;
    
    domElements.finalResults.classList.remove('hidden');
    
    const chapterNumber = localStorage.getItem('historiaDenominacional_currentChapter') || '3';
    completeChapter(parseInt(chapterNumber));
}

function restartChapter() {
    currentQuestionIndex = 0;
    shuffledQuestions = shuffleArray([...questions]);
    correctCount = 0;
    incorrectCount = 0;
    
    updateScoreDisplay();
    domElements.finalResults.classList.add('hidden');
    domElements.submitBtn.classList.remove('hidden');
    
    loadQuestion();
}

function completeChapter(chapterNumber) {
    try {
        const progress = JSON.parse(localStorage.getItem('historiaDenominacional_progress') || '[]');
        if (!progress.includes(chapterNumber)) {
            progress.push(chapterNumber);
            localStorage.setItem('historiaDenominacional_progress', JSON.stringify(progress));
        }
    } catch (e) {
        console.log('Error guardando progreso:', e);
    }
}

// ============================================
// INICIALIZACIÓN
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    if (!domElements.correctCount || !domElements.incorrectCount) {
        console.error('No se encontraron los elementos de contador');
        return;
    }
    
    shuffledQuestions = shuffleArray([...questions]);
    currentQuestionIndex = 0;
    correctCount = 0;
    incorrectCount = 0;
    
    if (domElements.chapterTitle) {
        domElements.chapterTitle.textContent = `Capítulo 3: Surge la Iglesia Remanente (1844-1852)`;
    }
    
    updateScoreDisplay();
    loadQuestion();
});

window.backToMenu = backToMenu;
window.submitAnswer = submitAnswer;
window.nextQuestion = nextQuestion;
window.restartChapter = restartChapter;