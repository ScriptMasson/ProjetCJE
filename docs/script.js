let observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      console.log('Element has Intersected with the Viewport!');
      // Remove the "my-class" class from the target element:
      entry.target.classList.remove('loadAnimatedImage');
      console.log(entry.target + ' ' + 'no longer has the class "loadAnimatedImage and is unobserve"');
      // Stop observing the target element:
      observer.unobserve(entry.target); 
    }
  });
});

// Observe the element <img>:
let imgLayla = document.getElementById('imgLayla');
(function iifeObservedOrNah() {
  let isItTrue = observer.observe(imgLayla);
  isItTrue;
  if (!isItTrue) {return setTimeout(makeTextLaylaAppear, 2000)}
})();
function makeTextLaylaAppear() {
  let text = document.getElementById('textLayla');
  return text.style.opacity = 100;
}

let imgChasey = document.getElementById('imgChasey');
(function iifeObservedOrNah() {
  let isItTrue = observer.observe(imgChasey);
  isItTrue;
  if (!isItTrue) {return setTimeout(makeTextChaseyAppear, 2000)}
})();
function makeTextChaseyAppear() {
  let text = document.getElementById('textChasey');
  return text.style.opacity = 100;
}

(function iifeClickEventListenerToCircles() {
/* Declare circle and rectangle and add an event listener to the circle to make the rectangle visible, using the class="show", on mouse click */
let purple = document.getElementById('purple');
let purpleRectangle = document.getElementById('purpleRectangle');

purple.addEventListener('click', () => {
  purpleRectangle.classList.toggle('show');
  purple.classList.toggle('circleWhileShown');
  greenRectangle.classList.remove('show');
  green.classList.remove('circleWhileShown');
  redRectangle.classList.remove('show');
  red.classList.remove('circleWhileShown');
  turquoiseRectangle.classList.remove('show');
  turquoise.classList.remove('circleWhileShown');
});
/* Declare circle and rectangle and add an event listener to the circle to make the rectangle visible, using the class="show", on mouse click */
let green = document.getElementById('green');
let greenRectangle = document.getElementById('greenRectangle');

green.addEventListener('click', () => {
  greenRectangle.classList.toggle('show');
  green.classList.toggle('circleWhileShown');
  purpleRectangle.classList.remove('show');
  purple.classList.remove('circleWhileShown');
  redRectangle.classList.remove('show');
  red.classList.remove('circleWhileShown');
  turquoiseRectangle.classList.remove('show');
  turquoise.classList.remove('circleWhileShown');

});
/* Declare circle and rectangle and add an event listener to the circle to make the rectangle visible, using the class="show", on mouse click */
let red = document.getElementById('red');
let redRectangle = document.getElementById('redRectangle');
red.addEventListener('click', () => {
  redRectangle.classList.toggle('show');
  red.classList.toggle('circleWhileShown');
  purpleRectangle.classList.remove('show');
  purple.classList.remove('circleWhileShown');
  greenRectangle.classList.remove('show');
  green.classList.remove('circleWhileShown');
  turquoiseRectangle.classList.remove('show');
  turquoise.classList.remove('circleWhileShown');
});
/* Declare circle and rectangle and add an event listener to the circle to make the rectangle visible, using the class="show", on mouse click */
let turquoise = document.getElementById('turquoise');
let turquoiseRectangle = document.getElementById('turquoiseRectangle');
turquoise.addEventListener('click', () => {
    turquoiseRectangle.classList.toggle('show');
    turquoise.classList.toggle('circleWhileShown');
    purpleRectangle.classList.remove('show');
    purple.classList.remove('circleWhileShown');
    greenRectangle.classList.remove('show');
    green.classList.remove('circleWhileShown');
    redRectangle.classList.remove('show');
    red.classList.remove('circleWhileShown');
});
})();

(function iifeArrivalOfBubbles() {
  setTimeout(wrapperArrival, 500);
  setTimeout(purpleArrival, 1000);
  setTimeout(greenArrival, 2000);
  setTimeout(redArrival, 3000);
  setTimeout(turquoiseArrival, 4000);

  function wrapperArrival() {
    const wrapper = document.getElementById('wrapperBubbles');
    wrapper.classList.remove('loadAnimated');
  }

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





