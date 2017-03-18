/// <reference path="~/Scripts/jquery-3.1.1.js" />
window.onload = function () {
    loadNewColor();
}

$(document).ready(function () {
    
    $("#mysteryBox").on("click", function (event) {
        loadNewColor();
    });

    $(".guessBox").on("click", function (event) {

        if (convertRGBToHex($(event.target).css("background-color")) == $("#mysteryBox p").text()) {
            var oldCount = $("#numberCorrectBox p:nth-child(2)").text();
            $("#numberCorrectBox p:nth-child(2)").text(oldCount * 1 + 1);
            flashAnswer("numberCorrectBox", "green");
            loadNewColor();
        }
        else {
            var oldCount = $("#numberWrongBox p:nth-child(2)").text();
            $("#numberWrongBox p:nth-child(2)").text(oldCount * 1 + 1);
            flashAnswer("numberWrongBox", "red");
        }   
    });
});

function loadNewColor() {
    var newColor = getRandomColor();
    $("#mysteryBox p").text(newColor);
    assignColorsToGuessBoxes(newColor);
}

function getRandomColor() {
    var hexDigits = '0123456789ABCDEF';
    var colorCode = '#';
    for (var i = 0; i < 6; i++) {
        colorCode += hexDigits[Math.floor(Math.random() * 16)];
    }
    return colorCode;
}

function assignColorsToGuessBoxes(newColor) {
    var correctBox = Math.floor(Math.random() * 4) + 1;

    for (var i = 1; i < 5; i++) {
        if (i == correctBox) {
            $("#guessBox" + correctBox).css("background-color", newColor);
        }
        else {
            $("#guessBox" + i).css("background-color", getRandomColor());
        }
    }
}

function convertRGBToHex(rgb) {
    rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
    function hex(x) {
        return ("0" + parseInt(x).toString(16)).slice(-2);
    }
    return ("#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3])).toUpperCase();
}

function flashAnswer(box, color) {
    $("#" + box).css("background-color", color);
    setTimeout(function () { $("#" + box).css("background-color", "white"); }, 200);
}