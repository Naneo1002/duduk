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
  result.innerHTML = "";

  const finalOrder = shuffle(people);

  finalOrder.forEach((letter, index) => {
    const slot = document.createElement("span");
    slot.className = "result-slot";
    slot.textContent = letter;
    slot.style.opacity = "0.35";
    slot.style.transform = "translateY(10px) scale(0.94)";
    result.appendChild(slot);

    const randomize = () => {
      const current = shuffle(people);
      slot.textContent = current[index % current.length];
    };

    let tick = 0;
    const intervalId = setInterval(() => {
      randomize();
      tick += 1;

      if (tick >= 8) {
        clearInterval(intervalId);
        slot.textContent = finalOrder[index];
        slot.style.opacity = "1";
        slot.style.transform = "translateY(0) scale(1)";
        slot.style.filter = "drop-shadow(0 0 12px rgba(56, 189, 248, 0.7))";

        if (index === finalOrder.length - 1) {
          setTimeout(() => {
            result.classList.remove("is-shuffling");
            button.textContent = "duduk";
            button.disabled = false;
            button.dataset.animating = "false";
          }, 250);
        }
      }
    }, 80 + index * 40);
  });
}

window.addEventListener("DOMContentLoaded", () => {
  renderPeople();

  const button = document.getElementById("shuffle-btn");
  button.addEventListener("click", renderPeople);
});
