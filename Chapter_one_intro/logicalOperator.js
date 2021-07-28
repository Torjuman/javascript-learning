// A && B
// true && true = true
// true && false = false
// false && true = false
// false && false = false

var a = 30
var b = 20
var c = 40
var d = 10

if (a > b && c > d) {
    console.log('a is greater than b and  c is greater than d.')
} else {
    console.log('At least one condition should be true')
}