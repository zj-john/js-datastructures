/* 列表：有序数据 */
class List {
    constructor() {
        // 元素个数
        this.listSize = 0;
        // 当前位置
        this.pos = 0;
        // 储存列表
        this.dataStore = [];
    }

    // 在列表的末尾添加新元素
    append(element) {
        this.dataStore[this.listSize++] = element;
    }

    // 查找指定元素位置
    find(element) {
        for (let i = 0; i < this.dataStore.length; ++i) {            
            if(element instanceof Object) {
                if (isObjectEqual(this.dataStore[i],element)) {
                    return i;
                }
            } else {
                if (this.dataStore[i] == element) {
                    return i;
                }
            }
            
        }
        return -1;
    }

    // 从列表中删除指定元素
    remove(element) {
        const foundAt = this.find(element);
        if (foundAt > -1) {
            this.dataStore.splice(foundAt, 1);
            --this.listSize;
            return true;
        }
        return false;
    }

    // 返回列表个数
    length() {
        return this.listSize;
    }

    // 显示列表中的元素
    toString() {
        return this.dataStore;
    }

    // 在指定元素后插入
    insert(element, after) {
        const insertPos = this.find(after);
        if (insertPos > -1) {
            this.dataStore.splice(insertPos + 1, 0, element);
            ++this.listSize;
            return true
        } else {
            return false;
        }
    }

    // 清空
    clear() {
        delete this.dataStore;
        this.dataStore.length = 0;
        this.listSize = this.pos = 0;
    }

    contains(element) {
        const pos = this.find(element);
        if (pos > -1) {
            return true;
        } else {
            return false;
        }
    }
    // 当前位置移动到第一个元素
    front() {
        this.pos = 0;
    }
    // 当前位置移动到最后一个元素
    end() {
        this.pos = this.listSize - 1;
    }
    // 前移一位
    prev() {
        if (this.hasPrev()) {
            --this.pos;
        }
    }
    // 后移一位
    next() {
        if (this.hasNext()) {
            ++this.pos;
        }
    }

    currPos() {
        return this.pos;
    }
    // 移动到指定位置
    moveTo(position) {
        this.pos = position;
    }
    // 返回当前位置元素
    getElement() {
        return this.dataStore[this.pos];
    }

    hasNext() {
        return this.pos < this.listSize;
    }

    hasPrev() {
        return this.pos > 0;
    }
}

function isObjectEqual(obj1, obj2) {
    if(Object.keys(obj1).length !== Object.keys(obj2).length) {
        return false;
    }
    for(k in obj1) {
        if(obj1[k] instanceof Object && obj2[k] instanceof Object) {
            return isObjectEqual(obj1[k], obj2[k]);
        } else if( !(obj1[k] instanceof Object) && !(obj2[k] instanceof Object)) {
            return obj1[k] === obj2[k];
        } else {
            return false;
        }
    }
    return true;

}

module.exports = List;

// 迭代器
/* 优点：
访问列表元素时不必关心底层的数据存储结构
当为列表添加一个元素时，索引的值就不对了，但是迭代器可以继续使用
可以用不同类型的数据存储方式实现List，不一定存在数组中，迭代器仍然通用 
*/
// for(names.front(); names.hasNext(); names.next()) {
//     print(names.getElement());
// }
// for(names.end(); names.hasPrev(); names.prev()) {
//     print(names.getElement());
// }