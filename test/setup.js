const sinon = require('sinon');
const mocha = require('mocha');

beforeEach(function () {
  this.sandbox = sinon.sandbox.create();
});

afterEach(function () {
  this.sandbox.restore();
});
