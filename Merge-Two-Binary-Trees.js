/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
var mergeTrees = function(root1, root2) {
        let mergeTree = new TreeNode()
    if(root1&&root2){
        mergeTree = new TreeNode(root1.val+root2.val)
        mergeTree.left = mergeTrees(root1.left,root2.left)
        mergeTree.right = mergeTrees(root1.right,root2.right)
    }else if (!root1){
        return root2
    }else{
        return root1
    }

    return mergeTree
    
};