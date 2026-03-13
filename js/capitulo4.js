// ============================================
// PREGUNTAS DEL CAPÍTULO 4 - SE ORGANIZA LA IGLESIA REMANENTE (1853-1863)
// ============================================
const questions = [
    // ============================================
    // SECCIÓN A: CREDENCIALES Y PRIMERAS CAMPANAS (IDs 1-5)
    // ============================================
    {
        id: 1,
        type: 'multiple',
        question: '¿En qué año se introdujo la entrega de credenciales a los ministros?',
        options: ['1850', '1853', '1855', '1860'],
        correct: 1,
        explanation: 'La entrega de credenciales fue introducida en 1853.'
    },
    {
        id: 2,
        type: 'multiple',
        question: '¿Qué tipo de ministros recibieron las primeras credenciales?',
        options: ['Ministros asalariados', 'Ministros de sostén propio', 'Misioneros extranjeros', 'Pastores jubilados'],
        correct: 1,
        explanation: 'Eran ministros de sostén propio que predicaban con celo.'
    },
    {
        id: 3,
        type: 'multiple',
        question: '¿Quiénes usaron una carpa para un esfuerzo evangélico en 1854?',
        options: ['Jaime White y Elena White', 'M.W. Cornell y J.N. Loughborough', 'José Bates y J.N. Andrews', 'Urías Smith y J.H. Waggoner'],
        correct: 1,
        explanation: 'Los pastores M.W. Cornell y J.N. Loughborough usaron una carpa en 1854.'
    },
    {
        id: 4,
        type: 'multiple',
        question: '¿Dónde se celebraron las primeras escuelas sabáticas regulares?',
        options: ['Battle Creek y Washington', 'Rochester y Buck\'s Bridge', 'Nueva York y Boston', 'Michigan y Ohio'],
        correct: 1,
        explanation: 'En Rochester y Buck\'s Bridge, Nueva York, en 1853 y 1854.'
    },
    {
        id: 5,
        type: 'fill',
        question: 'Las credenciales a los ministros se introdujeron en el año __________.',
        correct: ['1853'],
        explanation: '1853.'
    },

    // ============================================
    // SECCIÓN B: LA MUDANZA A BATTLE CREEK (IDs 6-15)
    // ============================================
    {
        id: 6,
        type: 'multiple',
        question: '¿Cuánto dinero ofrecieron cuatro laicos a Jaime White para la imprenta?',
        options: ['$500', '$1,200', '$2,000', '$5,000'],
        correct: 1,
        explanation: 'Le dieron $1,200 para fabricar un edificio para la imprenta.'
    },
    {
        id: 7,
        type: 'multiple',
        question: '¿De dónde se mudaron los White a Battle Creek en 1855?',
        options: ['Boston', 'Rochester, Nueva York', 'Portland', 'Washington'],
        correct: 1,
        explanation: 'Se mudaron de Rochester, Nueva York, a Battle Creek, Michigan.'
    },
    {
        id: 8,
        type: 'multiple',
        question: '¿Hasta qué año permaneció la sede de la obra en Battle Creek?',
        options: ['1880', '1890', '1903', '1915'],
        correct: 2,
        explanation: 'La sede permaneció allí hasta 1903.'
    },
    {
        id: 9,
        type: 'multiple',
        question: '¿Qué publicaciones se imprimían en Battle Creek?',
        options: ['Review and Herald y Youth\'s Instructor', 'Signs of the Times y The Present Truth', 'The Advent Review y The Midnight Cry', 'Guide e Insight'],
        correct: 0,
        explanation: 'Imprimían Review and Herald, Youth\'s Instructor y tratados.'
    },
    {
        id: 10,
        type: 'multiple',
        question: '¿Quién fue nombrado redactor en Battle Creek?',
        options: ['Jaime White', 'J.N. Andrews', 'Urías Smith', 'J.H. Waggoner'],
        correct: 2,
        explanation: 'Urías Smith fue nombrado redactor.'
    },
    {
        id: 11,
        type: 'multiple',
        question: '¿Qué pionero se mudó también a Michigan y viajaba constantemente?',
        options: ['J.N. Andrews', 'José Bates', 'J.H. Waggoner', 'Juan Byington'],
        correct: 1,
        explanation: 'José Bates se mudó a Michigan y viajaba constantemente.'
    },
    {
        id: 12,
        type: 'fill',
        question: 'Cuatro laicos ofrecieron $__________ a Jaime White para la imprenta.',
        correct: ['1200'],
        explanation: '$1,200.'
    },
    {
        id: 13,
        type: 'fill',
        question: 'Los White se mudaron a Battle Creek, __________ en 1855.',
        correct: ['michigan'],
        explanation: 'Michigan.'
    },
    {
        id: 14,
        type: 'fill',
        question: 'La sede de la obra permaneció en Battle Creek hasta __________.',
        correct: ['1903'],
        explanation: '1903.'
    },
    {
        id: 15,
        type: 'fill',
        question: 'Urías Smith fue nombrado __________ en Battle Creek.',
        correct: ['redactor'],
        explanation: 'Redactor.'
    },

    // ============================================
    // SECCIÓN C: PRIMERAS PUBLICACIONES (IDs 16-25)
    // ============================================
    {
        id: 16,
        type: 'multiple',
        question: '¿En qué año comenzó a publicarse "The Present Truth"?',
        options: ['1848', '1849', '1850', '1852'],
        correct: 1,
        explanation: 'En 1849, un grupo comenzó a publicar The Present Truth.'
    },
    {
        id: 17,
        type: 'multiple',
        question: '¿En qué año se publicaron seis números de "The Advent Review"?',
        options: ['1849', '1850', '1852', '1855'],
        correct: 1,
        explanation: 'En 1850 se publicaron seis números de The Advent Review.'
    },
    {
        id: 18,
        type: 'multiple',
        question: '¿En qué fecha se fusionaron "The Present Truth" y "The Advent Review"?',
        options: ['1849', '1850', '1852', '1855'],
        correct: 1,
        explanation: 'En noviembre de 1850 emergieron bajo un nuevo nombre.'
    },
    {
        id: 19,
        type: 'multiple',
        question: '¿Qué nombre recibió la revista fusionada?',
        options: ['Adventist Review', 'Second Advent Review and Sabbath Herald', 'The Present Truth', 'The Advent Herald'],
        correct: 1,
        explanation: 'Second Advent Review and Sabbath Herald.'
    },
    {
        id: 20,
        type: 'multiple',
        question: '¿Cómo se llama actualmente la revista oficial de la iglesia?',
        options: ['Review and Herald', 'Adventist Review', 'Signs of the Times', 'Guide'],
        correct: 1,
        explanation: 'Adventist Review (Revista Adventista).'
    },
    {
        id: 21,
        type: 'multiple',
        question: '¿En qué año fue publicado por primera vez "Youth\'s Instructor"?',
        options: ['1850', '1852', '1855', '1860'],
        correct: 1,
        explanation: 'Fue publicado por primera vez por Jaime White en 1852.'
    },
    {
        id: 22,
        type: 'multiple',
        question: '¿Dónde fue publicado por primera vez "Youth\'s Instructor"?',
        options: ['Battle Creek', 'Rochester', 'Boston', 'Washington'],
        correct: 1,
        explanation: 'En Rochester.'
    },
    {
        id: 23,
        type: 'multiple',
        question: '¿Qué revista ha reemplazado a "Youth\'s Instructor" en la actualidad?',
        options: ['Guide', 'Insight', 'Adventist Review', 'Signs of the Times'],
        correct: 1,
        explanation: 'Insight (y también Guide).'
    },
    {
        id: 24,
        type: 'fill',
        question: 'The Present Truth comenzó a publicarse en el año __________.',
        correct: ['1849'],
        explanation: '1849.'
    },
    {
        id: 25,
        type: 'fill',
        question: 'Youth\'s Instructor fue publicado por primera vez por Jaime White en __________.',
        correct: ['1852'],
        explanation: '1852.'
    },

    // ============================================
    // SECCIÓN D: OPOSICIÓN A LA ORGANIZACIÓN Y FINANZAS (IDs 26-35)
    // ============================================
    {
        id: 26,
        type: 'multiple',
        question: '¿Por qué muchos adventistas se oponían inicialmente a la organización?',
        options: ['Porque querían ser independientes', 'Porque habían sido desfraternizados de sus iglesias anteriores', 'Porque no veían necesidad', 'Porque la Biblia no lo menciona'],
        correct: 1,
        explanation: 'Muchos habían sido desfraternizados y temían la organización formal.'
    },
    {
        id: 27,
        type: 'multiple',
        question: '¿Quién dirigió el estudio bíblico sobre el sostenimiento del ministerio?',
        options: ['Jaime White', 'José Bates', 'J.N. Andrews', 'Urías Smith'],
        correct: 2,
        explanation: 'Bajo la dirección de J.N. Andrews se estudió el tema.'
    },
    {
        id: 28,
        type: 'multiple',
        question: '¿Cómo se llamó el plan de financiamiento recomendado?',
        options: ['Ofrenda sistemática', 'Benevolencia sistemática', 'Diezmo voluntario', 'Contribución anual'],
        correct: 1,
        explanation: 'Se llamó benevolencia sistemática.'
    },
    {
        id: 29,
        type: 'multiple',
        question: '¿Qué porcentaje de sus propiedades libres de deuda debían dar los miembros anualmente?',
        options: ['1%', '5%', '10%', '15%'],
        correct: 0,
        explanation: 'Al menos un 1% de todas sus propiedades libres de deuda.'
    },
    {
        id: 30,
        type: 'multiple',
        question: '¿Qué sugirió Jaime White en 1853 respecto a la literatura?',
        options: ['Regalarla', 'Venderla', 'Quemarla', 'Almacenarla'],
        correct: 1,
        explanation: 'Sugirió que los ministros vendieran las revistas y tratados.'
    },
    {
        id: 31,
        type: 'multiple',
        question: '¿Cuánto costaba un juego completo de revistas y tratados?',
        options: ['15 centavos', '25 centavos', '35 centavos', '50 centavos'],
        correct: 2,
        explanation: '¡Un juego completo costaba sólo 35 centavos!'
    },
    {
        id: 32,
        type: 'fill',
        question: 'El plan de financiamiento se llamó __________ sistemática.',
        correct: ['benevolencia'],
        explanation: 'Benevolencia sistemática.'
    },
    {
        id: 33,
        type: 'fill',
        question: 'Los miembros debían dar anualmente un 1% de sus propiedades libres de __________.',
        correct: ['deuda'],
        explanation: 'Libres de deuda.'
    },
    {
        id: 34,
        type: 'fill',
        question: 'Jaime White sugirió __________ las revistas y tratados en 1853.',
        correct: ['vender'],
        explanation: 'Vender.'
    },
    {
        id: 35,
        type: 'fill',
        question: 'Un juego completo de revistas costaba __________ centavos.',
        correct: ['35'],
        explanation: '35 centavos.'
    },

    // ============================================
    // SECCIÓN E: VOTO PARA LA ORGANIZACIÓN (IDs 36-45)
    // ============================================
    {
        id: 36,
        type: 'multiple',
        question: '¿De qué acusaban a Jaime White y otros que apoyaban la organización?',
        options: ['De herejía', 'De querer mandar y unir la iglesia con el estado', 'De robo', 'De mentir'],
        correct: 1,
        explanation: 'Los acusaban de querer mandar y unir la iglesia con el estado.'
    },
    {
        id: 37,
        type: 'multiple',
        question: '¿Qué dijo Elena White mediante testimonio acerca de la organización?',
        options: ['No es necesaria', 'Hay orden en el cielo y debe haber orden en la iglesia', 'Es peligrosa', 'Debe esperar'],
        correct: 1,
        explanation: '"Hay orden en el cielo, y Dios se agrada de los esfuerzos de su pueblo al tratar de atender las cosas de su obra en esta tierra con sistema y con orden."'
    },
    {
        id: 38,
        type: 'multiple',
        question: '¿En qué año alcanzó su clímax la discusión sobre la organización?',
        options: ['1855', '1858', '1860', '1863'],
        correct: 2,
        explanation: 'En 1860 alcanzó su clímax la discusión.'
    },
    {
        id: 39,
        type: 'fill',
        question: 'Acusaban a Jaime White de querer unir la iglesia con el __________.',
        correct: ['estado'],
        explanation: 'Con el estado.'
    },
    {
        id: 40,
        type: 'fill',
        question: 'Elena White dijo: "Hay __________ en el cielo".',
        correct: ['orden'],
        explanation: 'Orden.'
    },
    {
        id: 41,
        type: 'fill',
        question: 'La discusión sobre la organización alcanzó su clímax en __________.',
        correct: ['1860'],
        explanation: '1860.'
    },

    // ============================================
    // SECCIÓN F: SE ELIGE EL NOMBRE (IDs 42-50)
    // ============================================
    {
        id: 42,
        type: 'multiple',
        question: '¿En qué año fue adoptado el nombre "Adventistas del Séptimo Día"?',
        options: ['1855', '1860', '1863', '1865'],
        correct: 1,
        explanation: 'En 1860 fue adoptado el nombre.'
    },
    {
        id: 43,
        type: 'multiple',
        question: '¿Quién apoyó más tarde la elección del nombre?',
        options: ['Jaime White', 'José Bates', 'Elena White', 'J.N. Andrews'],
        correct: 2,
        explanation: 'Elena White apoyó esa elección.'
    },
    {
        id: 44,
        type: 'multiple',
        question: '¿En qué fecha se incorporó la Seventh-day Adventist Publishing Association?',
        options: ['13 de mayo de 1860', '13 de mayo de 1861', '20 de mayo de 1861', '13 de mayo de 1863'],
        correct: 1,
        explanation: 'El 13 de mayo de 1861 se incorporó.'
    },
    {
        id: 45,
        type: 'multiple',
        question: '¿Qué asociación estatal se organizó en 1861?',
        options: ['Nueva York', 'Ohio', 'Michigan', 'Pensilvania'],
        correct: 2,
        explanation: 'La primera asociación fue con las iglesias del estado de Michigan.'
    },
    {
        id: 46,
        type: 'multiple',
        question: '¿Cuántas asociaciones se organizaron en 1862?',
        options: ['Cinco', 'Seis', 'Siete', 'Ocho'],
        correct: 2,
        explanation: 'Se organizaron otras siete asociaciones.'
    },
    {
        id: 47,
        type: 'fill',
        question: 'El nombre "Adventistas del Séptimo Día" fue adoptado en __________.',
        correct: ['1860'],
        explanation: '1860.'
    },
    {
        id: 48,
        type: 'fill',
        question: 'La Seventh-day Adventist Publishing Association se incorporó el 13 de mayo de __________.',
        correct: ['1861'],
        explanation: '1861.'
    },
    {
        id: 49,
        type: 'fill',
        question: 'La primera asociación estatal fue la de __________ en 1861.',
        correct: ['michigan'],
        explanation: 'Michigan.'
    },
    {
        id: 50,
        type: 'fill',
        question: 'En 1862 se organizaron __________ asociaciones.',
        correct: ['siete'],
        explanation: 'Siete.'
    },

    // ============================================
    // SECCIÓN G: PRIMER CONGRESO DE LA ASOCIACIÓN GENERAL (IDs 51-65)
    // ============================================
    {
        id: 51,
        type: 'multiple',
        question: '¿Dónde se celebró la primera reunión general oficial de la Iglesia?',
        options: ['Rochester', 'Washington', 'Battle Creek', 'Nueva York'],
        correct: 2,
        explanation: 'En Battle Creek, en 1863.'
    },
    {
        id: 52,
        type: 'multiple',
        question: '¿En qué año se celebró el primer Congreso de la Asociación General?',
        options: ['1860', '1861', '1862', '1863'],
        correct: 3,
        explanation: 'En 1863.'
    },
    {
        id: 53,
        type: 'multiple',
        question: '¿Cuántos artículos contenía la constitución adoptada?',
        options: ['Siete', 'Ocho', 'Nueve', 'Diez'],
        correct: 2,
        explanation: 'Nueve artículos.'
    },
    {
        id: 54,
        type: 'multiple',
        question: '¿Quién fue elegido como primer presidente de la Asociación General?',
        options: ['Jaime White', 'José Bates', 'Juan Byington', 'J.N. Andrews'],
        correct: 2,
        explanation: 'Juan Byington fue el primer presidente.'
    },
    {
        id: 55,
        type: 'multiple',
        question: '¿Quién fue elegido como secretario?',
        options: ['Jaime White', 'Urías Smith', 'J.N. Andrews', 'J.H. Waggoner'],
        correct: 1,
        explanation: 'Urías Smith fue el secretario.'
    },
    {
        id: 56,
        type: 'multiple',
        question: '¿Quién fue elegido como tesorero?',
        options: ['E.S. Walder', 'J.N. Loughborough', 'José Bates', 'J.H. Waggoner'],
        correct: 0,
        explanation: 'E.S. Walder fue el tesorero.'
    },
    {
        id: 57,
        type: 'multiple',
        question: '¿Por qué Jaime White declinó la presidencia?',
        options: ['Por enfermedad', 'Porque no quería', 'Porque su defensa de la organización podría comprometer su puesto', 'Porque viajaba mucho'],
        correct: 2,
        explanation: 'Declinó porque su defensa de la organización podría comprometer su puesto.'
    },
    {
        id: 58,
        type: 'multiple',
        question: '¿Quiénes eran los miembros de la junta ejecutiva?',
        options: ['Byington, Loughborough y White', 'Byington, Andrews y Bates', 'White, Smith y Waggoner', 'Loughborough, Andrews y Smith'],
        correct: 0,
        explanation: 'Juan Byington, J.N. Loughborough y Jaime White.'
    },
    {
        id: 59,
        type: 'multiple',
        question: '¿Cuántos miembros había en la iglesia en 1863?',
        options: ['2,500', '3,000', '3,500', '4,000'],
        correct: 2,
        explanation: 'Había 3,500 miembros.'
    },
    {
        id: 60,
        type: 'multiple',
        question: '¿Cuántas iglesias había en 1863?',
        options: ['100', '125', '150', '175'],
        correct: 1,
        explanation: '125 iglesias.'
    },
    {
        id: 61,
        type: 'multiple',
        question: '¿Cuántos ministros ordenados había en 1863?',
        options: ['15', '20', '22', '25'],
        correct: 2,
        explanation: '22 ministros ordenados.'
    },
    {
        id: 62,
        type: 'multiple',
        question: '¿Cuántos ministros con licencia había en 1863?',
        options: ['5', '8', '10', '12'],
        correct: 1,
        explanation: 'Ocho ministros con licencia.'
    },
    {
        id: 63,
        type: 'fill',
        question: 'El primer Congreso de la Asociación General fue en Battle Creek en __________.',
        correct: ['1863'],
        explanation: '1863.'
    },
    {
        id: 64,
        type: 'fill',
        question: 'El primer presidente de la Asociación General fue Juan __________.',
        correct: ['byington'],
        explanation: 'Juan Byington.'
    },
    {
        id: 65,
        type: 'fill',
        question: 'En 1863 había 3,500 miembros en __________ iglesias.',
        correct: ['125'],
        explanation: '125 iglesias.'
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
    domElements.finalResults.classList.add('hidden');
    
    domElements.multipleChoiceContainer.innerHTML = '';
    domElements.fillBlankContainer.innerHTML = '';
    
    answered = false;
    domElements.submitBtn.disabled = false;
    domElements.resultMessage.classList.add('hidden');
    domElements.nextBtn.classList.add('hidden');
    
    selectedOption = null;
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
        '1850', '1852', '1854', '1855', '1858', '1860', '1861', '1862', '1865',
        'rochester', 'battle creek', 'michigan', 'nueva york', 'washington',
        'white', 'andrews', 'bates', 'smith', 'byington', 'loughborough',
        'cornell', 'walder', 'review', 'herald', 'instructor', 'present truth',
        'advent review', '35', '1200', '1903', 'credential', 'carpa', 'escuela'
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
    if (percentage >= 90) message = '¡Excelente! Conoces bien la organización de la iglesia.';
    else if (percentage >= 70) message = '¡Muy bien! Tienes un buen conocimiento.';
    else if (percentage >= 50) message = 'Bien, pero puedes repasar algunos conceptos.';
    else message = 'Sigue estudiando, la historia de la iglesia es fascinante.';
    
    domElements.finalResults.innerHTML = `
        <div class="final-results-content">
            <h2>🎉 ¡CAPÍTULO 4 COMPLETADO! 🎉</h2>
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
    
    const chapterNumber = localStorage.getItem('historiaDenominacional_currentChapter') || '4';
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
        domElements.chapterTitle.textContent = `Capítulo 4: Se Organiza la Iglesia Remanente (1853-1863)`;
    }
    
    updateScoreDisplay();
    loadQuestion();
});

window.backToMenu = backToMenu;
window.submitAnswer = submitAnswer;
window.nextQuestion = nextQuestion;
window.restartChapter = restartChapter;