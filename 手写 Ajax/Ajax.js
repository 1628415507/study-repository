/*
 * @Author: Hongzhifeng
 * @Date: 2022-06-08 11:46:59
 * @LastEditors: Hongzhifeng
 * @LastEditTime: 2022-06-19 11:22:38
 * @Description:
 */
const Ajax = {
    // ------------------- get请求 -------------------
    get: function (url, callback) {
        // 1.创建 XMLHttpRequest 对象
        let xhr = new XMLHttpRequest();
        // 2.建立一个 HTTP 请求
        xhr.open('get', url, false); // open(method, url, async, username, password)
        // async为 false，当状态改变时立即调用onreadystatechange属性指定的回调函数
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
                if (xhr.status == 200 || xhr.status == 304) {
                    // 4. 接收响应数据：responseText
                    console.log(xhr.responseText); //
                    callback(xhr.responseText);
                }
            }
        };
        // 3.发送请求：建立连接后，使用 send() 方法发送请求。
        xhr.send();
    },
    // ------------------- post请求 -------------------
    post: function (url, data, callback) {
        // 1.创建 XMLHttpRequest 对象
        let xhr = new XMLHttpRequest();
        // 2.建立一个 HTTP 请求
        xhr.open('post', url, true); // 第三个参数为是否异步执行
        // 添加http头，设置编码类型
        xhr.setRequestHeader('Content-type', 'x-www-form-urlencoded');
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
                if (xhr.status == 200 || xhr.status == 304) {
                    // 4. 接收响应数据：responseText
                    console.log(xhr.responseText);
                    callback(xhr.responseText);
                }
            }
        };
        // 5.一般使用 POST 发送请求时都必须设置该选项，否则服务器无法识别传递过来的数据。
        xhr.setRequestHeader('Content-type', 'application/x-www-urlencoded'); //一般我们设置的是：content-type，传输数据类型，即服务器需要我们传送的数据类型
        // 3.发送请求：建立连接后，使用 send() 方法发送请求。
        xhr.send(data);
    }
};
