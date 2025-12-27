function Person(name) {
	this.name = name;
}
Person.prototype.talk = function() {
	console.log("i can talk because i'm person");
}
//----------
function SuperPerson(name) {
	Person.call(this, name);
}
SuperPerson.prototype = Object.create(Person.prototype);
SuperPerson.prototype.constructor = SuperPerson;

SuperPerson.prototype.fly = function() {
	console.log("i can fly because i'm super person");
}


const you = new Person("alice");
const me = new SuperPerson("bob");


you.talk();


me.fly();
me.talk();
console.log(me.name)




