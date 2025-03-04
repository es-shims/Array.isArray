'use strict';

var test = require('tape');

var implementation = require('../implementation');
var runTests = require('./tests');

test('as a function', function (t) {
	runTests(implementation, t);

	t.end();
});
