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

$('').slick({
  centerMode: true,
  // variableWidth: true,
  // centerPadding: '150px',
  slidesToShow: 2,
  infinite: true,
  speed: 300,
  easing: 'ease',
  // arrows: true,
  // dots: true,
  autoplay: true,

});
