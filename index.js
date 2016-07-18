'use strict';
/**
 * index module
 * @module index
 * @see module:index
 */
const lang = require('zero-lang');

module.exports = {
    one() {
        const args = lang.flatten(lang.toArray(arguments));
        let returnValue;
        args.some((callback) => {
            try {
                returnValue = callback();
                return true;
            } catch (e) {
                return false;
            }
        });
        return returnValue;
    },

    all() {
        const args = lang.flatten(lang.toArray(arguments));
        const returnValues = [];
        args.forEach((callback) => {
            try {
                returnValues.push(callback());
            } catch (e) {
            }
        });
        return returnValues;
    }
};
