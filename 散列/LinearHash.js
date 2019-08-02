/* 
LinearHash
线性探测法：开放寻址散列，发生碰撞时，检查散列表中的位置是否为空，为空则放入，不为空，向后找一个不为空的放入。
如果数组的大小是待存储数据个数的1.5倍，那么使用开链法，如果数组的大小是待存储数据的两倍及以上，那么使用线性探测法。
*/

class LinearHash {
    constructor() {
        this.table = new Array(137);
        this.values = [];
    }

    put(key, data) {
        var pos = this.betterHash(key);
        if (this.table[pos] == undefined) {
            this.table[pos] = key;
            this.values[pos] = data;
        }
        else {
            while (this.table[pos] != undefined) {
                pos++;
            }
            this.table[pos] = key;
            this.values[pos] = data;
        }
    }

    // 霍纳算法：求和时乘以一个质数（找一个质数刚好不会碰撞）
    betterHash(string) {
        const H = 37;
        var total = 0;
        for (var i = 0; i < string.length; ++i) {
            total += H * total + string.charCodeAt(i);
        }
        total = total % this.table.length;
        if (total < 0) {
            total += this.table.length - 1;
        }
        return parseInt(total);
    }

    showDistro() {
        var n = 0;
        for (var i = 0; i < this.table.length; ++i) {
            if (this.table[i] != undefined) {
                print(i + ": " + this.table[i]);
            }
        }
    }

    get(key) {
        var hash = -1;
        hash = this.betterHash(key);
        if (hash > -1) {
            for (var i = hash; this.table[hash] != undefined; i++) {
                if (this.table[hash] == key) {
                    return this.values[hash];
                }
            }
        }
        return undefined;
    }
}



module.exports = LinearHash;