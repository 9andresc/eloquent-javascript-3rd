// Everything

function everyLoop(array, test) {
  for (let element of array) {
    if (!test(element)) return false
  }

  return true
}

function everySome(array, test) {
  return !array.some(element => !test(element))
}

console.log(everyLoop([1, 2, 3, 4, 5], n => n < 6))
console.log(everyLoop([2, 3, 4, 5, 6], n => n < 6))

console.log(everySome([1, 2, 3, 4, 5], n => n < 6))
console.log(everySome([2, 3, 4, 5, 6], n => n < 6))
