/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var swapNodes = function(head, k) {
    let first = head;
    let second = head;
    let front = head;

    // Move front to the k-th node
    for (let i = 1; i < k; i++) {
        front = front.next;
    }

    // Save reference to k-th node from start
    let kthFromStart = front;

    // Move front to the end, and move second simultaneously
    while (front.next) {
        front = front.next;
        second = second.next;
    }

    // Now, 'second' is k-th node from end
    let kthFromEnd = second;

    // Swap values
    let temp = kthFromStart.val;
    kthFromStart.val = kthFromEnd.val;
    kthFromEnd.val = temp;

    return head;
};