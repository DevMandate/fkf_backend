// -------------------------------------------------
// CSV DOWNLOAD
// -------------------------------------------------
function generateCsvContent() {
  const rows = [];
  rows.push(["Full Name", fullName]);
  rows.push([]);
  rows.push(["#", "Question", "Selected", "Correct", "Result"]);

  answers.forEach((r, i) => {
    rows.push([
      i + 1,
      r.question.replace(/[\n\r]+/g, " "),
      r.selected || "",
      r.correctAnswer,
      r.passed ? "Passed" : "Failed"
    ]);
  });

  rows.push([]);
  rows.push(["Total Score", `${correctCount}/${questions.length}`]);

  return rows.map(row =>
    row.map(c => `"${String(c).replace(/"/g, '""')}"`).join(",")
  ).join("\r\n");
}

function downloadCSV() {
  const blob = new Blob([generateCsvContent()], { type: "text/csv" });
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = "mtc_referee_test.csv";
  a.click();
}


// -------------------------------------------------
// HTML REPORT
// -------------------------------------------------
function generateHtmlReport() {
  let rows = answers.map((r, i) => `
    <tr>
      <td>${i + 1}</td>
      <td>${r.question}</td>
      <td>${r.selected || "(none)"}</td>
      <td>${r.correctAnswer}</td>
      <td>${r.passed ? "Passed" : "Failed"}</td>
    </tr>
  `).join("");

  return `
  <html>
  <head>
    <style>
      body { font-family: Arial, sans-serif; padding: 20px; }
      table { width: 100%; border-collapse: collapse; margin-top: 20px; }
      th, td { border: 1px solid #555; padding: 8px; }
      th { background: #eee; }
    </style>
  </head>
  <body>
    <h1>MTC Referee Exam Report</h1>
    <p><strong>Full Name:</strong> ${fullName}</p>
    <p><strong>Score:</strong> ${correctCount} / ${questions.length}</p>

    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>Question</th>
          <th>Your Answer</th>
          <th>Correct</th>
          <th>Result</th>
        </tr>
      </thead>
      <tbody>${rows}</tbody>
    </table>
  </body>
  </html>`;
}

function downloadHtmlReport() {
  const blob = new Blob([generateHtmlReport()], { type: "text/html" });
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = "mtc_referee_report.html";
  a.click();
}
