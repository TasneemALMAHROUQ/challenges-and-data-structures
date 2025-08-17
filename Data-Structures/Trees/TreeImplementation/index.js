
const TNode = require('./TNode');
const BinaryTree = require('./BinaryTree');
const BinarySearchTree = require('./BinarySearchTree');



const tree = new BinaryTree();
tree.root = new TNode(1);
tree.root.left = new TNode(2);
tree.root.right = new TNode(3);
tree.root.left.left = new TNode(4);
tree.root.left.right = new TNode(5);

console.log("PreOrder:", tree.preOrder()); 
console.log("InOrder:", tree.inOrder());    
console.log("PostOrder:", tree.postOrder()); 

console.log("\nTree structure:");
tree.print();



const bst = new BinarySearchTree();
bst.add(10);
bst.add(5);
bst.add(15);
bst.add(7);

console.log("\nContains 7:", bst.contains(7)); 

bst.remove(5);

console.log("Contains 5:", bst.contains(5));
