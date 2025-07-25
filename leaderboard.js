let leaderboard = [];

function addToLeaderboard(playerName, leftAttempts) {
  leaderboard.push({
    player_Name: playerName,
    score: leftAttempts,
    date: new Date().toLocaleDateString(),
    rank: null
  });

  leaderboard.sort((a, b) => b.score - a.score);

  let currentRank = 1;
  let previousScore = null;
  let actualRank = 1;

  for (let i = 0; i < leaderboard.length; i++) {
    if (leaderboard[i].score === previousScore) {
      leaderboard[i].rank = currentRank;
    } else {
      currentRank = actualRank;
      leaderboard[i].rank = currentRank;
    }
    previousScore = leaderboard[i].score;
    actualRank++;
  }
}

function printLeaderboard() {
  console.table(leaderboard.slice(0,3));
}

export { addToLeaderboard, printLeaderboard };
