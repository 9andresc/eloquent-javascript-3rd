// RegExp Golf

// car and cat
console.log(/ca[rt]/.test('cat'))

// pop and prop
console.log(/pr?op/.test('pop'))

// ferret, ferry, and ferrari
console.log(/ferr(et|y|ari)/.test('ferret'))

// Any word ending in ious
console.log(/ious\b/.test('precious'))

// A whitespace character followed by a period, comma, colon, or semicolon
console.log(/\s[.,:;]/.test('this ,'))

// A word longer than six letters
console.log(/\w{7}/.test('animals'))

// A word without the letter e (or E)
console.log(/\b[^\We]\b/i.test('Eastern'))
