// The sum of a range

function range(start, end, step = 1) {
  if (step === 0) {
    throw new Error("Step shouldn't be zero")
  } else if (start >= end && step > 0) {
    throw new Error('If start is greater than end, step should be negative')
  } else if (start <= end && step < 0) {
    throw new Error('If start is less than end, step should be positive')
  }

  var numbers = []
  for (var n = start; step > 0 ? n <= end : n >= end; n += step) {
    numbers.push(n)
  }

  return numbers
}

function sum(numbers) {
  return numbers.reduce((acc, curr) => acc + curr, 0)
}

console.log(sum(range(1, 10)))
console.log(range(1, 10, 2))
console.log(range(5, 2, -1))
