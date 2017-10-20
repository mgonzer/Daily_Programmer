class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  insert(value){
    if(this.head == null) {
      this.head = new Node(value);
      this.tail = this.head;
    } else {
      const node = new Node(value);
      this.tail.next = node;
      this.tail = node;
    }
  }
}


const myList = new LinkedList();
myList.insert(42);
myList.insert(13);
myList.insert(2);
myList.insert(45);
myList.insert(80);

let currentNode = myList.head;

while(currentNode) {
  console.log(currentNode.value);
  currentNode = currentNode.next
}
