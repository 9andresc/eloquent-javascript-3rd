function test(label, body) {
  if (!body()) console.log(`Failed: ${label}`)
}

test('convert Latin text to uppercase', () => {
  return 'hello'.toUpperCase() === 'HELLO'
})
