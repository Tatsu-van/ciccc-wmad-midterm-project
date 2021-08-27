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


$(document).ready(function() {
  $('.minus').click(function () {
    var $input = $(this).parent().find('input');
    var count = parseInt($input.val()) - 1;
    count = count < 1 ? 1 : count;
    $input.val(count);
    $input.change();
    return false;
  });
  $('.plus').click(function () {
    var $input = $(this).parent().find('input');
    $input.val(parseInt($input.val()) + 1);
    $input.change();
    return false;
  });
});