const test = require('node:test');
const assert = require('node:assert/strict');
const { add } = require('../math');

test('adds positive numbers', () => {
  assert.strictEqual(add(2, 3), 5);
});

test('adds zeros', () => {
  assert.strictEqual(add(0, 0), 0);
});

test('adds negative and positive numbers', () => {
  assert.strictEqual(add(-2, 3), 1);
});
