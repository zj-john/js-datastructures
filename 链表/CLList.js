/*  
循环链表
尾指向头，也可从后向前遍历，比双向链表简单。
 */

const _LList = require("./LList");
const LList = _LList.LList;
const Node = _LList.Node;


class CLList extends LList {
    constructor() {
        super();
    }

    findLast() {
        let currNode = this.head;
        while (!(currNode.next.element == this.head.element)) {
            currNode = currNode.next;
        }
        return currNode;
    }

    push(newElement) {
        let newNode = new Node(newElement);
        if(this.isEmpty()) {
            this.head = newNode;
            this.head.next = this.head;
        } else {
            const lastNode = this.findLast();                       
            newNode.next = lastNode.next;
            lastNode.next = newNode; 
        }
    }

    display() {
        let currNode = this.head.next;
        console.log(this.head.element);
        while (!(currNode.element == this.head.element)) {
            console.log(currNode.element);
            currNode = currNode.next;
        }
    }
    remove(item) {
        const prevNode = this.findPrevious(item);
        prevNode.next = prevNode.next.next;
    }

    findPrevious(item) {
        let currNode = this.head;
        while ((currNode.next.element != item) && !(currNode.next.element == this.head.element)) {
            currNode = currNode.next;
        }
        return currNode;
    }

    count() {
        let i = 1;
        let currNode = this.head.next;
        while (!(currNode.element == this.head.element)) {
            currNode = currNode.next;
            i++;
        }
        return i;
    }
}

module.exports = CLList;