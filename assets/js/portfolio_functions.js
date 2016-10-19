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

  // Toggle off-canvas nav on click
  $('#menu-toggle').click(function() {
      var transition = $.parseJSON($(this).attr('data-button'));
      $('#content').addClass(transition);
      $('#site-wrapper').toggleClass('show-nav');
      $('#menu').toggleClass('open');
      $('#content').toggleClass('faded');
    return false;
  });

  // Resume Tab navigation
  $('.resume-tab-label').click(function(){
    var whichTab = $(this).attr('data-tab');
    var currentTab = document.getElementsByClassName("open-tab");
    $(currentTab).fadeToggle(300).removeClass('open-tab');
    $("#" + whichTab).fadeToggle(500);
    $("#" + whichTab).addClass('open-tab');
    $('.resume-tab-label').removeClass('current');
    $(this).addClass('current');
  });

// Masonry Settings
// setting default for RESUME section:
$('#experience').masonry({
  itemSelector: 'section',
  columnWidth: 'section',
  gutter: 40,
  isFitWidth: true,
  isAnimated: true
});
// Resume Tab Listener for Masonry
$('#resume button').click(function(){
var whichTab = $(this).attr('data-tab');
if (whichTab === 'languages'){
  $('.resume-languages').masonry({
    itemSelector: 'li',
    gutter: 10,
    isFitWidth: true,
    isAnimated: true
  });
} else if (whichTab==='software'){
  $('.resume-software').masonry({
    itemSelector: 'li',
    gutter: 10,
    isFitWidth: true,
    isAnimated: true
  });
} else {
  $('#experience').masonry({
    // options
    itemSelector: 'section',
    columnWidth: 'section',
    gutter: 40,
    isFitWidth: true,
    isAnimated: true
  });
}// if else
});

}); // $(document).ready
