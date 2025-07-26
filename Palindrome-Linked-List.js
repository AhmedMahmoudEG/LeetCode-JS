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
};