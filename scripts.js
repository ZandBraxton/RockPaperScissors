//Initialize
let p1ScoreVar = 0;
let cpuScoreVar = 0;
const p1Score = document.querySelector('#p1Score')
const cpuScore = document.querySelector('#cpuScore')
const log = document.querySelector('#log')
log.textContent = "Make a selection to play!"
rules.textContent = "First to 5 wins!"
gameStart()
score()



function restart () {
    p1ScoreVar = 0;
    cpuScoreVar = 0;
    log.textContent = "Make a selection to play!"
}

function score() {
    p1Score.textContent = `Player 1: ${p1ScoreVar}`
    cpuScore.textContent= `Computer: ${cpuScoreVar}`
}

function gameStart () {
    const btnArray = document.querySelectorAll('button');
    for (let i = 0; i <= btnArray.length - 1; i++) {
        switch (i) {
            case 0:
                btnArray[i].textContent = "Rock";
                break;
            case 1:
                btnArray[i].textContent = "Paper";
                break;
            case 2:
                btnArray[i].textContent = "Scissors";
                break;
        }
    }
    btnArray.forEach((button) => {
        button.addEventListener('click', () => {
            const playerSelection = button.id.toUpperCase()
            const computerSelection = computerPlay()
            let result = playRound(playerSelection, computerSelection);
            //Update score depending on result
            switch(result) {
                case "Tie":
                    break;
                case "Lose":
                    cpuScoreVar += 1;
                    score()
                    break;
                case "Win":
                    p1ScoreVar += 1;
                    score()
                    break;     
            }
            checkResults(p1ScoreVar, cpuScoreVar)
        });
    });
}

// Create AI to randomly play one of the three variables
function computerPlay() {
    let rpsValue = randomNumber(0, 3);
    switch(rpsValue) {
        case 0:
            return "ROCK";
            break;
        case 1:
            return "PAPER";
            break;
        case 2:
            return "SCISSORS";
            break;
    }       
}

//Make function to get random number between 1-3
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}

// Calculate who won and alert player result
function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        log.textContent = 'Tie Game!'
        return "Tie";
    } else if (playerSelection == "ROCK") {
        if (computerSelection == "PAPER") {
            log.textContent = "You Lose! Paper beats Rock"
            return "Lose"
        } else {
            log.textContent = "You Win! Rock beats Scissors"
            return "Win"
        }
    } else if (playerSelection == "PAPER") {
        if (computerSelection == "SCISSORS") {
            log.textContent = "You Lose! Scissors beats Paper"
            return "Lose"
        } else {
            log.textContent = "You Win! Paper beats Rock"
            return "Win"
        }
    } else {
        if (computerSelection == "ROCK") {
            log.textContent = "You Lose! Rock beats Scissors"
            return "Lose"
        } else {
            log.textContent = "You win! Scissors beats Paper"
            return "Win"
        }
    }
}

function checkResults (p1ScoreVar, cpuScoreVar) {
    if (p1ScoreVar === 5) {
        log.textContent = "Congratulations! You win!"
        playAgain()
    } else if (cpuScoreVar === 5) {
        log.textContent = "Game Over"
        playAgain()
    }
}

function playAgain() {
    const btnArray = document.querySelectorAll('button');
    for (let i = 0; i <= btnArray.length - 1; i++) {
        btnArray[i].textContent = "Play Again"
    }
    btnArray.forEach((button) => {
    button.addEventListener('click', () => {
        gameStart()
        restart()
        score()
        });
    });
}