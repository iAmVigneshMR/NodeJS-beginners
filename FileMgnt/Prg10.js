const http = require('http');
const express = require('express');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const server = http.createServer(app);
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.post('/folder', (req, res) => {
    let folder = req.body.folder;
    let files = getListOfDirectories(folder);
    res.send(files);
});

let getListOfDirectories = (dir) => {
    let res = `<h3>${dir}</h3>`
    let entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
        if (entry.isDirectory()) {
            const subdir = getListOfDirectories(path.join(dir, entry.name));
            res += `<li>${subdir}</li>`;
        } else if (entry.isFile()) {
            res += `<li>${entry.name}</li>`;
        };
    };
    return res;
};

app.post('/files', (req, res) => {
    let files = req.body.files;
    fs.readFile(files, 'utf-8', (err, data) => {
        if (err) res.send("Error");
        else res.send(data);
    });
});

server.listen(3000, () => {
    console.log("Server is Running");
});