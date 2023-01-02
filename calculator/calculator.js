let inputVal1, inputVal2;
let num1, num2;
let result;
let resultDisplay = document.getElementById("result-el");

function ready() {
  inputVal1 = document.querySelector("#num1-el").value;
  inputVal2 = document.querySelector("#num2-el").value;

  num1 = parseFloat(inputVal1);
  num2 = parseFloat(inputVal2);
}

function add() {
  ready();
  if (inputVal1 != "" && inputVal2 != "") {
    result = num1 + num2;
    resultDisplay.textContent = result;
  }
}

function substract() {
  ready();
  if (inputVal1 != "" && inputVal2 != "") {
    result = num1 - num2;
    resultDisplay.textContent = result;
  }
}

function divide() {
  ready();
  if (inputVal1 != "" && inputVal2 != "") {
    result = num1 / num2;
    resultDisplay.textContent = result;
  }
}

function multiply() {
  ready();
  if (inputVal1 != "" && inputVal2 != "") {
    result = num1 * num2;
    resultDisplay.textContent = result;
  }
}

function clearAll() {
  num1 = 0;
  num2 = 0;
  document.getElementById("num1-el").value = "";
  document.getElementById("num2-el").value = "";
  document.getElementById("result-el").textContent = "";
}
