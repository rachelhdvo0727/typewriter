"use strict";


window.addEventListener("DOMContentLoaded", start);

function start() {
  console.log("start");
  const element = document.querySelector(".typewritten");
  typewriter(element, done);
}

function done() {
  console.log("Done!");
}

function typewriter(element, callback) {
  console.log("typewriter");
  //Get the text from html - with a variable
  let theText = element.textContent;
  //set the counter to 1 (or maybe 0)
  let counter = 0;

  setTimeout(loop, 500);

  //A Closure function for loop animation
  function loop() {
    //showing one character at a time
    element.textContent = theText.substring(0, counter + 1);
    //keep counting up
    counter++;
    if (theText.length > counter) {
      //if there're more letters, move on to the next letter
      setTimeout(loop, 100);
    } else {
      // stop and back to the start position
      callback(); //call a function, which is a parameter from the outer function
  }
}

// function countLetters() {
//   console.log("countLetters");
//   //showing one character at a time
//   document.querySelector(".typewritten").textContent = theText.substring(
//     0,
//     counter + 1
//   );

//   //keep counting up
//   counter++;
//   //waiting for the next letter
//   setTimeout(loop, 500);
// }

// function loop() {
//   console.log("loop");
//   if (theText.length > counter) {
//     //if there're more letters, move on to the next letter
//     start();
//   } else {
//     // stop and back to the start position
//     clearTimeout(countLetters);
//   }
// }

// // function keysSound() {
// //     console.log("keys' sound");
// //     // sound play in loop
// //     if (Math.random() > 1) {
// //         typeSlow.cloneNode(true).play();
// //     }
// // 
