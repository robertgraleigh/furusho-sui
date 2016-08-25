/**
 * Created by karasek on 8/25/16.
 */

$(document).ready(function() {



  // Semantic UI
  // ===========
  $('.ui.accordion').accordion();

  // Modal Events

  $('.Infant.modal')
    .modal('setting', 'closable', true)
    .modal('attach events', '#infant-frenectomy', 'show');

  $('.Fillings.modal')
    .modal('setting', 'closable', true)
    .modal('attach events', '#fillings', 'show');
  $('.Crowns.modal')
    .modal('setting', 'closable', true)
    .modal('attach events', '#crowns', 'show');
  $('.Space.modal')
    .modal('setting', 'closable', true)
    .modal('attach events', '#space-maintainers', 'show');
  $('.Mouth.modal')
    .modal('setting', 'closable', true)
    .modal('attach events', '#mouth-guards', 'show');
  $('.Pulpotomy.modal')
    .modal('setting', 'closable', true)
    .modal('attach events', '#pulpotomy', 'show');
  $('.Orthodontic.modal')
    .modal('setting', 'closable', true)
    .modal('attach events', '#orthodontic-treatment', 'show');
  $('.Sealants.modal')
    .modal('setting', 'closable', true)
    .modal('attach events', '#sealants', 'show');
  $('.Digital.modal')
    .modal('setting', 'closable', true)
    .modal('attach events', '#digital-x-rays', 'show');



  // Glide Carousel
  // ==============
  $("#Glide,#Glide-tablet,#Glide-mobile")
  .glide({
    type: "carousel"
  });





});
