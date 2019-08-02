/* 
集合：
集合中的成员是无序的，集合中不允许有相同元素出现
 */
class Set {
    constructor() {
        this.dataStore = [];
        this.add = add;
        this.remove = remove;
        this.size = size;
        this.union = union;
        this.contains = contains;
        this.intersect = intersect;
        this.subset = subset;
        this.difference = difference;
        this.show = show;
        this.sort = sort;
    }
}

function add(data) {
    if (this.dataStore.indexOf(data) < 0) {
        this.dataStore.push(data);
        return true;
    }
    else {
        return false;
    }
}

function remove(data) {
    var pos = this.dataStore.indexOf(data);
    if (pos > -1) {
        this.dataStore.splice(pos, 1);
        return true;
    }
    else {
        return false;
    }
}

function size() {
    return this.dataStore.length;
}

function show() {
    return "[" + this.dataStore + "]";
}

function contains(data) {
    if (this.dataStore.indexOf(data) > -1) {
        return true;
    }
    else {
        return false;
    }
}

// 并集
function union(set) {
    var tempSet = new Set();
    for (var i = 0; i < this.dataStore.length; ++i) {
        tempSet.add(this.dataStore[i]);
    }
    for (var i = 0; i < set.dataStore.length; ++i) {
        if (!tempSet.contains(set.dataStore[i])) {
            tempSet.dataStore.push(set.dataStore[i]);
        }
    }
    return tempSet;
}

// 交集
function intersect(set) {
    var tempSet = new Set();
    for (var i = 0; i < this.dataStore.length; ++i) {
        if (set.contains(this.dataStore[i])) {
            tempSet.add(this.dataStore[i]);
        }
    }
    return tempSet;
}

// 判断子集
function subset(set) {
    if (this.size() > set.size()) {
        return false;
    }
    else {
        this.dataStore.forEach((member) => {
            if (!set.contains(member)) {
                return false;
            }
        });
    }
    return true;
}

// 补集
function difference(set) {
    var tempSet = new Set();
    for (var i = 0; i < this.dataStore.length; ++i) {
        if (!set.contains(this.dataStore[i])) {
            tempSet.add(this.dataStore[i]);
        }
    }
    return tempSet;
}

function sort(type = 'desc') {
    var tempSet = new Set();
    for (var i = 0; i < this.dataStore.length; ++i) {
        tempSet.add(this.dataStore[i]);
    }
    if (type == "desc") {
        tempSet.dataStore.sort((a, b) => {
            return b > a;
        });
    } else {
        tempSet.dataStore.sort();
    }
    return tempSet.show();
}


// main program

var cis = new Set();
var it = new Set();
cis.add("Clayton");
cis.add("Jennifer");
cis.add("Danny");
it.add("Bryan");
it.add("Clayton");
it.add("Jennifer");
var diff = new Set();
diff = cis.difference(it);
console.log(cis.show() + " difference " + it.show() + " -> " + diff.show());
console.log(cis.sort('desc'));

module.exports = Set;