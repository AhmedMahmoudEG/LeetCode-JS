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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function(root, subRoot) {
    // Time/Space: O(m + n) where m and n are the number of nodes in root and subRoot respectively

    // Compares two trees (r and sr) to check if they are identical
    function isSameTree(r, sr) {
        if (!r && !sr) return true;               // Both null → same
        if (!r || !sr) return false;              // One is null → not same
        if (r.val !== sr.val) return false;       // Different values → not same
        return isSameTree(r.left, sr.left) && isSameTree(r.right, sr.right); // Check subtrees
    }

    // DFS traversal to check if subRoot is a subtree starting at current node
    function dfs(node) {
        if (!node) return false;
        if (isSameTree(node, subRoot)) return true;
        return dfs(node.left) || dfs(node.right); // Check left and right subtrees
    }

    return dfs(root);
};