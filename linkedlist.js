class SinglyLinkedListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
      this.length = 0;
    }

    createNode(value) {
        return new SinglyLinkedListNode(value)
    }

    insertAtTail(value) {
        this.length++;
        let newNode = this.createNode(value);
      
        if (this.tail) {
          this.tail.next = newNode;
          this.tail = newNode;
          return newNode;
        }
      
        this.head = this.tail = newNode;
        return newNode;
    }

    insertAtHead(value) {
        this.length++;
        let newNode = this.createNode(value);
      
        if (this.head) {
            newNode.next = this.head;
            this.head = newNode;
            this.head.next = newNode.next;
            return newNode;
        }
      
        this.head = this.tail = newNode;
        return newNode;
    }

    print() {
        let current = this.head;
        while (current) {
          console.log(current.value);
          current = current.next;
        }
    }
}

const linkedList = new SinglyLinkedList();

linkedList.insertAtTail(17);
linkedList.insertAtTail(1);
linkedList.insertAtHead(8);
linkedList.insertAtHead(5);
linkedList.print();