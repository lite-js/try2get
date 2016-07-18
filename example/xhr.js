'use strict';
/**
 * get-xhr module
 * @module get-xhr
 * @see module:index
 */
const try2get = require('../index');

const xhr = try2get.one(
    () => new XMLHttpRequest(),
    () => new ActiveXObject('MSXML2.XMLHTTP'),
    () => new ActiveXObject('Microsoft.XMLHTTP')
);

console.log(xhr);
