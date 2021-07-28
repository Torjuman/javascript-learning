var a = 0

while (a < 10) {
    console.log('Torjuman Rimon')
    a++
}

var isRuning = true

while (isRuning) {
    var randomNumber = Math.floor(Math.random() * 10 + 1)
    if (randomNumber === 9) {
        console.log('Winner Winner Chicken Dinner.')
        isRuning = false
    } else {
        console.log('You have got ' + randomNumber)
        randomNumber++
    }
}