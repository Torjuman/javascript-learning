
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

var sum = arr.reduce(function (preV, currV) {
    return preV + currV
}, 100)

console.log(sum)

// Implement own reduce function

var arr2 = [75, 7, 2, 3, 45, 6, 95, 9]

function myReduce(arr, cb, acc) {

    for (var i = 0; i < arr.length; i++) {
        acc = cb(acc, arr[i])
    }
    return acc
}

var sum2 = myReduce(arr2, function(preV, curV) {
    return preV + curV
}, arr2[0])
console.log(sum2)

var max = myReduce(arr2, function(preV, curV) {
    return Math.max(preV, curV)
}, arr2[0])
console.log(max)

var min = myReduce(arr2, function(preV, curV) {
    return Math.min(preV, curV)
}, arr2[0])
console.log(min)
