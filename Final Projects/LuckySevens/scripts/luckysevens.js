function hideResults() {
    document.getElementById("results").style.display = "none";
} 

function validateItems() {
	var startingBet = document.getElementById("betInput").value;
    var bet = startingBet;
	if (bet <= 0) {
        alert("Error: starting bet must be greater than 0!");

        return false;
	}
}

function play() {
	var startingBet = document.getElementById("betInput").value;
    var bet = startingBet;
    var die1 = Math.floor(Math.random() * 6) + 1;
    var die2 = Math.floor(Math.random() * 6) + 1;
    var rollDice = die1 + die2;
    var betsArray = [];
			function validateItems() {
			var startingBet = document.getElementById("betInput").value;
			var bet = startingBet;
			if (bet <= 0) {
				alert("Error: starting bet must be greater than 0!");

			return false;
			}
			}
	document.getElementById("playButton").addEventListener("click", validateItems());
			
			
			

    while (bet > 0) {
		var die1 = Math.floor(Math.random() * 6) + 1;
    	var die2 = Math.floor(Math.random() * 6) + 1;
    	var rollDice = die1 + die2;
        if(rollDice != 7) {
            bet -= 1
        } else { 
            bet += 4
        }
        betsArray.push(bet)
    }


    var rollCounter = betsArray.length;
    var highestAmount = Math.max.apply(Math, betsArray);
    var highestPosition = betsArray.indexOf(highestAmount);
    var rollsFromHighest = rollCounter - highestPosition;

    function showResults() {
    document.getElementById("results").style.display = "inline";
    document.getElementById("playButton").innerHTML = "Play Again";
    document.getElementById("resultsBet").innerHTML = "$" + startingBet +".00";
    document.getElementById("resultsRollCounter").innerHTML = rollCounter;
    document.getElementById("resultsHighestHeld").innerHTML = "$" + highestAmount + ".00";
    document.getElementById("resultsRollsFromHighest").innerHTML = rollsFromHighest;
	};
	

	showResults();
}
	