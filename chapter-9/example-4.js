// Repeating Parts of a Pattern

console.log(/'\d+'/.test("'123'"))
// -> true
console.log(/'\d+'/.test("''"))
// -> false
console.log(/'\d*'/.test("'123'"))
// -> true
console.log(/'\d*'/.test("''"))
// -> true

let neighbor = /neighbou?r/

console.log(neighbor.test('neighbour'))
// -> true
console.log(neighbor.test('neighbor'))
// -> true

let dateTime = /\d{1,2}-\d{1,2}-\d{4} \d{1,2}:\d{2}/

console.log(dateTime.test('1-30-2003 8:45'))
// -> true
