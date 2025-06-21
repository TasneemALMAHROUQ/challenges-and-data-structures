const { LinkedList } = require('./linkedList');
require('./reverse/reverse');

const list = new LinkedList();
list.add(2);
list.add(4);
list.add(6);
list.add(3);

console.log("befor");
list.printList();

list.reverse();

console.log("after");
list.printList();
