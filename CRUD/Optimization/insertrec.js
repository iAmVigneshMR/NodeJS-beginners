const prompt = require('prompt-sync')();
// const { mamsMongoAtlasUrl, myMongoAtlasUrl, mongoCompaseLocalUrl } = require('./common');

async function InsertDB() {
    const client = await require('mongodb').MongoClient.connect(`mongodb://localhost:27017/DayThreeNodeJS`);
    // const client = await require('mongodb').MongoClient.connect(`mongodb+srv://vignesh:test123@cluster0.3vhy2p2.mongodb.net/OptimizeCRUD`);
    console.log('connected',
        await client.db().collection('nodeemp').insertOne({
            empid: prompt('Enter Emp Id : '), empname: prompt('Enter Emp name : '), email: prompt('Enter Email : '), salary: prompt('Enter salary : ')
        }), "Document inserted successfully");
    client.close();
}
InsertDB();