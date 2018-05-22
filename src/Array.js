/**
 * 扩展Array对象的方法(判断数组中是否包含指定值)
 * @param  {[type]} item 指定值
 * @return {[type]}      [description]
 */
if (!Array.prototype.contains) {
  // 利用Array的原型prototype点出一个我想要封装的方法名contains
  Array.prototype.contains = function(element) {
    for (var i = 0; i < this.length; i++) {
      //如果数组中某个元素和你想要测试的元素对象element相等，则证明数组中包含这个元素，返回true
      if (this[i] === element) {
        return true;
      }
    }
  };
}
export default {
  /**
   * 获取数组1中排除数组2中的值之后的数组
   * @param  {[type]} arr1 仅包含基本数据类型值的数组1
   * @param  {[type]} arr2 仅包含基本数据类型值的数组2
   * @returns 新数组
   */
  difference(arr1, arr2) {
    try {
      let arr = [];
      let i = 0;
      let len1 = arr1.length;
      for (i = 0; i < len1; i++) {
        if (!arr2.contains(arr1[i])) {
          arr.push(arr1[i]);
        }
      }
      return arr;
    } catch (e) {
      return arr1;
    }
  },
  /**
   * 打乱数组
   * @param  {[type]} arr 目标数组
   * @return {[type]}     [description]
   */
  upsetArr: function(arr) {
    return arr.sort(function() {
      return 0.5 - Math.random();
    });
  }
};
