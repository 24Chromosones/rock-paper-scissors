
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors']

    return choices[Math.floor(Math.random()*choices.length)];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase()

    switch (playerSelection) {
        case 'rock':
            switch (computerSelection) {
                case 'rock':
                    return "It's a tie!";

                case 'paper':
                    return "You lose! Paper beats rock.";

                case 'scissors':
                    return "You win! Rock beats scissors.";
            }

        case 'paper':
            switch (computerSelection) {
                case 'rock':
                    return "You win! Rock beats paper.";

                case 'paper':
                    return "It's a tie!";

                case 'scissors':
                    return "You lose! Scissors beats paper.";

            }

        case 'scissors':
            switch (computerSelection) {
                case 'rock':
                    return "You lose! Rock beats scissors.";

                case 'paper':
                    return "You win! Scissors beats paper.";

                case 'scissors':
                    return "It's a tie!";

                default:
                    return "Error";

            }
    }
}

function game(){
    for (let i=0; i<5; i++ ){
        const playerInput = prompt("enter rock, paper, or scissors");

        console.log(playRound(playerInput, getComputerChoice()));
    }
}

const result = document.querySelector('.result');

const rockBtn = document.querySelector('.rock');

rockBtn.addEventListener('click', function() {
   result.textContent = playRound('rock', getComputerChoice());
});

const paperBtn = document.querySelector('.paper');

paperBtn.addEventListener('click', function (){
   result.textContent = playRound('paper', getComputerChoice());
});

const scissorBtn = document.querySelector('.scissors')

scissorBtn.addEventListener('click', function (){
    result.textContent = playRound('scissors', getComputerChoice());
});
