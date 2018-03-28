$(document).ready(function() {
  $('.row').click(function() {
    if ($(this).hasClass('default')) {
      $(this).addClass('mode-1');
      $(this).removeClass('default');
      for (k = 1; k <= 50; k++) {
        $(this).append('<div class="bluestripe"></div><div class="whitestripe"></div>')
      }
    } else if ($(this).hasClass('mode-1')) {
      $(this).children().hide();
      $(this).addClass('mode-2');
      $(this).removeClass('mode-1');
      for (k = 1; k <= 50; k++) {
        $(this).append('<div class="redstripe"></div><div class="whitestripe"></div>')
      }
    } else if ($(this).hasClass('mode-2')) {
      $(this).children().hide();
      $(this).addClass('clear');
      $(this).removeClass('mode-2');
      for (k = 1; k <= 50; k++) {
        $(this).append('<div class="yellowstripe"></div><div class="whitestripe"></div>')
      }
    } else if ($(this).hasClass('clear')) {
      $(this).children().hide();
      $(this).addClass('default');
      $(this).removeClass('clear');
    }
  })
});
