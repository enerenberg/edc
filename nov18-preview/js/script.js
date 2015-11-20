/* js goes here */

var figImage = document.querySelectorAll('main div div:first-child img'),
	figButton = document.querySelectorAll('main div div:last-child a'),
	iconSpin = document.querySelectorAll('main div div:first-child p');


for(var i = 0; i < figImage.length; i++){
	figImage[i].addEventListener('mouseenter', figImgEnter);
	figImage[i].addEventListener('mouseleave', figImgLeave);
}

for(var i = 0; i < figButton.length; i++){
	figButton[i].addEventListener('mouseenter', figBtnEnter);
	figButton[i].addEventListener('mouseleave', figBtnLeave);
}

for(var i = 0; i < iconSpin.length; i++){
	iconSpin[i].addEventListener('mouseenter', figBtnEnter);
	iconSpin[i].addEventListener('mouseleave', figBtnLeave);
}

function figImgEnter(){
	this.style.transform = 'scale(1.2)';
	this.style.transition = 'all 500ms ease-in-out';
}

function figImgLeave(){
	this.style.transform = 'scale(1)';
}

function figBtnEnter(){
	var infoWin = this.parentElement.previousElementSibling.lastElementChild;
	infoWin.style.top = '0%';
	infoWin.style.transition = 'all 500ms ease-in-out';
	this.style.backgroundColor = ' hsla(44, 18%, 55%, 1)';
	this.style.borderColor = ' hsla(44, 18%, 45%, 1)';
	this.style.color = 'hsla(0, 0%, 100%, 1)';
	this.style.transition = 'all 500ms ease-in-out';
}

function figBtnLeave(){
	// var infoWin = this.parentElement.previousElementSibling.lastElementChild;
	// infoWin.style.top = '100%';
	// infoWin.style.transition = 'all 500ms ease-out';

	this.style.backgroundColor = ' hsla(44, 18%, 65%, 1)';
	this.style.borderColor = ' hsla(44, 18%, 55%, 1)';
	this.style.color = 'hsla(0, 0%, 9%, 1)';
}
