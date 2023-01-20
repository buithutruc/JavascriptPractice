//JSON: JavaScript Object Notation

const myObj = {
  name: "Dave",
  hobbies: ["eat", "sleep", "code"],
  hello: function () {
    console.log("Hello!");
  },
};

console.log(myObj);
console.log(myObj.name);
myObj.hello();
console.log(typeof myObj);

const sendJSON = JSON.stringify(myObj); //lost the method
console.log(sendJSON);

console.log(typeof sendJSON);
console.log(sendJSON.name);

const receiveJSON = JSON.parse(sendJSON);
console.log(receiveJSON);
console.log(typeof receiveJSON);
