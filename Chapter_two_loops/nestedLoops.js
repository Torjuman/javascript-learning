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
