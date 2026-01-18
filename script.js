const box = document.querySelector(".box");

function buildGrid(n) {
  n = Math.min(Math.max(parseInt(n, 10), 1), 100); // 1..100

  box.style.setProperty("--n", n);
  box.innerHTML = "";

  for (let i = 0; i < n * n; i++) {
    const cell = document.createElement("div");
    cell.classList.add("boxInside");
    box.appendChild(cell);
  }
}

buildGrid(16);