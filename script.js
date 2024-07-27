document.getElementById("yes").addEventListener("click", () => {
  document.getElementById("first").style.display = "none";
  document.getElementById("second").style.display = "flex";
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 },
  });
});

document.getElementById("no").addEventListener("click", () => {
  document.getElementById("title").textContent = "No cheating :(";
});

const button = document.querySelector("#no");
const threshold = 200; // ボタンが反応する範囲（ピクセル単位）

document.addEventListener("mousemove", function (e) {
  const rect = button.getBoundingClientRect();
  const dx = e.clientX - (rect.left + rect.width / 2);
  const dy = e.clientY - (rect.top + rect.height / 2);
  const distance = Math.sqrt(dx * dx + dy * dy);

  if (distance < threshold) {
    let maxX = window.innerWidth - button.offsetWidth;
    let maxY = window.innerHeight - button.offsetHeight;
    button.style.left = Math.floor(Math.random() * maxX) + "px";
    button.style.top = Math.floor(Math.random() * maxY) + "px";
  }
});
