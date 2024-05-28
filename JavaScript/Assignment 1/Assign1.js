function addPy() {
    var str = document.getElementById("Form").value;
    //var result = " ";
    if (str.startsWith("Py")) {
      document.getElementById("Add").innerHTML = str; // same string
      //result=str;
    } else {
      document.getElementById("Add").innerHTML = "Py" + str; // add Py to the beginning
      //result = "Py" + str;
    }
     //document.getElementById("Add").innerHTML=result;
}