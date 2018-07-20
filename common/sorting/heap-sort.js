
function swap(arr, i, j) {
    const tmp = arr[i];
    arr[i] = arr[j];
    arr[j] =  tmp;
}

function defaultComparator(val1, val2) {
  if (val1 > val2) {
      return 1;
  } else if (val2 > val1) {
      return -1;
  }
  return 0;
}

function heapify(arr, n, i, comparator) {
    let parent = i;
    const leftChild = 2 * i + 1;
    const rightChild = 2 * i + 2;
    if (leftChild < n && comparator(arr[leftChild], arr[parent]) > 0) {
        parent = leftChild;
    }
    if (rightChild < n && comparator(arr[rightChild], arr[parent]) > 0) {
        parent = rightChild;
    }

    if (parent != i) {
        swap(arr, i, parent);
        heapify(arr, n, parent, comparator);
    }
}


function heapSort(arr, comparator = defaultComparator) {
    const len = arr.length;
    // Build heap.
    let lastParent = Math.floor(len / 2) -  1;
    for (let i = lastParent; i >= 0; i--) {
       heapify(arr, len , i, comparator);
    }
    for (let i = len - 1; i > 0; i--) {
      swap(arr, 0, i);
      heapify(arr, i, 0, comparator);
    }
    return arr;
}
