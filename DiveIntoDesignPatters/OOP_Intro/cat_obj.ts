interface Animal {
	name: string;
	speak(): string;
}
class Cat implements Animal {
	name: string;
	constructor(name: string) {
		this.name = name;
	}

	speak(): string {
		return `${this.name} says Meow!`;
	}
}
class Dog implements Animal {
	name: string;
	age: number;
	constructor(name: string) {
		this.name = name;
		this.age = 0;
	}

	speak(): string {
		return `${this.name} says Woof!`;
	}
}
const arr = [new Cat("Whiskers"), new Dog("Buddy")];

arr.forEach((animal) => {
	console.log(animal.speak());
})





