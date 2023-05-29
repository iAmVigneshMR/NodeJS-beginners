// console.log("welcome")

//-----Built in modules----------//
let Os = require('node:os');
console.log([Os.hostname(), Os.homedir()]);
// console.log(Os.machine());

//-----Custom Modules-----------//
const c = require("./cirle");
console.log(c.area(8), c.circumferance(7));