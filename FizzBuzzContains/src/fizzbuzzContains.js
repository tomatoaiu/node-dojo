const fizzbuzzContians = {
  answer(x) {
    const strX = String(x)
    if (x % 15 === 0 || (strX.includes('3') && strX.includes('5'))) {
      return 'FizzBuzz'
    }
    if (x % 3 === 0 || strX.includes('3')) {
      return 'Fizz'
    }
    if (x % 5 === 0 || strX.includes('5')) {
      return 'Buzz'
    }
    return x
  },
  run(start, end) {
    const answers = []
    for (let i = start; i <= end; i++) {
      const fizzBuzz = String(this.answer(i))
      answers.push(fizzBuzz)
      console.log(fizzBuzz)
    }
    return answers
  }
}
export default fizzbuzzContians