
var bodyObj = document.body;
/*var submitBtn = document.getElementsByTagName('button')[0],
	usernameInput = document.getElementById("usename"),
	passwordInput = document.getElementById("password");*/

bodyObj.style.backgroundColor = 'yellow';

console.log(submitBtn);



// var bodyObj = document.body;

// bodyObj.addEventListener("mousemove", checkDim);

// function checkDim(evt){
// 	var winW = window.innerWidth;
// 	var winH = window.innerHeight;
// 	var mouseEx = evt.clientX;
// 	var mouseY = evt.clientY;

// 	var hue = (mouseY / winH) * 360;
// 	var lum = (mouseEx / winW) * 100;

// 	bodyObj.style.backgroundColor = 'hsla('+ hue +', 50%, '+ lum +'%, 1)';
// }

submitBtn.addEventListener("click", function(evt){
	console.log('click');
	evt.preventDefault();
	var unVal, pwVal;
	var unVal = usernameInput.value;
	var pwVal = passwordInput.value;

	console.log(unVal + ', ' + pwVal);
}
