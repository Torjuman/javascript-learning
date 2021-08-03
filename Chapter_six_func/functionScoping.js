
// If any Parent funtion had any parameter, it would be accssed by its inner function
function test(n) {

    function a() {
        return n % 3 === 0
    }

    function b() {
        return n % 5 === 0
    }

    if (a() && b()) {
        console.log(n + ', The number you porvide is a valid number.')
    } else {
        console.log(n + ', The number you porvide is not a valid number.')
    }

}

test(45)
test(15)
test(21)
test(28)
test(60)
