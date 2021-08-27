
let arr = [1, 2, 3, 4, 5]

// We don't need to make iterator function every time we need.
// There is a built in method to iterate an 'iterable Object'

let iterate = arr[Symbol.iterator]()

console.log(iterate.next())
console.log(iterate.next())
console.log(iterate.next())
console.log(iterate.next())
console.log(iterate.next())
console.log(iterate.next())

// Check who has iterator with built in.

console.log(arr[Symbol.iterator])
console.log('str '[Symbol.iterator])
// Array and String are itarable

console.log({a: 10, b: 20}[Symbol.iterator])
// But Object is not iterable
