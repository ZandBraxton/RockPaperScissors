



let p1ScoreVar = 0;
let cpuScoreVar = 0;

const p1Score = document.querySelector('#p1Score')
const cpuScore = document.querySelector('#cpuScore')
score()

function score() {
    p1Score.textContent = `Player 1: ${p1ScoreVar}`
    cpuScore.textContent= `Computer: ${cpuScoreVar}`
}

const btnArray = document.querySelectorAll('button');
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
    });
});



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
        alert("Tie game!")
        return "Tie";
    } else if (playerSelection == "ROCK") {
        if (computerSelection == "PAPER") {
            alert("You Lose! Paper beats Rock")
            return "Lose"
        } else {
            alert("You Win! Rock beats Scissors")
            return "Win"
        }
    } else if (playerSelection == "PAPER") {
        if (computerSelection == "SCISSORS") {
            alert("You Lose! Scissors beats Paper")
            return "Lose"
        } else {
            alert("You Win! Paper beats Rock")
            return "Win"
        }
    } else {
        if (computerSelection == "ROCK") {
            alert("You Lose! Rock beats Scissors")
            return "Lose"
        } else {
            alert("You win! Scissors beats Paper")
            return "Win"
        }
    }
}




// // Make a function that loops the game through five rounds
// function game() {
//     //initialize score
//     let p1Score = 0;
//     let cpuScore = 0;
//     //loop game 5 times
//     for (let i = 0; i < 5; i++) {
//         //Generate variables each round
//         const playerSelection = playerPlay();
//         const computerSelection = computerPlay();
//         let result = playRound(playerSelection, computerSelection);
//         //Update score depending on result
//         switch(result) {
//             case "Tie":
//                 break;
//             case "Lose":
//                 ++cpuScore;
//                 break;
//             case "Win":
//                 ++p1Score;
//                 break;
//         }
//         alert(`Score: Player: ${p1Score}, Computer: ${cpuScore}`)
//     }
// }
