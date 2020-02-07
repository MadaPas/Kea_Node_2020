// --------------------------------------
// Objects
// --------------------------------------
// Exercise 1 - Retrieve value from object by key

var myObj = {"message": "Hello, earthling! I bring peace."};

// Log the message 
console.log(myObj.message)  //dot notation
console.log(myObj["message"])  //square notation or nracket notation

// --------------------------------------
// Exercise 2 - Defining an object. 

// Create an object that has your name and age. 
var me = {name: "Madalina", age: 20};
//console.log(me.name, " ", me.age);
// --------------------------------------
// Exercise 3 - Add a property 

var stackOverflow = {};

// make a rule called isAllowed and let the value be true
stackOverflow.isAllowed = true;

// --------------------------------------
// Exercise 4 - Remove a property 

var thisSong = {"description": "The best song in the world."}

// remove the property "description" and add a property called "about" that should say "Just a tribute." 

delete thisSong.description;

//thisSong ["about"] = "Just a tribute";
thisSong.about = "Just a tribute";
console.log(thisSong);


// --------------------------------------
//array
var fruits = [1, "banana", {key: "value"}];
