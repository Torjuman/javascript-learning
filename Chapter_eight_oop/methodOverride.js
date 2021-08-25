
function Shape (color) {
    this.color =color
}

Shape.prototype.common = function () {
    console.log('I am a common method.')
}

function myExtends(parent, child) {
    child.prototype = Object.create(parent.prototype)
    child.prototype.constructor = child
}

function Square(width, color) {
    this.width = width
    Shape.call(this, color)
}

myExtends(Shape, Square)

function Circle(radius, color) {
    this.radius = radius
    Shape.call(this, color)
}

myExtends(Shape, Circle)

Circle.prototype.common = function () {
    console.log('I am a common method and I am overriden')
    // Here first: cr instance will try to find common method in Circle function
    // Scond: if it is not found that function it will go to upper means prototype
    // Third: it will check to Shape function instance
    // Fourth: it will check to Shape's prototype
    // But in this case it is found its common method in Circle's prototype
    // And thats why it is not to go upper function or prototype
    // And ovveride common method of Shape's prototype
    Shape.prototype.common.call(this)
    // We can also call the upper function's method which is overriden
}

var sq = new Square(23, 'Green')
console.log(sq)
sq.common()

var cr = new Circle(45, 'Black')
console.log(cr)
cr.common()
