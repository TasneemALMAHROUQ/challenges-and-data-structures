const { LinkedList } = require('./linkedList');

describe('LinkedList', () => {
  let list;

  beforeEach(() => {
    list = new LinkedList();
  });

  test('adds nodes to the end of the list', () => {
    list.add(1);
    list.add(2);
    list.add(3);
    expect(list.includes(1)).toBe(true);
    expect(list.includes(2)).toBe(true);
    expect(list.includes(3)).toBe(true);
  });

  test('removes node by value', () => {
    list.add(1);
    list.add(2);
    list.add(3);
    list.remove(2);
    expect(list.includes(2)).toBe(false);
  });

  test('includes returns true/false correctly', () => {
    list.add(10);
    expect(list.includes(10)).toBe(true);
    expect(list.includes(99)).toBe(false);
  });

  test('inserts node at correct index', () => {
    list.add(1);
    list.add(3);
    list.insertAt(2, 1);

    // تحقق ترتيب العناصر مش بس وجودها
    let result = [];
    let current = list.head;
    while (current) {
      result.push(current.data);
      current = current.next;
    }
    expect(result).toEqual([1, 2, 3]);
  });

  test('insertAt throws if index out of bounds', () => {
    // لما القائمة فاضية
    expect(() => list.insertAt(1, 1)).toThrow("Index out of bounds");

    // لما فيها عناصر
    list.add(1);
    list.add(2);
    expect(() => list.insertAt(3, 5)).toThrow("Index out of bounds");
  });
});
