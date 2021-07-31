
var arr = [9, 4, 6, 32, 8, 1]

// Touch every input in an Array by Traversing
for (var i = 0; i < arr.length; i++) {
    console.log(arr[i])
}

// Sum of an Array by Traversing
var sum = 0
for (var i = 0; i < arr.length; i++) {
    sum += arr[i]
}
console.log('Sum of an Array = ' + sum)

// Print even number from an Array
for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
        console.log(arr[i])
    }
}
