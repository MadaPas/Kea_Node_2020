var express = require("express");
//instanciating
var app = express();

//or shorter version
//var app = require("express")();

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







var weekdays = new Array(7);
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


// app.listen(3000);

app.listen(3000, error => {
    if (error) {
        console.log("Error running the server", error);
    }
    console.log("Server is running on port ", 3000);
});



