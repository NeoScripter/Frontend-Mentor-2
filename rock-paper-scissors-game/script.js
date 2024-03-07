 
const computerPossibleMoves = ['rock', 'paper', 'scissors'];

function getComputerChoice(possibleMoves) {
    const choice = Math.floor(Math.random() * 3);
    return possibleMoves[choice];
}

const exitRules = document.querySelector(".exit-rules");
const openRules = document.querySelector(".check-rules");
const rulesWindow = document.getElementById("rules");

exitRules.addEventListener("click", () => {
    rulesWindow.style.display = "none";
});

openRules.addEventListener("click", () => {
    rulesWindow.style.display = "flex";
});

function declareWinner(winnerId) {
    const winnerElement = document.getElementById(winnerId);
    winnerElement.classList.add('winner-glow');
  }

function copyStyles(sourceId, targetId) {
    const source = document.getElementById(sourceId);
    const target = document.getElementById(targetId);

    const computedStyle = window.getComputedStyle(source);

    for (let property of computedStyle) {
        if (property === 'width') {
            const oldWidth = parseFloat(computedStyle.getPropertyValue(property)); 
            const newWidth = oldWidth * 1.3;
            target.style[property] = `${newWidth}px`;
        } else {
            target.style[property] = computedStyle.getPropertyValue(property);
        }
    }
    target.style.cursor = "auto";
    target.style.gridColumn = "auto";
    target.style.position = "relative";
  }

const computerChoice = document.getElementById('computer-choice');
const playerChoice = document.getElementById('player-choice');
const restartContainer = document.querySelector('.restart');
const playAgainButton = document.getElementById('play-again');
const para = document.querySelector('h2');
const moves = document.querySelectorAll(".moves");
const outcome = document.getElementById("outcome");
const initial = document.getElementById("initial");
let score = document.querySelector("h1");
let result;
let computerChoiceId;

for (const move of moves) {
    move.addEventListener("click", () => {
        setTimeout(() => {
            copyStyles(move.id, 'player-choice'); 
        }, 500);
        initial.style.display = "none";
        outcome.style.display = "grid";

        computerChoiceId = getComputerChoice(computerPossibleMoves);

        setTimeout(() => {
        copyStyles(computerChoiceId, 'computer-choice');
        }, 1000);

        result = playRound(move.id, computerChoiceId).toUpperCase();
        para.textContent = result;
        setTimeout(() => {    
            restartContainer.style.display = "block";
        }, 1800);   
        const currentScore = parseInt(score.textContent);

        if (result === 'YOU WIN') {
            setTimeout(() => {
                declareWinner('player-choice');
                score.textContent = `${parseInt(score.textContent) + 1}`;
                sessionStorage.setItem('gameScore', score.textContent);
            }, 2000);
            playAgainButton.textContent = 'PLAY AGAIN';
        } else if (result === 'YOU LOSE') {
            if (currentScore === 0) {
                setTimeout(() => {
                    declareWinner('computer-choice');
                }, 2000);
                playAgainButton.textContent = 'START OVER';
            } else {
                setTimeout(() => {
                    declareWinner('computer-choice');
                    score.textContent = `${currentScore - 1}`;
                    sessionStorage.setItem('gameScore', score.textContent);
                }, 2000);
            }
        } else {
            playAgainButton.textContent = 'PLAY AGAIN';
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const savedScore = sessionStorage.getItem('gameScore');

    if (savedScore !== null) {
      storedScore = parseInt(savedScore, 10);

      score.textContent = storedScore;
    }
  });

function resetElementStyle(element) {
    element.style.cssText = `
        background: none;
        box-shadow: none;
        background-color: hsl(239, 48%, 18%);
        border: none;
    `;
}

playAgainButton.addEventListener("click", () => {
    resetElementStyle(computerChoice);
    resetElementStyle(playerChoice);
       
    const choices = document.querySelectorAll('.choice');
        choices.forEach(choice => {
        choice.classList.remove('winner-glow');
    });
    initial.style.display = "grid";
    outcome.style.display = "none";
    restartContainer.style.display = "none";
});

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a tie";
    } else if (playerSelection === 'rock') {
        if (computerSelection === "paper") {
            return "You lose";
        } else {
            return "You win";
        }
    } else if (playerSelection === 'paper') {
        if (computerSelection === "rock") {
            return "You win";
        } else {
            return "You lose";
        }
    } else {
        if (computerSelection === "rock") {
            return "You lose";
        } else {
            return "You win";
        }
    } 
}
