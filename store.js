/* TO DO
-limit price input to float with 2 decimal places

*/

var sget = require("sget");

var storeArray = [];
var userDescription;
var userPrice;
var userInventory;

function Product(description, price, number) {
	this.description=description;
	this.price=price;
	this.number=number;
};

var mainMenuMessages = {
					welcome: "\n**********************************************************************\n" +
								"                            Store Tracker 2000    " +
								"\n**********************************************************************\n",
					add: "1. To add a product, press 1 ",
					delete:"2. To delete a product or press 2 ",
					search: "3. To search for a product press 3",
					modify: "4. To modify the amount of stock for a product press 4 ",
					product: "5. To modify a product's description, press 5",
					view: "6. To see the entire store, press 6",
					exit: "7. To exit, type 'exit' or press 7"	

					};

var userMessages= { 
					description: "Enter product description:",
					price: "Enter product price: ",
					inventory: "Enter number of items available: ",
					productNotFound: "Product not found",
					invalid: "Invalid entry"
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
		} else if (userSelection==6) {			
			viewStore();
		} else if (userSelection=='exit' || userSelection==7) {
			exitProgram();
		
		}else {
			console.log(userMessages.invalid);
			returnToMain();
			
		}

};
var getDescription = function() {
	userDescription = sget(userMessages.description).trim();
	userDescription= userDescription.toLowerCase();
};

var getPrice = function() {
	userPrice = sget(userMessages.price).trim();
	userPrice= parseFloat(userPrice);
};

var getInventory = function() {
	userInventory = sget(userMessages.inventory).trim();
	userInventory= userInventory.toLowerCase();
};

var viewProducts= function() {
	console.log("List of Products in the store");
	for (var i=0; i<storeArray.length; i++) {
		console.log("Product: " + storeArray[i].description );
	}
	console.log("\n");
};

var viewStore = function() {
	for (var i=0; i<storeArray.length; i++) {
		console.log((i+1) + ". " + "Description: " + storeArray[i].description + " Price: " + "$" +storeArray[i].price + " Inventory Amount: " + storeArray[i].number );
	}
	returnToMain();
};


var addItem = function() {
	viewProducts();
	getDescription();
	getPrice();
	getInventory();
	

	var newItem = new Product (userDescription, userPrice, userInventory);
	storeArray.push(newItem); 
	console.log(storeArray);
	console.log("Product added");
	addOneMore();

	
};

var addOneMore = function() {
	var addAgain = sget("To add another item, press 1. To return to main menu type (m)enu").trim();
			if (addAgain==1) {
				addItem();
			} else if (addAgain== "m" || addAgain == "menu") {
				mainMenu();
			} else {
				console.log(userMessages.invalid);
				addOneMore();
			}
};		

var deleteItem = function() {
	viewProducts();
	getDescription();
	
	for (var i = 0; i < storeArray.length; i++) {
		if (storeArray[i].description == userDescription) {
			storeArray.splice(i, 1);
			break;
		}

		if (i == storeArray.length-1) {
			console.log(userMessages.productNotFound);
		}
	}
	console.log(storeArray);
	deleteOneMore();
};

var deleteOneMore = function() {
	var deleteAgain = sget("To delete another item, press 1. To return to main menu type (m)enu").trim();
			if (deleteAgain==1) {
				deleteItem();
			} else if (deleteAgain== "m" || deleteAgain == "menu") {
				mainMenu();
			} else {
				console.log(userMessages.invalid);
				deleteOneMore();
			}
};		

var searchItem = function() {
	getDescription();

	function checkArray (item) {
		return item.description == userDescription;
	}
	
	if (storeArray.findIndex(checkArray) >-1) {
		console.log("Your item is in the store");
	} else {
		console.log(userMessages.productNotFound);

	}

	oneMoreTime();
};
var oneMoreTime = function() {
	var item = sget("To make another entry press 1, to go back to the menu type menu or (m)").trim();
			if (item==1) {
				searchItem();
			} else if (item== "m" || item == "menu") {
				mainMenu();
			} else {
				console.log(userMessages.invalid);
				oneMoreTime();
			}
};		

var modifyStock = function() {
	getDescription();


	function checkArray (item) {
		return item.description == userDescription;
	}

	if (storeArray.findIndex(checkArray) >-1) {
		var index = storeArray.findIndex(checkArray);
		
		console.log("You have " + storeArray[index].number + " " + storeArray[index].description);
		var newNumber = sget("New amount in inventory: ").trim();

		storeArray[index].number = newNumber;
	} else {
		console.log(userMessages.productNotFound);
	}

	returnToMain();

};

var modifyDescription = function() {
	getDescription();


	function checkArray (item) {
		return item.description == userDescription;
	}


	if (storeArray.findIndex(checkArray) >-1) {
		var find = storeArray.findIndex(checkArray);
		
		var newDescription = sget("New product description: ").trim();

		storeArray[find].description = newDescription;
	} else {
		console.log(userMessages.productNotFound);
	}

	returnToMain();

};


var exitProgram= function() {
	console.log("Thank you for being patient with my clunky program.");
	process.exit();
};


//----------------HELPFUL TOOLS---------------------------

//clean screen
var wipeScreen = function () {
  return process.stdout.write('\033c');
};



var returnToMain = function () {
	var returnToMain = sget("\nPress any key to return to main menu when ready.").trim();
	mainMenu();
};

//-------------------------------------------------------


var runProgram = function() {
	var item1 = new Product("flowers", 2.99, 3);
	var item2 = new Product("water", 5.00, 2);
	storeArray.push(item1);
	storeArray.push(item2);
	
	printMenu();
	mainMenu();
}();

