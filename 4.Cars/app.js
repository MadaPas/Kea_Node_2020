const express = require("express");
const app = express();

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }));
 
// parse application/json
app.use(express.json());


// let cars = [
//     { id: 1, brand: "Mercedes" }, 
//     { id: 2, brand: "BMW" }
// ];
// let currentId = 2;

let cars = require("./data");

app.get("/", (req, res) => {
    return res.send({ response: "Car API version 0.0.1" });
});

app.get("/cars", (req, res) => {
    return res.send({ response: cars })
});

app.get("/cars/:id", (req, res) => {
    const car = cars.find(car => car.id === Number(req.params.id));
    return res.send({ response: car });
});

app.post("/cars", (req, res) => {
    let newCar = req.body;
    newCar.id = ++currentId;
    cars.push(newCar);

    return res.send({ response: {} });
});




app.put('/cars/:id', (req, res) => {

    // let id = req.params.id;
    // let car = cars.filter(car => {
    //   return car.id == id;
    // })[1];
  
    // const index = cars.indexOf(car);
  
    // let keys = Object.keys(req.body);
  
    // keys.forEach(key => {
    //   car[key] = req.body[key];
    // });
  
    // cars[index] = car;
  
    // // response.json({ message: `Car number ${id} is updated.`});
    // response.json(cars[index]);
    let id = Number(req.params.id);

    const foundIndex = cars.findIndex(car => 
        car.id === id)
    
    const updatedCar = { ...cars[foundIndex], ...req.body }; //create a new object qith all the key values 
    cars[foundIndex] = updatedCar;

    delete req.body.id;

    cars[foundIndex] = updatedCar;

    return res.send({ response: cars });
    // return res.send({response: cars});

  });






app.delete("/cars/:id", (req, res) => {



    let id = Number(req.params.id);

    cars = cars.filter(car => {
      return car.id !== id;
    });

    // const index = cars.indexOf(car);
    // cars.splice(index, 1);
    // response.json({ message: `Car number  ${id} is deleted.`});

    return res.send({response: cars});


  });


const port = process.env.PORT ? process.env.PORT : 3000;

const server = app.listen(port, (error) => {
    if (error) {
        console.log("Error starting the server");
    }
    console.log("This server is running on port", server.address().port);
});