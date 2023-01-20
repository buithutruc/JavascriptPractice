//JavaScript Errors and Error Handling
"use strict";

// let variable = "Dave";
// console.log(variable);

const makeError = () => {
  let i = 1;
  while (i <= 5) {
    try {
      // throw new customError("This is a custom error!");
      // throw new Error("This is an error!");
      if (i % 2 !== 0) {
        throw new Error("Odd number!");
      }
      console.log("Even number!");
    } catch (err) {
      //name, message, stack
      console.error(err.stack);
      // console.warn(err);
      // console.table(err);
    } finally {
      console.log("...finally");
      i++;
    }
  }
};

makeError();

function customError(message) {
  this.message = message;
  this.name = "customError";
  this.stack = `${this.name}: ${this.message}`;
}
