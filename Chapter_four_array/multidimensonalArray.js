var arr = [
    [2, 4, 23, 76, 4],
    [3, 6, 21, 78],
    [44, 98, 89, 32, 61, 8]
]
console.log(arr.length)
console.log(arr[0].length)
console.log(arr[1].length)
console.log(arr[2].length)

for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
        console.log('Element ' + i + ': ' + arr[i][j])
    }
}