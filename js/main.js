// main.js
const ATTEMPTED_USERS_KEY = "attemptedUsers";

let pos = 0, correctCount = 0, answers = [], fullName = "";

// DOM REFERENCES
const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");
const leaderboardScreen = document.getElementById("leaderboard-screen");

const questionBox = document.getElementById("questionBox");
const progressEl = document.getElementById("progress");
const timeLeftEl = document.getElementById("timeLeft");
const questionTimerEl = document.getElementById("questionTimer");

const startBtn = document.getElementById("startBtn");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const submitBtn = document.getElementById("submitBtn");

const downloadCsvBtn2 = document.getElementById("downloadCsvBtn2");
const downloadHtmlBtn2 = document.getElementById("downloadHtmlBtn2");

const finalScore = document.getElementById("finalScore");
const finalMessage = document.getElementById("finalMessage");

const viewLeaderboardBtn = document.getElementById("viewLeaderboardBtn");
const backBtn = document.getElementById("backBtn");
const openLeaderboardBtn = document.getElementById("openLeaderboardBtn");
const startLeaderboardBtn = document.getElementById("startLeaderboardBtn");
const adminEmailInput = document.getElementById("adminEmail");


// ------------------- FUNCTIONS -------------------
async function startQuiz() {
    const nameInput = document.getElementById("fullName").value.trim();
    if (!nameInput) return alert("Enter full name");
  
    showLoader("Checking eligibility...");
  
    try {
      const attempted = await hasUserAttempted(nameInput);
      if (attempted) {
        hideLoader();
        alert("You have already attempted this test.");
        return;
      }
  
      showLoader("Starting test...");
      await addAttemptedUser(nameInput);
  
      fullName = nameInput;
      pos = 0;
      correctCount = 0;
      answers = new Array(questions.length).fill(null);
  
      hide(startScreen);
      show(quizScreen);
      totalTime = 1200;
      startTimer();
      renderQuestion();
  
    } catch (err) {
      alert("Network error. Please try again.");
      console.error(err);
    } finally {
      hideLoader();
    }
  }
  
  


function lockQuestion() {
    saveCurrentAnswer();
    questionBox.querySelectorAll("input").forEach(i => i.disabled = true);
    questionBox.querySelectorAll(".choice").forEach(c => c.classList.add("disabled"));
    prevBtn.style.visibility = "hidden";
    if (pos === questions.length - 1) { submitQuiz(); return; }
    setTimeout(() => { pos++; renderQuestion(); }, 800);
}

function submitQuiz() {
    saveCurrentAnswer();
    finishQuiz();
}

function finishQuiz() {
    clearInterval(timerInterval);
    clearInterval(questionTimerInterval);
    hide(quizScreen);
    show(resultScreen);

    correctCount = answers.filter(a => a?.passed).length;
    finalScore.textContent = `You scored ${correctCount} out of ${questions.length}`;
    finalMessage.textContent = "Test completed!";

    saveResult(fullName, correctCount);
}

// ------------------- UTIL -------------------
function show(el) { el.classList.remove("hidden"); }
function hide(el) { el.classList.add("hidden"); }

// ------------------- EVENTS -------------------
document.addEventListener("DOMContentLoaded", () => {
    startBtn.addEventListener("click", startQuiz);
    nextBtn.addEventListener("click", nextQuestion);
    prevBtn.addEventListener("click", prevQuestion);
    submitBtn.addEventListener("click", submitQuiz);
    downloadCsvBtn2.addEventListener("click", downloadCSV);
    downloadHtmlBtn2.addEventListener("click", downloadHtmlReport);

    // Start screen -> Leaderboard
  startLeaderboardBtn.addEventListener("click", () => {
      hide(startScreen);
      show(leaderboardScreen);
  });

  // Leaderboard "View Leaderboard" button
  viewLeaderboardBtn.addEventListener("click", () => {
      const email = adminEmailInput.value.trim();
      if (!email) { alert("Please enter admin email"); return; }
      displayLeaderboardHTML(email);
  });

  // Back button to return to start screen
  backBtn.addEventListener("click", () => {
      hide(leaderboardScreen);
      show(startScreen);
  });

  // Result screen -> Leaderboard
  openLeaderboardBtn.addEventListener("click", () => {
      hide(resultScreen);
      show(leaderboardScreen);
  });
});