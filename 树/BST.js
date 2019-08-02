/* 
二叉查找树
相对较小的值保存在左节点，相对较大的值保存在右节点
遍历：中序（左根右） 先序（根左右） 后序（左右根）
 */
class Node {
   constructor(data, left, right) {
      this.data = data;
      this.left = left;
      this.right = right;
   }
   show() {
      return this.data;
   }
}

class BST {
   constructor() {
      this.root = null;
      this.num = 0;
   }

   insert(data) {
      var n = new Node(data, null, null);
      if (this.root == null) {
         this.root = n;
      } else {
         var current = this.root;
         var parent;
         while (true) {
            parent = current;
            if (data < current.data) {
               current = current.left;
               if (current == null) {
                  parent.left = n;
                  break;
               }
            }
            else {
               current = current.right;
               if (current == null) {
                  parent.right = n;
                  break;
               }
            }
         }
      }
      this.num++;
   }

   // 中序遍历
   inOrder(node) {
      if (!(node == null)) {
         this.inOrder(node.left);
         console.log(node.show() + " ");
         this.inOrder(node.right);
      }
   }

   // 先序遍历
   preOrder(node) {
      if (!(node == null)) {
         console.log(node.show() + " ");
         this.preOrder(node.left);
         this.preOrder(node.right);
      }
   }

   // 后序遍历
   postOrder(node) {
      if (!(node == null)) {
         this.postOrder(node.left);
         this.postOrder(node.right);
         console.log(node.show() + " ");
      }
   }

   // 查找最小值
   getmin() {
      var current = this.root;
      while (!(current.left == null)) {
         current = current.left;
      }
      return current.data;
   }

   // 查找最大值
   getmax() {
      var current = this.root;
      while (!(current.right == null)) {
         current = current.right;
      }
      return current.data;
   }

   // 查找给定值
   find(data) {
      var current = this.root;
      while (current.data != data) {
         if (data < current.data) {
            current = current.left;
         }
         else {
            current = current.right;
         }
         if (current == null) {
            return null;
         }
      }
      return current;
   }

   // 删除
   remove(data) {
      root = this.removeNode(this.root, data);
   }

   removeNode(node, data) {
      if (node == null) {
         return null;
      }
      if (data == node.data) {
         // node has no children
         if (node.left == null && node.right == null) {
            return null;
         }
         // node has no left child
         if (node.left == null) {
            return node.right;
         }
         // node has no right child
         if (node.right == null) {
            return node.left;
         }
         // node has two children
         var tempNode = this.getSmallest(node.right);
         node.data = tempNode.data;
         node.right = this.removeNode(node.right, tempNode.data);
         return node;
      } else if (data < node.data) {
         node.left = this.removeNode(node.left, data);
         return node;
      } else {
         node.right = this.removeNode(node.right, data);
         return node;
      }
      this.num--;
   }

   count() {
      this.num = 0;
      this.countNode(this.root);
      return this.num;
   }

   countNode(node) {
      if(node != null) {
         this.num++;
         if(node.left != null) {
            this.countNode(node.left);
         }
         if(node.right != null) {
            this.countNode(node.right);
         }         
      }
   }

   countEdge() {
      const countNode = this.countNode();
      if(countNode == 0) {
         return 0;
      }
      return this.countNode-1;      
   }

   getSmallest(node) {
      if (node.left == null) {
         return node;
      }
      else {
         return getSmallest(node.left);
      }
   }
}

var nums = new BST();
nums.insert(23);
nums.insert(45);
nums.insert(16);
nums.insert(37);
nums.insert(3);
nums.insert(99);
nums.insert(22);
// console.log("Inorder traversal: ");
// nums.inOrder(nums.root);
// console.log("\n");
// console.log("Preorder traversal: ");
// nums.preOrder(nums.root);
// console.log("\n");
// console.log("Postorder traversal: ");
// nums.postOrder(nums.root);
// console.log("\n");
// var min = nums.getmin();
// console.log("The minimum value of the BST is: " + min);
// var max = nums.getmax();
// console.log("The maximum value of the BST is: " + max);
// console.log("\n");
// var found = nums.find(3);
// if (found != null) {
//    console.log("Found " + found.data + " in the BST.");
// }
// else {
//    console.log(value + " was not found in the BST.");
// }

// nums.remove(45);
// nums.preOrder(nums.root);
// console.log(nums.num);
console.log(nums.count());