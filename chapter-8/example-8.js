function lastElement(array) {
  if (array.length === 0) {
    return { failed: true }
  }

  return { element: array[array.length - 1] }
}

console.log(lastElement([]))
// -> { failed: true }
