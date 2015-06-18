////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

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
    var move;
    if (move = 'rock') {
        return rock;
    }
    else if (move = 'paper') {
        return paper;
    }
    else if (move = 'scissors') {
        return scissors;
    }
    else {
        getInput();
    }
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    var move;
    if (move == true) {
        return move;
    }

    else if (move == false) {
        return randomPlay();
    }
}

function getWinner(playerMove,computerMove) {
           var winner;
           if (playerMove = rock && computerMove = paper){
               winner = 'computer';
               return winner;
           }
           else if (playerMove = rock && computerMove = scissors){
               winner = 'player';
               return winner;
           }
           else if (playerMove = rock && computerMove = rock){
               return 'Tie';
           }
           else if (playerMove = paper && computerMove = scissors){
               winner = 'computer';
               return winner;
           }
           else if (playerMove = paper && computerMove = rock){
               winner = 'player';
               return winner;
           }
           else if (playerMove = paper && computerMove = paper){
               return 'Tie';
           }
           else if (playerMove = scissors && computerMove = rock){
               winner = 'computer';
               return winner;
           }
           else if (playerMove = scissors && computerMove = paper){
               winner = 'player';
               return winner;
           }
           else if (playerMove = scissors && computerMove = scissors){
               return 'Tie';
           }
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    while (playerWins <= 5 || computerWins <= 5) {
        getWinner (); 
            if (winner = 'player') {
                playerWins += 1;
                console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove);
                console.log('The score is currently ' + playerWins + ' to ' + computerWins + '\n');
            }
            else if (winner = 'computer') {
                computerWins += 1;
                console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove);
                console.log('The score is currently ' + playerWins + ' to ' + computerWins + '\n');
            }
        
    }
    return [playerWins, computerWins];
}

