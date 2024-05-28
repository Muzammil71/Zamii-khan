function frontback3() {
    var original_string = document.getElementById("originalstring3").value;
    if (original_string.length >= 3) {
        var last3_character = original_string.slice(-3);
        var new_string = last3_character + original_string + last3_character;
        document.getElementById("last3_add").innerHTML = "The new string is " + new_string;
    }
    else {
      document.getElementById("last3_add").innerHTML = " Invalid String ";
    }
  }