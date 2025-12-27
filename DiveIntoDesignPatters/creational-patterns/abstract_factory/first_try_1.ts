interface IChair {
	legs: number;
	material: string;
	hasCushion: boolean;
}


interface IModernFactory {
	createChair(): IChair;
}


class Modern implements IChair, IModernFactory {
	constructor(public legs: number, public material: string, public hasCushion: boolean) { }
	createChair(): IChair {
		return this
	}


class SimpleChair implements IChair {
	constructor(public legs: number, public material: string, public hasCushion: boolean) { }
}


