
// Normal Function
function add(a, b, c) {
    return a + b + c
}

console.log(add(75, 20, 10))

// Curring function is kind of design pattern. Nothing else.
// It will break the function arguments into multipule function return.

function myCurring(a) {

    return function (b) {

        return function (c) {
            
            return a + b + c

        }
    }
}

console.log(myCurring(15)(12)(32))
