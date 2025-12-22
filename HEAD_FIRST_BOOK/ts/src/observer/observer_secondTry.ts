interface Subscriber {
	update(message: string): void;
}

interface Publisher {
	subscribers: Subscriber[];
	addSubscriber(subscriber: Subscriber): void;
	removeSubscriber(subscriber: Subscriber): void;
	notifySubscribers(message: string): void;
}


class NewsPublisher implements Publisher {
	subscribers: Subscriber[] = [];
	constructor(subscribers: Subscriber[] = []) {
		this.subscribers = subscribers;
	}

	addSubscriber(subscriber: Subscriber): void {
		this.subscribers.push(subscriber);
	}

	removeSubscriber(subscriber: Subscriber): void {
		this.subscribers = this.subscribers.filter(sub => sub !== subscriber);
	}

	notifySubscribers(message: string): void {
		this.subscribers.forEach(subscriber => subscriber.update(message));
	}
}

class NewsSubscriber implements Subscriber {
	name: string
	constructor(name: string) {
		this.name = name;
	}

	update(message: string): void {
		console.log(`${this.name} received news update: ${message}`);
	}
}


// Example usage:
const publisher = new NewsPublisher();

const subscriber1 = new NewsSubscriber("Alice");
const subscriber2 = new NewsSubscriber("Bob");

publisher.addSubscriber(subscriber1);
publisher.addSubscriber(subscriber2);

publisher.notifySubscribers("Breaking News: Observer Pattern Implemented!");

