
var Rect = function (width, height) {

    this.width = width,
    this.height = height

    this.positionOne = {
        z: - 35,
    }

    this.draw = function () {
        console.log('I am from draw function. And this function is not hidden.')
    }

    // To make any properties private in Constructor Function we have to use a local variable.
    var positionTwo = {
        x: 90,
        y: -25,
    }

    // Private properties will not be accessable outside of this function.
    var calculate = function () {
        console.log(this)
        console.log('I am a private function.')

        // Here 'this' kew word will be joined to window object.
        // But if call bind function it will work perfectly.
        console.log('My width = ' + this.width)
        console.log('My height = ' + this.height)
        console.log('My position x = ' + positionTwo.x + ' and y = ' + positionTwo.y)
    }.bind(this)

    this.printF = function () {

        console.log('My width = ' + width)
        console.log('My height = ' + height)
        this.draw()
        calculate()
    }

}

var rect1 = new Rect(45, 25)
rect1.printF()
