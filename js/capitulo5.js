// ============================================
// PREGUNTAS DEL CAPÍTULO 5 - EXPANSIÓN Y REFORMA (1864-1873)
// ============================================
const questions = [
    // ============================================
    // SECCIÓN A: OBSTÁCULOS QUE VENCER (IDs 1-5)
    // ============================================
    {
        id: 1,
        type: 'multiple',
        question: '¿Qué guerra obstaculizó el desarrollo de la recién organizada Iglesia Adventista?',
        options: ['Guerra de Secesión', 'Guerra Civil Americana (1861-1865)', 'Guerra México-Americana', 'Guerra de Independencia'],
        correct: 1,
        explanation: 'La guerra civil americana (1861-1865) obstaculizó el desarrollo de la iglesia.'
    },
    {
        id: 2,
        type: 'multiple',
        question: '¿En qué año fue elegido Jaime White como presidente de la Asociación General?',
        options: ['1863', '1864', '1865', '1868'],
        correct: 2,
        explanation: 'En 1865, Jaime White fue elegido presidente de la Asociación General.'
    },
    {
        id: 3,
        type: 'multiple',
        question: '¿Qué condición le fue concedida a la iglesia por el gobierno de Estados Unidos en 1864?',
        options: ['Exención de impuestos', 'No combatiente', 'Libertad de culto', 'Reconocimiento oficial'],
        correct: 1,
        explanation: 'En 1864 le fue concedida a la iglesia la condición de no combatiente.'
    },
    {
        id: 4,
        type: 'fill',
        question: 'La guerra civil americana ocurrió entre 1861 y __________.',
        correct: ['1865'],
        explanation: '1861-1865.'
    },
    {
        id: 5,
        type: 'fill',
        question: 'Jaime White fue elegido presidente de la Asociación General en __________.',
        correct: ['1865'],
        explanation: '1865.'
    },

    // ============================================
    // SECCIÓN B: UN LLAMADO A DIRIGIRSE AL OESTE (IDs 6-15)
    // ============================================
    {
        id: 6,
        type: 'multiple',
        question: '¿En qué Congreso de la Asociación General fueron nombrados los pastores para la costa del oeste?',
        options: ['1865', '1868', '1872', '1874'],
        correct: 1,
        explanation: 'En el Congreso de la Asociación General de 1868.'
    },
    {
        id: 7,
        type: 'multiple',
        question: '¿Qué pastores fueron nombrados para trasladarse a la costa del oeste?',
        options: ['J.N. Andrews y J.H. Waggoner', 'J.N. Loughborough y D.T. Bourdeau', 'Jaime White y José Bates', 'Urías Smith y J.N. Loughborough'],
        correct: 1,
        explanation: 'J.N. Loughborough y D.T. Bourdeau.'
    },
    {
        id: 8,
        type: 'multiple',
        question: '¿Cuántos adventistas vivían en la costa del oeste en ese tiempo?',
        options: ['7', '14', '21', '28'],
        correct: 1,
        explanation: 'Catorce adventistas vivían allí.'
    },
    {
        id: 9,
        type: 'multiple',
        question: '¿En qué año los White visitaron la costa del Pacífico?',
        options: ['1868', '1870', '1872', '1874'],
        correct: 2,
        explanation: 'En 1872, los White visitaron la costa del Pacífico.'
    },
    {
        id: 10,
        type: 'multiple',
        question: '¿Qué hicieron los White con su casa de Battle Creek?',
        options: ['La alquilaron', 'La vendieron y donaron el dinero', 'La dejaron vacía', 'La prestaron'],
        correct: 1,
        explanation: 'Vendieron su casa y donaron el dinero para establecer la obra en el oeste.'
    },
    {
        id: 11,
        type: 'multiple',
        question: '¿En qué fecha se publicó el primer número de "Signs of the Times" en California?',
        options: ['4 de junio de 1872', '4 de junio de 1874', '4 de julio de 1874', '4 de junio de 1876'],
        correct: 1,
        explanation: 'El 4 de junio de 1874 en California.'
    },
    {
        id: 12,
        type: 'multiple',
        question: '¿Qué porcentaje de la División Norteamericana representa la feligresía del oeste actualmente?',
        options: ['Una cuarta parte', 'Una tercera parte', 'La mitad', 'Dos terceras partes'],
        correct: 1,
        explanation: 'Representa una tercera parte de la División Norteamericana.'
    },
    {
        id: 13,
        type: 'fill',
        question: 'Los pastores J.N. Loughborough y D.T. Bourdeau fueron enviados a la costa del oeste en __________.',
        correct: ['1868'],
        explanation: '1868.'
    },
    {
        id: 14,
        type: 'fill',
        question: 'El primer número de Signs of the Times se publicó el 4 de junio de __________.',
        correct: ['1874'],
        explanation: '1874.'
    },
    {
        id: 15,
        type: 'fill',
        question: 'Los White vendieron su casa en __________ Creek y donaron el dinero.',
        correct: ['battle'],
        explanation: 'Battle Creek.'
    },

    // ============================================
    // SECCIÓN C: AUMENTO DE LA PRODUCCIÓN DE PUBLICACIONES (IDs 16-25)
    // ============================================
    {
        id: 16,
        type: 'multiple',
        question: '¿En qué año se publicaron los seis folletos de Elena White sobre salud?',
        options: ['1863', '1864', '1865', '1866'],
        correct: 2,
        explanation: 'En 1865 se dieron a la publicidad los seis folletos titulados "Health or How to Live".'
    },
    {
        id: 17,
        type: 'multiple',
        question: '¿Cómo se titulaban los seis folletos de Elena White sobre salud?',
        options: ['La Reforma pro Salud', 'Salud o Cómo Vivir', 'Consejos sobre Salud', 'Vida Saludable'],
        correct: 1,
        explanation: '"Health or How to Live" (Salud o Cómo Vivir).'
    },
    {
        id: 18,
        type: 'multiple',
        question: '¿En qué fecha recibió Elena White la visión sobre la reforma pro salud?',
        options: ['1863', '1864', '1865', '1866'],
        correct: 0,
        explanation: 'Recibió la visión en junio de 1863.'
    },
    {
        id: 19,
        type: 'multiple',
        question: '¿En qué año empezó a publicarse la primera revista de salud de la iglesia?',
        options: ['1865', '1866', '1867', '1868'],
        correct: 1,
        explanation: 'En 1866 empezó a publicarse "Health Reformer".'
    },
    {
        id: 20,
        type: 'multiple',
        question: '¿Cómo se llamaba la primera revista de salud de la iglesia?',
        options: ['Health Reformer', 'Good Health', 'Life and Health', 'Health Messenger'],
        correct: 0,
        explanation: 'Se llamaba "Health Reformer" (La Reforma pro Salud).'
    },
    {
        id: 21,
        type: 'fill',
        question: 'Los seis folletos de Elena White sobre salud se titularon "Health or How to __________".',
        correct: ['live'],
        explanation: 'Health or How to Live.'
    },
    {
        id: 22,
        type: 'fill',
        question: 'La visión sobre la reforma pro salud fue en junio de __________.',
        correct: ['1863'],
        explanation: '1863.'
    },
    {
        id: 23,
        type: 'fill',
        question: 'La primera revista de salud se llamó Health __________.',
        correct: ['reformer'],
        explanation: 'Health Reformer.'
    },
    {
        id: 24,
        type: 'fill',
        question: 'Health Reformer comenzó a publicarse en el año __________.',
        correct: ['1866'],
        explanation: '1866.'
    },

    // ============================================
    // SECCIÓN D: SE ESTABLECEN INSTITUCIONES DE SALUD (IDs 25-35)
    // ============================================
    {
        id: 25,
        type: 'multiple',
        question: '¿Qué provocó la apertura de una institución de salud en 1866?',
        options: ['Una donación', 'Una segunda visión sobre la salud de Elena White', 'Una petición de los miembros', 'Una ley del gobierno'],
        correct: 1,
        explanation: 'Como resultado de una segunda visión sobre la salud que recibió Elena White.'
    },
    {
        id: 26,
        type: 'multiple',
        question: '¿Qué nombre recibió la primera institución de salud adventista?',
        options: ['Battle Creek Sanitarium', 'Western Health Reform Institute', 'Health Reform Institute', 'Sanatorio de Battle Creek'],
        correct: 1,
        explanation: 'Se llamó Western Health Reform Institute.'
    },
    {
        id: 27,
        type: 'multiple',
        question: '¿Cómo se llamó más tarde esa institución?',
        options: ['Battle Creek Sanitarium', 'Health Reform Institute', 'Michigan Sanitarium', 'Adventist Health Center'],
        correct: 0,
        explanation: 'Más tarde se llamó Battle Creek Sanitarium.'
    },
    {
        id: 28,
        type: 'multiple',
        question: '¿Quiénes contribuyeron con $500 cada uno para la institución?',
        options: ['Jaime White y J.N. Andrews', 'Jaime White y J.P. Kellogg', 'José Bates y J.H. Waggoner', 'J.N. Loughborough y D.T. Bourdeau'],
        correct: 1,
        explanation: 'Jaime White y J.P. Kellogg contribuyeron con $500 cada uno.'
    },
    {
        id: 29,
        type: 'multiple',
        question: '¿Quién ayudó a establecer la escuela de enfermería en Battle Creek en 1883?',
        options: ['Elena White', 'La Dra. Kate Lindsay', 'J.P. Kellogg', 'Martha Byington'],
        correct: 1,
        explanation: 'La Dra. Kate Lindsay ayudó a establecer la escuela de enfermería.'
    },
    {
        id: 30,
        type: 'fill',
        question: 'La primera institución de salud se llamó Western Health __________ Institute.',
        correct: ['reform'],
        explanation: 'Western Health Reform Institute.'
    },
    {
        id: 31,
        type: 'fill',
        question: 'Jaime White y J.P. __________ contribuyeron con $500 cada uno.',
        correct: ['kellogg'],
        explanation: 'J.P. Kellogg.'
    },
    {
        id: 32,
        type: 'fill',
        question: 'La escuela de enfermería en Battle Creek se estableció en __________.',
        correct: ['1883'],
        explanation: '1883.'
    },
    {
        id: 33,
        type: 'fill',
        question: 'La Dra. Kate __________ ayudó a establecer la escuela de enfermería.',
        correct: ['lindsay'],
        explanation: 'Kate Lindsay.'
    },

    // ============================================
    // SECCIÓN E: SE ESTABLECEN ESCUELAS (IDs 34-45)
    // ============================================
    {
        id: 34,
        type: 'multiple',
        question: '¿Quién fue el maestro de la primera escuela de iglesia en casa de Juan Byington?',
        options: ['Elena White', 'Martha Byington', 'Goodloe H. Bell', 'Ana Smith'],
        correct: 1,
        explanation: 'La maestra era su hija Martha.'
    },
    {
        id: 35,
        type: 'multiple',
        question: '¿Quién estableció la primera escuela adventista oficial del mundo en Battle Creek?',
        options: ['Jaime White', 'J.N. Andrews', 'Goodloe H. Bell', 'Urías Smith'],
        correct: 2,
        explanation: 'Goodloe H. Bell, un ex paciente del Sanatorio de Battle Creek.'
    },
    {
        id: 36,
        type: 'multiple',
        question: '¿En qué año se estableció la primera escuela adventista oficial en Battle Creek?',
        options: ['1868', '1870', '1872', '1874'],
        correct: 2,
        explanation: 'En 1872.'
    },
    {
        id: 37,
        type: 'multiple',
        question: '¿En qué tipo de edificio funcionaba la primera escuela oficial?',
        options: ['Una iglesia', 'Un edificio de dos pisos para la imprenta', 'Una casa particular', 'Una carpa'],
        correct: 1,
        explanation: 'Funcionaba en un edificio de dos pisos que originalmente era para la imprenta.'
    },
    {
        id: 38,
        type: 'multiple',
        question: '¿En qué año se celebró el primer campestre adventista en Michigan?',
        options: ['1865', '1868', '1872', '1876'],
        correct: 1,
        explanation: 'En 1868 se celebró el primer campestre en una finca de Michigan.'
    },
    {
        id: 39,
        type: 'multiple',
        question: '¿Cuántas personas asistieron al primer campestre en Michigan?',
        options: ['1,000', '2,000', '5,000', '10,000'],
        correct: 1,
        explanation: 'Asistieron 2,000 personas.'
    },
    {
        id: 40,
        type: 'multiple',
        question: '¿En qué año se reunieron 20,000 personas en un campestre cerca de Boston?',
        options: ['1868', '1872', '1876', '1880'],
        correct: 2,
        explanation: 'En 1876 se reunieron 20,000 en un campestre cerca de Boston.'
    },
    {
        id: 41,
        type: 'fill',
        question: 'La primera escuela en casa de Byington tenía como maestra a Martha __________.',
        correct: ['byington'],
        explanation: 'Martha Byington.'
    },
    {
        id: 42,
        type: 'fill',
        question: 'Goodloe H. __________ estableció la primera escuela oficial en Battle Creek.',
        correct: ['bell'],
        explanation: 'Goodloe H. Bell.'
    },
    {
        id: 43,
        type: 'fill',
        question: 'La primera escuela oficial en Battle Creek se estableció en __________.',
        correct: ['1872'],
        explanation: '1872.'
    },
    {
        id: 44,
        type: 'fill',
        question: 'El primer campestre adventista fue en Michigan en __________ con 2,000 asistentes.',
        correct: ['1868'],
        explanation: '1868.'
    },
    {
        id: 45,
        type: 'fill',
        question: 'En 1876 se reunieron __________ personas en un campestre cerca de Boston.',
        correct: ['20000'],
        explanation: '20,000 personas.'
    },

    // ============================================
    // SECCIÓN F: COMIENZOS DE LA ESCUELA SABÁTICA (IDs 46-60)
    // ============================================
    {
        id: 46,
        type: 'multiple',
        question: '¿Dónde apareció la primera lección de escuela sabática en 1852?',
        options: ['En Signs of the Times', 'En Youth\'s Instructor', 'En Review and Herald', 'En The Present Truth'],
        correct: 1,
        explanation: 'Apareció en el Youth\'s Instructor, escrita por Jaime White.'
    },
    {
        id: 47,
        type: 'multiple',
        question: '¿Quién escribió la primera lección de escuela sabática?',
        options: ['Elena White', 'Jaime White', 'J.N. Andrews', 'Goodloe H. Bell'],
        correct: 1,
        explanation: 'Escrita por Jaime White.'
    },
    {
        id: 48,
        type: 'multiple',
        question: '¿De quién se decía que "había nacido para maestro"?',
        options: ['Jaime White', 'J.N. Andrews', 'G.H. Bell', 'Urías Smith'],
        correct: 2,
        explanation: 'De G.H. Bell.'
    },
    {
        id: 49,
        type: 'multiple',
        question: '¿En qué año preparó G.H. Bell dos series de lecciones para la escuela sabática?',
        options: ['1868', '1869', '1870', '1872'],
        correct: 1,
        explanation: 'En 1869 preparó dos series de lecciones.'
    },
    {
        id: 50,
        type: 'multiple',
        question: '¿En qué año se añadió una forma de organización sencilla a la escuela sabática?',
        options: ['1869', '1870', '1872', '1874'],
        correct: 1,
        explanation: 'Al siguiente año (1870) se añadió organización.'
    },
    {
        id: 51,
        type: 'multiple',
        question: '¿A qué país fue enviado el primer donativo de la escuela sabática a las misiones en 1885?',
        options: ['África', 'Australia', 'Europa', 'América del Sur'],
        correct: 1,
        explanation: 'Fue enviado a Australia en 1885.'
    },
    {
        id: 52,
        type: 'multiple',
        question: '¿En qué año se envió el primer donativo a África?',
        options: ['1885', '1886', '1887', '1888'],
        correct: 2,
        explanation: 'A África en 1887.'
    },
    {
        id: 53,
        type: 'multiple',
        question: '¿Qué nombre recibió el barco enviado al sur del Pacífico por las escuelas sabáticas?',
        options: ['Pitcairn', 'Mayflower', 'Adventist', 'Messenger'],
        correct: 0,
        explanation: 'El barco se llamó Pitcairn.'
    },
    {
        id: 54,
        type: 'multiple',
        question: '¿Qué isla está habitada mayormente por adventistas hoy?',
        options: ['Australia', 'Nueva Zelanda', 'Pitcairn', 'Fiji'],
        correct: 2,
        explanation: 'La isla Pitcairn está habitada mayormente por adventistas.'
    },
    {
        id: 55,
        type: 'multiple',
        question: '¿Cuántos miembros de escuela sabática había a fines de 1978?',
        options: ['1,817,459', '2,817,459', '3,817,459', '4,817,459'],
        correct: 2,
        explanation: 'Había 3,817,459 miembros de escuela sabática.'
    },
    {
        id: 56,
        type: 'fill',
        question: 'La primera lección de escuela sabática apareció en Youth\'s Instructor en __________.',
        correct: ['1852'],
        explanation: '1852.'
    },
    {
        id: 57,
        type: 'fill',
        question: 'G.H. Bell preparó dos series de lecciones en __________.',
        correct: ['1869'],
        explanation: '1869.'
    },
    {
        id: 58,
        type: 'fill',
        question: 'El primer donativo a misiones fue a Australia en __________ y a África en 1887.',
        correct: ['1885'],
        explanation: '1885.'
    },
    {
        id: 59,
        type: 'fill',
        question: 'El barco enviado al Pacífico se llamó __________.',
        correct: ['pitcairn'],
        explanation: 'Pitcairn.'
    },
    {
        id: 60,
        type: 'fill',
        question: 'En 1978 había 3,817,459 miembros de escuela __________.',
        correct: ['sabática'],
        explanation: 'Escuela sabática.'
    },

    // ============================================
    // SECCIÓN G: NACE LA SOCIEDAD DE TRATADOS (IDs 61-70)
    // ============================================
    {
        id: 61,
        type: 'multiple',
        question: '¿En qué año se organizó la Sociedad de Vigilantes Misioneros?',
        options: ['1868', '1869', '1870', '1873'],
        correct: 1,
        explanation: 'La Sociedad de Vigilantes Misioneros se organizó en 1869.'
    },
    {
        id: 62,
        type: 'multiple',
        question: '¿Qué proyecto especial adoptó la Sociedad de Vigilantes Misioneros?',
        options: ['Construir iglesias', 'Distribución de literatura', 'Enviar misioneros', 'Abrir escuelas'],
        correct: 1,
        explanation: 'La amplia distribución de literatura.'
    },
    {
        id: 63,
        type: 'multiple',
        question: '¿Quién vio las posibilidades de esta obra y la organizó sobre base amplia?',
        options: ['Jaime White', 'J.N. Andrews', 'Stephen N. Haskell', 'Urías Smith'],
        correct: 2,
        explanation: 'Stephen N. Haskell.'
    },
    {
        id: 64,
        type: 'multiple',
        question: '¿Cómo llegaron a conocerse estas organizaciones?',
        options: ['Sociedades bíblicas', 'Sociedades de tratados y misioneros', 'Sociedades de publicaciones', 'Sociedades de evangelismo'],
        correct: 1,
        explanation: 'Fueron conocidas como sociedades de tratados y misioneros.'
    },
    {
        id: 65,
        type: 'multiple',
        question: '¿En qué Congreso General se organizó la Sociedad Misionera de la Asociación General?',
        options: ['1869', '1870', '1873', '1874'],
        correct: 2,
        explanation: 'En el Congreso General de 1873.'
    },
    {
        id: 66,
        type: 'multiple',
        question: '¿En qué año se reorganizó como Departamento de Obra Misionera?',
        options: ['1903', '1913', '1915', '1920'],
        correct: 1,
        explanation: 'En 1913.'
    },
    {
        id: 67,
        type: 'multiple',
        question: '¿Cómo se llama actualmente ese departamento?',
        options: ['Departamento de Publicaciones', 'Departamento de Misiones', 'Departamento de Actividades Laicas', 'Departamento de Evangelismo'],
        correct: 2,
        explanation: 'Departamento de Actividades Laicas.'
    },
    {
        id: 68,
        type: 'fill',
        question: 'La Sociedad de Vigilantes Misioneros se organizó en __________.',
        correct: ['1869'],
        explanation: '1869.'
    },
    {
        id: 69,
        type: 'fill',
        question: 'Stephen N. __________ organizó la obra de literatura sobre base amplia.',
        correct: ['haskell'],
        explanation: 'Stephen N. Haskell.'
    },
    {
        id: 70,
        type: 'fill',
        question: 'La Sociedad Misionera de la Asociación General se organizó en __________.',
        correct: ['1873'],
        explanation: '1873.'
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
        '1861', '1863', '1864', '1865', '1866', '1868', '1869', '1870', '1872', '1873', '1874', '1876', '1883', '1885', '1887', '1913',
        'battle creek', 'michigan', 'california', 'boston', 'australia', 'áfrica', 'pitcairn',
        'white', 'andrews', 'bates', 'loughborough', 'bourdeau', 'bell', 'haskell', 'kellogg', 'lindsay',
        'review', 'herald', 'signs', 'instructor', 'health reformer', 'pitcairn',
        '500', '2000', '20000', '3817459'
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
    if (percentage >= 90) message = '¡Excelente! Conoces bien la expansión y reforma de la iglesia.';
    else if (percentage >= 70) message = '¡Muy bien! Tienes un buen conocimiento.';
    else if (percentage >= 50) message = 'Bien, pero puedes repasar algunos conceptos.';
    else message = 'Sigue estudiando, la historia de la iglesia es fascinante.';
    
    domElements.finalResults.innerHTML = `
        <div class="final-results-content">
            <h2>🎉 ¡CAPÍTULO 5 COMPLETADO! 🎉</h2>
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
    
    const chapterNumber = localStorage.getItem('historiaDenominacional_currentChapter') || '5';
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
        domElements.chapterTitle.textContent = `Capítulo 5: Expansión y Reforma (1864-1873)`;
    }
    
    updateScoreDisplay();
    loadQuestion();
});

window.backToMenu = backToMenu;
window.submitAnswer = submitAnswer;
window.nextQuestion = nextQuestion;
window.restartChapter = restartChapter;