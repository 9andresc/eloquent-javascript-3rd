// Deep comparison

function deepEqual(x, y) {
  return Object.keys(x).every(key => {
    if (x[key] === null) {
      return y[key] === null
    } else if (typeof x[key] !== 'object') {
      return x[key] === y[key]
    } else {
      return deepEqual(x[key], y[key])
    }
  })
}

var obj = { here: { is: 'an' }, object: 2 }
console.log(deepEqual(obj, obj))
console.log(deepEqual(obj, { here: 1, object: 2 }))
console.log(deepEqual(obj, { here: { is: 'an' }, object: 2 }))
