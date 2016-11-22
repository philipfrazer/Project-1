
$( document ).ready(function() {

	var playerHand = [];
	var dealerHand = [];

	var playerScore = 0;
	var dealerScore = 0;

	let cards = [
			  {
					cardSuit: "Clubs",
					cardName: "Ace",
					cardValue: 11,
					cardImg: "C1.jpg"
			  },

			  {
					cardSuit: "Clubs",
					cardName: "Two",
					cardValue: 2,
					cardImg: "C2.jpg"
			  },

			  {
					cardSuit: "Clubs",
					cardName: "Three",
					cardValue: 3,
					cardImg: "C3.jpg"
			  },

			  {
					cardSuit: "Clubs",
					cardName: "Four",
					cardValue: 4,
					cardImg: "C4.jpg"
			  },

			  {
					cardSuit: "Clubs",
					cardName: "Fice",
					cardValue: 5,
					cardImg: "C5.jpg"
			  },

			  {
					cardSuit: "Clubs",
					cardName: "Six",
					cardValue: 6,
					cardImg: "C6.jpg"
			  },

			  {
					cardSuit: "Clubs",
					cardName: "Seven",
					cardValue: 7,
					cardImg: "C7.jpg"
			  },

			  {
					cardSuit: "Clubs",
					cardName: "Eight",
					cardValue: 8,
					cardImg: "C8.jpg"
			  },

			  {
					cardSuit: "Clubs",
					cardName: "Nine",
					cardValue: 9,
					cardImg: "C9.jpg"
			  },

			  {
					cardSuit: "Clubs",
					cardName: "Ten",
					cardValue: 10,
					cardImg: "C10.jpg"
			  },

			  {
					cardSuit: "Clubs",
					cardName: "Jack",
					cardValue: 10,
					cardImg: "C11.jpg"
			  },

			  {
					cardSuit: "Clubs",
					cardName: "Queen",
					cardValue: 10,
					cardImg: "C12.jpg"
			  },

			  {
					cardSuit: "Clubs",
					cardName: "King",
					cardValue: 10,
					cardImg: "C13.jpg"
			  },

			  //----------------- Diamonds -----------------------//

			  {
					cardSuit: "Diamonds",
					cardName: "Ace",
					cardValue: 11,
					cardImg: "D1.jpg"
			  },

			  {
					cardSuit: "Diamonds",
					cardName: "Two",
					cardValue: 2,
					cardImg: "D2.jpg"
			  },

			  {
					cardSuit: "Diamonds",
					cardName: "Three",
					cardValue: 3,
					cardImg: "D3.jpg"
			  },

			  {
					cardSuit: "Diamonds",
					cardName: "Four",
					cardValue: 4,
					cardImg: "D4.jpg"
			  },

			  {
					cardSuit: "Diamonds",
					cardName: "Fice",
					cardValue: 5,
					cardImg: "D5.jpg"
			  },

			  {
					cardSuit: "Diamonds",
					cardName: "Six",
					cardValue: 6,
					cardImg: "D6.jpg"
			  },

			  {
					cardSuit: "Diamonds",
					cardName: "Seven",
					cardValue: 7,
					cardImg: "D7.jpg"
			  },

			  {
					cardSuit: "Diamonds",
					cardName: "Eight",
					cardValue: 8,
					cardImg: "D8.jpg"
			  },

			  {
					cardSuit: "Diamonds",
					cardName: "Nine",
					cardValue: 9,
					cardImg: "D9.jpg"
			  },

			  {
					cardSuit: "Diamonds",
					cardName: "Ten",
					cardValue: 10,
					cardImg: "D10.jpg"
			  },

			  {
					cardSuit: "Diamonds",
					cardName: "Jack",
					cardValue: 10,
					cardImg: "D11.jpg"
			  },

			  {
					cardSuit: "Diamonds",
					cardName: "Queen",
					cardValue: 10,
					cardImg: "D12.jpg"
			  },

			  {
					cardSuit: "Diamonds",
					cardName: "King",
					cardValue: 10,
					cardImg: "D13.jpg"
			  },

	//---------------- Hearts ---------------//

			  {
					cardSuit: "Hearts",
					cardName: "Ace",
					cardValue: 11,
					cardImg: "H1.jpg"
			  },

			  {
					cardSuit: "Hearts",
					cardName: "Two",
					cardValue: 2,
					cardImg: "H2.jpg"
			  },

			  {
					cardSuit: "Hearts",
					cardName: "Three",
					cardValue: 3,
					cardImg: "H3.jpg"
			  },

			  {
					cardSuit: "Hearts",
					cardName: "Four",
					cardValue: 4,
					cardImg: "H4.jpg"
			  },

			  {
					cardSuit: "Hearts",
					cardName: "Fice",
					cardValue: 5,
					cardImg: "H5.jpg"
			  },

			  {
					cardSuit: "Hearts",
					cardName: "Six",
					cardValue: 6,
					cardImg: "H6.jpg"
			  },

			  {
					cardSuit: "Hearts",
					cardName: "Seven",
					cardValue: 7,
					cardImg: "H7.jpg"
			  },

			  {
					cardSuit: "Hearts",
					cardName: "Eight",
					cardValue: 8,
					cardImg: "H8.jpg"
			  },

			  {
					cardSuit: "Hearts",
					cardName: "Nine",
					cardValue: 9,
					cardImg: "H9.jpg"
			  },

			  {
					cardSuit: "Hearts",
					cardName: "Ten",
					cardValue: 10,
					cardImg: "H10.jpg"
			  },

			  {
					cardSuit: "Hearts",
					cardName: "Jack",
					cardValue: 10,
					cardImg: "H11.jpg"
			  },

			  {
					cardSuit: "Hearts",
					cardName: "Queen",
					cardValue: 10,
					cardImg: "H12.jpg"
			  },

			  {
					cardSuit: "Hearts",
					cardName: "King",
					cardValue: 10,
					cardImg: "H13.jpg"
			  },

	//-------------- Spades ---------------//

			  {
					cardSuit: "Spades",
					cardName: "Ace",
					cardValue: 11,
					cardImg: "S1.jpg"
			  },

			  {
					cardSuit: "Spades",
					cardName: "Two",
					cardValue: 2,
					cardImg: "S2.jpg"
			  },

			  {
					cardSuit: "Hearts",
					cardName: "Three",
					cardValue: 3,
					cardImg: "S3.jpg"
			  },

			  {
					cardSuit: "Spades",
					cardName: "Four",
					cardValue: 4,
					cardImg: "S4.jpg"
			  },

			  {
					cardSuit: "Spades",
					cardName: "Fice",
					cardValue: 5,
					cardImg: "S5.jpg"
			  },

			  {
					cardSuit: "Spades",
					cardName: "Six",
					cardValue: 6,
					cardImg: "S6.jpg"
			  },

			  {
					cardSuit: "Spades",
					cardName: "Seven",
					cardValue: 7,
					cardImg: "S7.jpg"
			  },

			  {
					cardSuit: "Spades",
					cardName: "Eight",
					cardValue: 8,
					cardImg: "S8.jpg"
			  },

			  {
					cardSuit: "Spades",
					cardName: "Nine",
					cardValue: 9,
					cardImg: "S9.jpg"
			  },

			  {
					cardSuit: "Spades",
					cardName: "Ten",
					cardValue: 10,
					cardImg: "S10.jpg"
			  },

			  {
					cardSuit: "Spades",
					cardName: "Jack",
					cardValue: 10,
					cardImg: "S11.jpg"
			  },

			  {
					cardSuit: "Spades",
					cardName: "Queen",
					cardValue: 10,
					cardImg: "S12.jpg"
			  },

			  {
					cardSuit: "Spades",
					cardName: "King",
					cardValue: 10,
					cardImg: "S13.jpg"
			  }
	]


	console.log(cards);

	var deal = function(n, player, divID){
		for(var i = 0; i < n; i++){
		  var randomCard = Math.floor(Math.random()* 52);
		  player.push(cards[randomCard].cardValue);
		  $('#'+divID).append('<div class="card" style="background-image: url(\'images/'+cards[randomCard].cardImg+'\');"></div>');
		}
		calculateScore();
	}

	var sumPlayerHand = function(hand){
	  var sum = 0;
	  var aceCount = 0;
	  for(var i = 0; i < hand.length; i++){
		 sum = sum + hand[i];
		 if(hand[i] == 11) {
			 aceCount++;
		 }
	  }
	  if(sum > 21 && aceCount > 0) {
		  while (sum > 21 && aceCount > 0) {
			  sum = sum-10;
			  aceCount = aceCount-1;
		  }
	  }
	  return sum;
	}




var whoWinner = function() {
  	if(playerScore > 21 && dealerScore > 21) {
	    return "Both Bust, it's a tie";
	  } else if(playerScore === 21 && dealerScore === 21) {
	    return "It's a tie"
	  } else if (playerScore > 21 || playerScore < 21 && dealerScore <= 21 && dealerScore > playerScore ) {
	    return "Dealer wins!";
	  } else if (dealerScore > 21 || dealerScore < 21 && playerScore <= 21 && playerScore > dealerScore) {
	    return "Player wins!";
	  } else {
			return playerScore + " " + dealerScore;
		}
	}



	function calculateScore() {
		dealerScore = sumPlayerHand(dealerHand);
		playerScore = sumPlayerHand(playerHand);
		$('#middle').html("Dealer: <strong>"+dealerScore+"</strong><br><br>Player: <strong>"+playerScore+"</strong>");
	}

	$('#hit-me').click(function(evt){
		evt.preventDefault();
		deal(1, playerHand, 'player-hand');
		if (playerScore > 21) {
			document.getElementById("stand-me").disabled = true;
			document.getElementById("hit-me").disabled = true;
      $('#middle').html("Player bust, Dealer hand wins");
		} else {
			return playerScore;
		}
	});

	$('#stand-me').click(function(evt){
		evt.preventDefault();
		document.getElementById("hit-me").disabled = true;
		document.getElementById("stand-me").disabled = true;
			for(var i = 0; dealerScore <= 17; i++) {
				deal(1, dealerHand, 'dealer-hand');
			}
		if(dealerScore > 21 && playerScore <=21){
			$('#middle').html("Dealer bust, player hand wins");
		} else if (dealerScore < 21 && dealerScore < playerScore && playerScore <=21){
			$('#middle').html("Player hand wins");
		} else if (playerScore < 21 && playerScore < dealerScore && dealerScore <=21){
			$('#middle').html("Dealer hand wins");
		} else if (playerScore === dealerScore) {
			$('#middle').html("It's a tie");
		} else {
			return playerScore;
		}
});




	//------------------------
	deal(2, playerHand, 'player-hand');
	deal(2, dealerHand, 'dealer-hand');





// hit, calculate score, auto hit if dealer <= 17, calculate score to see winner
// if stay, deactivate hit button, calculate score, auto hit if dealer <= 17, caluculate score for winner.

});
