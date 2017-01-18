console.log("JS file is connected to HTML! Woo!")

//cards of the game
var cards = ["queen","queen","king","king"];
//cards that are in play
var cardsInPlay = [];
//reset button
var resetButton = document.getElementById('resetButton');



// From the article "The only way to shuffle an array in JavaScript"
// https://www.frankmitchell.org/2015/01/fisher-yates/

function shuffle(array) {
  'use strict';
  var i = 0,
    j = 0,
    temp = null;

  for (i = array.length - 1; i > 0; i -= 1) {
    j = Math.floor(Math.random() * (i + 1));
    temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}

shuffle(cards);

var isMatch = function(selectedCard) {
  'use strict';
  // alert winning/losing message
  if (selectedCard[0] === selectedCard[1]) {
    alert('You found a match!');
  } else {
    alert('Sorry, try again.');
  }
};

var resetBoard = function() {
  'use strict';
  // reset array
  cardsInPlay = []; // clear cards in play array for next try
  // Remove card images
  var faceDown = document.getElementsByClassName('card');
  for (var k = 0; k < faceDown.length; k++) {
    faceDown[k].innerHTML = '';
  }
  // Re-oder the cards array
  shuffle(cards);
  // apply revised array to the cards on the board
  for (var l = 0; l < cards.length; l++) {
    var cardReset = document.getElementsByClassName('card'); // create a new div tag
    cardReset[l].setAttribute('data-card', cards[l]); // set the data-card to its card value, king or queen
  }
  // Hide reset button again
  resetButton.className = 'resetButton_invisible';
};

resetButton.addEventListener('click', resetBoard);


//board variable created using id of "game-board" so that cards can be added
var board = document.getElementById("game-board");

//function created for board
function createBoard() {
 //loop through cards array to create card element for the board  
 for (var i = 0; i<cards.length; i++) { 
 //div created to be used as a card
 var cardElement = document.createElement("div");
 //To link styling, class added
 cardElement.className = "card";
 //Sets the card's "data-card" to be the element of the array
 //data- attributes used to store data for element not tied to style
 cardElement.setAttribute("data-card", cards[i]);
 //The function of isTwoCards will occur when a card gets clicked
 cardElement.addEventListener('click', isTwoCards);
   
 //append card to board
 board.appendChild(cardElement);

 }

}
//This function will see if there are two cards currently in play
function isTwoCards() {
// card gets added to array of cards being viewed  
cardsInPlay.push(this.getAttribute("data-card"));
//Image of card gets shown using if else rule
console.log(this.getAttribute("data-card"));
if (this.getAttribute('data-card') === "king") {
    this.innerHTML = "<img src='IMAGES/king.jpg'>"; // king
  } else {
    this.innerHTML = "<img src='IMAGES/queen.jpg'>"; //queen
  }
  //If two cards are in play, do they match?
  if (cardsInPlay.length === 2) {

  //Two cards in play are checked by isMatch function
  isMatch(cardsInPlay);
  // pass the cardsInPlay as an argument to isMatch function
    // make reset button visible
    resetButton.className = 'resetButton_visible';
    // resetBoard();

  //cards are cleared for next array 
  cardsInPlay = [];
  }
}

  //function created to compare cards for a match and the alerts you get depending on answer
  function isMatch(cards) {
  if (cards[0] === cards[1]) {
    alert("You found a match!");
  } else {
    alert("Sorry, try again.");
  }


}

createBoard();


// Still haven't worked out how to turn the second card over before the alert appears!





