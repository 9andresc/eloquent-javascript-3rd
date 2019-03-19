// The Replace Method

console.log('papa'.replace('p', 'm'))
// -> mapa

console.log('Borobudur'.replace(/[ou]/, 'a'))
// -> Barobudur

console.log('Borobudur'.replace(/[ou]/g, 'a'))
// -> Barabadar

console.log(
  'Liskov, Barbara\nMcCarthy, John\nWadler, Philip'.replace(
    /(\w+), (\w+)/g,
    '$2 $1'
  )
)
// -> Barbara Liskov
//    John McCarthy
//    Philip Wadler

let s = 'the cia and fbi'

console.log(s.replace(/(fbi|cia)/g, str => str.toUpperCase()))
// -> the CIA and FBI

let stock = '1 lemon, 2 cabbages, and 101 eggs'

function minusOne(_, amount, unit) {
  amount = Number(amount) - 1

  if (amount === 1) {
    unit = unit.slice(0, unit.length - 1)
  } else if (amount === 0) {
    amount = 'no'
  }

  return amount + ' ' + unit
}

console.log(stock.replace(/(\d+) (\w+)/g, minusOne))
// -> no lemon, 1 cabbage, and 100 eggs
