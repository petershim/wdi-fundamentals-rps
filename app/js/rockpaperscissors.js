var playerWins = 0;
var computerWins = 0;
var playerMove;
var computerMove;

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    if (move) { return move }
    else { return getInput() }
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
        return randomPlay();
}

function getWinner(playerMove,computerMove) {


           if (playerMove == 'rock' && computerMove == 'paper'){
               return 'computer';
           }
           else if (playerMove == 'rock' && computerMove == 'scissors'){
               return 'player';
           }
           else if (playerMove == 'rock' && computerMove == 'rock'){
               return 'Tie';
           }
           else if (playerMove == 'paper' && computerMove == 'scissors'){
               return 'computer';
           }
           else if (playerMove == 'paper' && computerMove == 'rock'){
               return 'player';
           }
           else if (playerMove == 'paper' && computerMove == 'paper'){
               return 'Tie';
           }
           else if (playerMove == 'scissors' && computerMove == 'rock'){
               return 'computer';
           }
           else if (playerMove == 'scissors' && computerMove == 'paper'){
               return 'player';
           }
           else if (playerMove == 'scissors' && computerMove == 'scissors'){
               return 'Tie';
           }
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    playerMove = getPlayerMove();
    computerMove = getComputerMove();
    var winner = getWinner(playerMove, computerMove);
    while (playerWins < 5 || computerWins < 5) {
        getInput();
            if (winner == 'player') {
                playerWins += 1;
                console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove);
                console.log('The score is currently ' + playerWins + ' to ' + computerWins + '\n');
            }
            else if (winner == 'computer') {
                computerWins += 1;
                console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove);
                console.log('The score is currently ' + playerWins + ' to ' + computerWins + '\n');
            }

    }
    if (playerWins === 5) {
        console.log ("Player wins Rock, Paper, Scissors!")
    }
    else if (computerWins === 5) {
        console.log ("Computer wins Rock, Paper, Scissors!")
    }
}

playToFive();
