// Improvised Modules

const weekDay = (function weekDay() {
  const names = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
  ]

  return {
    name(number) {
      return names[number]
    },
    number(name) {
      return names.indexOf(name)
    }
  }
})()

console.log(weekDay.name(weekDay.number('Sunday')))
// -> Sunday
