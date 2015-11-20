window.addEventListener("scroll", scrollF);

function scrollF(evt){
	// console.log(window.scrollY);
	// var num = 10;
	// console.log(num);
	fixNav();
}

var bodyObj = document.getElementsByTagName("body")[0],
	headerObj = document.getElementsByTagName("header")[0],
	mainObj = document.getElementsByTagName("main")[0];

function reqStyle(x, y){
	return parseInt( window.getComputedStyle(x, null).getPropertyValue(y) );
}

function fixNav(){
	var scrollDist = window.scrollY;

	if(scrollDist > reqStyle(bodyObj, "padding-top")){
		console.log("yes it has");
	}
}


