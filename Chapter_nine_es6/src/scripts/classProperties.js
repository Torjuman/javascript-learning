
class RectangleClass {
    constructor(width, height) {
        this.width = width
        this.height = height
        // If we need instance insted of proto we need to declar here
        this.another = function () {
            console.log('Another function....')
        }
    }

    // We can define any properties here without using 'this' key word
    name = 'Torjuman Rimon'

    // All normal function define here it will go to the proto
    draw() {
        console.log('Drawing')
    }

    // We can  make any function in instance by using function expresion
    testOne = function () {
        console.log('testOne function....')
    }
}

let rect2 = new RectangleClass(65, 87)
console.log(rect2)

// Behinde the scene this class turn into constructor function.
console.log(typeof rect2)
