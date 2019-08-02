/* 
栈：
栈顶入栈，栈尾出栈，后入先出
 */
class Stack {
    constructor() {
        this.dataStore = [];
        this.top = 0;
    }

    push(element) {
        this.dataStore[this.top++] = element;
    }

    pop() {
        return this.dataStore[--this.top];
    }

    peek() {
        return this.dataStore[this.top-1];
    }

    length() {
        return this.top;
    }

    clear() {
        this.top = 0;  
    }
}

module.exports = Stack;