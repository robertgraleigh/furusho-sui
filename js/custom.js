/**
 * Created by karasek on 8/25/16.
 */

$(document).ready(function() {



  // Semantic UI
  // ===========
  $('.ui.accordion').accordion();
  console.log("Hello world");

  // Modal Events

  $('.infant-frenectomy.modal')
    .modal('setting', 'closable', true)
    .modal('attach events', '#infant-frenectomy', 'show');

  $('.fillings.modal')
    .modal('setting', 'closable', true)
    .modal('attach events', '#fillings', 'show');

  // Glide Carousel
  // ==============
  $("#Glide,#Glide-tablet,#Glide-mobile")
  .glide({
    type: "carousel"
  });





});
