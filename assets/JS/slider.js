$('.slide').slick({
    dots:true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:false,
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    responsive: [
        {
          breakpoint: 739,
          settings: {
            dots:false,
          }
        },
    ]
    
});

// place slider

$('.content__place-slide').slick({
    slidesToShow: 5,
    slidesToScroll: 2,
    infinite: false,
    prevArrow:
    `<button type='button' class='slick-prev pull-left'><i class="fas fa-chevron-left"></i></button>`,
    nextArrow:
    `<button type='button' class='slick-next pull-right'><i class="fas fa-chevron-right"></i></button>`,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 2,
          }
        },
        {
            breakpoint: 739,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          },
    ]
        
});

// banner
$('.content__suggestions--banner').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: false,
    prevArrow:
    `<button type='button' class='slick-prev pull-left'><i class="fas fa-chevron-left"></i></button>`,
    nextArrow:
    `<button type='button' class='slick-next pull-right'><i class="fas fa-chevron-right"></i></button>`,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 2,
          }
        },
        {
            breakpoint: 739,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          },
    ]
});

// discover 

$('.content__discover-banner').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: false,
    prevArrow:
    `<button type='button' class='slick-prev pull-left'><i class="fas fa-chevron-left"></i></button>`,
    nextArrow:
    `<button type='button' class='slick-next pull-right'><i class="fas fa-chevron-right"></i></button>`,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
        {
            breakpoint: 739,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          },
    ]
});

// instruct
$('.content__instruct-banner').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: false,
    prevArrow:
    `<button type='button' class='slick-prev pull-left'><i class="fas fa-chevron-left"></i></button>`,
    nextArrow:
    `<button type='button' class='slick-next pull-right'><i class="fas fa-chevron-right"></i></button>`,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },
        {
            breakpoint: 739,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          },
        
    ]
});