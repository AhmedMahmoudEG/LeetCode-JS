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
13var balanceBST = function(root) {
14    let arr = []
15    function dfs(node){
16        if(!node) return
17        if(node.left){
18            dfs(node.left)
19        }
20        arr.push(node.val)
21        if(node.right){
22            dfs(node.right)
23        }
24    }
25    
26    function balance(left,right){
27        if(left>right)return null
28        let mid = Math.floor((right+left)/2)
29        let newTree = new TreeNode()
30        newTree.val = arr[mid]
31        newTree.left = balance(left,mid-1)
32        newTree.right = balance(mid+1,right)
33        return newTree
34    }
35    dfs(root)
36     return balance(0,arr.length-1)
37};