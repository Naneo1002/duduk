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
  const button = document.getElementById("shuffle-btn");

  if (button.dataset.animating === "true") {
    return;
  }

  button.dataset.animating = "true";
  button.disabled = true;
  button.textContent = "Shuffling...";
  result.classList.add("is-shuffling");

  let steps = 0;
  const maxSteps = 18;

  const intervalId = setInterval(() => {
    const shuffled = shuffle(people);
    result.textContent = shuffled.join(" - ");
    steps += 1;

    if (steps >= maxSteps) {
      clearInterval(intervalId);

      const finalOrder = shuffle(people);
      result.textContent = finalOrder.join(" - ");
      result.classList.remove("is-shuffling");
      button.textContent = "duduk";
      button.disabled = false;
      button.dataset.animating = "false";
    }
  }, 90);
}

window.addEventListener("DOMContentLoaded", () => {
  renderPeople();

  const button = document.getElementById("shuffle-btn");
  button.addEventListener("click", renderPeople);
});
