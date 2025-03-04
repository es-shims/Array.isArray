'use strict';

var define = require('define-properties');
var getPolyfill = require('./polyfill');

module.exports = function shimArrayIsArray() {
	var polyfill = getPolyfill();

	define(
		Array,
		{ isArray: polyfill },
		{ isArray: function () { return Array.isArray !== polyfill; } }
	);

	return polyfill;
};
