/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {

    //first solution O(n) time and space
    /*
    let set = new Set();
    let current = head 
    while(current){
         set.add(current.val)
            current = current.next
    }
    // Convert to array and sort
    let sorted = Array.from(set).sort((a, b) => a - b);

    let finalList = new ListNode()
    let curr = finalList
    for(let s of sorted){
        curr.next = new ListNode(s)
        curr = curr.next
       
    }
    return finalList.next
    */
    //second approach in place with o(1) space

    let current = head
    while(current && current.next){
        if(current.val===current.next.val) {
            current.next = current.next.next
        }else{
            current = current.next
        }
    }
    return head
};