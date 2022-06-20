/*
 * @Author: Hongzhifeng
 * @Date: 2022-06-12 20:48:46
 * @LastEditors: Hongzhifeng
 * @LastEditTime: 2022-06-12 20:51:52
 * @Description:
 */
const dep = new Dep(); // 依赖收集器
// 劫持并监听所有属性
Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: false,
    get() {
        console.log('触发get');
        // 订阅数据变化时，在Dep中添加观察者
        Dep.target && dep.addSub(Dep.target); //用到这个数据的时候就添加监听
        return value;
    },
    set: newVal => {
        console.log('触发set');
        if (newVal !== value) {
            this.observe(newVal);
            value = newVal;
        }
        // 告诉Dep通知变化，通知视图更新...
        dep.notify();
    }
});
//测试
const data = {};
let name = '张三';
console.log(data.name); // 获取数据的时候会触发get  张三
data.name = '李四'; // 赋值的时候会触发set
