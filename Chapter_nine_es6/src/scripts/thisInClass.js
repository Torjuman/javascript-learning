'use strict'

function Shape() {
    this.draw = function () {
        console.log(this)
    }
}

let s1 = new Shape()
s1.draw()

let anotherS = s1.draw
anotherS()


class Person {
    constructor (name, email) {
        this.name = name
        this.email = email
    }

    printF() {
        console.log(this)
    }
}

let p1 = new Person('Torjuman Rimon', 'eamil@gmail.com')
p1.printF()
let anotherP = p1.printF
anotherP()
