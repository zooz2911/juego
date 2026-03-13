// ============================================
// PREGUNTAS DEL CAPÍTULO 1
// ============================================
const questions = [
    // SECCIÓN 1: LA IGLESIA DEL ANTIGUO TESTAMENTO
    {
        id: 1,
        type: 'multiple',
        question: '¿Cómo se extiende la iglesia de Dios según el texto?',
        options: ['De Jerusalén a Roma', 'De Edén a Edén', 'De Sinaí a Sion', 'De Galilea al Mundo'],
        correct: 1,
        explanation: 'La iglesia de Dios se extiende de Edén a Edén.'
    },
    {
        id: 2,
        type: 'multiple',
        question: '¿Qué nombre NO recibió el pueblo de Dios según el texto?',
        options: ['Hijos de Dios', 'La semilla de Abraham', 'Los hijos de Israel', 'Los fariseos'],
        correct: 3,
        explanation: 'Los fariseos eran una secta judía.'
    },
    {
        id: 3,
        type: 'multiple',
        question: '¿Por qué la ley de los Diez Mandamientos no se puede cambiar?',
        options: ['Porque Moisés la escribió en piedra', 'Porque es una expresión del carácter de Dios', 'Porque es muy antigua', 'Porque es la ley de Israel'],
        correct: 1,
        explanation: 'La ley expresa el carácter inmutable de Dios.'
    },
    {
        id: 4,
        type: 'multiple',
        question: '¿Qué dijo Dios acerca de Abraham en Génesis 26:5?',
        options: ['Ofreció a su hijo Isaac', 'Oyó mi voz y guardó mis mandamientos', 'Construyó un altar', 'Dejó su tierra'],
        correct: 1,
        explanation: 'Abraham guardó los mandamientos de Dios.'
    },
    {
        id: 5,
        type: 'multiple',
        question: 'Según Salmos 105:8-11, ¿con quiénes hizo Dios un pacto sempiterno?',
        options: ['Con Moisés y Aarón', 'Con Abraham, Isaac, Jacob y los hijos de Israel', 'Con David y Salomón', 'Con Noé y su familia'],
        correct: 1,
        explanation: 'El pacto fue con Abraham, Isaac, Jacob e Israel.'
    },
    {
        id: 6,
        type: 'multiple',
        question: '¿Cómo mostraban su fe los miembros de la iglesia del Antiguo Testamento?',
        options: ['Con peregrinaciones', 'Con sacrificios', 'Con ayunos', 'Con ofrendas de oro'],
        correct: 1,
        explanation: 'Mediante sacrificios que simbolizaban al Cordero de Dios.'
    },
    {
        id: 7,
        type: 'multiple',
        question: '¿Quién fue el primer escritor usado por Dios para dejar instrucciones permanentes?',
        options: ['Abraham', 'Moisés', 'Isaías', 'David'],
        correct: 1,
        explanation: 'Moisés fue el primer escritor inspirado.'
    },
    {
        id: 8,
        type: 'multiple',
        question: '¿Cuándo se leían las Escrituras en el Antiguo Testamento?',
        options: ['Cada día', 'En el séptimo día sábado', 'Solo en las fiestas', 'Cada mes'],
        correct: 1,
        explanation: 'Se leían en sábado y ocasiones especiales.'
    },
    {
        id: 9,
        type: 'fill',
        question: 'La iglesia de Dios se extiende de __________ a __________.',
        correct: ['edén', 'edén'],
        explanation: 'De Edén a Edén.'
    },
    {
        id: 10,
        type: 'fill',
        question: 'La ley de los Diez Mandamientos es una expresión del __________ de Dios.',
        correct: ['carácter'],
        explanation: 'Expresa el carácter de Dios.'
    },
    {
        id: 11,
        type: 'fill',
        question: 'Dios dijo: "... oyó Abraham mi voz, y guardó mi precepto, mis mandamientos, mis __________ y mis leyes" (Génesis 26:5).',
        correct: ['estatutos'],
        explanation: 'Abraham guardó los estatutos.'
    },
    {
        id: 12,
        type: 'fill',
        question: 'Los sacrificios eran un símbolo del __________ de Dios que quitaría los pecados del mundo.',
        correct: ['cordero'],
        explanation: 'Simbolizaban al Cordero de Dios.'
    },
    {
        id: 13,
        type: 'fill',
        question: '__________ fue el primer escritor a quien usó Dios para dejar instrucciones permanentes.',
        correct: ['moisés'],
        explanation: 'Moisés.'
    },
    {
        id: 14,
        type: 'fill',
        question: 'Las escrituras se leían ante las congregaciones en el séptimo día __________.',
        correct: ['sábado'],
        explanation: 'En sábado.'
    },
    {
        id: 15,
        type: 'multiple',
        question: '¿Qué dijo Jesús en Mateo 5:17 acerca de la ley?',
        options: ['He venido a abrogar la ley', 'He venido para cumplir', 'La ley terminó conmigo', 'La ley es solo para judíos'],
        correct: 1,
        explanation: 'Jesús vino a cumplir, no a abrogar.'
    },
    {
        id: 16,
        type: 'multiple',
        question: '¿Qué declaró Pablo en Romanos 7:22?',
        options: ['La ley es difícil de guardar', 'Me deleito en la ley de Dios', 'La ley es para los gentiles', 'La ley nos condena'],
        correct: 1,
        explanation: 'Pablo se deleitaba en la ley.'
    },
    {
        id: 17,
        type: 'multiple',
        question: '¿Quién llegó a ser el primer presidente general de la iglesia apostólica?',
        options: ['Pedro', 'Pablo', 'Santiago', 'Juan'],
        correct: 2,
        explanation: 'Santiago fue el primer presidente.'
    },
    {
        id: 18,
        type: 'multiple',
        question: '¿Quién fue el primer mártir cristiano?',
        options: ['Pedro', 'Pablo', 'Esteban', 'Santiago'],
        correct: 2,
        explanation: 'Esteban fue el primer mártir.'
    },
    {
        id: 19,
        type: 'multiple',
        question: '¿Qué evangelista es considerado quizás el más grande de todos los tiempos?',
        options: ['Pedro', 'Pablo', 'Juan', 'Santiago'],
        correct: 1,
        explanation: 'Pablo.'
    },
    {
        id: 20,
        type: 'multiple',
        question: '¿Cuál de los siguientes NO fue un colaborador de Pablo mencionado en el texto?',
        options: ['Bernabé', 'Silas', 'Juan Marcos', 'Lucas'],
        correct: 3,
        explanation: 'Lucas no está en esa lista.'
    },
    {
        id: 21,
        type: 'multiple',
        question: '¿Qué oficiales eran también elegidos en la iglesia apostólica además de los apóstoles?',
        options: ['Ancianos', 'Diáconos', 'Obispos', 'Presbíteros'],
        correct: 1,
        explanation: 'Los diáconos.'
    },
    {
        id: 22,
        type: 'fill',
        question: 'Jesús dijo: "No penséis que he venido para __________ la ley o los profetas".',
        correct: ['abrogar'],
        explanation: 'No vino a abrogar.'
    },
    {
        id: 23,
        type: 'fill',
        question: 'Pablo declaró: "Porque según el hombre interior, me __________ en la ley de Dios" (Romanos 7:22).',
        correct: ['deleito'],
        explanation: 'Se deleitaba.'
    },
    {
        id: 24,
        type: 'fill',
        question: '__________ llegó a ser el primer presidente general de la iglesia apostólica.',
        correct: ['santiago'],
        explanation: 'Santiago.'
    },
    {
        id: 25,
        type: 'fill',
        question: '__________ fue el primer mártir cristiano.',
        correct: ['esteban'],
        explanation: 'Esteban.'
    },
    {
        id: 26,
        type: 'multiple',
        question: '¿Cuál fue la época más negra de persecución para la iglesia primitiva?',
        options: ['50-100 d.C.', '100-300 d.C.', '300-500 d.C.', '500-700 d.C.'],
        correct: 1,
        explanation: '100-300 d.C.'
    },
    {
        id: 27,
        type: 'multiple',
        question: '¿En qué año derribaron las tribus bárbaras del norte el imperio romano?',
        options: ['376 d.C.', '410 d.C.', '476 d.C.', '500 d.C.'],
        correct: 2,
        explanation: '476 d.C.'
    },
    {
        id: 28,
        type: 'multiple',
        question: '¿Qué período profético de supremacía papal menciona el texto?',
        options: ['1000 años', '1260 años', '2000 años', '500 años'],
        correct: 1,
        explanation: '1260 años.'
    },
    {
        id: 29,
        type: 'multiple',
        question: '¿En qué año comenzó el período de supremacía papal de 1260 años?',
        options: ['476 d.C.', '538 d.C.', '600 d.C.', '800 d.C.'],
        correct: 1,
        explanation: '538 d.C.'
    },
    {
        id: 30,
        type: 'multiple',
        question: '¿En qué año terminó el período de supremacía papal?',
        options: ['1517', '1798', '1844', '1888'],
        correct: 1,
        explanation: '1798.'
    },
    {
        id: 31,
        type: 'multiple',
        question: '¿Qué líder de la iglesia de Roma se convirtió en cabeza general de la iglesia en el año 476?',
        options: ['El Papa', 'El Obispo de Roma', 'El Cardenal', 'El Arzobispo'],
        correct: 1,
        explanation: 'El obispo de Roma.'
    },
    {
        id: 32,
        type: 'fill',
        question: 'La época más negra de persecución fue entre los años __________ y __________ d.C.',
        correct: ['100', '300'],
        explanation: '100-300 d.C.'
    },
    {
        id: 33,
        type: 'fill',
        question: 'En el año __________, las tribus bárbaras derribaron el imperio romano.',
        correct: ['476'],
        explanation: '476 d.C.'
    },
    {
        id: 34,
        type: 'fill',
        question: 'El período de supremacía papal duró __________ años, desde 538 hasta 1798.',
        correct: ['1260'],
        explanation: '1260 años.'
    },
    {
        id: 35,
        type: 'fill',
        question: 'El período de supremacía papal terminó en __________ cuando el Papa fue tomado prisionero.',
        correct: ['1798'],
        explanation: '1798.'
    },
    {
        id: 36,
        type: 'multiple',
        question: '¿Qué grupo de creyentes sobresalió entre los que resistieron al poder papal, conservando la fe por mil años?',
        options: ['Los hugonotes', 'Los valdenses', 'Los luteranos', 'Los calvinistas'],
        correct: 1,
        explanation: 'Los valdenses.'
    },
    {
        id: 37,
        type: 'multiple',
        question: '¿Quién fue llamado "el heraldo de la Reforma" para Inglaterra y toda la cristiandad?',
        options: ['Martín Lutero', 'Juan Calvino', 'Juan Wiclef', 'Juan Huss'],
        correct: 2,
        explanation: 'Juan Wiclef.'
    },
    {
        id: 38,
        type: 'multiple',
        question: '¿Qué reformador checo fue quemado vivo por su fe después de leer los escritos de Wiclef?',
        options: ['Jerónimo', 'Juan Huss', 'Valdenses', 'Juan Knox'],
        correct: 1,
        explanation: 'Juan Huss.'
    },
    {
        id: 39,
        type: 'multiple',
        question: '¿Quién fue el compañero de Juan Huss que también fue quemado vivo?',
        options: ['Jerónimo', 'Wiclef', 'Lutero', 'Calvino'],
        correct: 0,
        explanation: 'Jerónimo.'
    },
    {
        id: 40,
        type: 'fill',
        question: 'Los __________ fueron los que más sobresalieron entre los que resistieron al papado.',
        correct: ['valdenses'],
        explanation: 'Valdenses.'
    },
    {
        id: 41,
        type: 'fill',
        question: 'Juan __________ fue el heraldo de la Reforma.',
        correct: ['wiclef'],
        explanation: 'Juan Wiclef.'
    },
    {
        id: 42,
        type: 'fill',
        question: 'Juan __________ fue quemado vivo, como lo fuera también __________, su compañero.',
        correct: ['huss', 'jerónimo'],
        explanation: 'Juan Huss y Jerónimo.'
    },
    {
        id: 43,
        type: 'multiple',
        question: '¿Qué reformador alemán clavó 95 tesis en Wittenberg el 1 de noviembre de 1517?',
        options: ['Juan Calvino', 'Martín Lutero', 'Felipe Melanchton', 'Ulrico Zuinglio'],
        correct: 1,
        explanation: 'Martín Lutero.'
    },
    {
        id: 44,
        type: 'multiple',
        question: '¿Qué frase famosa dijo Lutero cuando le pidieron que se retractara?',
        options: ['"Solo la fe"', '"Aquí estoy, no puedo hacer otra cosa"', '"Dios me ayude"', '"La Biblia sola"'],
        correct: 1,
        explanation: '"Aquí estoy, no puedo hacer otra cosa".'
    },
    {
        id: 45,
        type: 'multiple',
        question: '¿Quién fue el amigo íntimo de Lutero que ayudó a escribir la Confesión de Augsburgo?',
        options: ['Juan Calvino', 'Felipe Melanchton', 'Ulrico Zuinglio', 'Juan Knox'],
        correct: 1,
        explanation: 'Felipe Melanchton.'
    },
    {
        id: 46,
        type: 'multiple',
        question: '¿Qué reformador francés fortaleció a los hugonotes?',
        options: ['Martín Lutero', 'Juan Calvino', 'Ulrico Zuinglio', 'Juan Knox'],
        correct: 1,
        explanation: 'Juan Calvino.'
    },
    {
        id: 47,
        type: 'multiple',
        question: '¿Qué reformador escocés conmovió los fundamentos de la apostasía en Escocia?',
        options: ['Juan Knox', 'Juan Calvino', 'Ulrico Zuinglio', 'Juan Wesley'],
        correct: 0,
        explanation: 'Juan Knox.'
    },
    {
        id: 48,
        type: 'multiple',
        question: '¿Quién fue el reformador en Suiza, pastor de la catedral de Zurich?',
        options: ['Juan Calvino', 'Ulrico Zuinglio', 'Felipe Melanchton', 'Juan Knox'],
        correct: 1,
        explanation: 'Ulrico Zuinglio.'
    },
    {
        id: 49,
        type: 'multiple',
        question: '¿Qué traductor dio a Inglaterra la Biblia en su propio idioma?',
        options: ['Juan Wiclef', 'Guillermo Tyndale', 'Juan Knox', 'Juan Wesley'],
        correct: 1,
        explanation: 'Guillermo Tyndale.'
    },
    {
        id: 50,
        type: 'multiple',
        question: '¿Qué reformador posterior llevó las verdades del Evangelio a lugares prominentes?',
        options: ['Juan Knox', 'Juan Calvino', 'Juan Wesley', 'Ulrico Zuinglio'],
        correct: 2,
        explanation: 'Juan Wesley.'
    },
    {
        id: 51,
        type: 'fill',
        question: 'El 1 de noviembre de __________, Lutero clavó sus 95 tesis en Wittenberg.',
        correct: ['1517'],
        explanation: '1517.'
    },
    {
        id: 52,
        type: 'fill',
        question: '__________ __________ ayudó a escribir la Confesión de Augsburgo.',
        correct: ['felipe', 'melanchton'],
        explanation: 'Felipe Melanchton.'
    },
    {
        id: 53,
        type: 'multiple',
        question: '¿Qué hermanos tradujeron la Biblia al sueco?',
        options: ['Hermanos Luther', 'Hermanos Petri', 'Hermanos Knox', 'Hermanos Calvin'],
        correct: 1,
        explanation: 'Hermanos Petri.'
    },
    {
        id: 54,
        type: 'multiple',
        question: '¿Qué reformador predicó en Dinamarca?',
        options: ['Juan Tausen', 'Olaus Petri', 'Laurentius Petri', 'Christiern Pedersen'],
        correct: 0,
        explanation: 'Juan Tausen.'
    },
    {
        id: 55,
        type: 'fill',
        question: 'Los hermanos __________ tradujeron la Biblia al sueco.',
        correct: ['petri'],
        explanation: 'Petri.'
    },
    {
        id: 56,
        type: 'fill',
        question: 'Juan __________ predicó la reforma en Dinamarca.',
        correct: ['tausen'],
        explanation: 'Juan Tausen.'
    },
    {
        id: 57,
        type: 'multiple',
        question: '¿En qué fecha zarparon los peregrinos en el Mayflower?',
        options: ['16 de septiembre de 1620', '21 de noviembre de 1620', '1 de octubre de 1620', '25 de diciembre de 1620'],
        correct: 0,
        explanation: '16 de septiembre de 1620.'
    },
    {
        id: 58,
        type: 'multiple',
        question: '¿Quién fundó la colonia de Rhode Island con libertad religiosa completa?',
        options: ['Juan Knox', 'Roger Williams', 'Guillermo Penn', 'Juan Wesley'],
        correct: 1,
        explanation: 'Roger Williams.'
    },
    {
        id: 59,
        type: 'fill',
        question: 'El 16 de septiembre de __________, los peregrinos se embarcaron en el Mayflower.',
        correct: ['1620'],
        explanation: '1620.'
    },
    {
        id: 60,
        type: 'fill',
        question: '__________ __________ fundó la colonia de Rhode Island.',
        correct: ['roger', 'williams'],
        explanation: 'Roger Williams.'
    },
    {
        id: 61,
        type: 'multiple',
        question: '¿Quién es considerado el "padre de las misiones modernas"?',
        options: ['David Livingstone', 'Guillermo Carey', 'Robert Morrison', 'Adoniram Judson'],
        correct: 1,
        explanation: 'Guillermo Carey.'
    },
    {
        id: 62,
        type: 'multiple',
        question: '¿Qué misionero preparó un diccionario inglés-chino y publicó la Biblia?',
        options: ['Guillermo Carey', 'Robert Morrison', 'Adoniram Judson', 'David Livingstone'],
        correct: 1,
        explanation: 'Robert Morrison.'
    },
    {
        id: 63,
        type: 'multiple',
        question: '¿Qué misionero tradujo la Biblia al birmano?',
        options: ['Guillermo Carey', 'Robert Morrison', 'Adoniram Judson', 'David Livingstone'],
        correct: 2,
        explanation: 'Adoniram Judson.'
    },
    {
        id: 64,
        type: 'multiple',
        question: '¿Qué misionero abrió el continente africano al cristianismo?',
        options: ['Robert Moffat', 'David Livingstone', 'John Williams', 'John G. Patón'],
        correct: 1,
        explanation: 'David Livingstone.'
    },
    {
        id: 65,
        type: 'multiple',
        question: '¿Qué misionero trabajó con un vapor llamado "El Mensajero de la Paz"?',
        options: ['John Williams', 'John G. Patón', 'Robert Moffat', 'David Livingstone'],
        correct: 0,
        explanation: 'John Williams.'
    },
    {
        id: 66,
        type: 'multiple',
        question: '¿Qué misionero fue amenazado por caníbales 53 veces?',
        options: ['John Williams', 'John G. Patón', 'Robert Moffat', 'David Livingstone'],
        correct: 1,
        explanation: 'John G. Patón.'
    },
    {
        id: 67,
        type: 'fill',
        question: 'El padre de las misiones modernas fue __________ __________.',
        correct: ['guillermo', 'carey'],
        explanation: 'Guillermo Carey.'
    },
    {
        id: 68,
        type: 'fill',
        question: 'La vida de John G. __________ fue amenazada __________ veces por caníbales.',
        correct: ['patón', '53'],
        explanation: 'Patón, 53 veces.'
    },
    {
        id: 69,
        type: 'multiple',
        question: '¿Qué profeta, junto con Juan, predijo el período de 1260 años?',
        options: ['Isaías', 'Jeremías', 'Daniel', 'Ezequiel'],
        correct: 2,
        explanation: 'Daniel.'
    },
    {
        id: 70,
        type: 'multiple',
        question: '¿Quién fue el heraldo del primer advenimiento de Cristo?',
        options: ['Isaías', 'Juan el Bautista', 'Elías', 'Moisés'],
        correct: 1,
        explanation: 'Juan el Bautista.'
    },
    {
        id: 71,
        type: 'multiple',
        question: 'Según Apocalipsis 12:17, ¿qué característica tiene la iglesia remanente?',
        options: ['Habla en lenguas', 'Guarda los mandamientos de Dios', 'Hace milagros', 'Es rica y poderosa'],
        correct: 1,
        explanation: 'Guarda los mandamientos.'
    },
    {
        id: 72,
        type: 'fill',
        question: 'La iglesia remanente guarda los __________ de Dios y tiene el __________ de Jesús.',
        correct: ['mandamientos', 'testimonio'],
        explanation: 'Mandamientos y testimonio.'
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
// COMPLETACIÓN - VERSIÓN CORREGIDA
// ============================================
function loadFillInTheBlank(question) {
    const container = domElements.fillBlankContainer;
    
    // 🔥 PASO 1: LIMPIAR COMPLETAMENTE EL CONTENEDOR
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    
    // 🔥 PASO 2: GENERAR OPCIONES
    const allOptions = generateFillOptions(question);
    
    // 🔥 PASO 3: CREAR SOLO EL CONTENEDOR DE OPCIONES (NO LA PREGUNTA)
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
        'apóstoles', 'discípulos', 'evangelistas', 'profetas', 'reyes'
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
    if (percentage >= 90) message = '¡Excelente! Eres un experto en Historia Denominacional.';
    else if (percentage >= 70) message = '¡Muy bien! Tienes un buen conocimiento.';
    else if (percentage >= 50) message = 'Bien, pero puedes repasar algunos conceptos.';
    else message = 'Sigue estudiando, la historia de la iglesia es fascinante.';
    
    domElements.finalResults.innerHTML = `
        <div class="final-results-content">
            <h2>🎉 ¡CAPÍTULO COMPLETADO! 🎉</h2>
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
    
    const chapterNumber = localStorage.getItem('historiaDenominacional_currentChapter') || '1';
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
    
    const chapterNumber = localStorage.getItem('historiaDenominacional_currentChapter') || '1';
    if (domElements.chapterTitle) {
        domElements.chapterTitle.textContent = `Capítulo ${chapterNumber}: La Iglesia Cristiana a Través de las Edades`;
    }
    
    updateScoreDisplay();
    loadQuestion();
});

// Hacer funciones globales
window.backToMenu = backToMenu;
window.submitAnswer = submitAnswer;
window.nextQuestion = nextQuestion;
window.restartChapter = restartChapter;