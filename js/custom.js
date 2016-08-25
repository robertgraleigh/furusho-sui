/**
 * Created by karasek on 8/25/16.
 */

$(document).ready(function() {



  // Semantic UI
  // ===========
  $('.ui.accordion').accordion();
  console.log("Hello world");

  // Modal Events

  $('.Infant.modal')
    .modal('setting', 'closable', true)
    .modal('attach events', '#infant-frenectomy', 'show');

  $('.Fillings.modal')
    .modal('setting', 'closable', true)
    .modal('attach events', '#fillings', 'show');

  // Glide Carousel
  // ==============
  $("#Glide,#Glide-tablet,#Glide-mobile")
  .glide({
    type: "carousel"
  });


  // Slick Carousel
  // ==============
  $('.reviews__slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 4000
  });
  
});
