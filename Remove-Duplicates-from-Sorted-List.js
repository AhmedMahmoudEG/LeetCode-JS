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
    let current = head
    /*
    while(current && current.next){
        console.log(current.val)
        if(current.val==current.next.val){
            //skip the dup
            current.next = current.next.next
        }else{
                //move forward
        current = current.next
        }
        
    }
    */
    let temp = head

    while(temp && temp.next!==null){
        while(temp.next && temp.next.val == temp.val){
            temp.next = temp.next.next
        }

        temp = temp.next
    }

    return head
};