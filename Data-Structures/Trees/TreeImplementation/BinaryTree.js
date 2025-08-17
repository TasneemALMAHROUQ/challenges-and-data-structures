
const TNode = require('./TNode');

class BinaryTree {
  constructor() {
    this.root = null;
  }



  preOrder(node = this.root, result = []) {
    if (node) {
      result.push(node.value);                 
      this.preOrder(node.left, result);       
      this.preOrder(node.right, result);      
    }
    return result;
  }

  inOrder(node = this.root, result = []) {
    if (node) {
      this.inOrder(node.left, result);        
      result.push(node.value);                 
      this.inOrder(node.right, result);       
    }
    return result;
  }

  postOrder(node = this.root, result = []) {
    if (node) {
      this.postOrder(node.left, result);       
      this.postOrder(node.right, result);      
      result.push(node.value);                 
    }
    return result;
  }


  print(node = this.root, space = 0, count = 5) {
  
    if (node === null) return;

    space += count;

   
    this.print(node.right, space);

    console.log(' '.repeat(space - count) + node.value);

   
    this.print(node.left, space);
  }
}

module.exports = BinaryTree;
