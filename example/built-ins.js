/* global Atomics SIMD */
const try2get = require('../index')
const map = require('lodash/map')

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
  () => WeakSet
])

console.log(map(features, feature => feature.toString()))
