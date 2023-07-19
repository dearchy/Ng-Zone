// implement a skip list
// https://en.wikipedia.org/wiki/Skip_list
// https://www.youtube.com/watch?v=2g9OSRKJuzM

// implement a data structure that is a skip list by js
class SkipList {
  constructor() {
    this.head = new Node(-Infinity);
    this.tail = new Node(Infinity);
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  // insert a node into the skip list
  insert(node) {
    let current = this.head;
    while (current.next.value < node.value) {
      current = current.next;
    }
    node.next = current.next;
    node.prev = current;
    current.next.prev = node;
    current.next = node;
  }

  // delete a node from the skip list
  delete(node) {
    node.prev.next = node.next;
    node.next.prev = node.prev;
  }

  // search a node from the skip list
  search(node) {
    let current = this.head;
    while (current.next.value < node.value) {
      current = current.next;
    }
    return current.next.value === node.value ? current.next : null;
  }

  // print the skip list
  print() {
    let current = this.head;
    while (current.next.value !== Infinity) {
      current = current.next;
      console.log(current.value);
    }
  }
  

  // return the length of the skip list
  get length() {
    let current = this.head;
    let length = 0;
    while (current.next.value !== Infinity) {
      current = current.next;
      length++;
    }
    return length;
  }

  // return the height of the skip list
  get height() {
    let current = this.head;
    let height = 0;
    while (current.next.value !== Infinity) {
      current = current.next;
      height = Math.max(height, current.height);
    }
    return height;
  }

  // return the max value of the skip list
  get max() {
    return this.tail.prev.value;
  }
  
  // return the min value of the skip list
  get min() {
    return this.head.next.value;
  }

  // return the average value of the skip list
  get average() {
    let current = this.head;
    let sum = 0;
    while (current.next.value !== Infinity) {
      current = current.next;
      sum += current.value;
    }
    return sum / this.length;
  }

  // return the median value of the skip list
  get median() {
    let current = this.head;
    let length = this.length;
    let index = Math.floor(length / 2);
    while (index > 0) {
      current = current.next;
      index--;
    }
    return length % 2 === 0 ? (current.value + current.next.value) / 2 : current.next.value;
  }

  // return the mode value of the skip list
  get mode() {
    let current = this.head;
    let map = {};
    let max = 0;
    let mode = null;
    while (current.next.value !== Infinity) {
      current = current.next;
      map[current.value] = map[current.value] ? map[current.value] + 1 : 1;
      if (map[current.value] > max) {
        max = map[current.value];
        mode = current.value;
      }
    }
    return mode;
  }

  // return the variance value of the skip list
  get variance() {
    let current = this.head;
    let length = this.length;
    let average = this.average;
    let sum = 0;
    while (current.next.value !== Infinity) {
      current = current.next;
      sum += Math.pow(current.value - average, 2);
    }
    return sum / length;
  }

  // return if skipl list has a cycle
  get hasCycle() {
    let slow = this.head;
    let fast = this.head;
    while (fast.next.value !== Infinity && fast.next.next.value !== Infinity) {
      slow = slow.next;
      fast = fast.next.next;
      if (slow === fast) return true;
    }
    return false;
  }
  
}