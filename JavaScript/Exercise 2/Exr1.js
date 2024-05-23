function convert() {
    var cel = parseFloat(document.getElementById('res').value);
    var fahren = (cel * 9 / 5) + 32;
    document.getElementById('data').innerText = fahren;
}