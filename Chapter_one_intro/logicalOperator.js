// And (&&) operator
// A && B
// true && true = true
// true && false = false
// false && true = false
// false && false = false

var a = 30
var b = 20
var c = 40
var d = 50

if (a > b && c > d) {
    console.log('a is greater than b and  c is greater than d.')
} else {
    console.log('At least one condition should be true')
}

// Or (||) operator
// A || B
// true || true = true
// true || false = true
// false || true = true
// false || false = false

if (a > b || c > d) {
    console.log('a is greater than b and  c is greater than d.')
} else {
    console.log('Both condition are false.')
}


// Not (!) operator

var test = !(a > b)
console.log(test)

// Short Hand

var name = ''
var fullName = name || 'Torjuman Rimon'

console.log(fullName)

var isOkay = true

isOkay && console.log('Everything is Okay.')