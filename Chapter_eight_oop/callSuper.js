
function Shape (color) {
    this.color = color
}

function Square(width, color) {
    // if we want to inherite properties of Shape we need to call that
    // it is called 'call super'

    Shape.call(this, color)
    this.width = width
}

Square.prototype = Object.create(Shape.prototype)
Square.prototype.constructor = Square

var sq = new Square(25, 'green')
console.log(sq)
