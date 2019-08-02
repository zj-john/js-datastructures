/* 
优先队列：
根据优先级决定出队顺序
 */
const Queue = require("./Queue");

class ItemStructure {
    constructor(name, code) {
        this.name = name;
        this.code = code;
    }
}

class PriorityQueue extends Queue {
    constructor() {
        super();
    }
    
    dequeue() {
        let entry = 0;
        for(let i = 1; i < this.dataStore.length; ++i) {
            if(this.dataStore[i].code < this.dataStore[entry].code) {
                entry = i;
            }
        }
        return this.dataStore.splice(entry,1);
    }

    toString() {
        let retStr = "";
        for(let i =0;i<this.dataStore.length; ++i) {
            retStr += this.dataStore[i].name + "code: " + this.dataStore[i].code + "\n";
        }
        return retStr;
    }
}

const test = new PriorityQueue();
const a = new ItemStructure("john", 0)
test.enqueue(a);
