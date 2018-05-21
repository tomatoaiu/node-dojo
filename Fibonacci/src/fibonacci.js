const fibonacci = {
  answer(n) {
    const SQRT_5 = Math.sqrt(5);
    const PHY = (1 + SQRT_5) / 2;
    return Math.round(Math.pow(PHY, n) / SQRT_5);
  },
  run(start, end) {
    const answers = []
    for (let i = start; i <= end; i++) {
      const fibo = String(this.answer(i))
      answers.push(fibo)
      console.log(`${i} : ${fibo}`)
    }
    return answers
  }
}
export default fibonacci
