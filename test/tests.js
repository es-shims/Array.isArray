'use strict';

var forEach = require('for-each');
var inspect = require('object-inspect');
var v = require('es-value-fixtures');

module.exports = function (isArray, t) {
	forEach(v.nonArrays, function (nonArray) {
		t.equal(isArray(nonArray), false, 'non-array value ' + inspect(nonArray) + ' is not an array');
	});

	t.equal(isArray([]), true, 'array is an array');
	t.equal(isArray({ length: 0 }), false, 'arraylike is not an array');
};
