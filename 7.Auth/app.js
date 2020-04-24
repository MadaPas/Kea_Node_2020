
const express = require("express");
const app = express();

app.use(express.json());


app.post("/signup", (req, res) => { 
    return res.send({response: req.body});
});


// import routes
const usersRoute = require("./routes/users")

// setup routes
app.use(usersRoute)



const port = process.env.PORT ? process.env.PORT : 3000;

const server = app.listen(port, (error) => {
    if (error) {
        console.log("Error starting the server");
    }
    console.log("This server is running on port", server.address().port);
});
