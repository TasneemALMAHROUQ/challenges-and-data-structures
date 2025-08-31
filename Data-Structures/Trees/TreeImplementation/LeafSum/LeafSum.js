
class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}


class BinaryTree {
    constructor() {
        this.root = null;
    }

   
    SumOfLeafNodes() {
        function sumLeaves(node) {
            if (!node) return 0; // إذا العقدة فارغة

            
            if (!node.left && !node.right) {
                return node.value;
            }

            
            return sumLeaves(node.left) + sumLeaves(node.right);
        }

        try {
            return sumLeaves(this.root);
        } catch (error) {
            console.error("Error calculating leaf sum:", error);
            return 0;
        }
    }
}


module.exports = { Node, BinaryTree };


if (require.main === module) {
    let Btree = new BinaryTree();
    Btree.root = new Node(9);
    Btree.root.left = new Node(8);
    Btree.root.right = new Node(12);
    Btree.root.left.left = new Node(3);
    Btree.root.left.right = new Node(7);
    Btree.root.right.left = new Node(17);
    Btree.root.right.right = new Node(23);
    Btree.root.left.left.right = new Node(4);

    let leafSum = Btree.SumOfLeafNodes();
    console.log("Sum of leaf nodes:", leafSum); // Expected Output: 51
}
