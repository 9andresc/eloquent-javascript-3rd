'use strict'

function Person(name) {
  this.name = name
}

let ferdinand = Person('Ferdinand')
// -> TypeError: Cannot set property 'name' of undefined
