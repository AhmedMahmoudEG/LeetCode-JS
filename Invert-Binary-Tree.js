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
11 * @return {TreeNode}
12 */
13var invertTree = function(root) {
14    function dfs(node){
15        if(!node) return
16        let tmp = node.right
17        node.right = node.left
18        node.left =tmp
19        dfs(node.left)
20        dfs(node.right)
21    }
22     dfs(root)
23     return root
24    
25};