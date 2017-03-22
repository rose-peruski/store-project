var sget = require("sget");

var storeArray = [];

function Items(description, price, number) {
	this.description=description;
	this.price=price;
	this.number=number;
};

var mainMenuMessages = {
					welcome: "\n**********************************************************************\n" +
								"                                       " +
								"\n**********************************************************************\n",
					add: "1. To add a product, press 1 ",
					delete:"2. To delete a product or press 2 ",
					search: "3. To search for a product press 3",
					modify: "4. To modify the amount of stock for a product press 4 ",
					description: "5. To modify a product's description, press 5",
					exit: "6. To exit, type 'exit' or press 6 "	

					};

var userMessages= { 
					win: "Congrats, you're s-m-r-t smart!",
					lose: "You have exceeded your guess limit. The word was ",
					invalid: "Invalid entry, please try again",
					playAgain: "To play again, press 1, to exit press 2."

					}
var printMenu = function() {
    for (var key in mainMenuMessages) {
      console.log(mainMenuMessages[key]);
    }
};

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

var runProgram = function() {
	printMenu();
}();


