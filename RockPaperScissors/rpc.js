let playGame;
let playerChoice;

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

    let result =
      player === computer
        ? "Tie game!"
        : player === "rock" && computer === "paper"
        ? computerWinStatement
        : player === "paper" && computer === "scissors"
        ? computerWinStatement
        : player === "scissors" && computer === "rock"
        ? computerWinStatement
        : playerWinStatement;
    alert(result);

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
