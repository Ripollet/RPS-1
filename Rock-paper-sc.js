console.log("hello World");

function getComputerChoice () {
    if (Math.random()<0.33333) { 
        return "rock";
    } 
    if (Math.random()<0.66666) {
        return "paper";
    }
    if (Math.random()<1){
        return "scissors";
    }
};

console.log(getComputerChoice());

function getHumanChoice (){

    let userInput = prompt ("Type Rock, Paper or Scissors");
    userInput = userInput.toLowerCase();
    
    switch (userInput){
        case "rock":
            return "rock";
            break;
        case "paper":
            return "paper";
            break;
        case "scissors":
            return "scissors";
            break;
        default:
            return "Insert a valid input";
            break;
    }
};

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

let humanScore = 0;

let computerScore = 0;

function playRound (humanChoice, computerChoice) {
 if (humanChoice == computerChoice) {
    return "Try again";
 } else if (humanChoice == "rock" && computerChoice == "paper") {
    return "You lose! Paper beats Rock";
 } else if (humanChoice == "paper" && computerChoice == "scissors") {
    return "You lose! Scissors beats Paper";
 } else if (humanChoice == "scissors" && computerChoice == "rock") {
    return "You lose! Rock beats Scissors";
 } else if (humanChoice == "rock" && computerChoice == "scissors") {
    return "You win! Rock beats Scissors";
 } else if (humanChoice == "paper" && computerChoice == "rock") {
    return "You win! Paper beats Rock";
 } else if (humanChoice == "scissors" && computerChoice == "paper") {
    return "You win! Scissors beats Paper";
 }
};

console.log(playRound(humanSelection, computerSelection));
