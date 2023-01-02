let countSum = document.getElementById("count_sum");
let savedEntries = document.getElementById("save_el");
let total = document.getElementById("total_el");
let count = 0;
let sum = 0;

function increment() {
  count += 1;
  countSum.innerText = count;
}

function decrement() {
  if (count <= 0) {
    count = 0;
  } else {
    count -= 1;
    countSum.innerText = count;
  }
}

function save() {
  if (count != 0) {
    let entry = count;
    savedEntries.textContent += " " + entry + " - ";

    //display total number of people
    sum += entry;
    calculateTotal();

    //reset counting number
    count = 0;
    countSum.innerText = 0;
  }
}

function calculateTotal() {
  total.textContent = sum;
}
