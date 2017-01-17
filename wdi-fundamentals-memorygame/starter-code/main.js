console.log("JS file is connected to HTML! Woo!")

var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";



//if (cardOne === cardTwo) {
//alert('You found a match!');	
//} else {
//alert('Sorry, try again.');
//}

//gameboard variable created using id of "game-board"
var board = document.getElementById('game-board');

//function created
var createCards = function(){
 //for loop	
 for (var i = 0; i <= 3; i++) { 
 //card element created	
 var playingCards = document.createElement('div');
//class added to card
PlayingCards.className = 'card';
document.querySelector('div').appendChild(playingCards);
  }

}
createCards();