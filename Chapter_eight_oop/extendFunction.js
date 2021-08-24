
// Make a extend function to reduce code duplication.
function myExtends (parent, child) {
    child.prototype = Object.create(parent.prototype)
    child.prototype.constructor = child
}

function Shape(color) {
    this.color = color
}

function Square (width, color) {
    Shape.call(this, color)
    this.width = width
}

myExtends(Shape, Square)

function Circle(radius, color) {
    Shape.call(this, color)
    this.radius = radius
}

myExtends(Shape, Circle)

var sq = new Square(55, 'Green')
console.log(sq)

var cr = new Circle(24, 'Blue')
console.log(cr)
