function checkmultiple() {
    var number = document.getElementById("multipleOf3And7").value;
    if (number > 0) {
        if (number % 3 == 0 || number % 7 == 0) {
        document.getElementById("multiple1").innerHTML = number + " is multiple of 3 or 7.";
    }
    else {
        document.getElementById("multiple1").innerHTML = number + " is not multiple of 3 or 7";
    }
    } else {
        document.getElementById("multiple1").innerHTML = "Please Enter a Positive number";
    }
  }