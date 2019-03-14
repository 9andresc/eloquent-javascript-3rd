// Iterable groups

class Group {
  constructor() {
    this.group = []
  }

  has(value) {
    return this.group.includes(value)
  }

  add(value) {
    if (!this.has(value)) this.group.push(value)
  }

  delete(value) {
    this.group = this.group.filter(v => v !== value)
  }

  get(index) {
    return this.group[index]
  }

  get length() {
    return this.group.length
  }

  static from(iterable) {
    let group = new Group()

    for (let value of iterable[Symbol.iterator]()) {
      group.add(value)
    }

    return group
  }

  [Symbol.iterator]() {
    return new GroupIterator(this)
  }
}

class GroupIterator {
  constructor(group) {
    this.group = group
    this.index = 0
  }

  next() {
    if (this.index >= this.group.length) {
      return { done: true }
    }

    let value = this.group.get(this.index)
    this.index++

    return { value, done: false }
  }
}

for (let value of Group.from(['a', 'b', 'c'])) {
  console.log(value)
}
