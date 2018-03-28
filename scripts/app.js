$(document).ready(function() {
  for (k = 1; k <= 10; k++) {
    $('.checker').append(' <div class="blackbox cf"></div><div class="whitebox cf"></div>')
  }

  for (k = 1; k <= 20; k++) {
    $('.stripe').append(' <div class="blackstripe cf"></div><div class="whitestripe cf"></div>')
  }
});
