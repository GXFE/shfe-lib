import Util from '../../src/Util';

describe('Util', function() {
  describe('#getUid()', function() {
    test('获取uid，长度17位的数字', function() {
      expect(Util.getUid().length === 17).toBeTruthy();
    });
  });
});
