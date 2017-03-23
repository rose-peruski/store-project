/* TO DO
-limit price input to float with 2 decimal places
-userinput to lowercase
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
					inventory: "Enter number of items available: ",
					productNotFound: "Product not found"
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
var getDescription = function() {
	userDescription = sget(userMessages.description).trim();
	userDescription= userDescription.toLowerCase();
};

var getPrice = function() {
	userPrice = sget(userMessages.price).trim();
	userPrice= userPrice.toLowerCase();
};

var getInventory = function() {
	userInventory = sget(userMessages.inventory).trim();
	userInventory= userInventory.toLowerCase();
};

var viewProducts= function() {
	console.log("List of Products in the store");
	for (var i=0; i<storeArray.length; i++) {
		console.log("Product: " + storeArray[i].description);
	}

};

var addItem = function() {
	viewProducts();
	getDescription();
	getPrice();
	getInventory();
	

	var newItem = new Product (userDescription, userPrice, userInventory);
	storeArray.push(newItem); 
	console.log(storeArray)
	console.log("Product added");

	returnToMain();
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
};
// var checkStoreArray = function(product) {
// 	getDescription();
// 	return product.storeArray == userDescription;
// };

var searchItem = function() {
	getDescription();
	// var search = sget("\nWhat are you looking for?").trim();
	// search = search.toLowerCase();

	function checkArray (item) {
		return item.description == userDescription;
	}
	
	console.log(storeArray.find(checkArray));
	returnToMain();
};

var modifyStock = function() {
	
};

var modifyDescription = function() {

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

//sleep timer
var sleep = function(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
      if ((new Date().getTime() - start) > milliseconds){
        break;
      }
    }
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

