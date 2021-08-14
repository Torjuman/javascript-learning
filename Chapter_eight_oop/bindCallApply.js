
function myTest() {

    // In a pure function 'this' will be refereed to window object.
    console.log(this)

    // If we use 'this' key word it will be associated with window and return undifined.
    // If we try to plus undifined with undifined it will return NaN
    console.log(this.a + this.b)

}

myTest()

function myTest2() {

    console.log(this)
    console.log(this.a + this.b)

}
// If we call the function with 'call' method we can provide an object out side of pure function.
myTest2.call({})

// Now we can provide properties in the object
myTest2.call({a: 15, b: 12})

function myTest3(c, d) {

    console.log(this)
    console.log(this.a + this.b + c + d)

}

// We can provide arguments as well.
myTest3.call({a: 15, b: 12}, 25, 32)

// We can use apply instead of 'call' method.
// It will work like 'call' but it take Array in arguments.
myTest3.apply({a: 15, b: 12}, [2, 3])
