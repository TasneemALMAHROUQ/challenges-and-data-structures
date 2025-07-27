class MinStack {
  constructor() {
    this.stack = [];
    this.minStack = [];
  }

  push(value) {
    this.stack.push(value);
    const min = this.minStack.length === 0
      ? value
      : Math.min(value, this.minStack[this.minStack.length - 1]);
    this.minStack.push(min);
  }

  pop() {
    if (this.stack.length === 0) return null;
    this.minStack.pop();
    return this.stack.pop();
  }

  top() {
    if (this.stack.length === 0) return null;
    return this.stack[this.stack.length - 1];
  }

  getMin() {
    if (this.minStack.length === 0) return null;
    return this.minStack[this.minStack.length - 1];
  }

  isEmpty() {
    return this.stack.length === 0;
  }

  printStack() {
    const values = this.stack.slice().reverse().join(' -> ');
    console.log(`Top -> ${values}`);
  }
}

module.exports = MinStack;
