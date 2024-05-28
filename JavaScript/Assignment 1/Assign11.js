for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        document.getElementById("result3").innerHTML += `${i} FizzBuzz <br>`;
    }
    else if (i % 5 === 0) {
        document.getElementById("result3").innerHTML += `${i} Buzz <br>`;
    }
    else if (i % 3 === 0) {
        document.getElementById("result3").innerHTML += `${i} Fizz <br>`;
    }
    else
    document.getElementById("result3").innerHTML+= `${i} <br>`
  }