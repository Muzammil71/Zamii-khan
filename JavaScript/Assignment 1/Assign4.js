function frontback_add() {
    var original_string = document.getElementById("originalstring").value;
    if (original_string.length < 1) {
        document.getElementById("front_add").innerHTML = " Invalid String ";
    }
    else if (original_string.length >= 1) {
        var first_character = original_string[0];
        var new_string = first_character + original_string + first_character;
        document.getElementById("front_add").innerHTML = "The new string is " + new_string;
    }
}