
// Higher oreder function has all the functionality that a first class has and it has total 6 facilites.
// We can pass a function as argument.

var a = 23
var b = 21

function addition(a, b) {
    return a + b
}

function maniupulate(a, b, func) {
    var m = func(a, b)
    function multiply() {
        return  a * b * m
    }
    
    return multiply
    
}

var newMulti = maniupulate(a, b, addition)
console.log(newMulti)
console.log(newMulti())

// We can return a function in an another function.

function divide(a, b, func) {

    // We can also make an anonymous function.
    return function () {
        var s = func(a, b)
        var c = 5
        return s / c
    }

}

var newDivide = divide(a, b, addition)
console.log(newDivide)
console.log(newDivide())
