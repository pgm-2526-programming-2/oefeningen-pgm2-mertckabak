const test = require("node:test");
const assert = require("node:assert/strict");
const { sayHello } = require("../index.js");

test("Testing if function sayHello return Hello", () => {
  assert.equal(sayHello(), "Hello");
});
