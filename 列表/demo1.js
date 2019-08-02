/* 增加插入元素的方法，该方法只在待插入元素大于列表中所有元素时才执行插入操作。如果是数字，它是指数值上的大小；如果是字母，指字母先后顺序 */
const List = require("./List");

class NList extends List {
    constructor() {
        super();
    }

    max() {
        let max = this.getElement();
        for (this.front(); this.hasNext(); this.next()) {
            max = this.getElement() > max ? this.getElement() : max;
        }
        return max;
    }

    add(element) {
        if (this.length() == 0) {
            this.append(element);
        } else {
            const max = this.max();
            if (element > max) {
                this.append(element);
            } else {
                console.log("插入失败", element)
            }
        }
    }
}

const nlist = new NList();
nlist.add(1)
nlist.add(4)
nlist.add(5)
nlist.add(6)
nlist.add(2)