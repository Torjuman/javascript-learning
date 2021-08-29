
let obj = {
    start: 1,
    end: 5,
    [Symbol.iterator]: function* () {
        let currentValue = this.start

        while(currentValue <= this.end) {
            // 'yeild' means pause
            yield currentValue++
        }

    }
}

let iterate = obj[Symbol.iterator]()

console.log(iterate.next())
console.log(iterate.next())
console.log(iterate.next())
console.log(iterate.next())
console.log(iterate.next())
console.log(iterate.next())

function* generate() {
    yield 1
    yield 2
    yield 3
    yield 4
}

let it = generate()
console.log(it)
console.log(it.next())
console.log(it.next())
console.log(it.next())
console.log(it.next())
console.log(it.next())

let arr = [12, 24, 36]

function* generate2(collections) {
    for(let i = 0; i <= collections.length; i++) {
        yield collections[i]
    }
}

let it2 = generate2(arr)

console.log(it2)
console.log(it2.next())
console.log(it2.next())
console.log(it2.next())
console.log(it2.next())
