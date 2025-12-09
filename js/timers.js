// timers.js

let timerInterval = null;           
let totalTime = 1200;

let questionTimerInterval = null;   
let questionTime = 45;

// GLOBAL TIMER
function startTimer() {
    updateTimeDisplay();

    timerInterval = setInterval(() => {
      totalTime--;
      if (totalTime <= 0) {
        clearInterval(timerInterval);
        submitQuiz();
      } else {
        updateTimeDisplay();
      }
    }, 1000);
}

function updateTimeDisplay() {
    const min = Math.floor(totalTime / 60);
    const sec = totalTime % 60;
    timeLeftEl.textContent = `${min}:${sec.toString().padStart(2,'0')}`;

    const bar = document.getElementById("timeBar");
    const percent = (totalTime / 1200) * 100;

    bar.style.width = percent + "%";
    bar.style.background = percent > 50 ? "#718a02ff" :
                           percent > 20 ? "#ffd700" :
                                          "#ff4f4f";
}

// QUESTION TIMER
function startQuestionTimer() {
    clearInterval(questionTimerInterval);
    questionTime = 45;
    updateQuestionTimerDisplay();

    questionTimerInterval = setInterval(() => {
        questionTime--;
        updateQuestionTimerDisplay();
        if (questionTime <= 0) {
            clearInterval(questionTimerInterval);
            lockQuestion();
        }
    }, 1000);
}

function updateQuestionTimerDisplay() {
    if (questionTimerEl) questionTimerEl.textContent = `Time left: ${questionTime}s`;
}