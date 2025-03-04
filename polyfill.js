'use strict';

var implementation = require('./implementation');

module.exports = function getPolyfill() {
	if (!Array.prototype.isArray) {
		return implementation;
	}
	return Array.prototype.isArray;
};
