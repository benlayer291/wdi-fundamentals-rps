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

    return move || getInput();
}

function getComputerMove(move) {

    return move || randomPlay();
}

function getWinner(playerMove,computerMove) {
    var winner;

    console.log("Player move is " + playerMove);
    console.log("Computer move is " + computerMove);

    if (playerMove === computerMove) {
        winner = "tie";
    }
    else if (playerMove === "rock" && computerMove === "scissors") {
        winner = "player";
    }
    else if (playerMove === "scissors" && computerMove === "paper") {
        winner = "player";
    }
    else if (playerMove === "paper" && computerMove === "rock") {
        winner = "player";
    }
    else {
        winner = "computer";
    } 
    
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    console.log("The first to five wins the match!");
    var playerWins = 0;
    var computerWins = 0;
    var round =1;
    
    while (playerWins < 5 && computerWins < 5) {

        console.log("ROUND" + round);

        var winner = getWinner(getPlayerMove(), getComputerMove());

        switch(winner) {
            case "tie":
                console.log("It's a tie!");
            break;

            case "player":
                console.log("Player wins the game!");
                playerWins ++;
            break;

            case "computer":
                console.log("Computer wins the game!");
                computerWins ++;
            break;
        }
        round ++;
        console.log("Player score is " + playerWins + " Computer score is " + computerWins);
    }

    if (computerWins === 5) {
        console.log("Computer wins the  match! " + computerWins + " -" + " " + playerWins);
    }
    else if (playerWins === 5) {
        console.log("Player wins the  match! " + playerWins + " -" + " " + computerWins);
    }

    return [playerWins, computerWins];
}

