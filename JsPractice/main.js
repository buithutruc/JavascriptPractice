//Web Storage API
// window.alert("okay");

const myArray = ["eat", "sleep", "code"];

const myObject = {
  name: "Truc",
  hobbies: ["eat", "sleep", "code"],
  logName: function () {
    console.log(this.name);
  },
};

// myObject.logName();

sessionStorage.setItem("mySessionStore", JSON.stringify(myArray));
const mySessionData = JSON.parse(sessionStorage.getItem("mySessionStore"));
console.log(mySessionData);

localStorage.setItem("myLocalStore", JSON.stringify(myArray));
// localStorage.removeItem("myLocalStore");
// localStorage.clear();
const key = localStorage.key(0);
const storageLength = localStorage.length;
const myLocalData = JSON.parse(localStorage.getItem("myLocalStore"));
console.log(storageLength);
