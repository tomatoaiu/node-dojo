/* globals describe, it */

import chai from 'chai'
import { fizzbuzz } from '../src/fizzbuzz'

const { assert } = chai

describe('TEST : FizzBuzz', () => {
  describe('Should Style: Answer', () => {
    it('input 1 is 1', () => {
      assert.equal(fizzbuzz.answer(1), '1')
    })

    it('input 2 is 2', () => {
      assert.equal(fizzbuzz.answer(2), '2')
    })

    it('input 3 is Fizz', () => {
      assert.equal(fizzbuzz.answer(3), 'Fizz')
    })

    it('input 5 is Buzz', () => {
      assert.equal(fizzbuzz.answer(5), 'Buzz')
    })

    it('input 6 is Fizz', () => {
      assert.equal(fizzbuzz.answer(6), 'Fizz')
    })

    it('input 15 is FizzBuzz', () => {
      assert.equal(fizzbuzz.answer(15), 'FizzBuzz')
    })

    it('input 30 is FizzBuzz', () => {
      assert.equal(fizzbuzz.answer(30), 'FizzBuzz')
    })

    it('input from 1 to 100 is 100 count', () => {
      assert.equal(fizzbuzz.run(1, 100).length, 100)
    })
  })
})