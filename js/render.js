// render.js

function renderQuestion() {
    clearInterval(questionTimerInterval);
    const q = questions[pos];
    const correct = q[5];

    progressEl.textContent = `Question ${pos + 1} of ${questions.length}`;
    let html = `<h3>${q[0]}</h3>`;

    if (correct === "TEXT") {
        const savedText = answers[pos]?.text || "";
        html += `<textarea id="textAnswer" style="width:100%; height:160px; font-size:15px; padding:10px;" placeholder="Enter all 8 laws in order...">${savedText}</textarea>`;
        questionBox.innerHTML = html;

        if (answers[pos]?.locked) {
            questionBox.querySelectorAll("input").forEach(i => i.disabled = true);
            questionBox.querySelectorAll(".choice").forEach(c => c.classList.add("disabled"));
        }

        updateNavButtons();
        startQuestionTimer();
        return;
    }

    // MULTIPLE CHOICE
    html += `<div class="choices">`;
    const labels = ["A","B","C","D"];
    const saved = answers[pos]?.selected;

    for (let i=1;i<=4;i++){
        const letter = labels[i-1];
        html += `<label class="choice ${saved===letter?"selected":""}">
                  <input type="radio" name="choices" value="${letter}" ${saved===letter?"checked":""}>
                  <span>${letter}. ${q[i]}</span>
                 </label>`;
    }
    html += `</div>`;
    questionBox.innerHTML = html;

    questionBox.querySelectorAll(".choice").forEach(c => {
        c.addEventListener("click", ()=>{
            questionBox.querySelectorAll(".choice").forEach(x => x.classList.remove("selected"));
            c.classList.add("selected");
            c.querySelector("input").checked = true;
            questionBox.querySelectorAll("input").forEach(i => i.disabled = true);
            questionBox.querySelectorAll(".choice").forEach(x => x.classList.add("disabled"));
            saveCurrentAnswer();
            prevBtn.style.visibility = "hidden";
        });
    });

    updateNavButtons();
    startQuestionTimer();
}

function saveCurrentAnswer() {
    const q = questions[pos];
    const correct = q[5];

    if (correct === "TEXT") {
        const txt = document.getElementById("textAnswer")?.value || "";
        answers[pos] = {question:q[0], text: txt, selected: txt, correctAnswer:"TEXT", passed: txt.trim().length>0};
        return;
    }

    const radios = document.getElementsByName("choices");
    let selected = null;
    for (const r of radios) if(r.checked) selected=r.value;

    answers[pos] = {question:q[0], selected, correctAnswer: correct, passed: selected===correct};
}

function nextQuestion(){
    saveCurrentAnswer();
    answers[pos] = answers[pos] || {};
    answers[pos].locked = true;

    if(pos<questions.length-1){
        pos++;
        renderQuestion();
        prevBtn.style.visibility="hidden";
    }
}

function prevQuestion(){
    saveCurrentAnswer();
    if(pos>0){
        pos--;
        renderQuestion();
    }
}

function updateNavButtons(){
    prevBtn.style.visibility = pos===0 ? "hidden":"visible";
    nextBtn.style.visibility = pos===questions.length-1 ? "hidden":"visible";
    submitBtn.style.display = pos===questions.length-1 ? "inline-block":"none";
}