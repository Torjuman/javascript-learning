
// The function which has no side effect is a Pure function
var n = 5

function sqr (n) {
    return n * n
}

console.log(sqr(n))
console.log(sqr(4))
console.log(sqr(100))
console.log(sqr(65))

// But it can modify global variable.

var point = {
    x: 10,
    y: 20,
}

console.log(point)

function printPoint (point) {
    point.x = 100
    point.y = 200
    console.log('I am printing inside from print function. ' + point)
    return point
}

console.log(printPoint(point))

console.log(point)
