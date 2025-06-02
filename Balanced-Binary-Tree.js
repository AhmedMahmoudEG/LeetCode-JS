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
 * @return {boolean}
 */
var isBalanced = function(root) {
    function height(node){
        if(!node) return 0
        return 1+ Math.max(height(node.left),height(node.right))
    }
    //base case 
    if(!root) return true
    const leftSide = height(root.left);
    const rightSide = height(root.right);
    if(Math.abs(leftSide-rightSide) > 1) return false
    return isBalanced(root.left)&&isBalanced(root.right)
};