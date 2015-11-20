/* js goes here */

var bodyObj = document.getElementsByTagName('body')[0],
	divObj = document.querySelector('main div'),
	shipObj = document.querySelector('main div:last-child');
// var headObj = document.head;

bodyObj.addEventListener('keydown', function(evt){
	var shipX = parseInt(shipObj.style.left),
		shipY = parseInt(shipObj.style.top);
	if(evt.keyCode === 37){
		shipX = shipX - 5;
		shipObj.style.left = shipX+'%';
	}else if(evt.keyCode === 39){
		shipX = shipX +5;
		shipObj.style.left = shipX+'%';
	}
	if (evt.keyCode === 38){
		shipY = shipY - 5;
		shipObj.style.top = shipY+'%';
	}else if(evt.keyCode === 40){
		shipY = shipY +5;
		shipObj.style.top = shipY+"%";
	}
});

bodyObj.addEventListener('click', function(evt){
	// console.log(evt);
	var mouseX = evt.x,
		mouseY = evt.y;
	// console.log(mouseX+', '+mouseY);
	moveBall(mouseX, mouseY);
});

function moveBall(x, y){
	divObj.style.left = x+'px';
	divObj.style.top = y+'px';
	divObj.style.backgroundColor = "hsla("+(x+y)+",80%, 50%, 1)";
}



function makeShip(){
	var shipW = '100px',
		shipH = '25px',
		shipClr = 'red',
		shipX = '50%',
		shipY = '75%',
		shipPos = 'absolute',
		shipTrans = 'translate3d(-50%, -50%, 0)',
		shipSlide = 'all 1000ms ease-in-out';

	shipObj.style.width = shipW;
	shipObj.style.height = shipH;
	shipObj.style.backgroundColor = shipClr;
	shipObj.style.left = shipX;
	shipObj.style.top = shipY;
	shipObj.style.position = shipPos;
	shipObj.style.transform = shipTrans;
	shipObj.style.transition = shipSlide;

}
makeShip();

function makeBall(){
	var ballW = '50px', 
		ballH = '50px',
		ballClr = 'blue',
		ballRadi = '100%',
		ballX = '100px',
		ballY = '100px',
		ballPos = 'absolute',
		ballTrans = 'translate3d(-50%, -50%, 0)',
		ballSlide = 'all 500ms ease-in-out';

	divObj.style.width = ballW;
	divObj.style.height = ballH;
	divObj.style.backgroundColor = ballClr;
	divObj.style.borderRadius = ballRadi;
	divObj.style.left = ballX;
	divObj.style.top = ballY;
	divObj.style.position = ballPos;
	divObj.style.transform = ballTrans;
	divObj.style.transition = ballSlide;
}

makeBall();