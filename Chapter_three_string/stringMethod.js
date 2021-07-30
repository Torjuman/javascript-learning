var a = 'I am'
var b = 'Torjuman Rimon'
var c = a.concat(' ', b)

console.log(c)
// Start print value in certain index
console.log(c.substr(5))

// Start print value in certain index and in certain length
console.log(c.substr(5, 8))

// Print value from certain index
console.log(a.charAt(3))

// Uppercase and lowercase
console.log(a.toUpperCase())
console.log(b.toLowerCase())

// Check starting and ending String
console.log(b.startsWith('Torju'))
console.log(a.endsWith('m'))

// Trim empty space
console.log('      iuaufufi   ')
console.log('      iuaufufi   '.trim())

// Split String into word Array
console.log(c.split())
