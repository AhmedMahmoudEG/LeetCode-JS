/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    //solution 1 using map
    /*
    let set1= new Set();
    let current1 = headA
    let current2= headB
    while(current1){
        set1.add(current1)
        current1 = current1.next
    }
    while(current2){
    if (set1.has(current2)) return current2;
    current2 = current2.next
    } 
    */

    //solution 2 using 2 pointers
    let p1 = headA
    let p2 = headB
    // how to skip getting the length of each list?
    // The trick is to keep traversing both lists, and when a pointer
    // reaches the end of its list (null), redirect it to the head of the other list. 
    //This way, both pointers will traverse
    // (lenA + lenB) steps and align at the intersection node (or null).
    while(p1!==p2){  
        p1 = (p1 ===null) ? headB : p1.next
        p2 = (p2 ===null ) ? headA : p2.next  
    }
    return p1

}
    
