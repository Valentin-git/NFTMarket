$('.pictur-mini-carous').slick({
  centerMode: true,
  // variableWidth: true,
  // centerPadding: '60px',
  slidesToShow: 16,
  // infinite: true,
  speed: 300,
  easing: 'ease',
  // arrows: true,
  // dots: true,
  // autoplay: true,
  responsive: [
    {
      breakpoint: 1399.99,
      settings: {
        // arrows: false,
        // centerMode: true,
        // centerPadding: '40px',
        slidesToShow: 12
      }
    },
    {
      breakpoint: 991.98,
      settings: {
        // arrows: false,
        // centerMode: true,
        // centerPadding: '40px',
        slidesToShow: 8
      }
    },
    {
      breakpoint: 767.98,
      settings: {
        // arrows: false,
        // centerMode: true,
        // centerPadding: '40px',
        slidesToShow: 6
      }
    },
    {
      breakpoint: 575.98,
      settings: {
        // arrows: false,
        // centerMode: true,
        // centerPadding: '40px',
        slidesToShow: 4
      }
    },
    {
      breakpoint: 418,
      settings: {
        // arrows: false,
        // centerMode: true,
        // centerPadding: '40px',
        slidesToShow: 3
      }
    }
  ]
});

$('.hottest-sale-offers-carous-min').slick({
  // centerMode: true,
  // variableWidth: true,
  // centerPadding: '150px',
  slidesToShow: 1,
  variableWidth: true,
  infinite: true,
  speed: 300,
  easing: 'ease',
  // arrows: true,
  // dots: true,
  autoplay: false,

});

$('.auctions-carousel').slick({
  centerMode: true,
  // variableWidth: true,
  centerPadding: '150px',
  slidesToShow: 4,
  // variableWidth: true,
  infinite: true,
  speed: 300,
  easing: 'ease',
  // arrows: true,
  // dots: true,
  // autoplay: true,
  responsive: [
    {
      breakpoint: 1399.99,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 991.98,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 767.98,
      settings: {
        slidesToShow: 2,
        centerPadding: '90px',
      }
    },
    {
      breakpoint: 575.98,
      settings: {
        slidesToShow: 2,
        centerPadding: '50px',
      }
    },
    {
      breakpoint: 417,
      settings: {
        slidesToShow: 1,
        centerPadding: '90px',
      }
    }
  ]
});
