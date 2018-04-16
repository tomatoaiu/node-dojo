/* globals describe, it */

import chai from 'chai'
import prime from '../src/prime'

const { assert } = chai

describe('TEST : prime', () => {
  describe('Should Style: Answer', () => {
    it('input 1 is 1', () => {
      assert.equal(prime.answer(1), '1')
    })

    it('input 9 is Prime', () => {
      assert.equal(prime.answer(9), '9')
    })

    for(let i = 4; i <= 100; i += 2){
      it(`input ${i} is Prime`, () => {
        assert.equal(prime.answer(i), i)
      })
    }

    const primes = [
      2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61,
      67, 71, 73, 79, 83, 89, 97
    ]
    for (const primeNumber of primes) {
      it(`input ${primeNumber} is Prime`, () => {
        assert.equal(prime.answer(primeNumber), 'Prime')
      })
    }

    it('input from 1 to 100 is 100 count', () => {
      assert.equal(prime.run(1, 100).length, 100)
    })
  })
})