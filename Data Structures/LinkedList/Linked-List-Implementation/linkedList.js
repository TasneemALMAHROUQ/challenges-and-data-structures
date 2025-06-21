class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  add(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }
  remove(data) {
    if (!this.head) return;
    if (this.head.data === data) {
      this.head = this.head.next;
      return;
    }
    let current = this.head;
    while (current.next && current.next.data !== data) {
      current = current.next;
    }
    if (current.next) {
      current.next = current.next.next;
    }
  }
  includes(data) {
    let current = this.head;
    while (current) {
      if (current.data === data) return true;
      current = current.next;
    }
    return false;
  }
  insertAt(data, index) {
    const newNode = new Node(data);
    if (index === 0) {
      newNode.next = this.head;
      this.head = newNode;
      return;
    }
    let current = this.head;
    let prev = null;
    let i = 0;
    while (current && i < index) {
      prev = current;
      current = current.next;
      i++;
    }
    if (i !== index) {
      throw new Error("Index out of bounds");
    }
    newNode.next = current;
    prev.next = newNode;
  }
  printList() {
    let current = this.head;
    let output = "Head -> ";
    while (current) {
      output += `${current.data} -> `;
      current = current.next;
    }
    output += "Null";
    console.log(output);
  }
}

module.exports = { LinkedList, Node };
