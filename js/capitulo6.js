// ============================================
// PREGUNTAS DEL CAPÍTULO 6 - VISIÓN MUNDIAL (1874-1878)
// ============================================
const questions = [
    // ============================================
    // SECCIÓN A: PRIMEROS MISIONEROS AL EXTRANJERO (IDs 1-15)
    // ============================================
    {
        id: 1,
        type: 'multiple',
        question: '¿Desde qué país llegaban llamados macedónicos a la Asociación General?',
        options: ['Francia', 'Suiza', 'Inglaterra', 'Alemania'],
        correct: 1,
        explanation: 'Llegaban llamados desde Suiza pidiendo luz acerca del sábado.'
    },
    {
        id: 2,
        type: 'multiple',
        question: '¿En qué Congreso de la Asociación General se nombró al primer misionero oficial al extranjero?',
        options: ['1872', '1874', '1876', '1878'],
        correct: 1,
        explanation: 'En el Congreso de la Asociación General de 1874.'
    },
    {
        id: 3,
        type: 'multiple',
        question: '¿Quién fue el primer misionero oficial de la iglesia al extranjero?',
        options: ['J.N. Loughborough', 'J.N. Andrews', 'John G. Matteson', 'D.T. Bourdeau'],
        correct: 1,
        explanation: 'Juan Nevins Andrews fue el primer misionero oficial.'
    },
    {
        id: 4,
        type: 'multiple',
        question: '¿A qué país fue enviado J.N. Andrews como primer misionero oficial?',
        options: ['Francia', 'Inglaterra', 'Suiza', 'Alemania'],
        correct: 2,
        explanation: 'Fue enviado a Suiza.'
    },
    {
        id: 5,
        type: 'multiple',
        question: '¿Qué edad tenía Charles, el hijo de J.N. Andrews, cuando viajó con él?',
        options: ['13 años', '15 años', '17 años', '19 años'],
        correct: 2,
        explanation: 'Su hijo Charles tenía 17 años.'
    },
    {
        id: 6,
        type: 'multiple',
        question: '¿Qué edad tenía Mary, la hija de J.N. Andrews, cuando viajó con él?',
        options: ['11 años', '13 años', '15 años', '17 años'],
        correct: 1,
        explanation: 'Su hija Mary tenía 13 años.'
    },
    {
        id: 7,
        type: 'multiple',
        question: '¿En qué año murió la esposa de J.N. Andrews?',
        options: ['1870', '1871', '1872', '1873'],
        correct: 2,
        explanation: 'Su esposa había muerto en 1872.'
    },
    {
        id: 8,
        type: 'multiple',
        question: '¿Quién era M.B. Czechowski?',
        options: ['Un pastor luterano', 'Un sacerdote católico convertido', 'Un misionero bautista', 'Un laico adventista'],
        correct: 1,
        explanation: 'Era un sacerdote católico convertido que regresó a Europa.'
    },
    {
        id: 9,
        type: 'multiple',
        question: '¿Qué había hecho M.B. Czechowski antes de la llegada de Andrews?',
        options: ['Traducir la Biblia', 'Convencer a varios de la verdad del sábado', 'Abrir una iglesia', 'Escribir libros'],
        correct: 1,
        explanation: 'Había convencido a varios de la verdad del sábado, aunque sin patrocinio de la iglesia.'
    },
    {
        id: 10,
        type: 'multiple',
        question: '¿Qué se organizó tan pronto llegó Andrews a Suiza?',
        options: ['La primera iglesia', 'La Misión Europea', 'Una casa publicadora', 'Una escuela'],
        correct: 1,
        explanation: 'Se organizó la Misión Europea.'
    },
    {
        id: 11,
        type: 'multiple',
        question: '¿A qué país fue Andrews después de Suiza?',
        options: ['Francia', 'Italia', 'Prusia', 'Inglaterra'],
        correct: 2,
        explanation: 'El pastor Andrews fue a Prusia.'
    },
    {
        id: 12,
        type: 'multiple',
        question: '¿Con cuántos observadores del sábado se puso en contacto en Prusia?',
        options: ['23', '36', '46', '56'],
        correct: 2,
        explanation: 'Se puso en contacto con 46 observadores del sábado.'
    },
    {
        id: 13,
        type: 'fill',
        question: 'Los llamados macedónicos llegaban desde __________ pidiendo luz sobre el sábado.',
        correct: ['suiza'],
        explanation: 'Suiza.'
    },
    {
        id: 14,
        type: 'fill',
        question: 'El primer misionero oficial fue J.N. __________ en 1874.',
        correct: ['andrews'],
        explanation: 'J.N. Andrews.'
    },
    {
        id: 15,
        type: 'fill',
        question: 'Andrews viajó con sus hijos Charles (17) y Mary (__________).',
        correct: ['13'],
        explanation: 'Mary tenía 13 años.'
    },

    // ============================================
    // SECCIÓN B: LA OBRA DE PUBLICACIONES EN SUIZA (IDs 16-20)
    // ============================================
    {
        id: 16,
        type: 'multiple',
        question: '¿En qué año se estableció una casa publicadora en Basilea?',
        options: ['1874', '1875', '1876', '1877'],
        correct: 2,
        explanation: 'En 1876 se estableció una casa publicadora en Basilea.'
    },
    {
        id: 17,
        type: 'multiple',
        question: '¿En qué ciudad suiza se estableció la primera casa publicadora europea?',
        options: ['Ginebra', 'Berna', 'Basilea', 'Zúrich'],
        correct: 2,
        explanation: 'En Basilea.'
    },
    {
        id: 18,
        type: 'multiple',
        question: '¿Cómo se llamó la primera revista adventista europea?',
        options: ['Review and Herald', 'Signs of the Times', 'The Present Truth', 'The Advent Review'],
        correct: 1,
        explanation: 'Signs of the Times.'
    },
    {
        id: 19,
        type: 'multiple',
        question: '¿En qué idioma se publicó la primera revista adventista europea?',
        options: ['Alemán', 'Francés', 'Italiano', 'Inglés'],
        correct: 1,
        explanation: 'Se publicó en francés.'
    },
    {
        id: 20,
        type: 'fill',
        question: 'La casa publicadora en Basilea se estableció en __________.',
        correct: ['1876'],
        explanation: '1876.'
    },

    // ============================================
    // SECCIÓN C: SE ESPARCE LA OBRA EN EUROPA (IDs 21-30)
    // ============================================
    {
        id: 21,
        type: 'multiple',
        question: '¿Quién llevó el mensaje a Escandinavia en 1877?',
        options: ['J.N. Andrews', 'D.T. Bourdeau', 'John G. Matteson', 'A.C. Bourdeau'],
        correct: 2,
        explanation: 'John G. Matteson llevó el mensaje a Escandinavia en 1877.'
    },
    {
        id: 22,
        type: 'multiple',
        question: '¿En qué año se abrió una casa publicadora en Escandinavia?',
        options: ['1877', '1878', '1879', '1880'],
        correct: 2,
        explanation: 'Dos años más tarde, en 1879, se abrió una casa publicadora.'
    },
    {
        id: 23,
        type: 'multiple',
        question: '¿Quién fue asignado para confirmar la obra en Francia?',
        options: ['J.N. Andrews', 'D.T. Bourdeau', 'A.C. Bourdeau', 'John G. Matteson'],
        correct: 1,
        explanation: 'D.T. Bourdeau fue asignado a Francia.'
    },
    {
        id: 24,
        type: 'multiple',
        question: '¿Qué hermano de D.T. Bourdeau trabajó en Italia, Alemania, Francia, Suiza y Rumania?',
        options: ['J.N. Andrews', 'A.C. Bourdeau', 'John G. Matteson', 'Philipp Reiswig'],
        correct: 1,
        explanation: 'A.C. Bourdeau trabajó en múltiples países europeos.'
    },
    {
        id: 25,
        type: 'multiple',
        question: '¿Quién fue el primero en llevar la verdad a Rusia?',
        options: ['J.N. Andrews', 'A.C. Bourdeau', 'Philipp Reiswig', 'John G. Matteson'],
        correct: 2,
        explanation: 'Philipp Reiswig fue el primero que llevó la verdad a Rusia.'
    },
    {
        id: 26,
        type: 'multiple',
        question: '¿Qué característica física tenía Philipp Reiswig?',
        options: ['Era ciego', 'Era sordo', 'Era tartamudo', 'Era cojo'],
        correct: 2,
        explanation: 'Era tartamudo.'
    },
    {
        id: 27,
        type: 'multiple',
        question: '¿Qué nivel de cultura tenía Philipp Reiswig?',
        options: ['Alta cultura', 'Cultura media', 'No tenía mucha cultura', 'Era académico'],
        correct: 2,
        explanation: 'No tenía mucha cultura, pero Dios hizo de él un obrero excelente.'
    },
    {
        id: 28,
        type: 'fill',
        question: 'John G. __________ llevó el mensaje a Escandinavia en 1877.',
        correct: ['matteson'],
        explanation: 'John G. Matteson.'
    },
    {
        id: 29,
        type: 'fill',
        question: 'A.C. Bourdeau trabajó en Italia, Alemania, Francia, Suiza y __________.',
        correct: ['rumania'],
        explanation: 'Rumania.'
    },
    {
        id: 30,
        type: 'fill',
        question: 'Philipp __________ fue el primero en llevar la verdad a Rusia.',
        correct: ['reiswig'],
        explanation: 'Philipp Reiswig.'
    },

    // ============================================
    // SECCIÓN D: SE ESTABLECE LA OBRA EN INGLATERRA (IDs 31-40)
    // ============================================
    {
        id: 31,
        type: 'multiple',
        question: '¿Quién fue el primero en llevar el mensaje a Inglaterra en 1878?',
        options: ['J.N. Andrews', 'William Ings', 'J.N. Loughborough', 'John G. Matteson'],
        correct: 1,
        explanation: 'William Ings fue a Inglaterra en 1878.'
    },
    {
        id: 32,
        type: 'multiple',
        question: '¿En cuántas semanas tenía William Ings a diez personas guardando el sábado?',
        options: ['8 semanas', '12 semanas', '16 semanas', '20 semanas'],
        correct: 2,
        explanation: 'En 16 semanas tenía a diez personas guardando el sábado.'
    },
    {
        id: 33,
        type: 'multiple',
        question: '¿Qué pastor llegó más tarde a Inglaterra para hacerse cargo de la obra?',
        options: ['J.N. Andrews', 'J.N. Loughborough', 'D.T. Bourdeau', 'A.C. Bourdeau'],
        correct: 1,
        explanation: 'El pastor Loughborough llegó más tarde y se hizo cargo del trabajo.'
    },
    {
        id: 34,
        type: 'multiple',
        question: '¿Qué casa publicadora se estableció en Inglaterra?',
        options: ['Stanborough', 'Bristol', 'Londres', 'Manchester'],
        correct: 0,
        explanation: 'Se estableció la casa publicadora de Stanborough.'
    },
    {
        id: 35,
        type: 'multiple',
        question: '¿Qué colegio se estableció en Inglaterra?',
        options: ['Stanborough College', 'Newbold College', 'London College', 'Oxford College'],
        correct: 1,
        explanation: 'El Colegio de Newbold.'
    },
    {
        id: 36,
        type: 'multiple',
        question: '¿En qué se convirtió Gran Bretaña para la obra misionera?',
        options: ['En destino final', 'En sede de misioneros', 'En centro de publicaciones', 'En escuela principal'],
        correct: 1,
        explanation: 'Gran Bretaña llegó a ser sede de misioneros, enviando misioneros a otras tierras.'
    },
    {
        id: 37,
        type: 'fill',
        question: 'William __________ fue el primero en llevar el mensaje a Inglaterra en 1878.',
        correct: ['ings'],
        explanation: 'William Ings.'
    },
    {
        id: 38,
        type: 'fill',
        question: 'En 16 semanas, Ings tenía a __________ personas guardando el sábado.',
        correct: ['10'],
        explanation: 'Diez personas.'
    },
    {
        id: 39,
        type: 'fill',
        question: 'El pastor J.N. Loughborough se hizo cargo de la obra en Inglaterra en __________.',
        correct: ['1878'],
        explanation: '1878.'
    },
    {
        id: 40,
        type: 'fill',
        question: 'El Colegio de Newbold se estableció en __________.',
        correct: ['inglaterra'],
        explanation: 'Inglaterra.'
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
        '1872', '1873', '1874', '1875', '1876', '1877', '1878', '1879', '1880',
        'suiza', 'francia', 'inglaterra', 'alemania', 'prusia', 'rusia', 'rumania', 'escandinavia',
        'basilea', 'stanborough', 'newbold',
        'andrews', 'loughborough', 'bourdeau', 'matteson', 'ings', 'reiswig', 'czechowski',
        '13', '17', '46', '10', '16'
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
    if (percentage >= 90) message = '¡Excelente! Conoces bien la expansión mundial de la iglesia.';
    else if (percentage >= 70) message = '¡Muy bien! Tienes un buen conocimiento.';
    else if (percentage >= 50) message = 'Bien, pero puedes repasar algunos conceptos.';
    else message = 'Sigue estudiando, la historia de la iglesia es fascinante.';
    
    domElements.finalResults.innerHTML = `
        <div class="final-results-content">
            <h2>🎉 ¡CAPÍTULO 6 COMPLETADO! 🎉</h2>
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
    
    const chapterNumber = localStorage.getItem('historiaDenominacional_currentChapter') || '6';
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
        domElements.chapterTitle.textContent = `Capítulo 6: Visión Mundial (1874-1878)`;
    }
    
    updateScoreDisplay();
    loadQuestion();
});

window.backToMenu = backToMenu;
window.submitAnswer = submitAnswer;
window.nextQuestion = nextQuestion;
window.restartChapter = restartChapter;