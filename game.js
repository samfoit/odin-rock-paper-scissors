const buttons = document.querySelectorAll('input');

buttons.forEach(input => input.addEventListener('click', () => {
    playRound(input.dataset.value);
}))

// 0: rock, 1: paper, 2: scissors
function computerPlay(){
    return Math.floor(Math.random() * 3)
}

function playRound(playerSelection){
    const computerSelection = computerPlay();
    
    console.log(`Player chose ${playerSelection}`);
    console.log(`Comp chose ${computerSelection}`);

    if (playerSelection == computerSelection){
        console.log('It was a tie!');
    }
    else if (computerSelection == playerSelection + 1 || computerSelection == playerSelection - 2){
        console.log('You lose...');
    }
    else {
        console.log('You win!');
    }
}

function game(){
    for (let i = 0; i < 5; i++){
        console.log(playRound(prompt("Please enter Rock, Paper, or Scissors"),computerPlay()));
    }
}