
let obj = {
    a: 10,
    b: 20,
    c: 30,
}

console.log(Object.entries(obj))
// 'entries' method will make the from Object to Array.
// And thre will be multilevel Array.
// First index will be key and Second index will be value.

let arr = [
    ['a', 50],
    ['b', 60],
    ['c', 70]
]

console.log(Object.fromEntries(arr))

// if any Array defined as like it can be converted to an Object it can be change from Array to Object.
