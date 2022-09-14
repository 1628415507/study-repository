/*
 * @Author: Hongzf
 * @Date: 2022-09-14 16:01:29
 * @LastEditors: Hongzf
 * @LastEditTime: 2022-09-14 16:06:39
 * @Description: 
 */
['1','2','3'].map(parseInt)
// 相当于这样的写法
['1', '2', '3'].map( (value, index) =>{
  // parseInt (String s , [ int radix ] )如果该参数radix小于 2 或者大于 36，则 parseInt() 将返回 NaN。
	return parseInt(value, index)
})
// 细节
// index = 0: parsetInt('1', 0) = 1
// index = 1: parsetInt('2', 1) = NaN
// index = 2: parsetInt('3', 2) = NaN // 因为 2进制必须是 0，1数字表示