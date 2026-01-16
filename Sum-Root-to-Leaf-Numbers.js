1/**
2 * Definition for a binary tree node.
3 * function TreeNode(val, left, right) {
4 *     this.val = (val===undefined ? 0 : val)
5 *     this.left = (left===undefined ? null : left)
6 *     this.right = (right===undefined ? null : right)
7 * }
8 */
9/**
10 * @param {TreeNode} root
11 * @return {number}
12 */
13var sumNumbers = function(root) {
14    let total = 0
15
16    function dfs(node, current){
17        if(!node) return
18
19        current = current * 10 + node.val
20
21        if(!node.left && !node.right){
22            total += current
23            return
24        }
25
26        dfs(node.left, current)
27        dfs(node.right, current)
28    }
29
30    dfs(root, 0)
31    return total
32};
33
34