$(document).ready(function() {
    
        //стрелка в menu-city вверх и вниз
        $('.menu-city-container').on('click', function() {
            $(this).toggleClass('menu-city-container_active');
            if ($(this).hasClass('menu-city-container_active')) {
            $(this).css({"background-image": "url(icons/08_open.png)"});
            }else {
                $(this).css({"background-image": "url(icons/08.svg)"});
            }  
        })  
        $('.menu-city-container').on('focusout', function() {  
                $(this).removeClass('menu-city-container_active');   
                $(this).css({"background-image": "url(icons/08.svg)"});
            })  
            
    //меню раскрывающееся десктоп
$('.menu-items__names-courses').on('mouseenter', function() {
    $('.menu-items__courses-overlay').css('display', 'flex'); 
    $('.menu-items__courses').css('display', 'flex');    

    $('.menu-items__courses').on('mouseleave', function() {
            $(this).css('display', 'none');     
    })   
    $('.menu-items__names-courses').on('mouseleave', function() {
        $('.menu-items__courses-overlay').css('display', 'none'); 
    })
});
        
       //меню раскрывающееся мобилка
    function HideMenu() {
        $('.menu-open__stripes').css({"background": "url(icons/07.svg)", "background-repeat-x": "no-repeat", "background-repeat-y": "no-repeat"});     
        $('.menu-open__items').css('display', 'none');
        $('.menu-open__overlay').css('display', 'none');
    }
    
    $('.menu-open__stripes').on('click', function() {
        $(this).toggleClass('menu-open_active');
        if ($(this).hasClass('menu-open_active')) {
            $('.menu-open__stripes').css({"background-image": "url(icons/555.png)", "background-repeat-x": "no-repeat", "background-repeat-y": "no-repeat"});
            $('.menu-open__items').css('display', 'block');
            $('.menu-open__overlay').css('display', 'block');
        }else {
            HideMenu();  
            $('.menu-open__bigdown').css('transform', 'rotate(90deg)'); 
            $('.menu-open__kategorii').css('display', 'none');     
        }  
    });
    
    $('.menu-open__overlay').on('click', function() {
            HideMenu();
            $('.menu-open__stripes').removeClass('menu-open_active');
            $('.menu-open__bigdown').css('transform', 'rotate(90deg)');
            $('.menu-open__kategorii').css('display', 'none');
    });
    
    //открытие категорий
    $('.menu-open__bigdown').on('click', function() {
        $('.menu-open__bigdown').css('transform', 'rotate(90deg)');
        $('.menu-open__kategorii').slideUp(400);
        $(this).toggleClass('menu-open__bigdown_active');
        if ($(this).hasClass('menu-open__bigdown_active')) {
            $(this).css('transform', 'rotate(270deg)');
            $(this).parent().next('.menu-open__kategorii').slideDown();
        }else{
            $(this).css('transform', 'rotate(90deg)');
            $(this).parent().next('.menu-open__kategorii').slideUp();
        }
    });
    
    //выбор города в мобилке
    
    $(window).on('load resize change', function(){
        if ($(window).width()<992) {
            $('.menu-city-container').appendTo('.menu-city__mobile');
            $('.menu-city-container').addClass('menu-city-container_mobile');
            $('.menu-city-container').removeClass('menu-city-container_desktop');
    
        }
        else {
            $('.menu-city-container').insertAfter('.menu-logo');
            $('.menu-city-container').addClass('menu-city-container_desktop');
            $('.menu-city-container').removeClass('menu-city-container_mobile');
        }
    });


//мобильная кнопка смотреть курсы  из MAIN INFO OF COURSE CARD SECTION 
    
$(window).on('load resize change', function(){
    if ($(window).width()>1199) {
        $('.commerc_info_into_card_course_order_online').addClass('commerc_info_into_card_course_order_online_desktop');
        $('.commerc_info_into_card_course_order_online').removeClass('commerc_info_into_card_course_order_online_mobile');
    }
    else {
        $('.commerc_info_into_card_course_order_online').addClass('commerc_info_into_card_course_order_online_mobile');
        $('.commerc_info_into_card_course_order_online').removeClass('commerc_info_into_card_course_order_online_desktop');
        $('.commerc_info_into_card_course_order_online').insertAfter('.commerc_info_into_card_course');
        $('.rating_card_course').insertAfter('.share_info_card_course');
        $('#main_content_card_of_course_down_page').insertAfter('.rating_card_course');
    }
});

//второй баннер
    
$(window).on('load resize change', function(){
    if ($(window).width()>870) {
        $('.place_second_banner_sidebar_mobile').insertAfter('.place_first_banner_sidebar_mobile');
    }
    else {
        $('.place_second_banner_sidebar_mobile').appendTo('.mobile_banners');
    }
});
});


