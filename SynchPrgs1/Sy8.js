const http = require('http');

const server = http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-type': 'text/plain' });
    res.end('This is simple HTTP Server');
});

function start(port, callback) {  //user defined func to start HTTP server
    server.listen(port, function () {
        console.log('Server port is : ', port);
        callback();
    })
}

function stop() {  //user defined func to stop HTTP server
    server.close();
    console.log('Server is Stopped');
}

start(3000, function () {
    console.log('Server Started');
})

setTimeout(() => {
    stop();
}, 10000);