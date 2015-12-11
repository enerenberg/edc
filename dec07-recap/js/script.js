/* js goes here */
var userObj = document.getElementById('user');

localStorage.setItem('firstName', 'Eric');
var userName = localStorage.getName('firstName');

userObj.textContent = userName;

localStorage.removeItem('firstName');














































































// var userObj = document.getElementById('user');
// //var userName = prompt('What is your name?');

// // var userName = '';
// // userName += prompt('What is your first Name') + ' ';
// // userName += prompt(' What is your middle name') + ' ';
// // userName += prompt(' What is your last name');

// var userNumber = prompt('Please pick a number that is greater than 10');

// var isItGreater = function pickNumber(num){
// 	num = parseInt(num);
// 	if(num >= 10){
// 		//console.log('it is greater');
// 		userObj.textContent = 'you chose a number greater than 10. you chose ' + num;
// 	}else{
// 		//console.log('it is less');
// 		userNumber = prompt('select another number');
// 	}
// }; 
// isItGreater(userNumber);

// var foodItems = ["milk", "cheese", "soup", "bread", "meat"];
// foodItems.splice(2, 1, 'peanutbutter');	

// for (var i = 0; i < foodItems.length; i ++) {

// 	console.log(foodItems[i]);
// };

// var randomNumber = Math.floor(Math.random() * 11);
// console.log(randomNumber);

