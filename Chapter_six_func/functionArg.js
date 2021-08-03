
var a = 20
var b = 5

function  add (a, b) {
    console.log(a + b)
}
add(a, b)

function  sub (a, b) {
    console.log(a - b)
}
sub(a, b)

function  multiply (a, b) {
    console.log(a * b)
}
multiply(a, b)

function  division (a, b) {
    console.log(a / b)
}
division(a, b)

var arr = [1, 3, 5, 7, 9, 11]

function sumOfArray (arr) {
    var sum = 0
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    console.log(sum)
}
sumOfArray(arr)
