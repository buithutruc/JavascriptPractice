let playGame;
let playerChoice;
let playerWinsCounter = 0;
let computerWinsCounter = 0;
let tieGamesCounter = 0;

let playerWinsCounterEl = document.getElementById("player-wins-count");
let computerWinsCounterEl = document.getElementById("computer-wins-count");
let tieGamesCounterEl = document.getElementById("tie-games-count");

function init() {
  playGame = confirm("Shall we play rock, paper, or scissors?");
  if (playGame) {
    //play
    start();
  } else {
    alert("Ok, maybe next time.");
  }
}

function start() {
  playerChoice = prompt("Please enter rock, paper, or scissors.");
  if (playerChoice === "") {
    alert("You didn't enter anything!");
  } else if (playerChoice) {
    play();
  } else {
    alert("I guess you changed your mind. Maybe next time.");
  }
}

function play() {
  let player = playerChoice.trim().toLowerCase();
  if (player === "rock" || player === "paper" || player === "scissors") {
    let computerChoice = Math.floor(Math.random() * 3 + 1);
    let computer =
      computerChoice === 1
        ? "rock"
        : computerChoice === 2
        ? "paper"
        : "scissors";

    const computerWinStatement = `Player: ${player}\nComputer: ${computer}\nComputer wins!`;

    const playerWinStatement = `Player: ${player}\nComputer: ${computer}\nPlayer wins!`;

    // let result =
    //   player === computer
    //     ? "Tie game!"
    //     : player === "rock" && computer === "paper"
    //     ? computerWinStatement
    //     : player === "paper" && computer === "scissors"
    //     ? computerWinStatement
    //     : player === "scissors" && computer === "rock"
    //     ? computerWinStatement
    //     : playerWinStatement;
    // alert(result);

    if (player === computer) {
      alert("Tie game!");
      tieGamesCounter++;
    } else if (player === "rock" && computer === "paper") {
      computerWinsCounter++;
      alert(computerWinStatement);
    } else if (player === "paper" && computer === "scissors") {
      computerWinsCounter++;
      alert(computerWinStatement);
    } else if (player === "scissors" && computer === "rock") {
      computerWinsCounter++;
      alert(computerWinStatement);
    } else {
      playerWinsCounter++;
      alert(playerWinStatement);
    }

    console.log(
      "computer: " +
        computerWinsCounter +
        "\n" +
        "player: " +
        playerWinsCounter +
        "\n" +
        "tie games: " +
        tieGamesCounter
    );

    //location.reload()
    playAgain();
  } else {
    alert("You didn't enter rock, paper, or scissors.");
  }
}

function playAgain() {
  let playAgain = confirm("Play again?");
  playAgain ? start() : alert("Ok, see you next time.");
}

function seeResult() {
  if (
    playerWinsCounter === 0 &&
    computerWinsCounter === 0 &&
    tieGamesCounter === 0
  ) {
    alert("There's no result available.");
  } else {
    playerWinsCounterEl.textContent =
      "Player wins: " + playerWinsCounter + " times";
    computerWinsCounterEl.textContent =
      "Computer wins: " + computerWinsCounter + " times";
    tieGamesCounterEl.textContent = "Tie games: " + tieGamesCounter + " times";
  }
}
