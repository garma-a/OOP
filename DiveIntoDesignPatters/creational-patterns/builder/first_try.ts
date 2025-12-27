class BuilderPattern {
	private product: string[];
	constructor() {
		this.product = [];
	}
	addPart(part: string): BuilderPattern {
		this.product.push(part);
		return this;
	}
	getProduct(): string {
		return this.product.join(", ");
	}
	soThat(): string {
		return "welcome to this worls";

	}
}

const builder = new BuilderPattern();
const product = builder.addPart("Part A").addPart("Part B").addPart("Part C").getProduct();

