var obj = {
    x: 10,
    y: 20,
    z: 30,
}

console.log(obj)
console.log(obj.x)
console.log(obj.y + obj.z)

// Accessing object in string from with Array notation
console.log(obj['x'])

var show = 'y'
console.log(obj[show])

// Insert any data using Array notation
obj['a'] = 55
console.log(obj)

// Delete any element from an Object
delete obj.x
console.log(obj)
