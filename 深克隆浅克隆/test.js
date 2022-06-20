/*
 * @Author: Hongzhifeng
 * @Date: 2022-06-18 16:30:18
 * @LastEditors: Hongzhifeng
 * @LastEditTime: 2022-06-20 09:08:25
 * @Description:
 */

// 浅克隆
function shadowClone(obj) {
    let newObj = {};
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            newObj[key] = obj[key];
        }
    }
    return newObj;
}
