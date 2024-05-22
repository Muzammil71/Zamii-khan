var FirstName = "Muzammil";
var LastName = "Waseem";
var dateOfBirth = 2002;
var currentYear = new Date().getFullYear();
var age = currentYear - dateOfBirth;
document.getElementById("student_message").innerHTML=`Hi, my name is ${FirstName}  ${LastName}. I'm ${age} years old and I'm learning Javascript.`;