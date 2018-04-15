/* globals describe, it */

import chai from 'chai'
import fizzbuzzContians from '../src/fizzbuzzContains'

const { assert } = chai

describe('TEST : fizzbuzzContians', () => {
  describe('Should Style: Answer', () => {
    it('input 1 is 1', () => {
      assert.equal(fizzbuzzContians.answer(1), '1')
    })

    it('input 2 is 2', () => {
      assert.equal(fizzbuzzContians.answer(2), '2')
    })

    it('input 3 is Fizz', () => {
      assert.equal(fizzbuzzContians.answer(3), 'Fizz')
    })

    it('input 5 is Buzz', () => {
      assert.equal(fizzbuzzContians.answer(5), 'Buzz')
    })

    it('input 6 is Fizz', () => {
      assert.equal(fizzbuzzContians.answer(6), 'Fizz')
    })

    it('input 15 is fizzbuzzContians', () => {
      assert.equal(fizzbuzzContians.answer(15), 'FizzBuzz')
    })

    it('input 30 is fizzbuzzContians', () => {
      assert.equal(fizzbuzzContians.answer(30), 'FizzBuzz')
    })

    it('input from 1 to 100 is 100 count', () => {
      assert.equal(fizzbuzzContians.run(1, 100).length, 100)
    })

    it('contains 13 is Fizz', () => {
      assert.equal(fizzbuzzContians.answer(13), 'Fizz')
    })

    it('contains 34 is Fizz', () => {
      assert.equal(fizzbuzzContians.answer(34), 'Fizz')
    })

    it('contains 52 is Fizz', () => {
      assert.equal(fizzbuzzContians.answer(52), 'Buzz')
    })

    it('contains 58 is Fizz', () => {
      assert.equal(fizzbuzzContians.answer(58), 'Buzz')
    })

    it('contains 35 is Fizz', () => {
      assert.equal(fizzbuzzContians.answer(35), 'FizzBuzz')
    })

    it('contains 53 is Fizz', () => {
      assert.equal(fizzbuzzContians.answer(53), 'FizzBuzz')
    })
  })
})