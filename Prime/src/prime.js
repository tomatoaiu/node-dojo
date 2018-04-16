const prime = {
  isPrime(x) {
    if(x <= 1) {
      return false
    }
    if(x === 2) {
      return true
    }
    if(x % 2 === 0) {
      return false
    }

    for (let i = 3; i <= x; i += 2) {
      if(x < i ** 2){
        return true
      }
      if(x % i === 0){
        return false
      }
    }
    return true
  },
  answer(x) {
    for(let i = 0; i <= x; i++) {
      if(this.isPrime(x)) {
        return 'Prime'
      }
    }
    return String(x)
  },
  run(start, end) {
    const answers = []
    for (let i = start; i <= end; i++) {
      const primeNumber = this.answer(i)
      answers.push(primeNumber)
      console.log(`${i} : ${primeNumber}`)
    }
    return answers
  }
}
export default prime