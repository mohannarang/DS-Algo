// Implement classes Node and Linked Lists

class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insertFirst(data) {
        this.insertAt(data, 0);
    }

    size() {
        let current = this.head;
        let counter = 0;
        while (current != null) {
            current = current.next;
            counter++;
        }
        return counter;
    }

    getFirst() {
        return this.getAt(0);
    }

    getLast() {
        // if (!this.head) {
        //     return null;
        // }
        // let current = this.head;
        // while (current.next != null) {
        //     current = current.next;
        // }
        // return current;
        return this.getAt(this.size() - 1);
    }

    clear() {
        this.head = null;
    }

    removeFirst() {
        if (!this.head) {
            return;
        }
        this.head = this.head.next;
    }

    removeLast() {
        if (!this.head) {
            return;
        }
        if (!this.head.next) {
            this.head = null;
            return;
        }
        let prev = this.head;
        let current = prev.next;
        while (current.next != null) {
            prev = current;
            current = current.next;
        }
        prev.next = null;
    }

    insertLast(data) {
      const last = this.getLast();
      if (last) {
          last.next = new Node(data);;
      } else {
          this.head = new Node(data);;
      }
    }

    getAt(index) {
        let counter = 0;
        let current = this.head;
        while (counter < index && current != null) {
            counter++;
            current = current.next;
        }
        return current;
    }

    removeAt(index) {
        if (!this.head) {
            return;
        }
        if (index === 0) {
            this.head = this.head.next;
            return;
        }
        const prev = this.getAt(index - 1);
        if (prev && prev.next) {
          prev.next = prev.next.next
        }
    } 

    insertAt(data, index) {
        if (!this.head || index === 0) {
            this.head = new Node(data, this.head);
            return;
        }
        const prev = this.getAt(index - 1) || this.getLast();
        const node = new Node(data, prev.next);
        prev.next = node;
    }

    forEach(fn) {
        let current = this.head;
        let counter = 0;
        while (current != null) {
            fn(current, counter);
            current = current.next;
            counter++;
        }
    }

    *[Symbol.iterator]() {
        let current = this.head;
        while (current != null) {
          yield current;
          current = current.next;
        }
    }
}

module.exports = { Node, LinkedList };
