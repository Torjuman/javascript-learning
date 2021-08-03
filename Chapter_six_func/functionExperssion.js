
var a = 54
var b = 43

var addition = function (a, b) {
    return a + b
}

var storeAdd = addition(a, b)
console.log('The addition of ' + a + ' and ' + b + ' is = ' + storeAdd)

var substraction = function (a, b) {
    return a - b
}

var storeSub = substraction(a, b)
console.log('The substraction of ' + a + ' and ' + b + ' is = ' + storeSub)

setTimeout(function () {
    console.log('I will call after 5 second...')
}, 5000)
