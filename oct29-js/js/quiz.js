/*JS goes here*/

var loginBtn = document.getElementById("login"),
	loginBox = document.getElementById("loginBox"),
	userName = document.getElementById("userName"),
	passWord = document.getElementById("passWord"),
	hdrConfirm = document.getElementById("hdr")
	mainEl = document.getElementsByTagName("main")[0],
	saveduserName = "ericnerenberg",
	savedpassWord = "123456";

loginBtn.addEventListener("click", toggleLoginBox);


function toggleLoginBox(){
	loginBox.classList.toggle("active");
}

function userlogin(){
	var unValue = userName.value;
	var pwValue = passWord.value;
	//console.log(unValue + ":" + pwValue);
	if(unValue === saveduserName && pwValue === savedpassWord){
		//hdrConfirm.textContent = "hello";
		userName.value = "";
		passWord.value = "";
		toggleLoginBox();
		window.location = "http://www.google.com";
	}
	if(!unValue || unValue !== saveduserName){
		userName.classList.add("error");
	}else{
		userName.classList.remove("error");
	}
	if(!pwValue || pwValue !== savedpassWord){
		passWord.classList.add("error");
	}else{
		passWord.classList.remove("error");
	}
}







/*
var nameLI = document.getElementById("name");
var addressLI = document.getElementById("address");
var cityStateZipLI = document.getElementById("cityStateZip"),
	getterLI = document.getElementById("getter");

console.log( getterLI.innerHTML );


var myFirstName = "<h1>Eric</h1>",
	myLastName = "Nerenberg",
	cName, sName, zName; var myAddress = "123 Main Street"; 
var cityStateZip = "Fresno, CA 93611";

nameLI.innerHTML = myFirstName + " " + myLastName;
addressLI.textContent = myAddress;


function getInfo(){
	cName = prompt("what is your city?");
	sName = prompt("what is your state?");
	zName = parseInt(prompt("what is your zipcode?"));

	if(!cName || !sName || !zName){
// 		alert("you missed an answer!");
// 		getInfo()
// 		console.log("there was a problem")
// 	}else{
// 		var isCorrect = confirm("is this correct?\n" + cName + ", " + sName + ", " + zName);
// 		if(!isCorrect){
// 			getInfo();
// 		}else{
// 			cityStateZipLI.textContent = cName + " " + sName + " " + zName;
// 		}
// 		// alert(cName + " " + sName + " " + zName);
// 	}



// }

// var cName = prompt("what city do you live?"),
// 	sName = prompt("what is your state?"),
// 	zName = parseInt("zip code please?");

// alert(cName + " " + sName + " " + zName);
// console.log(cName + " " + sName + " " + zName);
*/