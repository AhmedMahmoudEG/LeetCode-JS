/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    //base cases  when two trees are the same ? 
    if(p===null&&q===null) return true;
    if(p===null|| q===null) return false;
    if(p.val!==q.val) return false;
    //recall
    return isSameTree(p.right,q.right)&& isSameTree(p.left,q.left)
};