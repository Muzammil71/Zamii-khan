function Convert() {
var cel=parseInt(document.getElementById("inputcelsius").value);
var fahrenheit = (cel*9/5)+32;
document.getElementById('Temperature').innerHTML = fahrenheit;
document.getElementById('Temperature').style.color = 'blue';
document.getElementById('inputcelsius').style.color = 'orange';
document.getElementById('inputcelsius').style.border = '2px solid black';
}