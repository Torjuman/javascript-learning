var obj = {
    a: 10,
    b: 20,
}
var obj2 = {
    a: 10,
    b: 20,
}

// An object cant be compared directly
console.log(obj === obj2)

// We can compare an object by accessing thier keys
if (obj.a === obj2.a) {
    console.log(true)
} else {
    console.log(false)
}

// Before comparing an object directly, need to be stringfy
console.log(JSON.stringify(obj) === JSON.stringify(obj2))
