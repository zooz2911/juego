// ============================================
// PREGUNTAS DEL CAPÍTULO 12 - LOS DEPARTAMENTOS DE LA IGLESIA
// ============================================
const questions = [
    // ============================================
    // SECCIÓN A: INTRODUCCIÓN (IDs 1-4)
    // ============================================
    {
        id: 1,
        type: 'multiple',
        question: '¿Cuál es el objetivo de cada departamento de la iglesia?',
        options: ['Administrar la iglesia', 'Ganar almas para el Señor Jesús', 'Recaudar fondos', 'Organizar eventos'],
        correct: 1,
        explanation: 'El objetivo de cada departamento es ganar almas para el Señor Jesús.'
    },
    {
        id: 2,
        type: 'multiple',
        question: '¿Qué tipo de trabajo realizan los departamentos?',
        options: ['Administrativo', 'Asesor', 'Ejecutivo', 'Directivo'],
        correct: 1,
        explanation: 'El trabajo departamental es de naturaleza asesora, más bien que administrativo.'
    },
    {
        id: 3,
        type: 'multiple',
        question: '¿En qué niveles hay directores departamentales?',
        options: ['Solo a nivel mundial', 'Solo a nivel local', 'En todos los niveles', 'Solo en divisiones'],
        correct: 2,
        explanation: 'Hay directores en iglesia local, asociación/misión, unión, división y Asociación General.'
    },

    // ============================================
    // SECCIÓN B: ACTIVIDADES LAICAS (IDs 4-7)
    // ============================================
    {
        id: 4,
        type: 'multiple',
        question: '¿Qué revista publica el Departamento de Actividades Laicas de la Asociación General?',
        options: ['Ve y Haz', 'The Adventist Layman', 'Tell', 'Renovación'],
        correct: 1,
        explanation: 'Publica trimestralmente "The Adventist Layman".'
    },
    {
        id: 5,
        type: 'multiple',
        question: '¿Qué revista publica el Departamento de Actividades Laicas de la División Interamericana?',
        options: ['The Adventist Layman', 'Ve y Haz', 'Tell', 'Renovación'],
        correct: 1,
        explanation: 'Publica trimestralmente la revista "Ve y Haz".'
    },

    // ============================================
    // SECCIÓN C: COMUNICACIÓN (IDs 6-9)
    // ============================================
    {
        id: 6,
        type: 'multiple',
        question: '¿En qué año se estableció el Departamento de Comunicación?',
        options: ['1970', '1971', '1972', '1973'],
        correct: 2,
        explanation: 'En 1972 la Asociación General estableció el Departamento de Comunicación.'
    },
    {
        id: 7,
        type: 'multiple',
        question: '¿Qué departamentos antiguos fueron incorporados al Departamento de Comunicación?',
        options: ['Jóvenes y Escuela Sabática', 'Relaciones Públicas y Radio y Televisión', 'Salud y Temperancia', 'Publicaciones y Mayordomía'],
        correct: 1,
        explanation: 'Incorporó al Buró de Relaciones Públicas y al Departamento de Radio y Televisión.'
    },
    {
        id: 8,
        type: 'multiple',
        question: '¿Qué revista oficial publica el Departamento de Comunicación?',
        options: ['Tell', 'The Adventist Layman', 'Liberty', 'Listen'],
        correct: 0,
        explanation: 'La revista oficial se llama "Tell".'
    },

    // ============================================
    // SECCIÓN D: EDUCACIÓN (IDs 9-14)
    // ============================================
    {
        id: 9,
        type: 'multiple',
        question: '¿En qué año se empezó la primera escuela adventista en Battle Creek?',
        options: ['1870', '1871', '1872', '1873'],
        correct: 2,
        explanation: 'Los pioneros empezaron una pequeña escuela en 1872 en Battle Creek.'
    },
    {
        id: 10,
        type: 'multiple',
        question: '¿Quién fue el primer maestro de la escuela de Battle Creek?',
        options: ['Jaime White', 'G.H. Bell', 'J.N. Andrews', 'José Bates'],
        correct: 1,
        explanation: 'El primer maestro fue G.H. Bell.'
    },
    {
        id: 11,
        type: 'multiple',
        question: '¿Qué énfasis coloca el sistema de educación adventista?',
        options: ['Solo lo académico', 'Desarrollo cuádruple: físico, mental, cultural y social', 'Solo lo espiritual', 'Solo lo físico'],
        correct: 1,
        explanation: 'Coloca el énfasis en el desarrollo cuádruple del hombre.'
    },
    {
        id: 12,
        type: 'multiple',
        question: '¿Cómo se llama la escuela por correspondencia en inglés?',
        options: ['Home Study Institute', 'Instituto de Estudios en el Hogar', 'Escuela Radio Postal', 'Correspondence School'],
        correct: 0,
        explanation: 'El Home Study Institute (Instituto de Estudios en el Hogar).'
    },
    {
        id: 13,
        type: 'multiple',
        question: '¿Dónde está la base de la escuela por correspondencia en castellano?',
        options: ['México', 'Chile', 'Buenos Aires, Argentina', 'Colombia'],
        correct: 2,
        explanation: 'En Buenos Aires, Argentina.'
    },
    {
        id: 14,
        type: 'multiple',
        question: '¿Qué revista publica el Departamento de Educación de la Asociación General?',
        options: ['Renovación', 'Journal of Adventist Education', 'The Ministry', 'Worker'],
        correct: 1,
        explanation: 'El "Journal of Adventist Education".'
    },

    // ============================================
    // SECCIÓN E: ESCUELA SABÁTICA (IDs 15-19)
    // ============================================
    {
        id: 15,
        type: 'multiple',
        question: '¿Cómo ha sido llamada la Escuela Sabática?',
        options: ['La iglesia en acción', 'La iglesia en estudio', 'La iglesia en oración', 'La iglesia en misiones'],
        correct: 1,
        explanation: 'La escuela sabática ha sido llamada "la iglesia en estudio".'
    },
    {
        id: 16,
        type: 'multiple',
        question: '¿Qué revista oficial publica el Departamento de Escuela Sabática?',
        options: ['Worker', 'El Promotor', 'Renovación', 'The Ministry'],
        correct: 0,
        explanation: 'La revista oficial se llama "Worker".'
    },
    {
        id: 17,
        type: 'multiple',
        question: '¿Qué revista publica la División Interamericana para Escuela Sabática?',
        options: ['Worker', 'El Promotor', 'Renovación', 'Ve y Haz'],
        correct: 1,
        explanation: 'Publica trimestralmente "El Promotor".'
    },

    // ============================================
    // SECCIÓN F: JÓVENES (IDs 18-27)
    // ============================================
    {
        id: 18,
        type: 'multiple',
        question: '¿En qué año fue adoptado el Club de Conquistadores por la Asociación General?',
        options: ['1948', '1949', '1950', '1951'],
        correct: 2,
        explanation: 'El Club de Conquistadores fue adoptado en 1950.'
    },
    {
        id: 19,
        type: 'multiple',
        question: '¿En qué año cambió el nombre a Departamento de Jóvenes Adventistas?',
        options: ['1976', '1977', '1978', '1979'],
        correct: 2,
        explanation: 'Cambió en 1978 de Jóvenes Misioneros Voluntarios a Jóvenes Adventistas.'
    },
    {
        id: 20,
        type: 'multiple',
        question: '¿Qué revista publica la Asociación General para dirigentes de jóvenes?',
        options: ['Perspectiva', 'Youth Ministry Accent', 'Guide', 'Insight'],
        correct: 1,
        explanation: 'Publica "Youth Ministry Accent".'
    },
    {
        id: 21,
        type: 'multiple',
        question: '¿Qué revista publica la División Interamericana para dirigentes de jóvenes?',
        options: ['Youth Ministry Accent', 'Perspectiva', 'El Promotor', 'Ve y Haz'],
        correct: 1,
        explanation: 'Publica "Perspectiva".'
    },
    {
        id: 22,
        type: 'multiple',
        question: '¿Qué programa para jóvenes introdujo el Departamento de Jóvenes en 1978?',
        options: ['Comparte tu fe', 'Festival de la Palabra', 'Voz de la Juventud', 'Misión 72'],
        correct: 1,
        explanation: 'Introdujo el Festival de la Palabra en 1978.'
    },
    {
        id: 23,
        type: 'multiple',
        question: '¿Quién fue el primer director del Departamento de Jóvenes (1907-1930)?',
        options: ['H.T. Elliott', 'M.E. Kern', 'A.W. Peterson', 'E.W. Dunbar'],
        correct: 1,
        explanation: 'M.E. Kern fue director de 1907 a 1930.'
    },
    {
        id: 24,
        type: 'multiple',
        question: '¿Quién fue director de 1955 a 1970?',
        options: ['Theodore Lucas', 'John Hancock', 'Leo Ranzolin', 'E.W. Dunbar'],
        correct: 0,
        explanation: 'Theodore Lucas fue director de 1955 a 1970.'
    },
    {
        id: 25,
        type: 'multiple',
        question: '¿Quién fue director de 1970 a 1980?',
        options: ['Theodore Lucas', 'Leo Ranzolin', 'John Hancock', 'M.E. Kern'],
        correct: 2,
        explanation: 'John Hancock fue director de 1970 a 1980.'
    },
    {
        id: 26,
        type: 'multiple',
        question: '¿Quién fue director desde 1980?',
        options: ['John Hancock', 'Leo Ranzolin', 'Theodore Lucas', 'H.T. Elliott'],
        correct: 1,
        explanation: 'Leo Ranzolin fue director desde 1980.'
    },

    // ============================================
    // SECCIÓN G: LIBERTAD RELIGIOSA (IDs 27-29)
    // ============================================
    {
        id: 27,
        type: 'multiple',
        question: '¿Qué revista publica el Departamento de Libertad Religiosa?',
        options: ['The Ministry', 'Liberty', 'Listen', 'Tell'],
        correct: 1,
        explanation: 'Publica la revista "Liberty".'
    },

    // ============================================
    // SECCIÓN H: RADIO Y TELEVISIÓN (IDs 28-31)
    // ============================================
    {
        id: 28,
        type: 'multiple',
        question: '¿Cómo se llama el programa radial más conocido en América Latina?',
        options: ['La Voz de la Profecía', 'La Voz de la Esperanza', 'It is Written', 'Faith for Today'],
        correct: 1,
        explanation: 'El programa es "La Voz de la Esperanza".'
    },
    {
        id: 29,
        type: 'multiple',
        question: '¿Quién inició "La Voz de la Esperanza" en Cuba?',
        options: ['H.M.S. Richards', 'George Vandeman', 'Braulio Pérez Marcio', 'W.A. Fagal'],
        correct: 2,
        explanation: 'Fue iniciado por el pastor Braulio Pérez Marcio.'
    },

    // ============================================
    // SECCIÓN I: MAYORDOMÍA Y DESARROLLO (IDs 30-32)
    // ============================================
    {
        id: 30,
        type: 'multiple',
        question: '¿En qué año fue organizado el Departamento de Mayordomía y Desarrollo?',
        options: ['1965', '1966', '1967', '1968'],
        correct: 2,
        explanation: 'Fue organizado en 1967.'
    },

    // ============================================
    // SECCIÓN J: MINISTERIAL (IDs 31-34)
    // ============================================
    {
        id: 31,
        type: 'multiple',
        question: '¿Qué revista publica la Asociación Ministerial?',
        options: ['The Ministry', 'El Ministerio Adventista', 'Ambas', 'Ninguna'],
        correct: 2,
        explanation: 'Publica "The Ministry" en inglés y "El Ministerio Adventista" en castellano.'
    },

    // ============================================
    // SECCIÓN K: PUBLICACIONES (IDs 32-35)
    // ============================================
    {
        id: 32,
        type: 'multiple',
        question: '¿En qué año data la obra de publicaciones?',
        options: ['1847', '1848', '1849', '1850'],
        correct: 2,
        explanation: 'La obra de publicaciones data de 1849.'
    },
    {
        id: 33,
        type: 'multiple',
        question: '¿Quién fue el primer colportor?',
        options: ['J.N. Andrews', 'George King', 'Jaime White', 'José Bates'],
        correct: 1,
        explanation: 'El primer colportor fue George King.'
    },
    {
        id: 34,
        type: 'multiple',
        question: '¿En qué año empezó a trabajar el primer colportor?',
        options: ['1876', '1877', '1878', '1879'],
        correct: 2,
        explanation: 'George King empezó a trabajar en 1878.'
    },

    // ============================================
    // SECCIÓN L: PUBLICACIONES E.G. WHITE (IDs 35-39)
    // ============================================
    {
        id: 35,
        type: 'multiple',
        question: '¿Quién sirvió como secretario de Publicaciones E.G. White de 1915 a 1937?',
        options: ['Arthur L. White', 'William C. White', 'Robert Olson', 'Jaime White'],
        correct: 1,
        explanation: 'William C. White, hijo de Elena White.'
    },
    {
        id: 36,
        type: 'multiple',
        question: '¿Quién sirvió como secretario de 1937 a 1978?',
        options: ['William C. White', 'Arthur L. White', 'Robert Olson', 'James White'],
        correct: 1,
        explanation: 'Arthur L. White, nieto de Elena White.'
    },
    {
        id: 37,
        type: 'multiple',
        question: '¿Quién es secretario desde 1978?',
        options: ['Arthur L. White', 'William C. White', 'Robert Olson', 'Neal C. Wilson'],
        correct: 2,
        explanation: 'Robert Olson es secretario desde 1978.'
    },

    // ============================================
    // SECCIÓN M: SALUD (IDs 38-39)
    // ============================================
    {
        id: 38,
        type: 'multiple',
        question: '¿Qué revista de salud se publica en castellano?',
        options: ['Life and Health', 'Viva Mejor', 'Health', 'Listen'],
        correct: 1,
        explanation: 'En castellano tenemos la revista "Viva Mejor".'
    },
    {
        id: 39,
        type: 'multiple',
        question: '¿Qué revista de salud se publica en inglés?',
        options: ['Viva Mejor', 'Life and Health', 'Health Today', 'Listen'],
        correct: 1,
        explanation: 'La revista "Life and Health".'
    },

    // ============================================
    // SECCIÓN N: SERVICIOS FIDUCIARIOS (IDs 40-41)
    // ============================================
    {
        id: 40,
        type: 'multiple',
        question: '¿En qué año se organizó el Departamento de Servicios Fiduciarios?',
        options: ['1966', '1967', '1968', '1969'],
        correct: 2,
        explanation: 'Se organizó en 1968.'
    },

    // ============================================
    // SECCIÓN O: SERVICIO MUNDIAL DE ALIMENTOS (IDs 41-42)
    // ============================================
    {
        id: 41,
        type: 'multiple',
        question: '¿En qué año se organizó el Servicio Mundial de Alimentos?',
        options: ['1966', '1967', '1968', '1969'],
        correct: 2,
        explanation: 'Fue organizado en 1968.'
    },

    // ============================================
    // SECCIÓN P: TEMPERANCIA (IDs 42-44)
    // ============================================
    {
        id: 42,
        type: 'multiple',
        question: '¿Qué revista publica el Departamento de Temperancia?',
        options: ['Liberty', 'Listen', 'Life and Health', 'The Ministry'],
        correct: 1,
        explanation: 'La principal publicación es la revista "Listen".'
    },

    // ============================================
    // SECCIÓN Q: PREGUNTAS DE COMPLETACIÓN (IDs 43-45)
    // ============================================
    {
        id: 43,
        type: 'fill',
        question: 'El Departamento de Comunicación se estableció en __________.',
        correct: ['1972'],
        explanation: '1972.'
    },
    {
        id: 44,
        type: 'fill',
        question: 'El primer maestro de la escuela de Battle Creek fue G.H. __________.',
        correct: ['bell'],
        explanation: 'G.H. Bell.'
    },
    {
        id: 45,
        type: 'fill',
        question: 'El programa radial "La Voz de la Esperanza" fue iniciado por Braulio Pérez __________.',
        correct: ['marcio'],
        explanation: 'Braulio Pérez Marcio.'
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
        '1849', '1872', '1878', '1907', '1950', '1967', '1968', '1972', '1978', '1980',
        'the adventist layman', 've y haz', 'tell', 'worker', 'el promotor', 'perspectiva',
        'youth ministry accent', 'liberty', 'listen', 'the ministry', 'viva mejor', 'life and health',
        'kern', 'lucas', 'hancock', 'ranzolin', 'bell', 'perez marcio',
        'william white', 'arthur white', 'olson'
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
    if (percentage >= 90) message = '¡Excelente! Conoces bien los departamentos de la iglesia.';
    else if (percentage >= 70) message = '¡Muy bien! Tienes un buen conocimiento.';
    else if (percentage >= 50) message = 'Bien, pero puedes repasar.';
    else message = 'Sigue estudiando.';
    
    domElements.finalResults.innerHTML = `
        <div class="final-results-content">
            <h2>🎉 ¡CAPÍTULO 12 COMPLETADO! 🎉</h2>
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
    
    const chapterNumber = localStorage.getItem('historiaDenominacional_currentChapter') || '12';
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
        domElements.chapterTitle.textContent = `Capítulo 12: Los Departamentos de la Iglesia`;
    }
    
    updateScoreDisplay();
    loadQuestion();
});

window.backToMenu = backToMenu;
window.submitAnswer = submitAnswer;
window.nextQuestion = nextQuestion;
window.restartChapter = restartChapter;