// ### 1.call() 、apply() 、bind() 的区别？※

// bind:(https://www.bilibili.com/video/BV1Kt411w7MP?p=57)

// #### **（1）call()和apply()**

// ##### **相同点：**

// ① call() 和apply()的**第一个参数相同**，就是指定的对象。这个对象就是该函数的执行上下文。

// ② 这两个方法都是函数对象的方法，需要通过**函数对象**来调用，当对**函数调用call()和apply()都会调用函数执行**；

// ③ 在调用call()和apply()==可以一个对象指定为第一个参数==，此时这个对象将会成为函数执行时的 this；

// ##### **不同点：**

// **call()和apply()的区别就在于，两者之间的参数。**

// ①call()在**第一个参数之后的后续所有参数**就是传入该函数的值。==call(第一参数，实参1，实参2，...)==

// ②apply() **只有两个参数**，第一个是对象，**==第二个是数组==**，这个数组中的值就传入该函数的参数。

// ​    ==apply(第一参数,[实参数组])==




Function.prototype.myCall = function (thisArg, ...args) {
    //判断调用myCall的对象类型。谁调用myCall，本函数内的this值就是谁。
    if (typeof this !== 'function') throw new TypeError('Not a Function');

    //判断参数指定的this的类型，如果是null或undefined的话会自动转为全局变量。
    //浏览器环境下全局变量是window node环境下全局变量是global
    if (thisArg === undefined || thisArg === null) {
        //node环境下window是undefined
        thisArg = typeof window === 'undefined' ? global : window;
    }

    //包装一下
    thisArg = Object(thisArg);

    let key = Symbol('fn');
    //在指定的thisArg上添加方法，使用symbol可以避免覆盖了thisArg的同名方法/属性。
    thisArg[key] = this;
    //先将结果保存起来
    let result = thisArg[key](...args);
    //删除在thisArg上添加的方法，回到最初的样子
    delete thisArg[key];
    return result;
};

//测试代码
function foo() {}
function bar(x, y) {
    console.log(this instanceof Number);
    console.log(x + y);
}

bar.myCall(foo, 3, 1); //false 4
bar.myCall(123, 3, 1); //true 4
