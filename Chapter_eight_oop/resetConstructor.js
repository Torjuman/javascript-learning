
function Shape() {

}

Shape.prototype.common = function () {
    console.log('I am a common method...')
}

function Square (width) {
    this.width = width
}

// We have to reset consturctor every time after inheritance.
// Otherwise it will lost its selfness.
Square.prototype = Object.create(Shape.prototype)
Square.prototype.constructor = Square

Square.prototype.draw = function () {
    console.log('I am a draw function')
}

// We can create a new instance like that
var sq1 = new Square.prototype.constructor(75)
console.log(sq1)

function Circle(radius) {
    this.radius =radius
}

Circle.prototype = Object.create(Shape.prototype)

var shp = new Shape()
console.log(shp)
// shp -> Shape -> Object

var sq = new Square(45)
console.log(sq)
// sq -> Square -> Shape -> Object

var cr = new Circle(25)
console.log(cr)
// cr -> Circle -> Shape -> Object
