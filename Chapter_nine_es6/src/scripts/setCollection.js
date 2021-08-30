
let set = new Set([1, 2, 3])

set.add(7)
set.add(9)

// Set collection will ignore duplicate value.
set.add(7)
set.add(9)

// delete method will delete the value from collection
set.delete(9)

console.log(set)
console.log(set.size)

// has method will check the value is in or not
console.log(set.has(5))
console.log(set.has(2))

console.log(set.entries())
console.log(set.keys())
console.log(set.values())

// we can use 'keys' or 'values' to iterate
let keysIterate = set.keys()
console.log(keysIterate.next())
console.log(keysIterate.next())
console.log(keysIterate.next())
console.log(keysIterate.next())
console.log(keysIterate.next())

for (let v of set) {
    console.log(v)
}

let set2 = new Set([5, 6, 7])

// 'clear' method will clear all the value from the set
set2.clear()
console.log(set2)
