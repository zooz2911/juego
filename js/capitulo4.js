// ============================================
// PREGUNTAS DEL CAPÍTULO 4 CON NIVELES DE DIFICULTAD
// ============================================
const questions = [
    // ============================================
    // NIVEL FÁCIL - Preguntas de opción múltiple (42 preguntas)
    // ============================================
    {
        id: 1,
        level: 'facil',
        type: 'multiple',
        question: '¿En qué año se introdujo la entrega de credenciales a los ministros?',
        options: ['1850', '1853', '1855', '1860'],
        correct: 1,
        explanation: 'La entrega de credenciales fue introducida en 1853.'
    },
    {
        id: 2,
        level: 'facil',
        type: 'multiple',
        question: '¿Qué tipo de ministros recibieron las primeras credenciales?',
        options: ['Ministros asalariados', 'Ministros de sostén propio', 'Misioneros extranjeros', 'Pastores jubilados'],
        correct: 1,
        explanation: 'Eran ministros de sostén propio que predicaban con celo.'
    },
    {
        id: 3,
        level: 'facil',
        type: 'multiple',
        question: '¿Quiénes usaron una carpa para un esfuerzo evangélico en 1854?',
        options: ['Jaime White y Elena White', 'M.W. Cornell y J.N. Loughborough', 'José Bates y J.N. Andrews', 'Urías Smith y J.H. Waggoner'],
        correct: 1,
        explanation: 'Los pastores M.W. Cornell y J.N. Loughborough usaron una carpa en 1854.'
    },
    {
        id: 4,
        level: 'facil',
        type: 'multiple',
        question: '¿Dónde se celebraron las primeras escuelas sabáticas regulares?',
        options: ['Battle Creek y Washington', 'Rochester y Buck\'s Bridge', 'Nueva York y Boston', 'Michigan y Ohio'],
        correct: 1,
        explanation: 'En Rochester y Buck\'s Bridge, Nueva York, en 1853 y 1854.'
    },
    {
        id: 6,
        level: 'facil',
        type: 'multiple',
        question: '¿Cuánto dinero ofrecieron cuatro laicos a Jaime White para la imprenta?',
        options: ['$500', '$1,200', '$2,000', '$5,000'],
        correct: 1,
        explanation: 'Le dieron $1,200 para fabricar un edificio para la imprenta.'
    },
    {
        id: 7,
        level: 'facil',
        type: 'multiple',
        question: '¿De dónde se mudaron los White a Battle Creek en 1855?',
        options: ['Boston', 'Rochester, Nueva York', 'Portland', 'Washington'],
        correct: 1,
        explanation: 'Se mudaron de Rochester, Nueva York, a Battle Creek, Michigan.'
    },
    {
        id: 8,
        level: 'facil',
        type: 'multiple',
        question: '¿Hasta qué año permaneció la sede de la obra en Battle Creek?',
        options: ['1880', '1890', '1903', '1915'],
        correct: 2,
        explanation: 'La sede permaneció allí hasta 1903.'
    },
    {
        id: 9,
        level: 'facil',
        type: 'multiple',
        question: '¿Qué publicaciones se imprimían en Battle Creek?',
        options: ['Review and Herald y Youth\'s Instructor', 'Signs of the Times y The Present Truth', 'The Advent Review y The Midnight Cry', 'Guide e Insight'],
        correct: 0,
        explanation: 'Imprimían Review and Herald, Youth\'s Instructor y tratados.'
    },
    {
        id: 10,
        level: 'facil',
        type: 'multiple',
        question: '¿Quién fue nombrado redactor en Battle Creek?',
        options: ['Jaime White', 'J.N. Andrews', 'Urías Smith', 'J.H. Waggoner'],
        correct: 2,
        explanation: 'Urías Smith fue nombrado redactor.'
    },
    {
        id: 11,
        level: 'facil',
        type: 'multiple',
        question: '¿Qué pionero se mudó también a Michigan y viajaba constantemente?',
        options: ['J.N. Andrews', 'José Bates', 'J.H. Waggoner', 'Juan Byington'],
        correct: 1,
        explanation: 'José Bates se mudó a Michigan y viajaba constantemente.'
    },
    {
        id: 16,
        level: 'facil',
        type: 'multiple',
        question: '¿En qué año comenzó a publicarse "The Present Truth"?',
        options: ['1848', '1849', '1850', '1852'],
        correct: 1,
        explanation: 'En 1849, un grupo comenzó a publicar The Present Truth.'
    },
    {
        id: 17,
        level: 'facil',
        type: 'multiple',
        question: '¿En qué año se publicaron seis números de "The Advent Review"?',
        options: ['1849', '1850', '1852', '1855'],
        correct: 1,
        explanation: 'En 1850 se publicaron seis números de The Advent Review.'
    },
    {
        id: 18,
        level: 'facil',
        type: 'multiple',
        question: '¿En qué fecha se fusionaron "The Present Truth" y "The Advent Review"?',
        options: ['1849', '1850', '1852', '1855'],
        correct: 1,
        explanation: 'En noviembre de 1850 emergieron bajo un nuevo nombre.'
    },
    {
        id: 19,
        level: 'facil',
        type: 'multiple',
        question: '¿Qué nombre recibió la revista fusionada?',
        options: ['Adventist Review', 'Second Advent Review and Sabbath Herald', 'The Present Truth', 'The Advent Herald'],
        correct: 1,
        explanation: 'Second Advent Review and Sabbath Herald.'
    },
    {
        id: 20,
        level: 'facil',
        type: 'multiple',
        question: '¿Cómo se llama actualmente la revista oficial de la iglesia?',
        options: ['Review and Herald', 'Adventist Review', 'Signs of the Times', 'Guide'],
        correct: 1,
        explanation: 'Adventist Review (Revista Adventista).'
    },
    {
        id: 21,
        level: 'facil',
        type: 'multiple',
        question: '¿En qué año fue publicado por primera vez "Youth\'s Instructor"?',
        options: ['1850', '1852', '1855', '1860'],
        correct: 1,
        explanation: 'Fue publicado por primera vez por Jaime White en 1852.'
    },
    {
        id: 22,
        level: 'facil',
        type: 'multiple',
        question: '¿Dónde fue publicado por primera vez "Youth\'s Instructor"?',
        options: ['Battle Creek', 'Rochester', 'Boston', 'Washington'],
        correct: 1,
        explanation: 'En Rochester.'
    },
    {
        id: 23,
        level: 'facil',
        type: 'multiple',
        question: '¿Qué revista ha reemplazado a "Youth\'s Instructor" en la actualidad?',
        options: ['Guide', 'Insight', 'Adventist Review', 'Signs of the Times'],
        correct: 1,
        explanation: 'Insight (y también Guide).'
    },
    {
        id: 26,
        level: 'facil',
        type: 'multiple',
        question: '¿Por qué muchos adventistas se oponían inicialmente a la organización?',
        options: ['Porque querían ser independientes', 'Porque habían sido desfraternizados de sus iglesias anteriores', 'Porque no veían necesidad', 'Porque la Biblia no lo menciona'],
        correct: 1,
        explanation: 'Muchos habían sido desfraternizados y temían la organización formal.'
    },
    {
        id: 27,
        level: 'facil',
        type: 'multiple',
        question: '¿Quién dirigió el estudio bíblico sobre el sostenimiento del ministerio?',
        options: ['Jaime White', 'José Bates', 'J.N. Andrews', 'Urías Smith'],
        correct: 2,
        explanation: 'Bajo la dirección de J.N. Andrews se estudió el tema.'
    },
    {
        id: 28,
        level: 'facil',
        type: 'multiple',
        question: '¿Cómo se llamó el plan de financiamiento recomendado?',
        options: ['Ofrenda sistemática', 'Benevolencia sistemática', 'Diezmo voluntario', 'Contribución anual'],
        correct: 1,
        explanation: 'Se llamó benevolencia sistemática.'
    },
    {
        id: 29,
        level: 'facil',
        type: 'multiple',
        question: '¿Qué porcentaje de sus propiedades libres de deuda debían dar los miembros anualmente?',
        options: ['1%', '5%', '10%', '15%'],
        correct: 0,
        explanation: 'Al menos un 1% de todas sus propiedades libres de deuda.'
    },
    {
        id: 30,
        level: 'facil',
        type: 'multiple',
        question: '¿Qué sugirió Jaime White en 1853 respecto a la literatura?',
        options: ['Regalarla', 'Venderla', 'Quemarla', 'Almacenarla'],
        correct: 1,
        explanation: 'Sugirió que los ministros vendieran las revistas y tratados.'
    },
    {
        id: 31,
        level: 'facil',
        type: 'multiple',
        question: '¿Cuánto costaba un juego completo de revistas y tratados?',
        options: ['15 centavos', '25 centavos', '35 centavos', '50 centavos'],
        correct: 2,
        explanation: '¡Un juego completo costaba sólo 35 centavos!'
    },
    {
        id: 36,
        level: 'facil',
        type: 'multiple',
        question: '¿De qué acusaban a Jaime White y otros que apoyaban la organización?',
        options: ['De herejía', 'De querer mandar y unir la iglesia con el estado', 'De robo', 'De mentir'],
        correct: 1,
        explanation: 'Los acusaban de querer mandar y unir la iglesia con el estado.'
    },
    {
        id: 37,
        level: 'facil',
        type: 'multiple',
        question: '¿Qué dijo Elena White mediante testimonio acerca de la organización?',
        options: ['No es necesaria', 'Hay orden en el cielo y debe haber orden en la iglesia', 'Es peligrosa', 'Debe esperar'],
        correct: 1,
        explanation: '"Hay orden en el cielo, y Dios se agrada de los esfuerzos de su pueblo al tratar de atender las cosas de su obra en esta tierra con sistema y con orden."'
    },
    {
        id: 38,
        level: 'facil',
        type: 'multiple',
        question: '¿En qué año alcanzó su clímax la discusión sobre la organización?',
        options: ['1855', '1858', '1860', '1863'],
        correct: 2,
        explanation: 'En 1860 alcanzó su clímax la discusión.'
    },
    {
        id: 42,
        level: 'facil',
        type: 'multiple',
        question: '¿En qué año fue adoptado el nombre "Adventistas del Séptimo Día"?',
        options: ['1855', '1860', '1863', '1865'],
        correct: 1,
        explanation: 'En 1860 fue adoptado el nombre.'
    },
    {
        id: 43,
        level: 'facil',
        type: 'multiple',
        question: '¿Quién apoyó más tarde la elección del nombre?',
        options: ['Jaime White', 'José Bates', 'Elena White', 'J.N. Andrews'],
        correct: 2,
        explanation: 'Elena White apoyó esa elección.'
    },
    {
        id: 44,
        level: 'facil',
        type: 'multiple',
        question: '¿En qué fecha se incorporó la Seventh-day Adventist Publishing Association?',
        options: ['13 de mayo de 1860', '13 de mayo de 1861', '20 de mayo de 1861', '13 de mayo de 1863'],
        correct: 1,
        explanation: 'El 13 de mayo de 1861 se incorporó.'
    },
    {
        id: 45,
        level: 'facil',
        type: 'multiple',
        question: '¿Qué asociación estatal se organizó en 1861?',
        options: ['Nueva York', 'Ohio', 'Michigan', 'Pensilvania'],
        correct: 2,
        explanation: 'La primera asociación fue con las iglesias del estado de Michigan.'
    },
    {
        id: 46,
        level: 'facil',
        type: 'multiple',
        question: '¿Cuántas asociaciones se organizaron en 1862?',
        options: ['Cinco', 'Seis', 'Siete', 'Ocho'],
        correct: 2,
        explanation: 'Se organizaron otras siete asociaciones.'
    },
    {
        id: 51,
        level: 'facil',
        type: 'multiple',
        question: '¿Dónde se celebró la primera reunión general oficial de la Iglesia?',
        options: ['Rochester', 'Washington', 'Battle Creek', 'Nueva York'],
        correct: 2,
        explanation: 'En Battle Creek, en 1863.'
    },
    {
        id: 52,
        level: 'facil',
        type: 'multiple',
        question: '¿En qué año se celebró el primer Congreso de la Asociación General?',
        options: ['1860', '1861', '1862', '1863'],
        correct: 3,
        explanation: 'En 1863.'
    },
    {
        id: 53,
        level: 'facil',
        type: 'multiple',
        question: '¿Cuántos artículos contenía la constitución adoptada?',
        options: ['Siete', 'Ocho', 'Nueve', 'Diez'],
        correct: 2,
        explanation: 'Nueve artículos.'
    },
    {
        id: 54,
        level: 'facil',
        type: 'multiple',
        question: '¿Quién fue elegido como primer presidente de la Asociación General?',
        options: ['Jaime White', 'José Bates', 'Juan Byington', 'J.N. Andrews'],
        correct: 2,
        explanation: 'Juan Byington fue el primer presidente.'
    },
    {
        id: 55,
        level: 'facil',
        type: 'multiple',
        question: '¿Quién fue elegido como secretario?',
        options: ['Jaime White', 'Urías Smith', 'J.N. Andrews', 'J.H. Waggoner'],
        correct: 1,
        explanation: 'Urías Smith fue el secretario.'
    },
    {
        id: 56,
        level: 'facil',
        type: 'multiple',
        question: '¿Quién fue elegido como tesorero?',
        options: ['E.S. Walder', 'J.N. Loughborough', 'José Bates', 'J.H. Waggoner'],
        correct: 0,
        explanation: 'E.S. Walder fue el tesorero.'
    },
    {
        id: 57,
        level: 'facil',
        type: 'multiple',
        question: '¿Por qué Jaime White declinó la presidencia?',
        options: ['Por enfermedad', 'Porque no quería', 'Porque su defensa de la organización podría comprometer su puesto', 'Porque viajaba mucho'],
        correct: 2,
        explanation: 'Declinó porque su defensa de la organización podría comprometer su puesto.'
    },
    {
        id: 58,
        level: 'facil',
        type: 'multiple',
        question: '¿Quiénes eran los miembros de la junta ejecutiva?',
        options: ['Byington, Loughborough y White', 'Byington, Andrews y Bates', 'White, Smith y Waggoner', 'Loughborough, Andrews y Smith'],
        correct: 0,
        explanation: 'Juan Byington, J.N. Loughborough y Jaime White.'
    },
    {
        id: 59,
        level: 'facil',
        type: 'multiple',
        question: '¿Cuántos miembros había en la iglesia en 1863?',
        options: ['2,500', '3,000', '3,500', '4,000'],
        correct: 2,
        explanation: 'Había 3,500 miembros.'
    },
    {
        id: 60,
        level: 'facil',
        type: 'multiple',
        question: '¿Cuántas iglesias había en 1863?',
        options: ['100', '125', '150', '175'],
        correct: 1,
        explanation: '125 iglesias.'
    },
    {
        id: 61,
        level: 'facil',
        type: 'multiple',
        question: '¿Cuántos ministros ordenados había en 1863?',
        options: ['15', '20', '22', '25'],
        correct: 2,
        explanation: '22 ministros ordenados.'
    },
    {
        id: 62,
        level: 'facil',
        type: 'multiple',
        question: '¿Cuántos ministros con licencia había en 1863?',
        options: ['5', '8', '10', '12'],
        correct: 1,
        explanation: 'Ocho ministros con licencia.'
    },

    // ============================================
    // NIVEL MEDIO - Preguntas de completación (23 preguntas)
    // ============================================
    {
        id: 5,
        level: 'medio',
        type: 'fill',
        question: 'Las credenciales a los ministros se introdujeron en el año __________.',
        correct: ['1853'],
        explanation: '1853.'
    },
    {
        id: 12,
        level: 'medio',
        type: 'fill',
        question: 'Cuatro laicos ofrecieron $__________ a Jaime White para la imprenta.',
        correct: ['1200'],
        explanation: '$1,200.'
    },
    {
        id: 13,
        level: 'medio',
        type: 'fill',
        question: 'Los White se mudaron a Battle Creek, __________ en 1855.',
        correct: ['michigan'],
        explanation: 'Michigan.'
    },
    {
        id: 14,
        level: 'medio',
        type: 'fill',
        question: 'La sede de la obra permaneció en Battle Creek hasta __________.',
        correct: ['1903'],
        explanation: '1903.'
    },
    {
        id: 15,
        level: 'medio',
        type: 'fill',
        question: 'Urías Smith fue nombrado __________ en Battle Creek.',
        correct: ['redactor'],
        explanation: 'Redactor.'
    },
    {
        id: 24,
        level: 'medio',
        type: 'fill',
        question: 'The Present Truth comenzó a publicarse en el año __________.',
        correct: ['1849'],
        explanation: '1849.'
    },
    {
        id: 25,
        level: 'medio',
        type: 'fill',
        question: 'Youth\'s Instructor fue publicado por primera vez por Jaime White en __________.',
        correct: ['1852'],
        explanation: '1852.'
    },
    {
        id: 32,
        level: 'medio',
        type: 'fill',
        question: 'El plan de financiamiento se llamó __________ sistemática.',
        correct: ['benevolencia'],
        explanation: 'Benevolencia sistemática.'
    },
    {
        id: 33,
        level: 'medio',
        type: 'fill',
        question: 'Los miembros debían dar anualmente un 1% de sus propiedades libres de __________.',
        correct: ['deuda'],
        explanation: 'Libres de deuda.'
    },
    {
        id: 34,
        level: 'medio',
        type: 'fill',
        question: 'Jaime White sugirió __________ las revistas y tratados en 1853.',
        correct: ['vender'],
        explanation: 'Vender.'
    },
    {
        id: 35,
        level: 'medio',
        type: 'fill',
        question: 'Un juego completo de revistas costaba __________ centavos.',
        correct: ['35'],
        explanation: '35 centavos.'
    },
    {
        id: 39,
        level: 'medio',
        type: 'fill',
        question: 'Acusaban a Jaime White de querer unir la iglesia con el __________.',
        correct: ['estado'],
        explanation: 'Con el estado.'
    },
    {
        id: 40,
        level: 'medio',
        type: 'fill',
        question: 'Elena White dijo: "Hay __________ en el cielo".',
        correct: ['orden'],
        explanation: 'Orden.'
    },
    {
        id: 41,
        level: 'medio',
        type: 'fill',
        question: 'La discusión sobre la organización alcanzó su clímax en __________.',
        correct: ['1860'],
        explanation: '1860.'
    },
    {
        id: 47,
        level: 'medio',
        type: 'fill',
        question: 'El nombre "Adventistas del Séptimo Día" fue adoptado en __________.',
        correct: ['1860'],
        explanation: '1860.'
    },
    {
        id: 48,
        level: 'medio',
        type: 'fill',
        question: 'La Seventh-day Adventist Publishing Association se incorporó el 13 de mayo de __________.',
        correct: ['1861'],
        explanation: '1861.'
    },
    {
        id: 49,
        level: 'medio',
        type: 'fill',
        question: 'La primera asociación estatal fue la de __________ en 1861.',
        correct: ['michigan'],
        explanation: 'Michigan.'
    },
    {
        id: 50,
        level: 'medio',
        type: 'fill',
        question: 'En 1862 se organizaron __________ asociaciones.',
        correct: ['siete'],
        explanation: 'Siete.'
    },
    {
        id: 63,
        level: 'medio',
        type: 'fill',
        question: 'El primer Congreso de la Asociación General fue en Battle Creek en __________.',
        correct: ['1863'],
        explanation: '1863.'
    },
    {
        id: 64,
        level: 'medio',
        type: 'fill',
        question: 'El primer presidente de la Asociación General fue Juan __________.',
        correct: ['byington'],
        explanation: 'Juan Byington.'
    },
    {
        id: 65,
        level: 'medio',
        type: 'fill',
        question: 'En 1863 había 3,500 miembros en __________ iglesias.',
        correct: ['125'],
        explanation: '125 iglesias.'
    },

    // ============================================
    // NIVEL DIFÍCIL - Preguntas avanzadas (creadas para este nivel)
    // ============================================
    {
        id: 66,
        level: 'dificil',
        type: 'multiple',
        question: '¿Qué relación tenían M.W. Cornell y J.N. Loughborough con la obra evangelística?',
        options: ['Fueron los primeros en usar una carpa', 'Tradujeron la Biblia', 'Fundaron escuelas', 'Escribieron himnos'],
        correct: 0,
        explanation: 'Fueron los primeros en usar una carpa para esfuerzos evangélicos en 1854.'
    },
    {
        id: 67,
        level: 'dificil',
        type: 'multiple',
        question: '¿Qué papel desempeñó J.N. Andrews en la organización de la iglesia?',
        options: ['Fue el primer presidente', 'Dirigió el estudio sobre sostenimiento del ministerio', 'Fue el primer tesorero', 'Fundó la primera iglesia'],
        correct: 1,
        explanation: 'J.N. Andrews dirigió el estudio bíblico sobre el sostenimiento del ministerio.'
    },
    {
        id: 68,
        level: 'dificil',
        type: 'multiple',
        question: '¿Cuál fue la consecuencia directa de la oposición a la organización?',
        options: ['Se disolvió la iglesia', 'Se retrasó la organización por varios años', 'Elena White tuvo que intervenir con un testimonio', 'Se cambió el nombre de la iglesia'],
        correct: 2,
        explanation: 'Elena White tuvo que dar un testimonio sobre el orden en el cielo para ayudar a resolver la oposición.'
    },
    {
        id: 69,
        level: 'dificil',
        type: 'fill',
        question: 'La primera escuela sabática regular se estableció en __________ y __________ en 1853-1854.',
        correct: ['rochester', 'buck\'s bridge'],
        explanation: 'En Rochester y Buck\'s Bridge, Nueva York.'
    },
    {
        id: 70,
        level: 'dificil',
        type: 'fill',
        question: 'El primer número de Youth\'s Instructor fue publicado por Jaime White en __________, mientras que The Present Truth comenzó en __________.',
        correct: ['1852', '1849'],
        explanation: 'Youth\'s Instructor: 1852, The Present Truth: 1849.'
    }
];

