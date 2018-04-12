const assert = require('assert')
const Record = require('../models/record.js')

describe('Record', function(){

  let record1;

  beforeEach(function() {
    record1 = new Record('Pink Floyd', 'Another brick in the wall', 'Alternative', 10)
  });
  
  it ('should have a title', function() {
    const result = record1.artist;
    assert.strictEqual(result, 'Pink Floyd');
  });

  it ('should have a title', function() {
    const result = record1.title;
    assert.strictEqual(result, 'Another brick in the wall');
  });

  it ('should have a genre', function() {
    const result = record1.genre;
    assert.strictEqual(result, 'Alternative');
  });

  it ('should have a price', function() {
    const result = record1.price;
    assert.strictEqual(result, 10);
  })
});
