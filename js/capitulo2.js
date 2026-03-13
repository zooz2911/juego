// ============================================
// PREGUNTAS DEL CAPÍTULO 2 - HERALDOS DEL MENSAJE DEL ADVENIMIENTO
// ============================================
const questions = [
    // ============================================
    // SECCIÓN A: LAS TRES SEÑALES ESPECTACULARES (IDs 1-12)
    // ============================================
    
    // SELECCIÓN MÚLTIPLE - SEÑALES
    {
        id: 1,
        type: 'multiple',
        question: '¿En qué año ocurrió el gran terremoto conocido como el terremoto de Lisboa?',
        options: ['1755', '1780', '1833', '1798'],
        correct: 0,
        explanation: 'El terremoto de Lisboa ocurrió en 1755 y se extendió por más de cuatro millones de millas cuadradas.'
    },
    {
        id: 2,
        type: 'multiple',
        question: '¿Qué profecía del Apocalipsis cumplió el terremoto de 1755?',
        options: ['El quinto sello', 'El sexto sello', 'El séptimo sello', 'La primera trompeta'],
        correct: 1,
        explanation: 'El terremoto de 1755 cumplió la profecía de la apertura del sexto sello registrada en Apocalipsis 6:12, 13.'
    },
    {
        id: 3,
        type: 'multiple',
        question: '¿En qué fecha ocurrió el Día Oscuro, cuando el sol se oscureció?',
        options: ['1 de noviembre de 1755', '19 de mayo de 1780', '13 de noviembre de 1833', '22 de octubre de 1844'],
        correct: 1,
        explanation: 'El Día Oscuro tuvo lugar el 19 de mayo de 1780, cumpliendo la profecía de Jesús en Marcos 13:24.'
    },
    {
        id: 4,
        type: 'multiple',
        question: '¿Qué fenómeno natural ocurrió el 13 de noviembre de 1833?',
        options: ['Un terremoto', 'Un eclipse solar', 'Una caída de estrellas', 'Una inundación'],
        correct: 2,
        explanation: 'El 13 de noviembre de 1833 ocurrió una gran caída de estrellas, cumpliendo Apocalipsis 6:13.'
    },
    {
        id: 5,
        type: 'multiple',
        question: '¿En qué año terminó el período profético de 1260 años?',
        options: ['1755', '1780', '1798', '1833'],
        correct: 2,
        explanation: 'El período de 1260 años terminó en 1798.'
    },
    
    // COMPLETACIÓN - SEÑALES
    {
        id: 6,
        type: 'fill',
        question: 'La primera de las tres señales espectaculares fue el terremoto de __________ en el año 1755.',
        correct: ['lisboa'],
        explanation: 'El terremoto de Lisboa fue la primera señal.'
    },
    {
        id: 7,
        type: 'fill',
        question: 'El Día Oscuro ocurrió el __________ de mayo de 1780.',
        correct: ['19'],
        explanation: 'El Día Oscuro fue el 19 de mayo de 1780.'
    },
    {
        id: 8,
        type: 'fill',
        question: 'La caída de las estrellas ocurrió el 13 de noviembre del año __________.',
        correct: ['1833'],
        explanation: 'La caída de las estrellas fue en 1833.'
    },
    {
        id: 9,
        type: 'fill',
        question: 'El terremoto de Lisboa cumplió la profecía del __________ sello de Apocalipsis.',
        correct: ['sexto'],
        explanation: 'Cumplió el sexto sello (Apocalipsis 6:12, 13).'
    },
    {
        id: 10,
        type: 'fill',
        question: 'El Día Oscuro cumplió la profecía de Jesús en Marcos __________:24.',
        correct: ['13'],
        explanation: 'Marcos 13:24: "El sol se oscurecerá".'
    },
    {
        id: 11,
        type: 'fill',
        question: 'La caída de las estrellas cumplió Apocalipsis 6:13: "Como la __________ deja caer sus higos".',
        correct: ['higuera'],
        explanation: 'La higuera deja caer sus higos.'
    },
    {
        id: 12,
        type: 'fill',
        question: 'El período de 1260 años de persecución terminó en el año __________.',
        correct: ['1798'],
        explanation: 'El período terminó en 1798.'
    },

    // ============================================
    // SECCIÓN B: LOS TRES ÁNGELES DE APOCALIPSIS 14 (IDs 13-18)
    // ============================================
    
    // SELECCIÓN MÚLTIPLE - ÁNGELES
    {
        id: 13,
        type: 'multiple',
        question: '¿Qué mensaje proclama el primer ángel de Apocalipsis 14?',
        options: ['Babilonia ha caído', 'No recibáis la marca de la bestia', 'Temed a Dios y dadle gloria', 'Cristo viene pronto'],
        correct: 2,
        explanation: 'El primer ángel proclama: "Temed a Dios y dadle gloria, porque la hora de su juicio ha llegado".'
    },
    {
        id: 14,
        type: 'multiple',
        question: '¿Qué mensaje proclama el segundo ángel de Apocalipsis 14?',
        options: ['Ha llegado la hora del juicio', 'Babilonia ha caído', 'No recibáis la marca de la bestia', 'Adorad al Creador'],
        correct: 1,
        explanation: 'El segundo ángel declara: "Ha caído, ha caído Babilonia".'
    },
    {
        id: 15,
        type: 'multiple',
        question: '¿Contra qué advierte el tercer ángel de Apocalipsis 14?',
        options: ['Contra la adoración de imágenes', 'Contra recibir la marca de la bestia', 'Contra el falso profeta', 'Contra el anticristo'],
        correct: 1,
        explanation: 'El tercer ángel advierte contra recibir la marca de la bestia.'
    },
    
    // COMPLETACIÓN - ÁNGELES
    {
        id: 16,
        type: 'fill',
        question: 'El mensaje del primer ángel anuncia que la hora del __________ ha llegado.',
        correct: ['juicio'],
        explanation: 'La hora del juicio.'
    },
    {
        id: 17,
        type: 'fill',
        question: 'El mensaje del segundo ángel declara que la Babilonia __________ ha caído.',
        correct: ['espiritual'],
        explanation: 'Babilonia espiritual.'
    },
    {
        id: 18,
        type: 'fill',
        question: 'El tercer ángel advierte contra recibir la __________ de la bestia.',
        correct: ['marca'],
        explanation: 'La marca de la bestia.'
    },

    // ============================================
    // SECCIÓN C: EMBAJADORES ADVENTISTAS EN ESTADOS UNIDOS (IDs 19-48)
    // ============================================
    
    // GUILLERMO MILLER (19-36)
    {
        id: 19,
        type: 'multiple',
        question: '¿En qué año nació Guillermo Miller?',
        options: ['1782', '1780', '1798', '1776'],
        correct: 0,
        explanation: 'Guillermo Miller nació en 1782 y murió en 1849.'
    },
    {
        id: 20,
        type: 'multiple',
        question: '¿En qué año murió Guillermo Miller?',
        options: ['1844', '1845', '1849', '1850'],
        correct: 2,
        explanation: 'Miller murió en 1849.'
    },
    {
        id: 21,
        type: 'multiple',
        question: '¿En qué mes y año Miller comenzó a predicar públicamente?',
        options: ['Agosto de 1831', 'Enero de 1843', 'Marzo de 1843', 'Octubre de 1844'],
        correct: 0,
        explanation: 'En agosto de 1831, Miller predicó por primera vez en una iglesia bautista.'
    },
    {
        id: 22,
        type: 'multiple',
        question: '¿Entre qué años estudió Miller las profecías antes de comenzar a predicar?',
        options: ['1800-1816', '1816-1831', '1820-1830', '1831-1844'],
        correct: 1,
        explanation: 'Miller estudió de 1816 a 1831, durante 15 años.'
    },
    {
        id: 23,
        type: 'multiple',
        question: '¿Qué amigo de Miller le abrió las puertas para predicar en las ciudades?',
        options: ['Josías Litch', 'Charles Fitch', 'Josué V. Himes', 'S.S. Snow'],
        correct: 2,
        explanation: 'Josué V. Himes, de Boston, invitó a Miller a predicar en las ciudades.'
    },
    {
        id: 24,
        type: 'multiple',
        question: '¿En qué año Miller comenzó a predicar en Nueva York?',
        options: ['1831', '1833', '1840', '1843'],
        correct: 2,
        explanation: 'Miller comenzó a predicar en Nueva York en 1840.'
    },
    {
        id: 25,
        type: 'multiple',
        question: '¿Aproximadamente cuántas personas aceptaron las enseñanzas de Miller?',
        options: ['10,000', '25,000', '50,000', '100,000'],
        correct: 2,
        explanation: 'Se estima que unas 50,000 personas aceptaron sus enseñanzas.'
    },
    {
        id: 26,
        type: 'multiple',
        question: '¿Qué profecía estudió Miller para llegar a su conclusión sobre la venida de Cristo?',
        options: ['Las 70 semanas', 'Los 1260 días', 'Los 2300 días', 'Las 7 trompetas'],
        correct: 2,
        explanation: 'Miller estudió la profecía de los 2300 días de Daniel 8 y 9.'
    },
    {
        id: 27,
        type: 'multiple',
        question: '¿Entre qué fechas predijo Miller que Cristo vendría?',
        options: ['1843-1844', '1844-1845', '1840-1841', '1845-1846'],
        correct: 0,
        explanation: 'Miller predijo que Cristo vendría entre marzo de 1843 y marzo de 1844.'
    },
    {
        id: 28,
        type: 'multiple',
        question: '¿En qué año terminó el ministerio público de Miller?',
        options: ['1844', '1845', '1849', '1850'],
        correct: 1,
        explanation: 'Su ministerio público terminó en 1845.'
    },
    {
        id: 29,
        type: 'multiple',
        question: '¿Cuántos sermones predicó Miller en aproximadamente 10 años?',
        options: ['1,000', '2,000', '3,000', '4,000'],
        correct: 2,
        explanation: 'Miller predicó más de 3,000 sermones en cerca de mil lugares diferentes.'
    },
    {
        id: 30,
        type: 'multiple',
        question: '¿Qué verdad no alcanzó a ver Miller?',
        options: ['El santuario', 'El juicio investigador', 'El sábado', 'El estado de los muertos'],
        correct: 2,
        explanation: 'Miller no alcanzó a ver la verdad del sábado.'
    },
    {
        id: 31,
        type: 'fill',
        question: 'Guillermo Miller nació en el año __________ y murió en el año __________.',
        correct: ['1782', '1849'],
        explanation: 'Miller vivió de 1782 a 1849.'
    },
    {
        id: 32,
        type: 'fill',
        question: 'Miller estudió las profecías durante __________ años, de 1816 a 1831.',
        correct: ['15'],
        explanation: 'Estudió 15 años.'
    },
    {
        id: 33,
        type: 'fill',
        question: 'Miller comenzó a predicar en agosto de __________.',
        correct: ['1831'],
        explanation: 'Comenzó en 1831.'
    },
    {
        id: 34,
        type: 'fill',
        question: 'Josué V. __________ invitó a Miller a predicar en Boston.',
        correct: ['himes'],
        explanation: 'Josué V. Himes.'
    },
    {
        id: 35,
        type: 'fill',
        question: 'Miller estudió la profecía de los __________ días de Daniel 8 y 9.',
        correct: ['2300'],
        explanation: 'Los 2300 días.'
    },
    {
        id: 36,
        type: 'fill',
        question: 'Miller predicó más de __________ sermones en su ministerio.',
        correct: ['3000'],
        explanation: 'Más de 3,000 sermones.'
    },
    
    // JOSUÉ V. HIMES (37-40)
    {
        id: 37,
        type: 'multiple',
        question: '¿En qué año nació Josué V. Himes?',
        options: ['1805', '1782', '1810', '1798'],
        correct: 0,
        explanation: 'Josué V. Himes nació en 1805 y murió en 1895.'
    },
    {
        id: 38,
        type: 'multiple',
        question: '¿Qué importante revista fundó Himes en Boston en 1840?',
        options: ['The Midnight Cry', 'The Advent Herald', 'Signs of the Times', 'The Review and Herald'],
        correct: 2,
        explanation: 'Himes fundó la revista "Signs of the Times" (Señales de los Tiempos).'
    },
    {
        id: 39,
        type: 'fill',
        question: 'Josué V. Himes fundó la revista __________ en Boston en 1840.',
        correct: ['signs of the times'],
        explanation: 'Signs of the Times.'
    },
    {
        id: 40,
        type: 'fill',
        question: 'Himes murió en el año __________.',
        correct: ['1895'],
        explanation: 'Himes murió en 1895.'
    },

    // JOSÍAS LITCH (41-42)
    {
        id: 41,
        type: 'multiple',
        question: '¿A qué edad se convirtió Josías Litch al cristianismo?',
        options: ['15 años', '17 años', '20 años', '22 años'],
        correct: 1,
        explanation: 'Josías Litch se convirtió a los 17 años.'
    },
    {
        id: 42,
        type: 'fill',
        question: 'Josías Litch se unió a la Iglesia __________ antes de unirse al movimiento adventista.',
        correct: ['metodista'],
        explanation: 'Se unió a la Iglesia Metodista.'
    },

    // CHARLES FITCH (43-48)
    {
        id: 43,
        type: 'multiple',
        question: '¿De qué iglesia era pastor Charles Fitch en Boston?',
        options: ['Metodista', 'Bautista', 'Congregacionalista', 'Presbiteriana'],
        correct: 2,
        explanation: 'Charles Fitch era pastor de la Iglesia Congregacionalista de Boston.'
    },
    {
        id: 44,
        type: 'multiple',
        question: '¿Cuál era el tema central de la predicación de Charles Fitch?',
        options: ['Arrepentíos', 'Prepárate para encontrarte con tu Dios', 'Velad', 'El reino de los cielos'],
        correct: 1,
        explanation: 'Su tema central era "Prepárate para encontrarte con tu Dios".'
    },
    {
        id: 45,
        type: 'multiple',
        question: '¿En qué fecha murió Charles Fitch?',
        options: ['13 de noviembre de 1833', '22 de octubre de 1844', '14 de octubre de 1844', '19 de mayo de 1844'],
        correct: 2,
        explanation: 'Charles Fitch murió el 14 de octubre de 1844, pocos días antes del 22 de octubre.'
    },
    {
        id: 46,
        type: 'multiple',
        question: '¿Qué famoso diagrama diseñó Charles Fitch en 1842?',
        options: ['El diagrama de las bestias', 'El diagrama profético de 1843', 'El diagrama del santuario', 'El diagrama de los 2300 días'],
        correct: 1,
        explanation: 'Fitch diseñó el famoso diagrama profético de 1843.'
    },
    {
        id: 47,
        type: 'fill',
        question: 'Charles Fitch diseñó el diagrama profético de __________.',
        correct: ['1843'],
        explanation: 'El diagrama de 1843.'
    },
    {
        id: 48,
        type: 'fill',
        question: 'Charles Fitch murió el __________ de octubre de 1844.',
        correct: ['14'],
        explanation: 'Murió el 14 de octubre de 1844.'
    },

    // OTROS LÍDERES MILERISTAS (49-52)
    {
        id: 49,
        type: 'multiple',
        question: '¿Quién escribió las memorias de Guillermo Miller?',
        options: ['George Storrs', 'Sylvester Bliss', 'S.S. Snow', 'Josué Himes'],
        correct: 1,
        explanation: 'Sylvester Bliss escribió las memorias de Miller.'
    },
    {
        id: 50,
        type: 'multiple',
        question: '¿Qué líder milerista declaró que los 2300 años terminarían en el otoño de 1844?',
        options: ['George Storrs', 'Sylvester Bliss', 'S.S. Snow', 'Josué Himes'],
        correct: 2,
        explanation: 'S.S. Snow declaró desde el principio que los 2300 años terminarían en el otoño de 1844.'
    },
    {
        id: 51,
        type: 'fill',
        question: 'S.S. __________ predijo que los 2300 años terminarían en el otoño de 1844.',
        correct: ['snow'],
        explanation: 'S.S. Snow.'
    },
    {
        id: 52,
        type: 'fill',
        question: 'Sylvester Bliss es recordado por sus __________ de Guillermo Miller.',
        correct: ['memorias'],
        explanation: 'Escribió las memorias de Miller.'
    },

    // ============================================
    // SECCIÓN D: EMBAJADORES DEL ADVENIMIENTO EN OTROS PAÍSES (IDs 53-78)
    // ============================================
    
    // JOSÉ WOLFF (53-59)
    {
        id: 53,
        type: 'multiple',
        question: '¿Entre qué años viajó José Wolff por el mundo predicando el advenimiento?',
        options: ['1816-1831', '1821-1845', '1831-1844', '1840-1849'],
        correct: 1,
        explanation: 'Wolff viajó de 1821 a 1845.'
    },
    {
        id: 54,
        type: 'multiple',
        question: '¿Cuántos idiomas hablaba José Wolff?',
        options: ['7', '10', '12', '14'],
        correct: 3,
        explanation: 'Wolff hablaba 14 idiomas.'
    },
    {
        id: 55,
        type: 'multiple',
        question: '¿Cómo se llegó a conocer a José Wolff?',
        options: ['El predicador de Europa', 'El misionero a todo el mundo', 'El apóstol de los gentiles', 'El heraldo del rey'],
        correct: 1,
        explanation: 'Se le conocía como "el misionero a todo el mundo".'
    },
    {
        id: 56,
        type: 'multiple',
        question: '¿De qué país era originario José Wolff?',
        options: ['Inglaterra', 'Alemania (Baviera)', 'Francia', 'Suiza'],
        correct: 1,
        explanation: 'Wolff nació en Baviera, Alemania.'
    },
    {
        id: 57,
        type: 'fill',
        question: 'José Wolff hablaba __________ idiomas.',
        correct: ['14'],
        explanation: 'Hablaba 14 idiomas.'
    },
    {
        id: 58,
        type: 'fill',
        question: 'Wolff fue conocido como "el misionero a todo el __________".',
        correct: ['mundo'],
        explanation: 'El misionero a todo el mundo.'
    },
    {
        id: 59,
        type: 'fill',
        question: 'José Wolff viajó extensamente entre los años 1821 y __________.',
        correct: ['1845'],
        explanation: 'Viajó hasta 1845.'
    },

    // JOHANN A. BENGEL (60)
    {
        id: 60,
        type: 'multiple',
        question: '¿De qué país era Johann A. Bengel?',
        options: ['Inglaterra', 'Alemania', 'Suiza', 'Francia'],
        correct: 1,
        explanation: 'Bengel era ministro luterano alemán.'
    },

    // EDUARDO IRVING (61-62)
    {
        id: 61,
        type: 'multiple',
        question: '¿De qué país era Eduardo Irving?',
        options: ['Inglaterra', 'Escocia', 'Irlanda', 'Gales'],
        correct: 1,
        explanation: 'Eduardo Irving era un destacado predicador escocés.'
    },
    {
        id: 62,
        type: 'fill',
        question: 'Eduardo Irving fue un destacado predicador adventista en las Islas __________.',
        correct: ['británicas'],
        explanation: 'Predicó en las Islas Británicas.'
    },

    // ENRIQUE DRUMMOND (63-64)
    {
        id: 63,
        type: 'multiple',
        question: '¿Qué profesión tenía Enrique Drummond además de ser predicador?',
        options: ['Médico', 'Abogado', 'Banquero', 'Profesor'],
        correct: 2,
        explanation: 'Enrique Drummond era banquero y miembro del Parlamento inglés.'
    },
    {
        id: 64,
        type: 'fill',
        question: 'Enrique Drummond organizaba conferencias __________ anuales.',
        correct: ['proféticas'],
        explanation: 'Conferencias proféticas anuales.'
    },

    // ROBERTO WINTER (65-66)
    {
        id: 65,
        type: 'multiple',
        question: '¿En qué año regresó Roberto Winter a Inglaterra después de visitar Estados Unidos?',
        options: ['1831', '1840', '1842', '1844'],
        correct: 2,
        explanation: 'Winter regresó a Inglaterra en 1842.'
    },
    {
        id: 66,
        type: 'fill',
        question: 'Roberto Winter regresó a Inglaterra en el año __________.',
        correct: ['1842'],
        explanation: 'Regresó en 1842.'
    },

    // HORACIO BONAR Y GEORGE MULLER (67-68)
    {
        id: 67,
        type: 'multiple',
        question: '¿Por qué es conocido Horacio Bonar?',
        options: ['Predicador', 'Autor de himnos', 'Misionero', 'Editor'],
        correct: 1,
        explanation: 'Horacio Bonar es conocido como autor de himnos.'
    },
    {
        id: 68,
        type: 'multiple',
        question: '¿Qué obra dirigía George Muller?',
        options: ['Una iglesia', 'Un seminario', 'Un orfanato', 'Una editorial'],
        correct: 2,
        explanation: 'George Muller dirigía el orfanato de Bristol.'
    },

    // LOS NIÑOS PREDICADORES (69-71)
    {
        id: 69,
        type: 'multiple',
        question: '¿En qué país Dios usó especialmente a niños para predicar el advenimiento?',
        options: ['Noruega', 'Suecia', 'Dinamarca', 'Finlandia'],
        correct: 1,
        explanation: 'En Suecia, Dios usó niños para predicar.'
    },
    {
        id: 70,
        type: 'fill',
        question: 'En Suecia, __________ y jóvenes predicaron el mensaje del advenimiento.',
        correct: ['niños'],
        explanation: 'Los niños predicaron.'
    },
    {
        id: 71,
        type: 'fill',
        question: 'Dos jóvenes predicadores suecos fueron Ole Boquist y Erik __________.',
        correct: ['walbon'],
        explanation: 'Erik Walbon.'
    },

    // MANUEL DE LACUNZA (72-74)
    {
        id: 72,
        type: 'multiple',
        question: '¿De qué país era originario Manuel de Lacunza?',
        options: ['España', 'Chile', 'Italia', 'Argentina'],
        correct: 1,
        explanation: 'Manuel de Lacunza nació en Chile.'
    },
    {
        id: 73,
        type: 'multiple',
        question: '¿Bajo qué seudónimo publicó Lacunza su libro "La Venida del Mesías en Gloria y Majestad"?',
        options: ['Rabí Juan Ben-Ezra', 'Juan el Revelador', 'El Testigo Fiel', 'El Peregrino'],
        correct: 0,
        explanation: 'Publicó su libro bajo el seudónimo de Rabí Juan Ben-Ezra.'
    },
    {
        id: 74,
        type: 'fill',
        question: 'Manuel de Lacunza publicó el libro "La Venida del Mesías en Gloria y Majestad" bajo el seudónimo de Rabí Juan __________.',
        correct: ['ben-ezra'],
        explanation: 'Rabí Juan Ben-Ezra.'
    },

    // H. HEINTZPETER (75)
    {
        id: 75,
        type: 'multiple',
        question: '¿En qué país predicó H. Heintzpeter?',
        options: ['Alemania', 'Holanda', 'Bélgica', 'Suiza'],
        correct: 1,
        explanation: 'Heintzpeter predicó en Holanda y era director del museo real.'
    },

    // LUIS GAUSSEN (76-78)
    {
        id: 76,
        type: 'multiple',
        question: '¿En qué países predicó Luis Gaussen?',
        options: ['Francia y Suiza', 'Alemania y Austria', 'Italia y España', 'Inglaterra y Escocia'],
        correct: 0,
        explanation: 'Luis Gaussen predicó en Francia y Suiza, específicamente en Ginebra.'
    },
    {
        id: 77,
        type: 'multiple',
        question: '¿A quiénes enseñaba Luis Gaussen para esparcir el mensaje?',
        options: ['A los adultos', 'A los niños', 'A los pastores', 'A los estudiantes'],
        correct: 1,
        explanation: 'Gaussen enseñaba a los niños para atraer también a los adultos.'
    },
    {
        id: 78,
        type: 'fill',
        question: 'Luis Gaussen predicó en Francia y __________.',
        correct: ['suiza'],
        explanation: 'Predicó en Suiza, en Ginebra.'
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
    
    // Actualizar contador y texto
    domElements.questionCounter.textContent = `Pregunta ${currentQuestionIndex + 1}/${shuffledQuestions.length}`;
    domElements.questionText.textContent = question.question;
    
    // Actualizar barra de progreso
    const progress = ((currentQuestionIndex + 1) / shuffledQuestions.length) * 100;
    domElements.progressFill.style.width = `${progress}%`;
    domElements.progressText.textContent = `Progreso: ${currentQuestionIndex + 1} de ${shuffledQuestions.length}`;
    
    // OCULTAR TODOS LOS CONTENEDORES
    domElements.multipleChoiceContainer.classList.add('hidden');
    domElements.fillBlankContainer.classList.add('hidden');
    domElements.matchingContainer.classList.add('hidden');
    domElements.finalResults.classList.add('hidden');
    
    // LIMPIAR TODO EL CONTENIDO DE LOS CONTENEDORES
    domElements.multipleChoiceContainer.innerHTML = '';
    domElements.fillBlankContainer.innerHTML = '';
    
    const matchingLeft = document.getElementById('matchingLeft');
    const matchingRight = document.getElementById('matchingRight');
    if (matchingLeft) matchingLeft.innerHTML = '';
    if (matchingRight) matchingRight.innerHTML = '';
    
    // Resetear estado de respuesta
    answered = false;
    domElements.submitBtn.disabled = false;
    domElements.resultMessage.classList.add('hidden');
    domElements.nextBtn.classList.add('hidden');
    
    // Resetear variables de selección
    selectedOption = null;
    selectedLeftItem = null;
    matchedPairs = [];
    selectedFillOption = null;
    
    // Cargar el tipo de pregunta correspondiente
    if (question.type === 'multiple') {
        domElements.questionType.textContent = 'Selección Simple';
        domElements.multipleChoiceContainer.classList.remove('hidden');
        loadMultipleChoice(question);
    } else if (question.type === 'fill') {
        domElements.questionType.textContent = 'Completación';
        domElements.fillBlankContainer.classList.remove('hidden');
        loadFillInTheBlank(question);
    } else if (question.type === 'matching') {
        domElements.questionType.textContent = 'Emparejamiento';
        domElements.matchingContainer.classList.remove('hidden');
        loadMatching(question);
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
    
    // LIMPIAR COMPLETAMENTE EL CONTENEDOR
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    
    // GENERAR OPCIONES
    const allOptions = generateFillOptions(question);
    
    // CREAR SOLO EL CONTENEDOR DE OPCIONES
    const fillOptionsDiv = document.createElement('div');
    fillOptionsDiv.className = 'fill-options';
    fillOptionsDiv.id = 'fillOptions';
    
    // Agregar al contenedor principal
    container.appendChild(fillOptionsDiv);
    
    // Crear las opciones
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
        'jerusalén', 'roma', 'sinaí', 'galilea', 'fariseos', 'sacerdotes',
        'levitas', 'escribas', 'herodes', 'pilato', 'caifás', 'ananías',
        'bautismo', 'oración', 'ayuno', 'limosna', 'diezmo', 'ofrenda',
        'templo', 'sinagoga', 'altar', 'incienso', 'pascua', 'pentecostés',
        'apóstoles', 'discípulos', 'evangelistas', 'profetas', 'reyes',
        'lisboa', 'himes', 'fitch', 'litch', 'snow', 'wolff', 'bengel',
        'irving', 'drummond', 'winter', 'bonar', 'muller', 'lacunza',
        'gaussen', 'heintzpeter', 'walbon', 'boquist'
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
// EMPAREJAMIENTO
// ============================================
function loadMatching(question) {
    const leftContainer = document.getElementById('matchingLeft');
    const rightContainer = document.getElementById('matchingRight');
    
    if (!question.pairs || question.pairs.length === 0) {
        leftContainer.innerHTML = '<div class="error">Error: No hay pares definidos</div>';
        rightContainer.innerHTML = '<div class="error">Error: No hay pares definidos</div>';
        return;
    }
    
    const pairs = [...question.pairs];
    const leftItems = pairs.map(p => p.left);
    const rightItems = shuffleArray([...pairs.map(p => p.right)]);
    
    leftItems.forEach((item) => {
        const div = document.createElement('div');
        div.className = 'matching-item-left';
        div.textContent = item;
        div.onclick = () => selectLeftItem(div);
        leftContainer.appendChild(div);
    });
    
    rightItems.forEach((item) => {
        const div = document.createElement('div');
        div.className = 'matching-item-right';
        div.textContent = item;
        div.onclick = () => selectRightItem(div);
        rightContainer.appendChild(div);
    });
}

function selectLeftItem(element) {
    if (answered || element.classList.contains('matched')) return;
    
    document.querySelectorAll('.matching-item-left').forEach(el => el.classList.remove('selected'));
    element.classList.add('selected');
    selectedLeftItem = element;
    
    const selectedRight = document.querySelector('.matching-item-right.selected');
    if (selectedRight) {
        tryMatch(selectedLeftItem, selectedRight);
    }
}

function selectRightItem(element) {
    if (answered || element.classList.contains('matched')) return;
    
    document.querySelectorAll('.matching-item-right').forEach(el => el.classList.remove('selected'));
    element.classList.add('selected');
    
    if (selectedLeftItem) {
        tryMatch(selectedLeftItem, element);
    }
}

function tryMatch(leftElement, rightElement) {
    const question = shuffledQuestions[currentQuestionIndex];
    const leftText = leftElement.textContent;
    const rightText = rightElement.textContent;
    
    if (!question.pairs) return;
    
    const pairIndex = question.pairs.findIndex(p => p.left === leftText && p.right === rightText);
    
    if (pairIndex !== -1 && !matchedPairs.includes(pairIndex)) {
        leftElement.classList.remove('selected');
        leftElement.classList.add('matched');
        rightElement.classList.remove('selected');
        rightElement.classList.add('matched');
        matchedPairs.push(pairIndex);
        selectedLeftItem = null;
        
        if (matchedPairs.length === question.pairs.length) {
            setTimeout(() => submitAnswer(), 500);
        }
    } else {
        leftElement.classList.remove('selected');
        rightElement.classList.remove('selected');
        selectedLeftItem = null;
    }
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
        
    } else if (question.type === 'matching') {
        if (!question.pairs) {
            alert('Error en la pregunta');
            return;
        }
        isCorrect = matchedPairs.length === question.pairs.length;
        if (!isCorrect) {
            message = '❌ Debes emparejar todos los elementos correctamente.';
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
    domElements.matchingContainer.classList.add('hidden');
    domElements.submitBtn.classList.add('hidden');
    domElements.nextBtn.classList.add('hidden');
    domElements.resultMessage.classList.add('hidden');
    
    const total = correctCount + incorrectCount;
    const percentage = Math.round((correctCount / total) * 100) || 0;
    
    let message = '';
    if (percentage >= 90) message = '¡Excelente! Eres un experto en los Heraldos del Advenimiento.';
    else if (percentage >= 70) message = '¡Muy bien! Conoces bien el capítulo.';
    else if (percentage >= 50) message = 'Bien, pero puedes repasar los nombres y fechas.';
    else message = 'Sigue estudiando, la historia del advenimiento es fascinante.';
    
    domElements.finalResults.innerHTML = `
        <div class="final-results-content">
            <h2>🎉 ¡CAPÍTULO 2 COMPLETADO! 🎉</h2>
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
    
    const chapterNumber = localStorage.getItem('historiaDenominacional_currentChapter') || '2';
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
    
    const chapterNumber = localStorage.getItem('historiaDenominacional_currentChapter') || '2';
    if (domElements.chapterTitle) {
        domElements.chapterTitle.textContent = `Capítulo 2: Heraldos del Mensaje del Advenimiento`;
    }
    
    updateScoreDisplay();
    loadQuestion();
});

// Hacer funciones globales
window.backToMenu = backToMenu;
window.submitAnswer = submitAnswer;
window.nextQuestion = nextQuestion;
window.restartChapter = restartChapter;