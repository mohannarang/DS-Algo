function ListNode(val) {
  this.val = val;
  this.next = null;
}

/////////////// Iterative ///////////////////
var addTwoNumbers = function (l1, l2) {
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
var addTwoNumbers = function (l1, l2, carry = 0) {
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
  node.next = addTwoNumbers(l1 != null ? l1.next : l1,
    l2 != null ? l2.next : null,
    val >= 10 ? 1 : 0);
  return node;
};


/////////////// followup //////////////////
// Suppose the digits are stored in forward order //
var reverse = function (head) {
  let prev = null;
  let current = head;
  while (current != null) {
    let next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  return prev;
};

//// One way is to reverse the list run the same logic as above and reverse the final list. */
var addTwoNumbers = function (l1, l2) {
  l1 = reverse(l1);
  l2 = reverse(l2);
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
  return reverse(dummyNode.next);
};

/////////////////// Recursive ////////////////
var length = function (head) {
  let current = head;
  let count = 0;
  while (current != null) {
    current = current.next;
    count++;
  }
  return count;
}

var insertBefore = function (node, data) {
  let before = new ListNode(data);
  before.next = node;
  return before;
}

var addTwoLists = function (l1, l2) {
  if (l1 == null && l2 == null) {
    return { node: null, carry: 0 };
  }

  let sum = addTwoLists(l1.next, l2.next);

  let val = sum.carry;
  if (l1) {
    val += l1.val;
  }
  if (l2) {
    val += l2.val;
  }

  let node = new ListNode(val % 10);
  node.next = sum.node;

  return { node, carry: val >= 10 ? 1 : 0 };
}

var addTwoNumbers = function (l1, l2) {
  const len1 = length(l1);
  const len2 = length(l2);

  let [large, small] = len1 > len2 ? [l1, l2] : [l2, l1];
  for (let i = 0; i < Math.abs(len1 - len2); i++) {
    small = insertBefore(small, 0);
  }
  let sum = addTwoLists(large, small);
  if (sum.carry) {
    return insertBefore(sum.node, 1);
  }
  return sum.node;
};