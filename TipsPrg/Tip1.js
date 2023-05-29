//to get current program file path
// console.log(process.argv); //argument vector [similar to array]
// console.log(process.argv[1]);
// console.log(process.argv.slice(1));

//to get any file path with extension
// const path = require('path');
// const dir = `/home/ai/Projects/NodeJS-classes/NodeJS-Basics/Notes`;
// const file = `NodeJSBasic-BatchDay5.txt`;
// const fp = path.join(dir, file);
// console.log("full path", fp);

//creating and listening in single line
// require('http').createServer((req, res) => {
//     res.end('Hello');
// }).listen(3000, () => {
//     console.log("Server is Running");
// });

//create a random number;
// const c = require('crypto');
// const r = c.randomInt(1000, 9999);
// console.log("Random No : ", r);
// console.log(c.randomUUID());

// console.log(process.env);
// for (const key in process.env) {
//     console.log(key + ' = ' + process.env[key]);
// };

// const fs = require('fs');
// const s = fs.createReadStream('Sample.txt');
// s.on('data', txt => {
//     console.log(txt.toLocaleString());
// });
// s.on('end', () => {
//     console.log('End of File');
// });

//reverse a string
// const p = require('prompt-sync')();
// console.log(p('Enter a String : ').split('').reverse().join(''));

// reverse a string in single line
console.log(require('prompt-sync')()('Enter a String : ').split('').reverse().join(''));