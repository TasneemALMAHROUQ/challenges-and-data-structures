const { LinkedList } = require('./mergeSorted');

describe('LinkedList.mergeSortedLists()', () => {
  test('merging when both lists are empty returns empty list', () => {
    const list1 = new LinkedList();
    const list2 = new LinkedList();

    const merged = LinkedList.mergeSortedLists(list1, list2);
    expect(merged.head).toBeNull();
  });

  test('merging when one list is empty returns the non-empty list', () => {
    const list1 = new LinkedList();
    const list2 = new LinkedList();
    list2.append(1);
    list2.append(3);

    const merged = LinkedList.mergeSortedLists(list1, list2);
    expect(merged.toString()).toBe('Head -> 1 -> 3 -> Null');
  });

  test('merging two sorted lists returns merged sorted list', () => {
    const list1 = new LinkedList();
    list1.append(5);
    list1.append(10);
    list1.append(15);

    const list2 = new LinkedList();
    list2.append(2);
    list2.append(3);
    list2.append(20);

    const merged = LinkedList.mergeSortedLists(list1, list2);
    expect(merged.toString()).toBe('Head -> 2 -> 3 -> 5 -> 10 -> 15 -> 20 -> Null');
  });
});
