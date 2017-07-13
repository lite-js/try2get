const toArray = require('lodash/toArray')
const flatten = require('lodash/flatten')

module.exports = {
  one () {
    const args = flatten(toArray(arguments))
    let returnValue
    args.some((callback) => {
      try {
        returnValue = callback()
        return true
      } catch (e) {
        return false
      }
    })
    return returnValue
  },

  all () {
    const args = flatten(toArray(arguments))
    const returnValues = []
    args.forEach((callback) => {
      try {
        returnValues.push(callback())
      } catch (e) {
      }
    })
    return returnValues
  }
}
