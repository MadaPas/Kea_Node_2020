const express = require("express");
const app = express();

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }));
 
// parse application/json
app.use(express.json());

app.use(express.static('public'));
app.use(express.static('videos'));

// SSR - Server Side Rendering
// 1. Read the html files as strings [success criteria you can outside/afterwards console log the string]
// 2. concatonate and serve the strings (At once!)

const fs = require('fs');


const navbar = fs.readFileSync("public/navbar/navbar.html", "utf8");
const footer = fs.readFileSync("public/footer/footer.html", "utf8");

const frontPage = fs.readFileSync("public/frontpage/frontpage.html", "utf8");
const playerPage = fs.readFileSync("public/player/player.html", "utf8");

app.get("/", (req, res) => {
   return res.send(navbar + frontPage + footer);
});
// app.get("/", (req, res) => {
//     return res.sendFile(__dirname + "/public/frontpage/frontpage.html");
// });
app.get("/player/:videoId", (req, res) => {
    return res.send(navbar + playerPage + footer);
 });
// app.get("/player/:videoId", (req, res) => {
//     return res.sendFile(__dirname + "/public/player/player.html");
// });

// import routes
const videosRoute = require("./routes/videos")

// setup routes
app.use(videosRoute)


const port = process.env.PORT ? process.env.PORT : 3000;

const server = app.listen(port, (error) => {
    if (error) {
        console.log("Error starting the server");
    }
    console.log("This server is running on port", server.address().port);
});
