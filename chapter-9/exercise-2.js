// Quoting Style

let story = "...and Sam said: 'These aren't my shoes goddammit!'"

function replaceSingleQuotes(text) {
  return text.replace(/(^|\W)'|'(\W|$)/g, '$1"$2')
}

console.log(replaceSingleQuotes(story))
