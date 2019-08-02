/* 
键值对存储的数据结构
用数组或对象都可以实现，下面使用数组实现
 */
class Dictionary {
    constructor() {
        this.add = add;
        this.datastore = new Array();
        this.find = find;
        this.remove = remove;
        this.showAll = showAll;
        // 计数：此时length不生效
        this.count = count;
        this.clear = clear;
    }
}

function add(key, value) {
    this.datastore[key] = value;
}

function find(key) {
    return this.datastore[key];
}

function remove(key) {
    delete this.datastore[key];
}

function showAll() {
    Object.keys(this.datastore).sort().forEach(function(key){
        console.log(key + " -> " + this.datastore[key]);
    })
}

function count() {
    const keyList = Object.keys(this.datastore);
    return keyList.length;
}

function clear() {
    Object.keys(this.datastore).forEach(function(key){
        delete this.datastore[key];
    })
}
var pbook = new Dictionary();
pbook.add("Raymond","123");
pbook.add("David", "345");
pbook.add("Cynthia", "456");
console.log("Number of entries: " + pbook.count());
console.log("David's extension: " + pbook.find("David"));
pbook.showAll();
pbook.clear();
console.log("Number of entries: " + pbook.count());

module.exports = Dictionary;