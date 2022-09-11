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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if(!root) return [];
    
    let res = [];
    let queue = [root];
    
    while(queue.length > 0) {
        let temp = [];
        let len = queue.length;
        
        for(let i = 0; i < len; i++) {
            let curr = queue.shift();
            temp.push(curr.val);
            
            if(curr.left !== null) queue.push(curr.left);
            if(curr.right !== null) queue.push(curr.right);
        }
        res.push(temp);
    }
    return res;
};