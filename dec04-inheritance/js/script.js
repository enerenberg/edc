/* js goes here */

(function(){

	'use strict';

	var Vehicle = function(make, model){
		this.make = make;
		this.model = model;
		this.miles = 0;
		this.last_oil_change = 0;
	};

	Vehicle.prototype.drive = function(miles){
		this.miles += miles;
		return this; //return the object
		//this.miles = this.miles + miles;
	}
	Vehicle.prototype.change_oil = function(){
		this.last_oil_change = this.miles;
		return this; //return the object
	}
	Vehicle.prototype.need_oil_change = function(){
		return (this.miles - this.last_oil_change > 10);
	}

	var Car = function(make, model, door_count, hatch_back){
		this.make = make;
		this.model = model;
		this.door_count = door_count;
		if(arguments.length == 4){
			this.hatch_back = hatch_back;
		}else{
			this.hatch_back = true;
		}
		this.miles = 0;
		this.last_oil_change = 0;
	}
	Car.prototype = new Vehicle();
	var tesla = new Car('tesla', 's', 2, true);

	/* End objects */

	var oilObj = document.querySelector('div.dash a:first-child');
	var keyObj = document.querySelector('div.dash a:last-child');
	var gasObj = document.querySelector('div.gas a');
	var inputObj = document.querySelector('input');
	var timerId, milage = 0;

	oilObj.addEventListener('click', function(evt){
		changeOil(evt, this);
	});
	keyObj.addEventListener('click', function(evt){
		startCar(evt, this);
	});
	gasObj.addEventListener('click', function(evt){
		driveCar(evt, this);
	});

	var startCar = function(e, x){
		e.preventDefault;

		x.classList.toggle('active');
		if(x.className === 'active'){
			checkOil();
		}
	};

	var checkOil = function(){

		//console.log('checking\' the oil.');
	};

	var changeOil = function(e, z){
		//console.log(e);
		//console.log(z);

		tesla.last_oil_change = tesla.miles;
		z.classList.remove('active');
	};

	var driveCar = function(e, y){
		e.preventDefault();
		if(keyObj.className === 'active'){
			//timerId = setInterval(increaseMilage, 1000);
			if(y.className === 'active'){
				y.classList.remove('active');
				y.querySelector('i').className = 'mdi mdi-play';
				clearInterval(timerId);
			}else{
				y.classList.add('active');
				y.querySelector('i').className = 'mdi mdi-stop';
				timerId = window.setInterval(increaseMilage, 500);
			}
		}
	};

	var increaseMilage = function(){
		milage += 5;
		tesla.miles = milage;
		inputObj.value = tesla.miles;	
		
		if(tesla.need_oil_change()){
			oilObj.classList.add('active');
		}else{
			oilObj.classList.remove('active');
		}
	};

}()):