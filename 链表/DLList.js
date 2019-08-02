/*  
双向链表
便于从后向前遍历
 */

const _LList = require("./LList");
const LList = _LList.LList;
const Node = _LList.Node

class DNode extends Node{
    constructor(element) {
        super(element);
        this.previous = null;
    }
}

class DLList  extends LList{
    constructor() {
        super();
    }

    insert(newElement, item) {
        let newNode = new DNode(newElement);
        let current = this.find(item);
        newNode.next = current.next;
        newNode.previous = current;
        current.next = newNode;
     }

     dispReverse() {
        let currNode = this.head;
        currNode = this.findLast();
        while (!(currNode.previous == null)) {
           console.log(currNode.element);
           currNode = currNode.previous;
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
        let currNode = this.find(item);
        if (!(currNode.next == null)) {
            currNode.previous.next = currNode.next;
            currNode.next.previous = currNode.previous;
            currNode.next = null;
            currNode.previous = null;
        }
     }

     findPrevious(item) {
         return item.previous;
     }
}
// let cities = new DLList();
// cities.insert("Conway", "head");
// cities.insert("Russellville", "Conway");
// cities.insert("Carlisle", "Russellville");
// cities.insert("Alma", "Carlisle");
// cities.display();
// console.log();
// cities.remove("Carlisle");
// cities.display();
// console.log();
// cities.dispReverse();