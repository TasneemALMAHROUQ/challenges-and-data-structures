class Node {
  constructor(value) {
    this.value = value;     
    this.next = null;       
  }
}

class Queue {
  constructor() {
    this.front = null;      
    this.rear = null;       
  }

  enqueue(value) {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.front = this.rear = newNode;  
    } else {
      this.rear.next = newNode;          
      this.rear = newNode;               
    }
  }

  dequeue() {
    if (this.isEmpty()) {
      throw new Error("Queue is empty");
    }
    const dequeuedNode = this.front;     
    this.front = this.front.next;       
    if (!this.front) this.rear = null;  
    return dequeuedNode.value;           
  }

  peek() {
    if (this.isEmpty()) {
      throw new Error("Queue is empty");
    }
    return this.front.value;            
  }

  isEmpty() {
    return this.front === null;         
  }
}

module.exports = Queue;
