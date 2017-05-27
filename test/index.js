const assert = require('assert');
const try2get = require('../index')

describe('try2get', () => {
  it('one', () => {
    assert.equal(try2get.one(
      () => {
        throw new Error()
      },
      () => SomeHowNotExists,
      () => false
    ), false)
  })
  it('all', () => {
    assert.deepEqual(try2get.all(
      () => {
        throw new Error()
      },
      () => SomeHowNotExists,
      () => false,
      () => null,
      () => '蛤？'
    ), [false, null, '蛤？'])
  })
})
