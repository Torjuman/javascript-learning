
var arr = [4, 2, 1]

// map method will return an array but it will not modify existing array

arr.map(function (value, index, arr) {
    console.log(value, index, arr)
    arr[index] = value + 5
})

console.log(arr)
