/* globals describe, it */

import chai from 'chai'
import squareRoot from '../src/squareRoot'

const { assert } = chai

describe('TEST : squareRoot', () => {
  describe('Should Style: Answer', () => {
    it('input 1 is 1', () => {
      assert.equal(squareRoot.answer(1), '1')
    })
  })

  describe('Should Style: Answer', () => {
    it('input 4 is 2', () => {
      assert.equal(squareRoot.answer(4), '2')
    })
  })

  describe('Should Style: Answer', () => {
    it('input 9 is 3', () => {
      assert.equal(squareRoot.answer(9), '3')
    })
  })

  describe('Should Style: Answer', () => {
    it('input 14 is 4', () => {
      assert.equal(squareRoot.answer(16), '4')
    })
  })


  describe('Should Style: Answer', () => {
    it('input 100 is 10', () => {
      assert.equal(squareRoot.answer(100), '10')
    })
  })

  it('input from 1 to 100 is 100 count', () => {
    assert.equal(squareRoot.run(1, 100).length, 100)
  })
})
