
function addAll () {
    var sum = 0
    for (var i = 0; i < arguments.length; i++) {
        sum += arguments[i]
    }
    console.log(sum)
}

addAll(1, 2 ,3)
addAll(9, 8, 7)

function sumAll () {
    var sum = 0
    for (var i = 0; i < arguments.length; i++) {
        sum += arguments[i]
    }
    return sum
}

var sumOfMyNum = sumAll(5, 3, 2)
console.log(sumOfMyNum)
