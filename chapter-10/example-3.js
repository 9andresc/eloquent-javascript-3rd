// CommonJS

const { parse } = require('ini')

const { formatDate } = require('./format-date')

console.log(formatDate(new Date(2019, 2, 20), 'dddd the Do'))
// -> Wednesday the 20th

console.log(parse('x = 10\ny = 20'))
// -> { x: '10', y: '20' }
