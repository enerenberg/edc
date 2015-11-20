var payBtn = document.getElementById('pay'),
	mainObj = document.getElementsByTagName('main')[0];
payBtn.addEventListener('click', showForm);

function showForm(){
	var formStuff = 
	'<form action="">'+
	'<div class="name">'+
	'First Name'+
	'<input type="text" name="firstname">'+
	'Last Name			'+
	'<input type="text" name="lastname">'+
	'</div>'+
	'Address'+
	'<input type="text" name="address">'+
	'<br>'+
	'<div>'+
	'City'+
	'<input type="text" name="city">'+
	'State'+
	'<input type="text" name="state">'+
	'ZipCode'+
	'<input type="text" name="ZipCode">'+
	'</div>'+
	'<br>'+
	'<div>'+
	'Credit Card Number'+
	'<input type="text">'+
	'<input type="text">'+
	'<input type="text">'+
	'<input type="text">'+
	'</div>'+
	'<br>'+
	'<input type="submit" value="Submit">'+
	'</form>';
	mainObj.innerHTML = formStuff;

	var formObj = document.getElementsByTagName('form')[0],
		formEls = formObj.length,
		submitBtn = formObj.querySelector('input[type="submit"]');

	submitBtn.addEventListener('click', function(evt){
		evt.preventDefault();
		getInfo();
	});

	function getInfo(){
		var formInfo
			formArr = [];
		for(var i = 0; i < formEls-1; i++){
			formInfo = formObj.elements[i].value;
			if(!!formInfo){
				formArr.push(formInfo);
			}
		}
		thankYou(formArr);
	}
	function thankYou(x){
		console.log(x[0]);
		alert('Thank You '+x[0]+' '+x[1]+'!');
	}
}
