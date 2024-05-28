let numbersArray = [1,13,22,123,49]
let sumArray=0;
for(var i=0;i<numbersArray.length;i++){
    sumArray += numbersArray[i];
}
document.getElementById("result").innerHTML= `The Sum is   ${sumArray}`;