/**
 * // Definition for a _Node.
 * function _Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {_Node} head
 * @return {_Node}
 */
var copyRandomList = function(head) {
    if (!head) return null;
    let current = head;
    const oldToNew = new Map();
    while(current){
        oldToNew.set(current, new Node(current.val));
        current = current.next;
    }
    current = head;
    while(current){
        const newNode = oldToNew.get(current);
        newNode.next = oldToNew.get(current.next) || null;
        newNode.random = oldToNew.get(current.random) || null;
        current = current.next;
    }
    return oldToNew.get(head)
};