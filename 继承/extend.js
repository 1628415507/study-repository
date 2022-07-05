/*
 * @Author: Hongzhifeng
 * @Date: 2022-07-05 11:57:01
 * @LastEditors: Hongzhifeng
 * @LastEditTime: 2022-07-05 11:57:07
 * @Description: 
 */
class ColorPoint extends Point {
    constructor(x, y, color) {
        super(x, y); // 调用父类的constructor(x, y)
        this.color = color;
    }
    toString() {
        return this.color + ' ' + super.toString(); // 调用父类的toString()
    }
}
