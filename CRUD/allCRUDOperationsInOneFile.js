const prompt = require('prompt-sync')();
const MongoClient = require('mongodb').MongoClient;
const { mamsMongoAtlasUrl, myMongoAtlasUrl, mongoCompaseLocalUrl } = require('./common');

const commonPrompt = (delOrOther) => {
    let returnVal = {};
    if (delOrOther === 'delete') {
        const empid = prompt('Enter Emp Id : ');
        returnVal = { empid };
    } else {
        const empid = prompt('Enter Emp Id : ');
        const empname = prompt('Enter Emp name : ');
        const email = prompt('Enter Email : ');
        const salary = prompt('Enter salary : ');
        returnVal = { empid, empname, email, salary };
    }
    return returnVal;
};

const CheckWhichToCall = async () => {
    const url = mongoCompaseLocalUrl;
    // const url = myMongoAtlasUrl;
    // const url = mamsMongoAtlasUrl;
    const client = await MongoClient.connect(url);
    const db = client.db();
    console.log('connected');
    const col1 = db.collection('nodeemp');
    console.log(`which opration do you want to execute. \nType 1.Insert, 2.Update, 3.Read, 4.Delete`);
    const operationNo = prompt('Enter operation Number : ');
    if (parseFloat(operationNo) === 1) {
        insertFunc(col1);
    }
    else if (parseFloat(operationNo) === 2) {
        updateFunc(col1);
    }
    else if (parseFloat(operationNo) === 3) {
        readFunc(col1);
    }
    else if (parseFloat(operationNo) === 4) {
        deleteFunc(col1);
    }
    else console.log('Enter a valid operation Number');
}

const insertFunc = async (col1) => {
    const { empid, empname, email, salary } = await commonPrompt('notDelete');
    // console.log({ empid, empname, email, salary })
    const result = await col1.insertOne({ empid: empid, empname: empname, email: email, salary: salary });
    console.log("Document inserted successfully", result);
};

const updateFunc = async (col1) => {
    const { empid, empname, email, salary } = await commonPrompt('notDelete');
    const result = await col1.updateOne(
        { empid: empid },
        {
            $set: {
                empname: empname,
                email: email,
                salary: salary
            }
        });
    console.log("Document updated successfully", result);
}
const readFunc = async (col1) => {
    const data = await col1.find({}).toArray();
    console.log("Document read successfully", data);
}
const deleteFunc = async (col1) => {
    const { empid } = await commonPrompt('delete');
    const result = await col1.deleteOne({ empid: empid });
    console.log("Document deleted successfully", result);
}

CheckWhichToCall();