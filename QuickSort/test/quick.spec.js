/* globals describe, it */

import chai from 'chai'
import quick from '../src/quick'

const { expect } = chai

describe('TEST : quick', () => {
  describe('Should Style: Answer', () => {
    it('input [12, 1, 5, 4] is [1, 4, 5, 12]', () => {
      const array = [1, 4, 5, 12]
      expect(quick.answer(array)).to.have.members([12, 1, 5, 4])
    })

    it('input [12, 1, 5, 4, 3, 6] is [1, 3, 4, 5, 6, 12]', () => {
      const array = [12, 1, 5, 4, 3, 6]
      expect(quick.answer(array)).to.have.members([1, 3, 4, 5, 6, 12])
    })

    it('input [] is []', () => {
      const array = []
      expect(quick.answer(array)).to.have.members([])
    })
  })
})