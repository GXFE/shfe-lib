import Url from '../../src/Url';

describe('Url', () => {
  describe('#stringify', () => {
    test('对象转字符串，&符号连接', () => {
      // const s = Url.stringify({
      //   a: 'Hello',
      //   b: 'lizhigao',
      //   c: 0,
      //   d: 123,
      //   e: null,
      //   f: [1, 2, 3]
      // });
      // console.log(s)
      expect(
        Url.stringify({
          a: 'Hello',
          b: 'lizhigao',
          c: 0,
          d: 123,
          e: null
        }) === 'a=Hello&b=lizhigao&c=0&d=123&e=null'
      ).toBeTruthy();
    });
  });
  describe('#parse', () => {
    test('解析查询参数为object对象', () => {
      expect(
        Url.parse('qid=null&idx=1&recommendtype=-1&ishot=1&fr=toutiao&pgnum=1')
      ).toBeInstanceOf(Object);
      expect(
        Url.parse('qid=null&idx=1&recommendtype=-1&ishot=1&fr=toutiao&pgnum=1')
          .ishot === '1'
      ).toBeTruthy();
    });
  });
});
