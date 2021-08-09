
var arr = [12, 3, 2, 5, 6, 1, -2, 0]

// If there is a single element doesn't meet the condition it will return false
var res1 = arr.every(function(value) {
    return value % 2 === 0
})
console.log(res1)

var res2 = arr.every(function(value) {
    return value >= -2
})
console.log(res2)

// If there is a single element meet the condition it will return true. And it is opt to every method.

var res3 = arr.some(function(value) {
    return value > 20
})
console.log(res3)

var res4 = arr.some(function(value) {
    return value % 2 === 1
})
console.log(res4)
