$(document).ready(function() {

// Nav Highlighting
$(window).scroll(function(){

  var windowPos = $(window).scrollTop() + 70;
  $('a[href$="#ingredients"]').css({'background' : 'none', 'color' : '#9d9d9d'});

  if (windowPos > $('#ingredients').offset().top) {
    $('nav li a').css({'background' : 'none', 'color' : '#9d9d9d'});
    $('a[href$="#ingredients"]').css({'background' : '#000', 'color' : '#fff'});
  }
  if (windowPos > $('#pricing').offset().top) {
    $('nav li a').css({'background' : 'none', 'color' : '#9d9d9d'});
    $('a[href$="#pricing"]').css({'background' : '#000', 'color' : '#fff'});
  }
  if (windowPos > $('#uses').offset().top) {
    $('nav li a').css({'background' : 'none', 'color' : '#9d9d9d'});
    $('a[href$="#uses"]').css({'background' : '#000', 'color' : '#fff'});
  }
  if (windowPos > $('#story').offset().top) {
    $('nav li a').css({'background' : 'none', 'color' : '#9d9d9d'});
    $('a[href$="#story"]').css({'background' : '#000', 'color' : '#fff'});
  }
  if (windowPos > $('#faq').offset().top) {
    $('nav li a').css({'background' : 'none', 'color' : '#9d9d9d'});
    $('a[href$="#faq"]').css({'background' : '#000', 'color' : '#fff'});
  }
});

// Smooth Scrolling
$('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top - 50
        }, 2000);
        return false;
      }
   }
});

// Tab navigation
$('#resume-tabs li a').click(function(){
	$('#resume-tabs li a').removeClass('current');
	$(this).addClass('current');
});

}); // $(document).ready
