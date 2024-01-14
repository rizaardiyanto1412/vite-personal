import confetti from 'canvas-confetti';

const button = document.getElementById('btn-convetti');

button.addEventListener('click', () => {
  console.log("Hello");
  const myCanvas = document.createElement('canvas');
  document.body.append(myCanvas);
  myCanvas.style.position = "fixed";
  myCanvas.style.top = "0"; // Changed inset to top
  myCanvas.style.left = "0"; // Added left to make it cover the entire viewport
  myCanvas.style.width = "100vw";
  myCanvas.style.height = "100vh";
  myCanvas.style.zIndex = -1;

  var myConfetti = confetti.create(myCanvas, {
    resize: true,
    useWorker: true
  });
  
  myConfetti({
    particleCount: 100,
    spread: 160
    // any other options from the global
    // confetti function
  });

  
});



// Typed.js
import Typed from 'typed.js';

const title = document.getElementById('title');

const type = new Typed('#title', { // Corrected the selector to target the 'title' element
  strings: [
    'Riza Maulana',
    'Devscale Student',
    'Batch #4',
    'Task Week 3',
  ],
  typeSpeed: 50,
  loop: true,
  loop: Infinity,
  showCursor: false,

});
