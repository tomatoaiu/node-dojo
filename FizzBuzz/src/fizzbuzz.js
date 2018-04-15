export const fizzbuzz = {
  answer(x) {
    if (x % 15 === 0) {
      return 'FizzBuzz'
    }
    if (x % 3 === 0) {
      return 'Fizz'
    }
    if (x % 5 === 0) {
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