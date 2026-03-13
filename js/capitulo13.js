// ============================================
// PREGUNTAS DEL CAPÍTULO 13 - DIVISIONES MUNDIALES DE LA IGLESIA
// ============================================
const questions = [
    // ============================================
    // SECCIÓN A: INTRODUCCIÓN (IDs 1-3)
    // ============================================
    {
        id: 1,
        type: 'multiple',
        question: '¿En qué año se organizaron las divisiones por primera vez?',
        options: ['1914', '1915', '1916', '1917'],
        correct: 2,
        explanation: 'En 1916 se organizaron las divisiones.'
    },
    {
        id: 2,
        type: 'multiple',
        question: '¿En cuántas divisiones está dividido actualmente el mundo?',
        options: ['10', '11', '12', '13'],
        correct: 3,
        explanation: 'El mundo está dividido en trece divisiones.'
    },

    // ============================================
    // SECCIÓN B: DIVISIÓN AFROCENOÍNDICA (ID 3)
    // ============================================
    {
        id: 3,
        type: 'multiple',
        question: '¿En qué año fue organizada la División Afroceanoíndica?',
        options: ['1978', '1979', '1980', '1981'],
        correct: 2,
        explanation: 'Fue organizada durante el Congreso de 1980 en Dallas, Texas.'
    },

    // ============================================
    // SECCIÓN C: DIVISIÓN AFROMEDIORIENTAL (IDs 4-7)
    // ============================================
    {
        id: 4,
        type: 'multiple',
        question: '¿En qué año fue organizada la División Afromedioriental?',
        options: ['1968', '1969', '1970', '1971'],
        correct: 2,
        explanation: 'Fue organizada en 1970.'
    },
    {
        id: 5,
        type: 'multiple',
        question: '¿Dónde estaba originalmente la sede de la División Afromedioriental?',
        options: ['Nicosia, Chipre', 'Beirut, Líbano', 'El Cairo, Egipto', 'Tel Aviv, Israel'],
        correct: 1,
        explanation: 'La sede estaba en Beirut, Líbano.'
    },
    {
        id: 6,
        type: 'multiple',
        question: '¿A dónde fue transferida la sede en 1978?',
        options: ['Beirut', 'Nicosia, Chipre', 'Estambul', 'Atenas'],
        correct: 1,
        explanation: 'Fue transferida a Nicosia, Chipre.'
    },
    {
        id: 7,
        type: 'multiple',
        question: '¿Cuántos miembros tenía en 1981?',
        options: ['96,870', '146,870', '196,870', '246,870'],
        correct: 2,
        explanation: 'Tenía 196,870 miembros.'
    },

    // ============================================
    // SECCIÓN D: DIVISIÓN AUSTRALASIANA (IDs 8-12)
    // ============================================
    {
        id: 8,
        type: 'multiple',
        question: '¿Dónde está situada la sede de la División Australasiana?',
        options: ['Sidney', 'Wahroonga, suburbio de Sidney', 'Melbourne', 'Brisbane'],
        correct: 1,
        explanation: 'La sede está en Wahroonga, un suburbio de Sidney.'
    },
    {
        id: 9,
        type: 'multiple',
        question: '¿Qué institución educativa importante tiene esta división?',
        options: ['Colegio de Sidney', 'Colegio de Avondale', 'Universidad de Australia', 'Instituto Wahroonga'],
        correct: 1,
        explanation: 'Tiene el Colegio de Avondale.'
    },
    {
        id: 10,
        type: 'multiple',
        question: '¿Qué casa publicadora tiene en Victoria?',
        options: ['Review and Herald', 'Signs', 'Pacific Press', 'Stanborough'],
        correct: 1,
        explanation: 'La Casa Editora Signs.'
    },
    {
        id: 11,
        type: 'multiple',
        question: '¿Quién aconsejó la adquisición de los terrenos de la sede?',
        options: ['Jaime White', 'J.N. Andrews', 'Elena White', 'J.N. Loughborough'],
        correct: 2,
        explanation: 'Fue adquirida como resultado de los consejos de Elena White.'
    },

    // ============================================
    // SECCIÓN E: DIVISIÓN EUROAFRICANA (IDs 12-14)
    // ============================================
    {
        id: 12,
        type: 'multiple',
        question: '¿En qué año fue reorganizada la División Euroafricana?',
        options: ['1970', '1971', '1972', '1973'],
        correct: 1,
        explanation: 'Fue reorganizada en 1971.'
    },
    {
        id: 13,
        type: 'multiple',
        question: '¿Dónde está la sede de la División Euroafricana?',
        options: ['Ginebra', 'Berna, Suiza', 'Zúrich', 'Basilea'],
        correct: 1,
        explanation: 'La sede está en Berna, Suiza.'
    },

    // ============================================
    // SECCIÓN F: DIVISIÓN INTERAMERICANA (IDs 14-28)
    // ============================================
    {
        id: 14,
        type: 'multiple',
        question: '¿Quiénes fueron los primeros adventistas que pisaron suelo interamericano?',
        options: ['J.N. Andrews y J.N. Loughborough', 'D.T. Bourdeau y J.N. Loughborough', 'Jaime White y José Bates', 'S.N. Haskell y A.G. Daniells'],
        correct: 1,
        explanation: 'D.T. Bourdeau y J.N. Loughborough en 1868.'
    },
    {
        id: 15,
        type: 'multiple',
        question: '¿En qué año viajaron Bourdeau y Loughborough a Panamá?',
        options: ['1866', '1867', '1868', '1869'],
        correct: 2,
        explanation: 'En 1868, cruzaron el istmo de Panamá a lomo de mula.'
    },
    {
        id: 16,
        type: 'multiple',
        question: '¿En qué año se organizó formalmente la División Interamericana?',
        options: ['1920', '1921', '1922', '1923'],
        correct: 2,
        explanation: 'Se organizó en 1922.'
    },
    {
        id: 17,
        type: 'multiple',
        question: '¿Quién fue el primer presidente de la División Interamericana?',
        options: ['E.E. Andross', 'S.E. Kellmann', 'Glenn Calkins', 'C.L. Torrey'],
        correct: 0,
        explanation: 'E.E. Andross fue el primer presidente.'
    },
    {
        id: 18,
        type: 'multiple',
        question: '¿Dónde se estableció la primera sede en 1922?',
        options: ['Panamá', 'Balboa, Zona del Canal', 'Colón', 'Ciudad de Panamá'],
        correct: 1,
        explanation: 'La sede se fijó en Balboa, Zona del Canal, Panamá.'
    },
    {
        id: 19,
        type: 'multiple',
        question: '¿A dónde se mudó la sede en 1941?',
        options: ['Miami', 'La Habana, Cuba', 'San Juan', 'Santo Domingo'],
        correct: 1,
        explanation: 'Se mudó a La Habana, Cuba.'
    },
    {
        id: 20,
        type: 'multiple',
        question: '¿En qué año se mudó la sede a Miami?',
        options: ['1944', '1945', '1946', '1947'],
        correct: 2,
        explanation: 'En 1946 se mudó a Miami, Florida.'
    },
    {
        id: 21,
        type: 'multiple',
        question: '¿En qué año esta división llegó a ser la mayor en feligresía fuera de EE.UU.?',
        options: ['1946', '1947', '1948', '1949'],
        correct: 1,
        explanation: 'En 1947 llegó a ser la mayor fuera de Estados Unidos.'
    },
    {
        id: 22,
        type: 'multiple',
        question: '¿En qué año se convirtió en la división más grande del mundo?',
        options: ['1978', '1979', '1980', '1981'],
        correct: 2,
        explanation: 'En 1980 se convirtió en la mayor del mundo.'
    },
    {
        id: 23,
        type: 'multiple',
        question: '¿Cuántas personas por semana se bautizaban en 1977-1978?',
        options: ['500', '800', 'Más de 1000', '1500'],
        correct: 2,
        explanation: 'Más de 1000 personas a la semana.'
    },
    {
        id: 24,
        type: 'multiple',
        question: '¿Cuántos miembros tenía la División Interamericana en 1980?',
        options: ['437,033', '537,033', '637,033', '737,033'],
        correct: 2,
        explanation: 'Contaba con 637,033 miembros.'
    },
    {
        id: 25,
        type: 'multiple',
        question: '¿Qué universidad importante tiene en México?',
        options: ['Universidad de Montemorelos', 'Colegio de las Antillas', 'CADES', 'ICOLVEN'],
        correct: 0,
        explanation: 'La Universidad de Montemorelos.'
    },
    {
        id: 26,
        type: 'multiple',
        question: '¿Qué institución de enseñanza superior tiene en Costa Rica?',
        options: ['CADES', 'ICOLVEN', 'Colegio de las Antillas', 'Universidad Adventista'],
        correct: 0,
        explanation: 'El Centro Adventista de Estudios Superiores (CADES).'
    },
    {
        id: 27,
        type: 'multiple',
        question: '¿Qué institución de enseñanza superior tiene en Colombia?',
        options: ['CADES', 'ICOLVEN', 'Colegio Adventista', 'Universidad'],
        correct: 1,
        explanation: 'El Instituto Colombo-Venezolano (ICOLVEN).'
    },

    // ============================================
    // SECCIÓN G: DIVISIÓN DEL LEJANO ORIENTE (IDs 28-30)
    // ============================================
    {
        id: 28,
        type: 'multiple',
        question: '¿Dónde está la sede de la División del Lejano Oriente?',
        options: ['Tokio', 'Singapur', 'Hong Kong', 'Manila'],
        correct: 1,
        explanation: 'Su sede está en Singapur.'
    },
    {
        id: 29,
        type: 'multiple',
        question: '¿Cuántas iglesias tenía en 1978?',
        options: ['1,982', '2,982', '3,982', '4,982'],
        correct: 1,
        explanation: 'Tenía 2,982 iglesias.'
    },
    {
        id: 30,
        type: 'multiple',
        question: '¿Cuántos miembros tenía en 1978?',
        options: ['249,148', '299,148', '349,148', '399,148'],
        correct: 2,
        explanation: 'Tenía 349,148 miembros.'
    },

    // ============================================
    // SECCIÓN H: DIVISIÓN NOREUROPEA (IDs 31-33)
    // ============================================
    {
        id: 31,
        type: 'multiple',
        question: '¿Dónde está la sede de la División Noreuropea?',
        options: ['Londres', 'St. Albans, cerca de Londres', 'Manchester', 'Birmingham'],
        correct: 1,
        explanation: 'La sede está en St. Albans, Inglaterra, cerca de Londres.'
    },
    {
        id: 32,
        type: 'multiple',
        question: '¿Qué colegio tiene en Inglaterra?',
        options: ['Colegio de Londres', 'Colegio de Newbold', 'Colegio de Stanborough', 'Colegio de St. Albans'],
        correct: 1,
        explanation: 'Tiene el Colegio de Newbold.'
    },

    // ============================================
    // SECCIÓN I: DIVISIÓN NORTEAMERICANA (IDs 33-37)
    // ============================================
    {
        id: 33,
        type: 'multiple',
        question: '¿Cuántos miembros tenía la División Norteamericana en 1978?',
        options: ['451,884', '501,884', '551,884', '601,884'],
        correct: 2,
        explanation: 'Tenía 551,884 miembros.'
    },
    {
        id: 34,
        type: 'multiple',
        question: '¿Cuántas iglesias tenía en 1978?',
        options: ['2,850', '3,850', '4,850', '5,850'],
        correct: 1,
        explanation: 'Tenía 3,850 iglesias.'
    },
    {
        id: 35,
        type: 'multiple',
        question: '¿Qué porcentaje de fondos recauda esta división?',
        options: ['50%', '60%', '70%', '80%'],
        correct: 2,
        explanation: 'Recauda el 70 por ciento de los fondos.'
    },

    // ============================================
    // SECCIÓN J: DIVISIÓN SUDAMERICANA (IDs 36-39)
    // ============================================
    {
        id: 36,
        type: 'multiple',
        question: '¿En qué año fue organizada la División Sudamericana?',
        options: ['1914', '1915', '1916', '1917'],
        correct: 2,
        explanation: 'Fue organizada en 1916.'
    },
    {
        id: 37,
        type: 'multiple',
        question: '¿Dónde está actualmente su sede?',
        options: ['Buenos Aires', 'São Paulo', 'Brasilia', 'Santiago'],
        correct: 2,
        explanation: 'Su sede está en Brasilia, Brasil.'
    },
    {
        id: 38,
        type: 'multiple',
        question: '¿Cuántos miembros tenía en 1978?',
        options: ['300,876', '400,876', '500,876', '600,876'],
        correct: 1,
        explanation: 'Tenía 400,876 miembros.'
    },
    {
        id: 39,
        type: 'multiple',
        question: '¿Qué institución educativa destacada tiene en Perú?',
        options: ['Colegio del Plata', 'Colegio del Brasil', 'Escuela del Lago Titicaca', 'Universidad Adventista'],
        correct: 2,
        explanation: 'La Escuela de Adiestramiento del Lago Titicaca.'
    },

    // ============================================
    // SECCIÓN K: DIVISIÓN SUDASIÁTICA (IDs 40-42)
    // ============================================
    {
        id: 40,
        type: 'multiple',
        question: '¿Dónde está la sede de la División Sudasiática?',
        options: ['Nueva Delhi', 'Bombay', 'Poona, India', 'Calcuta'],
        correct: 2,
        explanation: 'Las oficinas están en Poona, India.'
    },
    {
        id: 41,
        type: 'multiple',
        question: '¿Qué colegio tiene en India?',
        options: ['Colegio Andrews', 'Colegio Spicer', 'Colegio White', 'Colegio Poona'],
        correct: 1,
        explanation: 'Se encuentra el Colegio Spicer.'
    },

    // ============================================
    // SECCIÓN L: DIVISIÓN TRANSAFRICANA (IDs 42-44)
    // ============================================
    {
        id: 42,
        type: 'multiple',
        question: '¿Qué colegios tiene la División Transafricana?',
        options: ['Solusi y Heldeberg', 'Avondale y Newbold', 'Spicer y Montemorelos', 'Andrews y Loma Linda'],
        correct: 0,
        explanation: 'Tiene el Colegio de Solusi y el Colegio de Heldeberg.'
    },

    // ============================================
    // SECCIÓN M: CHINA Y RUSIA (IDs 44-45)
    // ============================================
    {
        id: 43,
        type: 'multiple',
        question: '¿Cuántas iglesias había en China según últimos informes?',
        options: ['178', '238', '278', '318'],
        correct: 2,
        explanation: 'Tenía 278 iglesias.'
    },
    {
        id: 44,
        type: 'multiple',
        question: '¿En qué año se organizó la Unión Rusa?',
        options: ['1976', '1977', '1978', '1979'],
        correct: 2,
        explanation: 'Se organizó en 1978.'
    },
    {
        id: 45,
        type: 'fill',
        question: 'La División Interamericana se organizó en __________ con E.E. Andross como presidente.',
        correct: ['1922'],
        explanation: '1922.'
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
        '1916', '1922', '1941', '1946', '1968', '1970', '1971', '1978', '1980',
        'beirut', 'nicosia', 'berna', 'wahroonga', 'singapur', 'st albans', 'brasilia', 'poona',
        'andross', 'bourdeau', 'loughborough', 'calkins',
        '637033', '551884', '400876', '349148', '196870',
        'avondale', 'newbold', 'solusi', 'heldeberg', 'montemorelos', 'cades', 'icolven',
        'signs', 'stanborough', 'review', 'pacific'
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
    if (percentage >= 90) message = '¡Excelente! Conoces bien las divisiones mundiales.';
    else if (percentage >= 70) message = '¡Muy bien! Tienes un buen conocimiento.';
    else if (percentage >= 50) message = 'Bien, pero puedes repasar.';
    else message = 'Sigue estudiando.';
    
    domElements.finalResults.innerHTML = `
        <div class="final-results-content">
            <h2>🎉 ¡CAPÍTULO 13 COMPLETADO! 🎉</h2>
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
    
    const chapterNumber = localStorage.getItem('historiaDenominacional_currentChapter') || '13';
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
        domElements.chapterTitle.textContent = `Capítulo 13: Divisiones Mundiales de la Iglesia`;
    }
    
    updateScoreDisplay();
    loadQuestion();
});

window.backToMenu = backToMenu;
window.submitAnswer = submitAnswer;
window.nextQuestion = nextQuestion;
window.restartChapter = restartChapter;