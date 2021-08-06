
// Callback function are use to reduce code redundancy. And we can first create callback and then implemenet this functions.

var a = 75
var b = 5

function myCallback(a, b, callback) {

    var result = callback(a, b)
    return result
}

var r1 = myCallback(a, b, addition)
console.log(r1)

// After pass function argument, we create the function
function addition(a, b) {
    return a + b
}

// Create callback in argument
var r2 = myCallback(a, b, function substraction() {
    return a - b
})
console.log(r2)

// Without naming any function
var r3 = myCallback(a, b, function() {
    return a * b
})
console.log(r3)

var r4 = myCallback(a, b, function() {
    return a / b
})
console.log(r4)

// Square by callback
var r5 = myCallback(a, b, function() {
    var sq = a * b
    return sq * sq
})
console.log(r5)

// Qubic by callback
var r6 = myCallback(a, b, function() {
    var qb = a * b
    return qb * qb * qb
})
console.log(r6)
