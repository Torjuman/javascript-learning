
// Normal function

function add(a, b) {
    return a + b
}

console.log(add(2, 5))

var sum = function (a, b) {
    return a + b
}

console.log(sum(3, 8))

// Arrow function

var addition = (a, b) => {
    return a + b
}

console.log(addition(6, 9))

// Smplify Arrow function

var sub = (a, b) => a - b

console.log(sub(9, 7))

// If there is only one parameter

var name = n => 'Torjuman Rimon'

console.log(name)
console.log(name())

// If there is no parameter

var age = () => 25

console.log(age)
console.log(age())
