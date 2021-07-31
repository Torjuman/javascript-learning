
var arr = [8, 344, 7, 2, 9, 5, 1]

// If any data try to insert in directly it will replace existing index data
arr[3] = 50
console.log(arr)

// Push method will insert any data at last index
arr.push(10)
console.log(arr)

// unshift method will insert any data at first index
arr.unshift(85)
console.log(arr)

// Remove last  element of an Array --pop method
arr.pop()
console.log(arr)

// shift method will Remove first inedx element of an Array
arr.shift()
console.log(arr)

// Delete an element from an arry... first arg will be index to start delete, second - number of element to delete , third - element to add
arr.splice(1, 2, 555, 666, 777)
console.log(arr)
