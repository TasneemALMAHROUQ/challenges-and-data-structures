const Stack = require('./stack');

describe('Stack', () => {

  it('should push a node onto the stack', () => {
    const stack = new Stack();
    stack.push(10);
    expect(stack.peek()).toBe(10);
  });

  it('should pop a node from the stack', () => {
    const stack = new Stack();
    stack.push(10);
    stack.push(20);
    const popped = stack.pop();
    expect(popped).toBe(20);
    expect(stack.peek()).toBe(10);
  });

  it('should return true if the stack is empty', () => {
    const stack = new Stack();
    expect(stack.isEmpty()).toBe(true);
  });

  it('should return false if the stack is not empty', () => {
    const stack = new Stack();
    stack.push(5);
    expect(stack.isEmpty()).toBe(false);
  });

  it('should throw error when popping from empty stack', () => {
    const stack = new Stack();
    expect(() => stack.pop()).toThrow('Stack is empty');
  });

  it('should throw error when peeking empty stack', () => {
    const stack = new Stack();
    expect(() => stack.peek()).toThrow('Stack is empty');
  });

});
