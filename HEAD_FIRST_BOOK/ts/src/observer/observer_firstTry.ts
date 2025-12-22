import { stdin, stdout } from "process";
import { createInterface } from "readline/promises";

const rl = createInterface({ input: stdin, output: stdout })

async function ask(query: string): Promise<string> {
	const result = await rl.question(query)
	return result
}

interface IObserver {
	oneNotify(): void;
	newSubscriper(): void;
	removedSubscriber(): void;
}

interface IObservable {
	notify(): void;
	add(ob: IObserver): void;
	remove(ob: IObserver): void;
}


class YoutubeChannel implements IObservable {
	constructor(private observers: IObserver[]) {
	}

	notify(): void {
		this.observers.forEach((o) => o.oneNotify())
	}
	add(ob: IObserver): void {
		this.observers.push(ob)
		ob.newSubscriper()
	}
	remove(ob: IObserver): void {
		this.observers = this.observers.filter((o) => o !== ob)
	}
}

class Subscriper implements IObserver {
	constructor(public _name: string) {

	}
	oneNotify(): void {
		console.log(`${this._name} subscripe to your chanel`)
	}
	newSubscriper(): void {
		console.log(`${this._name} just subscribed !!`)
	}
	removedSubscriber(): void {
		console.log(`${this._name} just unSubscribe`)
	}
}

const sub1 = new Subscriper("Garma")
const sub2 = new Subscriper("Patrick")
const sub3 = new Subscriper("danial")


const channel = new YoutubeChannel([sub1, sub2, sub3])


while (true) {
	const chooice = parseInt(await ask("press 1 to add new subscriber : "));
	if (chooice === 1) {
		const subscriberName = await ask("what is the subscriper name : ");
		channel.add(new Subscriper(subscriberName))
	} else {
		break
	}
}


