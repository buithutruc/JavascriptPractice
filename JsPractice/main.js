//Modules
//by using modules, strict mode is automatically appied to js

// import playGuitar from "./guitar.js";
// import { shredding as shred, plucking as fingerpicking } from "./guitar.js";

import * as Guitars from "./guitar.js";

// console.log(playGuitar());
// console.log(shred());
// console.log(fingerpicking());

console.log(Guitars.default());
console.log(Guitars.shredding());
console.log(Guitars.plucking());
