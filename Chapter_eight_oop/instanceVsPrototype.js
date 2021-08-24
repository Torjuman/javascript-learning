
function Rectangle(width, height) {
    this.width = width
    this.height = height

    this.draw = function draw() {
        console.log('I am a draw function and instance of Rectangle function.')
        console.log('My width is ' + this.width)
        console.log('My height is ' + this.height)
    }
}

var rect1 = new Rectangle(35, 85)
console.log(rect1)

// If we go to browser with this code we can see rect1 and rect2 are two instance of Recangle.
// we can also see rect1 and rect2 have three properties and draw function is now a instance member.

var rect2 = new Rectangle(45, 55)
console.log(rect2)

// Now we will create prototype member.

function Square(width) {
    this.width = width
}

// Prototype member would be inherite to all instance.
// It will not copy the properties to every instance.
// But all instance member will copy to the every instance.

Square.prototype = {
    draw: function () {
        console.log('I am a draw function and prototype member of Square.')
    }
}

var sq1 = new Square(25)
console.log(sq1)

var sq2 = new Square(17)
console.log(sq2)
