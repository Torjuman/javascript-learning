
var arr = [4, 2, 1]

// map method will return an array but it will not modify existing array

var stt = arr.map(function (value, index, arr) {
    // console.log(value, index, arr)
    // arr[index] = value + 5
    return value + 10
})

console.log(arr)
console.log(stt)

// Implement my own map function

var arr2 = [6, 4, 2]

function myMap(arr, cb) {

    var newArr = []
    for (var i = 0; i < arr.length; i++) {
        var temp = cb(arr[i], i, arr)
        newArr.push(temp)
    }
    return newArr
}

var stt2 = myMap(arr2, function (value) {
    return value * value
})
console.log(arr2)
console.log(stt2)
