
// Define a function which will work like class.
// It will be defined in factory pattern.
// It will reduce code duplication and we can use this function as much we want.
// It can be maintained Object Oriented Programming theory.

function createRectangle(width, height) {
    return {
        width: width,
        height: height,

        printF: function () {
            console.log(this)

            // To get the properties value from this function we don't have to use 'this' key word.
            console.log('My width is ' + width)
            console.log('My height is ' + height)

            // But to call another function from this function, we have to add 'this' key word before calling the function.
            this.draw()
        },

        draw: function () {
            console.log('I am from draw function.')
        },
    }
}

var rect1 = createRectangle(12, 10)
rect1.printF()

var rect2 = createRectangle(15, 8)
rect2.printF()

var rect3 = createRectangle(20, 7)
rect3.printF()