// Слайдеры в карточке курса
$('.big_image_card_course').slick({
      dots: false,
      infinite: false,
      arrows: false,
      speed: 300,
      lazyLoad: 'ondemand',
      slidesToShow: 1,
      slidesToScroll: 1,
      asNavFor: '.navigation_image_card_course'
    });
$('.navigation_image_card_course').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      asNavFor: '.big_image_card_course',
      dots: false,
      arrows: true,
      prevArrow: '<img src="img/arrow-left.png" class="slider-arrow-left">',
      nextArrow: '<img src="img/arrow-right.png" class="slider-arrow-right">',
      draggable: true,
      centerMode: false,
      focusOnSelect: true,
      lazyLoad: 'progressive',
      responsive: [
          {
              breakpoint: 414,
              settings: {
                  slidesToShow: 4,
                  slidesToScroll : 1,
                  prevArrow: '<img src="img/arrow-mobile-left.png" class="slider-arrow-left">',
                  nextArrow: '<img src="img/arrow-mobile-right.png" class="slider-arrow-right">'
              }
          }
          ]
    });

$('.prepodavatel_slider_into_card_course').slick({
      dots: false,
      infinite: true,
      arrows: false,
      speed: 300,
      cssEasy: 'linear',
      lazyLoad: 'ondemand',
      autoplay:true,
      autoplaySpeed: 3000,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
                        {
                  breakpoint: 550,
                  settings: {
                      slidesToShow: 2,
                      slidesToScroll: 1,
                  }
              }
          ]
    });

$('.slider_bottom__container_slider').slick({
      dots: true,
      infinite: true,
      arrows: true,
      cssEasy: 'linear',
      lazyLoad: 'ondemand',
      slidesToShow: 3,
      prevArrow: '<img src="img/arrow-left.png" class="slider-arrow-left">',
      nextArrow: '<img src="img/arrow-right.png" class="slider-arrow-right">',
      slidesToScroll: 1,
      responsive: [
          {
              breakpoint: 1600,
              settings: {
                  slidesToShow: 2,
                  slidesToScroll : 1
              }
          },
              {
                  breakpoint: 899,
                  settings: {
                      slidesToShow: 1,
                      slidesToScroll: 1
                  }
              }
          ]
    });

$('.works_students_up_curse_card_into').slick({
      prevArrow: '<img src="img/arrow-mobile-left.png" class="slider-arrow-left">',
      nextArrow: '<img src="img/arrow-mobile-right.png" class="slider-arrow-right">',
      dots: false,
      arrows: true,
      focusOnSelect: true,
      lazyLoad: 'progressive',
      responsive: [
                        {
                  breakpoint: 200000,
                  settings: 'unslick'
                    }
              ,
                        {
                  breakpoint: 890,
                  settings: {
                      slidesToShow: 2,
                      slidesToScroll: 1
                        }
                    }
          ]
      });
$(window).on('load resize change', function(){
//fixed transform grids to slider slick
if ($(window).width() < 891) {
      var height_arrows_mobile = $('.works_students_up_curse_card_into .slick-slide img').height();
var delta_arrows_mobile = (height_arrows_mobile - 64)/2;
$('.works_students_up_curse_card_into .slick-arrow').css({
      'top' : delta_arrows_mobile ,
});
}
// fixed mobile arrows in navigation slider
      if ($(window).width() < 414) {
      var height_arrows_mobile_nav = $('.navigation_image_card_course .slick-slide img').height();
var delta_arrows_mobile_nav = (height_arrows_mobile_nav - 64)/2;
$('.navigation_image_card_course .slick-arrow').css({
      'top' : delta_arrows_mobile_nav ,
});
}
});

if ($(window).width() < 1200) {
    $('.banner_content_card_of_course').appendTo('.laptop_banners');
}
if ($(window).width() < 768) {
    $('#main_content_card_of_course_down_page').appendTo('.megabanner');
}
