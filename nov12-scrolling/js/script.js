/* js goes here */


(function(){

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

/**
 *Function fetches css applied styles.
 * x needs to be a js object
 * y needs to be a css property
*/
function reqStyle(obj, prop){
	return parseInt( window.getComputedStyle(obj, null).getPropertyValue(prop) );
}

/**
 * Function converting px to vw / vw to px.
 *   num needs to be an integer.
 *
*/
function calcUnit(num){
	return (document.documentElement.clientWidth / num);
}

function fixNav(){
	var scrollDist = window.scrollY;

	if(scrollDist > reqStyle(bodyObj, "padding-top")){
		headerObj.classList.add("fixie");
		mainObj.style.paddingTop = (calcUnit(10) + headerObj.clientHeight) + "px";
	}else{
		headerObj.classList.remove("fixie");
		mainObj.style.paddingTop = "10vw";

	}
}
// console.log(document.documentElement.clientWidth);

function colorChange(){
	var cH = document.documentElement.clientHeight;
	var sH = document.documentElement.scrollHeight;
	console.log( Math.round(sH / cH) );
}
colorChange();

})();