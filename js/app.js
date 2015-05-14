var count = 0;
var number;

function incrementCounter(){
	count++; 
	$('#count').text(count);
};

function checkGuess(guess){
	var guessInt = parseInt(guess);
	var diff = number - guessInt; 
	if (guess == number){
		$("#feedback").text("Correct!");
	} else {
		console.log("wrong");
	}
};

function generateNumber(){
	number = Math.floor((Math.random() * 100) + 1);
};


// Check high or low

function guessIsHigher(guess){
	if (guess > number ){
		return true;
	} else {
		return false;
	}

};

// Compare generated number with user guess


// Present appropiate feedback


$(document).ready(function(){

	generateNumber();
	console.log(number);
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

  	$("#guessButton").click(function(e){
  		e.preventDefault();
  		var guess = $("#userGuess").val();
  		var guessEl = '<li>' + guess + '</li>';
  		$('#guessList').append(guessEl);
  		$('#userGuess').val('');
  		incrementCounter();
  		checkGuess(guess);
  	});



});


