var sget = require("sget");

var storeArray = [];

var mainMenuMessages = {
					welcome: "\n**********************************************************************\n" +
								"                               Hangman         " +
								"\n**********************************************************************\n",
					guess: "1. To guess a letter, type 'guess' or press 1 ",
					wrong:"2. To view wrong guesses made, type 'view' or press 2 ",
					hints: "3. To view a hint, type 'hint' or press 3",
					exit: "4. To exit, type 'exit' or press 4 "	

					};

var userMessages= { 
					win: "Congrats, you're s-m-r-t smart!",
					lose: "You have exceeded your guess limit. The word was ",
					invalid: "Invalid entry, please try again",
					playAgain: "To play again, press 1, to exit press 2."

					}

var mainMenu = function() {
	//present user with options 
	

	wipeScreen();
	printMenu();
	var userSelection = sget("Make your selection:").trim();
		userSelection=userSelection.toLowerCase();
		if(userSelection=='guess' || userSelection==1 ) {
			makeGuess();
		} else if (userSelection=='view' || userSelection==2) {
			viewWrongGuess();
		} else if (userSelection=='hint' || userSelection==3) {
			getHint();
	
		} else if (userSelection=='exit' || userSelection==4) {
			exitProgram();
		
		}else {
			console.log(userMessages.invalid);
			returnToMain();
			
		}

};

var addItem = function() {

};

var deleteItem = function() {

};

var searchItem = function() {

};
					

//----------------HELPFUL TOOLS---------------------------

//clean screen
var wipeScreen = function () {
  return process.stdout.write('\033c');
};

//sleep timer
var sleep = function(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
      if ((new Date().getTime() - start) > milliseconds){
        break;
      }
    }
};

//-------------------------------------------------------


