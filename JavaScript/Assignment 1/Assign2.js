function charReplace() {
    var original_string = document.getElementById("originalstring").value;
    var position = parseInt(document.getElementById("position").value);
    if (isNaN(position) || position < 0 || position > original_string.length) {
      document.getElementById("Replace").innerHTML = "Invalid";
    }
    else {
        var new_string = original_string.slice(0, position) + original_string.slice(position + 1);
        document.getElementById("Replace").innerHTML = "The new string is " + new_string;
    }
  }