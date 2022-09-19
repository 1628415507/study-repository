/*
 * @Author: Hongzf
 * @Date: 2022-09-14 17:56:58
 * @LastEditors: Hongzf
 * @LastEditTime: 2022-09-14 18:16:36
 * @Description:
 */
// 广度优先遍历，指的是从图的一个未遍历的节点出发，先遍历这个节点的相邻节点，再依次遍历每个相邻节点的相邻节点。
// 而广度优先遍历要用队列来实现，队列对数组首部进行操作。
// 非递归实现
// 【unshift()】 方法可向数组的开头添加一个或更多元素，并返回新的长度
// 【shift()】 方法用于把数组的第一个元素从其中删除，并返回第一个元素的值。
const bfsWithNoRecursion = node => {
    const nodeList = []; //保存遍历到的数据
    if (node) {
        const queue = []; //存储队列
        queue.unshift(node); //进入队列
        // 队列不为空
        while (queue.length) {
            let firstItem = queue.shift(); //离开队列
            nodeList.push(firstItem.id); //存入当前节点的数据
            const children = firstItem.children;
            if (children && children.length) {
                //（根据先进先出的顺序），
                for (let i = 0; i < children.length; i++) {
                    queue.push(children[i]); // 依次将该层的子元素放到队列中
                }
            }
        }
    }
    console.log('【 nodeList 】-68', nodeList);
    // 结果：['1', '1-1', '1-2', '1-3', '2', '2-1', '2-2']
    return nodeList;
};
