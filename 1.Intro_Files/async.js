// Javascript is single threaded
// everything operates on the main thread

//Node has the event loop
// a Promise is syntactic sugar for callbacks


//callback hell ---> a function in a function in another function 
//--> to solve this we use promises and then()


//why use callbacks //examples of async code:
//requests over the internet 
//working with files (open, read, write..)
//databases

//we aim to write non-blocking code so we need asynchronous behaviour in the above example


//promise can be in different states
//-pending
//-fulfilled (resolved)
//-rejected
new Promise((resolve, reject) => {
        try {
            setTimeout(() => {
                resolve("Everything went well!");
            }, 4000);
        } catch {
            reject("Something went wrong!");
        }
    }).then(message => console.log(message))
    .catch(errMessage => console.log(errMessage));


//TODO
//Create a function called myPromise that returns a promise which fulfills after 5 seconds
function myPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("I kept my promise!");
        }, 5000);
    });
}

// Async/await are syntactic sugar for Promises

//METHOD 1
const arrowFunction = async () => {

    // console.log(myPromise()); --> { < pending > }

    //solved with promises
    // myPromise().then(message => {
    //     console.log(message);
    // });

    //solved with async/await
    const message = await myPromise();
    console.log(message);

}
arrowFunction();

//METHOD 2
async function callMyPromise() {
    const message = await myPromise();
    console.log(message);
}

callMyPromise();