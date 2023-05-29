// using return
// function totsal(sal, inc) {
//     const gross = sal + inc;
//     return gross;
// }
// console.log(totsal(7000, 1000));

// using callback
function totsal(sal, inc, callback) {
    const gross = sal + inc;
    callback(gross);
};
totsal(7000, 1000, function (tot) {
    console.log("The total salary is : " + tot);
});