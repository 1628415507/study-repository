/*
 * @Author: Hongzhifeng
 * @Date: 2022-06-08 13:19:57
 * @LastEditors: Hongzhifeng
 * @LastEditTime: 2022-06-08 13:20:01
 * @Description:
 */
function add() {
    var args = Array.prototype.slice.call(arguments);

    var adder = function () {
        args.push(...arguments);
        return adder;
    };

    adder.toString = function () {
        return args.reduce((prev, curr) => {
            return prev + curr;
        }, 0);
    };

    return adder;
}

let a = add(1, 2, 3);
let b = add(1)(2)(3);
console.log(a);
console.log(b);
console.log(add(1, 2)(3));
console.log(Function.toString);

// --------普通函数转为柯里化函数------
function createCurry(fn, args = []) {
    return function () {
        let _args = args.concat(...arguments);
        if (_args.length < fn.length) {
            return createCurry.call(this, fn, _args);
        }
        return fn.apply(this, _args);
    };
}

function add(a, b, c) {
    return a + b + c;
}

var _add = createCurry(add);

console.log(_add(1, 2, 3));
console.log(_add(1)(2, 3));
console.log(_add(1)(2)(3));
