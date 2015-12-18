/* js goes here */

var mainObj = document.getElementById('main'),
	colors = ['green', 'yellow', 'orange', 'red', 'purple', 'blue'],
	apps = ['phone', 'notes', 'calendar', 'music', 'itunes', 'weather'];

var appendElement = function(el){
	mainObj.appendChild(el);
	//addAppName(newDiv, i);
	el.innerHTML = addAppName(i);
};

var addAppName = function(i){
	//el.innerHTML = apps[i];
	return apps[i];
};

for(var i = 0; i < colors.length; i++){
	var newDiv = document.createElement('div');
	newDiv.className = 'div-' + colors[i];
	
	appendElement(newDiv);
	
}


