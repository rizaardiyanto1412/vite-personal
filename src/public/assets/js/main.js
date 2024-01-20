// Importing necessary libraries
import confetti from "canvas-confetti";
import Typed from "typed.js";

// Getting the button element
const button = document.getElementById("btn-convetti");

// Adding event listener to the button
button.addEventListener("click", () => {
  // Creating a new canvas element
  const myCanvas = document.createElement("canvas");

  // Appending the canvas to the body
  document.body.append(myCanvas);

  // Setting the canvas style
  myCanvas.style.position = "fixed";
  myCanvas.style.top = "0";
  myCanvas.style.left = "0";
  myCanvas.style.width = "100vw";
  myCanvas.style.height = "100vh";
  myCanvas.style.zIndex = -1;

  // Creating a confetti instance
  var myConfetti = confetti.create(myCanvas, {
    resize: true,
    useWorker: true,
  });

  // Firing the confetti
  myConfetti({
    particleCount: 100,
    spread: 160,
  });
});

// Getting the title element
const title = document.getElementById("title");

// Creating a new Typed instance
const type = new Typed("#title", {
  strings: ["Riza Maulana", "Devscale Student", "Batch #4", "Task Week 3"],
  typeSpeed: 50,
  loop: true,
  showCursor: false,
});
