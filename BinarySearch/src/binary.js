const binary = {
  // binary sort source: https://jsbin.com/zenajud/edit?js,console
  answer(x, target, c = 0) {
    if (!x.length || x.length === 0) {
      return 'nothing'
    }
    let count = c;
    const middle = (0 + (x.length - 1)) >> 1
    console.log(x)
    if (x[middle] === target) {
      return count
    } else if (x[middle] < target) {
      const array = x.slice(middle + 1, x.length)
      return this.answer(array, target, ++count)
    } else if (x[middle] > target) {
      const array = x.slice(0, middle + 1)
      return this.answer(array, target, ++count)
    }
  },
  run(x) {
    for (const { array, target } of x) {
      const tmp = this.answer(array, target)
      console.log(`answer\n[${array}] : ${tmp}\n`)
    }
  }
}
export default binary