/*
 * @Author: Hongzhifeng
 * @Date: 2022-06-18 15:46:34
 * @LastEditors: Hongzhifeng
 * @LastEditTime: 2022-06-18 16:30:05
 * @Description:
 */

function myInstanceof(L, R) {
    let LP = L.__proto__;
    let RP = R.prototype;
    while (true) {
        //找到最后一层为null都没找到
        if (LP === null) {
            return false;
        }
        if (LP === RP) {
            return true;
        }
        LP = LP._proto._;
    }
}
