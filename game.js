let playerWins = 0;
let computerWins = 0;

// gets every button
const buttons = document.querySelectorAll('input');

// creates a function for each button that accesses their data-value key and plays a round
buttons.forEach(input => input.addEventListener('click', () => {
    playRound(input.dataset.value);
}));

function computerPlay(){
    return Math.floor(Math.random() * 3)
}

function playRound(playerSelection){
    let computerSelection = computerPlay();
    
    console.log(`Player chose ${playerSelection}`);
    console.log(`Comp chose ${computerSelection}`);

    if (playerSelection == computerSelection){
        console.log('It was a tie!');
    }
    else if (computerSelection == playerSelection + 1 || computerSelection == playerSelection - 2){
        score(false);
    }
    else {
        score(true);
    }
}

function score(playerWon){
    const score = document.querySelector('h1');
    if (playerWon) {
        playerWins = playerWins + 1;
        score.textContent = `${playerWins}-${computerWins}`;
        checkWin(playerWins, true);
    }
    else {
        computerWins = computerWins + 1;
        score.textContent = `${playerWins}-${computerWins}`;
        checkWin(playerWins, true);
    }
}

function checkWin(wins, player){
    const scoreboard = document.querySelector('h1');

    if (wins >= 5){
        if (player){
            scoreboard.textContent = 'You Win!';
        }
        else {
            scoreboard.textContent = 'You Lost...';
        }
    }
}

function game(){
    for (let i = 0; i < 5; i++){
        console.log(playRound(prompt("Please enter Rock, Paper, or Scissors"),computerPlay()));
    }
}