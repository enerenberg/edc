var imgThm = document.querySelectorAll("img.thm");

for(var i = 0; i < imgThm.length; i++){
	imgThm[i].addEventListener("click", showHiRes);

}

function showHiRes(evt) {
	var loRes = evt.target.src;
	var overLay = document.querySelector("div.overlay");
	var hiRes = document.createElement("img");
	var spinner = document.createElement("i");

	overLay.style.display = "block";
	hiRes.src = loRes.replace("85/85", "5000/4000");
	overLay.querySelector(".content").appendChild(hiRes);

	spinner.className = "fa fa-refresh fa-spin";
	overLay.appendChild(spinner);

	hiRes.addEventListener("load", function(){
		spinner.parentElement.removeChild(spinner);
	});
	document.getElementsByClassName('close')[0].addEventListener("click", function(){
		overLay.querySelector(".content").innerHTML = "";
		overLay.style.display = "none";
	});
}