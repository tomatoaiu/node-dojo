/* globals describe, it */

import chai from 'chai'
import fibonacci from '../src/fibonacci'

const { assert } = chai

describe('TEST : fibonacci', () => {
  describe('Should Style: Answer', () => {
    it('input 1 is 1', () => {
      assert.equal(fibonacci.answer(1), '1')
    })
  })

  describe('Should Style: Answer', () => {
    it('input 2 is 1', () => {
      assert.equal(fibonacci.answer(2), '1')
    })
  })

  describe('Should Style: Answer', () => {
    it('input 3 is 2', () => {
      assert.equal(fibonacci.answer(3), '2')
    })
  })

  describe('Should Style: Answer', () => {
    it('input 4 is 3', () => {
      assert.equal(fibonacci.answer(4), '3')
    })
  })


  describe('Should Style: Answer', () => {
    it('input 5 is 5', () => {
      assert.equal(fibonacci.answer(5), '5')
    })
  })

  it('input from 1 to 100 is 100 count', () => {
    assert.equal(fibonacci.run(1, 100).length, 100)
  })
})
