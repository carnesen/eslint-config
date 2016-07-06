'use strict';

const test = require('ava');

const index = require('../index');

test('index works like it should', t => {
  t.is(index.parserOptions.ecmaVersion, 6);
});
