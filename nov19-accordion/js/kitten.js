
var htmlObj = document.getElementsByTagName('html')[0],
	kittens = document.getElementById('kittens'),
	guessBox = document.querySelector('input[type="answer"]'),
	submitBtn = document.getElementById('btn'),
	resetBtn = document.querySelector('input[type="reset"'),
	thumbs = document.querySelectorAll('form img');

var strayCats = 0;
var cat = '<img src="img/kitten.png" height="50" width="50">';

submitBtn.addEventListener('click', submitGuess);
resetBtn.addEventListener('click', clearGame);

function startGame(){
	kittens.innerHTML = '';
	strayCats = randomNum(50);
	console.log(strayCats);

	for(var i = 0; i < strayCats; i++){
		kittens.innerHTML += cat;
	}
}
startGame();

function submitGuess(evt){
	evt.preventDefault();
	var guess = guessBox.value;
	guessBox.disabled = true;
	checkGame(guess);
}

function randomNum(max){
	return Math.floor(Math.random() * (max - 1 + 1)) + 1;
}

function checkGame(guess){
	if(!isNaN(parseInt(guess)) && guess == strayCats){
		getAward(true);
	}else{
		getAward(false);
	}
}

function getAward(x){
	thumbs[+x].style.display = 'block';
	if(x){
		htmlObj.style.backgroundColor = 'hsla(100, 20%, 40%, 1)';
	}else{
		htmlObj.style.backgroundColor = 'hsla(0, 20%, 50%, 1)';
	}
}
function clearGame(){
	kittens.innerHTML = '';
	guessBox.value = '';
	guessBox.disabled = false;
	htmlObj.style.backgroundColor = 'white';
	startGame();
	for (var i = 0; i < thumbs.length; i++){
		thumbs[i].style.display = 'none';
	}
}