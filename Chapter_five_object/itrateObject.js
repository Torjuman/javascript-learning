var obj = {
    a: 10,
    b: 20,
    c: 30,
}

// For itrate an object use ' in ' operator
console.log('x' in obj)
console.log('c' in obj)

for (var i in obj) {

    // To see the key in it.
    console.log(i)

    // To see the value in it.
    console.log(i + ': ' + obj[i])
}
