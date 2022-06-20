/*
 * @Author: Hongzhifeng
 * @Date: 2022-06-08 13:08:56
 * @LastEditors: Hongzhifeng
 * @LastEditTime: 2022-06-08 13:09:52
 * @Description:
 */

function throttle(fn, delay = 1000) {
    let timer = null; // 创建一个标记用来存放定时器的返回值
    return function () {
        if (timer) {
            //如果定时器还在，说明上次延迟执行还未完成，
            return; //则忽略调用函数的请求，不用清空计时器
        }
        timer = setTimeout(() => {
            fn.apply(this, arguments); // this为被拖拽的对象❤
            timer = null;
        }, delay);
    };
}

// 节流测试
const dragdiv = document.getElementById('dragdiv'); // 节流函数
dragdiv.addEventListener(
    'drag',
    throttle(function (e) {
        console.log(e.offsetX, e.offsetY);
    })
);
