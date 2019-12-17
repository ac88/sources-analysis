import _curry2 from './internal/_curry2';


/**
 * Multiplies two numbers. Equivalent to `a * b` but curried.
 * 两数相乘。等效于`a * b`，但是已柯里化。
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Math
 * @sig Number -> Number -> Number
 * @param {Number} a The first value.
 * @param {Number} b The second value.
 * @return {Number} The result of `a * b`.
 * @see R.divide
 * @example
 *
 *      const double = R.multiply(2);
 *      const triple = R.multiply(3);
 *      double(3);       //=>  6
 *      triple(4);       //=> 12
 *      R.multiply(2, 5);  //=> 10
 */
var multiply = _curry2(function multiply(a, b) { return a * b; });
export default multiply;
