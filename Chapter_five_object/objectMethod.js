var obj = {
    x: 11,
    y: 22,
    z: 33,
}

console.log(Object.keys(obj))
console.log(Object.values(obj))
console.log(Object.entries(obj))

// Copy any Object assing method and it will not modify the orginal one
var obj2 = Object.assign({}, obj)
obj2.x = 100

console.log(obj)
console.log(obj2)
