/* js goes here */
var bodyObj = document.body;
var userObj = document.getElementById('user');

localStorage.setItem('firstName', 'Eric');
var userName = localStorage.getName('firstName');

userObj.textContent = userName;

localStorage.removeItem('firstName');

if(localStorage.addName){
	addName();
}

function addName(){

}