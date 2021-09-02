
const _radius = Symbol()
const _color = Symbol()
const _draw = Symbol()

class Circle {
    constructor(radius, color) {
        this[_radius] = radius
        this[_color] = color
    }

    [_draw]() {
        console.log('Drawing.....')
    }
}

let c1 = new Circle(5, 'Green')
console.log(c1)

// Now we cannot access any methods or properties.
// c1._draw()
