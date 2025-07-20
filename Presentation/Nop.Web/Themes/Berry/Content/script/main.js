$(document).ready(function () {

  $('.home-page-category-grid .item-grid').owlCarousel({
    items: 5,
    margin: 15,
    autoplay: true,
    nav: true,
    loop: true,
    autoplayTimeout: 3000,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1
      },
      576: {
        items: 2
      },
      768: {
        items: 3
      },
      1200: {
        items: 3
      },
      1400: {
        items: 4
      }

    }
  });

  $('#homepage-promotion').owlCarousel({
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    items: 1,
    margin: 15,
    loop: true,
    autoplay: true,
    autoplayTimeout: 8000,
     responsive: {
      0: {
        items: 1
      },
      576: {
        items: 2
      },
      768: {
        items: 3
      },
      1200: {
        items: 3
      },
      1400: {
        items: 4
      }

    }
  });

  $('.related-products-grid .item-grid,.also-purchased-products-grid .item-grid').owlCarousel({
    items: 4,
    margin: 14,
    loop: true,
    autoplay: true,
    autoplayTimeout: 8000,
    nav: true,
    responsive: {
      0: {
        items: 1
      },
      576: {
        items: 2
      },
      768: {
        items: 3
      },
      1200: {
        items: 3
      },
      1300: {
        items: 4
      },
      1400: {
        items: 4
      }

    }
  });

  $('#picture-thumbs').owlCarousel({
    items: 5,
    margin: 15,
    loop: true
  });

  if ($(window).width() < 992) {
    $('.side-2 button[data-toggle="collapse"]').addClass('collapsed');
    $('.collapse.show').removeClass('show')
  };
});

//scroll to top
$(window).scroll(function () {
  if ($(this).scrollTop() > 100) {
    $('.scrollup').fadeIn();
  } else {
    $('.scrollup').fadeOut();
  }
});
$('.scrollup').click(function () {
  $("html, body").animate({ scrollTop: 0 }, 1000);
  return false;
});

$(document).ready(function () {
    $('.remove-button').on('click', function () {
        console.log('clicked');
        $(this).siblings('label').click();
        $('.update-cart-button').click()
    })
});
