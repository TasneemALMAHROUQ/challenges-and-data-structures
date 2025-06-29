class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  append(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    let current = this.head;
    while(current.next) {
      current = current.next;
    }
    current.next = newNode;
  }

  toString() {
    let current = this.head;
    let result = 'Head -> ';
    while(current) {
      result += current.value + ' -> ';
      current = current.next;
    }
    result += 'Null';
    return result;
  }

  static mergeSortedLists(list1, list2) {
    const mergedList = new LinkedList();

    let current1 = list1.head;
    let current2 = list2.head;

    while (current1 !== null && current2 !== null) {
      if (current1.value <= current2.value) {
        mergedList.append(current1.value);
        current1 = current1.next;
      } else {
        mergedList.append(current2.value);
        current2 = current2.next;
      }
    }

    while (current1 !== null) {
      mergedList.append(current1.value);
      current1 = current1.next;
    }

    while (current2 !== null) {
      mergedList.append(current2.value);
      current2 = current2.next;
    }

    return mergedList;
  }
}

module.exports = { Node, LinkedList };
