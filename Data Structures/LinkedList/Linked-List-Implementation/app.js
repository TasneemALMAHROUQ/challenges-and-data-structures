const LinkedList = require('./linkedList');

const list = new LinkedList();
list.add(2);
list.add(4);
list.add(6);
list.add(3);

list.printList(); 

list.remove(2);
list.printList(); 

console.log(list.includes(20)); 
console.log(list.includes(3)); 

list.insertAt(7, 3);
list.printList(); 
