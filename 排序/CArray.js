// 生成随机数组
class CArray {
    constructor(numElements) {
        this.dataStore = [];
        this.pos = 0;
        this.numElements = numElements;
        this.insert = insert;
        this.toString = toString;
        this.clear = clear;
        this.setData = setData;
        this.swap = swap;

        this.bubbleSort = bubbleSort;
        this.selectionSort = selectionSort;
        this.insertionSort = insertionSort;

        this.gaps = [5, 3, 1];
        this.shellSort = shellSort;
        this.dynamicShellSort = dynamicShellSort;

        this.mergeSort = mergeSort;
        this.quickSort = quickSort;

        for (var i = 0; i < numElements; ++i) {
            this.dataStore[i] = i;
        }
    }
}

function setData() {
    for (var i = 0; i < this.numElements; ++i) {
        this.dataStore[i] = Math.floor(Math.random() * (this.numElements + 1));
    }
}

function clear() {
    for (var i = 0; i < this.dataStore.length; ++i) {
        this.dataStore[i] = 0;
    }
}

function insert(element) {
    this.dataStore[this.pos++] = element;
}

function toString() {
    var retstr = "";
    for (var i = 0; i < this.dataStore.length; ++i) {
        retstr += this.dataStore[i] + " ";
        if (i > 0 && i % 10 == 0) {
            retstr += "\n";
        }
    }
    return retstr;
}

function swap(arr, index1, index2) {
    var temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
}


// 冒泡排序：最慢的排序之一
function bubbleSort() {
    var numElements = this.dataStore.length;
    var temp;
    for (var outer = numElements; outer >= 2; --outer) {
        for (var inner = 0; inner <= outer - 1; ++inner) {
            if (this.dataStore[inner] > this.dataStore[inner + 1]) {
                swap(this.dataStore, inner, inner + 1);
            }
        }
    }
}


// 选择排序
function selectionSort() {
    var min;
    for (var outer = 0; outer <= this.dataStore.length - 2; ++outer) {
        min = outer;
        for (var inner = outer + 1; inner <= this.dataStore.length - 1; ++inner) {
            if (this.dataStore[inner] < this.dataStore[min]) {
                min = inner;
            }
        }
        swap(this.dataStore, outer, min);
    }
}

//  插入排序
function insertionSort() {
    var temp, inner;
    for (var outer = 1; outer <= this.dataStore.length - 1; ++outer) {
        temp = this.dataStore[outer];
        inner = outer;
        while (inner > 0 && (this.dataStore[inner - 1] >= temp)) {
            this.dataStore[inner] = this.dataStore[inner - 1];
            --inner;
        }
        this.dataStore[inner] = temp;
    }
}

// 希尔排序
function shellSort() {
    for (var g = 0; g < this.gaps.length; ++g) {
        for (var i = this.gaps[g]; i < this.dataStore.length; ++i) {
            var temp = this.dataStore[i];
            for (var j = i; j >= this.gaps[g] && this.dataStore[j - this.gaps[g]] > temp;
                j -= this.gaps[g]) {
                this.dataStore[j] = this.dataStore[j - this.gaps[g]];
            }
            this.dataStore[j] = temp;
        }
    }
}

// 动态计算间隔排序的希尔排序
function dynamicShellSort() {
    var N = this.dataStore.length;
    var h = 1;
    while (h < N / 3) {
        h = 3 * h + 1;
    }
    while (h >= 1) {
        for (var i = h; i < N; i++) {
            for (var j = i; j >= h && this.dataStore[j] < this.dataStore[j - h];
                j -= h) {
                swap(this.dataStore, j, j - h);
            }
        }
        h = (h - 1) / 3;
    }
}

// 归并排序
function mergeArrays(arr, startLeft, stopLeft, startRight, stopRight) {
    var rightArr = new Array(stopRight - startRight + 1);
    var leftArr = new Array(stopLeft - startLeft + 1);
    k = startRight;
    for (var i = 0; i < (rightArr.length - 1); ++i) {
        rightArr[i] = arr[k];
        ++k;
    }

    k = startLeft;
    for (var i = 0; i < (leftArr.length - 1); ++i) {
        leftArr[i] = arr[k];
        ++k;
    }

    rightArr[rightArr.length - 1] = Infinity; // a sentinel value
    leftArr[leftArr.length - 1] = Infinity; // a sentinel value
    var m = 0;
    var n = 0;
    for (var k = startLeft; k < stopRight; ++k) {
        if (leftArr[m] <= rightArr[n]) {
            arr[k] = leftArr[m];
            m++;
        }
        else {
            arr[k] = rightArr[n];
            n++;
        }
    }
    console.log("left array - ", leftArr);
    console.log("right array - ", rightArr);
}

function mergeSort() {
    if (this.dataStore.length < 2) {
        return;
    }
    var step = 1;
    var left, right;
    while (step < this.dataStore.length) {
        left = 0;
        right = step;
        while (right + step <= this.dataStore.length) {
            mergeArrays(this.dataStore, left, left + step, right, right + step);
            left = right + step;
            right = left + step;
        }
        if (right < this.dataStore.length) {
            mergeArrays(this.dataStore, left, left + step, right, this.dataStore.length);
        }
        step *= 2;
    }
}

//  快速排序
function quickSort() {
    let arry = qSort(this.dataStore);
    console.log(arry);
}

function qSort(arr) {
    if (arr.length == 0) {
        return [];
    }
    var left = [];
    var right = [];
    var pivot = arr[0];
    for (var i = 1; i < arr.length; i++) {

        if (arr[i] < pivot) {

            left.push(arr[i]);
        } else {

            right.push(arr[i]);
        }
    }
    return qSort(left).concat(pivot, qSort(right));
}

var numElements = 10;
var myNums = new CArray(numElements);
myNums.setData();
console.log(myNums.toString());


// myNums.bubbleSort();
// console.log("\n");
// console.log(myNums.toString());


// myNums.selectionSort();
// console.log("\n");
// console.log(myNums.toString());


// myNums.insertionSort();
// console.log("\n");
// console.log(myNums.toString());


// myNums.shellSort();
// console.log("\n");
// console.log(myNums.toString());

// myNums.dynamicShellSort();
// console.log("\n");
// console.log(myNums.toString());

// myNums.mergeSort();
// console.log("\n");
// console.log(myNums.toString());

myNums.quickSort();