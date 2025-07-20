const StackWithDeleteMiddle = require('./StackWithDeleteMiddle');

const stack = new StackWithDeleteMiddle();

stack.push(7);
stack.push(14);
stack.push(3);
stack.push(8);
stack.push(5);
stack.print(); // Stack: Top -> 5 -> 8 -> 3 -> 14 -> 7

stack.deleteMiddle();
stack.print(); // Stack: Top -> 5 -> 8 -> 14 -> 7

stack.push(2);
stack.push(9);
stack.push(11);
stack.print(); // Stack: Top -> 11 -> 9 -> 2 -> 5 -> 8 -> 14 -> 7

stack.deleteMiddle();
stack.print(); // Stack: Top -> 11 -> 9 -> 2 -> 8 -> 14 -> 7
