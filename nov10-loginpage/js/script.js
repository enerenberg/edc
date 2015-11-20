/* js goes here */

var bodyObj = document.body,
	mainObj = getElementsByTagName("main")[0],
	timerId = window.setTimeout(displayLogin, 5000);
	// usernameInput = document.getElementById("usename"),
	// passwordInput = document.getElementById("password"),

// var formMarkup =
// '<form>'+
// '<label class="user">'+
// '<span>UserName</span>'+
// '<input type="text" id="usename">'+
// '<small></small>'+
// '<span>PassWord</span>'+
// '<input type="password" id="password">'+
// '<button id="submitBtn">Submit</button>'+
// '</label>'+
// '</form>';


bodyObj.addEventListener("mousemove", checkDim);

function checkDim(evt){
	var winW = window.innerWidth;
	var winH = window.innerHeight;
	var mouseEx = evt.clientX;
	var mouseY = evt.clientY;

	var hue = (mouseY / winH) * 360;
	var lum = (mouseEx / winW) * 100;

	bodyObj.style.backgroundColor = 'hsla('+ hue +', 50%, '+ lum +'%, 1)';
}

function displayLogin(){
	clearTimeout(timerId);
	mainObj.innerHTML = formMarkup;
	var submitBtn = document.getElementsByTagName('button')[0],
		formObj = document.querySelector("form");


submitBtn.addEventListener("click", function(evt){
	evt.preventDefault();
	var els = formObj.elements,
		len = els.length -1,
		arr = [];

		for(var i = 0; i < len; i++){
			if(!els[i].value){
				els[i].nextElementSibling.innerHTML = "Please Fill In The Input";
			}else{
				els[i].nextElementSibling.innerHTML = "";
				arr.push(els[i].value);
			}
			arr.push(els[i].value);
		}
		console.log(arr);
	// console.log('click');
	// var unVal, pwVal;
	// unVal = usernameInput.value;
	// pwVal = passwordInput.value;

	// console.log(unVal + ', ' + pwVal);
	});
}