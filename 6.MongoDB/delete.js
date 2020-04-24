const mongoClient = require("mongodb").MongoClient;

const connectionUrl = "mongodb://localhost:27017";
const dbName = "bigcatzoo";

mongoClient.connect(connectionUrl, { useUnifiedTopology: true }, (error, client) => {
    if (error) {
        throw "Error connecting to mongodb " + error;
    }
    const bigCatsDB = client.db(dbName);

    const cats = bigCatsDB.collection("cats");

    cats.deleteOne({ species: "lion" }, (error, deletedCat) => {
        console.log(deletedCat);
        client.close();
    });
});