// Greed

/*
  .* means non-newline characters
  [^] means any character that is not in the empty set of characters
*/
function stripComments(code) {
  return code.replace(/\/\/.*|\/\*[^]*?\*\//g, '')
}

console.log(stripComments('1 + /* 2 */3'))
// -> 1 + 3

console.log(stripComments('x = 10;// ten!'))
// -> x = 10;

console.log(stripComments('1 /* a */+/* b */ 1'))
// -> 1  1
