1/**
2 * Definition for singly-linked list.
3 * function ListNode(val, next) {
4 *     this.val = (val===undefined ? 0 : val)
5 *     this.next = (next===undefined ? null : next)
6 * }
7 */
8/**
9 * @param {ListNode} l1
10 * @param {ListNode} l2
11 * @return {ListNode}
12 */
13var addTwoNumbers = function(l1, l2) {
14    let l3 =new ListNode(0);
15    let current = l3
16    let carry = 0;
17    while(l1!=null||l2!=null||carry!==0){
18         let x = l1 ? l1.val : 0;
19        let y = l2 ? l2.val : 0;
20        
21        let sum = x + y + carry;
22        carry = Math.floor(sum / 10);
23
24        current.next = new ListNode(sum % 10);
25        current = current.next;
26
27        if (l1 !== null) l1 = l1.next;
28        if (l2 !== null) l2 = l2.next;
29
30    }
31    return l3.next;
32};