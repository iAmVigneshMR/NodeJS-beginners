//Asynchronous function
const prompt = require('prompt-sync')();
console.log('Start');
console.log('mid');
// setTimeout(function () {
//     for (let i = 0; i < 5; i++) {
//         console.log("Aggregate");
//     }
// }, 5000);

// for (let i = 0; i < 5; i++) {
//     setTimeout(function () {
//         console.log("Aggregate");
//     }, i * 1000);
// }

// let time = 1;
// setInterval(function () {
//     if (time < 3) console.log("Aggregate");
//     time++
// }, 5000);

function loginuser(user) {
    setTimeout(function () {
        for (let i = 0; i < 5; i++) {
            console.log(user, 'user');
        }
    }, 5000);
}
let obj = loginuser(prompt('Enter User :'));
console.log({ obj });

console.log('End');