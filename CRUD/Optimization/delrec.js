const prompt = require('prompt-sync')();
// const { mamsMongoAtlasUrl, myMongoAtlasUrl, mongoCompaseLocalUrl } = require('./common');

async function DeleteDB() {
    const client = await require('mongodb').MongoClient.connect(`mongodb://localhost:27017/DayThreeNodeJS`);
    console.log('connected',
        await client.db().collection('nodeemp').deleteOne({
            empid: prompt('Enter Emp Id : ')
        }), 'Document Deleted Successfully');
    client.close();
}
DeleteDB();