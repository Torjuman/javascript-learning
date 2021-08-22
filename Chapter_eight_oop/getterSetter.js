
var Rectangle = function () {
    var position = {
        x: 25,
        y: -75,
    }

    // We have to create a function to access any private property

    this.getPosition = function () {
        // position is a local variable and can access to this variable without useing 'this'
        return position
    }

    // There is also a better way and that is Protoptype
    Object.defineProperty(this, 'position', {
        // To use get method we can get the private property
        // This is called getter method
        get: function () {
            return position
        },

        set: function (value) {
            position = value
        }
    })
}

var rec1 = new Rectangle()
console.log(rec1.getPosition())
console.log(rec1.position)
rec1.position = {
    x: 15,
    y: -90,
}
console.log(rec1.position)
