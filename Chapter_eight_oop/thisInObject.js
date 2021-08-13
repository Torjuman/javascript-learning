
var rect = {
    width: 100,
    height: 25,

    draw: function () {

        // 'this' key word will refereed to this Object where the word 'this' is found.
        // We can check what 'this' key word is meant.
        // And we could see it wiil refereed to whole object
        console.log(this)
        console.log('I am from draw function.')

        // Here 'this.width' means find the value of 'width' from this object.
        console.log('My width is ' + this.width)
        console.log('My height is ' + this.height)

        // We can call any function but we have to use 'this' key word in front of the function call.
        this.printRect()
    },

    printRect: function () {
        console.log('My width is ' + this.width + '. And  I am from printRect function.')
        console.log('My height is ' + this.height + '. And  I am from printRect function.')
        this.calculateArea()
    },

    calculateArea: function () {
        // We don't have to write 'this' key word to refereed the properties which are defined in its function block.
        var lengthF = 255
        var area = this.width * this.height * lengthF
        console.log('The area of the rectangle is ' + area)
    }

}

rect.draw()
