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
 * @return {number}
 */
var minDepth = function(root) {
    if(!root) return 0
    if(!root.left) return 1+minDepth(root.right);
    if(!root.right) return 1+minDepth(root.left);
    return 1+Math.min(minDepth(root.left),minDepth(root.right))
    /*my solution without help
    function height(node){
        if(!node) return 0
        if(!node.right) return 1 + Math.min(height(node.left),Infinity)
        if(!node.left) return 1 + Math.min(height(node.right),Infinity)
        return 1+Math.min(height(node.left),height(node.right))
    }
    return height(root)
    */
};