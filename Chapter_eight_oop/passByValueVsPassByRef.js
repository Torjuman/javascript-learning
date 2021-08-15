
var n = 75

function change(n) {
    return n = n + 100

    // console.log(n)
}

// At first when we pass an argument which is a primitive data it can't be change it's orginal data.
// There firstly the argument which we pass it make a clone of this variable.
console.log(change(n))

// And thats why it can't change outside's orginal value.
// Thats why it is called pass by value or call by value
console.log(n)

var obj = {
    a: 10,
    b: 5,
}

function changeMe(obj) {
    
    obj.a = obj.a + 200
    obj.b = obj.b + 500

    console.log(obj)
    
}

// In an object, when we pass this object as argument it will not clone this variable.
// It wiil take the ref of the variable. And if we change the variable it will be change outside of it's scope.
changeMe(obj)
// Thats why it is called pass by ref or call by ref
console.log(obj)
