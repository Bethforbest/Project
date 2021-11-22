if(window.matchMedia('(min-width: 1366px)').matches) {
  $('.partners__slider').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000
  });
}
if(window.matchMedia('(min-width: 768px) and (max-width: 1366px)').matches) {
  $('.partners__slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000
  });
}

if(window.matchMedia('(min-width: 375px) and (max-width: 768px)').matches) {
  $('.partners__slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000
  });
}