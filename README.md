try2get
=======

get any or get all return values

## install

```shell
npm i @lite-js/try2get --save
```

## use cases

getting a supported XHR object [xhr.js](./example/xhr.js):

```javascript
const try2get = require('try2get');
const xhr = try2get.one(
    () => new XMLHttpRequest(),
    () => new ActiveXObject('MSXML2.XMLHTTP'),
    () => new ActiveXObject('Microsoft.XMLHTTP')
);
```

listing all the supported features [built-ins.js](./example/built-ins.js):

```javascript
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
```
