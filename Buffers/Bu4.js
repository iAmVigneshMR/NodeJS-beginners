//net module - async network API
//Its creating stream based TCP server and clients
const net = require('net');
const clients = [];
const server = net.createServer(con => {
    console.log('Server Connected');
    // console.log(con);
    clients.push(con);
    con.on('data', data => {
        console.log("Received Data : ", data);
    });
    con.on('end', () => {
        console.log('Server Disconnected');
    })
});
server.listen(3000, () => {
    console.log('Server Listening');
})