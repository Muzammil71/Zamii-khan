let findFactorial = document.getElementById("FactorialNumber");
findFactorial.addEventListener('click', () => {
    let num = parseInt(document.getElementById("EnterNumber").value);
    let fact = 1;
    if (num < 0) {
        document.getElementById("result1").innerHTML = "Please Enter a Positive Number";
    }
    else if (num === 0) {
        document.getElementById("result1").innerHTML = `The factorial of ${num} is 1`;
    }
    else {
        for (let i = 1; i <= num; i++) { // initialize i with 1 and increment in each iteration
            fact *= i;
        }
        document.getElementById("result1").innerHTML = `The factorial of ${num} is ${fact}`;
    }
});