// ============================================
// PREGUNTAS DEL CAPÍTULO 10 - CONFIRMACIÓN Y EXPANSIÓN (1947-1959)
// ============================================
const questions = [
    // ============================================
    // SECCIÓN A: MISIONES DE POSGUERRA (IDs 1-8)
    // ============================================
    {
        id: 1,
        type: 'multiple',
        question: '¿En qué año la iglesia encaró un gran proyecto de rehabilitación y reconstrucción?',
        options: ['1945', '1946', '1947', '1948'],
        correct: 1,
        explanation: 'En 1946, la iglesia encaró un gran proyecto de rehabilitación y reconstrucción después de la guerra.'
    },
    {
        id: 2,
        type: 'multiple',
        question: '¿Qué país obligó a salir a todos los obreros extranjeros?',
        options: ['Japón', 'China', 'Corea', 'India'],
        correct: 1,
        explanation: 'Pronto todos los obreros extranjeros tuvieron que salir de China.'
    },
    {
        id: 3,
        type: 'multiple',
        question: '¿En qué año se inició una escuela secundaria en Islandia?',
        options: ['1948', '1949', '1950', '1951'],
        correct: 2,
        explanation: 'Se inició una escuela secundaria en Islandia en 1950.'
    },
    {
        id: 4,
        type: 'multiple',
        question: '¿En qué año se abrió un hospital en Pakistán?',
        options: ['1950', '1951', '1952', '1953'],
        correct: 1,
        explanation: 'Se abrió un hospital en Pakistán en 1951.'
    },
    {
        id: 5,
        type: 'multiple',
        question: '¿En qué año se estableció un orfanatorio en Corea?',
        options: ['1950', '1951', '1952', '1953'],
        correct: 1,
        explanation: 'Se estableció un orfanatorio en Corea en 1951.'
    },

    // ============================================
    // SECCIÓN B: PRESIDENTES DE LA ASOCIACIÓN GENERAL (IDs 6-10)
    // ============================================
    {
        id: 6,
        type: 'multiple',
        question: '¿Quién fue presidente de la Asociación General de 1950 a 1954?',
        options: ['R.R. Figuhr', 'W.H. Branson', 'W.A. Spicer', 'C.H. Watson'],
        correct: 1,
        explanation: 'El pastor W.H. Branson ocupó la presidencia de 1950 a 1954.'
    },
    {
        id: 7,
        type: 'multiple',
        question: '¿En qué países había trabajado W.H. Branson?',
        options: ['India y Birmania', 'China y África', 'Filipinas y Sudamérica', 'Europa y Australia'],
        correct: 1,
        explanation: 'Branson había trabajado en China y África.'
    },
    {
        id: 8,
        type: 'multiple',
        question: '¿En qué año fue nombrado presidente R.R. Figuhr?',
        options: ['1953', '1954', '1955', '1956'],
        correct: 1,
        explanation: 'R.R. Figuhr fue nombrado presidente en el congreso de 1954.'
    },
    {
        id: 9,
        type: 'multiple',
        question: '¿En qué países había trabajado R.R. Figuhr?',
        options: ['China y África', 'India y Birmania', 'Filipinas y América del Sur', 'Europa y Australia'],
        correct: 2,
        explanation: 'Figuhr había trabajado en las Filipinas y América del Sur.'
    },

    // ============================================
    // SECCIÓN C: TELEVISIÓN Y EVANGELISMO (IDs 10-18)
    // ============================================
    {
        id: 10,
        type: 'multiple',
        question: '¿En qué año comenzó el programa de televisión "Faith for Today"?',
        options: ['1948', '1949', '1950', '1951'],
        correct: 2,
        explanation: 'Faith for Today comenzó en Nueva York en 1950.'
    },
    {
        id: 11,
        type: 'multiple',
        question: '¿Quién dirigía el programa "Faith for Today"?',
        options: ['George Vandeman', 'W.A. Fagal', 'H.M.S. Richards', 'W.H. Branson'],
        correct: 1,
        explanation: 'El pastor W.A. Fagal dirigía Faith for Today.'
    },
    {
        id: 12,
        type: 'multiple',
        question: '¿Dónde comenzó el programa "Faith for Today"?',
        options: ['Los Ángeles', 'Chicago', 'Nueva York', 'Washington'],
        correct: 2,
        explanation: 'Comenzó en Nueva York.'
    },
    {
        id: 13,
        type: 'multiple',
        question: '¿En qué año comenzó la escuela bíblica de "Faith for Today"?',
        options: ['1951', '1952', '1953', '1954'],
        correct: 1,
        explanation: 'La escuela bíblica comenzó en 1952.'
    },
    {
        id: 14,
        type: 'multiple',
        question: '¿En qué año se desarrolló el programa "It is Written"?',
        options: ['1954', '1955', '1956', '1957'],
        correct: 1,
        explanation: 'It is Written se desarrolló en 1955.'
    },
    {
        id: 15,
        type: 'multiple',
        question: '¿Quién dirigía el programa "It is Written"?',
        options: ['W.A. Fagal', 'George Vandeman', 'H.M.S. Richards', 'R.R. Figuhr'],
        correct: 1,
        explanation: 'El pastor George Vandeman dirigía It is Written.'
    },
    {
        id: 16,
        type: 'multiple',
        question: '¿Qué centro de evangelización se abrió en Londres?',
        options: ['Centro Adventista', 'Nueva Galería', 'Times Square', 'Regent Hall'],
        correct: 1,
        explanation: 'La Nueva Galería en la calle Regent de Londres.'
    },
    {
        id: 17,
        type: 'multiple',
        question: '¿Qué centro de evangelización se abrió en Nueva York?',
        options: ['Nueva Galería', 'Centro Adventista', 'Times Square', 'Broadway Hall'],
        correct: 1,
        explanation: 'El Centro Adventista de Nueva York, junto a Times Square.'
    },

    // ============================================
    // SECCIÓN D: OBRA ENTRE JUDÍOS (IDs 18-20)
    // ============================================
    {
        id: 18,
        type: 'multiple',
        question: '¿En qué año se organizó la Asociación Hebrea de las Escrituras?',
        options: ['1954', '1955', '1956', '1957'],
        correct: 1,
        explanation: 'Se organizó en 1955.'
    },
    {
        id: 19,
        type: 'multiple',
        question: '¿Qué revista trimestral se publica para los judíos?',
        options: ['Israelite', 'Jewish Herald', 'Shalom', 'Israeliete'],
        correct: 0,
        explanation: 'Se publica una revista trimestral llamada Israeliete.'
    },

    // ============================================
    // SECCIÓN E: QUESTIONS ON DOCTRINE (IDs 20-23)
    // ============================================
    {
        id: 20,
        type: 'multiple',
        question: '¿En qué años se intensificaron las preguntas sobre las creencias adventistas?',
        options: ['1954-1955', '1955-1956', '1956-1957', '1957-1958'],
        correct: 1,
        explanation: 'Se intensificó en 1955 y 1956.'
    },
    {
        id: 21,
        type: 'multiple',
        question: '¿Qué libro se publicó como resultado de estas discusiones?',
        options: ['Creencias Adventistas', 'Questions on Doctrine', 'Respuestas Bíblicas', 'Fe y Doctrina'],
        correct: 1,
        explanation: 'Se publicó "Seventh-day Adventists Answer Questions on Doctrine".'
    },

    // ============================================
    // SECCIÓN F: DATOS Y CIFRAS (IDs 22-30)
    // ============================================
    {
        id: 22,
        type: 'multiple',
        question: '¿En qué año las ofrendas de escuela sabática alcanzaron los 100 millones de dólares?',
        options: ['1954', '1955', '1956', '1957'],
        correct: 1,
        explanation: 'En 1955 alcanzaron y sobrepasaron los cien millones.'
    },
    {
        id: 23,
        type: 'multiple',
        question: '¿A cuánto llegó la apropiación para misiones extranjeras en 1956?',
        options: ['Más de 11 millones', 'Más de 16 millones', 'Más de 21 millones', 'Más de 26 millones'],
        correct: 2,
        explanation: 'Llegó a más de 21 millones de dólares.'
    },
    {
        id: 24,
        type: 'multiple',
        question: '¿Por cuántas estaciones de radio transmitía la iglesia en 1957?',
        options: ['761', '861', '961', '1,061'],
        correct: 2,
        explanation: 'Transmitía por 961 estaciones de radio.'
    },
    {
        id: 25,
        type: 'multiple',
        question: '¿En cuántos idiomas transmitía la iglesia en 1957?',
        options: ['17', '22', '27', '32'],
        correct: 2,
        explanation: 'En 27 idiomas diferentes.'
    },
    {
        id: 26,
        type: 'multiple',
        question: '¿Cuántas instituciones médicas de categoría había en 1958?',
        options: ['82', '92', '102', '112'],
        correct: 2,
        explanation: 'Había 102 instituciones médicas de categoría.'
    },
    {
        id: 27,
        type: 'multiple',
        question: '¿Cuántas clínicas y dispensarios había en 1958?',
        options: ['65', '75', '85', '95'],
        correct: 2,
        explanation: '85 clínicas y dispensarios.'
    },
    {
        id: 28,
        type: 'multiple',
        question: '¿Cuántas lanchas misioneras funcionaban en América del Sur en 1958?',
        options: ['5', '8', '10', '12'],
        correct: 2,
        explanation: 'Funcionaban 10 lanchas médicas misioneras.'
    },
    {
        id: 29,
        type: 'multiple',
        question: '¿Cuál era la feligresía total de la iglesia en 1959?',
        options: ['1,094,030', '1,194,030', '1,294,030', '1,394,030'],
        correct: 1,
        explanation: 'Alcanzó la cifra de 1,194,030 miembros.'
    },
    {
        id: 30,
        type: 'multiple',
        question: '¿A cuánto ascendieron los diezmos en 1959?',
        options: ['Más de 43 millones', 'Más de 48 millones', 'Más de 53 millones', 'Más de 58 millones'],
        correct: 2,
        explanation: 'Más de 53 y medio millones de dólares.'
    },

    // ============================================
    // SECCIÓN G: PREGUNTAS DE COMPLETACIÓN (IDs 31-40)
    // ============================================
    {
        id: 31,
        type: 'fill',
        question: 'En 1946, la iglesia encaró un gran proyecto de rehabilitación y __________.',
        correct: ['reconstrucción'],
        explanation: 'Rehabilitación y reconstrucción.'
    },
    {
        id: 32,
        type: 'fill',
        question: 'Todos los obreros extranjeros tuvieron que salir de __________.',
        correct: ['china'],
        explanation: 'China.'
    },
    {
        id: 33,
        type: 'fill',
        question: 'Se inició una escuela secundaria en Islandia en __________.',
        correct: ['1950'],
        explanation: '1950.'
    },
    {
        id: 34,
        type: 'fill',
        question: 'W.H. __________ fue presidente de la Asociación General de 1950 a 1954.',
        correct: ['branson'],
        explanation: 'W.H. Branson.'
    },
    {
        id: 35,
        type: 'fill',
        question: 'R.R. __________ fue nombrado presidente en 1954.',
        correct: ['figuhr'],
        explanation: 'R.R. Figuhr.'
    },
    {
        id: 36,
        type: 'fill',
        question: 'El programa "Faith for Today" comenzó en Nueva York en __________.',
        correct: ['1950'],
        explanation: '1950.'
    },
    {
        id: 37,
        type: 'fill',
        question: 'El programa "It is Written" se desarrolló en __________ con George Vandeman.',
        correct: ['1955'],
        explanation: '1955.'
    },
    {
        id: 38,
        type: 'fill',
        question: 'La Asociación Hebrea de las Escrituras se organizó en __________.',
        correct: ['1955'],
        explanation: '1955.'
    },
    {
        id: 39,
        type: 'fill',
        question: 'En 1959 la feligresía alcanzó 1,194,030 miembros y los diezmos fueron más de __________ millones.',
        correct: ['53'],
        explanation: '53 millones y medio.'
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
        '1945', '1946', '1947', '1948', '1949', '1950', '1951', '1952', '1953', '1954',
        '1955', '1956', '1957', '1958', '1959',
        'china', 'islandia', 'pakistán', 'corea', 'londres', 'nueva york',
        'branson', 'figuhr', 'fagal', 'vandeman',
        '100', '21', '961', '27', '102', '85', '10', '1194030', '53'
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
    if (percentage >= 90) message = '¡Excelente! Conoces bien la confirmación y expansión.';
    else if (percentage >= 70) message = '¡Muy bien! Tienes un buen conocimiento.';
    else if (percentage >= 50) message = 'Bien, pero puedes repasar.';
    else message = 'Sigue estudiando.';
    
    domElements.finalResults.innerHTML = `
        <div class="final-results-content">
            <h2>🎉 ¡CAPÍTULO 10 COMPLETADO! 🎉</h2>
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
    
    const chapterNumber = localStorage.getItem('historiaDenominacional_currentChapter') || '10';
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
        domElements.chapterTitle.textContent = `Capítulo 10: Confirmación y Expansión (1947-1959)`;
    }
    
    updateScoreDisplay();
    loadQuestion();
});

window.backToMenu = backToMenu;
window.submitAnswer = submitAnswer;
window.nextQuestion = nextQuestion;
window.restartChapter = restartChapter;