/* js goes here */
var bodyObj = document.body;
var accEls = document.getElementsByTagName('li');

function getStyle(el, prop){
	return window.getComputedStyle(el).getPropertyValue(prop);
}

var lineHeight = getStyle(bodyObj, 'line-height');

for(var i = 0; i < accEls.length; i++){
	var $elP = accEls[i].firstElementChild;
	var pHeight = accEls[i].firstElementChild.clientHeight;

	if(pHeight > parseInt(lineHeight)*2){
		$elP.style.height = parseInt(lineHeight)*2 + 'px';
		$elP.style.overflow = 'hidden';
		$elP.style.transition = 'all 500ms ease-in-out';
		$elP.classList.add('more');

		accEls[i].addEventListener('mouseenter', function(){
			this.firstElementChild.style.height = this.firstElementChild.scrollHeight + 'px';
			// this.firstElementChild.style.overflow = 'hidden';
		});

		accEls[i].addEventListener('mouseleave', function(){
			this.firstElementChild.style.height = parseInt(lineHeight) * 2 + 'px';
			// this.firstElementChild.style.overflow = 'hidden';
		});
		// $elP.style.height = parseInt(lineHeight) * 2 + 'px';
		// $elP.style.overflow = 'hidden';
	}

	// var sudoEl = document.getElementsByClassName('more');
	
}

