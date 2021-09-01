
let a = {a: 10}, b = {b: 20}
let set = new Set([a, b])

a = null // After doing null it is not completly null

console.log(set)
console.log(set.size)

// We could also extrect this value though it is null. And it is caused for memory leak.

let arr = [...set]
console.log(arr)
console.log(arr[0])

// That's why we need weakset

let c = {c: 30}, d = {d: 40}
let weakSet = new WeakSet([c, d])

c = null

console.log(weakSet)
console.log(weakSet.has(c))
console.log(weakSet.has(d))

// But weakset has only few method
