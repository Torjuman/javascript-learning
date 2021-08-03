
var greet = 'Good Morning '
var name = 'Torjuman Rimon'

function greeting(greet, name) {
    function yourName() {
        if (name) {
            return name
        } else {
            return ' '
        }
    }
    function firstName() {
        if (name) {
            return name.split(' ')[0]
        } else {
            return ' '
        }
    }
    var message = greet + yourName()
    console.log(message)
    var message2 = greet + firstName()
    console.log(message2)
}

greeting(greet, name)
