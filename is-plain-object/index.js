/*!
 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */

import isObject from 'isobject';

// 是否是原生的对象类型
function isObjectObject(o) {
  return isObject(o) === true
    && Object.prototype.toString.call(o) === '[object Object]';
}

// 是否是对象类型
export default function isPlainObject(o) {
  var ctor, prot;

  if (isObjectObject(o) === false) return false;

  // If has modified constructor 如果有修改构造函数
  ctor = o.constructor;
  if (typeof ctor !== 'function') return false;

  // If has modified prototype 如果有修改原型链
  prot = ctor.prototype;
  if (isObjectObject(prot) === false) return false;

  // If constructor does not have an Object-specific method 如果构造函数没有isPrototypeOf方法
  if (prot.hasOwnProperty('isPrototypeOf') === false) {
    return false;
  }

  // Most likely a plain Object 到这里基本可以断定是一个对象了
  return true;
};
