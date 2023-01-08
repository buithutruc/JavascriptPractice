//chrome://extensions/

let myLeads = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const deleteBtn = document.getElementById("delete-btn");
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

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));

if (leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage;
  renderLeads();
}

inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value);
  //clear out the input field
  inputEl.value = "";

  //save the myLeads array to localStorage
  localStorage.setItem("myLeads", JSON.stringify(myLeads));
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

    //make the link clickable and open in a new tab
    // listItems +=
    //   "<li><a target='_blank' href='" +
    //   myLeads[i] +
    //   "'>" +
    //   myLeads[i] +
    //   "</a></li>";

    //template strings
    listItems += `
      <li>
        <a target='_blank' href='${myLeads[i]}'> ${myLeads[i]} </a>
      </li>`;
  }

  ulEl.innerHTML = listItems;
}

//original instruction
// deleteBtn.addEventListener("dblclick", function () {
//   localStorage.clear();
//   myLeads = [];
//   renderLeads();
// });

/**
 * the original code required double click to delete all
 * changed to ask for user's confirmation before deleting all
 */
function deleteAll() {
  let result = confirm("Are you sure to delete all?");
  if (result) {
    localStorage.clear();
    myLeads = [];
    renderLeads();
  }
}
