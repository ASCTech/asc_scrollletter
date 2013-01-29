(function ($) {
  Drupal.behaviors.scollLetter = {
    attach: $(function () {
              $("a.letter-select").click(function(){
                var letter = $(this).html();
                $("a.letter-select").css('color', '#bb0000')
                $(this).css('color', '#000000')
                var firstItem = $("a." + letter).filter(':first');
              var top = firstItem.offset().top;
              $("body,html").animate({scrollTop: top}, 400);
              });

              $("#backtotop").click(function(){
                var top = $('body').top;
                $("body,html").animate({scrollTop: top}, 400);
              });
            })
          };
  })(jQuery);
