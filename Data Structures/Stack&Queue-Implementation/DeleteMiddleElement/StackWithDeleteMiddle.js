
class Stack {
  constructor() {
    this.items = [];
  }

  push(value) {
    this.items.push(value);
  }

  pop() {
    return this.items.pop();
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }

  print() {
    console.log("Stack: Top -> " + this.items.slice().reverse().join(" -> "));
  }
}


class StackWithDeleteMiddle extends Stack {
  deleteMiddle() {
    const size = this.size();
    if (size === 0) return; 
    if (size === 1) {
      this.pop(); 
      return;
    }

    
    const middleIndexFromTop = size % 2 === 0 ? (size / 2) - 1 : Math.floor(size / 2);
   
    const middleIndex = size - 1 - middleIndexFromTop;

    
    this.items.splice(middleIndex, 1);
  }
}

module.exports = StackWithDeleteMiddle;
