//Modules
//by using modules, strict mode is automatically appied to js

// import playGuitar from "./guitar.js";
// import { shredding as shred, plucking as fingerpicking } from "./guitar.js";

import * as Guitars from "./guitar.js";
import User from "./user.js";

// console.log(playGuitar());
// console.log(shred());
// console.log(fingerpicking());

const me = new User("email@email.com", "Truc");
console.log(me);
console.log(me.greeting());

console.log(Guitars.default());
console.log(Guitars.shredding());
console.log(Guitars.plucking());
