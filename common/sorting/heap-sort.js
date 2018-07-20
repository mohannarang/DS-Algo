
function swap(arr, i, j) {
    const tmp = arr[i];
    arr[i] = arr[j];
    arr[j] =  tmp;
}

function heapifyMax(arr, n, i) {
    let largest = i;
    const l = 2 * i + 1;
    const r = 2 * i + 2;
    if (l < n && arr[l] > arr[largest]) {
        largest = l;
    }
    if (r < n && arr[r] > arr[largest]) {
        largest = r;
    }

    if (largest != i) {
        swap(arr, i, largest);
        heapifyMax(arr, n, largest);
    }
}

function heapifyMin(arr, n, i) {
    let smallest = i;
    const l = 2 * i + 1;
    const r = 2 * i + 2;
    if (l < n && arr[l] < arr[largest]) {
        smallest = l;
    }
    if (r < n && arr[r] < arr[largest]) {
        smallest = r;
    }

    if (smallest != i) {
        swap(arr, i, smallest);
        heapifyMin(arr, n, smallest);
    }
}


function heapSortAscending(arr) {
    const len = arr.length;
    // Build heap.
    let lastParent = Math.floor(len / 2) -  1;
    for (let i = lastParent; i >= 0; i--) {
       heapifyMax(arr, len , i);
    }
    for (let i = len - 1; i > 0; i--) {
      swap(arr, 0, i);
      heapifyMax(arr, i, 0);
    }
}

function heapSortDescending(arr) {
    const len = arr.length;
    // Build heap.
    let lastParent = Math.floor(len / 2) -  1;
    for (let i = lastParent; i >= 0; i--) {
       heapifyMin(arr, len , i);
    }
    for (let i = len - 1; i > 0; i--) {
      swap(arr, 0, i);
      heapifyMin(arr, i, 0);
    }
}