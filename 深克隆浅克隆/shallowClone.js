/*
 * @Author: Hongzhifeng
 * @Date: 2022-06-07 09:54:54
 * @LastEditors: Hongzhifeng
 * @LastEditTime: 2022-06-07 09:55:43
 * @Description: 
 */
function shallowClone(obj) {
    let obj3 = {};
    for (let key in obj) {
        if (!obj.hasOwnProperty(key)) break;
        obj3[key] = obj[key];
    }
    console.log(obj, obj3);
    return obj;
}
