// 非递归实现
// 1.对二叉树来说，由于是先序遍历(先遍历当前节点 -> 再遍历左节点 -> 再遍历右节点)，所以我们有如下思路：
// ① 对于每个节点来说，先遍历当前节点（将当前节点弹栈），然后把右节点压栈，再压左节点(这样弹栈的时候会先拿到左节点遍历，符合深度优先遍历要求)。
// ② 弹栈，拿到栈顶的节点，如果节点不为空，重复步骤 ①，如果为空，结束遍历。
// 优点：不用担心递归那样层级过深导致的栈溢出问题

const dfsWithNoRecursion = node => {
    const nodes = []; //保存遍历到的数据
    const stack = []; //存储栈
    if (node) {
        stack.push(node); //将最顶部的节点入栈
        // 栈不为空
        while (stack.length) {
            // 【pop()】方法用于把数组的最后一个元素从其中删除(改变原数组)，并返回最后一个元素的值，即栈顶元素
            let topItem = stack.pop(); //每次取出当前最顶部的节点（即最后入栈的节点）
            nodes.push(topItem.id); //存入当前节点的数据
            const children = topItem.children;
            if (children && children.length) {
                //（根据先进后出的顺序），
                // 存的时候：同一层级从右到左依次入栈
                // 取的时候：同一层级从左到右依次出栈
                for (let i = children.length - 1; i >= 0; i--) {
                    stack.push(children[i]);
                }
            }
        }
    }
    console.log('【 nodes 】-68', nodes);
    // 结果：['1', '1-1', '1-2', '2', '2-1', '2-2', '1-3']
    return nodes;
};
