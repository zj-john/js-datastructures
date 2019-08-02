/* 
双向队列：
允许队列2端添加删除元素
 */
const Queue = require("./Queue");

class Deque extends Queue {
    constructor() {
        super();
    }

    enqueue(type, element) {
        if(type === 'front') {
            this.dataStore.unshift(element)
        } else if(type === 'back') {
            this.dataStore.push(element);
        }
    }
    
    dequeue(type) {
        if(type === 'front') {
            this.dataStore.shift()
        } else if(type === 'back') {
            this.dataStore.pop();
        }        
    }
}

module.exports = Deque;