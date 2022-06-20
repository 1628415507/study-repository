/*
 * @Author: Hongzhifeng
 * @Date: 2022-06-18 15:46:34
 * @LastEditors: Hongzhifeng
 * @LastEditTime: 2022-06-18 16:30:09
 * @Description:
 */
function myInstance(L, R) {
    //L代表instanceof实例，R代表原型
    let LP = L.__proto__; //实例对象的原型链上
    let RP = R.prototype; // 构造函数的原型对象
    while (true) {
        // 如果找到最后一层为null都没找到
        if (LP == null) {
            return false;
        }
        // 判断构造函数的原型对象是否在实例对象的原型链上
        if (LP == RP) {
            return true;
        }
        LP = LP.__proto__; //逐层向上查找
    }
}
