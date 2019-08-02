/* 
chain hash
利用开链法处理碰撞：一个二维数组，重复的值放到数组中
*/

class ChainHash {
    constructor() {
        this.table = new Array(137);
        this.buildChains(this.table);
    }

    buildChains(arr) {
        for (var i = 0; i < arr.length; ++i) {
            arr[i] = new Array();
        }
    }

    put(key, data) {
        var pos = this.betterHash(key);
        var index = 0;
        if (this.table[pos][index] == undefined) {
            this.table[pos][index] = data;
        } else {
            while (this.table[pos][index] != undefined) {
                ++index;
            }
            this.table[pos][index] = data;
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
            if (this.table[i][0] != undefined) {
                print(i + ": " + this.table[i]);
            }
        }
    }

    get(key) {
        var index = 0;
        var pos = this.betterHash(key);

        while (this.table[pos][index] != key) {
            index++ ;
        }
        return this.table[pos][index];
    }
}


module.exports = ChainHash;