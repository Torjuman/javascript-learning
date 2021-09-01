
// WeakMap has all the same facility as WeakSet

let a = {a: 'a'}, b = {b: 'b'}

let weakMap = new WeakMap([[a, 10], [b, 45]])

a = null

console.log(weakMap)
console.log(weakMap.get(a))
console.log(weakMap.get(b))
console.log(weakMap.has(a))
console.log(weakMap.has(b))
