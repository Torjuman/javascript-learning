
// Everthing is inherited from __proto__: Object . We can also see that.

var arr = []

console.log(arr)
// if we go to any browser and expand the arr. we can see it comes from __proto__ : Array
// And this __proto__ : Array comes from __proto__ : Object

var str = new String('I am Torjuman Rimon')

console.log(str)
// if we go to any browser and expand the str. we can see it comes from __proto__ : String
// And this __proto__ : String comes from __proto__ : Object

function Person(name) {
    this.name = name
}

var p1 = new Person('Torjuman Rimon')
console.log(p1)
// if we go to any browser and expand the p1. we can see it comes from __proto__ : Person
// And this __proto__ : Person comes from __proto__ : Object
