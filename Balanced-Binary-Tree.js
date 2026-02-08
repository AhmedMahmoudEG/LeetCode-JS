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
11 * @return {boolean}
12 */
13var isBalanced = function(root) {
14    function height(node){
15        if(!node) return 0
16        return 1 + Math.max(height(node.left), height(node.right))
17    }
18    if(!root) return true
19    let left = height(root.left)
20    let right = height( root.right)
21    if(Math.abs(left - right) >1 ) return false
22    return isBalanced(root.left)&& isBalanced(root.right)
23};