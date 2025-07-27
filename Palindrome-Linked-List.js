/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {

    //using two pointers 
    //first we need to get the middle of the list using fast and slow pointer
    let fast = head
    let slow = head
    while(fast !== null && fast.next !== null){
        fast = fast.next.next
        slow = slow.next
    }
    // Reverse the second half of the list
    let secondHalf = (fast === null) ? slow : slow.next;
    let prev = null
    while(secondHalf){
        let nextP = secondHalf.next
        secondHalf.next = prev
        prev = secondHalf
        secondHalf = nextP
    }
    //compare the two halfs 
    let p1 = head;     // start of first half
    let p2 = prev;     // start of reversed second half
    while(p2!=null){ //compare until the second half ends
        if(p1.val !=p2.val) return false
        p1= p1.next;
        p2 = p2.next
    }
    return true
    

    /*
    let current = head
    let arr = []
    while(current){
        arr.push(current.val)
        current = current.next
    }
    console.log(arr)
    let first = 0
    let last = arr.length-1
    while(first<last)
    {
        if(arr[first]===arr[last]) {
            first++
            last--
        }else{
            return false
        }
    }
    return true
    */
};