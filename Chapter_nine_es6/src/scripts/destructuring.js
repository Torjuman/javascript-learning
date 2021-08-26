
let person = {
    nameOfUser1: 'Torjuman Rimon',
    emailOfUser1: 'torjuman@gmail.com',
}

// Destructuring Of an Object
let {nameOfUser1, emailOfUser1} = person

console.log(nameOfUser1, emailOfUser1)

let person2 = {
    name: 'Sakib Al Hassan',
    email: 'sakibal@gmail.com',
    address: {
        city: 'Chittagong',
        country: 'Bangladesh'
    },
}

let {name, email, address:{city, country}} = person2

console.log(name, email, city, country)
