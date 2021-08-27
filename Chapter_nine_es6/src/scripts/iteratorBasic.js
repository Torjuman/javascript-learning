
let arr = [1, 2, 3, 4, 5]

// We need some time immediate loop value.Thats why we need iterator
function iteratorFunc(collection) {
    let i = 0
    return {
        next () {
            return {
                value: collection[i++],
                done: i >= collection.length,
            }
        }
    }

}

let iterator = iteratorFunc(arr)
console.log(iterator) // it will return an Object

console.dir(iterator.next) // Here we can see collection made an scoup

console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
