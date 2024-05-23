var shoppingList = ["Milk", "Butter", "Juice", "Bread", "Beer", "Rice", "Potatoes", "Chocolate"]; 
var newshoppingList = shoppingList.slice(0,7);
var shoppingList1 =newshoppingList.unshift("Chocolate");
document.getElementById("removelastitem").innerHTML ="The new string is " + "[" + newshoppingList + "]";
var  shoppingList2 = shoppingList.push("Cheese","Eggs");
console.log(shoppingList); 
document.getElementById("addmoreitem").innerHTML = "The new string is " + "[" + shoppingList + "]";