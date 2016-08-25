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





});
