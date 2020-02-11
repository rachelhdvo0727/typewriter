"use strict";
//Get the text from html - with a variable
let theText = document.querySelector(".typewritten").textContent;
//set the counter to 1 (or maybe 0)
let counter = 0;
const typeFast = document.querySelector("#typekey1");
const typeSlow = document.querySelector("#typekey2");
const spaceKey = document.querySelector("#typespace");
window.addEventListener("DOMContentLoaded", start);

function start() {
    console.log("start");
    //remove the text on screen
    document.querySelector(".typewritten").textContent = "";
    countLetters();

    //Click to hear sounds
    document.querySelector("button").addEventListener("click", keysSound);
}

function countLetters() {
    console.log("countLetters");
    //showing one character at a time
    document.querySelector(".typewritten").textContent = theText.substring(0, counter + 1);

    //keep counting up
    counter++;
    //waiting for the next letter
    setTimeout(loop, 500);
}

function loop() {
    console.log("loop");
    if (theText.length > counter) {
        //if there're more letters, move on to the next letter
        start();
    } else {
        // stop and back to the start position
        clearTimeout(countLetters);
    }
}

// function keysSound() {
//     console.log("keys' sound");
//     // sound play in loop
//     if (Math.random() > 1) {
//         typeSlow.cloneNode(true).play();
//     }

// }