
let secret = Math.floor(Math.random() * 100) + 1;
let tries = 0;
let done = false;


const guessInput = document.getElementById("guessInput");
const guessBtn = document.getElementById("guessBtn");
const playAgainBtn = document.getElementById("playAgainBtn");
const resultDisplay = document.getElementById("result");
const attemptsDisplay = document.getElementById("attempts");


function play() {
    if (done) return;
    
    let num = Number(guessInput.value);
    
    
    if (!num || num < 1 || num > 100) {
        resultDisplay.innerHTML = "Enter 1-100!";
        return;
    }
    
    tries++;
    attemptsDisplay.innerHTML = `${tries} / 10`;
    
    if (num < secret) {
        resultDisplay.innerHTML = "Too Low!";
        resultDisplay.className = "too-low";
    } else if (num > secret) {
        resultDisplay.innerHTML = "Too High!";
        resultDisplay.className = "too-high";
    } else {
        resultDisplay.innerHTML = "Won! Number was " + secret;
        resultDisplay.className = "winner";
        endGame();
    }

    
    if (tries >= 10 && num !== secret) {
        resultDisplay.innerHTML = "Lost! It was " + secret;
        resultDisplay.className = "loser";
        endGame();
    }

    guessInput.value = "";
    guessInput.focus();
}


function endGame() {
    done = true;
    playAgainBtn.style.display = "inline-block";
}


function resetGame() {
    secret = Math.floor(Math.random() * 100) + 1;
    tries = 0;
    done = false;
    resultDisplay.innerHTML = "";
    resultDisplay.className = "";
    attemptsDisplay.innerHTML = "";
    guessInput.value = "";
    playAgainBtn.style.display = "none";
}


guessBtn.addEventListener("click", play);
playAgainBtn.addEventListener("click", resetGame);


guessInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") play();
});