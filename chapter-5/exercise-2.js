// Your own loop

function loop(value, test, update, body) {
  let n = value

  while (test(n)) {
    body(n)
    n = update(n)
  }
}

loop(3, n => n > 0, n => n - 1, console.log)
