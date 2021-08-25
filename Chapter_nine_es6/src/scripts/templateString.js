
var name = 'Torjuman Rimon'
var age = 25
var name2 = 'Sakib'
var age2 = 17

// Old style
console.log('My name is ' + name + '. My age is ' + age)

// Tamplate String Style
console.log(`My name is ${name}. And my age is ${age}`)

// We can check condition in Tamplate String
// The condition must be in one single line.
console.log(`My name is ${name}. I am ${age} and I am${age < 18 ? ' not' : ''} an adult.`)

console.log(`My name is ${name2}. I am ${age} and I am${age2 < 18 ? ' not' : ''} an adult.`)
