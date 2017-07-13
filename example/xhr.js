/* global XMLHttpRequest ActiveXObject */
const try2get = require('../index')

const xhr = try2get.one(
    () => new XMLHttpRequest(),
    () => new ActiveXObject('MSXML2.XMLHTTP'),
    () => new ActiveXObject('Microsoft.XMLHTTP')
)

console.log(xhr)
