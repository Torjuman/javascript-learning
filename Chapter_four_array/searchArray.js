var arr = [5, 6, 2, 77, 10, 23, 78]
var arr2 = [5, 6, 2, 77, 23, 78]
var find = 10
var isFoundF = false
var isFoundS = false

for (var i = 0; i < arr.length; i++) {
    if (arr[i] === find) {
        console.log('Data is found at first Array at ' + i + 'th number index.')
        isFoundF = true
        break;
    }
}
for (var i = 0; i < arr2.length; i++) {
    if (arr2[i] === find) {
        console.log('Data is found at second Array at ' + i + 'th number index.')
        isFoundS = true
        break;
    }
}

if (!isFoundF) {
    console.log('Data is not found at first Array.')
}
if (!isFoundS) {
    console.log('Data is not found at second Array.')
}
