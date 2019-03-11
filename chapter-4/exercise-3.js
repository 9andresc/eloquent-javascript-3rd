// A list

function arrayToList(array) {
  var list = null

  for (var i = array.length - 1; i >= 0; i--) {
    list = { value: array[i], rest: list }
  }

  return list
}

function listToArray(list) {
  var array = []

  for (var node = list; node; node = node.rest) {
    array.push(node.value)
  }

  return array
}

function prepend(value, list) {
  return { value, rest: list }
}

function nthIterative(list, position) {
  var i = 0

  for (var node = list; node; node = node.rest) {
    if (i === position) return node.value
    i++
  }
}

function nthRecursive(list, position) {
  if (!list) return undefined
  else if (position === 0) return list.value
  else return nthRecursive(list.rest, position - 1)
}

let array = [1, 2, 3]
let list = arrayToList(array)
console.log(JSON.stringify(list, null, 2))

array = listToArray(list)
console.log(JSON.stringify(array))

console.log(prepend(10, prepend(20, null)))

console.log(nthIterative(list, 2))

console.log(nthRecursive(list, 2))
