const Node = require("./Node");
const BinaryTree = require("./BinaryTree");

describe("BinaryTree - findSecondMax", () => {
  
  test("find second max in a normal tree", () => {
    let tree = new BinaryTree();
    tree.root = new Node(10);
    tree.root.left = new Node(5);
    tree.root.right = new Node(20);
    tree.root.left.left = new Node(3);
    tree.root.left.right = new Node(7);
    tree.root.right.left = new Node(15);
    tree.root.right.right = new Node(25);

    expect(tree.findSecondMax()).toBe(20);
  });

  test("tree with only one node should throw error", () => {
    let tree = new BinaryTree();
    tree.root = new Node(10);

    expect(() => tree.findSecondMax()).toThrow("Tree must contain at least two unique values");
  });

  test("tree with negative values", () => {
    let tree = new BinaryTree();
    tree.root = new Node(-10);
    tree.root.left = new Node(-20);
    tree.root.right = new Node(-5);
    tree.root.left.left = new Node(-30);

    expect(tree.findSecondMax()).toBe(-10);
  });

  test("tree with duplicate max values", () => {
    let tree = new BinaryTree();
    tree.root = new Node(10);
    tree.root.left = new Node(10);
    tree.root.right = new Node(5);

    expect(tree.findSecondMax()).toBe(5);
  });

  test("tree with all equal values should throw error", () => {
    let tree = new BinaryTree();
    tree.root = new Node(10);
    tree.root.left = new Node(10);
    tree.root.right = new Node(10);

    expect(() => tree.findSecondMax()).toThrow("Tree must contain at least two unique values");
  });

});
