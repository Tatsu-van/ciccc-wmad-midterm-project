'use strict';

function hamburger() {
  document.getElementById('line1').classList.toggle('active');
  document.getElementById('line2').classList.toggle('active');
  document.getElementById('line3').classList.toggle('active');
  document.getElementById('menu').classList.toggle('open');
}
document.getElementById('toggle').addEventListener('click' , function () {
  hamburger();
});
console.log('a');