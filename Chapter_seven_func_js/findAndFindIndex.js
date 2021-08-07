
var arr = [1, 2, 3, 4, 5, 9]

var result = arr.find(function(value) {
    return value === 9
})

console.log(result)

// Implement my own find function

var arr2 = [12, 33, 54, 76, 87, 54, 87, 54]

function myFind(arr, cb) {

    for (var i = 0; i < arr.length; i++) {
        if (cb(arr[i])) {
            return arr[i]
        }
    }

}

var result1 = myFind(arr2, function (value) {
    return value === 54
})
console.log(result1)

var result2 = myFind(arr2, function (value) {
    return value === 5
})
console.log(result2)

// FindIndex method

var arr3 = [7, 5, 3, 1]

var result3 = arr3.findIndex(function (index) {
    return index === 7
})
console.log(result3)

// Implement findIndex function

var arr4 = [6, 4, 2, 9, 8, 7]

function myFindIndex(arr, cb) {

    for (var i = 0; i < arr.length; i++) {
        if (cb(arr[i])) {
            return i
        }
    }

}

var result4 = myFindIndex(arr4, function (value) {
    return value === 7
})
console.log(result4)
