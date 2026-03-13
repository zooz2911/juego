// ============================================
// PREGUNTAS DEL CAPÍTULO 7 - PROGRESOS Y PÉRDIDAS (1879-1904)
// VERSIÓN REDUCIDA - 80 PREGUNTAS
// ============================================
const questions = [
    // ============================================
    // SECCIÓN A: SOCIEDAD DE JÓVENES (IDs 1-8)
    // ============================================
    {
        id: 1,
        type: 'multiple',
        question: '¿En qué año se organizó la primera sociedad de jóvenes en Hazelton, Michigan?',
        options: ['1878', '1879', '1880', '1881'],
        correct: 1,
        explanation: 'La primera sociedad de jóvenes fue organizada en 1879.'
    },
    {
        id: 2,
        type: 'multiple',
        question: '¿Quiénes organizaron la primera sociedad de jóvenes?',
        options: ['J.N. Andrews y J.N. Loughborough', 'Harry Fenner y Luther Warren', 'Jaime White y José Bates', 'S.N. Haskell y G.I. Butler'],
        correct: 1,
        explanation: 'Harry Fenner, de 17 años, y Luther Warren, de 14.'
    },
    {
        id: 3,
        type: 'multiple',
        question: '¿Qué edades tenían los organizadores de la primera sociedad de jóvenes?',
        options: ['15 y 13', '16 y 14', '17 y 14', '18 y 15'],
        correct: 2,
        explanation: 'Harry Fenner tenía 17 años y Luther Warren 14 años.'
    },
    {
        id: 4,
        type: 'multiple',
        question: '¿En qué año se organizó oficialmente el Departamento de Jóvenes?',
        options: ['1905', '1906', '1907', '1908'],
        correct: 2,
        explanation: 'En 1907 se organizó oficialmente el Departamento de Jóvenes.'
    },

    // ============================================
    // SECCIÓN B: COLFORTAJE (IDs 5-8)
    // ============================================
    {
        id: 5,
        type: 'multiple',
        question: '¿Quién comenzó la obra de colportaje vendiendo el libro "Daniel y Apocalipsis"?',
        options: ['J.N. Andrews', 'George King', 'Urías Smith', 'S.N. Haskell'],
        correct: 1,
        explanation: 'George King se sintió impresionado a vender el libro Daniel y Apocalipsis en 1881.'
    },
    {
        id: 6,
        type: 'multiple',
        question: '¿En qué año comenzó la obra del colportaje?',
        options: ['1879', '1880', '1881', '1882'],
        correct: 2,
        explanation: 'Comenzó en 1881.'
    },
    {
        id: 7,
        type: 'multiple',
        question: '¿Cuántos colportores había en 1978?',
        options: ['4,459', '5,459', '6,459', '7,459'],
        correct: 2,
        explanation: 'Había 6,459 colportores.'
    },
    {
        id: 8,
        type: 'multiple',
        question: '¿Cuál fue el total de ventas en 1978?',
        options: ['9 millones', '10 millones', '11 millones', '12 millones'],
        correct: 2,
        explanation: 'Casi 11 millones de dólares.'
    },

    // ============================================
    // SECCIÓN C: DIEZMOS Y CRECIMIENTO (IDs 9-13)
    // ============================================
    {
        id: 9,
        type: 'multiple',
        question: '¿En qué año el sistema de diezmos reemplazó la benevolencia sistemática?',
        options: ['1877', '1878', '1879', '1880'],
        correct: 1,
        explanation: 'En 1878.'
    },
    {
        id: 10,
        type: 'multiple',
        question: '¿Cuántas iglesias había en 1883?',
        options: ['580', '680', '780', '880'],
        correct: 1,
        explanation: '680 iglesias.'
    },
    {
        id: 11,
        type: 'multiple',
        question: '¿Cuántos miembros había en 1883?',
        options: ['15,436', '16,436', '17,436', '18,436'],
        correct: 2,
        explanation: '17,436 miembros.'
    },
    {
        id: 12,
        type: 'multiple',
        question: '¿A cuánto ascendieron los diezmos en 1883?',
        options: ['$86,500', '$96,500', '$106,500', '$116,500'],
        correct: 1,
        explanation: '$96,500 dólares.'
    },

    // ============================================
    // SECCIÓN D: PLAN DE LECTURA BÍBLICA (IDs 13-16)
    // ============================================
    {
        id: 13,
        type: 'multiple',
        question: '¿Qué impidió a Stephen Haskell continuar su sermón en un campestre?',
        options: ['Una enfermedad', 'Una tormenta', 'Una multitud', 'Un accidente'],
        correct: 1,
        explanation: 'Una tormenta.'
    },
    {
        id: 14,
        type: 'multiple',
        question: '¿Qué método de evangelismo nació de esa experiencia?',
        options: ['Sermones cortos', 'Estudio bíblico interactivo', 'Cantar himnos', 'Orar en grupos'],
        correct: 1,
        explanation: 'Citar textos y hacer preguntas.'
    },
    {
        id: 15,
        type: 'multiple',
        question: '¿Quién estuvo presente y animó el plan?',
        options: ['Jaime White', 'J.N. Andrews', 'Elena White', 'Urías Smith'],
        correct: 2,
        explanation: 'Elena White.'
    },

    // ============================================
    // SECCIÓN E: EXPANSIÓN MUNDIAL (IDs 16-30)
    // ============================================
    {
        id: 16,
        type: 'multiple',
        question: '¿Quién visitó Europa y organizó una asociación en 1884?',
        options: ['Jaime White', 'J.N. Andrews', 'George I. Butler', 'S.N. Haskell'],
        correct: 2,
        explanation: 'George I. Butler, presidente de la Asociación General.'
    },
    {
        id: 17,
        type: 'multiple',
        question: '¿Quién fue a Europa en 1885 para asesorar a los dirigentes?',
        options: ['Jaime White', 'J.N. Andrews', 'Elena White', 'Urías Smith'],
        correct: 2,
        explanation: 'Elena White.'
    },
    {
        id: 18,
        type: 'multiple',
        question: '¿En qué año llegó el mensaje a Australia?',
        options: ['1884', '1885', '1886', '1887'],
        correct: 1,
        explanation: 'En 1885 con Haskell, Israel y Corliss.'
    },
    {
        id: 19,
        type: 'multiple',
        question: '¿Qué se abrió en Melbourne a pesar de la oposición?',
        options: ['Una iglesia y una escuela', 'Una iglesia y una imprenta', 'Una imprenta y un colegio', 'Un sanatorio'],
        correct: 1,
        explanation: 'Una iglesia y una imprenta.'
    },
    {
        id: 20,
        type: 'multiple',
        question: '¿Quién fue el primer misionero a Fidji?',
        options: ['John I. Tay', 'J.E. Fulton', 'S.N. Haskell', 'A.G. Daniells'],
        correct: 1,
        explanation: 'J.E. Fulton.'
    },
    {
        id: 21,
        type: 'multiple',
        question: '¿Cómo son conocidos los adventistas de Fidji?',
        options: ['El pueblo fiel', 'La gente limpia', 'Los misioneros', 'Los creyentes'],
        correct: 1,
        explanation: '"La gente limpia".'
    },

    // ============================================
    // SECCIÓN F: CONGRESO DE 1888 (IDs 22-28)
    // ============================================
    {
        id: 22,
        type: 'multiple',
        question: '¿En qué ciudad fue el Congreso de la Asociación General de 1888?',
        options: ['Battle Creek', 'Chicago', 'Minneápolis', 'Nueva York'],
        correct: 2,
        explanation: 'En Minneápolis.'
    },
    {
        id: 23,
        type: 'multiple',
        question: '¿Qué crisis enfrentaba la iglesia en 1888?',
        options: ['Económica', 'De liderazgo', 'Sobre la justificación por la fe', 'Sobre el sábado'],
        correct: 2,
        explanation: 'Habían perdido de vista la justificación por la fe.'
    },
    {
        id: 24,
        type: 'multiple',
        question: '¿Qué década se destacó por reavivamientos sobre la justificación por la fe?',
        options: ['1878-1888', '1888-1898', '1898-1908', '1880-1890'],
        correct: 1,
        explanation: '1888 a 1898.'
    },
    {
        id: 25,
        type: 'multiple',
        question: '¿Qué libros de Elena White corrigieron enseñanzas erróneas sobre Cristo?',
        options: ['Patriarcas y Profetas', 'El Deseado de Todas las Gentes y El Camino a Cristo', 'El Conflicto de los Siglos', 'Testimonios'],
        correct: 1,
        explanation: 'El Deseado de Todas las Gentes y El Camino a Cristo.'
    },

    // ============================================
    // SECCIÓN G: ÁFRICA (IDs 26-29)
    // ============================================
    {
        id: 26,
        type: 'multiple',
        question: '¿En qué año Pieter Wessels se entrevistó con Cecil Rhodes?',
        options: ['1892', '1893', '1894', '1895'],
        correct: 2,
        explanation: 'En 1894.'
    },
    {
        id: 27,
        type: 'multiple',
        question: '¿Qué pidieron los hermanos a Cecil Rhodes?',
        options: ['Dinero', 'Un terreno para una misión', 'Biblias', 'Protección'],
        correct: 1,
        explanation: 'Un terreno para una misión en Rodesia.'
    },

    // ============================================
    // SECCIÓN H: CHINA (IDs 28-31)
    // ============================================
    {
        id: 28,
        type: 'multiple',
        question: '¿Quién fue a Hong Kong como colportor en 1888?',
        options: ['Edwin H. Wilbur', 'J.N. Anderson', 'Abram La Rue', 'John I. Tay'],
        correct: 2,
        explanation: 'Abram La Rue.'
    },
    {
        id: 29,
        type: 'multiple',
        question: '¿Quiénes fueron los primeros misioneros permanentes en China?',
        options: ['La Rue y Tay', 'Wilbur y Anderson', 'Haskell y Daniells', 'Corliss e Israel'],
        correct: 1,
        explanation: 'Edwin H. Wilbur y J.N. Anderson.'
    },

    // ============================================
    // SECCIÓN I: INSTITUCIONES (IDs 30-38)
    // ============================================
    {
        id: 30,
        type: 'multiple',
        question: '¿En qué año se estableció el primer colegio fuera de EE.UU. en África del Sur?',
        options: ['1892', '1893', '1894', '1895'],
        correct: 1,
        explanation: 'En 1893.'
    },
    {
        id: 31,
        type: 'multiple',
        question: '¿En qué año se estableció Signs en Australia?',
        options: ['1885', '1886', '1887', '1888'],
        correct: 1,
        explanation: '1886.'
    },
    {
        id: 32,
        type: 'multiple',
        question: '¿En qué año se estableció Stanborough en Inglaterra?',
        options: ['1887', '1888', '1889', '1890'],
        correct: 2,
        explanation: '1889.'
    },
    {
        id: 33,
        type: 'multiple',
        question: '¿En qué año se estableció el Colegio de Avondale en Australia?',
        options: ['1892', '1893', '1894', '1895'],
        correct: 2,
        explanation: '1894.'
    },

    // ============================================
    // SECCIÓN J: ELENA WHITE EN AUSTRALIA (IDs 34-41)
    // ============================================
    {
        id: 34,
        type: 'multiple',
        question: '¿En qué año Elena White se embarcó para Australia?',
        options: ['1890', '1891', '1892', '1893'],
        correct: 1,
        explanation: '1891.'
    },
    {
        id: 35,
        type: 'multiple',
        question: '¿Cuántos años permaneció en Australia?',
        options: ['7', '8', '9', '10'],
        correct: 2,
        explanation: 'Nueve años.'
    },
    {
        id: 36,
        type: 'multiple',
        question: '¿Qué colegio fundó en Australia?',
        options: ['Sydney', 'Melbourne', 'Avondale', 'Brisbane'],
        correct: 2,
        explanation: 'El Colegio de Avondale.'
    },
    {
        id: 37,
        type: 'multiple',
        question: '¿Qué tipo de fábricas estimuló en Australia?',
        options: ['Textiles', 'De alimentos', 'De muebles', 'De imprenta'],
        correct: 1,
        explanation: 'Fábricas de alimentos.'
    },

    // ============================================
    // SECCIÓN K: PRIMERA UNIÓN (IDs 38-40)
    // ============================================
    {
        id: 38,
        type: 'multiple',
        question: '¿Dónde se organizó la primera unión adventista del mundo?',
        options: ['EE.UU.', 'Inglaterra', 'Australia', 'Alemania'],
        correct: 2,
        explanation: 'En Australia en 1894.'
    },
    {
        id: 39,
        type: 'multiple',
        question: '¿En qué año se organizó la primera unión?',
        options: ['1892', '1893', '1894', '1895'],
        correct: 2,
        explanation: '1894.'
    },

    // ============================================
    // SECCIÓN L: CONGRESO DE 1901 (IDs 40-45)
    // ============================================
    {
        id: 40,
        type: 'multiple',
        question: '¿En qué año fue el Congreso que reorganizó la Asociación General?',
        options: ['1900', '1901', '1902', '1903'],
        correct: 1,
        explanation: '1901.'
    },
    {
        id: 41,
        type: 'multiple',
        question: '¿Qué acuerdo se tomó sobre la junta de la Asociación General?',
        options: ['Reducirla', 'Agrandarla', 'Eliminarla', 'Centralizarla'],
        correct: 1,
        explanation: 'Agrandarla haciéndola más representativa.'
    },
    {
        id: 42,
        type: 'multiple',
        question: '¿Qué debían compartir las asociaciones con el extranjero?',
        options: ['Misioneros', 'Diezmos y ofrendas', 'Literatura', 'Edificios'],
        correct: 1,
        explanation: 'Diezmos y ofrendas.'
    },

    // ============================================
    // SECCIÓN M: MUERTE DE PIONEROS (IDs 43-50)
    // ============================================
    {
        id: 43,
        type: 'multiple',
        question: '¿En qué año murió Jaime White?',
        options: ['1880', '1881', '1882', '1883'],
        correct: 1,
        explanation: '1881.'
    },
    {
        id: 44,
        type: 'multiple',
        question: '¿En qué año murió J.N. Andrews?',
        options: ['1881', '1882', '1883', '1884'],
        correct: 2,
        explanation: '1883.'
    },
    {
        id: 45,
        type: 'multiple',
        question: '¿En qué año murió J.H. Waggoner?',
        options: ['1887', '1888', '1889', '1890'],
        correct: 2,
        explanation: '1889.'
    },
    {
        id: 46,
        type: 'multiple',
        question: '¿Dónde fueron enterrados Andrews y Waggoner?',
        options: ['Battle Creek', 'Basilea, Suiza', 'Londres', 'Nueva York'],
        correct: 1,
        explanation: 'Basilea, Suiza.'
    },
    {
        id: 47,
        type: 'multiple',
        question: '¿En qué año murió Urías Smith?',
        options: ['1901', '1902', '1903', '1904'],
        correct: 2,
        explanation: '1903.'
    },
    {
        id: 48,
        type: 'multiple',
        question: '¿Qué libro escribió Urías Smith?',
        options: ['Historia del Sábado', 'Daniel y Apocalipsis', 'El Conflicto de los Siglos', 'Patriarcas y Profetas'],
        correct: 1,
        explanation: 'Daniel y Apocalipsis.'
    },

    // ============================================
    // SECCIÓN N: CANRIGHT Y KELLOGG (IDs 49-53)
    // ============================================
    {
        id: 49,
        type: 'multiple',
        question: '¿Quién abandonó la iglesia y se opuso a Elena White?',
        options: ['J.H. Kellogg', 'D.M. Canright', 'Urías Smith', 'J.N. Andrews'],
        correct: 1,
        explanation: 'D.M. Canright.'
    },
    {
        id: 50,
        type: 'multiple',
        question: '¿Cómo murió D.M. Canright?',
        options: ['En paz', 'En la desesperación', 'Como mártir', 'En el extranjero'],
        correct: 1,
        explanation: 'En la desesperación.'
    },
    {
        id: 51,
        type: 'multiple',
        question: '¿Quién era el director del Sanatorio de Battle Creek?',
        options: ['D.M. Canright', 'J.H. Kellogg', 'J.N. Loughborough', 'J.H. Waggoner'],
        correct: 1,
        explanation: 'El Dr. J.H. Kellogg.'
    },
    {
        id: 52,
        type: 'multiple',
        question: '¿Qué ideas mezcló Kellogg con la religión?',
        options: ['Ateas', 'Panteístas', 'Agnósticas', 'Budistas'],
        correct: 1,
        explanation: 'Ideas panteístas.'
    },

    // ============================================
    // SECCIÓN O: INCENDIOS Y MUDANZA (IDs 53-60)
    // ============================================
    {
        id: 53,
        type: 'multiple',
        question: '¿En qué año fue advertido Battle Creek de que las instituciones serían destruidas?',
        options: ['1892', '1893', '1894', '1895'],
        correct: 1,
        explanation: '1893.'
    },
    {
        id: 54,
        type: 'multiple',
        question: '¿Cuándo se quemó el edificio principal del sanatorio?',
        options: ['Febrero 1902', 'Diciembre 1902', 'Febrero 1903', 'Diciembre 1903'],
        correct: 0,
        explanation: 'Febrero de 1902.'
    },
    {
        id: 55,
        type: 'multiple',
        question: '¿Cuándo se quemó el edificio de la Review and Herald?',
        options: ['Febrero 1902', 'Diciembre 1902', 'Febrero 1903', 'Diciembre 1903'],
        correct: 1,
        explanation: 'Diciembre de 1902.'
    },
    {
        id: 56,
        type: 'multiple',
        question: '¿En qué año se mudó la sede a Takoma Park?',
        options: ['1902', '1903', '1904', '1905'],
        correct: 1,
        explanation: '1903.'
    },
    {
        id: 57,
        type: 'multiple',
        question: '¿Dónde está Takoma Park?',
        options: ['Maryland', 'Virginia', 'Washington D.C.', 'Nueva York'],
        correct: 2,
        explanation: 'Washington, D.C.'
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
        '1878', '1879', '1880', '1881', '1882', '1883', '1884', '1885', '1886', '1887', '1888', '1889', '1890',
        '1891', '1892', '1893', '1894', '1895', '1898', '1901', '1902', '1903', '1907',
        'hazelton', 'michigan', 'minneápolis', 'australia', 'fidji', 'china', 'áfrica', 'basilea', 'takoma park',
        'fenner', 'warren', 'king', 'haskell', 'butler', 'fulton', 'la rue', 'wilbur', 'anderson', 'wessels',
        'rhodes', 'canright', 'kellogg', 'andrews', 'waggoner', 'smith',
        '17', '14', '680', '17436', '96500', '6459', '11', '9'
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
    if (percentage >= 90) message = '¡Excelente! Conoces bien los progresos y pérdidas.';
    else if (percentage >= 70) message = '¡Muy bien! Tienes un buen conocimiento.';
    else if (percentage >= 50) message = 'Bien, pero puedes repasar.';
    else message = 'Sigue estudiando.';
    
    domElements.finalResults.innerHTML = `
        <div class="final-results-content">
            <h2>🎉 ¡CAPÍTULO 7 COMPLETADO! 🎉</h2>
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
                <button class="final-btn" onclick="restartChapter()">🔄 Repetir</button>
            </div>
        </div>
    `;
    
    domElements.finalResults.classList.remove('hidden');
    
    const chapterNumber = localStorage.getItem('historiaDenominacional_currentChapter') || '7';
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
        domElements.chapterTitle.textContent = `Capítulo 7: Progresos y Pérdidas (1879-1904)`;
    }
    
    updateScoreDisplay();
    loadQuestion();
});

window.backToMenu = backToMenu;
window.submitAnswer = submitAnswer;
window.nextQuestion = nextQuestion;
window.restartChapter = restartChapter;