const express = require('express');
const multer = require('multer');
const app = express();
// app.use(express.json());

// to upload to folder
// let storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, './images')
//     },
//     filename: (req, file, cb) => {
//         cb(null, file.fieldname + '-' + Date.now());
//     }
// });
// const upload = multer({ storage: storage });

const upload = multer({ storage: multer.memoryStorage() });

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/home.html');
});

app.post('/upload', upload.single('image'), (req, res) => {
    const fb = req.file.buffer;
    res.end(fb);
});

app.listen(3000, () => {
    console.log('Server is Listening');
})