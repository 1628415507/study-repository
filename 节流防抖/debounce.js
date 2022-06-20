/*
 * @Author: Hongzhifeng
 * @Date: 2022-06-08 13:13:32
 * @LastEditors: Hongzhifeng
 * @LastEditTime: 2022-06-20 09:08:32
 * @Description:
 */
function debounce(fn, delay = 500) {
    let timer = null; // 创建一个标记用来存放定时器的返回值
    return function () {
        if (timer) {
            clearTimeout(timer); //未到时间触发，则重新开始延时，进入该分支语句，说明当前正在一个计时过程中，并且又触发了相同事件。所以要取消当前的计时，重新开始计时
        }
        timer = setTimeout(function () {
            fn(); //，一定时间段内没有再触发事件，执行事件处理函数，进入该分支说明当前并没有在计时，那么就开始一个计时 //fn.apply(this, arguments);
            timer = null;
        }, 1000);
    };
}
// 防抖测试
const input1 = document.getElementById('input1'); // 防抖函数
input1.addEventListener(
    'keyup',
    debounce(function () {
        console.log('input1.value:', input1.value);
    })
);
