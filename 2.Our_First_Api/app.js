 var express = require("express");
// //instanciating
 var app = express();


//or shorter version
// const app = require("express")();
// const faker = faker("faker");
// const request = request("request");

//path   //callback function (called back at the discretion of the server)
app.get("/", (req, res) => {
    const response = {
        message: "Hello there!"
        }
        res.send(response);
});



//Assignment one: Create an aboutMe route that sends back info about yourself.
app.get("/aboutMe", (req, res) => {
    const me = {
        name: "MadaPas"
    };
    res.send(me);
});


const weekdays = new Array(7);
weekdays[0] = "Sunday";
weekdays[1] = "Monday";
weekdays[2] = "Tuesday";
weekdays[3] = "Wednesday";
weekdays[4] = "Thursday";
weekdays[5] = "Friday";
weekdays[6] = "Saturday";




app.get("/time", (req, res) => {

    const date = new Date();
    weekday = date.getDay();
  
    res.send({
        unformatedTime: date,
        time: date.toString(),
        day: date.getDay(),
        weekday: weekdays[weekday]
    });
});
//#############################################################################################
//21.02.2020
//create a get route on /users

app.get("/users/:id", (req, res) => {
    //see this when i meake a request
    console.log(req.params);

    var users = [];    
    var user1 = {
        id: 1,
        name: "u1"
    };
    var user2 = {
        id: 2,
        name: "u2"
    };
    var user3 = {
        id: 3,
        name: "u3"
    };
    users.push(user1, user2, user3)

    const id = parseInt(req.params.id);
    const user = (users.find(u => u.id === id))

    // if(!user) {
    //     return res.send({message: 'no user dude'})
    // }
    res.send(user);

    //return res.send({ id: req.params.id });
})


//querry strings
app.get("/search", (req, res) => {
    console.log(req.query);
    res.send(req.query)
    // return res.send(req.query);
    // if (!q) {
    //     return res.send({message: 'no query'})
    // }
    return res.send(req.query);

})

    const request = require('request');

// create a get route on /google
app.get("/google", (req, res) => {
    request('http://www.google.com',  (error, response, body) => {
  console.error('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
  res.send(body);

});
});

app.get("/documentationone", (req, res) => {
    //console.log(__dirname);
    //return res.redirect("/documentationtwo")    //calls the other method 
    return res.sendFile(__dirname + "/public/documentationone.html");
});

app.get("/documentationtwo", (req, res) => {
    //console.log(__dirname);
    return res.sendFile(__dirname + "/public/documentationtwo.html")
});


// app.listen(3000);

app.listen(3000, error => {
    if (error) {
        console.log("Error running the server", error);
    }
    console.log("Server is running on port ", 3000);
});





//part variable ----> localhost/users/1
//query string -----> localhost/search?q=chair&geo=34564763



// const users = []
// for (let i=0; i<10; i++) {
//     users.push({
//         id: i,k
//         name: faker.name.findName()
//     })
// }