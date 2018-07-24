// Slow method with two pointers.
function removeDups(head) {
  let current = head;
  while (current != null) {
    let runner = current;
    while (runner.next != null) {
      if (runner.next.val == current.val) {
        runner.next = runner.next.next;
      } else {
        runner = runner.next;
      }
    }
    currnet = current.next;
  }
}

// Using hash set and previous node.
function removeDups(head) {
  let set = new Set();
  let current = head;
  let prev = null;
  while (current != null) {
    if (set.has(current.val)) {
      prev.next = current.next;
    } else {
      set.add(current.val);
      prev = current;
    }
    current = current.next;
  }
}

// Using hash set without previous node.
function removeDups(head) {
  if (head == null) {
    return head;
  }
  let set = new Set();
  set.add(head.val);

  let current = head;
  while (current.next != null) {
    if (set.has(current.next.val) {
      current.next = current.next.next;
    } else {
      set.add(current.val);
      prev = current;
    }
  }
}