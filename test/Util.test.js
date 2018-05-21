import Util from '../src/Util';

describe('Util', function() {
  describe('#sum()', function() {
    test('adds 1 + 2 to equal 3', function() {
      expect(Util.sum(1, 2)).toBe(3);
    });
  });
});
