
function testMe() {
    console.log(this)
}

// testMe()
// testMe.call({})

let obj = {
    name: 'Torjuman Rimon',

    printF: function () {
        setTimeout(function () {
            alert(`Hello, ${this.name}`)
            // Here alert with name is not working because here 'this' word referred to window Object.
        }, 1000)
    },

    printF2: function () {
        setTimeout(() => {
            console.log(`Hello, ${this.name}`)
            // But here 'this' is referred to its parent object. Because arrow function don't have its own 'this' meaning.
        }, 3000)
    },

    printF3: function () {
        let self = this
        setTimeout(function () {
            console.log(`Hello , ${self.name}`)
            // But we can also declare the value of 'this' in a variable.
            // Then referred it to the variable.
        }, 5000)
    }
}

obj.printF()
obj.printF2()
obj.printF3()
