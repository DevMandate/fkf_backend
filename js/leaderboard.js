const ADMIN_USERS = ["wafulacaleb233@gmail.com", "lizwambuiartist@gmail.com"];

async function saveResult(name, score) {
  await apiPost({
    action: "saveResult",
    name,
    score
  });
}

async function getLeaderboard() {
  const results = await apiGet({ action: "getResults" });
  return results.sort((a, b) => b.score - a.score);
}

async function displayLeaderboardHTML(userEmail) {
  if (!ADMIN_USERS.includes(userEmail.toLowerCase())) {
    alert("Unauthorized");
    return;
  }

  const tableDiv = document.getElementById("leaderboardTable");
  tableDiv.innerHTML = ""; // clear old data

  showLoader("Loading results...");

  try {
    const leaderboard = await getLeaderboard();

    if (!leaderboard.length) {
      tableDiv.innerHTML = "<p>No results yet.</p>";
      return;
    }

    tableDiv.innerHTML = `
      <table border="1" width="100%" style="border-collapse:collapse;">
        <tr>
          <th>Rank</th>
          <th>Name</th>
          <th>Score</th>
        </tr>
        ${leaderboard.map((r, i) => `
          <tr>
            <td>${i + 1}</td>
            <td>${r.name}</td>
            <td>${r.score}</td>
          </tr>
        `).join("")}
      </table>
    `;
  } catch (error) {
    console.error(error);
    tableDiv.innerHTML = "<p>Failed to load results. Please try again.</p>";
  } finally {
    hideLoader();
  }
}
