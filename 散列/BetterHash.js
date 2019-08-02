/* 
better hash
*/

class BetterHash {
    constructor() {
        this.table = new Array(137);
    }

    put(data) {
        var pos = this.betterHash(data);
        this.table[pos] = data;
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
        return this.table[this.betterHash(key)];
    }
}


module.exports = BetterHash;