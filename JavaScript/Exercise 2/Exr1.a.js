function convert() {
    var Fahren = parseFloat(document.getElementById('data').value);
    var Cel = 5/(Fahren - 32);
    document.getElementById('res').innerText = Cel;
}