//Fetch API requires a discussion of...
//Callbacks, Promises, Thenables, and Async/Await

//Callbacks

// function firstFunction(parameters, callback) {
//   //do stuff
//   callback();
// }

// //AKA "callback hell"
// firstFunction(para, function () {
//   //do stuff
//   secondFunction(para, function () {
//     thirdFunction(para, function () {});
//   });
// });

//Promises: 1. replace Callbacks; 2. when requesting data using Fetch API, we have to wait for that data to come back
//3 states: Pending, Fulfilled, Rejected

const myPromise = new Promise((resolve, reject) => {
  const error = false;
  if (!error) {
    resolve("Yes! resolved the promise!");
  } else {
    reject("No! rejected the promise.");
  }
});

// myPromise
//   .then((value) => {
//     return value + 1;
//   })
//   .then((newValue) => {
//     console.log(newValue);
//   })
//   .catch((err) => {
//     console.error(err);
//   });

//using timeout

// const myNextPromise = new Promise((resolve, reject) => {
//   setTimeout(function () {
//     resolve("myNextPromise resolved!");
//   }, 3000);
// });

// myNextPromise.then((value) => {
//   console.log(value);
// });

// myPromise.then((value) => {
//   console.log(value);
// });

const users = fetch("https://jsonplaceholder.typicode.com/users");

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    console.log(response);
    return response.json();
  })
  .then((data) => {
    console.log(data);
    data.forEach((user) => {
      console.log(user);
    });
  });

//pending
console.log(users);
