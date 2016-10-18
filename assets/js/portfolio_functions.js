$(document).ready(function() {

  // set the height of any div with class 'fullheight' to viewport height.
  var wheight = $(window).height();
  $('.fullheight').css('height', wheight);

  // adjust height of .fullheight elements on window resize.
  $(window).resize(function() {
  	wheight = $(window).height(); //get the height of the window
  	$('.fullheight').css('height', wheight); //set to window tallness
    navHover();
  });

  // Insert current date into signature portion of Cover letter
  var currentdate = new Date();
  var datetime = (currentdate.getMonth()+1)+"/"+currentdate.getDate()+"/"+currentdate.getFullYear();
  $('#date').append(datetime);

// Tab navigation
$('#resume-tabs li a').click(function(){
	$('#resume-tabs li a').removeClass('current');
	$(this).addClass('current');
});

// Toggle of-canvas nav on click
$('#menu-toggle').click(function() {
    var transition = $.parseJSON($(this).attr('data-button'));
    $('#content').addClass(transition);
    $('#site-wrapper').toggleClass('show-nav');
    $('#menu').toggleClass('open');
    $('#content').toggleClass('faded');
  return false;
});

}); // $(document).ready
