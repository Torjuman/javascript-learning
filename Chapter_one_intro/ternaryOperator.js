var n = 75
var str = ''

if (n % 2 === 0) {
    str = 'Even Number'
} else {
    str = 'Odd Number'
}

console.log(n + ' is an ' + str)

n += 1
var result = n % 2 === 1 ? 'Odd Number' : 'Even Number'

console.log(n + ' is an ' + result)
