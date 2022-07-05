/*
 * @Author: Hongzhifeng
 * @Date: 2022-07-05 11:46:22
 * @LastEditors: Hongzhifeng
 * @LastEditTime: 2022-07-05 11:48:44
 * @Description:
 */
// -------------- 父类 ---------------
function SuperType(name) {
    this.name = name;
    this.colors = ['red', 'blue', 'green'];
}
SuperType.prototype.sayName = function () {
    console.log(this.name);
};

// -------------- 子类 ---------------
function SubType(name, age) {
    // 继承属性
    SuperType.call(this, name); // ☆☆☆在子函数中运行父函数，但是要利用call把this改变一下，
    this.age = age;
}
// 继承方法
SubType.prototype = new SuperType(); //☆☆☆
SubType.prototype.sayAge = function () {
    console.log(this.age);
};

//测试
let instance1 = new SubType('Nicholas', 29);
instance1.colors.push('black');
console.log(instance1.colors); // "red,blue,green,black"
instance1.sayName(); // "Nicholas";
instance1.sayAge(); // 29

let instance2 = new SubType('Greg', 27);
console.log(instance2.colors); // "red,blue,green"
instance2.sayName(); // "Greg";
instance2.sayAge(); // 27
