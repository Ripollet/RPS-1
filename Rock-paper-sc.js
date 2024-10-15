
function getComputerChoice () {


    if (Math.random()<0.33333) {
        console.log ("Computer chose Rock"); 
        return "rock";
    } 
    if (Math.random()<0.66666) {
        console.log ("Computer chose Paper"); 
        return "paper";
    }
    if (Math.random()<1){
        console.log ("Computer chose Scissors");
        return "scissors";
    }
    
};

function getHumanChoice (){

    let userInput = prompt ("Type Rock, Paper or Scissors");
    userInput = userInput.toLowerCase();
    console.log (`Human chose ${userInput}`);
    
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


function playGame () {
    
        let humanScore = 0;

        let computerScore = 0;
    
        const playRound = function (humanChoice, computerChoice) {
        
            if (humanChoice == computerChoice) {
                return "Try again";
            } else if (humanChoice == "rock" && computerChoice == "paper") {
                computerScore++;
                return "You lose! Paper beats Rock";
            } else if (humanChoice == "paper" && computerChoice == "scissors") {
                computerScore++;
                return "You lose! Scissors beats Paper";  
            } else if (humanChoice == "scissors" && computerChoice == "rock") {
                computerScore++;
                return "You lose! Rock beats Scissors";
            } else if (humanChoice == "rock" && computerChoice == "scissors") {
                humanScore++;
                return "You win! Rock beats Scissors";
            } else if (humanChoice == "paper" && computerChoice == "rock") {
                humanScore++;
                return "You win! Paper beats Rock";
            } else if (humanChoice == "scissors" && computerChoice == "paper") {
                humanScore++;
                return "You win! Scissors beats Paper";
            }
            }
    
    
    for (let i =0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound (humanSelection, computerSelection);
        console.log (`Human Score is ${humanScore}), Computer Score is ${computerScore}`);
        if (i == 4 && humanScore == computerScore){ console.log ("Draw");} 
        else if (i == 4 && humanScore < computerScore){ console.log ("Computer Wins");}
        else if (i == 4 && humanScore > computerScore){ console.log ("Human Wins");}
    }
      
}

console.log(playGame());
