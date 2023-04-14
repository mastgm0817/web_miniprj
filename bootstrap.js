// 부트스트랩 자바스크립트 파일에서 가져옴
$(document).ready(function(){
    $('.navbar-collapse a').click(function(){
      $(".navbar-collapse").collapse('hide');
    });
  });

  $(document).ready(function(){
    var slideInterval = setInterval(nextSlide, 3000);
    var slideCount = $('.card-deck .card').length;
    var slideWidth = $('.card-deck .card').width();
    var slideHeight = $('.card-deck .card').height();
    var sliderUlWidth = slideCount * slideWidth;
  
    $('.card-deck-wrapper').css({ width: slideWidth