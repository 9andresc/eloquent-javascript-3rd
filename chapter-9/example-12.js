// Dinamically Creating RegExp Objects

let name = 'harry'
let text = 'Harry is a suspicious character.'
let regexp = new RegExp('\\b(' + name + ')\\b', 'gi')

console.log(text.replace(regexp, '_$&_'))
// -> _Harry_ is a suspicious character.

name = 'dea+hl[]rd'
text = 'This dea+hl[]rd guy is super annoying.'
let escaped = name.replace(/[\\[.+*?(){|^$]/g, '\\$&')
regexp = new RegExp('\\b' + escaped + '\\b', 'gi')

console.log(text.replace(regexp, '_$&_'))
// -> This _dea+hl[]rd_ guy is super annoying.
