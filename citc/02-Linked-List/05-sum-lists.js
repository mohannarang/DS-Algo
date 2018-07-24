function ListNode(val) {
     this.val = val;
     this.next = null;
}


/////////////// Iterative ///////////////////
var addTwoNumbers = function(l1, l2) {
    let dummyNode = new ListNode();
    let current = dummyNode;
    let carry = 0;
    while (l1 || l2) {
        let val = carry;
        if (l1) {
            val += l1.val;
            l1 = l1.next;
        }
        if (l2) {
            val += l2.val;
            l2 = l2.next;
        }        
        current.next = new ListNode(val % 10);
        carry = val >= 10 ? 1 : 0;
        current = current.next; 
    }
    if (carry) {
        current.next = new ListNode(1);
    }
    return dummyNode.next;
};

/////////////// Recursive ///////////////////
var addTwoNumbers = function(l1, l2, carry = 0) {
    if (l1 == null && l2 == null) {
        return carry == 0 ? null : new ListNode(1);
    }
    let val = carry;
    if (l1) {
        val += l1.val;
    }
    if (l2) {
        val += l2.val;
    }
    
    const node = new ListNode(val % 10);
    node.next= addTwoNumbers(l1 != null ? l1.next : l1,
                             l2 != null ? l2.next : null,
                             val >= 10 ? 1 : 0);
    return node;
};
