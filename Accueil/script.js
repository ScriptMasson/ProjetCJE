(function() {
const squares = document.querySelectorAll('.square');
    
squares.forEach((square) => {
  const rectangle = square.querySelector('.rectangle');

  rectangle.style.display = 'none';

  square.addEventListener('mouseover', () => {
    rectangle.style.display = 'block';
  });

  square.addEventListener('mouseout', () => {
    rectangle.style.display = 'none';
  });
});
}());




