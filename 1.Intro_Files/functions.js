//hoisting
//console.log(addition(5, 23));

// test = "this is a test";
// var test;

//const test;

//let test;


function addition (a, b) {
    return a + b;
}

// var sum = addition(2, 6);

// console.log(sum);
// console.log(addition(2, 6));

function introduce () {
    console.log("Nice to meet you!");
}

function leave () {
    console.log("heeeeey-byeeeee");
}

function findPerson (whatToDoAfterFindingAPerson) {
    console.log("Spotted person!")
    whatToDoAfterFindingAPerson();
}
findPerson(introduce);

findPerson(leave);

const aboutMe = function(me) {
    console.log("My hobby is", meObject.hobby);
}
//OR
// const aboutMe = (me) => {
//     console.log("My hobby is", meObject.hobby);
// }
const meObject = {
    hobby: "Some hobby"
};
aboutMe(meObject);


const anotherExample = {
    myFavoriteFunction: function() {
        console.log("This function is my favorite in the world!");
    }
}

anotherExample.myFavoriteFunction();


//create an arrow function that is called callingLater that takes 
//the functon calling as an argument


const callingLater = {
    callingFunction: () => {
        console.log("it is calling");
    }
};

callingLater.callingFunction();


//OR
const calling = (name) => {
    return "ring ring ring to " + name;
};

const name = () => {
    return "Mada";
};

const callingLater1 = (calling, name) => {
    console.log(calling(name));
};
callingLater1(calling, "MadaPas");

//20sec assignment

function lastThing(){
    function thisIsPossibleInJavaScript() {
        console.log("A OK");
    }
    thisIsPossibleInJavaScript();
}
lastThing();