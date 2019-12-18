import _curry2 from './internal/_curry2';


/**
 * Returns the smaller of its two arguments.
 * 返回两个参数的更小的那个。
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Relation
 * @sig Ord a => a -> a -> a
 * @param {*} a
 * @param {*} b
 * @return {*}
 * @see R.minBy, R.max
 * @example
 *
 *      R.min(789, 123); //=> 123
 *      R.min('a', 'b'); //=> 'a'
 */
var min = _curry2(function min(a, b) { return b < a ? b : a; });
export default min;
