function loadFileInto(fromFile, whereTo) {

	// 1. creating a new XMLHttpRequest object
	ajax = new XMLHttpRequest();

	// 2. defines the GET/POST method, the source, and the async value of the AJAX object
	ajax.open("GET", fromFile, true);

	// 3. provides code to do something in response to the AJAX request
	ajax.onreadystatechange = function() {

		if ((this.readyState == 4) && (this.status == 200)) { // if .readyState is 4, the process is done; and if .status is 200, there were no HTTP errors

			document.querySelector(whereTo).innerHTML = this.responseText; // insert received output directly into the chosen DOM object

		} else if ((this.readyState == 4) && (this.status != 200)) { // if .readyState is 4, the process is done; and if .status is NOT 200, output the error into the console

			console.log("Error: " + this.responseText);

		}

	} // end ajax.onreadystatechange function

	// 4. let's go -- initiate request and process the responses
	ajax.send();
}

function recipe(recipename, contributorname, imageURL, ingredientsfile, equipmentfile, directionsfile) {
  
  this.recipe = recipename;
  this.contributor = contributorname;
  this.image = imageURL;
  this.ingredients = ingredientsfile;
  this.equipment = equipmentfile;
  this.directions = directionsfile;
  
  this.showrecipe = function() {
    document.querySelector("#titlebanner h1").innerHTML = this.recipe;
    document.querySelector("#titlebanner").style.backgroundImage = "url("+ this.image +")"; 
    document.querySelector("#contributedby").innerHTML = "Recipe contributed by "+this.contributor+"";
    
    loadFileInto(this.ingredients, "#ingredients ul")
    loadFileInto(this.equipment, "#equipment ul")
    loadFileInto(this.directions, "#directions ol")
  }
}

spammusubi = new recipe("Spam Musubi", "Paige Spencer", "https://www.spam.com/wp-content/uploads/2019/09/image-recipe_spam-musubi-1000x500.jpg", "ingredients.html", "equipment.html", "directions.html");

tresleches = new recipe("Tres Leches", "Angela Dominguez", "https://blog.amigofoods.com/wp-content/uploads/2020/11/tres-leches-cake.jpg", "ingredients2.html", "equipment2.html", "directions2.html");

cauliflowermac = new recipe("Cauliflower Mac & Cheese", "Saskia Slater", "https://images.unsplash.com/photo-1543339494-b4cd4f7ba686?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80", "ingredients3.html", "equipment3.html", "directions3.html");

window.onload = function() {
  
  newheader = document.querySelector("#titlebanner h1");
  
  newheader.style.color = "CornflowerBlue";
  newheader.style.textShadow = "0px 8px 8px #ffffff";
  
  document.querySelector("#ingredients").onclick = function() {
    document.querySelector("#ingredients ul").classList.toggle("dontshow");
  }
  
  document.querySelector("#equipment").onclick = function() {
    document.querySelector("#equipment ul").classList.toggle("dontshow");
  }
  
  document.querySelector("#directions").onclick = function() {
    document.querySelector("#directions ol").classList.toggle("dontshow");
  }
  
  document.querySelector("#titlebanner h1").onclick = function() {
    document.querySelector("#titlebanner h1").style.color = "Black";
  }
  
  document.querySelector("#footer").innerHTML += "<p>Paige was here for TP6!</p>"
  
  document.querySelector("#recipe1").onclick = function() {
    spammusubi.showrecipe();
  }
  
  document.querySelector("#recipe2").onclick = function() {
    tresleches.showrecipe();
  }
  
  document.querySelector("#recipe3").onclick = function() {
    cauliflowermac.showrecipe();
  }
}

