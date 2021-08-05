
// When we can access to any variable from any other block of function is called clousre.
// We can't access to any variable which is stored in it's child function. But Child function can access to parent function's variable.

var n = 10 // It is a global variable.

function a() {
    var x = 'I am from \'a\' function.'
    
    var n = 500 // This 'n' variable wiil override the global 'n' variable.

    function b() {
        // We can access without passing any parameter.
        var y = 'I am from \'b\' function'
        var n = 1500 // A inner function's variable will be preffered over parent or global variable.

        console.log(n)
        console.log(x)
        console.log(y)
    }
    b()

    console.log(x)
    // console.log(y) // Here y will throw an error because it is not defined in it's scope.
    console.log(n)
    
}
a()

console.log(n)
