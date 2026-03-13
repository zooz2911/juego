// ============================================
// PREGUNTAS DEL CAPÍTULO 9 - PROGRESO A PESAR DE LOS REVESES (1924-1946)
// ============================================
const questions = [
    // ============================================
    // SECCIÓN A: MUERTE DEL ÚLTIMO PIONERO (IDs 1-5)
    // ============================================
    {
        id: 1,
        type: 'multiple',
        question: '¿En qué año murió el pastor J.N. Loughborough?',
        options: ['1922', '1923', '1924', '1925'],
        correct: 2,
        explanation: 'J.N. Loughborough murió en 1924, marcando el fin de la era de los pioneros.'
    },
    {
        id: 2,
        type: 'multiple',
        question: '¿Qué marcó la muerte de J.N. Loughborough?',
        options: ['El fin de las publicaciones', 'El fin de la era de los pioneros', 'El inicio de una nueva era', 'El fin de las misiones'],
        correct: 1,
        explanation: 'La muerte de Loughborough en 1924 marcó el fin de la era de los pioneros.'
    },
    {
        id: 3,
        type: 'multiple',
        question: '¿Cuántos misioneros fueron enviados al extranjero en el Congreso de 1926?',
        options: ['100', '125', '150', '175'],
        correct: 2,
        explanation: 'En el Congreso de 1926 fueron enviados 150 misioneros al extranjero.'
    },

    // ============================================
    // SECCIÓN B: LOS AÑOS DE LA DEPRESIÓN (IDs 4-10)
    // ============================================
    {
        id: 4,
        type: 'multiple',
        question: '¿En qué año comenzó la Gran Depresión financiera mundial?',
        options: ['1928', '1929', '1930', '1931'],
        correct: 1,
        explanation: 'La Gran Depresión comenzó en 1929.'
    },
    {
        id: 5,
        type: 'multiple',
        question: '¿Quién fue nombrado presidente de la Asociación General en 1930?',
        options: ['W.A. Spicer', 'C.H. Watson', 'A.G. Daniells', 'J.N. Loughborough'],
        correct: 1,
        explanation: 'C.H. Watson, presidente de la División Australasiana, fue nombrado presidente de la Asociación General en 1930.'
    },
    {
        id: 6,
        type: 'multiple',
        question: '¿Por qué cualidades se destacaba C.H. Watson?',
        options: ['Por su predicación', 'Por su integridad financiera y agudeza en negocios', 'Por sus escritos', 'Por su labor misionera'],
        correct: 1,
        explanation: 'Se destacaba por su integridad financiera y su agudeza en los negocios.'
    },
    {
        id: 7,
        type: 'multiple',
        question: '¿Cuánto dinero recibió menos la iglesia entre 1931 y 1934?',
        options: ['44 millones', '54 millones', '64 millones', '74 millones'],
        correct: 1,
        explanation: 'La iglesia recibió 54 millones de dólares menos de 1931 a 1934.'
    },
    {
        id: 8,
        type: 'multiple',
        question: '¿Cuántos miembros aumentó la feligresía durante la depresión?',
        options: ['70,000', '80,000', '90,000', '100,000'],
        correct: 2,
        explanation: 'La feligresía aumentó en 90,000 miembros.'
    },
    {
        id: 9,
        type: 'multiple',
        question: '¿Cuántas misiones se establecieron durante la depresión?',
        options: ['38', '43', '48', '53'],
        correct: 2,
        explanation: 'Se establecieron 48 misiones.'
    },
    {
        id: 10,
        type: 'multiple',
        question: '¿Cuántos obreros más se emplearon durante la depresión?',
        options: ['554', '604', '654', '704'],
        correct: 2,
        explanation: 'Se emplearon 654 obreros más.'
    },

    // ============================================
    // SECCIÓN C: PRIMERAS LANCHAS MISIONERAS (IDs 11-15)
    // ============================================
    {
        id: 11,
        type: 'multiple',
        question: '¿En qué año se puso en servicio la primera lancha misionera?',
        options: ['1930', '1931', '1932', '1933'],
        correct: 1,
        explanation: 'En 1931, Leo B. Halliwell y su esposa Jessie pusieron en servicio la primera lancha misionera.'
    },
    {
        id: 12,
        type: 'multiple',
        question: '¿Quiénes pusieron en servicio la primera lancha misionera?',
        options: ['Los Halliwell', 'Los White', 'Los Andrews', 'Los Haskell'],
        correct: 0,
        explanation: 'Leo B. Halliwell y su esposa Jessie.'
    },
    {
        id: 13,
        type: 'multiple',
        question: '¿Dónde navegan estas lanchas misioneras?',
        options: ['Por el Mississippi', 'Por el Amazonas y otros ríos de Sudamérica', 'Por el Orinoco', 'Por el Río de la Plata'],
        correct: 1,
        explanation: 'Navegan por el Amazonas y otros ríos de América del Sur.'
    },
    {
        id: 14,
        type: 'multiple',
        question: '¿Por qué se compró una lancha en lugar de un hospital?',
        options: ['Porque era mejor', 'Porque no alcanzaba el dinero para un hospital', 'Porque había muchos ríos', 'Porque Dios lo ordenó'],
        correct: 1,
        explanation: 'No alcanzaba el dinero para un hospital, así que compraron una lancha.'
    },

    // ============================================
    // SECCIÓN D: SOCIEDAD DE TEMPERANCIA (IDs 15-18)
    // ============================================
    {
        id: 15,
        type: 'multiple',
        question: '¿En qué año se organizó la Sociedad Americana de Temperancia?',
        options: ['1931', '1932', '1933', '1934'],
        correct: 1,
        explanation: 'La Asociación General organizó la Sociedad Americana de Temperancia en 1932.'
    },
    {
        id: 16,
        type: 'multiple',
        question: '¿En qué año se organizó la Asociación Internacional de Temperancia?',
        options: ['1945', '1946', '1947', '1948'],
        correct: 2,
        explanation: 'La Asociación Internacional de Temperancia se organizó en 1947.'
    },
    {
        id: 17,
        type: 'multiple',
        question: '¿En qué ciudad se fundó la primera sociedad de temperancia en 1826?',
        options: ['Nueva York', 'Filadelfia', 'Boston', 'Washington'],
        correct: 2,
        explanation: 'Se fundó en Boston en 1826, antes del movimiento adventista.'
    },

    // ============================================
    // SECCIÓN E: SEMINARIO TEOLÓGICO (IDs 18-21)
    // ============================================
    {
        id: 18,
        type: 'multiple',
        question: '¿En qué año se estableció el Seminario Adventista de Teología?',
        options: ['1935', '1936', '1937', '1938'],
        correct: 1,
        explanation: 'Se estableció en Washington, D.C. en 1936.'
    },
    {
        id: 19,
        type: 'multiple',
        question: '¿Dónde se estableció el Seminario Teológico?',
        options: ['Nueva York', 'Battle Creek', 'Washington, D.C.', 'Chicago'],
        correct: 2,
        explanation: 'En Washington, D.C.'
    },
    {
        id: 20,
        type: 'multiple',
        question: '¿En qué año el Seminario pasó a formar parte de la Universidad Andrews?',
        options: ['1958', '1959', '1960', '1961'],
        correct: 2,
        explanation: 'En 1960 el Seminario pasó a formar parte de la Universidad Andrews.'
    },
    {
        id: 21,
        type: 'multiple',
        question: '¿En honor de quién se nombró la Universidad Andrews?',
        options: ['J.N. Loughborough', 'J.N. Andrews', 'Jaime White', 'Urías Smith'],
        correct: 1,
        explanation: 'Nombrada en honor de J.N. Andrews, el primer misionero.'
    },

    // ============================================
    // SECCIÓN F: ALIMENTOS SALUDABLES (IDs 22-25)
    // ============================================
    {
        id: 22,
        type: 'multiple',
        question: '¿En qué año empezaron a surgir las fábricas de alimentos saludables?',
        options: ['1895', '1896', '1897', '1898'],
        correct: 2,
        explanation: 'Desde 1897 empezaron a surgir las fábricas de alimentos saludables.'
    },
    {
        id: 23,
        type: 'multiple',
        question: '¿Cuántos beneficios proporciona esta industria?',
        options: ['Uno', 'Dos', 'Tres', 'Cuatro'],
        correct: 2,
        explanation: 'Constituye una triple bendición.'
    },
    {
        id: 24,
        type: 'multiple',
        question: 'Menciona un beneficio de las fábricas de alimentos saludables.',
        options: ['Proporciona alimentos saludables', 'Proporciona viajes', 'Proporciona educación', 'Proporciona vivienda'],
        correct: 0,
        explanation: 'Proporciona alimentos saludables, empleo y dinero para misiones.'
    },

    // ============================================
    // SECCIÓN G: SEGUNDA GUERRA MUNDIAL (IDs 25-29)
    // ============================================
    {
        id: 25,
        type: 'multiple',
        question: '¿Entre qué años ocurrió la Segunda Guerra Mundial?',
        options: ['1938-1944', '1939-1945', '1940-1946', '1941-1947'],
        correct: 1,
        explanation: 'La Segunda Guerra Mundial fue de 1939 a 1945.'
    },
    {
        id: 26,
        type: 'multiple',
        question: '¿Qué dificultad afectó la producción de materiales?',
        options: ['Falta de trabajadores', 'Disminución de papel', 'Falta de dinero', 'Cierre de fábricas'],
        correct: 1,
        explanation: 'Disminuyó la producción de materiales, como el papel.'
    },

    // ============================================
    // SECCIÓN H: UNIDAD Y ADELANTO (IDs 27-30)
    // ============================================
    {
        id: 27,
        type: 'multiple',
        question: '¿En qué año se adoptó la declaración de creencias fundamentales?',
        options: ['1930', '1931', '1932', '1933'],
        correct: 1,
        explanation: 'La declaración de creencias fundamentales fue adoptada en 1931.'
    },
    {
        id: 28,
        type: 'multiple',
        question: '¿En qué año se adoptó el certificado bautismal uniforme?',
        options: ['1939', '1940', '1941', '1942'],
        correct: 2,
        explanation: 'El certificado bautismal uniforme fue adoptado en 1941.'
    },
    {
        id: 29,
        type: 'multiple',
        question: '¿Cuántas preguntas deben responder los candidatos al bautismo?',
        options: ['10', '11', '12', '13'],
        correct: 3,
        explanation: 'Son trece las preguntas que los candidatos al bautismo deben responder.'
    },

    // ============================================
    // SECCIÓN I: OBRA RADIAL (IDs 30-40)
    // ============================================
    {
        id: 30,
        type: 'multiple',
        question: '¿Quién fue el pionero de la radiodifusión adventista?',
        options: ['H.M.S. Richards', 'W.A. Spicer', 'C.H. Watson', 'J.N. Loughborough'],
        correct: 0,
        explanation: 'El pastor H.M.S. Richards fue el pionero de la radiodifusión.'
    },
    {
        id: 31,
        type: 'multiple',
        question: '¿En qué año tuvo H.M.S. Richards la idea de la radio?',
        options: ['1918', '1919', '1920', '1921'],
        correct: 2,
        explanation: 'Tuvo la idea en 1920.'
    },
    {
        id: 32,
        type: 'multiple',
        question: '¿En qué año hizo H.M.S. Richards su primera transmisión?',
        options: ['1924', '1925', '1926', '1927'],
        correct: 2,
        explanation: 'Hizo su primera transmisión en 1926.'
    },
    {
        id: 33,
        type: 'multiple',
        question: '¿Dónde estaba ubicada la primera oficina de H.M.S. Richards?',
        options: ['En una iglesia', 'En una pollería convertida', 'En su casa', 'En una escuela'],
        correct: 1,
        explanation: 'Su oficina estaba situada en una pollería convertida en oficina.'
    },
    {
        id: 34,
        type: 'multiple',
        question: '¿En qué año "The Voice of Prophecy" fue aceptada como proyecto denominacional?',
        options: ['1939', '1940', '1941', '1942'],
        correct: 2,
        explanation: 'No fue hasta 1941 que fue aceptada como proyecto denominacional.'
    },
    {
        id: 35,
        type: 'multiple',
        question: '¿Cuántas estaciones radiales usan el programa en la División Norteamericana?',
        options: ['500', '600', '700', '800'],
        correct: 3,
        explanation: 'Usa unas 800 estaciones radiales.'
    },
    {
        id: 36,
        type: 'multiple',
        question: '¿En cuántas estaciones fuera de EE.UU. se escuchan programas afiliados?',
        options: ['Más de 500', 'Más de 800', 'Más de 1,000', 'Más de 1,500'],
        correct: 2,
        explanation: 'Más de 1,000 estaciones fuera de Estados Unidos.'
    },

    // ============================================
    // SECCIÓN J: PREGUNTAS DE COMPLETACIÓN (IDs 37-45)
    // ============================================
    {
        id: 37,
        type: 'fill',
        question: 'J.N. Loughborough murió en __________, marcando el fin de la era de los pioneros.',
        correct: ['1924'],
        explanation: '1924.'
    },
    {
        id: 38,
        type: 'fill',
        question: 'En el Congreso de 1926 fueron enviados __________ misioneros al extranjero.',
        correct: ['150'],
        explanation: '150 misioneros.'
    },
    {
        id: 39,
        type: 'fill',
        question: 'La Gran Depresión comenzó en el año __________.',
        correct: ['1929'],
        explanation: '1929.'
    },
    {
        id: 40,
        type: 'fill',
        question: 'C.H. __________ fue nombrado presidente de la Asociación General en 1930.',
        correct: ['watson'],
        explanation: 'C.H. Watson.'
    },
    {
        id: 41,
        type: 'fill',
        question: 'La primera lancha misionera fue puesta en servicio en __________ por los Halliwell.',
        correct: ['1931'],
        explanation: '1931.'
    },
    {
        id: 42,
        type: 'fill',
        question: 'El Seminario Teológico se estableció en Washington, D.C. en __________.',
        correct: ['1936'],
        explanation: '1936.'
    },
    {
        id: 43,
        type: 'fill',
        question: 'La Segunda Guerra Mundial fue de 1939 a __________.',
        correct: ['1945'],
        explanation: '1945.'
    },
    {
        id: 44,
        type: 'fill',
        question: 'La declaración de creencias fundamentales fue adoptada en __________.',
        correct: ['1931'],
        explanation: '1931.'
    },
    {
        id: 45,
        type: 'fill',
        question: 'H.M.S. __________ fue el pionero de la radiodifusión adventista.',
        correct: ['richards'],
        explanation: 'H.M.S. Richards.'
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
        '1922', '1923', '1924', '1925', '1926', '1928', '1929', '1930', '1931', '1932',
        '1933', '1934', '1935', '1936', '1937', '1938', '1939', '1940', '1941', '1942',
        '1945', '1947', '1960',
        'loughborough', 'watson', 'halliwell', 'richards', 'andrews',
        '100', '125', '150', '175', '54', '90', '48', '654', '800', '1000', '13'
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
    if (percentage >= 90) message = '¡Excelente! Conoces bien el progreso a pesar de los reveses.';
    else if (percentage >= 70) message = '¡Muy bien! Tienes un buen conocimiento.';
    else if (percentage >= 50) message = 'Bien, pero puedes repasar.';
    else message = 'Sigue estudiando.';
    
    domElements.finalResults.innerHTML = `
        <div class="final-results-content">
            <h2>🎉 ¡CAPÍTULO 9 COMPLETADO! 🎉</h2>
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
    
    const chapterNumber = localStorage.getItem('historiaDenominacional_currentChapter') || '9';
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
        domElements.chapterTitle.textContent = `Capítulo 9: Progreso a pesar de los Reveses (1924-1946)`;
    }
    
    updateScoreDisplay();
    loadQuestion();
});

window.backToMenu = backToMenu;
window.submitAnswer = submitAnswer;
window.nextQuestion = nextQuestion;
window.restartChapter = restartChapter;