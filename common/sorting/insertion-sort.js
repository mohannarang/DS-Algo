function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        const val = arr[i];
        let j = i;
        while (j >0 && arr[j - 1] > val) {
            arr[j] = arr[j - 1];
            j--;
        }
        arr[j] = val;
    }
}
