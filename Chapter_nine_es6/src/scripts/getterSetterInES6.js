
// Access to private properties by getter set the value setter
const _radius = new WeakMap()
const _color = new WeakMap()
const _resize = new WeakMap()

class Circle {
    constructor (radius, color) {
        this.size = 100
        _radius.set(this, radius)
        _color.set(this, color)
        _resize.set(this, () => {
            console.log(this.size)
        })
    }

    get radius() {
        return _radius.get(this)
    }
    
    set radius(v) {
        return _radius.set(this, v)
    }

    draw() {
        console.log('I am Drawing.......')
        console.log(_radius.get(this), _color.get(this))
        _resize.get(this)()
    }
}

let nCircle = new Circle(5, 'Green')
nCircle.draw()

// Get Value by get method
console.log(nCircle.radius)

// Set Value by set method
nCircle.radius = 55
console.log(nCircle.radius)
