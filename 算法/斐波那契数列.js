/*
 * @Author: Hongzhifeng
 * @Date: 2022-06-09 12:49:35
 * @LastEditors: Hongzhifeng
 * @LastEditTime: 2022-06-09 12:49:47
 * @Description: 
 */
// num1前一项
// num2当前项
function fb(n, num1 = 1, num2 = 1) {
    if (n == 0) return 0;
    if (n <= 2) {
        return num2;
    } else {
        return fb(n - 1, num2, num1 + num2);
    }
}
