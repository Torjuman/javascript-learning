
var arr = [2, 3, 5, 8, 9]

var newFilter = arr.filter(function (value) {
    return value % 2 === 1
})

console.log(arr)
console.log(newFilter)

// Implement my own filter function

var arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9]

function myFilter(arr, cb) {

    var newArr = []
    for (var i = 0; i < arr.length; i++) {
        if (cb(arr[i], i, arr)) {
            newArr.push(arr[i])
        }
    }
    return newArr
}

console.log(myFilter(arr2, function (value) {
    return value % 2 === 0
}))
console.log(myFilter(arr2, function (value) {
    return value > 3
}))
console.log(myFilter(arr2, function (value) {
    return value < 7
}))
