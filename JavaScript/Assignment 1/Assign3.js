function front_back_add() {
    var original_string = document.getElementById("originalstring1").value;
    if (original_string.length < 1) {
      document.getElementById("add").innerHTML = " Invalid String ";
    }
    else if (original_string.length >= 1) {
        var first_character = original_string[0];
        var last_character = original_string[original_string.length - 1]
        var new_string = last_character + original_string.slice(1, -1) + first_character;
        document.getElementById("add").innerHTML = "The new string is " + new_string;
    }
}
  