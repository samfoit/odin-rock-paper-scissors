// 0: rock, 1: paper, 2: scissors
function computerPlay(){
    return Math.floor(Math.random() * 3)
}

function playRound(playerSelection,computerSelection){
    let pChoice = playerSelection.toLowerCase();
    let compChoice;

    switch(computerSelection){
        case 0:
            compChoice = "rock";
            break;
        case 1:
            compChoice = "paper"
            break;
        case 2:
            compChoice = "scissors";
            break;
    }

    if (pChoice == compChoice){
        return "It was a tie!";
    }
    else if (pChoice == "rock" && compChoice == "paper"){
        return "You Lose! Paper beats Rock!";
    }
    else if (pChoice == "rock" && compChoice == "scissors"){
        return "You Win! Rock beats Scissors!";
    }
    else if (pChoice == "paper" && compChoice == "scissors"){
        return "You Lose! Scissors beats Paper!";
    }
    else if (pChoice == "paper" && compChoice == "rock"){
        return "You Win! Paper beats Rock!";
    }
    else if (pChoice == "scissors" && compChoice == "rock"){
        return "You Lose! Rock beats Scissors!";
    }
    else if (pChoice == "scissors" && compChoice == "paper"){
        return "You Win! Scissors beats Paper!";
    }
}