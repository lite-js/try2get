'use strict';
/**
 * built-ins module
 * @module built-ins
 * @see module:index
 */
const try2get = require('../index');
const lang = require('zero-lang');

const features = try2get.all([
    () => ArrayBuffer,
    () => Atomics,
    () => DataView,
    () => Float32Array,
    () => Float64Array,
    () => JSON,
    () => Map,
    () => Math,
    () => Promise,
    () => Proxy,
    () => Reflect,
    () => SIMD,
    () => Set,
    () => Symbol,
    () => Uint16Array,
    () => Uint32Array,
    () => Uint8Array,
    () => Uint8ClampedArray,
    () => WeakMap,
    () => WeakSet,
]);

console.log(lang.map(features, feature => feature.toString()));
