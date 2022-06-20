/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    let newNode = new Node(val);
    if (this.head === null) this.head = newNode;
    if (this.tail !== null) this.tail.next = newNode;
    this.tail = newNode;
    this.length++
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    let newNode = new Node(val)
    if (this.head === null) this.head = newNode;
    if (this.tail === null) this.tail = newNode

    newNode.next = this.head
    this.head = newNode
    this.length++
  }

  /** pop(): return & remove last item. */

  pop() {
    let removeVal = this.tail.val

    if (this.length === 1) {
      this.head = null
      this.tail = null
    }
    else {
      let current = this.head
      while (current.next.next !== null) {
        current = current.next
      }
    this.tail = current
    }

    this.length--
    return removeVal
  }

  /** shift(): return & remove first item. */

  shift() {
    let removeVal = this.head.val

    if (this.length === 1) {
      this.head = null
      this.tail = null
    }
    else {
      this.head = this.head.next
    }

    this.length--
    return removeVal
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    if (idx < 0 || idx > this.length-1) {
      return -1
    }
    else if (idx === 0 ) {
      return this.head.val
    }
    else if (idx === this.length-1) {
      return this.tail.val
    }
    else {
      let current = this.head
      for (i=0; i <= idx; i++) {
        current = current.next
      }
      return current.val
    }
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    if (idx < 0 || idx > this.length-1) {
      return -1
    }
    else if (idx === 0 ) {
      this.head.val = val
    }
    else if (idx === this.length-1) {
      this.tail.val = val
    }
    else {
      let current = this.head
      for (let i=0; i <= idx; i++) {
        current = current.next
      }
      current.val = val
    }
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    let newNode = new Node(val)

    if (idx < 0 || idx > this.length) {
      return -1
    }
    else if (this.length === 0) {
      this.head = newNode
      this.tail = newNode
    }
    else if (idx === 0 ) {
      newNode.next = this.head
      this.head = newNode
    }
    else if (idx === this.length) {
      this.tail.next = newNode
      this.tail = newNode
    }
    else {
      let current = this.head
      for (let i=0; i < (idx-1); i++) {
        current = current.next
      }
      newNode.next = current.next
      current.next = newNode
    }
    this.length++
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    if (idx === 0) {
      this.shift()
    }
    else if (idx === this.length-1) {
      this.pop()
    }
    else {
      let current = this.head
      for (let i=0; i < idx; i++) {
        current = current.next
      }
      let removeVal = current.next
      current.next = current.next.next
      current.next.next = null
      this.length--
      return removeVal
    }
  }

  /** average(): return an average of all values in the list */

  average() {
    if (this.length === 0) {
      return 0
    }
    let sum = 0
    let count = 0
    let current = this.head
    for (let i=0; i <= this.length-1; i++) {
      sum += current.val
      count++
      current = current.next
      console.log(sum)
      console.log(count)
    }
    return sum/count
  }
}

module.exports = LinkedList;
