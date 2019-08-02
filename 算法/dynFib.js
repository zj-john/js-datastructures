/* 动态规划：从底部开始解决问题，将所有小问题解决掉，合并成整体解决方案
递归：从顶部将问题分解，解决掉所有分解出的小问题
斐波那契数列 n大的时候：动态规划效率高于递归
 */
 
//  动态规划
 function dynFib(n) {
    var val = [];
    for (var i = 0; i <= n; ++i) {
       val[i] = 0;
    }
    if (n == 1 || n == 2) {
       return 1;
    }
    else {
       val[1] = 1;
       val[2] = 2;
       for (var i = 3; i <= n; ++i) {
          val[i] = val[i-1] + val[i-2];
       }
       return val[n-1];
    }
 }

// 递归
 function recurFib() {
     if(n<2) {
         return n;
     } else {
         return recurFib(n-1) + recurFib(n-2)
     }
 }
 
 var start = new Date().getTime();
 console.log(recurFib(10));
 var stop = new Date().getTime();
 console.log("recursive time - " + (stop-start) + "milliseconds");
 console.log();
 start = new Date().getTime();
 console.log(dynFib(10));
 stop = new Date().getTime();
 console.log("dynamic programming time - " + (stop-start) + " milliseconds");