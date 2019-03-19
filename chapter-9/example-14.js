// The lastIndex Property

let pattern = /y/g

pattern.lastIndex = 3

let match = pattern.exec('xyzzy')

console.log(match.index)
// -> 4

console.log(pattern.lastIndex)
// -> 5

let global = /abc/g

console.log(global.exec('xyz abc'))
// -> [abc]

let sticky = /abc/y

console.log(sticky.exec('xyz abc'))
// -> null

let digit = /\d/g

console.log(digit.exec('here it is: 1'))
// -> ['1']

console.log(digit.exec('and now: 1'))
// -> null

console.log('Banana'.match(/an/g))
// -> ['an', 'an']
