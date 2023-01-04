let myLeads = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");

/**
 * added the keypress event which triggers click event when the user presses "Enter" key
 */
inputEl.addEventListener("keypress", function (event) {
  //when the user presses "Enter"
  if (event.key === "Enter") {
    //trigger the button element with a click
    inputBtn.click();
  }
});

//this is the original code from instructor
inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value);
  renderLeads();
});

function renderLeads() {
  let listItems = "";
  for (let i = 0; i < myLeads.length; i++) {
    //   ulEl.innerHTML += "<li>" + myLeads[i] + "</li>";

    //or
    //   const li = document.createElement("li");
    //   li.textContent = myLeads[i];
    //   ulEl.append(li);

    listItems += "<li>" + myLeads[i] + "</li>";
  }

  ulEl.innerHTML = listItems;
}
