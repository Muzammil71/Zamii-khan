let num1input = document.getElementById("Number1");
let num2input = document.getElementById("Number2");
let num3input = document.getElementById("Number3");
let findMaxNumber = document.getElementById("MaxNumber");
let result = document.getElementById("result");
findMaxNumber.addEventListener('click', () => {
    let num1 = parseInt(num1input.value);
    let num2 = parseInt(num2input.value);
    let num3 = parseInt(num3input.value);
    if (num1 >= num2 && num1 >= num3) {
        document.getElementById("result").innerHTML = "The Maximum Number is " + num1;
    } else if (num2 >= num1 && num2 >= num3) {
        document.getElementById("result").innerHTML = "The Maximum Number is " + num2;
    } else {
        document.getElementById("result").innerHTML = "The MAximum Number is " + num3;
    }
});