// ============================================
// VARIABLES GLOBALES
// ============================================
let currentQuestionIndex = 0;
let currentLevel = 'facil';
let shuffledQuestions = [];
let correctCount = 0;
let incorrectCount = 0;
let answered = false;
let selectedOption = null;
let selectedFillOption = null;

const chapters = [
    { number: 1, title: 'La Iglesia Cristiana a Través de las Edades' },
    { number: 2, title: 'Heraldos del Mensaje del Advenimiento' },
    { number: 3, title: 'Surge la Iglesia Remanente' },
    { number: 4, title: 'Se Organiza la Iglesia Remanente' },
    { number: 5, title: 'Expansión y Reforma' },
    { number: 6, title: 'Visión Mundial' },
    { number: 7, title: 'Progreso y Pérdidas de Importancia' },
    { number: 8, title: 'Continúa la Expansión de las Misiones' },
    { number: 9, title: 'Progreso a Pesar de los Reveses' },
    { number: 10, title: 'Confirmación y Expansión' },
    { number: 11, title: 'La Terminación de la Comisión Evangélica' },
    { number: 12, title: 'Los Departamentos de la Iglesia' },
    { number: 13, title: 'Divisiones Mundiales de la Iglesia' }
];

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
    finalResults: document.getElementById('finalResults'),
    submitBtn: document.getElementById('submitBtn'),
    nextBtn: document.getElementById('nextBtn'),
    resultMessage: document.getElementById('resultMessage'),
    chapterTitle: document.getElementById('chapterTitle'),
    chapterSelector: document.getElementById('chapterSelector')
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
    updateMenuStats();
}

