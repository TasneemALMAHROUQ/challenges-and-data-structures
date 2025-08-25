const Node = require("./Node");
const BinaryTree = require("./BinaryTree");

let tree = new BinaryTree();
tree.root = new Node(10);
tree.root.left = new Node(5);
tree.root.right = new Node(20);
tree.root.left.left = new Node(3);
tree.root.left.right = new Node(7);
tree.root.right.left = new Node(15);
tree.root.right.right = new Node(25);

console.log("Tree structure:");
tree.printLevelOrder();

let secondMax = tree.findSecondMax();
console.log("Second maximum value is:", secondMax);
