export default {
  name: 'Url',
  parseQueryString() {
    let obj = {};
    return obj;
  },
  /**
   * 获取url中参数的值
   * @param  {[type]} name 参数名
   * @return {[type]}      参数值
   */
  getQueryString: function(name) {
    var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return decodeURI(r[2]);
    return null;
  }
};
