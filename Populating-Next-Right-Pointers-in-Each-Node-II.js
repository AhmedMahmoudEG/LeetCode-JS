1/**
2 * // Definition for a _Node.
3 * function _Node(val, left, right, next) {
4 *    this.val = val === undefined ? null : val;
5 *    this.left = left === undefined ? null : left;
6 *    this.right = right === undefined ? null : right;
7 *    this.next = next === undefined ? null : next;
8 * };
9 */
10
11/**
12 * @param {_Node} root
13 * @return {_Node}
14 */
15var connect = function(root) {
16    function getNextChild(node) {
17    while (node) {
18      if (node.left) return node.left
19      if (node.right) return node.right
20      node = node.next
21    }
22    return null
23  }
24    function dfs(node){
25        if(!node) return 
26        if(node.right&&node.left){
27        node.left.next = node.right
28        }
29        
30        let child = getNextChild(node.next)
31        
32        if(node.right){
33                node.right.next = child
34            }else if(node.left) {
35                node.left.next = child
36            }
37        dfs(node.right)
38        dfs(node.left)
39    }
40    dfs(root)
41    return root
42};