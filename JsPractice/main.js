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

// const myPromise = new Promise((resolve, reject) => {
//   const error = false;
//   if (!error) {
//     resolve("Yes! resolved the promise!");
//   } else {
//     reject("No! rejected the promise.");
//   }
// });

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

// const users = fetch("https://jsonplaceholder.typicode.com/users");

// const users = fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => {
//     console.log(response);
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//     data.forEach((user) => {
//       console.log(user);
//     });
//   });

//pending in Promises
// console.log(users);//executed first

//Async/Await
const myUsers = {
  userList: [],
};

// async function myCoolFunction(){

// }

// const myCoolFunction = async () => {
//   const response = await fetch("https://jsonplaceholder.typicode.com/users");
//   const jsonUserData = await response.json();
//   return jsonUserData;
// };

// myCoolFunction();

// const anotherFunc = async () => {
//   const data = await myCoolFunction();
//   myUsers.userList = data;
//   console.log(myUsers.userList);
// };

// anotherFunc();
// console.log(myUsers.userList); //happened first

//another example of async/await: workflow function

// const getAllUserEmails = async () => {
//   const response = await fetch("https://jsonplaceholder.typicode.com/users");
//   const jsonUserData = await response.json();
//   const userEmailArray = jsonUserData.map((user) => {
//     return user.email;
//   });

//   postToWebPage(userEmailArray);
// };

// const postToWebPage = (data) => {
//   console.log(data);
// };

// getAllUserEmails();

//another example: 2nd parameter of Fetch is a object
// const getDadJoke = async () => {
//   const response = await fetch("https://icanhazdadjoke.com/", {
//     method: "GET",
//     headers: {
//       Accept: "application/json",
//     },
//   });

//   const jsonJokeData = await response.json();
//   console.log(jsonJokeData);
// };

// getDadJoke();

// const getAnotherDadJoke = async () => {
//   const response = await fetch("https://icanhazdadjoke.com/", {
//     method: "GET",
//     headers: {
//       Accept: "text/plain",
//     },
//   });

//   const textJokeData = await response.text();
//   console.log(textJokeData);
// };

// getAnotherDadJoke();

// const jokeObject = {
//   id: "0oO71TSv4Ed",
//   joke: "Why was it called the dark ages? Because of all the knights.",
// };

// const postData = async (jokeObj) => {
//   const response = await fetch("https://httpbin.org/post", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(jokeObj),
//   });

//   const jsonResponse = await response.json();
//   console.log(jsonResponse);
// };

// postData(jokeObject);

// const requestJoke = async (firstName, lastName) => {
//   const response = await fetch(
//     `https://api.icndb.com/jokes/random?firstName=${firstName}&lastName=${lastName}`
//   );

//   const jsonResponse = await response.json();
//   console.log(jsonResponse.value);
// };

// requestJoke("Clint", "Eastwood");

//abstract into functions

//maybe from a form
const getDataFromForm = () => {
  const requestObj = {
    firstName: "Bruce",
    lastName: "Lee",
    categories: ["nerdy"],
  };
  return requestObj;
};

const buildRequestUrl = (requestData) => {
  return `https://api.icndb.com/jokes/random?firstName=${requestData.firstName}&lastName=${requestData.lastName}&limitTo=${requestData.categories}`;
};

const requestJoke = async (url) => {
  const response = await fetch(url);
  const jsonResponse = await response.json();
  const joke = jsonResponse.value.joke;
  console.log(joke);
  postJokeToPage(joke);
};

const postJokeToPage = (joke) => {
  console.log(joke);
};

//Procedural "workflow" function
const processJokeRequest = async () => {
  const requestData = getDataFromForm();
  const requestUrl = buildRequestUrl(requestData);
  await requestJoke(requestUrl);
  console.log("finished!");
};

processJokeRequest();
