const quick = {
  // quick sort source: https://jsbin.com/zenajud/edit?js,console
  answer(x) {
    if (!x.length || x.length === 0) {
      return []
    }
    const [head, ...tail] = x
    const left = tail.filter(e => e < head)
    const right = tail.filter(e => e >= head)

    return this.answer(left).concat(head, this.answer(right))
  },
  run(x) {
    for (const array of x) {
      const tmp = this.answer(array)
      console.log(`[${array}] : [${tmp}]`)
    }
  }
}
export default quick