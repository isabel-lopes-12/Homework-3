let score = 0;
const moles = document.getElementsByClassName("moles");
let gameInterval;

function showRandomMole() {
  for (let i = 0; i < moles.length; i++) {
    moles[i].style.display = "none";
  }

  const randomIndex = Math.floor(Math.random() * moles.length);
  moles[randomIndex].style.display = "block";
}

function whackMole() {
  score += 1;
  document.getElementById("score").innerText = score;
  this.style.display = "none";
}

function startGame() {
  score = 0;
  document.getElementById("score").innerText = score;

  clearInterval(gameInterval);
  gameInterval = setInterval(showRandomMole, 1000);
}

for (let i = 0; i < moles.length; i++) {
  moles[i].addEventListener("click", whackMole);
}
