function Person() {

}

const you = new Person();

Person.prototype.talk = function() {
	console.log("Hello!");
};


const me = new Person();
