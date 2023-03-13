(function iifeClickEventListenerToCircles() {
/* Declare circle and rectangle and add an event listener to the circle to make the rectangle visible, using the class="show", on mouse click */
let purple = document.getElementById('purple');
let purpleRectangle = document.getElementById('purpleRectangle');
purple.addEventListener('click', () => {
  purpleRectangle.classList.toggle('show');
  purple.classList.toggle('circleWhileShown');
});
/* Declare circle and rectangle and add an event listener to the circle to make the rectangle visible, using the class="show", on mouse click */
let green = document.getElementById('green');
let greenRectangle = document.getElementById('greenRectangle');
green.addEventListener('click', () => {
  greenRectangle.classList.toggle('show');
  green.classList.toggle('circleWhileShown');
});
/* Declare circle and rectangle and add an event listener to the circle to make the rectangle visible, using the class="show", on mouse click */
let red = document.getElementById('red');
let redRectangle = document.getElementById('redRectangle');
red.addEventListener('click', () => {
  redRectangle.classList.toggle('show');
  red.classList.toggle('circleWhileShown');
});
/* Declare circle and rectangle and add an event listener to the circle to make the rectangle visible, using the class="show", on mouse click */
let turquoise = document.getElementById('turquoise');
let turquoiseRectangle = document.getElementById('turquoiseRectangle');
turquoise.addEventListener('click', () => {
    turquoiseRectangle.classList.toggle('show');
    turquoise.classList.toggle('circleWhileShown');
});
})();

(function iifeArrivalOfBubbles() {

  setTimeout(purpleArrival, 1000);
  setTimeout(greenArrival, 2000);
  setTimeout(redArrival, 3000);
  setInterval(turquoiseArrival, 4000);

  function purpleArrival() {
    const purple = document.getElementById('purple');
    purple.classList.remove('loadAnimated');
  };

  function greenArrival() {
    const green = document.getElementById('green');
    green.classList.remove('loadAnimated');
  };

  function redArrival() {
    const red = document.getElementById('red');
    red.classList.remove('loadAnimated');
  };

  function turquoiseArrival() {
    const turquoise = document.getElementById('turquoise');
    turquoise.classList.remove('loadAnimated');
  };
})();


