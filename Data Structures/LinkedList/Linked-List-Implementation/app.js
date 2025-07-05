const LinkedList = require('./linkedList');

const list = new LinkedList();


list.add(2);
list.add(4);
list.add(6);
list.add(3);

console.log("Before reverse:");
list.printList();

console.log("Includes 6?", list.includes(6));  // true
console.log("Includes 7?", list.includes(7));  // false

list.remove(4);
console.log("After removing 4:");
list.printList();

list.insertAt(5, 2);
console.log("After inserting 5 at index 2:");
list.printList();


list.reverse();
console.log("After reverse:");
list.printList();
