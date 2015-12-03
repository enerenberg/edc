/* js goes here */
'use strict';

var Recipe = function(title, time, temp, ingredients, image){
	this.title = title;
	this.time = time;
	this.temp = temp;
	this.ingredients = ingredients;
	this.image = image;
	
};
Recipe.prototype.card = 'white';
Recipe.prototype.iLove = function(){
	console.log('I Love '+ this.title);
}


var recipe1 = new Recipe('Beef Stew', 3, 350, ['beef', 'potatoes', 'vegtables', 'spices'], 'http://entree.com/wp-content/uploads/2015/01/Making-beef-stew-dont-do-this.jpg');
var recipe2 = new Recipe('Apple Pie', 3, 400, ['apples', 'crust', 'sugar', 'flour'], 'https://upload.wikimedia.org/wikipedia/commons/4/4b/Apple_pie.jpg');
var recipe3 = new Recipe('Chicken Wrap', 3, 370, ['chicken', 'rice', 'beans', 'tortillas'], 'http://georginaspizzeriaandrestaurant.com/wp-content/uploads/2015/01/Grilled-Chicken-with-Veggies-Wrap.jpg');
var recipe4 = new Recipe('Beef Soup', 3, 350, ['meat', 'potatoes', 'vegtables', 'spices'], 'http://www.sagerecipes.com/wp-content/uploads/2011/11/dsc_0812.jpg?71597e');
var recipe5 = new Recipe('Chile', 3, 350, ['meat', 'beans', 'onions', 'chile'], 'http://www.mygloriousfood.com/wp-content/uploads/2010/08/IMG_0561a1.jpg');

var printRecipe = function(){
	var mainObj = document.querySelector('main');
	
	for(var i = 0; i < arguments.length; i++){
		var recipeCard = document.createElement('div');
		recipeCard.className = 'recipeCard';
		arguments[i].iLove();
		// console.log(arguments[i]);
		var recipe = 
			'<div class="img" style="background-image: url('+ arguments[i].image +')"></div>'+
			'<div class="content" style="background-color: '+arguments[i].card+'">'+
			'<h1>'+ arguments[i].title +'</h1>'+
				'<ol>'+
					'<li>Cooking Time: '+ arguments[i].time +'</li>'+
					'<li>Cooking Temperature: '+ arguments[i].temp +'</li>'+
				'</ol>'+
				'<ul>';
					for(var j = 0; j < arguments[i].ingredients.length; j++){
					recipe += '<li>'+ arguments[i].ingredients[j] +'</li>';
					
					}
					recipe += '</ul></div>';
			mainObj.appendChild(recipeCard).innerHTML = recipe;
	
		//console.log(arguments[i].image);
	}
}(recipe1, recipe2, recipe3, recipe4, recipe5);

