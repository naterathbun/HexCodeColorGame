/// <reference path="Scripts/jquery-3.1.1.intellisense.js" />

window.onload = function () {

    alert("If you can see this, the JS file loaded.");
    // not getting any jquery functionality here.... why not?
};


function getRandomColor() {
    var hexDigits = '0123456789ABCDEF';
    var colorCode = '#';
    for (var i = 0; i < 6; i++) {
        colorCode += hexDigits[Math.floor(Math.random() * 16)];
    }
    return colorCode;
}