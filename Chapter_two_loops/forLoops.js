// First time try for loop
for (var i = 0; i < 10; i+= 2) {
    console.log((i + 1) + ' Torjuman Rimon')
}

for (var i = 0; i <= 10; i++) {
    console.log(i)
}

// Print Even and Odd Number

for (var i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(i + ' is an Even number')
    } else {
        console.log(i + ' is an Odd number')
    }
}

// Sum of 1 to 10
var sum = 0

for (var i = 1; i <= 10; i++) {
    sum += i
    console.log(sum)
}

var nSum = 0

for (var i = 1; i <= 10; i++) {
    console.log(nSum + ' + ' + i + ' = ' + (nSum + i))
    nSum += i
}

// Sum of 1 to 10 even number

var evenSum = 0

for (var i = 1; i <=10; i++) {
    if (i % 2 === 0) {
        console.log(evenSum + ' + ' + i + ' = ' + (evenSum + i))
        evenSum += i
    }
} 
