
function square(n) {
    return n * n
}

console.log(square())
// if we don't pass any argument it will assign undefined.
// And undefined * undefined = NaN means not a number.

console.log(square(5))

// We can set a default parameter. But in old style.
function square2(n) {
    // First way
    n =  n || 1
    return n * n
}
console.log(square2())
console.log(square2(3))

function square3(n) {
    // Second way
    if (!n) {
        n = 0
    }
    return n * n
}

console.log(square3())
console.log(square3(4))

// Now in ES6 style
function square4(n = 1) {
    return n * n
}

console.log(square4())
console.log(square4(7))

// But there is also a problem.
// When we will assign argument as null or undefined it won't work.

function greet(name = 'Torjuman Rimon', msg = 'Hello') {

    // console.log(name.length)
    console.log(`${msg}! ${name}`)

}
greet()
greet(null, 'Welcome')
