interface FlyBehavior {
	fly(): void;
}
interface QuackBehavior {
	quack(): void;
}

class FlyWithWings implements FlyBehavior {
	fly(): void {
		console.log("Flying with wings!");
	}
}
class FlyNoWay implements FlyBehavior {
	fly(): void {
		console.log("I can't fly.");
	}
}
class Quack implements QuackBehavior {
	quack(): void {
		console.log("Quack!");
	}
}
class Squeak implements QuackBehavior {
	quack(): void {
		console.log("Squeak!");
	}
}
class MuteQuack implements QuackBehavior {
	quack(): void {
		console.log("<< Silence >>");
	}
}

abstract class Duck {
	constructor(protected flyBehavior: FlyBehavior, protected quackBehavior: QuackBehavior) { }

	performFly(): void {
		this.flyBehavior.fly();
	}
	performQuack(): void {
		this.quackBehavior.quack();
	}
}

class MallardDuck extends Duck {
	constructor() {
		super(new FlyWithWings(), new Quack());
	}
}

class RubberDuck extends Duck {
	constructor() {
		super(new FlyNoWay(), new Squeak());
	}
}

// Usage
const mallard = new MallardDuck();
mallard.performFly(); // Output: Flying with wings!
mallard.performQuack(); // Output: Quack!	
const rubberDuck = new RubberDuck();
rubberDuck.performFly(); // Output: I can't fly.
rubberDuck.performQuack(); // Output: Squeak!










