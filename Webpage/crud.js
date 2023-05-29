const dbo = require('./db');
const express = require('express');
const app = express();
const bodyparser = require('body-parser');
app.use(bodyparser.urlencoded({ extended: true }));

let ename, mail;
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/crudform.html');
});
app.get('/read', async (req, res) => {
    result = await ReadDB();
    res.send(result);
});
app.post('/empdet', (req, res) => {
    ename = req.body.ename;
    mail = req.body.email;
    hnd = req.body.hdnbt;
    if (hnd == 'Register') {
        result = InsertDB();
        if (result) res.send('Record Inserted Succefully');
    }
    if (hnd == 'Update') {
        result = UpdateDB();
        if (result) res.send('Record Updated Succefully');
    }
    if (hnd == 'Delete') {
        result = DeleteDB();
        if (result) res.send('Record Deleted Succefully');
    }
});
app.listen(3000, () => console.log("server is running in port 3000"));

async function InsertDB() {
    const database = await dbo.getDB();
    res = await database.db().collection('nodeemp').insertOne({
        empname: ename,
        empmail: mail
    });
    return res;
}

async function ReadDB() {
    const database = await dbo.getDB();
    res = await database.db().collection('nodeemp').find({}).toArray();
    return res;
}

async function DeleteDB() {
    const database = await dbo.getDB();
    res = await database.db().collection('nodeemp').deleteOne({ empmail: mail });
    return res;
}

async function UpdateDB() {
    const database = await dbo.getDB();
    res = await database.db().collection('nodeemp').updateOne(
        { empmail: mail },
        { $set: { empname: ename } }
    );
    return res;
}