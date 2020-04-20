// test shows if the pattern appears in the string
// i flag  = case insensitive
const myRegEx = /Hello/i
const result = myRegEx.test("Hello world")
//console.log(result)

// Pipe = or
const petString = "Madalina has a doggo."
const petRegEx = /dog|cat|bird|turtle|fish/
//console.log(petRegEx.test(petString))

// Match
const extractString = "Extract the word 'cow' from the string"
const cowRegex = /cow/
//console.log(extractString.match(cowRegex))

// The G flag = global flag
//console.log("Repeat, Repeat, repeat".match(/Repeat/ig))

let twinkleStarSong = "Twinkle, twinkle, little star"
//console.log(twinkleStar.match(/twinkle/ig))

// Wildcards
const humString = "That's humbug!"
const hugString = "I need a hug."
const huRegex = /hu./
// console.log(humString.match(huRegex))
// console.log(hugString.match(huRegex))

const funString = "He's a fun 'un."
//console.log(funString.match(/.un/g))

// // Wildcard II - one of the following letters
// console.log("I found big bugs in my bag.".match(/b[aiu]g/g)) // can crate range with []
// console.log("I found big bugs in my bag.".match(/[aeiouy]/ig))

//
// console.log("I found big bugs in my bag.".match(/b[^ai]g/g)) // can crate range with []


// Range
// console.log("1sdfdf23343d46adfbc45dhd6".match(/[0-9]/g)) // all the numbers from 0 to 9
// console.log("1sdfdf23343d46adfbc45dhd6".match(/[a-z]/ig))
//alphanumeric
// console.log("1sdfdf23343d46adfbc45dhd6".match(/[0-9a-z]/g))

//multiple matches
console.log("go gooo gooooo goooooo".match(/go*/ig));
