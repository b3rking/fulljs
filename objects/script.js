// object!

// syntax to create an object

// let user_1 = new Object()
// or
// let user = {}     // most used

let user = {
    name: 'john',
    age: 30,
}

// get object data

console.log(user.name)

// add data to an object

user.isAdmin = true

// delete data from object

// delete user.isAdmin

// using multi word keys

let cafe = {
    "name of the cafe": "5/5 cafe",
    location: "buyenzi"
}

// get the multi word key value

console.log(cafe['name of the cafe'])

// check if a key exist using "in"

console.log('name of the cafe' in cafe)

// loop through object

for (let usr in user) console.log(usr);

// cloning an object

let clone = {}

for (let key in user) {
    clone[key] = user[key]
}

console.log('clone say ' +clone.name)