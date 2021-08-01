var arr = [5, 6, 2, 77, 10, 23, 78]
var find = 10
var isFound = false

for (var i = 0; i < arr.length; i++) {
    if (arr[i] === find) {
        console.log('Data is found at ' + i + 'th number index.')
        isFound = true
        break;
    }
}

if (!isFound) {
    console.log('Data is not found.')
}
