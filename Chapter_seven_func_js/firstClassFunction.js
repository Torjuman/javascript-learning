
// First class function has Four criteria.
// A function can be stored in a variable.

function addition (a, b) {
    return a + b
}

var sum = addition
console.log(sum(5, 2))

// A function can be stored in an Array.

var arr = []
arr.push(addition)
console.log(arr)
console.log(arr[0](25, 5))

// A function can be stored in an Object.

var obj = {}
obj.sum = addition
console.log(obj)
console.log(obj.sum(65, 25))

// We can create a function when we need

setTimeout(function () {
    console.log('I will be called after 2 second')
}, 2000)
