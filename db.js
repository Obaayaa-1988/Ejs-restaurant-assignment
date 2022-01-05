const mongoClient = require('mongodb').MongoClient

const url = "mongodb://127.0.0.1:27017"

let client;

const dbConnect = async () => {
    client = await mongoClient.connect(url, {
        useNewUrlParser : true,
        useUnifiedTopology: true
    })
}

const getConnect = (name) => {
    const database = client.db(name)
    return database
}

module.exports = {
    dbConnect,
    getConnect,
}










/*

//requiring mongodb server
const mongoClient = require('mongodb').MongoClient


let client;
//conneting to (mongodb server) syntax localhost to connect to mongo db server default server
const dbConnect =  async () => {
    client = await mongoClient.connect('mongodb://localhost:27017', {
       useNewUrlParser: true,
       useUnifiedTopology: true
    })
}
//connecting/creating  database name after the db connection syntax(open database name)
const getConnect = (name) => {
    const database = client.db(name)
    return database;
}

//exporting into the express server
module.exports = {
    dbConnect,
    getConnect,

}*/