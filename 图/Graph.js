/* 
图
边+顶点 edge1:(v1, v2);有向图，无序图；顶点之间有路径->强联通
边的表示：邻接表数组 或者 邻接矩阵（二维数组）
*/

class Vertex {
   constructor(label, wasVisited) {
      this.label = label;
      this.wasVisited = wasVisited;
   }
}

class Graph {
   constructor(v) {
      this.vertices = v;
      this.edges = 0;
      this.adj = [];
      for (let i = 0; i < this.vertices; ++i) {
         this.adj[i] = [];
      }
      // 已访问过的顶点，init值为false
      this.marked = [];
      for (let i = 0; i < this.vertices; ++i) {
         this.marked[i] = false;
      }

      this.vertexList = [];
      // 从一个顶点到下一个顶点的所有边
      this.edgeTo = [];
   }

   addEdge(v, w) {
      this.adj[v].push(w);
      this.adj[w].push(v);
      this.edges++;
   }

   showGraph() {
      for (var i = 0; i < this.vertices; ++i) {
         console.log(i + " -> ");
         for (var j = 0; j < this.vertices; ++j) {
            if (this.adj[i][j] != undefined)
               console.log(this.adj[i][j] + ' ');
         }
         console.log("\n");
      }
   }

   // 深度优先搜索
   dfs(v) {
      this.marked[v] = true;
      if (this.adj[v] != undefined) {
         console.log("Visited vertex: " + v);
      }
      this.adj[v].forEach((w) => {
         if (!this.marked[w]) {
            this.dfs(w);
         }
      })
   }

   // 广度优先搜索
   bfs(s) {
      var queue = [];
      this.marked[s] = true;
      queue.push(s);
      while (queue.length > 0) {
         var v = queue.shift();
         if (this.adj[v] != undefined) {
            console.log("Visited vertex: " + v);
         }
         this.adj[v].forEach((w) => {
            if (!this.marked[w]) {
               // 最短路径使用:添加一条边
               this.edgeTo[w] = v;

               this.marked[w] = true;
               queue.push(w);
            }
         });
      }
   }

   // 拓扑排序
   topSort() {
      var stack = [];
      var visited = [];
      for (var i = 0; i < this.vertices; i++) {
         visited[i] = false;
      }
      for (var i = 0; i < this.vertices; i++) {
         if (visited[i] == false) {
            this.topSortHelper(i, visited, stack);
         }
      }
   }
   
   topSortHelper(v, visited, stack) {
      visited[v] = true;
      this.adj[v].forEach((w) => {
         if (!visited[w]) {
            this.topSortHelper(visited[w], visited, stack);
         }
      })
      stack.push(v);
   }

   // 广度优先搜索对应的最短路径
   pathTo(v) {
      var source = 0;
      if (!this.hasPathTo(v)) {
         return undefined;
      }
      var path = [];
      for (var i = v; i != source; i = this.edgeTo[i]) {
         path.push(i);
      }
      path.push(source);
      return path;
   }

   hasPathTo(v) {
      return this.marked[v];
   }
}

g = new Graph(5);
g.addEdge(0, 1);
g.addEdge(0, 2);
g.addEdge(1, 3);
g.addEdge(2, 4);
g.showGraph();
// 广度优先遍历和深度优先遍历不能同时运行，因为使用了相同的this.marked
// console.log("深度遍历");
// g.dfs(0);
console.log("广度遍历")
g.bfs(0);
var path = g.pathTo(4);
console.log(path);