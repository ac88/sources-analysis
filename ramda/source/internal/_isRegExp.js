// 判断是否是正则类型
export default function _isRegExp(x) {
  return Object.prototype.toString.call(x) === '[object RegExp]';
}
