$(document).html('<div class="loader">Loading...</div>').ready(function() {

  // set the height of any div with class 'fullheight' to viewport height.
  function fullHeight(){
    var wHeight = $(window).height();
    $('.fullheight').css('height', wHeight);
  }
  fullHeight();

  //set with width of elements with class 'fullwidth' to viewport width.
  function fullWidth(){
    var wWidth = $(window).width();
    $('.fullwidth').css('width', wWidth);
  }
fullWidth();

  // adjust height of .fullheight & .fullheight elements on window resize.
  $(window).resize(function() {
  	fullWidth();
    fullHeight();
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

  // // Resume Tab navigation
  // $('.resume-tab-label').click(function(){
  //   var whichTab = $(this).attr('data-tab');
  //   var currentTab = document.getElementsByClassName("open-tab");
  //   $(currentTab).fadeToggle(300).removeClass('open-tab');
  //   $("#" + whichTab).fadeToggle(500);
  //   $("#" + whichTab).addClass('open-tab');
  //   $('.resume-tab-label').removeClass('current');
  //   $(this).addClass('current');
  // });

// Masonry Settings
// setting default for RESUME section:
$('#experience').masonry({
  itemSelector: 'section',
  columnWidth: 'section',
  gutter:25,
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
});// masonry

function workBelt() {
  $('.thumb-unit').click(function() {
    $('.work-belt').css('left','-100%');
    $('.work-container').fadeIn();
  });
  $('.work-return').click(function(){
    $('.work-belt').css('left','0');
    $('.work-container').fadeOut();
  });
}
workBelt();

// Load projects into work space
function workLoad(){
  $.ajaxSetup ({ cache: true });

  $('.thumb-unit').click(function(){
    var $this = $(this),
        newTitle = $this.find('.thumb-title').text(),
        newFolder = $this.data('folder'),
        spinner = '<div class="loader">Loading...</div>',
        newHTML = '/work/' + newFolder + '.html';
    $('.project-load').html(spinner).load(newHTML);
$('.project-title').text(newTitle);
  });
}
workLoad();

}); // $(document).ready
