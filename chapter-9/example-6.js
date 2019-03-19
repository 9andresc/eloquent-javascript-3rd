// Matches and Groups

let match = /\d+/.exec('one two 100')

console.log(match)
// -> ['100', index: 8, input: 'one two 100']

console.log('one two 100'.match(/\d+/))
// -> ['100', index: 8, input: 'one two 100']

let quotedText = /'([^']*)'/

console.log(quotedText.exec("she said 'hello'"))
// -> ["'hello'", 'hello', index: 9, input: "she said 'hello'"]

console.log(/bad(ly)?/.exec('bad'))
// -> ['bad', undefined, index: 0, input: 'bad']

console.log(/(\d)+/.exec('123'))
// -> ['123', '3', index: 0, input: '123']
