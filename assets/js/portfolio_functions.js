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

// Isotope


function workBelt() {
  $('.thumb-unit').click(function() {
    $('.work-belt').css('left','-100%');
    $('.work-container').fadeIn();
  });
  $('.work-return').click(function(){
    $('.thumb-wrap').fadeIn();
    $('.work-belt').css('left','0');
    $('.work-container').fadeOut();
  });
  $('#bottom-button').click(function(){
    var target = $('.thumb-wrap');
    $('html,body').animate({ scrollTop: target.offset().top - 60}, 500);
  });
}
workBelt();

// Load projects into work space
function workLoad(){
  $.ajaxSetup ({ cache: true });

  $('.thumb-unit').click(function(){
    var $this = $(this),
        newTitle = $this.find('.thumb-title').text(),
        newCat = $this.find('.thumb-cat').text(),
        newFolder = $this.data('folder'),
        spinner = '<div class="loader">Loading...</div>',
        newHTML = '/work/' + newFolder + '.html',
        target = $('#work-wrap');
    $('.project-load').html(spinner).load(newHTML);
    $('html,body').animate({ scrollTop: target.offset().top - 60}, 500);
    $('.project-title').text(newTitle);
    $('.project-cat').text(newCat);
  });
}
workLoad();

function resumeStuff(){

  $('.resume-unit').first().addClass('active-tab');
  $('.resume-tab').first().addClass('active-tab');

  $('.resume-tab').click(function(){
    var $this = $(this),
        $siblings = $this.parent().children(),
        position = $siblings.index($this);

        $('.resume-unit').removeClass('active-tab').eq(position).addClass('active-tab');
        $siblings.removeClass('active-tab');
        $this.addClass('active-tab');
  });

  $('.resume-control-next, .resume-control-prev').click(function(){
    var $this = $(this),
    activeTab = $('.resume-belt').find('.active-tab'),
    position = $('.resume-belt').children().index(activeTab),
    tabCount = $('.resume-unit').length;
    if($this.hasClass('resume-control-next')){

      if(position < tabCount -1){
        $('.active-tab').removeClass('active-tab').next().addClass('active-tab');
      } else {
        $('.resume-unit').removeClass('active-tab').first().addClass('active-tab');
        $('.resume-tab').removeClass('active-tab').first().addClass('active-tab');
      }
    } else {

      if(position === 0){
        $('.resume-unit').removeClass('active-tab').last().addClass('active-tab');
        $('.resume-tab').removeClass('active-tab').last().addClass('active-tab');
      } else {
        $('.active-tab').removeClass('active-tab').prev().addClass('active-tab');
      }
    }

  });

}
resumeStuff();

// About formal-casual slider
function aboutStuff(){
    $('.about-toggle').click(function(){
      $(this).toggleClass('toggled');
      $('.bio-belt').toggleClass('toggled');
      $('.toggle-tie').toggleClass('toggled');
      $('.toggle-sunglasses').toggleClass('toggled');
    });
}
aboutStuff();

}); // $(document).ready
