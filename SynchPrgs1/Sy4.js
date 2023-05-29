const prompt = require('prompt-sync')();
console.log('Start');
console.log('mid');

//callback

function loginuser(user, callBack) {
    setTimeout(function () {
        for (let i = 0; i < 5; i++) {
            console.log(user, 'user');
        }
        callBack(user);
    }, 5000);
}
loginuser(prompt('Enter User :'), function (res) {
    console.log({ res })
});

console.log('End');