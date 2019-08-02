// 贪心算法：局部最优解选择能够带来整体最优解选择（不一定是最优解）

// 找零问题：最少的零钱数量

function makeChange(origAmt, coins) {
   var remainAmt = 0;
   if (origAmt % .25 < origAmt) {
      coins[3] = parseInt(origAmt / .25);
      remainAmt = origAmt % .25;
      origAmt = remainAmt;
   }
   if (origAmt % .1 < origAmt) {
      coins[2] = parseInt(origAmt / .1);
      remainAmt = origAmt % .1;
      origAmt = remainAmt;
   }
   if (origAmt % .05 < origAmt) {
      coins[1] = parseInt(origAmt / .05);
      remainAmt = origAmt % .05;
      origAmt = remainAmt;
   }
   coins[0] = parseInt(origAmt / .01);
}

function showChange(coins) {
   if (coins[3] > 0) {
      console.log("Number of 25美分 - " + coins[3] + " - " + coins[3] * .25);
   }
   if (coins[2] > 0) {
      console.log("Number of 10美分 - " + coins[2] + " - " + coins[2] * .10);
   }
   if (coins[1] > 0) {
      console.log("Number of 5美分 - " + coins[1] + " - " + coins[1] * .05);
   }
   if (coins[0] > 0) {
      console.log("Number of 1美分 - " + coins[0] + " - " + coins[0] * .01);
   }
}

var origAmt = .63;
var coins = [];
makeChange(origAmt, coins);
showChange(coins);



// 背包问题
function ksack(values, weights, capacity) {
   let load = 0;
   let i = 0;
   let w = 0;
   let n = values.length;
   while (load < capacity && i < n) {
      if (weights[i] <= (capacity - load)) {
         w += values[i];
         load += weights[i];
      } else {         
         let r = parseInt( (capacity - load) / weights[i] );
         w += r * values[i];
         load += weights[i];
      }
      ++i;
   }
   return w;
}

let values = [50, 140, 60, 60];
let sizes = [5,20,10,12];
let capacity = 30;
console.log(ksack(values, sizes, capacity)) 