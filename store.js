

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
					product: "5. To modify a product's description, press 5",
					exit: "6. To exit, type 'exit' or press 6 "	

					};

var userMessages= { 
					description: "Enter product description:",
					price: "Enter product price: ",
					amount: "Enter number of items available: ",
					
					};

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
		if(userSelection==1 ) {
			addItem();
		} else if (userSelection==2) {
			deleteItem();
		} else if (userSelection==3) {
			searchItem();
		} else if (userSelection==4) {
			modifyStock();
		} else if (userSelection==5) {
			modifyDescription();		
	
		} else if (userSelection=='exit' || userSelection==6) {
			exitProgram();
		
		}else {
			console.log(userMessages.invalid);
			returnToMain();
			
		}

};

var addItem = function() {
	var userDescription = sget()
	var newItem = new Item () 

};

var deleteItem = function() {

};

var searchItem = function() {

};

var modifyStock = function() {

};

var modifyDescription = function() {

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


