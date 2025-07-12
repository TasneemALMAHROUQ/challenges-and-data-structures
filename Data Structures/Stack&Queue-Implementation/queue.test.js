const Queue = require('./queue');

describe('Queue', () => {

  it('should enqueue a node into the queue', () => {
    const queue = new Queue();
    queue.enqueue(10);
    expect(queue.peek()).toBe(10);
  });

  it('should dequeue a node from the queue', () => {
    const queue = new Queue();
    queue.enqueue(10);
    queue.enqueue(20);
    const dequeued = queue.dequeue();
    expect(dequeued).toBe(10);
    expect(queue.peek()).toBe(20);
  });

  it('should return true if the queue is empty', () => {
    const queue = new Queue();
    expect(queue.isEmpty()).toBe(true);
  });

  it('should return false if the queue is not empty', () => {
    const queue = new Queue();
    queue.enqueue(5);
    expect(queue.isEmpty()).toBe(false);
  });

  it('should throw error when dequeuing from empty queue', () => {
    const queue = new Queue();
    expect(() => queue.dequeue()).toThrow('Queue is empty');
  });

  it('should throw error when peeking empty queue', () => {
    const queue = new Queue();
    expect(() => queue.peek()).toThrow('Queue is empty');
  });

});
