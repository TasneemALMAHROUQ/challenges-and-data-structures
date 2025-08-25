const Node = require("./Node");

class BinaryTree {
  constructor() {
    this.root = null;
  }

  printLevelOrder() {
    if (!this.root) {
      console.log("Tree is empty");
      return;
    }

    let queue = [this.root];

    while (queue.length > 0) {
      let levelSize = queue.length;
      let currentLevel = [];

      for (let i = 0; i < levelSize; i++) {
        let node = queue.shift();
        currentLevel.push(node.value);

        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
      }

      console.log(currentLevel.join(" "));
    }
  }
  findSecondMax() {
    if (!this.root) {
      throw new Error("Tree is empty");
    }

    let max = -Infinity;
    let secondMax = -Infinity;

    function traverse(node) {
      if (!node) return;

      if (node.value > max) {
        secondMax = max;
        max = node.value;
      } else if (node.value < max && node.value > secondMax) {
        secondMax = node.value;
      }

      traverse(node.left);
      traverse(node.right);
    }

    traverse(this.root);

    if (secondMax === -Infinity) {
      throw new Error("Tree must contain at least two unique values");
    }

    return secondMax;
  }

}

module.exports = BinaryTree;
