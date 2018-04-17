/* globals describe, it */

import chai from 'chai'
import babble from '../src/babble'

const { expect } = chai

describe('TEST : babble', () => {
  describe('Should Style: Answer', () => {
    it('input [12, 1, 5, 4] is [1, 4, 5, 12]', () => {
      expect(babble.answer([1, 4, 5, 12])).to.have.members([12, 1, 5, 4])
    })

    it('input [12, 1, 5, 4, 3, 6] is [1, 3, 4, 5, 6, 12]', () => {
      expect(babble.answer([12, 1, 5, 4, 3, 6])).to.have.members([1, 3, 4, 5, 6, 12])
    })
  })
})