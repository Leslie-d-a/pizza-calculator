//naam: Leslie den Adel
//opdracht: pizza calculator

var smallPizzaQuantity;
var mediumPizzaQuantity;
var largePizzaQuantity;
var smallTotalPrice = 0;
var mediumTotalPrice = 0;
var largeTotalPrice = 0;
var totalPrice;

//prijzen van de verschillende grootte pizzas
const SMALLPRICE = 5;
const MEDIUMPRICE = 9;
const LARGEPRICE = 12;

//vraag voor alle drie de groottes hoeveel je er wilt
smallPizzaQuantity = prompt("Hoeveel small pizzas wil je?");
mediumPizzaQuantity = prompt("Hoeveel medium pizzas wil je?");
largePizzaQuantity = prompt("Hoeveel large pizzas wil je?");

//berekent hoeveel alle small pizzas bij elkaar kosten
smallTotalPrice = SMALLPRICE * smallPizzaQuantity;

//laat zien hoeveel small pizzas je hebt gekozen en hoeveel dat kost
document.write("Small pizzas: " + smallPizzaQuantity + " * " + SMALLPRICE + " = " + smallTotalPrice + " euro<br>");

//berekent hoeveel alle medium pizzas bij elkaar kosten
mediumTotalPrice = MEDIUMPRICE * mediumPizzaQuantity;

//laat zien hoeveel medium pizzas je hebt gekozen en hoeveel dat kost
document.write("Medium pizzas: " + mediumPizzaQuantity + " * " + MEDIUMPRICE + " = " + mediumTotalPrice + " euro<br>");

//berekent hoeveel alle large pizzas bij elkaar kosten
largeTotalPrice = LARGEPRICE * largePizzaQuantity;

//laat zien hoeveel large pizzas je hebt gekozen en hoeveel dat kost
document.write("Large pizzas: " + largePizzaQuantity + " * " + LARGEPRICE + " = " + largeTotalPrice + " euro<br>");

//berekent hoeveel alles bij elkaar kost
totalPrice = smallTotalPrice + mediumTotalPrice + largeTotalPrice

//laat zien hoeveel alles bij elkaar kost
document.write("Totaal: " + totalPrice + " euro");