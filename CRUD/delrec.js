const prompt = require('prompt-sync')();
const MongoClient = require('mongodb').MongoClient;
const { mamsMongoAtlasUrl, myMongoAtlasUrl, mongoCompaseLocalUrl } = require('./common');

async function DeleteDB() {
    const url = mongoCompaseLocalUrl;
    // const url = myMongoAtlasUrl;
    // const url = mamsMongoAtlasUrl;
    const client = await MongoClient.connect(url);
    const db = client.db();
    console.log('connected');
    const col1 = db.collection('nodeemp');
    const empid = prompt('Enter Emp Id : ');
    const result = await col1.deleteOne({ empid: empid });
    console.log("Document deleted successfully", result);
}
DeleteDB();