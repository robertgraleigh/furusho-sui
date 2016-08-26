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

    //Team Member Modals
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
  //Request Appointment modal
  $('#request-appt-modal')
    .modal('attach events', '.appt-modal-pop', 'show');
  $('.close').on("click", function() {
      $(this).parents('div').hide();
  })


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

  $('.marquee__slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false
  });

  $('.marquee__slider--tour').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 4000
  });

  $('.team-slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    prevArrow: "<button type='button' class='slick-prev team-slick-nav'>Previous</button>",
    nextArrow: "<button type='button' class='slick-next team-slick-nav'>Next</button>",
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 6000
        }
      }
    ]
  });
  
});
