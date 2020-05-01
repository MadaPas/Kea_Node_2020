
const express = require("express");
const app = express();

app.use(express.json());

/* Setup Objection + Knex */

const { Model } = require('objection');
const Knex = require('knex');
const knexfile = require('./knexfile.js');

// Initialize knex
const knex = Knex(knexfile.development);

// Give the knex instance to objection
Model.knex(knex);

app.post("/signup", (req, res) => { 
    return res.send({response: req.body});
});


// import routes
const authRoute = require('./routes/auth.js');
const usersRoute = require('./routes/users.js');


// setup routes
app.use(authRoute);
app.use(usersRoute);


//demonstration route
app.get("/",  async (req, res) => {
    //get all users --> USUAL METHOD
    // knex('users').select().then(users => {
    //     return res.send({ response: users});
    // });

    //get all users --> ASYNC METHOD
    return res.send({ response: await knex('users').select() });

});


const port = process.env.PORT ? process.env.PORT : 3000;

const server = app.listen(port, (error) => {
    if (error) {
        console.log("Error starting the server");
    }
    console.log("This server is running on port", server.address().port);
});
