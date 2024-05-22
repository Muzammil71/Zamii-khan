var phone1 = "03120550316";
var phone2 = "03490636970";
var phone3 = "03355321403";
phone3=phone3.toString();


if(phone1.length==10){
    document.getElementById("statement1").innerHTML = "The number " + phone1 +  " You dail is valid";
}
else {
    document.getElementById("statement1").innerHTML = " The number " + phone1 +  " You dail is invalid";
}
if (phone2.length==10){
    document.getElementById("statement2").innerHTML =  "The number " + phone2 +  " You dail is valid";
}
else {
    document.getElementById("statement2").innerHTML = " The number " + phone2 +  " You dail is invalid";
}
if (phone3.length==11){
    document.getElementById("statement3").innerHTML =  "The number " + phone3 +  " You dail is valid";
}
else {
    document.getElementById("statement3").innerHTML = " The number " + phone3 +  " You dail is invalid";
}