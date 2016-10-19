// Masonry settings
jQuery(document).ready(function($){
  $('#experience').masonry({
    // options
    itemSelector: 'section',
    columnWidth: 'section',
    gutter: 40,
    isFitWidth: true,
    isAnimated: true
  });
// Resume
$('#resume button').click(function(){
  var whichTab = $(this).attr('data-tab');

    if (whichTab === 'languages'){
    $('#languages').masonry({
      itemSelector: 'li',
      columnwidth: "25%",
      gutter: 10,
      isFitWidth: true,
      isAnimated: true
    });
  }else if (whichTab==='software'){
    $('#software').masonry({
      itemSelector: 'li',
      columnwidth: "25%",
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




});
