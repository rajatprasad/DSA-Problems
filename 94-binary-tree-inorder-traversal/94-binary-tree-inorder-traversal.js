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
    let res = [];
    
    function inOrder(root) {
        if(!root)
            return null;
        
        if(root.left) inOrder(root.left);
        res.push(root.val);
        if(root.right) inOrder(root.right);
    }
    
    inOrder(root);
    return res;
};