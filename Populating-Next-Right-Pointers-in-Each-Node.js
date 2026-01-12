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
16    function dfs(node){
17        
18        if(!node || !node.left) return
19        node.left.next = node.right
20        if(node.next){
21            node.right.next = node.next.left
22        }
23        dfs(node.left)
24        dfs(node.right)
25        /*
26        if(!node) return
27        if(node.left&&node.right){
28            
29                    node.left.next = node.right
30
31        }
32
33        if(node.next){
34            if(node.right){
35
36                node.right.next = node.next.left
37            }else if(node.left){
38                node.left.next = node.next.left
39            }
40        }
41        dfs(node.left)
42        dfs(node.right)
43        */
44        
45
46    }
47     dfs(root)
48    return root
49};