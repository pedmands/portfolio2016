$(document).ready(function() {

  // Toggle Nav on Click
  $('button').click(function() {
      var transition = $.parseJSON($(this).attr('data-button'));
      $('#content').addClass(transition);
      $('#site-wrapper').toggleClass('show-nav');
      $('#menu').toggleClass('open');
      $('#content').toggleClass('faded');
    return false;

  });

});
