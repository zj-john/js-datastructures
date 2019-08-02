
// 将n个人围成一圈，并且第m个人会被杀掉，计算一圈中哪两个人最后会存活
const CLList = require("./CLList");

const save = function (n, m) {
    let i = 1;
    let list = new CLList();
    while (i < (n + 1)) {
        list.push(i);
        i++;
    }
    let tempNode = list.head;
    while (list.count() != 1) {
        let j = 1;
        while (j < m) {
            tempNode = tempNode.next;
            j++;
        }
        if (tempNode.element == list.head.element) {
            list.head = tempNode.next;
        }
        list.remove(tempNode.element);
        tempNode = tempNode.next;

    }
    list.display();
}

save(10, 3);