// Flattening

function flatten(array) {
  return array.reduce((acc, curr) => {
    if (curr instanceof Array) curr = flatten(curr)

    return acc.concat(curr)
  }, [])
}

let deepArray = [1, [2, 3, [4]], [5, 6]]
let flatArray = flatten(deepArray)
console.log(flatArray)
