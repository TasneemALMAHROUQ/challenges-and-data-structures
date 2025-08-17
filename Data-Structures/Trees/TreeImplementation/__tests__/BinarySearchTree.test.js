const BinarySearchTree = require('../BinarySearchTree');

describe("BinarySearchTree", () => {
  let bst;

  beforeEach(() => {
    bst = new BinarySearchTree();
    bst.add(10);
    bst.add(5);
    bst.add(15);
    bst.add(7);
  });

  test("Add nodes and check contains", () => {
    expect(bst.contains(10)).toBe(true);
    expect(bst.contains(7)).toBe(true);
    expect(bst.contains(20)).toBe(false);
  });

  test("Remove a node with no children", () => {
    bst.remove(7);
    expect(bst.contains(7)).toBe(false);
  });

  test("Remove a node with one child", () => {
    bst.add(6);
    bst.remove(7);
    expect(bst.contains(7)).toBe(false);
    expect(bst.contains(6)).toBe(true);
  });

  test("Remove a node with two children", () => {
    bst.add(12);
    bst.add(17);
    bst.remove(15);
    expect(bst.contains(15)).toBe(false);
    expect(bst.contains(12)).toBe(true);
    expect(bst.contains(17)).toBe(true);
  });
});

