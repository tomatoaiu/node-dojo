/* globals describe, it */

import chai from 'chai'
import binary from '../src/binary'

const { assert } = chai

describe('TEST : binary', () => {
  describe('input [1, 4, 4, 5, 5, 5, 6, 7, 10, 12, 100, 500, 1000]', () => {
    const array = [1, 4, 4, 5, 5, 5, 6, 7, 10, 12, 100, 500, 1000]
    it('input 500 is 2', () => {
      assert.equal(binary.answer(array, 500), '2')
    })

    it('input 1 is 3', () => {
      assert.equal(binary.answer(array, 1), '3')
    })
  })

  describe('input []', () => {
    it('input any is nothing', () => {
      const array = []
      assert.equal(binary.answer(array, 1), 'nothing')
    })
  })
})