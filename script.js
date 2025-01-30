// Example leaderboard data
let leaderboard = [
  { name: 'Ryan', wpm: 101 },
  { name: 'Vinmai', wpm: 98 },
  { name: 'Asad', wpm: 96 },
  { name: 'Ayaan', wpm: 93 },
];

// Select elements
const tbody = d3.select("tbody");
const nameInput = document.getElementById("name-input");
const wpmInput = document.getElementById("wpm-input");
const addButton = document.getElementById("add-button");

// Function to trigger confetti animation
function triggerConfetti() {
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { x: 0.5, y: 0.5 },
    colors: ['#DC0000', '#FFF500', '#1E41FF'], // F1-inspired colors
    shapes: ['circle', 'square'],
    gravity: 1
  });
}

// Function to render the leaderboard
function renderTable() {
  // Sort leaderboard by WPM (Descending order: highest first)
  leaderboard.sort((a, b) => b.wpm - a.wpm);

  // Clear existing rows
  tbody.selectAll("tr").remove();

  // Bind data and create rows
  const rows = tbody.selectAll("tr")
      .data(leaderboard)
      .enter()
      .append("tr")
      .attr("class", (d, i) => i < 3 ? `top-${i + 1}` : i < 5 ? "top-5" : "");

  // Animate new top-5 entries
  rows.filter((d, i) => i < 5)
      .style("opacity", 0)
      .transition()
      .duration(800)
      .style("opacity", 1);

  // Append position (sorted automatically)
  rows.append("td").html((d, i) => {
      if (i === 0) return "🥇";
      if (i === 1) return "🥈";
      if (i === 2) return "🥉";
      return i + 1;
  }).attr("class", "position");

  // Append name
  rows.append("td").text(d => d.name).attr("class", "driver");

  // Append WPM
  rows.append("td").text(d => d.wpm).attr("class", "wpm");

  // Trigger confetti if the first position changes
  const currentFirstPosition = leaderboard[0];
  if (currentFirstPosition) {
    triggerConfetti(); // Trigger confetti if someone is first
  }
}

// Add user entry to leaderboard
addButton.addEventListener("click", () => {
  const name = nameInput.value.trim();
  const wpm = parseInt(wpmInput.value);

  if (name && !isNaN(wpm) && wpm > 0) {
      leaderboard.push({ name, wpm });  // Add new entry
      renderTable();  // Auto-sort & refresh table
      nameInput.value = "";
      wpmInput.value = "";
  } else {
      alert("Please enter a valid name and WPM!");
  }
});

// Initial render
renderTable();
