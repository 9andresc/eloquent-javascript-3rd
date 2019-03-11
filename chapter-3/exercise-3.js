// Bean counting

function countChar(string, char) {
  return Array.from(string).reduce((acc, curr) => acc + (curr === char), 0)
}

function countBs(string) {
  return countChar(string, 'B')
}

console.log(countBs('Beans Boing Bang'))
