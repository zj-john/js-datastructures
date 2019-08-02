// 顺序查找（线性查找）

function seqSearch(arr, data) {
    for (var i = 0; i < arr.length; ++i) {
        if (arr[i] == data) {
            //   return true;
            return i;
        }
    }
    // return false;
    return -1;
}


function findMin(arr) {
    var min = arr[0];
    for (var i = 1; i < arr.length; ++i) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}

function findMax(arr) {
    var max = arr[0];
    for (var i = 1; i < arr.length; ++i) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}


// 自组织查找：通过频繁查找到的元素置于数据集的起始位置来最小化查找次数
// 原理：80-20原则（帕累托分布）
function seqSearch(arr, data) {
    for (var i = 0; i < arr.length; ++i) {
       if (arr[i] == data && i > (arr.length * 0.2)) {
          swap(arr,i,0);
          return true;
       }
       else if (arr[i] == data) {
          return true;
       }
    }
    return false;
 }

 function swap(arr, index, index1) {
     let temp = arr[index];
     arr[index] = arr[index1];
     arr[index1] = temp;
 }


//  二分查找：针对有序数据
function binSearch(arr, data) {
    var upperBound = arr.length-1;
    var lowerBound = 0;
    while (lowerBound <= upperBound) {
       var mid = Math.floor((upperBound + lowerBound) / 2);
       if (arr[mid] < data) {
          lowerBound = mid + 1;
       }
       else if (arr[mid] > data) {
          upperBound = mid - 1;
       }
       else {
          return mid;
       }
    }
    return -1;
 }