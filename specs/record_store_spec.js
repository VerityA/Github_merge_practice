const assert = require('assert')
const Record = require('../models/record.js')
const RecordStore = require('../models/record_store.js')

describe('Record Store', function(){

  let recore1;
  let record2;
  let record3;
  let records;
  let record_store;

  beforeEach(function() {
    record1 = new Record('Pink Floyd', 'Another brick in the wall', 'Alternative', 10);
    record2 = new Record('Ed Sherran', 'Shape of you', 'pop', 12);
    record3 = new Record('Maroon 5', 'Cold', 'Rock', 15);
    record_store = new RecordStore("V's record store", 'Glasgow', 'record1');
  });

  it('should have a name', function() {
    const result = record_store.name;
    assert.strictEqual(result, "V's record store");
  });

});
