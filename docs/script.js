(function iifeClickEventListenerToCircles() {
/* Declare circle and rectangle and add an event listener to the circle to make the rectangle visible, using the class="show", on mouse click */
const purple = document.getElementById('purple');
const purpleRectangle = document.getElementById('purpleRectangle');
purple.addEventListener('click', () => {
  purpleRectangle.classList.toggle('show');
  purple.classList.toggle('circleWhileShown');
});
/* Declare circle and rectangle and add an event listener to the circle to make the rectangle visible, using the class="show", on mouse click */
const green = document.getElementById('green');
const greenRectangle = document.getElementById('greenRectangle');
green.addEventListener('click', () => {
  greenRectangle.classList.toggle('show');
  green.classList.toggle('circleWhileShown');
});
/* Declare circle and rectangle and add an event listener to the circle to make the rectangle visible, using the class="show", on mouse click */
const red = document.getElementById('red');
const redRectangle = document.getElementById('redRectangle');
red.addEventListener('click', () => {
  redRectangle.classList.toggle('show');
  red.classList.toggle('circleWhileShown');
});
/* Declare circle and rectangle and add an event listener to the circle to make the rectangle visible, using the class="show", on mouse click */
const turquoise = document.getElementById('turquoise');
const turquoiseRectangle = document.getElementById('turquoiseRectangle');
turquoise.addEventListener('click', () => {
    turquoiseRectangle.classList.toggle('show');
    purple.classList.toggle('circleWhileShown');
});
})();

