
function Shape() {

}

Shape.prototype = {
    common: function () {
        console.log('I am a common method...')
    }
}

function Square (width) {
    this.width = width
}

Square.prototype = Object.create(Shape.prototype)

Square.prototype.draw = function () {
    console.log('I am a draw function')
}

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
