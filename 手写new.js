/*
 * @Author: Hongzhifeng
 * @Date: 2022-06-19 14:42:53
 * @LastEditors: Hongzhifeng
 * @LastEditTime: 2022-06-19 14:43:01
 * @Description:
 */
function myNew(fn, ...args) {
    // 创建一个空对象
    let obj = {};
    // 使空对象的隐式原型指向原函数的显式原型
    obj.__proto__ = fn.prototype;
    // 执行构造函数里面的代码（执行结果保存起来作为result ）,
    // 给这个新对象添加属性和方法。
    let result = fn.apply(obj, args); // 让this指向这个新的对象obj。
    // 返回
    // 判断执行函数的结果是不是null或Undefined，
    // 如果是则返回之前的新对象，如果不是则返回result
    return result instanceof Object ? result : obj;
}
