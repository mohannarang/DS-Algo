function nthToLastIterative(head, k) {
  let ahead = head;
  let before = head;

  for (let i = 0; i < k; i++) {
    if (ahead == null) return null;
    ahead = ahead.next;
  }

  while (ahead != null) {
      before = before.next;
      ahead = ahead.next;
  }
  return before;
}
