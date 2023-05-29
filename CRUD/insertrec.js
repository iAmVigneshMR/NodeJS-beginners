//third party modules import
const prompt = require('prompt-sync')();
const MongoClient = require('mongodb').MongoClient; //import mongoDB
const { mamsMongoAtlasUrl, myMongoAtlasUrl, mongoCompaseLocalUrl } = require('./common');

async function InsertDB() {
    const url = mongoCompaseLocalUrl;
    // const url = myMongoAtlasUrl;
    // const url = mamsMongoAtlasUrl;
    const client = await MongoClient.connect(url);
    const db = client.db();
    console.log('connected');
    const col1 = db.collection('nodeemp');

    const empid = prompt('Enter Emp Id : ');
    const empname = prompt('Enter Emp name : ');
    const email = prompt('Enter Email : ');
    const salary = prompt('Enter salary : ');
    const result = await col1.insertOne({ empid: empid, empname: empname, email: email, salary: salary });
    console.log("Document inserted successfully", result);
}
InsertDB();

// const empid = prompt('Enter Emp Id : ');
// const empname = prompt('Enter Emp name : ');
// const email = prompt('Enter Email : ');
// const salary = prompt('Enter salary : ');
// console.log(empid, '\n', empname, '\n', email, '\n', salary);
