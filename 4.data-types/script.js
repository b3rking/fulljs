// primitive method

// in js primitive data type are treated as object

// they have method

// exemple

let str = "hello";

console.log(str.toUpperCase()); // returns HELLO

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

let mi = 1e9; // 1 and 9 zero

console.log(mi);

// small number

let minus = 1e-6;

console.log(minus);

// and some numbers method

// =============================================
//                  STR
// =============================================

// string length

let word = "learning javascript";
console.log(word.length);

// get one caracter

console.log(word[5]);
// or
console.log(word.charAt(7));

// some method of str

// includes, startsWith, endsWith

// ===============================================
//                  ARRAYS
// ===============================================

// declaration

let arr = new Array();
let array = [];

let fruits = ["orange", "citron", "ananas"];

// get one item
fruits[1];
// change one item
fruits[1] = "avocat";

console.log(fruits);

// get the length
fruits.length;

// loop on array
for (let fruit of fruits) {
    console.log(fruit);
}

// multidimensionals arrays

let matrix = [
    [0, 2, 3],
    [3, 5, 1],
    [4, 0, 9],
];

console.log(matrix);

for (let row of matrix) {
    console.log(row + "\n");
}

// array method

// delete an array element using delete

let words = ["play", "study", "kiss", "pray", "travel", "dance"];

// delete words[0];

console.log(words[1]);

// =============
// using splice
// =============

// delete item
// parameters => first the index, and second the number of element
words.splice(1, 1)

// delete and replace
words.splice(2, 3, 'php', 'js', 'python')

// add element without deleting existing just set the number of element to delete to zero
words.splice(2, 0, 'laravel', 'reactjs', 'react native', 'nodejs', 'nextjs')

// using a negative index means starting from the end
words.splice(-0, 0, 'added to the end')

console.log(words);

// ==================
// SLICE
// ==================

// to copy an array take the starting index and the ending index
console.log(words.slice(0, words.length))

// ========================
// iterate with forEach
// ========================

/*
arr.forEach((item, index, array) => {
    faire des chose avec l'element
})
*/

words.forEach((el, index, arr) => {
    arr[index] = el+ 'here the mod!'
    // console.log(`${el} is at position ${index+1}`);
})

console.log(words);

// ====================================
// search in the table with
// indexOf, lastIndexOf, includes
// ====================================

console.log(words.indexOf('playhere the mod!'))
console.log(words.lastIndexOf('playhere the mod!'))
console.log(words.includes('playhere the mod!'))

// more js array method!

// find, filter, etc...