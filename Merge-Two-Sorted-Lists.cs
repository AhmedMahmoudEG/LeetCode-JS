1/**
2 * Definition for singly-linked list.
3 * public class ListNode {
4 *     public int val;
5 *     public ListNode next;
6 *     public ListNode(int val=0, ListNode next=null) {
7 *         this.val = val;
8 *         this.next = next;
9 *     }
10 * }
11 */
12public class Solution {
13    public ListNode MergeTwoLists(ListNode l1, ListNode l2) {
14        if(l1 == null) return l2;
15        if(l2 == null) return l1;
16        if(l1.val <= l2.val){
17            l1.next = MergeTwoLists(l1.next,l2);
18            return l1;
19        }else{
20            l2.next = MergeTwoLists(l1,l2.next);
21            return l2;
22        }
23    }
24}