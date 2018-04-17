const babble = {
  answer(x) {
    const array = [...x]
    for (let i = 0; i <= array.length; i++) {
      for (let j = array.length - 1; j > i; j--) {
        if (array[j] < array[j - 1]) {
          const tmp = array[j]
          array[j] = array[j - 1]
          array[j - 1] = tmp
        }
      }
    }
    return array
  },
  run(x) {
    for (const array of x) {
      const tmp = this.answer(array)
      console.log(`[${array}] : [${tmp}]`)
    }
  }
}
export default babble