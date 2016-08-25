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

  $('.adam.modal')
    .modal('attach events', '.adam.card', 'show');
  $('.berman.modal')
    .modal('attach events', '.berman', 'show');
  $('.cassidy.modal')
    .modal('attach events', '.cassidy', 'show');
  $('.marisela.modal')
    .modal('attach events', '.marisela.card', 'show');
  $('.letticia.modal')
    .modal('attach events', '.letticia.card', 'show');
  $('.deneaqua.modal')
    .modal('attach events', '.deneaqua.card', 'show');
  $('.michael.modal')
    .modal('attach events', '.michael.card', 'show');
  $('.tanisha.modal')
    .modal('attach events', '.tanisha.card', 'show');




  // Glide Carousel
  // ==============
  $("#Glide,#Glide-tablet,#Glide-mobile")
  .glide({
    type: "carousel"
  });





});
