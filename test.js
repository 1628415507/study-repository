// 动态创建 script
var script = document.createElement('script');
// 设置回调函数
function getData(data) {
    console.log(data);
}
//设置 script 的 src 属性，并设置请求地址
script.src = 'http://localhost:3000/?callback=getData';
// 让 script 生效
document.body.appendChild(script); //将返回的文本插入页面执行
