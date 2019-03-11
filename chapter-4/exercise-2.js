// Reversing an array

function reverseArray(array) {
  var newArray = []

  for (var i = array.length - 1; i >= 0; i--) {
    newArray.push(array[i])
  }

  return newArray
}

function reverseArrayInPlace(array) {
  for (var i = 0; i < Math.floor(array.length / 2); i++) {
    ;[array[i], array[array.length - 1 - i]] = [
      array[array.length - 1 - i],
      array[i]
    ]
  }
}

var array = [1, 2, 3, 4, 5]
var newArray = reverseArray(array)
console.log(`Original array: [${array}]`)
console.log(`New reversed array: [${newArray}]`)

reverseArrayInPlace(array)
console.log(`Original reversed array: [${array}]`)
