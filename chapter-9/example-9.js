// Choice Patterns

let animalCount = /\b\d+ (pig|cow|chicken)s?\b/

console.log(animalCount.test('15 pigs'))
// -> true

console.log(animalCount.test('15 pigchickens'))
// -> false
