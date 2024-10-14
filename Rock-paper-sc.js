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

function getHumanChoice (){

    let userInput = prompt ("Type Rock, Paper or Scissors");
    userInput = userInput.toLowerCase();
    
    switch (userInput){
        case "rock":
            return "rock";
        case "paper":
            return "paper";
        case "scissors":
            return "scissors";
        default:
            return "Insert a valid input";
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
    ++computerScore;
    return "You lose! Paper beats Rock";
 } else if (humanChoice == "paper" && computerChoice == "scissors") {
    ++computerScore;
    return "You lose! Scissors beats Paper";  
 } else if (humanChoice == "scissors" && computerChoice == "rock") {
    ++computerScore;
    return "You lose! Rock beats Scissors";
 } else if (humanChoice == "rock" && computerChoice == "scissors") {
    ++humanScore;
    return "You win! Rock beats Scissors";
 } else if (humanChoice == "paper" && computerChoice == "rock") {
    ++humanScore;
    return "You win! Paper beats Rock";
 } else if (humanChoice == "scissors" && computerChoice == "paper") {
    ++humanScore;
    return "You win! Scissors beats Paper";
 }
};

console.log(playRound(humanSelection, computerSelection));
console.log(computerSelection);
console.log (humanScore, computerScore);
