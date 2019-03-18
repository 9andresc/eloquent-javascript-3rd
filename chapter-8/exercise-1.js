// Retry

class MultiplicatorUnitFailure extends Error {}

function primitiveMultiply(a, b) {
  if (Math.random() <= 0.2) {
    return a * b
  }

  throw new MultiplicatorUnitFailure()
}

function reliableMultiply(a, b) {
  for (;;) {
    try {
      return primitiveMultiply(10, 10)
    } catch (error) {
      if (error instanceof MultiplicatorUnitFailure) {
        console.log('Exception caught')
      }
    }
  }
}

console.log(reliableMultiply(10, 10))
