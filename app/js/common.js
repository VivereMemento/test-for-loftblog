$(document).ready(function () {

  $('.courses__title-link').hover(function() {

    var container = $(this).closest('.courses__item'),
        line = container.find('.courses__green-line');

    $(line).css({'opacity' : '1'});

    }, function() {
        $('.courses__green-line').css({'opacity' : '0'});
      });

  //green-curtain
    
  $('.label').on('click', function(e){
  var $this = $(this),
        container = $(this).closest('.courses__item'),
        curtain = container.find('.green-curtain');

    curtain.fadeIn();
    container.delay(1000).fadeOut();
  });
}); //end ready