/*
 * @Author: Hongzhifeng
 * @Date: 2022-07-05 11:27:46
 * @LastEditors: Hongzhifeng
 * @LastEditTime: 2022-07-05 11:27:49
 * @Description: 
 */
// 缺点：子类的实例共享了父类构造函数的引用属性   不能传参
var person = {
    friends: ['a', 'b', 'c', 'd']
};
var p1 = Object.create(person);
p1.friends.push('aaa'); //缺点：子类的实例共享了父类构造函数的引用属性
console.log(p1);
console.log(person); //缺点：子类的实例共享了父类构造函数的引用属性
