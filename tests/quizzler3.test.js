const assert = require('assert');
const quizzler = require('../quizzler3.js');

describe('File reading', function() {
  it('should return TRUE if the file is successfully read', function() {
    assert.equal(typeof quizzler(`test.txt`), 'string');
  });
});
