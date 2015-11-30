
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

    function randNum() {
    return Math.floor(Math.random() * (1-100 + 1)) + 1;
    };

  	function newGame() {
     
     guess = ""
     guessNum = 0
     guessList = [] 
     feedback = ""
     num = randNum()

     $('#count').innerHTML(guessNum)
     $('#guessList').innerHTML(guessList)
     $('#feedback').innerHTML(guessItemStart + guessItemEnd)

    });
    
    function giveFeedback() {
      

      return "cold"
    }

    newGame();
    $('guessButton').on("click", newGame)
    


});


