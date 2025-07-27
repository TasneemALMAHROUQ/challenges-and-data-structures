const MinStack = require('./MinStack');

describe('MinStack', () => {
  let stack;

  beforeEach(() => {
    stack = new MinStack();
  });

  test('should push elements and get minimum correctly', () => {
    stack.push(15);
    stack.push(7);
    stack.push(12);
    stack.push(3);
    expect(stack.getMin()).toBe(3);
  });

  test('should pop elements and update minimum', () => {
    stack.push(15);
    stack.push(7);
    stack.push(3);
    stack.pop(); // remove 3
    expect(stack.getMin()).toBe(7);
  });

  test('should return top element without removing it', () => {
    stack.push(15);
    stack.push(9);
    expect(stack.top()).toBe(9);
  });

  test('should return true when stack is empty', () => {
    expect(stack.isEmpty()).toBe(true);
    stack.push(10);
    expect(stack.isEmpty()).toBe(false);
  });

  test('should return null when popping or peeking from empty stack', () => {
    expect(stack.pop()).toBe(null);
    expect(stack.top()).toBe(null);
    expect(stack.getMin()).toBe(null);
  });
});
