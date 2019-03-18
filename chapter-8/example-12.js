function firstElement(array) {
  if (array.length === 0) {
    throw new Error('firstElement called with []')
  }

  return array[0]
}

console.log(firstElement([]))
// -> Error: firstElement called with []
