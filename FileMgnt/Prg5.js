const fs = require('fs');
const path = require('path');
const prompt = require('prompt-sync')();
let dir = prompt('Enter Drive and Dir Name : ');

let getFolder = (dirPath) => {
    return fs.readdirSync(dirPath).filter(file => fs.statSync(path.join(dirPath, file)).isDirectory());
};
let getFile = (dirPath) => {
    return fs.readdirSync(dirPath).filter(file => fs.statSync(path.join(dirPath, file)).isFile());
};

console.log("Folder : ", getFolder(dir));
console.log("File : ", getFile(dir));