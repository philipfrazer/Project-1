

var suits = ["C", "D", "H", "S"];
var ranks = [11, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10];
var deckArray = [];

var playerHand = [];
var dealerHand = [];

var playerScore = 0;
var dealerScore = 0;

var makeDeck = function(){
  for(var i = 0; i < suits.length; i++) {
    for(var j = 0; j < ranks.length; j++){
      deckArray.push( [ suits[i], ranks[j] ] );
    }
  }
}

makeDeck();


var img = new Array();

for(var i = 0; i < 52; i++){
img[i] = new Image();
img[i].src = 'images/ME' + i + '.jpg'; }


// console.log(deckArray);  <--- not needed, just logging to see if it works
// console.log(deckArray[0][1]); <--- [0][1] ([0] = the actual card, [1] = value assigned to card )


var deal = function(n, player){
   for(var i = 0; i < n; i++){
     var RandomCard = Math.floor(Math.random()* 52);
     player.push(deckArray[RandomCard]);
   }
}

var sumPlayerHand = function(hand){
  var sum = 0;
  for(var i = 0; i < hand.length; i++){
    sum = sum + hand[i][1];
  }
  playerScore = sum;  // figure out how to add sum to var playerScore
  //alert("player score is: " + playerScore);
}

var sumDealerHand = function(hand){
  var sum = 0;
  for(var i = 0; i < hand.length; i++){
    sum = sum + hand[i][1];
  }
  dealerScore = sum;
  //alert("dealer score is: " + dealerScore);
}




// Hit button will use 'deal function' where (n = 1, player or dealer) instead of n = 2 for initial deal.
//var addHitValPlayer = function() {
//      playerHand.push(playerHand.legth -1)
// }








//
// var whoWinner = function() {
//   Alert(playerScore + ' , ' + dealerScore);
//
//   if(playerScore > 21 && dealerScore > 21) {
//     return "Both Bust, it's a tie";
//   } else if(playerScore === 21 && dealerScore === 21) {
//     return "It's a tie"
//   } else if (playerScore > 21 || playerScore < 21 && dealerScore <= 21) {
//     return "Dealer wins!";
//   } else if (dealerScore > 21 || dealerScore < 21 && playerScore <= 21) {
//     return "Player wins!";
//   } else;
// }


// New Game will be Button
// var New Game = function() {
//    will clear playerHand[]
//    will clear dealerHand[]
//    will clear playerScore;
//    will clear dealerScore;
//}



// If dealerHand <= 17 dealer hit. If dealerHand > 17 && < 21


//------------------------
deal(2, playerHand);
deal(2, dealerHand);


alert("playerHand is : " + playerHand);
sumPlayerHand(playerHand);
alert(playerScore);
alert("The player's hand is: " + playerHand + " so therefore their score is: " + playerScore);

//-----------------------


alert("dealerHand is : " + dealerHand);
sumDealerHand(dealerHand);
alert(dealerScore);
alert("The dealer's hand is: " + dealerHand + " so therefore their score is: " + dealerScore);

alert(deckArray.length);

// use indexOf Ace cards to calculate if Ace already exists and sum = > 21
