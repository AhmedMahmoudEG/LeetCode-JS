/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {

    return inOrder(root,[])
};
function inOrder(node,list){
    if(node ==null) return list;
    inOrder(node.left,list)
    list.push(node.val)
    inOrder(node.right,list)
    return list
}