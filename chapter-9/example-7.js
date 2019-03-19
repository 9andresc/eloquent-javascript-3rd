// The Date Class

function getDate(string) {
  let [, month, day, year] = /(\d{1,2})-(\d{1,2})-(\d{4})/.exec(string)
  return new Date(year, month - 1, day)
}

console.log(getDate('1-30-2003'))
