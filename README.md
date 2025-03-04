# array.isarray <sup>[![Version Badge][npm-version-svg]][package-url]</sup>

[![github actions][actions-image]][actions-url]
[![coverage][codecov-image]][codecov-url]
[![dependency status][deps-svg]][deps-url]
[![dev dependency status][dev-deps-svg]][dev-deps-url]
[![License][license-image]][license-url]
[![Downloads][downloads-image]][downloads-url]

[![npm badge][npm-badge-png]][package-url]

An ES spec-compliant `Array.isArray` shim/polyfill/replacement that works as far down as ES3.

This package implements the [es-shim API](https://github.com/es-shims/api) interface. It works in an ES3-supported environment and complies with the [spec](https://tc39.es/ecma262/#sec-array.isarray).

Because `Array.isArray` depends on a receiver (the “this” value), the main export takes the array to operate on as the first argument.

## Example

```js
var isArray = require('array.isarray');
var assert = require('assert');

assert.equal(isArray([1, 2, 3]), true);
assert.equal(isArray({ length: 0 }), false);
```

```js
var isArray = require('array.isarray');
var assert = require('assert');
/* when Array.isArray is not present */
delete Array.isArray;
var shimmed = isArray.shim();
assert.equal(shimmed, isArray.getPolyfill());
assert.equal(shimmed, Array.isArray);
assert.equal(isArray([1, 2, 3]), Array.isArray([1, 2, 3]));
```

```js
var isArray = require('array.isarray');
var assert = require('assert');
/* when Array.isArray is present */
var shimmed = isArray.shim();
assert.equal(shimmed, Array.isArray);
assert.deepEqual(Array.isArray([1, 2, 3]), isArray([1, 2, 3]));
```

## Tests
Simply clone the repo, `npm install`, and run `npm test`

[package-url]: https://npmjs.org/package/array.prototype.isarray
[npm-version-svg]: https://versionbadg.es/es-shims/Array.prototype.isArray.svg
[deps-svg]: https://david-dm.org/es-shims/Array.prototype.isArray.svg
[deps-url]: https://david-dm.org/es-shims/Array.prototype.isArray
[dev-deps-svg]: https://david-dm.org/es-shims/Array.prototype.isArray/dev-status.svg
[dev-deps-url]: https://david-dm.org/es-shims/Array.prototype.isArray#info=devDependencies
[npm-badge-png]: https://nodei.co/npm/array.prototype.isarray.png?downloads=true&stars=true
[license-image]: https://img.shields.io/npm/l/array.prototype.isarray.svg
[license-url]: LICENSE
[downloads-image]: https://img.shields.io/npm/dm/array.prototype.isarray.svg
[downloads-url]: https://npm-stat.com/charts.html?package=array.prototype.isarray
[codecov-image]: https://codecov.io/gh/es-shims/Array.prototype.isArray/branch/main/graphs/badge.svg
[codecov-url]: https://app.codecov.io/gh/es-shims/Array.prototype.isArray/
[actions-image]: https://img.shields.io/endpoint?url=https://github-actions-badge-u3jn4tfpocch.runkit.sh/es-shims/Array.prototype.isArray
[actions-url]: https://github.com/es-shims/Array.prototype.isArray/actions
