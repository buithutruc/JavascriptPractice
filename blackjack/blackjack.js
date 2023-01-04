let firstCard = getRandomCard();
let secondCard = getRandomCard();
let cards = [firstCard, secondCard];
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";

let messageEl = document.getElementById("message-el");
let sumEL = document.querySelector("#sum-el");
let cardsEL = document.querySelector("#cards-el");

function getRandomCard() {
  let randomNumber = Math.floor(Math.random() * 10 + 2);
  return randomNumber;
}

function startGame() {
  if (sum < 21) {
    renderGame();
  }
}

function renderGame() {
  sumEL.textContent = sum;
  cardsEL.textContent = "Cards: ";
  for (let i = 0; i < cards.length; i++) {
    cardsEL.textContent += cards[i] + " ";
  }
  if (sum <= 20) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = "Wohoo! You've got Blackjack!";
    hasBlackJack = true;
  } else {
    message = "You're out of the game!";
    isAlive = false;
  }
  messageEl.textContent = message;
}

function addNewCard() {
  if (sum < 21) {
    let newCard = getRandomCard();
    cards.push(newCard);
    sum += newCard;
    renderGame();
  }
}
