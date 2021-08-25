
var canWalk = {
    walk: function () {
        console.log('Walking...')
    }
}

var canEat = {
    eat: function () {
        console.log('Eatting...')
    }
}

var canSwim = {
    swim: function () {
        console.log('Swimming...')
    }
}

function mixing(target, ...sources) {
    Object.assign(target, ...sources)
}

function Person(name) {
    this.name = name
}

mixing(Person.prototype, canEat, canWalk)

function GoldFish(name) {
    this.name = name
}

mixing(GoldFish.prototype, canEat, canSwim)

function Dog(name) {
    this.name = name
}

mixing(Dog.prototype, canEat, canWalk)

var person = new Person('Torjuman Rimon')
console.log(person)
person.eat()

var goldFish = new GoldFish('Liam Gold')
console.log(goldFish)
goldFish.swim()

var dog = new Dog('Tommy')
console.log(dog)
dog.walk()