// ============================================
// SELECTOR DE CAPÍTULOS
// ============================================
function loadChapterSelector() {
    const selector = domElements.chapterSelector;
    if (!selector) return;
    
    selector.innerHTML = '';
    const currentChapter = parseInt(localStorage.getItem('historiaDenominacional_currentChapter') || '4');
    const completedChapters = JSON.parse(localStorage.getItem('historiaDenominacional_progress') || '[]');
    
    chapters.forEach(chapter => {
        const option = document.createElement('option');
        option.value = chapter.number;
        const isCompleted = completedChapters.includes(chapter.number);
        option.textContent = `Capítulo ${chapter.number}: ${chapter.title.substring(0, 20)}... ${isCompleted ? '✓ COMPLETADO' : ''}`;
        if (chapter.number === currentChapter) {
            option.selected = true;
        }
        selector.appendChild(option);
    });
    
    selector.addEventListener('change', function() {
        const newChapter = parseInt(this.value);
        if (newChapter !== currentChapter) {
            if (confirm('¿Cambiar de capítulo? Se perderá tu progreso actual.')) {
                localStorage.setItem('historiaDenominacional_currentChapter', newChapter);
                window.location.href = `../libros/capitulo${newChapter}.html`;
            } else {
                this.value = currentChapter;
            }
        }
    });
}

