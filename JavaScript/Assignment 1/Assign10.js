let forloop = document.getElementById("Forloop");
forloop.onclick = function () {
    let startnumber = document.getElementById("StartInteger").value;
    let Endnumber = document.getElementById("EndInteger").value;
    // let startInteger = parseInt(startnumber.value);
    // let endinteger = parseInt(Endnumber.value);
    for (let i = startnumber; i < Endnumber; i++) {
        if (i % 2 == 0) {
            document.getElementById("result2").innerHTML += `${i}  is even <br>`;
        } else {
            document.getElementById("result2").innerHTML += `${i}  is odd <br>`;
        }
    }
}