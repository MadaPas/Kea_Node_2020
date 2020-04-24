buildings.updateOne({ type: "pen" }, { $set: { type: "warehouse" } }, (error, data) => {
    console.log(data);
    client.close();
});



const mongoClient = require("mongodb").MongoClient;

const connectionUrl = "mongodb://localhost:27017";
const dbName = "bigcatzoo";

mongoClient.connect(connectionUrl, { useUnifiedTopology: true }, (error, client) => {
    if (error) {
        throw "Error connecting to mongodb " + error;
    }
    const bigCatsDB = client.db(dbName);

    const cats = bigCatsDB.collection("cats");

    buildings.updateOne({ type: "lion" }, { $set: { gender: "make" } }, (error, updatedCat) => {
        console.log(updatedCat);
        client.close();
    });
    
    
});