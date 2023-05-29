const prompt = require('prompt-sync')();
// let buf = Buffer.concat([Buffer.from('Sample'), Buffer.from(' Text')]);
// console.log(buf, buf.toString());

// let buf = Buffer.concat([Buffer.from(prompt("Enter String 1 : ")), Buffer.from(' '), Buffer.from(prompt("Enter String 2 : "))]);
// console.log(buf, buf.toString());

let buf = Buffer.compare(Buffer.from(prompt("Enter String 1 : ")), Buffer.from(prompt("Enter String 2 : ")));
console.log(buf, buf.toString());
// result "0" = equal, "-1" = less than in ascci, "1" = greater than in ascii 