/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

// RECURSIVE variant

/*
Time Complexity: O(m + n)
Space Complexity: O(m + n)
*/
var mergeTwoLists = function (list1, list2) {
  if (list1 === null) return list2;
  else if (list2 === null) return list1;

  let head;

  if (list1.val < list2.val) {
    head = list1;
    list1 = list1.next;
  } else {
    head = list2;
    list2 = list2.next;
  }

  head.next = mergeTwoLists(list1, list2);

  return head;
};

// RECURSIVE variant

/*
Time Complexity: O(m + n)
Space Complexity: O(1)
*/

class ListNode {
  constructor(val = 0) {
    this.val = val;
    this.next = null;
  }
}

var mergeTwoLists = function (list1, list2) {
  let head = new ListNode(),
    tail = head;

  while (list1 !== null && list2 !== null) {
    if (list1.val < list2.val) {
      tail.next = list1;
      list1 = list1.next;
    } else {
      tail.next = list2;
      list2 = list2.next;
    }

    tail = tail.next;
  }

  tail.next = list1 === null ? list2 : list1;

  return head.next;
};
