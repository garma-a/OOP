function factory(name) {
	return { name, talk() { console.log("i can talk") } }
}

const me = factory("bin");
const you = factory("garma");


console.log(me, you)

