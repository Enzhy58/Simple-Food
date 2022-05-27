$(function(){
  $('.reviews__slider').slick({
    dots: true,
    prevArrow: '<button type="button" class="slick-prev"><img src="images/icons/prev.svg" alt=""></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="images/icons/next.svg" alt=""></button>'
  });
  var mixer = mixitup('.categories__list');
});

