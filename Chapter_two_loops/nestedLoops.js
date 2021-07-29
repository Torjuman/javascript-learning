// Print A triangle with number
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5

var n = 5

for (var i = 1; i <= n; i++) {
    var result = ''
    for (var j = 1; j <= i; j++) {
        result += j + ' '
    }
    console.log(result)
}

// Make a square by star
// * * * * *
// * * * * *
// * * * * *
// * * * * *
// * * * * *

var lineForStar = 5

for (var i = 1; i <= lineForStar; i++) {
    var star = ''
    for (var j = 1; j <= lineForStar; j++) {
        star += '* '
    }
    console.log(star)
}

// Print same number in each row
var p = 5

for (var i = 1; i <= p; i++) {
    var q = ''
    for (var j = 1; j <= i; j++) {
        q += i + ' '
    }
    console.log(q)
}

// Print number in pyramid
var x = 5

for (var i = 1; i <= x; i++) {
    var y = ''
    for (var k = 0; k <= (p - i); k++) {
        y += ' '
    }
    
    for (var j = 1; j <= i; j++) {
        y += i + ' '
    }
    console.log(y)
}

// Print number in X perttern and take var c in even number
var c = 16

for (var i = 0; i <= c; i++) {
    var d = ''
    for (var j = 0; j <= c; j++) {
        if (i === j || i + j === c) {
            d += '*'
        } else {
            d += ' '
        }
    }
    console.log(d)
}

// Right to left triangle

for (var i = n; i >= 1; i--) {
    var e = ''
    for (var j = 1; j <= i; j++) {
        e += '* '
    }
    console.log(e)
}
