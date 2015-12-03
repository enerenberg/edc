function Person(name, age, job){
	this.name = name;
	this.age = age;
	this.job = job;
}

var person1 = new Person('Eric', 55, 'schlub'),
	person2 = new Person('Shanon', 50, 'homaker'),
	person3 = new Person('Ness', 56, 'carpenter'),
	person4 = new Person('Matt', 40, 'teacher'),
	person5 = new Person('Bill', 60, 'father');

var persons = function(){
		for(var i = 0; i < arguments.length; i++){
			console.log(arguments[i]);
	}
}(person1, person2, person3, person4, person5);









// console.log(person1);
// console.log(person2);
// console.log(person3);
// console.log(person4);
// console.log(person5);