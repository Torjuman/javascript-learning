
let arr = [1, 2, 3, 4, 5]

for (let v of arr) {
    console.log(v)
}

let nameO = 'Torjuman Rimon'

for (let v of nameO) {
    console.log(v)
}

let obj = {
    a: 10,
    b: 20,
}

// Object is not iterable. So it throw an error
// But if we put [Symbol.iterator] in their interface it will turn into iterable.
for (let v of obj) {
    console.log(v)
}
