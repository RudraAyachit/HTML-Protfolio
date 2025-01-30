// Example leaderboard data
let leaderboard = [
  {
    name: "Piyush",
    wpm: 122
  },
  {
    name: "Adeeb",
    wpm: 119
  },
  {
    name: "Bharadwaj",
    wpm: 105
  },
  {
    name: "Vinmai",
    wpm: 102
  },
  {
    name: "Ryan",
    wpm: 101
  },
  {
    name: "Sam",
    wpm: 100
  },
  {
    name: "Asad",
    wpm: 96
  },
  {
    name: "Ayaan",
    wpm: 93
  },
  {
    name: "Harsh Manav",
    wpm: 93
  },
  {
    name: "Maneeth",
    wpm: 87
  },
  {
    name: "Mary",
    wpm: 78
  },
  {
    name: "Sathwik",
    wpm: 76
  },
  {
    name: "Dr Michelle",
    wpm: 75
  },
  {
    name: "Chandu",
    wpm: 71
  },
  {
    name: "Akhil",
    wpm: 69
  },
  {
    name: "Prem",
    wpm: 67
  },
  {
    name: "Nandu",
    wpm: 64
  },
  {
    name: "Pavithra",
    wpm: 63
  },
  {
    name: "Sudarshan",
    wpm: 62
  },
  {
    name: "Anish",
    wpm: 62
  },
  {
    name: "Samanyu",
    wpm: 59
  },
  {
    name: "Pepluis Sir",
    wpm: 58
  },
  {
    name: "Kaushik",
    wpm: 57
  },
  {
    name: "Dinesh",
    wpm: 57
  },
  {
    name: "Priya",
    wpm: 57
  },
  {
    name: "Riya Mam",
    wpm: 57
  },
  {
    name: "Gagan",
    wpm: 56
  },
  {
    name: "Hassini",
    wpm: 56
  },
  {
    name: "Geetika",
    wpm: 55
  },
  {
    name: "Sai Ganesha",
    wpm: 55
  },
  {
    name: "Vaishnavi",
    wpm: 54
  },
  {
    name: "Rahul",
    wpm: 54
  },
  {
    name: "Nishnath",
    wpm: 52
  },
  {
    name: "Arjun",
    wpm: 52
  },
  {
    name: "Sumanth",
    wpm: 52
  },
  {
    name: "Suhas",
    wpm: 51
  },
  {
    name: "Diya",
    wpm: 51
  },
  {
    name: "Jahnavi",
    wpm: 50
  },
  {
    name: "Dakshina",
    wpm: 50
  },
  {
    name: "Deepak",
    wpm: 50
  },
  {
    name: "Mohana",
    wpm: 49
  },
  {
    name: "Palvasha",
    wpm: 48
  },
  {
    name: "Hanish",
    wpm: 45
  },
  {
    name: "Leena",
    wpm: 44
  },
  {
    name: "Nirmal",
    wpm: 44
  },
  {
    name: "Anchal",
    wpm: 43
  },
  {
    name: "Manish",
    wpm: 43
  },
  {
    name: "Wilson",
    wpm: 43
  },
  {
    name: "Anchal",
    wpm: 43
  },
  {
    name: "Sumith",
    wpm: 38
  },
  {
    name: "Yashaswini",
    wpm: 38
  },
  {
    name: "Ashar Khan",
    wpm: 37
  },
  {
    name: "Noorla Sheikh",
    wpm: 35
  },
  {
    name: "Kailash",
    wpm: 34
  },
  {
    name: "Navatej",
    wpm: 32
  },
  {
    name: "Praveena",
    wpm: 30
  },
  {
    name: "Vishnu",
    wpm: 29
  },
  {
    name: "Ajith Sir",
    wpm: 29
  },
  {
    name: "Ajith Sir",
    wpm: 29
  },
  {
    name: "Shivamani",
    wpm: 28
  },
  {
    name: "Yashwanth",
    wpm: 28
  },
  {
    name: "Shivamani",
    wpm: 28
  },
  {
    name: "Rounak",
    wpm: 28
  },
  {
    name: "Gagan",
    wpm: 26
  },
  {
    name: "Kesava",
    wpm: 24
  },
  {
    name: "Anirudh",
    wpm: 24
  },
  {
    name: "Anirudh",
    wpm: 24
  },
  {
    name: "Kesava",
    wpm: 24
  },
  {
    name: "Srinivas",
    wpm: 23
  },
  {
    name: "Ramesh",
    wpm: 21
  },
  {
    name: "Meher Gayatri Mam",
    wpm: 12
  }
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
