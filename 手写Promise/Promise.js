/*
 * @Author: Hongzhifeng
 * @Date: 2022-06-06 16:49:10
 * @LastEditors: Hongzhifeng
 * @LastEditTime: 2022-06-06 18:21:19
 * @Description:
 */

// 三个状态：PENDING、FULFILLED、REJECTED
//  javascript 对象中的 constructor属性 指向的函数本身。
const PENDING = 'PENDING'; //
const FULFILLED = 'FULFILLED'; //完成
const REJECTED = 'REJECTED';

class Promise {
    // 每个构造函数C刚被制造出来的时候，它的C.prototype上面都会有一个constructor属性，并且执行它本身
    // constructor 属性返回对创建此对象的数组函数的引用。
    constructor(executor) {
        console.log(0, '创建Promise对象');
        this.status = PENDING; // 默认状态为 PENDING
        this.value = undefined; // 存放成功状态的值，默认为 undefined
        this.reason = undefined; // 存放失败状态的值，默认为 undefined
        this.successCB = []; // 成功存放的数组
        this.failCB = []; // 失败存放的数组
        // 调用此方法就是成功
        let resolve = value => {
            // 状态为 PENDING 时才可以更新状态，
            //防止 executor 中调用了两次 resovle/reject 方法
            if (this.status === PENDING) {
                console.log(2, '成功则调用 resolve 方法');
                this.status = FULFILLED;
                this.value = value;
                this.successCB.forEach(f => f()); //
            }
        };
        // 调用此方法就是失败
        let reject = reason => {
            //确保状态还未改变
            if (this.status == PENDING) {
                console.log(3, '失败则调用 reject 方法');
                this.status = REJECTED;
                this.reason = reason;
                this.failCB.forEach(f => f());
            }
        };

        try {
            console.log(1, '立刻执行函数executor(resolve, reject)');
            // 立即执行，将 resolve 和 reject 函数传给使用者
            executor(resolve, reject);
        } catch (error) {
            console.log(3, '出错则调用reject函数 error');
            reject(error); //出错则调用reject函数
        }
    }

    // 包含一个 then 方法，并接收两个参数 onFulfilled、onRejected，
    // 第一个参数是状态变为成功后应该执行的回调函数，
    // 第二个参数是状态变为失败后应该执行的回调函数。
    then(onFulfilled, onRejected) {
        console.log(4, 'then:当前状态', this.status);
        if (this.status === FULFILLED) {
            //onFulfilled：成功后用户需要执行的函数
            console.log(5, '成功后执行 onFulfilled函数');
            onFulfilled(this.value);
        }
        if (this.status === REJECTED) {
            //onRejected：失败后用户需要执行的函数
            console.log(6, '失败后执行 onRejected函数');
            onRejected(this.reason);
        }
        // ??
        if (this.status === PENDING) {
            this.successCB.push(() => {
                onFulfilled(this.value);
            });
            this.failCB.push(() => {
                onRejected(this.reason);
            });
        }
    }
}

/*
Promise函数对象的all方法
返回一个promise，只有当所有promise都成功时才成功，否则只要有一个失败的就失败
*/
Promise.all = function (promisesArr) {
    let resolvedCount = 0; // 用来保存成功promise的数量
    const resolvedArr = new Array(promisesArr.length); // 创建一个数组用来保存所有promise执行成功后返回的对应的value
    // 1.返回一个新的promise
    return new Promise((resolve, reject) => {
        // 2.遍历promises获取每个promise的结果
        promisesArr.forEach((promiseItem, index) => {
            promiseItem.then(
                value => {
                    resolvedCount++; // 成功的数量加1
                    resolvedArr[index] = value; // p成功，将成功的value按顺序保存到values
                    // 3.如果全部成功了。将return的新的promise的状态改为成功
                    if (resolvedCount === promisesArr.length) {
                        resolve(resolvedArr); //返回所有promise的执行结果
                    }
                },
                reason => {
                    // 4.只要有一个失败了，return的promise就失败
                    reject(reason);
                }
            );
        });
    });
};

/*
Promise函数对象的race方法
返回一个promise，其结果由第一个完成的promise决定
*/
Promise.race = function (promisesArr) {
    // 【1】 返回一个promise
    return new Promise((resolve, reject) => {
        // 【2】 遍历promises获取每个promise的结果
        promisesArr.forEach((promiseItem, index) => {
            promiseItem.then(// 只有第一次调用的有效果
                value => {
                    resolve(value);// 一旦有成功，将return的promise变为成功
                },
                reason => {
                    // 【3】一旦有失败，将return的promise变为失败
                    reject(reason);
                }
            );
        });
    });
};
