// Chessboard

var size = 8

for (var i = 0; i < size; i++) {
  var line = ''

  for (var j = 0; j < size; j++) {
    if ((i + j) % 2 === 0) line += ' '
    else line += '#'
  }

  console.log(line)
}
