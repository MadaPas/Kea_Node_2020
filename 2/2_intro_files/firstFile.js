var name = "Jakub";
var age = 123;

console.log("Hello,", name);

console.log(name, "is", age, "years old! WOW")

var anotherName = 'Elf';



/////////////////////////////////////////////////
const app = require("express")(); 


app.get("/", (req, res) => {
    res.send({ message: "Hello there" });
});

// define something on the path /aboutMe that returns a JSON representation of you

app.get("/aboutMe", (req, res) => {
    const me = {
        name: "Radu"
    };
    res.send(me);
});

// define something on the path /aboutThisWebsite 
// that returns a JSON representation of the website
app.get("/aboutThisWebsite", (req, res) => {
    const aboutThisWebsite = {
        name: "thiswebsiteIdunno"
    };
    //if (aboutThisWebsite) {
        res.send(aboutThisWebsite);
    // }
    // res.send("Sorry, no info about this website.");
    // this here won't run
});




app.listen(3000, error => {
    if (error) {
        console.log(error);
    }
    console.log("Server is running on port", 3000);
});
