
// Turn a constructor function to class

// Constructor function

function RectangleFunc(width, height) {
    this.width = width
    this.height = height

    RectangleFunc.prototype.draw = function () {
        console.log('Drawing from RecangleFunc....')
    }
}

let rect1 = new RectangleFunc(45, 65)
console.log(rect1)

// Class

class RectangleClass {
    constructor(width, height) {
        this.width = width
        this.height = height
    }

    draw() {
        console.log('Drawing')
    }
}

let rect2 = new RectangleClass(65, 87)
console.log(rect2)

// Behinde the scene this class turn into constructor function.
console.log(typeof rect2)
