const cards = [
{
rank: "queen",
suit: "hearts",
cardImage: "images/queen-of-hearts.png"
},
{
rank: "queen",
suit: "diamonds",
cardImage: "images/queen-of-diamonds.png"
},
{
rank: "king",
suit: "hearts",
cardImage: "images/king-of-hearts.png "
},
{
rank: "king",
suit: "diamonds",
cardImage: "images/king-of-diamonds.png"
}
];

let cardsInPlay = [];

var checkForMatch = function() {
		if (cardsInPlay.length === 2){
		if (cardsInPlay[0] === cardsInPlay[1]) {
		  alert("You found a match!");
		} else {
		  alert("No match found! Try again!");
	}}
}

function flipCard() {
	let cardId = this.getAttribute('data-id')
	console.log("User Flipped: " + cards[cardId].rank);
	  this.setAttribute('src', cards[cardId].cardImage);
	cardsInPlay.push(cards[cardId].rank)
	console.log(cards[cardId].cardImage)
	console.log(cards[cardId].suit)
	checkForMatch();
}

function createBoard() {
	for (var i = 0; i < 4; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', [i])
		cardElement.addEventListener('click', flipCard)
		document.getElementById('game-board').appendChild(cardElement)
	}
}

createBoard(); 

console.log(cards[3].cardImage)