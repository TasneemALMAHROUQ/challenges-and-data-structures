const { LinkedList } = require('../linkedList');


const list = new LinkedList();
[1, 2, 3, 4, 5, 6].forEach(num => list.add(num));

console.log("Befor");
list.printList();


list.rotateLeft(2);

console.log("After");
list.printList();
