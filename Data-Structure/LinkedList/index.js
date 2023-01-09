class ListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this._size = 0;
  }
  append(data) {
    this._size++
    // List already has a node
    if (this.head) {
      // Last node in the list
      let pointer = this.head;

      while (pointer.next) {
        pointer = pointer.next
      }
      pointer.next = new ListNode(data)
      return
    };

    // Initializing a list
    this.head = new ListNode(data)
  }
  get(index_param) {
    // Reaching the right node data
    let pointer = this.head;
    for (let index = 0; index < index_param; index++) {
      try {
        pointer = pointer.next
      }
      catch (e) {
        break
      }
    }

    if (pointer) return pointer.data;
    throw new RangeError("Index out of range")
  }
  set(index_param, data) {
    // Reaching the right node data
    let pointer = this.head;
    for (let index = 0; index < index_param; index++) {
      try {
        pointer = pointer.next
      }
      catch (e) {
        break
      }
    }
    if (pointer) {
      pointer.data = data
      return
    }
    throw new RangeError("Index out of range")
  }
  find(value) {
    let pointer = this.head;
    let index = 0
    while (pointer) {
      if (pointer.data == value) {
        return index
      }
      pointer = pointer.next
      index++
    }
    throw new Error("Element doesn't exist in the list")
  }
}
