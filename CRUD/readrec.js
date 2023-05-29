const MongoClient = require('mongodb').MongoClient;
const { mamsMongoAtlasUrl, myMongoAtlasUrl, mongoCompaseLocalUrl } = require('./common');

async function ReadDB() {
    const url = mongoCompaseLocalUrl;
    // const url = myMongoAtlasUrl;
    // const url = mamsMongoAtlasUrl;
    const client = await MongoClient.connect(url);
    const db = client.db();
    console.log('connected');
    const col1 = db.collection('nodeemp');
    const data = await col1.find({}).toArray();
    console.log("Document read successfully", data);
}
ReadDB();