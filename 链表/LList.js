/* 
1. 在很多语言中，数组的长度是固定的，添加、删除也很复杂，然而在JS中并没有这个问题（splice）
2. JS中数组的问题是：被实现成了对象，所以相比其他语言，效率低。如果发现数组慢，可以用链表替代。
 */

class Node {
    constructor(element) {
        this.element = element;
        this.next = null;
    }
}

class LList {
    constructor() {
        // 头结点
        this.head = null;
    }

    insert(newElement, item) {
        let newNode = new Node(newElement);
        let current = this.find(item);
        newNode.next = current.next;
        current.next = newNode;
    }

    push(newElement) {
        let newNode = new Node(newElement);
        if(this.isEmpty()) {
            this.head = newNode;
        } else {
            const lastNode = this.findLast();
            lastNode.next = newNode;
        }        
    }

    findLast() {
        if(this.isEmpty()) {
            return null;
        }
        let currNode = this.head;
        while (!(currNode.next == null)) {
            currNode = currNode.next;
        }
        return currNode;
    }

    remove(item) {
        const prevNode = this.findPrevious(item);
        if (!(prevNode.next == null)) {
            prevNode.next = prevNode.next.next;
        }
    }

    findPrevious(item) {
        let currNode = this.head;
        while (!(currNode.next == null) &&
            (currNode.next.element != item)) {
            currNode = currNode.next;
        }
        return currNode;
    }

    display() {
        if(this.isEmpty()) {
            console.log("List is empty");
            return null;
        }
        let currNode = this.head;
        while (!(currNode == null)) {
            console.log(currNode.element);
            currNode = currNode.next;
        }
    }

    find(item) {
        if(this.isEmpty()) {
            return null;
        }
        let currNode = this.head;
        while (currNode.element != item) {
            currNode = currNode.next;
        }
        return currNode;
    }

    // 在链表中向前移动n个节点
    advance(item, n) {
        const prevNode = this.findPrevious(item);
        const currNode = prevNode.next;
        let tempNode = this.head;
        let i = 0;
        while (tempNode.element != item) {
            tempNode = tempNode.next;
            i++;
        }
        if (i < n) {
            console.log("无法向前移动n个节点");
            return;
        }
        let j = 0
        let nPrevNode = this.head
        while(j < i-n-1) {
            nPrevNode = nPrevNode.next;
            j++;
        }
        prevNode.next = currNode.next;
        currNode.next =  nPrevNode.next;
        nPrevNode.next = currNode;
    }

    // 在链表中向后移动n个节点
    back(item, n) {
        const prevNode = this.findPrevious(item);
        const currNode = prevNode.next;
        let i = 0;
        let nNextNode = currNode;
        while ((i < n) && !(nNextNode.next == null)) {
            nNextNode = nNextNode.next;
            i++;
        }
        if (i < n) {
            console.log("无法向后移动n个节点");
            return;
        } else {
            prevNode.next = currNode.next;
            currNode.next = nNextNode.next;
            nNextNode.next = currNode;    
        }
    }

    // 只显示当前节点
    show(item) {
        const prevNode = this.findPrevious(item);
        console.log(prevNode.next.element);
    }

    isEmpty() {
        return this.head==null?true:false;
    }
}

// var cities = new LList();
// cities.push("Conway");
// cities.push("Russellville")
// cities.push("Carlisle")
// // cities.push("Alma")
// // cities.insert("Russellville", "Conway");
// // cities.insert("Carlisle", "Russellville");
// cities.insert("Alma", "Carlisle");
// cities.display();
// console.log();
// cities.back("Russellville",1)
// // cities.remove("Carlisle");
// cities.display();
// console.log();
// cities.advance("Alma",2);
// cities.display();

module.exports = { LList, Node };