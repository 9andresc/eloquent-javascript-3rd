// Groups

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

  static from(iterable) {
    let group = new Group()

    for (let value of iterable[Symbol.iterator]()) {
      group.add(value)
    }

    return group
  }
}

let group = Group.from([10, 20])
console.log(group.has(10))
console.log(group.has(30))
group.add(10)
group.delete(10)
console.log(group.has(10))
