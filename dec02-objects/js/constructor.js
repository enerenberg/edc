/* js goes here */
var person = "Eric",
	anotherPerson = person,
person = "nerenberg";

// console.log(person);
// console.log(anotherPerson);

var person2 = {name: 'Shanon'};
var anotherPerson2 = person2;
person2.name = 'nerenberg';

// console.log(person2.name);
// console.log(anotherPerson2.name);

function Promo(plan, price, speed, space, site) {
	this.plan = plan;
	this.price = price;
	this.speed = speed;
	this.space = space;
	this.site = site;
	this.showPlan = function(){
		console.log('this is the '+this.plan+' plan.')
	}
}

var promo1 = new Promo('basic', 3.99, 1000, 100, 1);
var promo2 = new Promo('professional', 5.99, 2500, 250, 5);
var promo3 = new Promo('ultimate', 19.99, 5000, 1000, 10);


var scanPromos = function(){
	var mainObj = document.querySelector('main');

	var output = '<ul>';
	for(var i = 0; i < arguments.length; i++){
		//console.log(arguments[i]);
		for(var key in arguments[i]){
			console.log(arguments[i] [key]);
			output += '<li><p>Promo key: '+ key +', Promo value: '+ arguments[i] [key] +'</p></li>';
		}
	}
	output += '</ul>';
	mainObj.innerHTML = output;

	console.log(output);

	// for(var i = 0; i < arguments.length; i++){
	// console.log(arguments[i]);	
	// }
	
}(promo1, promo2, promo3);

