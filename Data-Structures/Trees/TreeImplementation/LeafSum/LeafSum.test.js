const { Node, BinaryTree } = require('./LeafSum');

describe("Leaf Sum of Binary Tree", () => {

    test("calculates sum of leaf nodes in example tree", () => {
        let Btree = new BinaryTree();
        Btree.root = new Node(9);
        Btree.root.left = new Node(8);
        Btree.root.right = new Node(12);
        Btree.root.left.left = new Node(3);
        Btree.root.left.right = new Node(7);
        Btree.root.right.left = new Node(17);
        Btree.root.right.right = new Node(23);
        Btree.root.left.left.right = new Node(4);

        expect(Btree.SumOfLeafNodes()).toBe(51); // 4 + 7 + 17 + 23
    });

   test("calculates sum with negative leaf values", () => {
    let tree = new BinaryTree();
    tree.root = new Node(5);
    tree.root.left = new Node(-3);
    tree.root.right = new Node(7);
    tree.root.left.left = new Node(-1);
    tree.root.left.right = new Node(-2);

    // Leaf nodes are -1, -2, 7 → sum = 4
    expect(tree.SumOfLeafNodes()).toBe(4);
});


});
