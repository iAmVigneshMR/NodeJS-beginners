const MongoClient = require('mongodb').MongoClient;

let dataBase;

async function getDB() {
    try {
        dataBase = await MongoClient.connect(`mongodb://localhost:27017/DayFourNodeJS`);
        console.log('Database connected');
    } catch (error) {
        console.log(error);
    }
    return dataBase;
}

module.exports = { getDB };