# Linked List Implementation

## 📌 Problem Domain

Implement a **Singly Linked List** data structure using JavaScript.  
The linked list should support adding, removing, checking for values, inserting at a specific index, and printing its contents.

---

## 🧪 Inputs and Expected Outputs

```js
const list = new LinkedList();

list.add(5);
list.add(10);
list.add(20);
list.add(30);
list.printList(); 
// Output: Head -> 5 -> 10 -> 20 -> 30 -> Null

list.remove(10);
list.printList(); 
// Output: Head -> 5 -> 20 -> 30 -> Null

list.includes(20); // true
list.includes(10); // false

list.insertAt(15, 2);
list.printList(); 
// Output: Head -> 5 -> 20 -> 15 -> 30 -> Null
