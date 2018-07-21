 class PriorityQueue {
  constructor(comparator = PriorityQueue.defaultComparator) {
    this.heap = [];
    this.comparator = comparator;
  }

  static defaultComparator(parent, child) {
    if (parent > child) {
      return -1;
    }
    if (parent < child) {
      return 1;
    }
    return 0;
  }

  get size() {
    return this.heap.length;
  }

  isEmpty() {
    return this.heap.length == 0;
  }

  peek() {
    if (this.size === 0) {
      throw Error('Priority queue is empty');
    }
    return this.heap[0];
  }

  poll() {
    const val = this.peek();
    this.heap[0] = this.heap[this.size - 1];
    this.heap.length--;

    heapifyDown_();

    return val;
  }

  add(val) {
    this.heap.push(val);
    this.heapifyUp_();
    return this.size;
  }

  heapifyDown_() {
    let pos = 0;
    while (pos < Math.floor(this.size / 2)) {
      const leftchild = pos * 2 + 1;
      const rightChild = pos * 2 + 2;
      let newPos = pos;
      if (this.comparator(arr[parent], arr[leftchild]) > 0) {
        newPos = leftChild;
      }
      if (this.comparator(arr[parent], arr[rightChild]) > 0) {
        newPos = rightChild;
      }
      if (newPos == pos) {
        break;
      }
      this.swap_(pos, newPos);
      pos = newPos;
    }
  }

  heapifyUp_() {
    let pos = this.size - 1;
    while (pos > 0) {
      const parent = Math.floor((pos - 1) / 2);
      if (this.comparator(this.heap[parent], this.heap[pos]) > 0) {
        this.swap_(parent, pos);
        pos = parent;
      } else {
        break;
      }
    }
  }

  swap_(i, j) {
    const temp = this.heap[j];
    this.heap[j] = this.heap[i];
    this.heap[i] = temp;
  }
}