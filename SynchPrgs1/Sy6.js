// using return
// function Test(name, delay) {
//     setTimeout(function () {
//         return `Hello : ${name}`
//     }, delay);
// };
// console.log(Test('hty', 2000))

// using callback
function Test(name, delay, callback) {
    setTimeout(function () {
        callback(`Hello : ${name}`)
    }, delay);
};
Test('hty', 2000, function (res) {
    console.log(res);
})