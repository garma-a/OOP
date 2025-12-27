interface IProduct {
	doStaff(): void;
}

class ProductA implements IProduct {
	doStaff(): void {
		console.log("Product A is doing its staff.");
	}
}

class ProductB implements IProduct {
	doStaff(): void {
		console.log("Product B is doing its staff.");
	}
}

interface ICreator {
	createProduct(): IProduct;
}
class CreatorA implements ICreator {
	createProduct(): IProduct {
		return new ProductA();
	}
}

class CreatorB implements ICreator {
	createProduct(): IProduct {
		return new ProductB();
	}
}


const factory = (Math.random() > 0.5) ? new CreatorA() : new CreatorB();
const product = factory.createProduct();
product.doStaff();