// ============================================
// CARGAR CAPÍTULOS EN EL MENÚ LATERAL
// ============================================
function loadChaptersMenu() {
    const chaptersGrid = document.getElementById('chaptersGrid');
    if (!chaptersGrid) return;
    
    chaptersGrid.innerHTML = '';
    const currentChapter = parseInt(localStorage.getItem('historiaDenominacional_currentChapter') || '4');
    const completedChapters = JSON.parse(localStorage.getItem('historiaDenominacional_progress') || '[]');
    
    chapters.forEach(chapter => {
        const button = document.createElement('button');
        button.className = 'chapter-btn';
        if (chapter.number === currentChapter) {
            button.classList.add('active');
        }
        if (completedChapters.includes(chapter.number)) {
            button.classList.add('completed');
            button.innerHTML = `${chapter.number} ✓`;
        } else {
            button.textContent = chapter.number;
        }
        button.onclick = () => goToChapter(chapter.number);
        chaptersGrid.appendChild(button);
    });
}

// ============================================
// FUNCIÓN PARA CAMBIAR DE CAPÍTULO
// ============================================
function goToChapter(chapterNumber) {
    const currentChapter = parseInt(localStorage.getItem('historiaDenominacional_currentChapter') || '4');
    if (chapterNumber === currentChapter) {
        toggleMenu();
        return;
    }
    
    if (confirm(`¿Ir al capítulo ${chapterNumber}? Se perderá tu progreso actual.`)) {
        localStorage.setItem('historiaDenominacional_currentChapter', chapterNumber);
        window.location.href = `../libros/capitulo${chapterNumber}.html`;
    }
}

