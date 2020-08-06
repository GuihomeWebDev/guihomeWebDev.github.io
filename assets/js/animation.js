
  function cv(){
    if($(window).width() < 768){
      window.open("CvGLebot.pdf", "_blank");
    }else {
      document.getElementById("myModal").style.display = "block";
      document.getElementById("frame").style.display = "block";
    }
  };
  function smoothScroll(anchorId){
    $('html, body').animate({
      scrollTop: $(anchorId).offset().top
    }, 800, function(){
      window.location.hash = anchorId;
    });
  };

  $('#home').on('click', function(){
    var toto = $(this).attr('class');
    toto = toto.split(' ')[0];
    if ($('#'+toto).css('opacity') == 0) {
      $('#'+toto).stop().animate({opacity: '1'});
    }else {
      $('#'+toto).stop().animate({opacity: '0'});
    }
  });
