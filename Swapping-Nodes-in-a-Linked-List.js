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
    let second =head;
    let front =head
    for(let i=1;i<k;i++){
        front = front.next;
    }
    //save referenec 
    let kthStart = front;
    while(front.next){
        front = front.next;
        second = second.next
    }
    let kthEnd = second;
    //swap values
    let tmp = kthStart.val;
    kthStart.val = kthEnd.val
    kthEnd.val = tmp

    return head;
};