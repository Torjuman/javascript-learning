
function sayHi(n) {
    
    if (n === 0) {
        return
    } else {
        console.log('I am calling from sayHi function.')
    }

    // Every time it will call it would be minus 1 to stop the function from being infinity.
    sayHi(n - 1)
}

sayHi(10)

// Sum number useing recursive

function sum(n) {

    if (n === 1) {
        return 1
    }

    return  n + sum(n - 1)
}

console.log(sum(10))

// Factorial number useing recursive number

function factNum(n) {
    if (n === 0) {
        return 1
    }

    return n * factNum(n - 1)
}

console.log(factNum(4))

var arr = [1, 2, 3, 4, 5]

function sumOfArray(arr, lastIndex) {

    if (lastIndex < 0) {
        return 0
    }

    return arr[lastIndex] + sumOfArray(arr, lastIndex - 1)
}

console.log(sumOfArray(arr, arr.length - 1))
