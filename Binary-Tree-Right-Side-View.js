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
11 * @return {number[]}
12 */
13var rightSideView = function(root) {
14    let res =[]
15    function dfs(node,level){
16        if(!node) return
17        if(level==res.length){
18        res.push(node.val)
19        }
20        dfs(node.right,level+1)
21        dfs(node.left,level+1)
22        
23    
24
25    }
26    dfs(root,0)
27    return res
28};