// ============================================
// CAMBIAR NIVEL
// ============================================
function changeLevel(level) {
    if (level === currentLevel) return;
    
    if (confirm(`¿Cambiar a nivel ${level}? Se reiniciará tu progreso actual.`)) {
        currentLevel = level;
        localStorage.setItem('historiaDenominacional_level', level);
        
        const allLevelBtns = document.querySelectorAll('.level-btn');
        allLevelBtns.forEach(btn => {
            if (btn.dataset.level === level) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
        
        const chapterNumber = localStorage.getItem('historiaDenominacional_currentChapter') || '4';
        if (domElements.chapterTitle) {
            domElements.chapterTitle.textContent = `Capítulo ${chapterNumber}: Se Organiza la Iglesia Remanente - Nivel ${level}`;
        }
        
        restartChapter();
    }
}

// ============================================
// FILTRAR PREGUNTAS POR NIVEL
// ============================================
function filterQuestionsByLevel(level) {
    return questions.filter(q => q.level === level);
}

// ============================================
// SELECCIÓN MÚLTIPLE
// ============================================
function loadMultipleChoice(question) {
    const container = domElements.multipleChoiceContainer;
    
    container.innerHTML = '';
    container.classList.remove('hidden');
    
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
    
    container.innerHTML = '';
    container.classList.remove('hidden');
    
    const allOptions = generateFillOptions(question);
    
    const fillOptionsDiv = document.createElement('div');
    fillOptionsDiv.className = 'fill-options';
    
    allOptions.forEach((option) => {
        const button = document.createElement('button');
        button.className = 'fill-option-btn';
        button.textContent = option;
        button.onclick = () => selectFillOption(button, option);
        fillOptionsDiv.appendChild(button);
    });
    
    container.appendChild(fillOptionsDiv);
}

function generateFillOptions(question) {
    const correctAnswer = question.correct.join(' ').toLowerCase();
    
    const incorrectPool = [
        '1850', '1852', '1854', '1855', '1858', '1860', '1861', '1862', '1865',
        'rochester', 'battle creek', 'michigan', 'nueva york', 'washington',
        'white', 'andrews', 'bates', 'smith', 'byington', 'loughborough',
        'cornell', 'walder', 'review', 'herald', 'instructor', 'present truth',
        'advent review', '35', '1200', '1903', 'credential', 'carpa', 'escuela',
        'estado', 'orden', 'benevolencia', 'deuda', 'vender', 'siete', '1849',
        '1852', '1853', '1863'
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
// CARGA DE PREGUNTA
// ============================================
function loadQuestion() {
    const question = shuffledQuestions[currentQuestionIndex];
    
    domElements.questionCounter.textContent = `Pregunta ${currentQuestionIndex + 1}/${shuffledQuestions.length}`;
    domElements.questionText.textContent = question.question;
    
    const progress = ((currentQuestionIndex + 1) / shuffledQuestions.length) * 100;
    domElements.progressFill.style.width = `${progress}%`;
    domElements.progressText.textContent = `Progreso: ${currentQuestionIndex + 1}/${shuffledQuestions.length}`;
    
    domElements.multipleChoiceContainer.classList.add('hidden');
    domElements.fillBlankContainer.classList.add('hidden');
    domElements.finalResults.classList.add('hidden');
    
    answered = false;
    domElements.submitBtn.disabled = false;
    domElements.resultMessage.classList.add('hidden');
    domElements.nextBtn.classList.add('hidden');
    
    selectedOption = null;
    selectedFillOption = null;
    
    if (question.type === 'multiple') {
        domElements.questionType.textContent = 'Selección Simple';
        loadMultipleChoice(question);
    } else if (question.type === 'fill') {
        domElements.questionType.textContent = 'Completación';
        loadFillInTheBlank(question);
    }
}

// ============================================
// RESPUESTA
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
    let levelMessage = '';
    
    switch(currentLevel) {
        case 'facil':
            levelMessage = 'Nivel Fácil completado. ¡Sigue practicando!';
            break;
        case 'medio':
            levelMessage = 'Nivel Medio superado. ¡Muy bien!';
            break;
        case 'dificil':
            levelMessage = 'Nivel Difícil dominado. ¡Eres un experto!';
            break;
    }
    
    if (percentage >= 90) message = '¡Excelente! Conoces bien la organización de la iglesia.';
    else if (percentage >= 70) message = '¡Muy bien! Tienes un buen conocimiento.';
    else if (percentage >= 50) message = 'Bien, pero puedes repasar algunos conceptos.';
    else message = 'Sigue estudiando, la historia de la iglesia es fascinante.';
    
    domElements.finalResults.innerHTML = `
        <div class="final-results-content">
            <h2>🎉 ¡CAPÍTULO 4 COMPLETADO! 🎉</h2>
            <div class="level-badge">${levelMessage}</div>
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
                <button class="final-btn" onclick="restartChapter()">🔄 Repetir Nivel</button>
                <button class="final-btn" onclick="changeLevelPrompt()">🎮 Cambiar Nivel</button>
            </div>
        </div>
    `;
    
    domElements.finalResults.classList.remove('hidden');
    
    const chapterNumber = parseInt(localStorage.getItem('historiaDenominacional_currentChapter') || '4');
    completeChapter(chapterNumber);
    
    loadChapterSelector();
    loadChaptersMenu();
}

function changeLevelPrompt() {
    const newLevel = prompt('Selecciona nivel: facil, medio, dificil');
    if (newLevel && ['facil', 'medio', 'dificil'].includes(newLevel)) {
        changeLevel(newLevel);
    }
}

// ============================================
// REINICIAR CAPÍTULO
// ============================================
function restartChapter() {
    const levelQuestions = filterQuestionsByLevel(currentLevel);
    shuffledQuestions = shuffleArray([...levelQuestions]);
    
    currentQuestionIndex = 0;
    correctCount = 0;
    incorrectCount = 0;
    
    updateScoreDisplay();
    domElements.finalResults.classList.add('hidden');
    domElements.submitBtn.classList.remove('hidden');
    
    const totalQuestions = shuffledQuestions.length;
    domElements.questionCounter.textContent = `Pregunta 1/${totalQuestions}`;
    domElements.progressText.textContent = `Progreso: 0/${totalQuestions}`;
    
    loadQuestion();
}

// ============================================
// COMPLETAR CAPÍTULO
// ============================================
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
// MARCAR EL CAPÍTULO ACTUAL EN EL MENÚ
// ============================================
function markCurrentChapter() {
    const currentChapter = parseInt(localStorage.getItem('historiaDenominacional_currentChapter') || '4');
    const chapterBtns = document.querySelectorAll('.chapter-btn');
    
    chapterBtns.forEach(btn => {
        btn.classList.remove('active');
        const btnNumber = parseInt(btn.textContent.replace('✓', '').trim());
        if (btnNumber === currentChapter) {
            btn.classList.add('active');
        }
    });
}

// ============================================
// FUNCIONES PARA EL MENÚ HAMBURGUESA
// ============================================
function toggleMenu() {
    const sideMenu = document.getElementById('sideMenu');
    const overlay = document.getElementById('menuOverlay');
    const hamburger = document.getElementById('hamburgerBtn');
    
    if (sideMenu && overlay && hamburger) {
        sideMenu.classList.remove('hidden');
        overlay.classList.remove('hidden');
        
        sideMenu.classList.toggle('open');
        overlay.classList.toggle('open');
        hamburger.classList.toggle('open');
        
        if (!sideMenu.classList.contains('open')) {
            setTimeout(() => {
                if (!sideMenu.classList.contains('open')) {
                    sideMenu.classList.add('hidden');
                    overlay.classList.add('hidden');
                }
            }, 300);
        }
        
        markCurrentChapter();
    }
}

function updateMenuStats() {
    const menuCorrect = document.getElementById('menuCorrectCount');
    const menuIncorrect = document.getElementById('menuIncorrectCount');
    const menuProgress = document.getElementById('menuProgress');
    
    if (menuCorrect) menuCorrect.textContent = correctCount;
    if (menuIncorrect) menuIncorrect.textContent = incorrectCount;
    
    const total = correctCount + incorrectCount;
    const totalQuestions = shuffledQuestions.length;
    const progress = Math.round((total / totalQuestions) * 100) || 0;
    
    if (menuProgress) menuProgress.textContent = `${progress}%`;
}

// ============================================
// INICIALIZACIÓN
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    console.log('Capítulo 4 - Iniciando...');
    
    if (!domElements.correctCount || !domElements.incorrectCount) {
        console.error('No se encontraron los elementos de contador');
        return;
    }
    
    const savedLevel = localStorage.getItem('historiaDenominacional_level') || 'facil';
    currentLevel = savedLevel;
    
    const levelQuestions = filterQuestionsByLevel(currentLevel);
    shuffledQuestions = shuffleArray([...levelQuestions]);
    
    console.log(`Preguntas cargadas: ${shuffledQuestions.length} de nivel ${currentLevel}`);
    
    currentQuestionIndex = 0;
    correctCount = 0;
    incorrectCount = 0;
    
    const chapterNumber = localStorage.getItem('historiaDenominacional_currentChapter') || '4';
    if (domElements.chapterTitle) {
        domElements.chapterTitle.textContent = `Capítulo ${chapterNumber}: Se Organiza la Iglesia Remanente - Nivel ${currentLevel}`;
    }
    
    const allLevelBtns = document.querySelectorAll('.level-btn');
    allLevelBtns.forEach(btn => {
        if (btn.dataset.level === currentLevel) {
            btn.classList.add('active');
        }
    });
    
    loadChapterSelector();
    loadChaptersMenu();
    markCurrentChapter();
    updateScoreDisplay();
    loadQuestion();
});

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        const sideMenu = document.getElementById('sideMenu');
        if (sideMenu && sideMenu.classList.contains('open')) {
            toggleMenu();
        }
    }
});

window.backToMenu = backToMenu;
window.submitAnswer = submitAnswer;
window.nextQuestion = nextQuestion;
window.restartChapter = restartChapter;
window.changeLevel = changeLevel;
window.changeLevelPrompt = changeLevelPrompt;
window.toggleMenu = toggleMenu;
window.goToChapter = goToChapter;