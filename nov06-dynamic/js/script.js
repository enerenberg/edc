/* js goes here */

var mainObj = document.getElementsByTagName('main')[0];

function $(id){
	return document.getElementById(id);
}

function setListeners(){
	if($('page1')){
		$('page1').addEventListener('click', loadPage1);
	}
	if($('page2'))$('page2').addEventListener('click', loadPage2);
	if($('page3'))$('page3').addEventListener('click', loadPage3);
	if($('page4'))$('page4').addEventListener('click', loadPage4);
}
setListeners();

var page1 =
	'<div class-="content">'+
			'<span>'+
				'<button id="page1" disabled>prev</button>'+
				'<button id="page2">next</button>'+
			'</span>'+
			'<div>'+
				'<h1>This is the Home Page</h1>'+
			'</div>';

var page2 =
	'<div class-="content">'+
			'<span>'+
				'<button id="page1">prev</button>'+
				'<button id="page3">next</button>'+
			'</span>'+
			'<div>'+
				'<h1>This is page two</h1>'+
			'</div>';

var page3 =
	'<div class-="content">'+
			'<span>'+
				'<button id="page2">prev</button>'+
				'<button id="page4">next</button>'+
			'</span>'+
			'<div>'+
				'<h1>This is page three</h1>'+
			'</div>';

var page4 =
	'<div class-="content">'+
			'<span>'+
				'<button id="page3">prev</button>'+
				'<button id="page1">home</button>'+
			'</span>'+
			'<div>'+
				'<h1>This is page four</h1>'+
			'</div>';

function loadPage1(){
	mainObj.innerHTML = page1;
	setListeners();
}

function loadPage2(){
	mainObj.innerHTML = page2;
	setListeners();
}

function loadPage3(){
	mainObj.innerHTML = page3;
	setListeners();
}

function loadPage4(){
	mainObj.innerHTML = page4;
	setListeners();
}

