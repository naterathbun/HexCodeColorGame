/// <reference path="Scripts/jquery-3.1.1.intellisense.js" />

$(document).ready(function () {

    alert("oh shit!");



});


function getRandomColor() {
    var hexDigits = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += hexDigits[Math.floor(Math.random() * 16)];
    }
    return color;
}