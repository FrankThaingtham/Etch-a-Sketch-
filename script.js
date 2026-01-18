const box = document.querySelector(".box");
const resizeBtn = document.querySelector("#resizeBtn");

function buildGrid(n) {
  n = Math.min(Math.max(parseInt(n, 10), 1), 100); // clamp 1..100

  box.style.setProperty("--n", n);
  box.innerHTML = "";

  for (let i = 0; i < n * n; i++) {
    const cell = document.createElement("div");
    cell.classList.add("boxInside");
    box.appendChild(cell);
  }
}

// Hover effect (event delegation)
box.addEventListener("mouseover", (e) => {
  if (e.target.classList.contains("boxInside")) {
    e.target.classList.add("hovered");
  }
});

// Button: prompt user, rebuild grid
resizeBtn.addEventListener("click", () => {
  const input = prompt("Enter number of squares per side (1–100):");
  if (input === null) return; // user hit Cancel
  buildGrid(input);
});

// initial grid
buildGrid(16);