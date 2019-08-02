/* 
队列：
一种特殊列表，只能在队尾插入元素，队首删除元素
先进先出 
*/

class Queue {
    constructor() {
        this.dataStore = [];
        this.enqueue = enqueue;
        this.dequeue = dequeue;
        this.front = front;
        this.back = back;
        this.toString = toString;
        this.empty = empty;
    }

    // 入队
    enqueue(element) {
        this.dataStore.push(element);
    }

    // 出队
    dequeue() {
        this.dataStore.shift();
    }

    // 队尾元素
    back() {
        return this.dataStore[this.dataStore.length - 1]
    }

    toString() {
        let retStr = "";
        for(let i = 0; i<this.dataStore.length; i++) {
            retStr += this.dataStore[i] + "\n"
        }
        return retStr;
    }

    // 判断是否为空
    empty() {
        if(this.dataStore.length === 0) {
            return true;
        } else {
            return false;
        }
    }

    clear() {
        if(this.dataStore.length!==0) {
            this.dataStore = [];
        }
    }

    // 读取队头元素
    peek() {
        return this.dataStore[0]
    }
}

module.exports = Queue;