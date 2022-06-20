/*
 * @Author: Hongzhifeng
 * @Date: 2022-06-08 13:04:39
 * @LastEditors: Hongzhifeng
 * @LastEditTime: 2022-06-08 13:04:47
 * @Description:
 */
// ---------------------------------------------------------防抖函数
function debounce(func, delay) {
    let timeout;
    return function () {
        let arg = arguments;
        if (timeout) clearTimeout(timeout);
        timeout = setTimeout(() => {
            func(arg);
        }, delay);
    };
}

// ---------------------------------------------------------立即执行防抖函数
function debounce2(fn, delay) {
    let timer;

    return function () {
        let args = arguments;
        if (timer) clearTimeout(timer);

        let callNow = !timer;
        timer = setTimeout(() => {
            timer = null;
        }, delay);
        if (callNow) {
            fn(args);
        }
    };
}
// ---------------------------------------------------------立即执行防抖函数+普通防抖
function debounce3(fn, delay, immediate) {
    let timer;

    return function () {
        let args = arguments;
        let _this = this;
        if (timer) clearTimeout(timer);

        if (immediate) {
            let callNow = !timer;
            timer = setTimeout(() => {
                timer = null;
            }, delay);

            if (callNow) {
                fn.apply(_this, args);
            }
        } else {
            timeout = setTimeout(() => {
                func.apply(_this, arguments);
            }, delay);
        }
    };
}

// ---------------------------------------------------------节流 ，时间戳版

function throttle(fn, wait) {
    let previous = 0;
    return function () {
        let now = Date.now();
        let _this = this;
        let args = arguments;
        if (now - previous > wait) {
            fn.apply(_this, arguments);
            previous = now;
        }
    };
}

// ---------------------------------------------------------节流 ，定时器版
function throttle2(fn, wait) {
    let timer;
    return function () {
        let _this = this;
        let args = arguments;
        if (!timer) {
            timer = setTimeout(() => {
                timer = null;
                fn.apply(_this, arguments);
            }, wait);
        }
    };
}
