// var assert = require('assert');
import Util from '../src/Util';
// describe('Array', function() {
//   describe('#indexOf()', function() {
//     it('should return -1 when the value is not present', function() {
//       assert.equal([1, 2, 3].indexOf(4), -1);
//     });
//   });
// });

describe('Util', function() {
  describe('#sum()', function() {
    test('adds 1 + 2 to equal 3', function() {
      expect(Util.sum(1, 2)).toBe(3);
    });
  });
});
