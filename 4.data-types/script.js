// primitive method

// in js primitive data type are treated as object

// they have method 

// exemple

let str = "hello"

console.log(str.toUpperCase()) // returns HELLO

// null and undefined doesn't have any method



// =============================================
//                  NUMBERS
// =============================================


// ways to write numbers

let billion = 1000000000;

// use underscore as separator

let milliard = 1_000_000_000;

console.log(billion, milliard);

// using "e" for the number of zero

let mi = 1e9    // 1 and 9 zero

console.log(mi);

// small number

let minus = 1e-6

console.log(minus);

// and some numbers method


// =============================================
//                  STR
// =============================================


// string length

let word = "learning javascript"
console.log(word.length);

// get one caracter

console.log(word[5])
// or
console.log(word.charAt(7));

// some method of str

// includes, startsWith, endsWith