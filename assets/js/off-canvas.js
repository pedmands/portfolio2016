/*
NOW AS A SUPER EASY TO USE PLUGIN:
http://panels.scotch.io
*/
$(function() {
  var special = ['reveal', 'top', 'boring', 'perspective', 'extra-pop'];

  // Toggle Nav on Click
  $('#menu-toggle').click(function() {

    var transitionClass = $(this).data('transition');

    if ($.inArray(transitionClass, special) > -1) {
      $('body').removeClass();
      $('body').addClass(transitionClass);
    } else {
      $('body').removeClass();
      $('#site-canvas').removeClass();
      $('#site-canvas').addClass(transitionClass);
    }

    $('#site-wrapper').toggleClass('show-nav');
    $('.site-content').toggleClass('faded');
    return false;

  });

});
