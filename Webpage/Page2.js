const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/Page2.html');
});

app.listen(3000, () => {
    console.log("server is running in port 3000");
});