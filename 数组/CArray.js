/* 
数组：
数组在JS中是一种特殊的对象，所以效率上不如其它语言高。
 */

class CArray {
    constructor(length) {
        this.dataStore = length && typeof(length)=='number' && length>0 ?new Array(length):[];
    }

    isArray(arr) {
        return Array.isArray(arr);
    }

    // 深复制
    deepCopy(arr1, arr2) {
        for(let i=0; i<element.length; i++) {
            arr2[i] = arr1[i];
        }
    }

    // 查找：从头遍历
    indexOf(element) {
        return this.dataStore.indexOf(element);
    }

    // 查找：从尾遍历
    lastIndexOf(element) {
        return this.dataStore.lastIndexOf(element);
    }

    // 字符串表示
    join(sign=',') {
        return this.dataStore.join(sign);
    }

    // 字符串表示
    toString() {
        return this.join();
    }

    // 已有数组创建新数组
    concat(arr1) {
        return this.dataStore.concat(arr1);
    }

    // 已有数组创建新数组，从数组中间位置添加和删除元素
    splice(startIndex, len, element) {
        // startIndex：起始索引
        // len：需要删除的元素的个数，添加元素是设为0
        // arr：想要添加进数组的元素
        return this.dataStore.splice(startIndex, len, element);
    }

    // 增加：元素添加数组末尾
    push(element) {
        this.dataStore.push(element);
    }

    // 增加：元素添加在数组开头
    unshift() {
        this.dataStore.unshift(element);
    }

    // 删除：删除末尾元素
    pop() {
        this.dataStore.pop();
    }

    // 删除：删除第一个元素
    shift() {
        this.dataStore.shift();
    }

    // 排序：逆序
    reverse() {
        return this.dataStore.reverse();
    }

    // 排序：
    sort(func) {
        // 没有排序函数时：数组中是字符串类型的元素时，数组元素是数字时结果不理想
        return this.dataStore.sort(func);
    }

    // 迭代
    forEach(func) {
        return this.dataStore.forEach(func);
    }

    // 迭代：所有返回true，结果返回true
    every(func) {
        // func:返回值是bool类型
        return this.dataStore.every(func);
    }

    // 迭代：只要有一个true，结果返回true
    some(func) {
        // func:返回值是bool类型
        return this.dataStore.some(func);
    }

    // 迭代
    reduce(func) {
        // func(initValue, item)
        return this.dataStore.reduce(func);
    }

    // 迭代:从右向左执行的reduce
    reduceRight(func) {
        // func(initValue, item)
        return this.dataStore.reduceRight(func);
    }

    // 生成新数组
    map(func) {
        return this.dataStore.map(func);
    }

    // 生成新数组:所有返回true的元素
    filter(func) {
        // func:返回值是bool类型
        return this.dataStore.filter(func);

    }

    // 二维数组
    metrix(numrows, numcols, initial) {
        let arr = [];
        for (let i = 0; i < numrows; i++) {
            let columns = [];
            for(let j = 0; j < numcols; j++) {
                columns[j] = initial
            }
            arr[i] = columns;
        }
        return arr;
    }
}

module.exports = CArray;