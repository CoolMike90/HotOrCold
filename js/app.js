
$(document).ready(function(){
    var guess, 
    guessNum = 0, 
    guessList = [],
    feedback = "",
    num,
	  guessItemStart = "<li>",
    guessItemEnd = "</li>";


	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/

  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

    /*--- Generates a random number ---*/

    function randNum() {
    return Math.floor(Math.random() * (1-100 + 1)) + 1;
    };

    /*--- New Game button starts a new game ---*/

  	function newGame() {
     
     guess = ""
     guessNum = 0
     guessList = [] 
     feedback = ""
     num = randNum()

     $('#count').innerHTML(guessNum)
     $('#guessList').innerHTML(guessList)
     $('#feedback').innerHTML(guessItemStart + guessItemEnd)

    };
    
    /*--- Provides feedback depending on users guess ---*/

    function giveFeedback() {
      if (guess + num => 50) {
        return "colder"
      };

      else if (guess + num <= 50) {
        return "cold"
      };
      else if (guess + num <= 25) {
        return "warm"
      };
      else if (guess + num <= 10) {
        return "warmer"
      };
    }

    newGame();
    $('guessButton').on("click", newGame)
    


});


