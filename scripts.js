// Create variable for rock
let rock = "Rock"
// Create variable for scissors
let scissors = "Scissors"
// Create variable for paper
let paper = "Paper"
// Ask user for prompt for their choice
let playerChoice = prompt("Rock, Paper, or Scissors?").toUpperCase();
// Check to make sure player inputs RPS
if (!(playerChoice == "ROCK" || playerChoice == "PAPER" || playerChoice == "SCISSORS")) {
    alert("Invalid, please enter Rock, Paper, or Scissors")
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

console.log(computerPlay());
// Calculate who won
// If won, alert the player that they won
// else, alert the player that they lost
// Make a function that loops the game through five rounds
// Keep track of the score