interface quckStrategy { quck(): string; }
interface flyStrategy { fly(): string; }

class canFly implements flyStrategy {
	fly(): string {
		return "i can fly";
	}
}
class canQuck implements quckStrategy {
	quck(): string {
		return "i can quck";
	}
}

class cannotFly implements flyStrategy {
	fly(): string {
		return "i cannot fly";
	}
}
class cannotQuck implements quckStrategy {
	quck(): string {
		return "i cannot quck";
	}
}
abstract class Duck {
	protected name: string = "default name";
	constructor(private quckBehavior: quckStrategy, private flyBehavior: flyStrategy) {
	}

	perfromFly(): void {
		console.log(`${this.name} :${this.flyBehavior.fly()} `)
	}
	perfromQuck(): void {
		console.log(`${this.name} : ${this.quckBehavior.quck()} `)

	}
}
class MallerdDuck extends Duck {
	constructor(quckBehavior: quckStrategy, flyBehavior: flyStrategy) {
		super(quckBehavior, flyBehavior);
		this.name = "Mallerd Duck";
	}
}
class RubberDuck extends Duck {
	constructor(quckBehavior: quckStrategy, flyBehavior: flyStrategy) {
		super(quckBehavior, flyBehavior);
		this.name = "Rubber Duck";
	}
}

const m = new MallerdDuck(new canQuck(), new canFly());
m.perfromFly();
m.perfromQuck();

const r = new RubberDuck(new cannotQuck(), new cannotFly());
r.perfromFly();
r.perfromQuck();
