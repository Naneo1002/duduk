const people = ["A", "G", "N", "Z", "R", "T"];

function shuffle(array) {
  const shuffled = [...array];

  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  return shuffled;
}

function renderPeople() {
  const result = document.getElementById("result");
  const shuffled = shuffle(people);
  result.textContent = shuffled.join(" - ");
}

window.addEventListener("DOMContentLoaded", () => {
  renderPeople();

  const button = document.getElementById("shuffle-btn");
  button.addEventListener("click", renderPeople);
});
