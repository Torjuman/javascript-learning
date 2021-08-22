
var obj = {}

// Everything in JavaScript has a parent class name Prototype.
// Only 'Object' has no Prototype upper it. It is the last base of all Proto
console.dir(obj)

var obj2 = new Object()

// We can see obj and obj2 are same inherited from Object base.
console.dir(obj.__proto__ === obj2.__proto__)

// There are another way to check Prototype
console.dir(Object.getPrototypeOf(obj) === Object.getPrototypeOf(obj2))
