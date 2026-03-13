// ============================================
// PREGUNTAS DEL CAPÍTULO 11 - LA TERMINACIÓN DE LA COMISIÓN EVANGÉLICA (1960-1980)
// ============================================
const questions = [
    // ============================================
    // SECCIÓN A: PRESIDENTES DE LA ASOCIACIÓN GENERAL (IDs 1-8)
    // ============================================
    {
        id: 1,
        type: 'multiple',
        question: '¿En qué año se jubiló R.R. Figuhr como presidente de la Asociación General?',
        options: ['1965', '1966', '1967', '1968'],
        correct: 1,
        explanation: 'R.R. Figuhr se jubiló en 1966.'
    },
    {
        id: 2,
        type: 'multiple',
        question: '¿Quién sucedió a R.R. Figuhr como presidente de la Asociación General?',
        options: ['Neal C. Wilson', 'R.H. Pierson', 'W.H. Branson', 'W.A. Spicer'],
        correct: 1,
        explanation: 'R.H. Pierson fue su sucesor.'
    },
    {
        id: 3,
        type: 'multiple',
        question: '¿En qué divisiones había trabajado R.H. Pierson?',
        options: ['Europa y África', 'Interamericana, Sudasiática, Transafricana y Norteamericana', 'Australasia y Sudamérica', 'Filipinas y China'],
        correct: 1,
        explanation: 'Trabajó en Interamericana, Sudasiática, Transafricana y Norteamericana.'
    },
    {
        id: 4,
        type: 'multiple',
        question: '¿A qué llamó R.H. Pierson a la iglesia?',
        options: ['A dar más ofrendas', 'Al arrepentimiento, la reforma y el reavivamiento', 'A enviar más misioneros', 'A construir más iglesias'],
        correct: 1,
        explanation: 'Llamó al "arrepentimiento, la reforma y el reavivamiento".'
    },
    {
        id: 5,
        type: 'multiple',
        question: '¿En qué año anunció R.H. Pierson su retiro?',
        options: ['1977', '1978', '1979', '1980'],
        correct: 1,
        explanation: 'En el Concilio Anual de 1978 anunció su retiro.'
    },
    {
        id: 6,
        type: 'multiple',
        question: '¿Quién fue elegido presidente en 1978?',
        options: ['R.H. Pierson', 'Neal C. Wilson', 'R.R. Figuhr', 'W.H. Branson'],
        correct: 1,
        explanation: 'Neal C. Wilson fue elegido presidente.'
    },
    {
        id: 7,
        type: 'multiple',
        question: '¿En qué fecha asumió Neal C. Wilson la presidencia?',
        options: ['1 de enero de 1979', '3 de enero de 1979', '1 de enero de 1980', '3 de enero de 1980'],
        correct: 1,
        explanation: 'Se hizo cargo el 3 de enero de 1979.'
    },
    {
        id: 8,
        type: 'multiple',
        question: '¿En qué divisiones había trabajado Neal C. Wilson?',
        options: ['Europa y África', 'Sudasiática, Medioriental y Norteamericana', 'Australasia y Sudamérica', 'Filipinas y China'],
        correct: 1,
        explanation: 'Trabajó en Sudasiática, Medioriental y Norteamericana.'
    },

    // ============================================
    // SECCIÓN B: PROGRAMAS Y EVENTOS (IDs 9-15)
    // ============================================
    {
        id: 9,
        type: 'multiple',
        question: '¿En qué año se adoptó oficialmente el Plan de Cinco Días para Dejar de Fumar?',
        options: ['1960', '1961', '1962', '1963'],
        correct: 2,
        explanation: 'Fue adoptado oficialmente por la Asociación General en 1962.'
    },
    {
        id: 10,
        type: 'multiple',
        question: '¿En qué año se introdujo el programa "Comparte tu fe"?',
        options: ['En la década de 1940', 'En la década de 1950', 'En la década de 1960', 'En la década de 1970'],
        correct: 1,
        explanation: 'El Departamento de Jóvenes introdujo el programa en la década de los 50.'
    },
    {
        id: 11,
        type: 'multiple',
        question: '¿Qué programa de jóvenes se sigue llevando a cabo en muchas divisiones?',
        options: ['Comparte tu fe', 'La Voz de la Juventud', 'Misión 72', 'Conquistadores'],
        correct: 1,
        explanation: 'Los esfuerzos de la Voz de la Juventud todavía se siguen llevando a cabo.'
    },
    {
        id: 12,
        type: 'multiple',
        question: '¿Qué ofrenda se recibe una vez al año para emergencias?',
        options: ['Ofrenda de misiones', 'Ofrenda Pro Desastres', 'Ofrenda de escuela sabática', 'Ofrenda de diezmos'],
        correct: 1,
        explanation: 'La ofrenda Pro Desastres para tiempos de emergencia nacional.'
    },

    // ============================================
    // SECCIÓN C: CONGRESOS Y CONCILIOS (IDs 13-20)
    // ============================================
    {
        id: 13,
        type: 'multiple',
        question: '¿Dónde se celebró el quincuagésimo primer congreso (51) de la Asociación General?',
        options: ['Viena, Austria', 'Dallas, Texas', 'Atlantic City, New Jersey', 'Ciudad de México'],
        correct: 2,
        explanation: 'Se celebró en Atlantic City, New Jersey, en junio de 1970.'
    },
    {
        id: 14,
        type: 'multiple',
        question: '¿En qué año se celebró el congreso en Atlantic City?',
        options: ['1968', '1969', '1970', '1971'],
        correct: 2,
        explanation: 'En junio de 1970.'
    },
    {
        id: 15,
        type: 'multiple',
        question: '¿Qué programa evangelizador comenzó después de ese congreso?',
        options: ['Misión 72', 'Voz de la Juventud', 'Comparte tu fe', 'Cinco Días para Dejar de Fumar'],
        correct: 0,
        explanation: 'Dio lugar al comienzo de Misión 72.'
    },
    {
        id: 16,
        type: 'multiple',
        question: '¿En qué año se cambió el nombre de "Concilio Otoñal" a "Concilio Anual"?',
        options: ['1971', '1972', '1973', '1974'],
        correct: 1,
        explanation: 'En octubre de 1972 en Ciudad de México.'
    },
    {
        id: 17,
        type: 'multiple',
        question: '¿Dónde se celebró el primer congreso de la Asociación General fuera de Estados Unidos?',
        options: ['Londres', 'Viena, Austria', 'París', 'Roma'],
        correct: 1,
        explanation: 'En Viena, Austria, en 1975.'
    },
    {
        id: 18,
        type: 'multiple',
        question: '¿En qué año fue el congreso de Viena?',
        options: ['1974', '1975', '1976', '1977'],
        correct: 1,
        explanation: '1975.'
    },
    {
        id: 19,
        type: 'multiple',
        question: '¿Dónde se celebró el Congreso de la Asociación General de 1980?',
        options: ['Nueva York', 'Chicago', 'Dallas, Texas', 'Los Ángeles'],
        correct: 2,
        explanation: 'En Dallas, Texas, en abril de 1980.'
    },
    {
        id: 20,
        type: 'multiple',
        question: '¿Qué meta de bautismos se fijó para el período 1975-1980?',
        options: ['500 personas por día', '800 personas por día', '1,000 personas por día', '1,500 personas por día'],
        correct: 2,
        explanation: 'Se fijó un blanco de bautizar a 1,000 personas cada día.'
    },

    // ============================================
    // SECCIÓN D: ANIVERSARIOS IMPORTANTES (IDs 21-30)
    // ============================================
    {
        id: 21,
        type: 'multiple',
        question: '¿Qué aniversario se celebró en 1960?',
        options: ['Centenario de la organización', 'Centenario del nombre Adventistas del Séptimo Día', 'Centenario del primer sanatorio', 'Centenario del primer campestre'],
        correct: 1,
        explanation: 'Centenario de la adopción del nombre Adventistas del Séptimo Día (1860-1960).'
    },
    {
        id: 22,
        type: 'multiple',
        question: '¿Qué aniversario se celebró en 1963?',
        options: ['Centenario del nombre', 'Centenario de la organización de la denominación', 'Centenario del primer sanatorio', 'Centenario del primer campestre'],
        correct: 1,
        explanation: 'Centenario de la organización de la denominación (Asociación General) en 1863.'
    },
    {
        id: 23,
        type: 'multiple',
        question: '¿Qué aniversario se celebró en 1966?',
        options: ['Centenario de la educación', 'Centenario del primer sanatorio', 'Centenario del primer campestre', 'Centenario de la primera sociedad de jóvenes'],
        correct: 1,
        explanation: 'Centenario del establecimiento del primer sanatorio (hospital) en 1866.'
    },
    {
        id: 24,
        type: 'multiple',
        question: '¿Qué aniversario se celebró en 1968?',
        options: ['Centenario del nombre', 'Centenario de la organización', 'Centenario del primer campestre', 'Centenario de la educación'],
        correct: 2,
        explanation: 'Centenario del primer campestre en 1868.'
    },
    {
        id: 25,
        type: 'multiple',
        question: '¿Qué aniversario se celebró en 1972?',
        options: ['Centenario de la educación adventista', 'Centenario del primer misionero', 'Centenario de Signs of the Times', 'Centenario de la Universidad Andrews'],
        correct: 0,
        explanation: 'Centenario de la organización de la educación adventista.'
    },
    {
        id: 26,
        type: 'multiple',
        question: '¿Qué aniversarios se celebraron en 1974?',
        options: ['125 aniversario de publicaciones', 'Centenario del primer misionero', 'Centenario de Signs of the Times', 'Todos los anteriores'],
        correct: 3,
        explanation: '125 aniversario de publicaciones, centenario del primer misionero, centenario de Signs of the Times y centenario de la Universidad Andrews.'
    },
    {
        id: 27,
        type: 'multiple',
        question: '¿Qué aniversario se celebró en 1975?',
        options: ['25 aniversario de los Conquistadores', '50 aniversario de los campamentos', 'Centenario de la primera sociedad de jóvenes', 'Centenario del nombre'],
        correct: 0,
        explanation: '25 aniversario de los Conquistadores.'
    },
    {
        id: 28,
        type: 'multiple',
        question: '¿Qué aniversario se celebró en 1976?',
        options: ['25 aniversario de los Conquistadores', '50 aniversario de los campamentos adventistas', 'Centenario de la primera sociedad de jóvenes', 'Centenario del primer campestre'],
        correct: 1,
        explanation: '50 aniversario de los campamentos adventistas.'
    },
    {
        id: 29,
        type: 'multiple',
        question: '¿Qué aniversario se celebró en 1979?',
        options: ['Centenario del nombre', 'Centenario de la organización', 'Centenario de la primera sociedad de jóvenes', 'Centenario de la educación'],
        correct: 2,
        explanation: 'Centenario de la primera sociedad de jóvenes en Hazelton, Michigan (1879).'
    },

    // ============================================
    // SECCIÓN E: DATOS Y CIFRAS (IDs 30-40)
    // ============================================
    {
        id: 30,
        type: 'multiple',
        question: '¿Cuántas iglesias había a fines de 1978?',
        options: ['15,466', '18,466', '20,466', '22,466'],
        correct: 2,
        explanation: 'Teníamos 20,466 iglesias en todo el mundo.'
    },
    {
        id: 31,
        type: 'multiple',
        question: '¿En qué año la feligresía mundial sobrepasó los tres millones?',
        options: ['1976', '1977', '1978', '1979'],
        correct: 2,
        explanation: 'A principios de 1978, sobrepasó los tres millones.'
    },
    {
        id: 32,
        type: 'multiple',
        question: '¿En cuántos países trabajaba la iglesia en 1978?',
        options: ['150', '170', '190', '210'],
        correct: 2,
        explanation: 'En 190 países del mundo.'
    },
    {
        id: 33,
        type: 'multiple',
        question: '¿En cuántos idiomas trabajaba la iglesia en 1978?',
        options: ['390', '490', '590', '690'],
        correct: 2,
        explanation: 'En 590 idiomas.'
    },
    {
        id: 34,
        type: 'multiple',
        question: '¿Cuántos miembros bautizados había en 1980?',
        options: ['2,383,055', '3,383,055', '4,383,055', '5,383,055'],
        correct: 1,
        explanation: '3,383,055 miembros bautizados.'
    },
    {
        id: 35,
        type: 'multiple',
        question: '¿Cuántas iglesias organizadas había en 1980?',
        options: ['19,327', '20,327', '21,327', '22,327'],
        correct: 2,
        explanation: '21,327 iglesias organizadas.'
    },
    {
        id: 36,
        type: 'multiple',
        question: '¿Cuántos miembros de escuela sabática había en 1980?',
        options: ['2,987,040', '3,987,040', '4,987,040', '5,987,040'],
        correct: 1,
        explanation: '3,987,040 miembros de escuela sabática.'
    },
    {
        id: 37,
        type: 'multiple',
        question: '¿Cuántos pastores ordenados en activo había en 1980?',
        options: ['7,144', '8,144', '9,144', '10,144'],
        correct: 2,
        explanation: '9,144 pastores ordenados.'
    },
    {
        id: 38,
        type: 'multiple',
        question: '¿Cuántas casas publicadoras tenía la iglesia?',
        options: ['41', '46', '51', '56'],
        correct: 2,
        explanation: '51 casas publicadoras.'
    },
    {
        id: 39,
        type: 'multiple',
        question: '¿Cuántos sanatorios y hospitales tenía la iglesia?',
        options: ['126', '136', '146', '156'],
        correct: 2,
        explanation: '146 sanatorios y hospitales.'
    },
    {
        id: 40,
        type: 'multiple',
        question: '¿Cuántos dispensarios y clínicas había?',
        options: ['247', '257', '267', '277'],
        correct: 2,
        explanation: '267 dispensarios y clínicas.'
    },

    // ============================================
    // SECCIÓN F: PREGUNTAS DE COMPLETACIÓN (IDs 41-45)
    // ============================================
    {
        id: 41,
        type: 'fill',
        question: 'R.R. Figuhr se jubiló en __________ y fue sucedido por R.H. Pierson.',
        correct: ['1966'],
        explanation: '1966.'
    },
    {
        id: 42,
        type: 'fill',
        question: 'Neal C. Wilson asumió la presidencia el 3 de enero de __________.',
        correct: ['1979'],
        explanation: '1979.'
    },
    {
        id: 43,
        type: 'fill',
        question: 'El primer congreso fuera de EE.UU. fue en Viena, Austria, en __________.',
        correct: ['1975'],
        explanation: '1975.'
    },
    {
        id: 44,
        type: 'fill',
        question: 'El centenario del nombre "Adventistas del Séptimo Día" se celebró en __________.',
        correct: ['1960'],
        explanation: '1960.'
    },
    {
        id: 45,
        type: 'fill',
        question: 'En 1980 había 3,383,055 miembros bautizados y 21,327 __________ organizadas.',
        correct: ['iglesias'],
        explanation: 'Iglesias.'
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
        '1960', '1961', '1962', '1963', '1964', '1965', '1966', '1967', '1968', '1969',
        '1970', '1971', '1972', '1973', '1974', '1975', '1976', '1977', '1978', '1979',
        '1980',
        'pierson', 'wilson', 'figuhr',
        'viena', 'dallas', 'atlantic city', 'méxico',
        '1000', '20466', '190', '590', '3383055', '21327', '3987040', '9144', '51', '146', '267'
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
    if (percentage >= 90) message = '¡Excelente! Conoces bien la terminación de la comisión evangélica.';
    else if (percentage >= 70) message = '¡Muy bien! Tienes un buen conocimiento.';
    else if (percentage >= 50) message = 'Bien, pero puedes repasar.';
    else message = 'Sigue estudiando.';
    
    domElements.finalResults.innerHTML = `
        <div class="final-results-content">
            <h2>🎉 ¡CAPÍTULO 11 COMPLETADO! 🎉</h2>
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
    
    const chapterNumber = localStorage.getItem('historiaDenominacional_currentChapter') || '11';
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
        domElements.chapterTitle.textContent = `Capítulo 11: La Terminación de la Comisión Evangélica (1960-1980)`;
    }
    
    updateScoreDisplay();
    loadQuestion();
});

window.backToMenu = backToMenu;
window.submitAnswer = submitAnswer;
window.nextQuestion = nextQuestion;
window.restartChapter = restartChapter;