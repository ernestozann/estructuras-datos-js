//const array = ["Diego", "Karen", "Oscar"];

class MyArray {
	constructor() {
		this.lenght = 0;
		this.data = {};
	}
	get(index) {
		return this.data[index];
	}
	push(item) {
		this.data[this.lenght] = item;
		this.lenght++;
		return this.data;
	}
}

const myArray = new MyArray();