
var Rectangle = function (width, height) {

    // We have to use 'this' key word to define properties
    
    this.width = width
    this.height = height

    this.draw = function () {
        // This function is an anonymous function
        console.log(this)
        console.log('I am from draw function. And I am a rectangle.')
        this.printF()
    }

    this.printF = function printForRect() {
        console.log('My width is ' + width)
        console.log('My width is ' + this.width)
        console.log('My height is ' + height)
        console.log('My height is ' + this.height)
    }
}

// If we don't use 'new' key word it will bind with window Object.

var rect1 = new Rectangle(21, 4)
rect1.draw()
