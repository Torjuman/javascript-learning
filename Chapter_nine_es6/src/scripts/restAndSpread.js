
function add(...rest) {
    // when we use '...' in fornt of a parameter it will become rest operetor.
    // And it will make all arguments which is passed to an Array.
    console.log(rest.reduce((a, b) => a + b))
}
add(1, 2, 5)

let obj = {
    a: 10,
    b: 20,
    c: 30,
    d: 40,
}

let obj2 = obj
obj2.e = function () {
    console.log('Hello')
}

console.log(obj)
console.log(obj2)
// We can see if we assign any object to other object it will change the one which is assigned.
// For that reason we need to use 'Spread Operetor' means '...'

let obj3 = {
    x: 60,
    y: 70,
}

let obj4 = {
    ...obj3
}

obj4.z = 80

console.log(obj3)
console.log(obj4)
