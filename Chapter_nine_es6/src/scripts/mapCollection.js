
let map = new Map([
    ['a', 10],
    ['b', 20],
    ['c', 30]
])

// Use set method to add new Map collection
map.set('d', 40)
console.log(map)

// Use key in string formate to delete any map collection
map.delete('c')
console.log(map)
console.log(map.size)

map.set({name: 'Torjuman Rimon'}, 25)
console.log(map)

for (let [k, v] of map) {
    console.log(k, v)
}

// Rest all method are same as Set
