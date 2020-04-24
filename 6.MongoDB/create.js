const mongoClient = require("mongodb").MongoClient;

const connectionUrl = "mongodb://localhost:27017";
const dbName = "bigcatzoo";

mongoClient.connect(connectionUrl, { useUnifiedTopology: true }, (error, client) => {
    if (error) {
        throw "Error connecting to mongodb " + error;
    }
    const bigCatsDB = client.db(dbName);

    const cats = bigCatsDB.collection("cats");

    buildings.insertOne({ "type": "Leon" }, (error, insertedCat) => {
        console.log(insertedCat.insertedCount);
        client.close();
    });
});