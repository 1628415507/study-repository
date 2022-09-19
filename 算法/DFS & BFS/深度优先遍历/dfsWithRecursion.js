/*
 * @Author: Hongzf
 * @Date: 2022-09-14 17:43:53
 * @LastEditors: Hongzf
 * @LastEditTime: 2022-09-14 17:52:25
 * @Description:
 */
// 递归实现
// 从图中一个未访问的顶点 V 开始，沿着一条路一直走到底
// 看该节点 是否还有除该子节点以外的节点，没有继续回退到父节点，有则遍历该子节点之外的其他节点
// 优缺点：递归的表达性很好，也很容易理解，不过如果层级过深，很容易导致栈溢出。

const dfsWithRecursion = (node, nodeList) => {
    if (node) {
        nodeList.push(node.id); //存入当前节点的数据
        const children = node.children;
        if (children && children.length) {
            for (let i = 0; i < children.length; i++) {
                dfsWithRecursion(children[i], nodeList);//递归调用
            }
        }
    }
    console.log('【 nodes 】-68', nodeList);
    // 结果：['1', '1-1', '1-2', '2', '2-1', '2-2', '1-3']
    return nodeList;
};
