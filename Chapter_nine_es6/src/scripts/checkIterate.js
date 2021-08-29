
let obj = {
    a: 10,
    b: 20,
}

let arr = [
    1, 2, 3
]

function isIterable(obj) {
    return typeof obj[Symbol.iterator] === 'function'
}

console.log(isIterable({}))
console.log(isIterable(obj)) // That's mean Object is not iterable

console.log(isIterable([]))
console.log(isIterable(arr)) // Array is iterable

console.log(isIterable('text')) // String is iterable

console.log(isIterable(new Number(55))) // Number is not iterable

console.log(isIterable(new Map()))
console.log(isIterable(new Set())) // Set and Map is iterable
