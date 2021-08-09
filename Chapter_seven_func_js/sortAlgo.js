
var arr = [2, 3, 7, -3, -4, 1, 43, 6, 76, 8, 9, 0, -8]

// Arrange the Array in accending order.
// But without a callback function it will not work perfectly when there are negative number.
arr.sort()
console.log(arr)

// Make it perfect. It wiil will work deccending order if we reverse the logic in if block.

arr.sort(function (a, b) {
    if (a > b) {
        return 1
    } else if (a < b) {
        return - 1
    } else {
        return 0
    }
})

console.log(arr)
