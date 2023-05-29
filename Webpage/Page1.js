const express = require('express')();
// const express = require('express');
// const app = express();

// app.get('/', (req, res) => {
express.get('/', (req, res) => {
    res.send('Welcome to Home Page');
});

// app.listen(3000, () => {
express.listen(3000, () => {
    console.log("server is running in port 3000");
});