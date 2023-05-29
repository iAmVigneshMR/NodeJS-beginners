const prompt = require('prompt-sync')();
// const { mamsMongoAtlasUrl, myMongoAtlasUrl, mongoCompaseLocalUrl } = require('./common');

async function UpdateDB() {
    const client = await require('mongodb').MongoClient.connect(`mongodb://localhost:27017/DayThreeNodeJS`);
    console.log('connected',
        await client.db().collection('nodeemp').updateOne(
            { empid: prompt('Enter Emp Id : ') },
            {
                $set: {
                    empname: prompt('Enter Emp name : '),
                    email: prompt('Enter Email : '),
                    salary: prompt('Enter salary : ')
                }
            }), "Document updated successfully");
    client.close();
}
UpdateDB();