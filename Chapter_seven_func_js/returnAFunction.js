
function greet(msg) {

    function greetName(name) {
        return msg + ', ' + name + ' !'
    }

    return greetName
}

var gm = greet('Good Morning')
console.log(gm)
console.log(gm('Torjuman Rimon'))

// A function return in another function
function base(b) {

    return function (n) {
        result = 1
        for (var i = 0; i <= b; i++) {
            result *= n
        }
        return result
    }
}

var res1 = base(5)
console.log(res1(2))
