/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    
    if (!head) {
        return;
    }
    
    let slow = head, fast = head;
    
// To find the middle    
    while(fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    
// To reverse second half
    
    let prev = null;
    let curr = slow;
    
    while(curr) {
        let temp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = temp;
    }
    
// Merge two halfs (first one starts at head, second at prev)
    
    let first = head;
    let second = prev;
    
    while (second.next) {
        temp = first.next;
        first.next = second;
        first = temp;

        temp = second.next;
        second.next = first;
        second = temp;
    }
};










