function merge(arr, l, m, r) {
  const L = [];
  for (let i = 0; i < m - l + 1; i++) {
    L[i] = arr[l + i];
  }

  const R = [];
  for (let i = 0; i < r - m; i++) {
    R[i] = arr[m + 1 + i];
  }

  let i = 0;
  let j = 0;
  let k = l;
  while (i < L.length && j < R.length) {
    if (L[i] <= R[j]) {
      arr[k++] = L[i++];
    } else {
      arr[k++] = R[j++];
    }
  }

  while (i < L.length) {
    arr[k++] = L[i++];
  }
  while (j < R.length) {
    arr[k++] = R[j++];
  }
}

function mergeSort(arr, l, r) {
  if (l < r) {
    const m = Math.floor((l + r) / 2);

    mergeSort(arr, l, m);
    mergeSort(arr, m + 1, r);

    merge(arr, l, m, r);
  }
}