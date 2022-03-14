const min = document.getElementById("min");
const max = document.getElementById("max");
const val = document.getElementById("txtNumber");
const btn = document.getElementById("btnGuess");
const msg = document.getElementById("message");

let gameOver = false;
let attempts = 3;
let minValue, maxValue, valueGenerated;
minValue = 1;
maxValue = 20;
valueGenerated = generateNumber(minValue, maxValue);

min.textContent = minValue;
max.textContent = maxValue;

btn.addEventListener("click", () => {
    if(gameOver){
        resetGame();
        return;
    }
  if (val.value == "" || isNaN(val.value)) {
    alert("Enter the number");
    return;
  }
  let userVal = parseInt(val.value);
  if (userVal != valueGenerated) {
    attempts--;
    if (attempts == 0) {
      onGameOver();
      msg.textContent = "Game Over!";
    } else {
      msg.textContent = "Try Again!";
    }
  } else {
      onGameOver();
    msg.textContent = "Congratulation, you guess the number!";
  }
});

function onGameOver(){
    gameOver = true;
    val.disabled = true;
    btn.textContent = "Play Again!";
}

function resetGame(){
    gameOver = false;
    attempts = 3;
    msg.textContent = "";
    btn.textContent = "Guess!";
    val.disabled = false;
    val.value = "";
    valueGenerated = generateNumber(minValue, maxValue);
}

function generateNumber(minValue, maxValue) {
  return Math.ceil(minValue + Math.random() * (maxValue - minValue));
}
