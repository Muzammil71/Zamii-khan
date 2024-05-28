let firstnumber = document.getElementById("FirstInteger");
let secondnumber = document.getElementById("SecondInteger");
let findsum = document.getElementById("checksum");
let result11 = document.getElementById("result1");
findsum.addEventListener('click', () => {
    let firstinteger = parseInt(firstnumber.value);
    let secondinteger = parseInt(secondnumber.value);
    let sum = firstinteger + secondinteger;
    if (sum > 50 && sum < 80) {
        result11.innerHTML = "75";
    }
    else {
        return 90;
    }
});