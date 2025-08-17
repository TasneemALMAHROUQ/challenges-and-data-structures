const TNode = require('../TNode');
const BinaryTree = require('../BinaryTree');

describe("BinaryTree Traversals", () => {
  let tree;

  beforeEach(() => {
    tree = new BinaryTree();
    tree.root = new TNode(1);
    tree.root.left = new TNode(2);
    tree.root.right = new TNode(3);
    tree.root.left.left = new TNode(4);
    tree.root.left.right = new TNode(5);
  });

  test("PreOrder traversal", () => {
    expect(tree.preOrder()).toEqual([1, 2, 4, 5, 3]);
  });

  test("InOrder traversal", () => {
    expect(tree.inOrder()).toEqual([4, 2, 5, 1, 3]);
  });

  test("PostOrder traversal", () => {
    expect(tree.postOrder()).toEqual([4, 5, 2, 3, 1]);
  });
});
