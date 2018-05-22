export default {
  /**
   * 对数量进行处理，过万的数据显示“xxx万”（xxx：向上取整, 如：10.2万以及10.9万 都会转化成 11万）
   * @param  {String|Number} num 数量
   * @return {String}    处理后的数据
   */
  getSpecialCountStr(num) {
    if (typeof num !== 'string' && typeof num !== 'number') {
      return num;
    }
    num = parseInt(num, 10);
    if (num > 9999) {
      return Math.ceil(num / 10000) + '万';
    }
    return '' + num;
  }
};
