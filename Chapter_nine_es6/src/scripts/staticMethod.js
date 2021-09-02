
class Person {
    constructor (name, email) {
        this.name = name
        this.email = email
    }

    printF() {
        console.log(this.name, this.email)
    }

    // static method
    // static method is used for create object without making instance like  Math.random
    // We don't have to use 'new' key word here like Math.random
    static create(str) {
        let person = JSON.parse(str)
        return new Person(person.name, person.email)
    }
}

let str = '{"name": "Torjuman Rimon", "email": "msg@example.com"}'

let p1 = Person.create(str)
console.log(p1)
p1.printF()
