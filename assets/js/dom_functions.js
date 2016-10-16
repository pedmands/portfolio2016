jQuery(document).ready(function($) {

// set the height of any div with class 'fullheight' to viewport height.
var wheight = $(window).height();
$('.fullheight').css('height', wheight);

// adjust height of .fullheight elements on window resize.
$(window).resize(function() {
	wheight = $(window).height(); //get the height of the window
	$('.fullheight').css('height', wheight); //set to window tallness
  navHover();
});

)];
