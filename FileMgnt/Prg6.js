// const fs = require('fs');
// const path = require('path');
// const prompt = require('prompt-sync')();
// let dir = prompt('Enter Drive and Dir Name : ');

// function getFileSize(dirPath) {
//     fs.readdirSync(dirPath, (err, files) => {
//         if (err) {
//             console.log({ err });
//             return;
//         }
//         console.log(files)
//         files.forEach(file => {
//             const filepath = path.join(dirPath, file);
//             fs.stat(filepath, (err, stats) => {
//                 if (err) {
//                     console.log({ err });
//                     return;
//                 }
//                 if (stats.isFile()) {
//                     let s1 = stats.size;
//                     console.log(s1);
//                 }
//             });
//         });
//     })
// };

// getFileSize(dir);

// // /home/ai/Projects/NodeJS-classes/NodeJS-Basics/FileMgnt/Prg1.js
// // /home/ai/Projects/NodeJS-classes/NodeJS-Basics

const fs = require('fs'); // file stream - can handle folders and files
const path = require('path') // File path
const prompt = require('prompt-sync')();
const dir = prompt('Enter Drive and Dir Name : ');
function getFilesize(dirpath) {
    fs.readdir(dirpath, (err, files) => {
        if (err) {
            console.err('Error Reading dir : ', err);
            return;
        }
        files.forEach((file) => {
            const filepath = path.join(dirpath, file);
            fs.stat(filepath, (err, stats) => {
                if (err) {
                    console.err('Error Reading files : ', err);
                    return;
                }
                if (stats.isFile()) {
                    var si = stats.size;
                    if (si < 1024)
                        console.log('File Name : ', file, ' File Size : ', si + ' bytes.');
                    else if (si >= 1024 && si < 1048576)
                        console.log('File Name : ', file, ' File Size : ', (si / 1024).toFixed(2) + ' KB.');
                    else if (si >= 1048576 && si < 1073741824)
                        console.log('File Name : ', file, ' File Size : ', (si / (1024 * 1024)).toFixed(2) + ' MB.');
                    else
                        console.log('File Name : ', file, ' File Size : ', (si / (1024 * 1024 * 1024)).toFixed(2) + ' GB.');
                }
            }

            )
        })
    })
}
getFilesize(dir);