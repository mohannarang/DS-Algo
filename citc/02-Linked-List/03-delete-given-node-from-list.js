function deleteNode(node) {
    if (node == null || node.next == null) {
        return null;
    }
    const next = node.next;
    node.next = next.next;
    node.data = next.data;
}