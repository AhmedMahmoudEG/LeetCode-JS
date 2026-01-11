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
11 * @return {void} Do not return anything, modify root in-place instead.
12 */
13var flatten = function(root) {
14
15    function dfs(node){
16        if(!node) return
17        
18        if(node.left){
19            
20            let tmp = node.right
21            node.right = node.left
22            node.left = null
23            let curr = node.right
24            while(curr.right){
25                curr = curr.right
26            }
27            curr.right = tmp
28        }
29
30         dfs(node.right)
31
32    }
33    dfs(root)
34    
35};