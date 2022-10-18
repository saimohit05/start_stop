const { MongoClient} = require('mongodb');
const url = 'mongodb://localhost:27017';
//'mongodb://adminuser:123456@localhost:2017/mydb'
//'mongodb://10.75.1.43:27017'

const database = 'e-comm';

const client = new MongoClient(url); // connection

async function dbConnect()
{
    let result = await client.connect();
    let db = result.db(database);
    return db.collection('products');
}

module.exports = dbConnect;