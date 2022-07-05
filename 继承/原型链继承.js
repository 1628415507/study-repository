/*
 * @Author: Hongzhifeng
 * @Date: 2022-07-05 11:32:44
 * @LastEditors: Hongzhifeng
 * @LastEditTime: 2022-07-05 11:36:31
 * @Description:
 */
// -------------- 父类 ---------------
function SuperType() {
    this.property = true;
    this.colors = ['red', 'blue', 'green'];
}
// 父类方法
SuperType.prototype.getSuperValue = function () {
    return this.property;
};
// -------------- 子类 --------------
function SubType() {
    this.subproperty = false;
}
// 继承SuperType
// （SubType通过创建SuperType的实例并将其赋值给自己的原型SubTtype.prototype实现了对SuperType的继承）
SubType.prototype = new SuperType(); //☆☆☆创建SuperType的实例并将其赋值给自己的原型
SubType.prototype.getSubValue = function () {
    return this.subproperty;
};

// 测试
// ---------- SuperType实例可以访问父类的所有属性和方法 ----------
let instance = new SubType();
// SuperType实例可以访问的所有属性和方法也会存在于SubType.prototyp
console.log(instance.getSuperValue()); // true,

// ------------- 缺点：原型中包含的引用值会在所有实例间共享 -------------
let instance1 = new SubType();
instance1.colors.push('black');
console.log(instance1.colors); // "red,blue,green,black"
let instance2 = new SubType();
console.log(instance2.colors); // "red,blue,green,black
