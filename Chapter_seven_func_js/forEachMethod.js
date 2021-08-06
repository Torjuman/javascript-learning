
var arr = [7, 5, 3, 1]

console.log(arr)

var st = arr.forEach(function (value, index, array) {
    // console.log(value, index, array)
    array[index] = value * 5
})

// It will return a new Array
console.log(arr)

// Implement my own forEach function

function myForEach(arr, cb) {
    for (var i = 0; i < arr.length; i++) {
        // This code is responsible for value, index, array
        cb(arr[i], i, arr)
    }
}

var arr2 = [5, 3, 9]
myForEach(arr2, function (value, index, array) {
    console.log(value, index, array)
})
