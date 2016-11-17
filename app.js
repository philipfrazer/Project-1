

var suits = ["C", "D", "H", "S"];
var ranks = [11, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10];

var playerHand = [];
var dealerHand = [];
var deckArray = [];



var makeDeck = function(){
  for(var i = 0; i < suits.length; i++) {
    for(var j = 0; j < ranks.length; j++){
      deckArray.push( [ suits[i], ranks[j] ] );
    }
  }
}

makeDeck();
console.log(deckArray);


console.log(deckArray[0][1]);  //[0][1] ([0] = the actual card, [1] = value assigned to card )


var deal = function(n, player){
   for(var i = 0; i < n; i++){
     var RandomCard = Math.floor(Math.random()* 52);
     player.push(deckArray[RandomCard]);
   }
}


// Hit button will use deal function where (n = 1, player or dealer) instead of 2 for initial deal.
// If dealerHand <= 17 dealer hit. If dealerHand > 17 && < 21 


//------------------------
deal(2, playerHand);
alert(playerHand);

deal(2, dealerHand);
alert(dealerHand);



// use indexOf Ace cards to calculate if Ace already exists and sum = > 21
