const squareRoot = {
  answer(n) {
    let res = n;
    for (let i = 0; i < 100; i++) {
      res = (res + (n / res)) / 2
    }
    return res
  },
  run(start, end) {
    const answers = []
    for (let i = start; i <= end; i++) {
      const sqrt = String(this.answer(i))
      answers.push(sqrt)
      console.log(`${i} : ${sqrt}`)
    }
    return answers
  }
}
export default squareRoot
