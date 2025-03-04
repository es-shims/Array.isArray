'use strict';

require('../auto');

var test = require('tape');
var defineProperties = require('define-properties');

var isEnumerable = Object.prototype.propertyIsEnumerable;
var functionsHaveNames = require('functions-have-names')();

var runTests = require('./tests');

test('shimmed', function (t) {
	t.equal(Array.isArray.length, 1, 'Array.isArray has a length of 1');
	t.test('Function name', { skip: !functionsHaveNames }, function (st) {
		st.equal(Array.isArray.name, 'isArray', 'Array.isArray has name "isArray"');
		st.end();
	});

	t.test('enumerability', { skip: !defineProperties.supportsDescriptors }, function (et) {
		et.equal(false, isEnumerable.call(Array, 'isArray'), 'Array.isArray is not enumerable');
		et.end();
	});

	runTests(Array.isArray, t);

	t.end();
});
