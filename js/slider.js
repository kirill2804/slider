
$(document).ready(function(){
  
  $('.slider__list').removeClass('slider__list_rend')  

  const animNextSlide = 6;
  const autoplaySlide = (animNextSlide * 1000);


  $('.slider__list').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
      autoplay: true,
      autoplaySpeed: autoplaySlide,
      infinite: true
  });

  $(".slider__tab").click(function () {
      var self = $(this).index()
      $('.slider__tab').removeClass("slider__tab_active");
      $('.slider__tab').eq(self).addClass('slider__tab_active')
      $('.slider__list').slick('goTo', self)
  })



  const anim = document.querySelector('#anim');
  anim.setAttribute("dur", animNextSlide + "s")

  $('.slider__list').on('beforeChange', function(event, slick, currentSlide, nextSlide){
      $('.slider__tab').removeClass("slider__tab_active");
      $('.slider__tab').eq(nextSlide).addClass('slider__tab_active')

      $('.slider__tab').removeClass("slider__tab_visible");
      $('.slider__tab').eq(nextSlide).addClass('slider__tab_visible')

      anim.beginElement(); 
  });


})


