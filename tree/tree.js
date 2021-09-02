//   10
// 4   20
//2	8 17 170

class Node {
	constructor(value) {
		this.value = value;
		this.right = null;
		this.left = null;
	} 
}

class BinarySearchTree {
	constructor() {
		this.root = null;
	}
	insert(value) {
		const newNode = new Node(value);
		if (this.root === null) {
			this.root = newNode;
			return this;
		} else {
			let currentNode = this.root;
			while (true) {
				if (value < currentNode.value) {
					if (!currentNode.left) {
						currentNode.left = newNode
						return this;
					}
					currentNode = currentNode.left;
				} else {
					if (!currentNode.right) {
						currentNode.right = newNode
						return this;
					}
					currentNode = currentNode.right;
				}
			}
		}
	}
	search(value) {
		if (this.root === null) {
			const error = console.error("este arbol esta vacio");
			return error;
		} else {
			let currentNode = this.root;
			while (currentNode && currentNode.value != value) {
				if (value < currentNode.value) {
					currentNode = this.left;
				} else {
					currentNode = this.right;
				}
			}
			console.log("Existe el nodo");
			return currentNode;
		}
	}
}

const myTree = new BinarySearchTree();