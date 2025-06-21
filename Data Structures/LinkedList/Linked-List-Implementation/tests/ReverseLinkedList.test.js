const { LinkedList } = require('../linkedList');
require('../reverse/reverse');

describe('LinkedList reverse method', () => {
  test('should reverse a non-empty list', () => {
    const list = new LinkedList();
    list.add(1);
    list.add(2);
    list.add(3);
    list.reverse();

    let result = [];
    let current = list.head;
    while (current) {
      result.push(current.data);
      current = current.next;
    }
    expect(result).toEqual([3, 2, 1]);
  });

  test('should return null for empty list (head is null)', () => {
    const list = new LinkedList();
    list.reverse();
    expect(list.head).toBeNull();
  });

  test('should not change list if it has single node', () => {
    const list = new LinkedList();
    list.add(10);
    list.reverse();

    expect(list.head.data).toBe(10);
    expect(list.head.next).toBeNull();
  });

  test('should reverse list with duplicate values', () => {
    const list = new LinkedList();
    list.add(1);
    list.add(2);
    list.add(2);
    list.add(3);
    list.reverse();

    let result = [];
    let current = list.head;
    while (current) {
      result.push(current.data);
      current = current.next;
    }
    expect(result).toEqual([3, 2, 2, 1]);
  });
});

