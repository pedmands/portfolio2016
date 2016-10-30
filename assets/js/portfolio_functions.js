$(document).html('<div class="loader">Loading...</div>').ready(function() {

  function fullWidth(){
    var wWidth = $(window).width();
    $('.fullwidth').css('width', wWidth);
  }
  function fullHeight(){
    var wHeight = $(window).height();
    $('.fullheight').css('height', wHeight);
  }
  if ($(window).width() < 768 ){
    $('.fullheight').css({'height':'650px'});
    fullWidth();
  } else {
    fullHeight();
    fullWidth();
  }

  $(window).resize(function(){
    if ($(window).width() < 768 ){
      $('.fullheight').css({'height':'650px'});
      fullWidth();
    } else {
      fullHeight();
      fullWidth();
    }
  });


  // Animate signature on scroll
  $(window).scroll(function(){
      $('.stroke-P').addClass('animated');
      $('.stroke-reston').addClass('animated');
      $('.stroke-cross').addClass('animated');
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
      $('.logo').toggleClass('fly-out');
      $('#menu-toggle').toggleClass('toggled');
      $('.menu-bg').toggleClass('toggled');
    return false;
  });

  // Hide/show toggle button on scroll
  var position, direction, previous;

  $(window).scroll(function(){
    if( $(this).scrollTop() >= position ){
      direction = 'down';
      if(direction !== previous){
        $('#menu-toggle').addClass('hide');
        $('.menu-bg').addClass('hide');
        $('.logo').addClass('hide');
        previous = direction;
      }
    } else {
      direction = 'up';
      if(direction !== previous){
        $('#menu-toggle').removeClass('hide');
        $('.menu-bg').removeClass('hide');
        $('.logo').removeClass('hide');
        previous = direction;
      }
    }
    position = $(this).scrollTop();
  });

// Give nav a bg when scrolled passed cover letter
function navBg(){
  var mbg = $(".menu-bg");
  mbgs = "menu-bg-sticky";
  lw = $(".lander-wrap").height();
  if( $(this).scrollTop() > lw - 80 ) {
		mbg.addClass(mbgs);
	} else {
		mbg.removeClass(mbgs);
	}
}
$(window).scroll(function() {
  navBg();
});

// Nav Highlighting
$(window).scroll(function(){
  var windowPos = $(window).scrollTop() + 60,
      bgDecorated = {'background':'#DADADA'},
      textDecorated = {'color':'#eb868c'},
      bgPlain = {'background':'none'},
      textPlain = {'color':'#DADADA'};
  $('nav li').css(bgPlain);
  $('nav li a').css(textPlain);
  $('.menu-home').css(bgDecorated);
  $('a[href$="#home"]').css(textDecorated);

  if (windowPos > $('#resume').offset().top) {
    $('nav li').css(bgPlain);
    $('nav li a').css(textPlain);
    $('.menu-resume').css(bgDecorated);
    $('a[href$="#resume"]').css(textDecorated);
  }

  if (windowPos > $('#work').offset().top) {
    $('nav li').css(bgPlain);
    $('nav li a').css(textPlain);
    $('.menu-work').css(bgDecorated);
    $('a[href$="#work"]').css(textDecorated);
  }
  if (windowPos > $('#about').offset().top) {
    $('nav li').css(bgPlain);
    $('nav li a').css(textPlain);
    $('.menu-about').css(bgDecorated);
    $('a[href$="#about"]').css(textDecorated);
  }
  if (windowPos > $('#clients').offset().top) {
    $('nav li').css(bgPlain);
    $('nav li a').css(textPlain);
    $('.menu-clients').css(bgDecorated);
    $('a[href$="#clients"]').css(textDecorated);
  }
  if (windowPos > $('#contact').offset().top) {
    $('nav li').css(bgPlain);
    $('nav li a').css(textPlain);
    $('.menu-contact').css(bgDecorated);
    $('a[href$="#contact"]').css(textDecorated);
  }

});
//Smooth Scrolling
$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top - 40
        }, 1000);
        return false;
      }
    }
  });
});

function workBelt() {
  $('.thumb-unit').click(function() {
    var target = $('#work-wrap');
    $('.work-belt').css('left','-100%');
    $('.work-container').fadeIn();

  });
  $('.work-return').click(function(){
    var target = $('#work-title');
    $('html,body').animate({ scrollTop: target.offset().top - 50}, 500);
    $('.thumb-wrap').fadeIn();
    $('.work-belt').css('left','0');
    $('.work-container').fadeOut();
  });
  $('#bottom-button').click(function(){
    var target = $('#work-title');
    $('html,body').animate({ scrollTop: target.offset().top - 50}, 500);
    $('.thumb-wrap').fadeIn();
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
        newCat = $this.find('.thumb-cat').text(),
        newFolder = $this.data('folder'),
        spinner = '<div class="loader">Loading...</div>',
        newHTML = '/work/' + newFolder + '.html',
        target = $('#work-wrap'),
        windowPos = $(window).scrollTop();
    $('.project-load').html(spinner).load(newHTML);
    $('.project-title').text(newTitle);
    $('.project-cat').text(newCat);
    if (windowPos > $('#work-title').offset().top){
      $('html,body').animate({ scrollTop: target.offset().top - 60}, 500);
    } else {
      $('html,body').animate({ scrollTop: target.offset().top }, 500);
    }
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
  var target = $('.about-toggle-box').children();
    $(target).click(function(){
      var $this = $(this);
      if ($this.hasClass('about-toggle')){
        $('.about-toggle').toggleClass('toggled');
        $('.bio-belt').toggleClass('toggled');
        $('.toggle-tie').toggleClass('toggled');
        $('.toggle-sunglasses').toggleClass('toggled');
      } else if ($this.hasClass('toggle-tie') || $this.hasClass('toggle-sunglasses')){
        if ($this.hasClass('toggled')){}
        else {
          $('.about-toggle').toggleClass('toggled');
          $('.bio-belt').toggleClass('toggled');
          $('.toggle-tie').toggleClass('toggled');
          $('.toggle-sunglasses').toggleClass('toggled');
        }
      }

    });
}
aboutStuff();

}); // $(document).ready
