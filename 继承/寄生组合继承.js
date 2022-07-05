/*
 * @Author: Hongzhifeng
 * @Date: 2022-07-05 11:56:44
 * @LastEditors: Hongzhifeng
 * @LastEditTime: 2022-07-05 11:56:52
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
    SuperType.call(this, name); // 第二次调用SuperType()
    this.age = age;
}

SubType.prototype = new SuperType(); // 第一次调用SuperType()
SubType.prototype.constructor = SubType;
SubType.prototype.sayAge = function () {
    console.log(this.age);
};
