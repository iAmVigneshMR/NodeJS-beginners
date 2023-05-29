const express = require('express');
const app = express();
//body-parser is a middleware. It is used to parse the form data.
const bodyparser = require('body-parser');
//used to convert html body controls to nodejs.
app.use(bodyparser.urlencoded({ extended: true }));

let uname;
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/Page3.html');
});
app.post('/userdet', (req, res) => {
    uname = req.body.username;
    console.log({ uname });
    res.send(`User Name is : ${uname}`);
});
app.listen(3000, () => console.log("server is running in port 3000"));