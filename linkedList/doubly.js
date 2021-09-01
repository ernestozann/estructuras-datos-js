class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
		this.prev = null;
	}
}

class MyDoublyLinkedList {
	constructor(value) {
		this.head = {
			value: value,
			next: null,
			prev: null,
		};
		this.tail = this.head;
		this.length = 1;
	}
	append(value) {
		const newNode = new Node(value);
		newNode.prev = this.tail;
		this.tail.next = newNode;
		this.tail = newNode;
		this.length++;
	
		return this;
	}
	prepend(value) {
		const newNode = new Node(value);
		newNode.next = this.head;
		this.head.prev = newNode;
		this.head = newNode;
		this.length++;

		return this;
	}
	insert(index, value) {
		if (index >= this.length) {
			return this.append(value);
		} else if (index === 0) {
			return this.prepend(value);
		}

		const newNode = new Node(value);
		const prevPointer = this.getTheIndex(index - 1);
		const nextPointer = prevPointer.next;
		newNode.prev = prevPointer;
		newNode.newNode = nextPointer;
		prevPointer.next = newNode;
		nextPointer.prev = newNode;
		this.length++;
		
		return this;
	}
	remove(index) {
		if (index >= this.length) {
			console.error(`index:${index} doesn't exist in the array :(`);
			return this;
		}
		const indexToRemove = this.getTheIndex(index);
		const nextPointer = indexToRemove.next;
		const prevPointer = indexToRemove.prev;
		if (prevPointer && nextPointer) {
			prevPointer.next = nextPointer;
			nextPointer.prev = prevPointer;
		} else if (!prevPointer) {
			nextPointer.prev = null;
			this.head = nextPointer;
		} else if (!nextPointer) {
			prevPointer.next = null;
			this.tail = prevPointer;
		}
		this.length--;
		return this;
	}
	getTheIndex(index) {
		let counter = 0;
		let currentNode = this.head;
		while (counter !== index) {
			currentNode = currentNode.next;
			counter++;
		}
		return currentNode;
	}
}

let myDoublyLinkedList = new MyDoublyLinkedList(1);