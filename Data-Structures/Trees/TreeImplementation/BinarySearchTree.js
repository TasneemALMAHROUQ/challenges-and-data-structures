
const TNode = require('./TNode');

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  add(value) {
    const newNode = new TNode(value);

    if (!this.root) {
      this.root = newNode;
      return;
    }

    let current = this.root;
    while (true) {
      if (value === current.value) {
       
        throw new Error("Value already exists in the tree");
      }

      if (value < current.value) {
        if (!current.left) {
          current.left = newNode;
          return;
        }
        current = current.left;
      } else {
        if (!current.right) {
          current.right = newNode;
          return;
        }
        current = current.right;
      }
    }
  }


  contains(value) {
    let current = this.root;
    while (current) {
      if (value === current.value) return true;
      current = value < current.value ? current.left : current.right;
    }
    return false;
  }

 
  remove(value) {
    this.root = this._removeNode(this.root, value);
  }

  _removeNode(node, value) {
    if (!node) return null;

    if (value < node.value) {
      node.left = this._removeNode(node.left, value);
      return node;
    } else if (value > node.value) {
      node.right = this._removeNode(node.right, value);
      return node;
    } else {
    
      if (!node.left && !node.right) {
        return null;
      }
     
      if (!node.left) return node.right;
      if (!node.right) return node.left;

     
      let successor = this._minValueNode(node.right);
      node.value = successor.value;
      node.right = this._removeNode(node.right, successor.value);
      return node;
    }
  }

  _minValueNode(node) {
    let current = node;
    while (current.left) {
      current = current.left;
    }
    return current;
  }
}

module.exports = BinarySearchTree;
