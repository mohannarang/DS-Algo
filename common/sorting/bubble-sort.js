
function swap(arr, i, j) {
    const tmp = arr[i];
    arr[i] = arr[j];
    arr[j] =  tmp;
}

// Traditional.
function bubbleSort(arr) {
    const len = arr.length;
    for (let i = 0; i < len - 1; i++) {
        for (let j = 0; j < len - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr, j , j + 1);
            }
        }
    }
}

// Better one by Gayle McDowell.
function bubbleSortOptimized1(arr) {
    let lastUnsorted = arr.length - 1;
    let isSorted = false;
    while (!isSorted) {
        isSorted = true;
        for (let j = 0; j < lastUnsorted; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr, j , j + 1);
                isSorted = false;
            }
        }
        unsortedCount--;
    }
}

function bubbleSortOptimized2(arr) {
    const len = arr.length;
    let swaped = false;
    for (let i = 0; i < len - 1; i++) {
        swaped = false;
        for (let j = 0; j < len - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr, j , j + 1);
                swaped = true;
            }
        }
        if (swapped == false) {
            break;
        }
    }
}