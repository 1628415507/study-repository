/*
 * @Author: Hongzhifeng
 * @Date: 2022-06-06 15:26:55
 * @LastEditors: Hongzhifeng
 * @LastEditTime: 2022-06-07 09:21:33
 * @Description:
 */
function deepClone(obj) {
    // 【0】. 创建空对象
    let newObj;

    // 【1】. 判断值类型和引用类型：
    //  非对象、数组：typeof来判断对象和数组，因为这种类型都会返回object
    if (obj === null || typeof obj !== 'object') return obj;
    // 可通过 instanceof 操作符来判断对象的具体类型，或是否是某个对象的实例
    if (obj instanceof RegExp) {
        return new RegExp(obj); // 正则对象的实例
    }
    if (obj instanceof Date) {
        return new Date(obj); // 日期对象的实例
    }
    // function

    // 【2】. 判断是数组还是对象
    if (obj instanceof Array) {
        newObj = []; // 创建空数组，改变内存地址，不再指向被复制的内存地址
    } else {
        // 不直接用“newObj= new Object();”创建空对象的原因：
        // 目的：克隆的结果和之前保持相同的所属类
        // let newObj = new obj.constructor;//既能克隆对象也能克隆实例；obj.constructor=Object
        newObj = new obj.constructor(); // 创建空对象，改变内存地址
    }

    for (let key in obj) {
        //保证key不是原型的属性
        if (obj.hasOwnProperty(key)) {
            // 【3】. 递归
            newObj[key] = deepClone(obj[key]);
            //newObj[key] = arguments.callee(obj[key]);
            //使用arguments.callee就可以让函数逻辑与函数名解耦
        }
    }
    return newObj;
}

// 测试对象
let obj5 = deepClone(obj);
console.log(obj, obj5);
console.log('obj === obj5', obj === obj5); //false
console.log('obj.c === obj5.c', obj.c === obj5.c); //false
//测试数组
let arr2 = deepClone(arr);
console.log(arr, arr2);
console.log('arr === arr2', arr === arr2); //false
console.log('arr[0] === arr2[0]', arr[0] === arr2[0]); //false
