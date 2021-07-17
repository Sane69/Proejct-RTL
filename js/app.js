$(document).ready(function() {
  $('.state__slider').slick({
    dots: true,
    responsive: [
      {
        breakpoint: 1060,
        settings: {
          arrows: false
        }
      },
    ]
  });
  $('.features__slider').slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: false,
    dots: true,
    responsive: [
      {
        breakpoint: 1020,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 650,
        settings: {
          centerMode: true,
          centerPadding: '25px',
          slidesToShow: 1
        }
      }
    ]
  });
  $('.comment__slider').slick({
    slidesToShow: 4,
    slidesToScroll: 3,
    arrows: false,
    dots: true,
    responsive: [
      {
        breakpoint: 1020,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 650,
        settings: {
          centerMode: true,
          centerPadding: '25px',
          slidesToShow: 1
        }
      }
    ]
  });

  $('.header__burger').click(function() {
    $('.header__burger, .header__mobile').toggleClass('active');
    $('.header__nav.active').toggleClass('.hide')
    $('body').toggleClass('lock');
  });

  $('.burger__menu').click(function() {
    $('.burger__menu, .burger__menu--block').toggleClass('active');
  });

  $('.tour__nav--burger').click(function(e) {
    e.preventDefault()
    $('.tour__nav--burger img, .tour__nav ul').toggleClass('active');
  })
  $('.tour__nav--burger').click(function(e) {
    e.preventDefault()
    $('.tour__nav').toggleClass('fixed');
  })

  $('#integ_show').click(function(e) {
    e.preventDefault();
    $('.integ__block:nth-child(3), .integ__block:nth-child(4)').toggleClass('active')
    if($('.integ__block:nth-child(3), .integ__block:nth-child(4)').hasClass('active')) {
      $(this).text('Less more integrations');
    } else {
      $(this).text('See more integrations');
    }
  });
  $('#integ_show_rtl').click(function(e) {
    e.preventDefault();
    $('.integ__block:nth-child(3), .integ__block:nth-child(4)').toggleClass('active')
  });


  $('.tabs__block--item').click(function() {
    if ($(this).next('.tabs__block--content').hasClass('show')) {
      $(this).next('.tabs__block--content').removeClass('show').slideUp();
    } else {
      $('.tabs__block--content').removeClass('show').slideUp();
      $('.tabs__block--itemContent span').removeClass('fa-minus').addClass('fa-plus');
      $('.collapse').removeClass('active').slideUp();
      $(this).next('.tabs__block--content').addClass('show').slideDown();
    }
  })

  $('.tabs__block--itemContent').click(function(e) {
    e.preventDefault();
    if ($(this).next('.collapse').hasClass('active')) {
      $(this).next('.collapse').removeClass('active').slideUp();
      $(this).children('span').removeClass('fa-minus').addClass('fa-plus');
    } else {
      $('.tabs__block--itemContent span').removeClass('fa-minus').addClass('fa-plus');
      $('.collapse').removeClass('active').slideUp();
      $(this).next('.collapse').addClass('active').slideDown();
      $(this).children('span').removeClass('fa-plus').addClass('fa-minus');
    }
  })

  $('.play').click(function() {
    $('.iframe, .iframe iframe').addClass('active');
    $('body').addClass('lock');
  });
  $('.iframe').click(function() {
    $('.iframe, .iframe iframe').removeClass('active');
    $(".iframe iframe").attr("src", $(".iframe iframe").attr("src"));
    $('body').removeClass('lock');
  })

  $('.close').click(function() {
    $('.iframe').removeClass('active');
    $(".iframe iframe").attr("src", $(".iframe iframe").attr("src"));
    $('body').removeClass('lock');
  });

  $(window).scroll(function () {
    if($(this).scrollTop() > 0) {
      $('.header__nav').addClass('active');
      $('#features__lang').addClass('active')
    } else {
      $('.header__nav').removeClass('active');
      $('#features__lang').removeClass('active')
    }
  });
})
