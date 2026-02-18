1/**
2 * Definition for singly-linked list.
3 * function ListNode(val, next) {
4 *     this.val = (val===undefined ? 0 : val)
5 *     this.next = (next===undefined ? null : next)
6 * }
7 */
8/**
9 * @param {ListNode} list1
10 * @param {ListNode} list2
11 * @return {ListNode}
12 */
13var mergeTwoLists = function(list1, list2) {
14    let list = new ListNode
15    let dummy = list
16    while(list1&&list2){
17        if(list1.val<list2.val){
18            dummy.next = list1
19            list1 = list1.next
20        }else{
21            dummy.next = list2
22            list2 = list2.next
23        }
24        dummy = dummy.next
25    }
26   dummy.next = list1||list2
27    return list.next
28};