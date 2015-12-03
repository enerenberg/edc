/* js goes here */

// var socialMedia = {	
// 	twitter: "https://twitter.com/Real_CSS_Tricks",
// 	flickr: "https://www.flickr.com/photos/zeldman/20881757310",
// 	youtube: "https://www.youtube.com/user/realcsstricks",
// 	facebook: "https://www.facebook.com/CSSTricks/"
// };

var artDisplay = {
	jackson: 'http://static.independent.co.uk/s3fs-public/thumbnails/image/2012/11/12/17/pollockTateModern.gif',
	davinci: 'http://ipadinsight.com/wp-content/uploads/2012/05/Leonardo-da-Vinci-Anatomy-for-iPad.jpg',
	dali: 'https://walksalongtheseine.files.wordpress.com/2012/08/dali4.jpg',
	michelangelo: 'https://arkarjun.files.wordpress.com/2009/05/michelangelo2-768.jpg',
	adams: 'https://art209photography.files.wordpress.com/2012/01/dscn0891.jpg',
	okeefe: 'http://www.wallcoo.net/paint/okeeffe/m01/ml0006.jpg',
	vangogh: 'https://onlinebrowsing.files.wordpress.com/2012/03/vangogh7.jpg',
	max: 'http://2.bp.blogspot.com/-1IQovgYaptw/Tssl42buq4I/AAAAAAAAcJM/GQBeZQhy8BQ/s1600/max2.jpg',
	stieglits: 'https://c1.staticflickr.com/3/2594/4093847128_8b5eecfea2_b.jpg'
}


var artist = function(){
	var output = '<ul>';
	var artDisplayDiv = document.getElementsByClassName('art');
	for(var key in arguments[0]){
		output += '<li><img src="' + artDisplay[key] + '" alt="' + key + '"></li>';
		
	}
	output += '</ul>';
	for(var i = 0; i < artDisplayDiv.length; i++){
		artDisplayDiv[i].innerHTML = output;
	}

}(artDisplay);

document.querySelector('ul').addEventListener('click', function(evt){
	if(evt.target.tagName === IMG){
		var previewDiv = document.createElement('div');
		previewDiv.className = 'preview';
		evt.target.parentElement.appendChild(previewDiv);

		var previewImg = document.createElement('img');
		 
	}
});

// function showHiRes(evt) {
// 	var loRes = evt.target.src;
// 	var overLay = document.querySelector("div.overlay");
// 	var hiRes = document.createElement("img");
// 	var spinner = document.createElement("i");

// 	overLay.style.display = "block";
// 	hiRes.src = loRes.replace("85/85", "5000/4000");
// 	overLay.querySelector(".content").appendChild(hiRes);

// 	spinner.className = "fa fa-refresh fa-spin";
// 	overLay.appendChild(spinner);

// 	hiRes.addEventListener("load", function(){
// 		spinner.parentElement.removeChild(spinner);
// 	});
// 	document.getElementsByClassName('close')[0].addEventListener("click", function(){
// 		overLay.querySelector(".content").innerHTML = "";
// 		overLay.style.display = "none";
// 	});
// }





// var social = function(){
// 	var output = "<ul>";
// 	var smiList = document.getElementsByClassName("smi");
// 	for(var key in arguments[0]){
// 		//console.log(socialMedia[key]);
// 		output += '<li><a href="' + socialMedia[key] + '"><i class="fa fa-' + key + '"></i></a></li>';
// 	}
// 	output += "</ul>";
// 	for(var i = 0; i < smiList.length; i++){
// 		smiList[i].innerHTML = output;
// 	}
// }(socialMedia);





