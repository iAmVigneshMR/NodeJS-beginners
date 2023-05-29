// const { mamsMongoAtlasUrl, myMongoAtlasUrl, mongoCompaseLocalUrl } = require('./common');

async function ReadDB() {
    const client = await require('mongodb').MongoClient.connect(`mongodb://localhost:27017/DayThreeNodeJS`);
    // const client = await require('mongodb').MongoClient.connect(`mongodb+srv://vignesh:test123@cluster0.3vhy2p2.mongodb.net/OptimizeCRUD`);
    console.log('connected',
        await client.db().collection('nodeemp').find({}).toArray(), "Document inserted successfully");
    client.close();
}
ReadDB();