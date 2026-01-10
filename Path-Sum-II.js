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
11 * @param {number} targetSum
12 * @return {number[][]}
13 */
14var pathSum = function(root, targetSum) {
15    let sum =0;
16    let res =[]
17    let path = []
18    function dfs(node){
19        if(!node) return
20        path.push(node.val)
21        sum += node.val
22        
23        if(!node.left &&!node.right) {
24            if(sum === targetSum){
25            res.push([...path])
26        }
27        }
28        if(node.left){
29
30            dfs(node.left)
31        }
32        
33        if(node.right){
34
35            dfs(node.right)
36        }
37        sum -=node.val
38        path.pop()
39    }
40    dfs(root)
41    return res
42};