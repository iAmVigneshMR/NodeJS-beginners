const req = require('request');

function func1(url, callback) {
    req(url, function (err, response, body) {
        if (err) callback(err);
        else callback(null, body);
    })
}

func1('http://staging.storageexchange.com/', function (err, data) {
    if (err) console.error('Error making request : ', err);
    else console.log("Body content", data);
})