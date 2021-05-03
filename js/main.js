(function($) {

 $(document).ready(function(){
   if($('.mHc').length){
    $('.mHc').matchHeight();
  };
});


 $('div.fl-tabs button').click(function(){
  var tab_id = $(this).attr('data-tab');

  $('div.fl-tabs button').removeClass('current');
  $('.fl-tab-content').removeClass('current');

  $(this).addClass('current');
  $("#"+tab_id).addClass('current');
});


})(jQuery);