const quizzzler = require('../quizzzler2');
const assert = require('assert');

describe('Returns JSON', function() {
  it('should return TRUE if JSON', function() {
    assert.equal(typeof quizzzler(), 'object');
  });
});
