const StackWithDeleteMiddle = require('./StackWithDeleteMiddle');

describe('StackWithDeleteMiddle', () => {

  test('delete middle from odd-sized stack', () => {
    const stack = new StackWithDeleteMiddle();
   
    stack.push(5);
    stack.push(4);
    stack.push(3);
    stack.push(2);
    stack.push(1); 

    stack.deleteMiddle();

   
    expect(stack.items).toEqual([5, 4, 2, 1]);
  });

  test('delete middle from even-sized stack', () => {
    const stack = new StackWithDeleteMiddle();
    stack.push(4);
    stack.push(3);
    stack.push(2);
    stack.push(1); 

    stack.deleteMiddle();

   
    expect(stack.items).toEqual([4, 3, 1]);
  });

  test('delete middle from empty stack', () => {
    const stack = new StackWithDeleteMiddle();
    stack.deleteMiddle();
    expect(stack.items).toEqual([]);
  });

  test('delete middle from single-element stack', () => {
    const stack = new StackWithDeleteMiddle();
    stack.push(10);
    stack.deleteMiddle();
    expect(stack.items).toEqual([]);
  });

});
