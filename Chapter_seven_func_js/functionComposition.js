
var a = 5
var b = 6

function addition(a, b) {
    return a + b
}

function multiplyByTen(n) {
    return n * 10
}

function myPrint(input) {
    console.log(input)
}

myPrint(multiplyByTen(addition(a, b)))
