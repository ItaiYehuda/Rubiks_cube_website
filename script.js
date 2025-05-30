function showPuzzle(puzzle) {
  if (puzzle === '3x3') {
    document.getElementById('three-by-three').style.display = 'block';
  }
}

function showDevMessage() {
  alert('Still in development :)');
}

function showCFOP() {
  document.getElementById('cfop-section').style.display = 'block';
}

function showPLL() {
  const pllSection = document.getElementById('pll-section');
  if (pllSection.innerHTML !== '') return; // Prevent duplicates

  const pllAlgs = {
    "H perm": ["M2", "U", "M2", "U2", "M2", "U", "M2"],
    "Z perm": ["M2", "U", "M2", "U", "M'", "U2", "M2", "U2", "M'", "U2"],
    "Ua perm": ["R", "U'", "R", "U", "R", "U", "R", "U'", "R'", "U'", "R2"],
    "Ub perm": ["R2", "U", "R", "U", "R'", "U'", "R'", "U'", "R'", "U", "R'"],
    "Aa perm": ["x", "R'", "D'", "R", "U2", "R'", "D", "R", "U2", "R2"],
    "Ab perm": ["x'", "R", "D", "R'", "U2", "R", "D'", "R'", "U2", "R2"],
    "F perm": ["R'", "U'", "F'", "R", "U", "R'", "U'", "R", "F", "R2", "U'", "R'", "U'"],
    "Ja perm": ["L'", "U'", "L", "F", "L'", "U'", "L", "U", "L", "F'", "L2", "U", "L", "U"],
    "Jb perm": ["R", "U", "R'", "F'", "R", "U", "R'", "U'", "R'", "F", "R2", "U'", "R'", "U'"],
    "Ra perm": ["R", "U'", "R'", "U'", "R", "U", "R", "D", "R'", "U'", "R", "D'", "R'", "U2", "R'"],
    "Rb perm": ["R'", "U2", "R", "U2", "R'", "F", "R", "U", "R'", "U'", "R'", "F'", "R2"],
    "T perm": ["R", "U", "R'", "U'", "R'", "F", "R2", "U'", "R'", "U'", "R", "U", "R'", "F'"],
    "Y perm": ["F", "R", "U'", "R'", "U'", "R", "U", "R'", "F'", "R", "U", "R'", "U'", "R'", "F", "R", "F'"],
    "Na perm": ["L", "U'", "R", "U2", "L'", "U", "L", "U2", "R'", "U", "L'"],
    "Nb perm": ["R'", "U", "L'", "U2", "R", "U'", "R'", "U2", "L", "U'", "R"],
    "Ga perm": ["R2", "U", "R'", "U", "R'", "U'", "R", "U'", "R2", "D", "U'", "R'", "U", "D'"],
    "Gb perm": ["R'", "U'", "R", "D'", "R'", "U", "R", "U'", "R'", "D", "R2", "U", "R'", "U"],
    "Gc perm": ["R2", "U'", "R", "U'", "R", "U", "R'", "U", "R2", "D'", "U", "R", "U'", "D"],
    "Gd perm": ["R", "U", "R'", "D", "R", "U'", "R'", "U", "R", "D'", "R2", "U'", "R", "U'"],
    "E perm": ["x'", "R", "U'", "R'", "D", "R", "U", "R'", "D'", "R", "U", "R'", "D", "R", "U'", "R'", "D'"],
    "V perm": ["R'", "U", "R'", "D2", "R", "U'", "R'", "D2", "R2"]
  };

  for (const [name, alg] of Object.entries(pllAlgs)) {
    const div = document.createElement("div");
    div.className = "pll-box";
    div.innerHTML = `<strong>${name}</strong><div class="alg-text">Moves (${alg.length}): ${alg.map(m => `"${m}"`).join(", ")}</div>`;
    div.onclick = () => {
      const text = div.querySelector(".alg-text");
      text.style.display = text.style.display === "block" ? "none" : "block";
    };
    pllSection.appendChild(div);
  }
}
